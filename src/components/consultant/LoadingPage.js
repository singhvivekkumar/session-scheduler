import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const LoadingPage = () => {

	const handleAuthentication = () => {
		console.log("clicked");
		axios
			.get("http://localhost:3002/api/calendar")
			.then((response) => {
				const authUrl = response.data;
				window.location = authUrl;
			})
			.catch((error) => {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log("Error", error.message);
				}
				console.log(error.config);
			})
			.finally(()=> {
				console.log("finally");
			});

			
	};

	

	return (
		<div className=" flex flex-col justify-center items-center">
			<div className=" flex flex-col justify-center items-center ">
				<h1 className=" text-[2.5rem] md:text-[4.5rem] font-semibold text-blue-600 py-8">
					Easy scheduling ahead
				</h1>
				<p className=" text-lg md:text-3xl text text-center text-sky-600 w-10/12 md:w-2/3 ">
					Calendly is your scheduling automation platform for
					eliminating the back-and-forth emails to find the perfect
					time — and so much more.
				</p>
			</div>
			<div className="max-w-[280px] mx-auto">
				<div className="flex flex-col items-center mt-[10vh]">
					<h2 className="mb-5 text-gray-900 font-mono font-bold text-2xl">
						Log In
					</h2>
					<button
						onClick={handleAuthentication}
						className="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-white border border-slate-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50">
						<span className=" flex flex-row-reverse text-xl items-center text-gray-700 font-medium md:w-64 md:justify-around ">
							Continue with Google
							<FcGoogle className=" text-4xl" />
						</span>
					</button>
				</div>
				<div>
					<p className="text-center mt-3 text-sm text-[14px]">
						By clicking continue, you agree to our
						<Link to="/" className="text-gray-600">
							Terms of Service
						</Link>{" "}
						and{" "}
						<Link to="/" className="text-gray-600">
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default LoadingPage;
