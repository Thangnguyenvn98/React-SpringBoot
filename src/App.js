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



const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;




function App() {
  return (
    <BrowserRouter>
    <ClerkProvider publishableKey={clerk_pub_key}>
    <SignedIn>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeList/>}>
        </Route>
        <Route path="/addEmployee" element={<AddEmployee/>} />
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