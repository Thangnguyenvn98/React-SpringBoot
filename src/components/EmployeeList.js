import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Employee from "./Employee"
import EmployeeService from "./services/EmployeeService"


const EmployeeList = () => {
    const [loading,setLoading]= useState(true)
    const[employees,setEmployees] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try{
                const response = await EmployeeService.getEmployees()
                setEmployees(response.data)
               
            }catch(err){
                console.log(err)
            }
            setLoading(false)
        }
        fetchData()
    },[])


   const deleteEmployee = (e,id) =>{
    e.preventDefault() 
    EmployeeService.deleteEmployee(id).then((res) =>{
        if(employees){
            //call the function that will interact with the backend through employeeService above
            setEmployees((employees) => {
                return employees.filter((employee)=> employee.id !== id)
            })
        }
    })
   }

  return (

    <div className = "container mx-auto my-8">
         <div className = "h-12"> 
            <button onClick={()=>navigate("/addEmployee")}className ="bg-slate-600 rounded-lg p-4 text-white font-bold" >Add Employee</button>
            </div>  
            <div className = "flex shadow border-b mt-8">
                <table className = "min-w-full">
                    <thead className = "bg-gray-50">
                        <tr>
                            <th className = "text-left uppercase p-4">
                                First Name
                            </th>
                            <th className = "text-left uppercase p-4">Last Name</th>
                            <th className = "text-left uppercase p-4">Email</th>
                            <th className = "text-right uppercase p-4">Actions</th>
                        </tr>
                    </thead>
                    {!loading &&(
                    <tbody >
                        {employees.map((employee)=>(
                        <Employee employee={employee} deleteEmployee = {deleteEmployee} key={employee.id}/>))}
                    </tbody>
                   
                    )}
                </table>

            </div>
    </div>
  )
}
export default EmployeeList