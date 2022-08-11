
import moment from 'moment';
import {  useDispatch } from 'react-redux';
import {  useState  } from 'react';
import { userslist } from '../appreducer';
var axios=require('axios')
export default function UpdateEmployeeForm({onclose, prevalues}) {
  const [values, setValues] = useState(prevalues);
  const dispatch = useDispatch()
  const onSubmit = (event) => {
  event.preventDefault();
    const headers = {
      'Content-Type': 'application/json',   
    }
    axios.put('https://bushu-mongose.herokuapp.com/employee/', values, {
        headers: headers
      })
      .then((response) => {
       onclose()
       dispatch(userslist())

      })
      .catch((error) => {
        console.log(error)
      })

  };

const handleNameInputChange = (event) => {
	event.persist();
	setValues((values) => ({
		...values,
		Name: event.target.value,
	}));
};

const handleDateofBirthInputChange = (event) => {
	event.persist();
	setValues((values) => ({
		...values,
		DateofBirth: event.target.value,
	}));
};

const handleGenderInputChange = (event) => {
	event.persist();
	setValues((values) => ({
		...values,
		Gender: event.target.value,
	}));
};

const handleSalaryInputChange = (event) => {
	event.persist();
	setValues((values) => ({
		...values,
		Salary: event.target.value,
	}));
};
	return (
		<>
		<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">	
				<form className="mt-8 space-y-6" onSubmit={onSubmit} method="POST">
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<input
								id="_id"
								name="_id"
								type="text"
								value={values._id}
								readOnly
								required
								hidden
								/>
						</div>
						<div>
							<label htmlFor="Name" className="sr-only">
							Name
							</label>
							<input
							id="Name"
							name="Name"
							type="text"
							value={values.Name}
							onChange={handleNameInputChange}
							required
							className="appearance-none rounded relative block w-full p-3 m-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
							placeholder="Full Name"
							/>
						</div>
						<div>
							<label htmlFor="DateofBirth" className="sr-only">
							Date of Birth
							</label>
							<input
							id="DateofBirth"
							name="DateofBirth"
							type="date"
							value={moment(values.DateofBirth).format("YYYY-MM-DD")}
							onChange={handleDateofBirthInputChange}
							required
							className="appearance-none rounded relative block w-full p-3 m-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
							placeholder="Date of Birth"
							/>
						</div>
						<div>
							<label htmlFor="Gender" className="sr-only">
							Gender
							</label>
						
							<select id="Gender"  onChange={handleGenderInputChange} value={values.Gender} name="Gender" className="appearance-none rounded relative block w-full p-3 m-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm">
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							</select>
						</div>
						<div>
							<label htmlFor="Salary" className="sr-only">
							Salary
							</label>
							<input
							id="Salary"
							name="Salary"
							type="number"
							value={values.Salary}
							onChange={handleSalaryInputChange}
							required
							className="appearance-none rounded relative block w-full p-3 m-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
							placeholder="1000"
							/>
						</div>			
					</div>				
					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 m-3 border border-solid text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-stone-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">		
							Update Employee
						</button>
						<button
							onClick={()=>onclose()}
							className="group relative w-full flex justify-center py-2 px-4 m-3 border border-solid text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-stone-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							close
						</button>
					</div>				
				</form>
			</div>
		</div>
		</>
  )
}