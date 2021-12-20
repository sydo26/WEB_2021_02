import { Router, Request, Response } from "express";
import { StudentUpdateDto } from "../modules/student/dtos/student-update.dto";
import { HttpException } from "../errors";
import { StudentStoreDto } from "../modules/student/dtos/student-store.dto";
import { StudentService } from "../modules/student/student.service";

const routes = Router();

// @Get
routes.get("/students", async (req: Request, res: Response) => {
  const students = await StudentService.findAll();
  return res.status(200).json(students);
});

// @Post
routes.post("/student", async (req: Request, res: Response) => {
  const dto: StudentStoreDto = req.body;
  const storeStudent = await StudentService.store(dto);

  if (!storeStudent)
    return res.status(400).json({
      error: true,
      message:
        "Não foi possível cadastrar o estudante com os dados informados!",
    });

  return res.status(201).json(storeStudent);
});

// @Put
routes.put("/student/:id", async (req: Request, res: Response) => {
  const data: StudentUpdateDto = req.body;
  const { id } = req.params;

  const existsStudent = await StudentService.find(id);

  if (!existsStudent)
    return res
      .status(404)
      .json({ error: true, message: "Estudante não encontrado!" });

  const updatedStudent = await StudentService.update(id, data);

  if (updatedStudent.modifiedCount > 0)
    return res.status(201).json({
      message: "Estudante modificado com sucesso!",
    });
  return res
    .status(500)
    .json({ error: true, message: "Nao foi possível modificar o estudante!" });
});

// @Delete
routes.delete("/student/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const existsStudent = await StudentService.find(id);

  if (!existsStudent)
    return res
      .status(404)
      .json({ error: true, message: "Estudante não encontrado!" });

  const deletedResult = await StudentService.delete(id);

  if (deletedResult.deletedCount > 0)
    return res.status(201).json({ message: "Estudante deletado!" });

  return res
    .status(500)
    .json({ error: true, message: "Nao foi possível deletar o estudante!" });
});

export default routes;
