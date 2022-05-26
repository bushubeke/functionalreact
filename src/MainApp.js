
import  Footer  from './components/Footer';

// import RegisterForm from './components/register';
// import LoginForm from './components/login';
import {
 
  Routes,
  Route,


} from "react-router-dom";
// import { useSelector } from 'react-redux'


// import BodyComp from './components/Body';
import UserListView from './components/usersview';
// import { logout,selectUser } from './appreducer';
// import {useDispatch,useSelector} from 'react-redux'
// import Pagination from './components/pagination';


  

export default function MainApp() {

    // const login_status=useSelector(selectUser)
    // const dispatch=useDispatch()
    // const butstyle="group relative m-0 sm:m-3 flex  font-bold justify-center py-2 px-4  border border-solid text-sm  rounded-md text-black bg-white hover:bg-stone-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    return (
      
      <div className="h-screen w-screen min-w-96 border-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 p-2 border-black overflow-y-scroll font-mono">
          {/* #########################################3  */}
          <div className="flex items-center min-w-full h-20 bg-gray-300 m-1  p-2 ">
          <div className="bg-stone-900 rounded-md h-full flex items-center text-gray-50 p-2 m-1">
            
            <h1 className="object-center font-bold text-xs sm:text-3xl align-left">User Admin Board</h1>
            
            </div>
          <div className=" flex-auto p-2 border-black border-3 m-1 "></div>
          <div className="flex flex-row h-full items-center border-black border-3 p-2 m-1  ">
           
                      {/* ################################################# */}
                      {/* ################################################# */}
                    
         {/* ################################################### */}
          </div>
        </div>       
          {/* ########################################## */}
          
          <div className="flex items-center justify-center min-w-full min-h-full bg-slate-100 m-1 p-2">
          
           <Routes>
         
           
           
           <Route path="/" element={<UserListView/> }/ >
           
           
           </Routes>
           
        </div>
         
         
         <Footer/>
      </div>
      
      );
  }