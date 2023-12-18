import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(true);

	const handleToggle = () => {
		setToggleMenu(!toggleMenu);
		console.log("clicked", toggleMenu);
	};

	return (
		<header>
			<nav className="bg-white border-gray-800 px-4 lg:px-6 py-2  border-b">
				<div className="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl">
					<Link to="/" className="flex items-center">
						<span className="self-center text-xl font-semibold whitespace-nowrap  text-slate-700">
							Get The Session
						</span>
					</Link>
					<div className="flex items-center lg:order-2">
						<Link
							to="/"
							className="text-gray-800   hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  h focus:outline-none  ">
							Log in
						</Link>
						<Link
							to="/"
							className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  bg-primary-600  hover:bg-primary-700 focus:outline-none  focus:ring-primary-800">
							Get started
						</Link>
						<button
							className=" md:hidden inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200    "
							onClick={handleToggle}>
							<FiMenu />
						</button>
					</div>
					{toggleMenu && (
						<div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
							<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
								<li>
									<Link
										to="/"
										className="block py-2 pr-4 pl-3 text-gray-700c:\Users\singh\Downloads\Get The Session (2).md rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 
										 ">
										Home
									</Link>
								</li>
								<li>
									<Link
										to="/"
										className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">
										About
									</Link>
								</li>
								
								<li>
									<Link
										to="/"
										className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  ">
										Features
									</Link>
								</li>
								
								<li>
									<Link
										to="/"
										className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  ">
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
