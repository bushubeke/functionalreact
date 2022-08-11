import UserListView from './components/usersview';
import  Footer  from './components/Footer';
import { Routes,Route} from "react-router-dom";

export default function MainApp() {
  return (
      
      <div className="h-screen w-screen min-w-96 border-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 p-2 border-black overflow-y-scroll font-mono">
          <div className="flex items-center min-w-full h-20 bg-gray-300 m-1  p-2 ">
          <div className="bg-stone-900 rounded-md h-full flex items-center text-gray-50 p-2 m-1">         
            <h1 className="object-center font-bold text-xs sm:text-3xl align-left">User Admin Board</h1>
          </div>
          <div className=" flex-auto p-2 border-black border-3 m-1 "></div>
          <div className="flex flex-row h-full items-center border-black border-3 p-2 m-1  ">
          </div>
        </div>       
        <div className="flex items-center justify-center min-w-full min-h-full bg-slate-100 m-1 p-2"> 
           <Routes>
           <Route path="/" element={<UserListView/> }/ >
           </Routes>
        </div>
         <Footer/>
      </div>
      
      );
  }