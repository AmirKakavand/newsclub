import React from "react";
import CommonNavbar from "../../../components/CommonNavbar";
import {
  Text,
  Grid,
  Input,
  GridItem,
  Button,
  Box,
  NumberInput,
  NumberInputField,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";

function UserProfile() {
  const dummyUser = {
    id: 1,
    name: "John",
    lastname: "Doe",
    phone: "09166611184",
    email: "amirkkvnd99@gmail.com",
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <div>
      <CommonNavbar />
      <Text
        fontSize={{ sm: "2rem", md: "3rem" }}
        textAlign={"center"}
        my={"1rem"}
      >
        User info
      </Text>
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 3fr)" }}
        gap={6}
        px={"3rem"}
      >
        <GridItem width={"100%"}>
          <Text my={"1rem"} textAlign={"center"}>
            Name
          </Text>
          <Input
            variant="outline"
            placeholder="Name"
            defaultValue={dummyUser.name}
          />
        </GridItem>
        <GridItem width={"100%"}>
          <Text my={"1rem"} textAlign={"center"}>
            Lastname
          </Text>
          <Input
            variant="outline"
            placeholder="Lastname"
            defaultValue={dummyUser.lastname}
          />
        </GridItem>
        <GridItem width={"100%"}>
          <Text my={"1rem"} textAlign={"center"}>
            Phone No
          </Text>
          <NumberInput
            bgColor={"white"}
            width={"100%"}
            min={10}
            defaultValue={parseInt(dummyUser.phone)}
          >
            <NumberInputField
              focusBorderColor="red.200"
              placeholder={"Phone No"}
            />
          </NumberInput>
        </GridItem>
        <GridItem width={"100%"}>
          <Text my={"1rem"} textAlign={"center"}>
            E-mail
          </Text>
          <Input
            variant="outline"
            placeholder="E-mail"
            type={"email"}
            defaultValue={dummyUser.email}
          />
        </GridItem>
      </Grid>
      <Box textAlign={"center"}>
        <Button
          colorScheme={"facebook"}
          my={"1.5rem"}
          onClick={() =>
            alert("change user info request should be sent to the sever")
          }
        >
          Apply changes
        </Button>
      </Box>

      <Box textAlign={"center"}>
        <Text
          fontSize={{ sm: "2rem", md: "3rem" }}
          textAlign={"center"}
          my={"1rem"}
        >
          Delete Account
        </Text>
        <Button colorScheme="red" mb={"1rem"} onClick={onOpen}>
          Request account deletion
        </Button>
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Account
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Yes, request deletion
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}

export default UserProfile;
