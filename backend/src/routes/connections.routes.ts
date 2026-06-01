import { Router } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

router.post("/", async (req, res) => {
  const { followerId, followingId } = req.body;

  const connection = await prisma.connection.create({
    data: {
      followerId,
      followingId,
    },
  });

  return res.status(201).json(connection);
});

export { router as connectionsRoutes };

