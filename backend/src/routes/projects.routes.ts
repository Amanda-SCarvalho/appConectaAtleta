import { Router } from 'express';
import { prisma } from '../lib/prisma';

const router = Router();

router.post('/', async (req, res) => {

  const {
    title,
    description,
    goal,
    image,
    authorId,
  } = req.body;

  const project =
    await prisma.project.create({
      data: {
        title,
        description,
        goal,
        image,
        authorId,
      },
    });

  return res.status(201).json(project);
});

router.get('/', async (_, res) => {

  const projects =
    await prisma.project.findMany({
      include: {
        author: true,
      },
    });

  return res.json(projects);
});

export default router;