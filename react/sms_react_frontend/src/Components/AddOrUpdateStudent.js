import React,{useEffect, useState} from 'react'
import StudentService from '../Services/StudentService'
import { useHistory,useParams,Link } from 'react-router-dom';

const AddOrUpdateStudent = () => {
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [dept,setDept]=useState('')
  const [email,setEmail]=useState('')
  let history = useHistory()
  const {id}=useParams();

  useEffect(()=>{
    StudentService.getStudentById(id)
    .then((response)=>{
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setDept(response.data.dept);
        setEmail(response.data.email);
        console.log(firstName+" "+lastName)
    })
  },[])
  const AddOrUpdateStudent=(e)=>{
    e.preventDefault();

    const student={firstName,lastName,dept,email}
    console.log(student);

    if(id)
    {
               StudentService.updateStudentById(id,student)
               .then((response)=>{
                    console.log("Updated Successfully")
                    history.push("/students")
               })
               .catch((error)=>{
                    console.log(error)
               })
    }
    else
    {
                StudentService.createStudent(student)
            .then(response=>{
                history.push("/");
                console.log(response.data)
                
            })
            .catch(error=>{
                console.log(error)
            })
    }
}

    
  const title=()=>{
    return id?<h2 className='text-center'>Update Student</h2>:<h2 className='text-center'>Add Student</h2>;
  }
    return (

    <div className="container">
        <div className="row">
            <div className='card col-md-6 offset-md-3 offset-md-3 mt-3'>
                {
                    title()
                }
            <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value={firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value={lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Department :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter department"
                                        name = "dept"
                                        className = "form-control"
                                        value={dept}
                                        onChange = {(e) => setDept(e.target.value)}
                                    >
                                    </input>
                                    </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "email"
                                        className = "form-control"
                                        value={email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="text-center">
                                    <button className = "btn btn-success mr-2" onClick = {AddOrUpdateStudent} >{id?"Update Student":"Add Student"}</button>
                                    <Link to="/students" className="btn btn-danger"> Cancel </Link>
                                </div>
                                
                            </form>
                        </div>
            </div>
        </div>
    </div>
    )
}

export default AddOrUpdateStudent