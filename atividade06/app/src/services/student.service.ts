import { api } from "./api";

export interface IStudent {
  registration: string;
  name: string;
  course: string;
  ira: number;
}

export interface IStudentCreate {
  name: string;
  registration: number;
  course: string;
  ira: number;
}

export interface IStudentUpdate {
  id: string;
  course?: string;
  ira?: number;
  name?: string;
}

export class StudentService {
  public static async findAll(): Promise<IStudent[]> {
    return api.get("/students");
  }

  public static async store(student: IStudentCreate) {
    return api.post("/student", student);
  }

  public static async update(student: IStudentUpdate) {
    return api.put("/student", student);
  }

  public static async delete(id: string) {
    return api.delete(`/student/${id}`);
  }
}
