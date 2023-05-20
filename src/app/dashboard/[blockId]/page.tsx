/* eslint-disable react/no-children-prop */
"use client";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  CardFooter,
  Button,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/acai.css";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

export default function Block({
  params: { blockId },
}: {
  params: { blockId: string };
}) {
  const [endPoint, setEndpoint] = useState(blockId);
  const [method, setMethod] = useState("GET");
  const [payload, setPayload] = useState<any>();
  const [collectionId, setCollectionId] = useState("");
  const [documentId, setDocumentId] = useState("");

  const [response, setResponse] = useState<any>();

  const handleSendAPIRequest = async () => {
    const requestOptions = { method: "GET", headers: {} };
    if (method) requestOptions.method = method;
    requestOptions.headers = { "Content-Type": "application/json" };

    if (payload && ["POST", "PATCH"].includes(method))
      requestOptions.body = payload.json;

    let HOST = `http://localhost:3001/`;
    let queryString = `${blockId}`;
    if (method === "GET" && collectionId.trim() !== "") {
      queryString = `${queryString}/collection/${collectionId}`;
      setEndpoint(queryString);
    }

    if (method === "PATCH" && documentId.trim() !== "") {
      queryString = `${queryString}/document/${documentId}`;
      setEndpoint(queryString);
    }

    try {
      const response = await fetch(`${HOST}${queryString}`, requestOptions);

      const data = await response.json();

      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Tabs colorScheme="gray">
        <Container maxWidth={"container.lg"}>
          <TabList borderBottom={0}>
            <Tab>Overview</Tab>
            <Tab>Playground</Tab>
            <Tab>Settings</Tab>
          </TabList>
        </Container>
        <Divider opacity={30} />

        <TabPanels>
          <TabPanel></TabPanel>
          <TabPanel>
            <Container maxWidth={"container.lg"}>
              <Box marginBlock={10}>
                <Text fontSize={"3xl"} fontWeight={"semibold"}>
                  Playground
                </Text>
              </Box>
              <Box marginBlock={10}>
                <Card>
                  <CardHeader>
                    <Text fontSize="xl" fontWeight="semibold">
                      Query your block
                    </Text>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      Make requests to your blocks API endpoints to get / set
                      your data.
                    </Text>
                    <Divider marginBlock="5" />

                    <Box display={"flex"} alignItems={"center"} gap={2}>
                      <Box flex={0.25}>
                        <Select
                          variant="filled"
                          value={method}
                          onChange={(e) => {
                            setMethod(e.target.value);
                            setResponse(undefined);
                            setPayload(undefined);
                          }}
                        >
                          <option value="GET">GET</option>
                          <option value="POST">POST</option>
                          <option value="PATCH">PATCH</option>
                          <option value="DELETE">DELETE</option>
                        </Select>
                      </Box>
                      <Box flex={0.75}>
                        <InputGroup size="md">
                          <InputLeftAddon children="blocks.com/" />
                          <Input value={endPoint} />
                        </InputGroup>
                      </Box>
                    </Box>
                  </CardBody>
                </Card>
              </Box>

              {response && (
                <Card>
                  <CardBody overflow={"auto"} maxHeight={300}>
                    <JSONPretty data={response}></JSONPretty>
                  </CardBody>
                </Card>
              )}

              <Box marginBlock={10}>
                <Card>
                  <CardBody>
                    {method === "GET" && (
                      <Tabs variant="enclosed">
                        <TabList mb="1em">
                          <Tab>All Data</Tab>
                          <Tab>By Record</Tab>
                        </TabList>
                        <TabPanels>
                          <TabPanel>
                            <FormControl>
                              <FormLabel>Collection ID</FormLabel>
                              <Input
                                type="text"
                                placeholder="avengers"
                                value={collectionId}
                                onChange={(e) =>
                                  setCollectionId(e.target.value)
                                }
                              />
                            </FormControl>
                          </TabPanel>
                          <TabPanel></TabPanel>
                        </TabPanels>
                      </Tabs>
                    )}
                    {method === "PATCH" && (
                      <Tabs variant="enclosed">
                        <TabList mb="1em">
                          <Tab>Document ID</Tab>
                        </TabList>
                        <TabPanels>
                          <TabPanel>
                            <FormControl>
                              <FormLabel>Document ID</FormLabel>
                              <Input
                                type="text"
                                placeholder="avengers"
                                value={documentId}
                                onChange={(e) => setDocumentId(e.target.value)}
                              />
                            </FormControl>
                          </TabPanel>
                          <TabPanel></TabPanel>
                        </TabPanels>
                      </Tabs>
                    )}
                  </CardBody>
                  <CardFooter>
                    <HStack>
                      <Text fontSize={"sm"}>
                        Learn more about filter & query
                      </Text>
                      <Button onClick={handleSendAPIRequest}>Send</Button>
                    </HStack>
                  </CardFooter>
                </Card>
              </Box>

              {["POST", "PATCH"].includes(method) && (
                <Card>
                  <CardBody>
                    <JSONInput
                      id="request_body"
                      locale={locale}
                      width="100%"
                      onChange={(payload: any) => setPayload(payload)}
                      height={"330px"}
                    />
                  </CardBody>
                  <CardFooter>
                    <Button onClick={handleSendAPIRequest}>Send</Button>
                  </CardFooter>
                </Card>
              )}
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
