import { Router } from "express";
import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, type } = req.body;

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return res.status(400).json({
        error: "Usuário já existe",
      });
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        type,
      },
    });

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      error: "Erro interno",
    });
  }
});

export { router as authRoutes };