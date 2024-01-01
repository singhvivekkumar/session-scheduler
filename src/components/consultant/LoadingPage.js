import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { API_URL } from "../../config/server-config";

const LoadingPage = () => {

	const handleAuthentication = async () => {
		try {
			const response = await axios.get(`${API_URL}/auth`);
			// console.log("res", response);
			const url = await response.data.data;
			window.location = url;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main className=" h-full w-full px-4 lg:px-32 py-16  space-y-10 ">
			<section className=" h-full w-full ">
				<h1 className=" h-full w-full text-4xl md:text-5xl lg:text-6xl text-center font-semibold text-blue-600 py-8">
					Easy scheduling ahead
				</h1>
				<p className=" h-full w-full text-2xl md:text-2xl text text-center text-sky-600 ">
					<b>Get The Session</b> is your scheduling automation platform for
					eliminating the back-and-forth emails to find the perfect
					time — and so much more.
				</p>
			</section>
			<section className="h-full w-full mx-auto">
				<div className=" px-8 md:px-48 flex flex-col justify-center items-center ">
					<h2 className=" text-center mb-5 text-gray-900 font-mono font-bold text-2xl">
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
						</Link>
							and
						<Link to="/" className="text-gray-600">
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</section>
		</main>
	);
};

export default LoadingPage;
