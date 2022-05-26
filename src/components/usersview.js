
import React, { Fragment } from 'react';

import { useEffect,useState } from 'react';

import PageListView  from './paginatedlist';

import AddEmployeeForm from './register';
import { getemployees, selectUser } from '../appreducer';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal'



// #################################################3
 
// #################


// ################
function PaginatedListView() {
    const dispatch=useDispatch()
    const faskeUsers=[{
      "Name": "Redate",
      "Salary": 10000,
      "_id": "628e20bdd73f56690276c091",
      "DateofBirth": "2022-05-25T12:09:19.963Z",
      "Gender": "Male"
      },
        {
      "Name": "Redate",
      "_id": "628e21209e9c088c3e9b2995",
      "DateofBirth": "2022-05-25T12:09:19.963Z",
      "Gender": "Male",
      "Salary": 10000
      },
        {
      "Name": "Redate",
      "_id": "628e21cbd63d20785cddfdea",
      "DateofBirth": "2022-05-25T12:09:19.963Z",
      "Gender": "Female",
      "Salary": 20000
      },
        {
      "Name": "Redate",
      "_id": "628e2211ec30546132b1d713",
      "DateofBirth": "2022-05-25T12:09:19.963Z",
      "Gender": "Female",
      "Salary": 20000
      },
        {
      "_id": "628e2232ec30546132b1d715",
      "Name": "Some One",
      "DateofBirth": "2022-05-25T12:09:19.963Z",
      "Gender": "Female",
      "Salary": 20000
      },
        {
      "_id": "628e252720612c52d09f1ddd",
      "Name": "Some Body",
      "DateofBirth": "2022-05-25T12:09:19.963Z",
      "Gender": "Female",
      "Salary": 25000
      },
        {
      "Name": "Redate",
      "Gender": "Male",
      "Salary": 10000,
      "_id": "628e25fc20612c52d09f1ddf",
      "DateofBirth": "2022-05-25T20:15:35.311Z"
      }]
          // const [showModal, setShowModal] = useState(false);

          const [show, setShow] = useState(false);
          // eslint-disable-next-line
          const employ=useSelector(selectUser)
         
         useEffect(()=>{
         dispatch(getemployees())
         })
    return (  
        <div className="min-h-full w-full flex flex-col  items-start justify-center py-6 px-4 sm:px-6 lg:px-8">
                    {/* ############################## */}
                 
                            <PageListView pagelist={faskeUsers} pagenumber="1" isdefault={true}/>
                        
                {/* #####################################################################333 */}

                {show ? 
                
              
                
                 <Modal
                 className='flex items-center py-12 bg-gray-900 opacity-95 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0'
                 show={show}
                 onHide={() => setShow(false)}
                 dialogClassName="modal-90w"
                 
               >
               
                 
                 <AddEmployeeForm  onclose={() => setShow(false)}/>
                 
              
               </Modal>
              
                : null}
                                    
                      

                 {/* #####################################################################333 */}
                 <div className='flex flex-row float-right'>
                    <button  onClick={() => setShow(true)} className="group relative m-0 sm:m-3 flex font-bold justify-center py-2 px-4  border border-solid text-sm  rounded-md text-black bg-white hover:bg-stone-900 hover:text-white outline outline-1 outline-green-500 focus:outline-none ring-1 ">
                   
                    Add Employee
                    </button>
                    </div>
                </div>
    );
}
// ########################################################################################################


// ##########################################################################################################
export default function UserListView(){
   
    return(
            <Fragment>
             <PaginatedListView /> 
            </Fragment>
            )
}

