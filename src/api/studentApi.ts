import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export type StudentApiRecord = {
  id: number
  name: string
  achievements?: string
  age?: number
  photo_url?: string
  joined_date?: string
  created_at?: string
}

export type CreateStudentPayload = {
  name: string
  achievements?: string
  age?: number
  photo_url?: string
  joined_date?: string
  photo_file?: File | null
  remove_photo?: boolean
}

export type UpdateStudentPayload = Partial<CreateStudentPayload>

const toFormData = (student: UpdateStudentPayload) => {
  const formData = new FormData()

  if (student.name !== undefined) formData.append('name', student.name)
  if (student.achievements !== undefined) formData.append('achievements', student.achievements)
  if (student.age !== undefined) formData.append('age', String(student.age))
  if (student.photo_url !== undefined) formData.append('photo_url', student.photo_url)
  if (student.joined_date !== undefined) formData.append('joined_date', student.joined_date)
  if (student.photo_file) formData.append('photo_file', student.photo_file)
  if (student.remove_photo !== undefined) formData.append('remove_photo', String(student.remove_photo))

  return formData
}

export const getStudents = async () => {
  const response = await axios.get(`${API_URL}/api/students`);
  return response.data;
};

export const createStudent = async (student: CreateStudentPayload) => {
   const response = await axios.post(
    `${API_URL}/api/students`,
    toFormData(student),
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const updateStudent = async (id: number, student: UpdateStudentPayload) => {
  const response = await axios.put(
    `${API_URL}/api/students/${id}`,
    toFormData(student),
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const deleteStudent = async (id: number) => {
  const response = await axios.delete(
    `${API_URL}/api/students/${id}`
  );
  return response.data
}