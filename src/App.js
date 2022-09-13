import React , { useState} from "react";
import LoginForm from "./components/LoginForm";
import './index.css';


function App() {
  
  const adminUser = {
    
    email: "admin@admin.com",
    password: "admin123",
    

  }
    
  const[user , setUser] = useState ({email:""});
  const[error, setError] = useState ("");

  const Login = details  => {
    
    console.log(details);

    if ( details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in ");
       setUser({
         
         email : details.email
       });
    } else { 
       
       console.log(" Details do not match ");
      setError(  " Details do not match "  );
    }
  }

  

  const Logout = () => {
   setUser ({ email:""});
  }

  return (
    <div className="App">
        {(user.email != "") ? (


            
          
          <div className="welcome">
            <h2> &nbsp;  Welcome</h2>

            <button type="submit" onClick={Logout} class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-green-400" value=" LOGIN">Logout</button>

          
          </div>




        ): 
        
        
        
        (
          <LoginForm Login ={Login}  error ={ error}/>
         
        )}

    </div>
  );
        }

export default App;
