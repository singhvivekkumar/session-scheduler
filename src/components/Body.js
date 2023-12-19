import React from "react";
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
			errorElement: <Error />,
			children: [
				{
					path: "/",
					element: <LoadingPage />,
				},
				{
					path: "/:id",
					element: <MainContainer />,
					children: [
						{
							path: "/:id/list-events",
							element: <ViewEvents />,
						},
						{
							path: "/:id/create-event",
							element: <CreateEvent />,
						},
					],
				},
			],
		},
		{
			path: "/booking/:id",
			element: <UserLayout />,
			children: [
				{
					path: "/booking/:id",
					element: <UserView />,
				},
				{
					path: "/booking/:id/enter-details",
					element: <UserBooking />,
				},
				{
					path: "/booking/:id/booked",
					element: <ConfirmEmail />,
				},
			],
		},
	]);
	return (
		<div>
				<RouterProvider router={router} />
		</div>
	);
};

export default Body;
