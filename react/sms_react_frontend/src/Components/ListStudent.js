import React, {useState, useEffect } from 'react'
import StudentService from '../Services/StudentService'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
const ListStudent = () => {
const [students,setStudents]=useState([])
const history=useHistory()
useEffect(() => {
    getAllStudents();
}, [])
const getAllStudents = () => {
StudentService.getAllStudents()   
.then((response) => {
    console.log(response.data);
      setStudents(response.data)
    
  }).catch(error =>{
      console.log(error);
  })
}

const deleteStudent=(id)=>{
    StudentService.deleteStudentById(id)
    .then((response)=>{
        console.log(response.data)
        // history.push("/students") 
        getAllStudents();       
    })
    .catch((error)=>{
        console.log(error)
    })
}
  
  return (
    <div className="container">
        <h2 className='text-center'>List Students</h2>
        <Link to="/add-student" className='btn btn-success mb-3'>Add Student</Link>
        <table className="table table-bordered table-striped">
        <thead>
            <th> StudentId </th>
            <th> First Name </th>
            <th> Last Name </th>
            <th> Department </th>
            <th> Email Id </th>
            <th>Action</th>
        </thead>
        <tbody>
            {
                students.map(
                    student =>
                    <tr key = {student.id}> 
                        <td> {student.id} </td>
                        <td> {student.firstName} </td>
                        <td>{student.lastName}</td>
                        <td>{student.dept}</td>
                        <td>{student.email}</td>
                        <td><Link to={`/update-student/${student.id}`} className='btn btn-primary mb-2'>Update</Link>
                        <button className='btn btn-danger ml-2' style={{marginLeft:"10px"}} onClick={()=>deleteStudent(student.id)}>Delete</button> </td>
                    </tr>
                )
            }
        </tbody>
    </table>
    </div>
  )
}

export default ListStudent