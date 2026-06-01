import cors from "cors";
import express from "express";

import { authRoutes } from "./routes/auth.routes";
import { commentsRoutes } from "./routes/comments.routes";
import { connectionsRoutes } from "./routes/connections.routes";
import { postsRoutes } from "./routes/posts.routes";
import { projectsRoutes } from "./routes/projects.routes";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
app.use("/projects", projectsRoutes);
app.use("/connections", connectionsRoutes);
app.use("/comments", commentsRoutes);

app.listen(3333, () => {
  console.log("Server running on port 3333");
});
