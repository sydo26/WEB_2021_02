import { collection, getDocs, addDoc, doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase.service";

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
    const studentsCollection = collection(firestore, "students");
    const studentsDocs = await getDocs(studentsCollection);
    return studentsDocs.docs.map((studentDocs) => {
      return studentDocs.data() as IStudent;
    });
  }

  // public static async findAll(): Promise<IStudent[]> {
  //   return api.get("/students").then((res) => res.data);
  // }

  public static async store(student: IStudentCreate) {
    const studentsCollection = collection(firestore, "students");
    const studentDocs = await addDoc(studentsCollection, student);

    return true;
  }

  // public static async update(student: IStudentUpdate) {
  //   return api.put("/student", student).then((res) => res.data);
  // }

  // public static async delete(id: string) {
  //   return api.delete(`/student/${id}`).then((res) => res.data);
  // }
}
