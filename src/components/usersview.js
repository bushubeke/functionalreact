import React, { Fragment } from 'react';
import { useEffect,useState } from 'react';
import PageListView  from './paginatedlist';
import AddEmployeeForm from './register';
import { selectUser,selectLoading,getemployees } from '../appreducer';
import { userslist } from '../appreducer';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal'

function PaginatedListView() {
    const dispatch=useDispatch()
        const [show, setShow] = useState(false);
        const employ=useSelector(selectUser)
        const loading=useSelector(selectLoading)
        useEffect(()=>{
        dispatch(userslist())
        dispatch(getemployees())
       },[])    
    return (  
        <div className="min-h-full w-full flex flex-col  items-start justify-center py-6 px-4 sm:px-6 lg:px-8">
            {loading ? null : <PageListView pagelist={employ} /> }
            {show ?                 
				<Modal
				className='flex items-center py-12 bg-gray-900 opacity-95 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0'
				show={show}
				onHide={() => setShow(false)}
				dialogClassName="modal-90w" >
					<AddEmployeeForm  onclose={() => setShow(false)}/>
				</Modal> : null}
            <div className='flex flex-row float-right'>
                    <button  onClick={() => setShow(true)} className="group relative m-0 sm:m-3 flex font-bold justify-center py-2 px-4  border border-solid text-sm  rounded-md text-black bg-white hover:bg-stone-900 hover:text-white outline outline-1 outline-green-500 focus:outline-none ring-1 ">
                    Add Employee
                    </button>
            </div>
        </div>
    );
}

export default function UserListView(){
   
    return(
		<Fragment>
			<PaginatedListView /> 
		</Fragment>
        )
}

