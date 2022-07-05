import React from "react";
import CommonNavbar from "../../components/CommonNavbar";
import NewsCard from "../../components/NewsCard/NewsCard";
import { Text, Box, Grid, GridItem } from "@chakra-ui/react";

const dummyNews = [
  {
    id: 1,
    title: "latest news",
    description: "this is the latest news",
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    title: "latest news",
    description: "this is the latest news",
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    title: "latest news",
    description: "this is the latest news",
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    title: "latest news",
    description: "this is the latest news",
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    title: "latest news",
    description: "this is the latest news",
    image: "https://picsum.photos/200",
  },
  {
    id: 6,
    title: "latest news",
    description: "this is the latest news",
    image: "https://picsum.photos/200",
  },
  {
    id: 7,
    title: "latest news",
    description: "this is the latest news",
    image: "https://picsum.photos/200",
  },
  {
    id: 8,
    title: "latest news",
    description: "this is the latest news",
    image: "https://picsum.photos/200",
  },
];

function UserPage() {
  return (
    <div>
      <CommonNavbar />
      <Text textAlign={"center"} fontSize={{ sm: "2.5rem", md: "3rem" }}>
        Latest News
      </Text>
      {/* map through and render news */}
      <Grid templateColumns={{sm: "repeat(1, 1fr)", md: "repeat(4, 3fr)"}} gap={6} px={"3rem"}>
        {dummyNews.map((news) => {
          return (
            <GridItem key={news.id}>
              <NewsCard
                newsId={news.id}
                newsTitle={news.title}
                newsDescription={news.description}
                newsImage={news.image}
              />
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
}

export default UserPage;
