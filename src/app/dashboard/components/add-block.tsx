/* eslint-disable react/no-children-prop */
import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Switch,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import short from "short-uuid";
import { v4 as uuidv4 } from "uuid";
import BlockRepository from "../../api/repositories/block-repository";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Block } from "@/app/types/block.types";
import DB from "@/app/utils/db";

export default function AddBlock() {
  const [custom, setCustom] = useState(false);
  const [blockName, setBlockName] = useState("");
  const [customId, setCustomId] = useState<string>(short.generate());
  const [apiKey, setApiKey] = useState(uuidv4);
  const [_protected, setProtected] = useState(false);
  const queryClient = useQueryClient();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutateAsync } = useMutation({
    mutationKey: ["add-block"],
    mutationFn: (block: Block) => {
      return BlockRepository.create(block);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch-all-blocks"] });
    },
  });

  const handleCreateBlock = async () => {
    try {
      await mutateAsync({
        blockId: customId,
        ...(_protected && { apiKey }),
        blockName,
        isProtected: _protected,
        userIdentity: DB.retrieveData("UUID"),
      });
    } catch (error) {
      console.log(error);
    }
    onClose();
  };

  return (
    <>
      <Button leftIcon={<AddIcon />} onClick={onOpen}>
        Add Block
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Block</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <InputGroup size="md">
                <InputLeftAddon children="Block Name" />
                <Input
                  value={blockName}
                  onChange={(e) => setBlockName(e.target.value)}
                />
              </InputGroup>
              <FormControl
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <FormLabel htmlFor="customId" mb="0">
                  Custom ID?
                </FormLabel>
                <Switch
                  id="customId"
                  checked={custom}
                  onChange={() => setCustom(!custom)}
                />
              </FormControl>

              <InputGroup size="md">
                <InputLeftAddon children="blocks.com/" />
                <Input
                  disabled={!custom}
                  value={customId}
                  onChange={(e) => setCustomId(e.target.value)}
                />
              </InputGroup>

              <FormControl
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <FormLabel htmlFor="protected" mb="0">
                  Protected Block
                </FormLabel>
                <Switch
                  id="protected"
                  checked={_protected}
                  onChange={() => setProtected(!_protected)}
                />
              </FormControl>

              <InputGroup size="md">
                <InputLeftAddon children="Token" />
                <Input
                  disabled={!_protected}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </InputGroup>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleCreateBlock}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
