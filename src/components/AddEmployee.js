const AddEmployee = () => {
  return (
    <div className = 'flex flex-col shadow border-b mx-auto max-w-xl'>
        
       <p className ='text-center p-4 font-bold text-2xl'>Add New Employee</p>
       <form className="rounded-md p-8 flex flex-col gap-3 shadow border-b">
        <label>First Name</label>
        <input type="text" name="firstname" className= "border-2 w-80 h-10"required/>
        <label>Last Name</label>
        <input type="text" name="lastname" className= "border-2 w-80 h-10"required/>
        <label>Email</label>
        <input type="email" name="email" className= "border-2 w-80 h-10" required/>
        <div className ="flex gap-4 mt-4">
            <button className = "bg-green-500 rounded-md p-4 text-white font-semibold hover:bg-green-300 ">Save</button>
            <button className = "bg-red-600 rounded-md p-4 text-white font-semibold hover:bg-red-300">Clear</button>
        </div>
       </form>
        </div>
  )
}
export default AddEmployee