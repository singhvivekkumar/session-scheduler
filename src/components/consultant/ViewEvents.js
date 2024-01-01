import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";
import { API_URL } from "../../config/server-config";
import { useParams } from "react-router-dom";

const ViewEvents = () => {
	const [listAllEvents, setListAllEvents] = useState([]);
	const [loading, setLoading] = useState("Loading your event from calendar \nplease wait...");
	const { id } = useParams();
	// console.log("id :", id);

	useEffect(() => {
		ListEvents();
		
		// eslint-disable-next-line
	}, []);

	const ListEvents = async () => {
		try {
			const response = await axios.get(`${API_URL}/calendar/list-event`, {
				params: { id: id },
			});
			// console.log("res :",response.data);
			setListAllEvents(response?.data?.data?.items);
			setLoading("No event found from your calendar \nplease enter a new event.");
		} catch (error) {
			console.log(error);
		}
	};

	return listAllEvents?.length === 0 ? (
		<h4 className=" min-h-[80vh] w-full text-center text-3xl font-semibold  bg-slate-200 flex justify-evenly items-center">
			{loading}
		</h4>
	) : (
		<div className=" min-h-[80vh] w-full bg-slate-200 flex flex-col md:flex-row md:flex-wrap md:justify-evenly space-y-6 md:px-10 p-4 md:items-baseline md:space-x-1 ">
			{listAllEvents?.map((item) => {
				return <EventCard key={item?.id} props={item} />;
			})}
		</div>
	);
};

export default ViewEvents;
