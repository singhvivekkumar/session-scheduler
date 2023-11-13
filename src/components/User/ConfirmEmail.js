import React from "react";

const ConfirmEmail = () => {
	return (
		<div className=" flex justify-center items-center bg-slate-100 h-screen ">
			<div className=" md:w-1/3 m-2 flex flex-col bg-white shadow-slate-300 shadow-xl justify-center p-4 py-5 rounded-lg border border-slate-200 space-y-5 ">
				<h2 className=" text-2xl text-green-600 text-center font-semibold">You are scheduled</h2>
				<p className=" text-slate-500">
					A calendar invitation has been sent to your email address.
				</p>
				<h3 className=" text-xl ">getmetherapy</h3>
				<h3 className=" text-slate-400 text-lg">Vivek Kumar Singh (Vivek)</h3>
				<span className=" text-slate-600">11:30am - 12:15pm, Friday, September 15, 2023</span>
				<p>Web conferencing details to follow.</p>
			</div>
		</div>
	);
};

export default ConfirmEmail;
