
import { useState, useEffect,useRef } from 'react';
import UpdateEmployeeForm from "./editmodal";
import DeleteEmployeeForm from './deleteform';
import Modal from 'react-bootstrap/Modal';

export function UserView({data}){
    const [isHidden, setHidden] = useState(false);    
    const [ushow, setUshow] = useState(false);
    const [dshow, setDshow] = useState(false);
    const bodyref=useRef(null)
    useEffect(() => {
        let childn=Array.from(bodyref.current.children)
        childn[2].classList.toggle("hidden") 
    
      },[isHidden]);

return(
    <div className="bg-gray-50  w-full  border border-black border-1 m-2 shadow overflow-hidden sm:rounded-lg"> 
        <div className='flex flex-row float-right'>
            <button onClick={()=>setUshow(true)} className="group relative m-2 sm:m-3 flex font-bold justify-center py-2 px-4  border border-solid text-sm  rounded-md text-black bg-white hover:bg-stone-900 hover:text-white outline outline-1 outline-green-500 focus:outline-none ring-1 ">
            Edit
            </button>
             {ushow ?           
                    <Modal
                    className='flex items-center py-12 bg-gray-900 opacity-95 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0'
                    show={ushow}
                    onHide={() => setUshow(false)}
                    dialogClassName="modal-90w">
                        <UpdateEmployeeForm onclose={() => setUshow(false)} prevalues={data} />
                    </Modal>: null}
                    <button onClick={()=>setDshow(true)} className="group relative m-2 sm:m-3 flex  font-bold justify-center py-2 px-4  border border-solid text-sm  rounded-md text-black bg-white hover:bg-stone-900 hover:text-white outline outline-1     outline-red-900 focus:outline-none ring-1" >
                    Delete
                    </button>
                    {dshow ? 
                        <Modal
                        className='flex items-center py-12 bg-gray-900 opacity-95 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0'
                        show={dshow}
                        onHide={() => setDshow(false)}
                        dialogClassName="modal-90w">
                            <DeleteEmployeeForm onclose={() => setDshow(false)} prevalues={data} />
                        </Modal>: null}
        </div>            
        <div ref={bodyref} onClick={setHidden} className="w-full  px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Employee Informaiton</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details </p>
            <div className="border-t border-gray-500">
                <dl>    
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Full name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.Name}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Birth Date</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.DateofBirth}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Gender</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.Gender}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Salary</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.Salary}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
)
}

export default function PageListView({pagelist}) {
    return (  
        <div className= "w-full">
            {              
            pagelist.map(function (person){
                return(  <UserView data={person} key={"user-"+person._id} /> )
                        })                                        
            }
        </div>
    );
}