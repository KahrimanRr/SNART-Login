import React, {useState}  from 'react'
import snart from './images/snart.png';
import snartname from './images/snartname.png'

function LoginForm( {Login, error} ) {
    const [details,setDetails] = useState ({email:"" ,password:""});

     const submitHandler = e => {
         e.preventDefault();

         Login(details);
     }

  return (
    <div className='App'>

    <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-40 w-auto" src={snart} alt="greska" />
      <img class="mx-auto h-10 w-auto" src={snartname } alt="greska2" />
  
      <h2 class="mt-6 w-auto text-center text-4xl font-bold text-gray-900">Login</h2>
      
      

    </div>
  
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form onSubmit={submitHandler} class="mb-0 space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium mb-1 text-center text-gray-700">Email</label>
            <div class="mt-1 text-center">
              <input class=" text-center  " placeholder='name@example.com '  id="email" name="email" type="email" autocomplete="email" required  onChange={e=> setDetails({...details, email: e.target.value })} value={details.email} />
            </div>
          </div>
  
          <div>
            <label for="password" class="block text-sm mb-1 font-medium text-center text-gray-700">Password</label>
            <div class="mt-1 text-center">
              <input  class ="text-center" placeholder='min. 8 caracters' id="password" name="password" type="password" autocomplete="current-password" required   onChange={e=> setDetails({...details, password: e.target.value })} value={details.password}/>
            </div>
          </div>
  
          
  
      
  
          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-green-400" value=" LOGIN">Login</button>
          </div>
          {(error !="" ) ? ( <div className="flex bg-red-100 rounded-lg p-4 mb-4  text-sm text-red-700" role="alert" >
      <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
           {error}</div>) : " "}
        </form>
      </div>
      
    </div>
    
  </div>
  
  
  
           
      </div>
  )
}

export default LoginForm