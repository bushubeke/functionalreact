import { LockClosedIcon } from '@heroicons/react/solid'
import {  useDispatch } from 'react-redux';
import { login } from '../appreducer';

export default function LoginForm() {
	const dispatch = useDispatch()
	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(login());

	};
	return (
		<>
			<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login in to your account</h2>
					</div>
					<form className="mt-8 space-y-6" onSubmit={onSubmit} method="POST">
						<input type="hidden" name="remember" defaultValue="true" />
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label htmlFor="email-address" className="sr-only">
								Email address
								</label>
								<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="appearance-none rounded relative block w-full p-3 m-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								/>
							</div>
							<div>
								<label htmlFor="password" className="sr-only">
								Password
								</label>
								<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="appearance-none rounded relative block w-full p-3  m-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								/>
							</div>
						</div>
						<div>
							<button
								type="submit"
								
								className="group relative w-full flex justify-center py-2 px-4 m-3 border border-solid text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-stone-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<span className="absolute left-0 inset-y-0 flex items-center pl-3">
								<LockClosedIcon className="h-5 w-5 text-stone-900 group-hover:text-indigo-400" aria-hidden="true" />
								</span>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

