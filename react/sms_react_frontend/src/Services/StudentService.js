import axios from 'axios'

const STUDENT_BASE_REST_API_URL='http://localhost:8080/students';

class StudentService{

    getAllStudents()
    {
         return axios.get(STUDENT_BASE_REST_API_URL)
    }

    createStudent(student)
    {
        return axios.post(STUDENT_BASE_REST_API_URL,student)
    }

    getStudentById(id)
    {
        return axios.get(STUDENT_BASE_REST_API_URL+"/"+id)
    }

    updateStudentById(id,student)
    {
        return axios.put(STUDENT_BASE_REST_API_URL+"/"+id,student)
    }

    deleteStudentById(id)
    {
        return axios.delete(STUDENT_BASE_REST_API_URL+"/"+id);
    }
    // createEmployee(employee)
    // {
    //     return axios.post(EMPLOYEE_BASE_REST_API_URL,employee)
    // }

    // getEmployeeById(id)
    // {
    //     return axios.get(EMPLOYEE_BASE_REST_API_URL+"/"+id)
    // }

    // updateEmployee(id,employee)
    // {
    //     return axios.put(EMPLOYEE_BASE_REST_API_URL+"/"+id,employee)
    // }
    // deleteEmployee(id)
    // {
    //     return axios.delete(EMPLOYEE_BASE_REST_API_URL+"/"+id)
    // }
}

export default new StudentService();