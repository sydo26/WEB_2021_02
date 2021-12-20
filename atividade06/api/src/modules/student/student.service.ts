import { StudentModel } from "../../shared/database/schemas/student.schema";
import { StudentStoreDto } from "./dtos/student-store.dto";
import { StudentUpdateDto } from "./dtos/student-update.dto";

class StudentServiceClass {
  async findAll() {
    return StudentModel.find();
  }

  async find(id: string): Promise<StudentStoreDto | null> {
    return StudentModel.findOne({ _id: id })
      .then((res) => res)
      .catch((err) => null);
  }

  async store({ registration, name, course, ira }: StudentStoreDto) {
    return StudentModel.create({
      registration,
      name,
      course,
      ira,
    });
  }

  async update(id: string, { course, ira, name }: StudentUpdateDto) {
    const existsStudent = await StudentModel.findOne({ _id: id });

    if (!existsStudent) return null;

    return StudentModel.updateOne(
      { _id: id },
      {
        $set: {
          course: course || existsStudent.course,
          ira: ira || existsStudent.ira,
          name: name || existsStudent.name,
        },
      }
    );
  }

  async delete(id: string) {
    return StudentModel.deleteOne({ _id: id });
  }
}

export const StudentService = new StudentServiceClass();
