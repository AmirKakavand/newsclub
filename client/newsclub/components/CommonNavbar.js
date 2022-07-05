import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Avatar,
  Text
} from "@chakra-ui/react";
import { useRouter } from "next/router";

function CommonNavbar() {
  const router = useRouter();
  return (
    <Breadcrumb
      separator={" "}
      bgColor={"#666"}
      height={"fit-content"}
      py={"1rem"}
      px={"2rem"}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <BreadcrumbItem color={"white"} fontSize={{ sm: "1.5rem", md: "2rem" }}>
          <BreadcrumbLink onClick={() => router.push("/")}>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem color={"white"}>
          {router.pathname === "/user" ? (
            <BreadcrumbLink
              onClick={() => router.push("/user/profile")}
              _hover={{ textDecoration: "none" }}
            >
              <Avatar name={"Amir Kakavand"} />
            </BreadcrumbLink>
          ) : (
            <BreadcrumbLink
              onClick={() => router.push("/user")}
              _hover={{ textDecoration: "none" }}
            >
              <Text color={"white"} fontSize={{ sm: "1.5rem", md: "2rem" }}>Back</Text>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      </Box>
    </Breadcrumb>
  );
}

export default CommonNavbar;
