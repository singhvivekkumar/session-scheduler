import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";
import { API_URL } from "../../config/server-config";
import { useParams } from "react-router-dom";

const ViewEvents = () => {
	const [listAllEvents, setListAllEvents] = useState([]);
	const { id } = useParams();
	console.log("id :",id);

	useEffect(() => {
		ListEvents();
// eslint-disable-next-line
	}, []);

	const ListEvents = async () => {
		try {
			const response = await axios.get(`${API_URL}/calendar/list-event`, {
				params: { id: id},
			});
			console.log("res :",response.data);
			setListAllEvents(response?.data?.data?.items);
		} catch (error) {
			console.log(error);
		}
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
