import { useState } from "react"
import EmployeeService from "./services/EmployeeService"
import { useNavigate } from 'react-router-dom';


const AddEmployee = () => {

    const[employee,setEmployee] = useState({
        "id":"",
        "firstName":"",
        "lastName":"",
        "emailId":""
    })

    const navigate = useNavigate()
   const handleChange = (e) => {
    const value = e.target.value
    setEmployee({...employee,[e.target.name]:value})
   }

   const saveEmployee = (e) => {
    e.preventDefault()
    EmployeeService.saveEmployee(employee).then((res)=>{
        console.log(res)
        navigate("/")

    }).catch((err) => {
        console.log(err)
    })

   }

   const resetInput = (e) => {
    e.preventDefault()
    setEmployee({
        "id":"",
        "firstName":"",
        "lastName":"",
        "emailId":""
    })

   }

  return (
    <div className = 'flex flex-col shadow border-b mx-auto max-w-xl'>
        
       <p className ='text-center p-4 font-bold text-2xl'>Add New Employee</p>
       <form className="rounded-md p-8 flex flex-col gap-3 shadow border-b">
        <label>First Name</label>

        
        <input type="text" name="firstName" className= "border-2 w-80 h-10" value={employee.firstName} onChange={(e)=>handleChange(e)} required/>
        
        <label>Last Name</label>
        <input type="text" name="lastName" className= "border-2 w-80 h-10" value={employee.lastName} onChange={(e)=>handleChange(e)} required/>
        <label>Email</label>
        <input type="email" name="emailId" className= "border-2 w-80 h-10" value ={employee.emailId} onChange={(e)=>handleChange(e)} required/>
        <div className ="flex gap-4 mt-4">
            <button className = "bg-green-500 rounded-md p-4 text-white font-semibold hover:bg-green-300 " onClick={saveEmployee}>Save</button>
            <button className = "bg-red-600 rounded-md p-4 text-white font-semibold hover:bg-red-300" onClick={resetInput}>Clear</button>
        </div>
       </form>
        </div>
  )
}
export default AddEmployee