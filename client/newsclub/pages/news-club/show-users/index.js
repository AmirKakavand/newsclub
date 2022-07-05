import React from "react";
import CommonNavbar from "../../../components/CommonNavbar";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";

function ShowAllUsers() {
  const dummyUsers = [
    {
      id: 1,
      name: "John",
      lastname: "Doe",
      phone: "091666611234",
      email: "user1@gmail.com",
    },
    {
      id: 2,
      name: "Jane",
      lastname: "Doe",
      phone: "091666611234",
      email: "user2@gmail.com",
    },
    {
      id: 3,
      name: "Jack",
      lastname: "Black",
      phone: "091666611234",
      email: "user3@gmail.com",
    },
    {
      id: 4,
      name: "Jill",
      lastname: "White",
      phone: "091666611234",
      email: "user4@gmail.com",
    },
  ];

  return (
    <div>
      <CommonNavbar />
      <Text
        fontSize={{ sm: "2rem", md: "3rem" }}
        textAlign={"center"}
        mt={"2rem"}
      >
        All users
      </Text>

      <Box padding={"2rem"}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>List of all users</TableCaption>
            <Thead>
              <Tr>
                <Th textAlign={"center"}>Name</Th>
                <Th textAlign={"center"}>Lastname</Th>
                <Th textAlign={"center"}>Phone No</Th>
                <Th textAlign={"center"}>E-mail</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dummyUsers.map((user) => {
                return (
                  <Tr key={user.id}>
                    <Td textAlign={"center"}>{user.name}</Td>
                    <Td textAlign={"center"}>{user.lastname}</Td>
                    <Td textAlign={"center"}>{user.phone}</Td>
                    <Td textAlign={"center"}>{user.email}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default ShowAllUsers;
