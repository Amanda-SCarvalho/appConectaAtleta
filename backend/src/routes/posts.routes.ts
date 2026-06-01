import { Router } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

router.post("/", async (req, res) => {
  const { content, image, authorId } = req.body;

  const post = await prisma.post.create({
    data: {
      content,
      image,
      authorId,
    },
  });

  return res.status(201).json(post);
});

router.get("/", async (_, res) => {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(posts);
});

export { router as postsRoutes };

