import { BsCalendar2Plus } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

const MainContainer = () => {
	return (
		<main className=" flex flex-col justify-center pt-4">
			{/* section 1 */}
			<div className=" flex flex-col justify-center pt-4  border-b shadow-md ">
				{/* row 1 */}
				<div className=" border-b-2 pb-2 border-slate-200 flex  justify-between items-center px-2 md:px-20 lg:px-60">
					{/* col 1 */}
					<div className="">
						<span className=" text-xl  md:text-3xl font-semibold">
							Calender
						</span>
					</div>
					{/* col 2 */}
					<div className="">
						<Link to="/createEvent">
							<button className="flex items-center p-2 px-2 lg:px-5 bg-blue-600 text-white text-lg rounded-full font-normal hover:bg-blue-800 cursor-pointer ">
								{" "}
								<BsCalendar2Plus />{" "}
								<span className="px-1 md:px-[6px] "></span>
								Create
							</button>
						</Link>
					</div>
				</div>

				{/* row 2 */}
				<div className=" flex justify-between items-center px-2 md:px-20 lg:px-60">
					<div className=" flex pt-4 w-1/2 ">
						<ul className=" flex justify-between w-full text-xl ">
							<Link to="/main">
								<li className=" p-2 rounded-t-md cursor-pointer hover:bg-slate-300 hover:text-blue-600 hover:border-blue-700 outline-none hover:border-b-2 ">
									Event{" "}
								</li>
							</Link>
							<Link>
								<li className=" p-2 rounded-t-md cursor-pointer hover:bg-slate-300 hover:text-blue-600 hover:border-blue-700 outline-none hover:border-b-2 ">
									schedule event
								</li>
							</Link>
							<Link>
								<li className=" p-2 rounded-t-md cursor-pointer hover:bg-slate-300 hover:text-blue-600 hover:border-blue-700 outline-none hover:border-b-2 ">
									Workflows
								</li>
							</Link>
							<Link>
								<li className=" p-2 rounded-t-md cursor-pointer hover:bg-slate-300 hover:text-blue-600 hover:border-blue-700 outline-none hover:border-b-2 ">
									Routing
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>

			{/* section 2 */}
			<Outlet />
		</main>
	);
};

export default MainContainer;
