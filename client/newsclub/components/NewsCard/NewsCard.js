import React from "react";
import styles from "./NewsCard.module.css";
import { Box, Text } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

function NewsCard({ newsId, newsTitle, newsDescription, newsImage }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      borderColor={"black"}
      borderRadius={"0.5rem"}
      width={{ sm: "25rem", md: "15rem" }}
      textAlign={"center"}
      margin={"1rem"}
      display={"inline-block"}
      bgColor={"#e1e1e1"}
      paddingBottom={"0.5rem"}
    >
      <img src={newsImage} className={styles.image} onClick={onOpen} />
      <Text fontSize={"2rem"} fontWeight={"bold"}>
        {newsTitle}
      </Text>

      {/* modal */}
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{newsTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{newsDescription}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default NewsCard;
