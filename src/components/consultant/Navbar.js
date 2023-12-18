import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
	const { id } = useParams();

	const [user, setUser] = useState({
		userId: null,
		name: "",
		picture: "",
	});
	const [profile, setProfile] = useState(true);
	useEffect(() => {
		userData();
		// eslint-disable-next-line
	}, []);

	const handleProfile = () => {
		setProfile(!profile);
	};

	const handleLogout = () => {
		window.location = "/";
	};

	const userData = async () => {
		try {
			const response = await axios.get(
				"http://localhost:3002/api/v1/auth/user",
				{ params: { id: id } }
			);
			// console.log(response.data.data);
			setUser(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className=" h-full w-full border-b-2 pb-2 border-slate-200 flex  justify-between items-center px-2 md:px-20 lg:px-60">
			{/* col 1 */}
			<div className="">
				<span className=" text-xl  md:text-3xl font-semibold">
					Calender
				</span>
			</div>
			{/* col 2 */}
			<div className=" h-12">
				{user.picture === "" ? (
					<i className=" h-12 rounded-full  cursor-pointer text-xl "> <FaUserAlt /> </i>
				) : (
					<img
						className=" h-12 rounded-full  cursor-pointer  "
						src={user.picture}
						alt="avatar"
						onClick={handleProfile}
					/>
				)}
				<div
					className={`absolute h-52 w-44 border-2 border-slate-400 flex-col backdrop-blur-sm justify-center items-center rounded-lg -translate-x-1/3 -translate-y-16 space-y-5  ${
						profile ? "hidden" : "flex"
					}`}>
					<h2
						className=" h-8 w-8 ml-24 text-2xl border border-black/90 rounded-full text-center cursor-pointer"
						onClick={handleProfile}>
						X
					</h2>
					<h3 className=" text-center mt-14 text-lg ">{user.name}</h3>
					<button
						className=" h-8 px-2  border rounded-lg border-black/25 text-slate-50 bg-red-500 backdrop-blur-md "
						onClick={handleLogout}>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
