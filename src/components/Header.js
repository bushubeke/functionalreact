// import { Adjustments } from "heroicons-react";
// import { Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'

// import {
  
//   Link
// } from "react-router-dom";
// // import { ChevronDownIcon } from '@heroicons/react/solid'

// // ###################################################33

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
// // ###########################
// function DropDown() {
//   return (
//     <Menu as="div" className="relative inline-block font-bold text-left">
//       <div>
//         <Menu.Button className="inline-flex hover:bg-stone-900 hover:text-gray-50 justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          
//           <Adjustments size={24}/>
//           {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
        
//         <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
//           <div className="py-1">
//           <Link to="/login">
//             <Menu.Item>
//               {({ active }) => (
//                 <a
                  
//                 href="/"
//                   className={classNames(
//                     active ? 'hover:bg-stone-900 hover:text-gray-50 bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Login
//                 </a>
//               )}
//             </Menu.Item>
//             </Link>
//             <Link to="/register">           
//              <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="/"
//                   className={classNames(
//                     active ? 'hover:bg-stone-900 hover:text-gray-50 bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Register User
//                 </a>
//               )}
//             </Menu.Item>
//             </Link>

//           </div>

          
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   )
// }


// ///////////////////////////////////////////////////////////////////////////
// function CustomHeader(props) {
//     return (
//       <div className="flex items-center w-auto h-20 bg-gray-300 m-2  p-1 ">
//         <div className="bg-stone-900 h-full flex items-center text-gray-50 p-2 m-1">
          
//           <h1 className="object-center font-bold text-xs sm:text-3xl align-left">User Admin Board</h1>
          
//           </div>
//         <div className=" flex-auto p-2 border-black border-3 m-1 "></div>
//         <div className="border-black border-3 p-2 m-1  ">
//         <DropDown/> 
          
     
//         </div>
//       </div>
//     );
//   }
  
  
  
// export default CustomHeader