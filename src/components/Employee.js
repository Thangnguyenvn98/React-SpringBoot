const Employee = ({employee}) => {
  return (
    
    <tr key={employee.id}>
    <td className="text-left p-4"> <div className ="font-semibold">  {employee.firstName}  </div> </td>
    <td className="text-left p-4"> <div className ="font-semibold">  {employee.lastName}  </div></td>
    <td className="text-left p-4"><div className ="font-semibold">  {employee.emailId} </div></td>
    <td className="text-right p-4"> <div className = "flex items-center justify-end gap-4">
    <a href="#" className = "text-white hover:text-indigo-800 rounded bg-blue-600 p-4">Edit</a>
    <a href="#" className = "text-white bg-red-500 hover:text-indigo-800 rounded p-4"> Delete</a>
        </div> </td>
    </tr>
 
  )
}
export default Employee