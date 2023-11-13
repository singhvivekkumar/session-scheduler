import React, { useState } from "react";
import axios from "axios";

const EventCard = ({ props }) => {
	// const { summary } ={props}
	// console.log(props, props.summary);

	const [deleteOneEvent, setDeleteOneEvent] = useState(true);

	const handleDeleteEvent = (eventId) => {
		axios
			.delete("http://localhost:3002/api/calendar/delete-event/"+eventId)
			.then((response) => {
				console.log(response.data, deleteOneEvent);
				setDeleteOneEvent(false);
			})
			.catch((error) => console.log(error.message));
	};

	const handleEventLink = async (eventId) => {
		// const evnetLink1 = (URL, {});
		const eventLink = "http://localhost:3000/singhvivek309/"+eventId;
		await navigator.clipboard.writeText(eventLink) ;
	}

	return (
		<div className="max-w-md w-1/4 p-6 bg-white rounded-lg shadow-lg ">
			<h1 className="text-xl font-semibold text-left text-gray-500 mt-8 mb-6">
				{props?.summary}
			</h1>
			<p className="text-sm text-gray-600 text-justify mt-8 mb-6">
				{props?.location}
			</p>

			{/* delete visit */}
			<div className="flex justify-around space-x-2 my-4">
				{/* copy link */}
				<button onClick={() => handleEventLink(props?.id)} className="bg-gradient-to-r from-green-400 to-green-400 hover:to-blue-500 text-white px-2 py-2 rounded-md ">
					Copy Link
				</button>
				{/* delete */}
				<button
					onClick={() => handleDeleteEvent(props?.id)}
					className="bg-gradient-to-r from-red-600 to-red-500 hover:to-red-700 text-white px-4 py-2 rounded-md ">
					Delete
				</button>
			</div>
			{/* something else */}
			<p className="text-xs text-gray-600 text-center mt-8">
				&copy; 2023 Vivek
			</p>
		</div>
	);
};

export default EventCard;
