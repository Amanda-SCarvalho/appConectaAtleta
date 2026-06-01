import { Router } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

router.get("/", async (_, res) => {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const user = await prisma.user.findUnique({
    where: { id },
  });

  return res.json(user);
});

export { router as usersRoutes };

