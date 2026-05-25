import { Request, Response } from "express";

import "dotenv/config";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { prisma } from "../lib/prisma";

export async function register(req: Request, res: Response) {
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        type,
      },
    });
    return res.json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({
        error: "Usuário não encontrado",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({
        error: "Senha inválida",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      },
    );

    
    return res.json({
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}
