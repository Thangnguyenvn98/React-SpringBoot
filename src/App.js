import {
  ClerkProvider,
  SignedIn,
  SignedOut,

  RedirectToSignIn,
} from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar from './components/Navbar';
import UpdateEmployee from "./components/UpdateEmployee";



const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;




function App() {
  return (
    <BrowserRouter>
    <ClerkProvider publishableKey={clerk_pub_key}>
    <SignedIn>
      <Navbar />
      <Routes>
        <Route index element={<EmployeeList/>}/>
        <Route path="/" element={<EmployeeList/>}>
        </Route>
        <Route path="/employeeList" element={<EmployeeList/>}/>

        <Route path="/addEmployee" element={<AddEmployee/>}/>
        <Route path='/updateEmployee/:id' element ={<UpdateEmployee/>}/>
      </Routes>
     
    </SignedIn>
    
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </ClerkProvider>
  </BrowserRouter>
  
);

}



export default App;