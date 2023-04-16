import { useEffect } from "react";
import Cards from "../components/Card";
import useBlogCall from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const Home = () => {
  const { getBlogs } = useBlogCall();
  useEffect(() => {
    getBlogs();
  }, []);
  const { blogs } = useSelector((state) => state.blogs);
  // console.log(blogs);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {blogs.map((item, index) => (
        <Cards key={index} item={item} />
      ))}
    </Box>
  );
};

export default Home;
