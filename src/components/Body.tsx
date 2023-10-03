import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ItemsList, { Item } from "./ItemsList";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import SelectedList from "./SelectedList";

import { Post, User, getPosts, getUsers } from "../api";

const Body = () => {
  const [users, setUsers] = useState<Item[]>([]);
  const [posts, setPosts] = useState<Item[]>([]);

  useEffect(() => {
    handleGetUsers();
    handleGetPosts();
  }, []);

  const handleGetUsers = async () => {
    const data = await getUsers();

    if (typeof data === "string") {
      return;
    }

    const normalizedData = data.map((d: User) => {
      return {
        id: d.id,
        title: d.name,
        subtitle: d.email,
      };
    });

    setUsers(normalizedData);
  };

  const handleGetPosts = async () => {
    const data = await getPosts();

    if (typeof data === "string") {
      return;
    }

    const normalizedData = data.map((d: Post) => ({
      id: d.id,
      title: d.title,
      subtitle: d.body,
    }));

    setPosts(normalizedData);
  };

  return (
    <Container>
      <Grid container spacing={4} sx={{ height: "100vh", padding: 5 }}>
        <Grid item xs={4} sx={{ height: "100%" }}>
          <Paper sx={{ height: "100%", overflow: "hidden" }}>
            <ItemsList data={users} />
          </Paper>
        </Grid>
        <Grid item xs={4} sx={{ height: "100%" }}>
          <Paper sx={{ height: "100%", overflow: "hidden" }}>
            <ItemsList data={posts} />
          </Paper>
        </Grid>
        <Grid item xs={4} sx={{ height: "100%" }}>
          <Paper sx={{ height: "100%", overflow: "hidden" }}>
            <SelectedList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Body;
