import {
  ClerkProvider,
  SignedIn,
  SignedOut,

  RedirectToSignIn,
} from "@clerk/clerk-react";
import AddEmployee from "./components/AddEmployee";
import Navbar from './components/Navbar';



const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;




function App() {
  return (
    <ClerkProvider publishableKey={clerk_pub_key}>
    <SignedIn>
      <Navbar />
      <AddEmployee/>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </ClerkProvider>
);

}



export default App;