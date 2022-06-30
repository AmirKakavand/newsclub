import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Text, Button } from "@chakra-ui/react";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Text
        fontSize={{ sm: "4xl", md: "6xl" }}
        margin={"2rem"}
        textAlign={"center"}
      >
        Welcome to our news club
      </Text>

      <Text fontSize={{ sm: "2xl", md: "4xl" }} textAlign={"center"}>
        New here?
      </Text>
      <Text textAlign={"center"}>
        <Button
          colorScheme={"green"}
          width={{ sm: "50%", md: "40%" }}
          marginTop={"1rem"}
        >
          Sign up for free
        </Button>
      </Text>

      <Text
        textAlign={"center"}
        fontSize={{ sm: "2xl", md: "4xl" }}
        margin={"1rem"}
      >
        Already have an account?
      </Text>

      <Text textAlign={"center"}>
        <Button
          colorScheme={"blackAlpha"}
          width={{ sm: "50%", md: "40%" }}
        >
          Log in
        </Button>
      </Text>
    </div>
  );
}
