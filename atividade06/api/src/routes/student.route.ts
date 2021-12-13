import { Router, Request, Response } from "express";
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

  if (!storeStudent) throw new Error("Fail!");

  return storeStudent;
});

// @Put
routes.put("/student", (req: Request, res: Response) => {});

// @Delete
routes.put("/student", (req: Request, res: Response) => {});

export default routes;
