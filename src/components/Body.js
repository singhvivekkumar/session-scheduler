import React from "react";
import Header from "./consultant/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoadingPage from "./consultant/LoadingPage";
import MainContainer from "./consultant/MainContainer";
import Error from "../Error";
import CreateEvent from "./consultant/CreateEvent";
import ViewEvents from "./consultant/ViewEvents";
import UserView from "./User/UserView";
import UserBooking from "./User/UserBooking";
import ConfirmEmail from "./User/ConfirmEmail";

const AppLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

const UserLayout = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

const Body = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout />,
			errorElement: <Error/>,
			children: [
				{
					path: "/",
					element: <LoadingPage />,
					
				},
				{
					path: "/main",
					element: <MainContainer/>,
					children: [
						{
							path: "/main",
							element:<ViewEvents/>
						}
					]
				},
				{
					path: "/createEvent",
					element: <CreateEvent/>
				}
			],
		},
		{
			path: "/singhvivek309/:id",
			element: <UserLayout/>,
			children: [
				{
					path:"/singhvivek309/:id",
					element: <UserView/>
				},
				{
					path:"/singhvivek309/:id/enter-details",
					element: <UserBooking/>
				},
				{
					path:"/singhvivek309/:id/booked",
					element: <ConfirmEmail/>
				},
			]
		},
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default Body;
