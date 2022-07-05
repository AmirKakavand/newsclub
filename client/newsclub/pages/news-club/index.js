import React from "react";
import { Grid, GridItem, Text, Box } from "@chakra-ui/react";
import CommonNavbar from "../../components/CommonNavbar";
import { useRouter } from "next/router";

function NewsClub() {
    const router = useRouter();
  return (
    <div>
      <CommonNavbar />
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 3fr)" }}
        gap={6}
        my={"4rem"}
        px={"2rem"}
      >
        <GridItem
          onClick={() => router.push("/news-club/post-new")}
          _hover={{ cursor: "pointer" }}
          textAlign={"center"}
          height={{ sm: "20vh", md: "40vh" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgColor={"green.400"}
          borderRadius={"10px"}
        >
          <Text fontSize={"3rem"}>Post news</Text>
        </GridItem>

        <GridItem
          onClick={() => router.push("/news-club/show-users")}
          _hover={{ cursor: "pointer" }}
          textAlign={"center"}
          height={{ sm: "20vh", md: "40vh" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgColor={"blue.400"}
          borderRadius={"10px"}
        >
          <Text fontSize={"3rem"}>Show all users</Text>
        </GridItem>

        <GridItem
          onClick={() => router.push("/news-club/show-requests")}
          _hover={{ cursor: "pointer" }}
          textAlign={"center"}
          height={{ sm: "20vh", md: "40vh" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgColor={"yellow.500"}
          borderRadius={"10px"}
        >
          <Text fontSize={"3rem"}>Show requests</Text>
        </GridItem>
      </Grid>
    </div>
  );
}

export default NewsClub;
