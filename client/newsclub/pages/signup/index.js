import React from "react";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  NumberInput,
  NumberInputField,
  Input,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import styles from "./signup.module.css";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  return (
    <Box
      className={styles.container}
      width={{ sm: "90%", md: "50%" }}
      my={"2rem"}
      mx={"auto"}
      textAlign={"center"}
    >
      <Text fontSize={{ sm: "4xl", md: "6xl" }}>Sign up</Text>
      <Text fontSize={{ sm: "2xl", md: "4xl" }} my={"1rem"}>
        Please enter your information
      </Text>
      <Stack spacing={5} p={"1rem"}>
        <InputGroup>
          <Input bgColor={"white"} type="text" placeholder="Firstname" />
        </InputGroup>

        <InputGroup>
          <Input bgColor={"white"} type="text" placeholder="Lastname" />
        </InputGroup>

        <InputGroup>
          <NumberInput bgColor={"white"} width={"100%"} min={10}>
            <NumberInputField focusBorderColor="red.200" placeholder={"Phone No"} />
          </NumberInput>
        </InputGroup>

        <InputGroup>
          <Input bgColor={"white"} type="email" placeholder="E-mail" />
        </InputGroup>
        <Button colorScheme={"messenger"} onClick={() => {
          alert("We'll let you know!")
          router.push("/")
          }}>Submit</Button>
      </Stack>
      {/* لیست اشتراک خبری و کد مشترک نیز نیاز است */}
    </Box>
  );
}

export default Signup;
