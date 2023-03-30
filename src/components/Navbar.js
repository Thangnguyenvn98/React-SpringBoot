import { UserButton,useUser } from "@clerk/clerk-react";


const Navbar = () => {
    const { user } = useUser();


 
  
  return (
    <div className = "bg-slate-600 text-white flex p-4 justify-between">

        
        <h1 className = 'text-white text-lg'>Employee Management System</h1>
        <div className  ='flex gap-3 justify-center items-center'>
        <UserButton />
        {user ? <h1>Hello, {user.firstName}!,</h1> : null}
        </div>

        
    </div>
  )
}
export default Navbar