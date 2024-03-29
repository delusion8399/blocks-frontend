"use client";
import { useEffect } from "react";
import {
  Box,
  Container,
  Divider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Image from "next/image";
import box from "../components/assets/box.svg";
import AddBlock from "./components/add-block";
import BlocksGrid from "./components/blocks-grid";
import { v4 } from "uuid";
import DB from "../utils/db";

export default async function Dashboard() {
  useEffect(() => {
    if (DB.retrieveData("UUID")) {
    } else {
      DB.storeData("UUID", v4());
    }
  }, []);

  return (
    <>
      <Tabs colorScheme="gray">
        <TabList>
          <Container maxWidth={"container.lg"}>
            <Tab>Overview</Tab>
          </Container>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Container maxWidth={"container.lg"}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={10}
              >
                <Image src={box} alt="block" height={100} width={100} />
                <AddBlock />
              </Box>

              <Divider size="lg" marginBlock={10} />

              <BlocksGrid />
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
