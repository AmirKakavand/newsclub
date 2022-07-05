import {useState, useEffect} from "react";
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

function ShowRequests() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John",
      lastname: "Doe",
      phone: "091666611234",
      email: "user1@gmail.com",
      requestType: "update",
    },
    {
      id: 2,
      name: "Jane",
      lastname: "Doe",
      phone: "091666611234",
      email: "user2@gmail.com",
      requestType: "delete",
    },
    {
      id: 3,
      name: "Jack",
      lastname: "Black",
      phone: "091666611234",
      email: "user3@gmail.com",
      requestType: "delete",
    },
    {
      id: 4,
      name: "Jill",
      lastname: "White",
      phone: "091666611234",
      email: "user4@gmail.com",
      requestType: "update",
    },
  ])

  useEffect(() => {
    alert("Changes applied successfully!");
  }, [users])

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
                <Th textAlign={"center"}>Request Type</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((USER) => {
                return (
                  <Tr key={USER.id}>
                    <Td textAlign={"center"}>{USER.name}</Td>
                    <Td textAlign={"center"}>{USER.lastname}</Td>
                    <Td textAlign={"center"}>{USER.phone}</Td>
                    <Td textAlign={"center"}>{USER.email}</Td>
                    {USER.requestType === "update" ? (
                      <Td textAlign={"center"}><Button colorScheme={"green"}>Update</Button></Td>
                    ) : (
                      <Td textAlign={"center"}><Button colorScheme={"red"} onClick={() => {
                        setUsers(users.filter(user => {
                          if(user.id !== USER.id) {
                            return user
                          }
                        }))
                      }}>Delete</Button></Td>
                    )}
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

export default ShowRequests;
