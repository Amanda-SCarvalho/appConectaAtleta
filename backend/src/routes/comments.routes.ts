import { Router } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { content, userId, postId } = req.body;

    const comment = await prisma.comment.create({
      data: {
        content,
        userId,
        postId,
      },
    });

    return res.status(201).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Erro interno" });
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await prisma.comment.findMany({
      where: { postId },
      orderBy: { createdAt: "desc" },
      include: { user: true },
    });

    return res.json(comments);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno" });
  }
});

export { router as commentsRoutes };

