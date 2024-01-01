import React from "react";
import { Link, useParams, } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
	const { id } = useParams();
	return (
		<div className=" h-full w-full pt-4  border-b shadow-md ">
			{/* row 1 */}
			<Navbar />
			{/* row 2 */}
			<div className=" h-full w-full  px-6 md:px-20 xl:px-60">
				<div className=" flex pt-8 w-full lg:w-1/2 ">
					<ul className=" flex md:justify-between w-full text-xl ">
						<Link to={`/${id}/list-events`}>
							<li className={` p-2 rounded-t-md cursor-pointer ${ window.location.pathname === `/${id}/list-events` ? "bg-slate-200 text-blue-600" :"hover:bg-slate-200 hover:text-blue-600"} `}>
								Event
							</li>
						</Link>
						<Link to={`/${id}/create-event`}>
							<li
								className={` text-lg md:text-xl p-2 rounded-t-md cursor-pointer ${ window.location.pathname === `/${id}/create-event` ? "bg-slate-200 text-blue-600" :"hover:bg-slate-200 hover:text-blue-600"} `}>
								Schedule
							</li>
						</Link>
						<Link>
							<li className={` p-2 rounded-t-md cursor-pointer ${ window.location.href === `/${id}/create-event1` ? "bg-slate-200 text-blue-600" :"hover:bg-slate-200 hover:text-blue-600"} `}>
								Workflows
							</li>
						</Link>
						<Link>
							<li className={` p-2 rounded-t-md cursor-pointer ${ window.location.href === `/${id}/create-event1` ? "bg-slate-200 text-blue-600" :"hover:bg-slate-200 hover:text-blue-600"} `}>
								Routing
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
