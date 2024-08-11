import axios from 'axios';
import { StudentListDTO } from 'src/dtos/Student/StudentListDTO';

class StudentService {
  public async getAll(): Promise<StudentListDTO> {
    const response = await axios.get(`http://localhost:8000/students`);
    return response.data;
  }
}

export const studentService = new StudentService();
