import { useState, useEffect } from "react";
import CommonNavbar from "../../../components/CommonNavbar";
import {
  Input,
  Button,
  Image,
  Grid,
  GridItem,
  Text,
  Textarea,
  Box,
} from "@chakra-ui/react";

function PostNew() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const selectFileHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadFileHandler = () => {
    const data = new FormData();
    data.append("image", selectedFile, selectedFile.name);

    // axios.post(...)
    console.log(selectedFile.name);
    alert("send the request to upload the file to server");
  };

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  }, [selectedFile]);
  return (
    <div>
      <CommonNavbar />
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 3fr)" }}
        gap={6}
        my={"2rem"}
        px={"2rem"}
      >
        <GridItem
          textAlign={"center"}
          padding={"1rem"}
          borderRadius={"10px"}
          bgColor={"gray.200"}
        >
          <Text fontSize={{ sm: "2rem", md: "3rem" }} mb={"1rem"}>
            Choose Image
          </Text>
          {preview ? (
            <Image src={preview} mx={"auto"} width={"25rem"} height={"25rem"} />
          ) : (
            <Image
              src={"/download.png"}
              mx={"auto"}
              width={"25rem"}
              height={"25rem"}
            />
          )}
          <Input
            type={"file"}
            accept={"image/*"}
            onChange={() => selectFileHandler(event)}
            my={"2rem"}
            mx={"auto"}
            width={"fit-content"}
          />
          <Button
            onClick={() => {
              selectedFile !== null && uploadFileHandler();
            }}
            colorScheme={"facebook"}
          >
            Upload
          </Button>
        </GridItem>

        <GridItem
          textAlign={"center"}
          bgColor={"gray.200"}
          borderRadius={"10px"}
          padding={"1rem"}
        >
          <Text fontSize={{ sm: "2rem", md: "3rem" }} mb={"1rem"}>
            News details
          </Text>
          <Input placeholder={"Title"} bgColor={"white"} fontSize={"1.5rem"} />
          <Textarea
            placeholder={"Content"}
            bgColor={"white"}
            fontSize={"1.5rem"}
            mt={"2rem"}
          />
      <Box textAlign={"center"}>
        <Button colorScheme={"facebook"} width={"20rem"} fontSize={"1.5rem"} my={"2rem"}>
          Post
        </Button>
      </Box>
        </GridItem>
      </Grid>
    </div>
  );
}

export default PostNew;
