import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";
import { API_URL } from "../../config/server-config";

const ViewEvents = () => {
	const [listAllEvents, setListAllEvents] = useState([]);

	useEffect(() => {
		ListEvents();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const ListEvents = async () => {
		await axios
			.get(API_URL+"/list-event")
			.then((response) => {
				// console.log("by api",response?.data?.data?.items);
				setListAllEvents(response?.data?.data?.items);
				console.log("state",listAllEvents)
			})
			.catch((error) => console.log(error.message));
	};

	return listAllEvents?.length === 0 ? null : (
		<div className=" bg-slate-200 flex flex-col md:flex-row flex-wrap justify-evenly space-y-6 md:px-10 p-4 items-baseline space-x-1 ">
			{listAllEvents?.map((item) => {
				return <EventCard key={item?.id} props={item} />;
			})}
		</div>
	);
};

export default ViewEvents;
