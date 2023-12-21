import React, { useState } from "react";
import axios from "axios";
import { API_URL, HOST_URL } from "../../config/server-config";
import { useParams } from "react-router-dom";

const EventCard = ({ props }) => {
	const { id } = useParams();

	const [deleteOneEvent, setDeleteOneEvent] = useState(false);
	const [pending, setPending] = useState(false);

	const handleDeleteEvent = async (eventId) => {
		try {
			setPending(true)
			const response = await axios.delete(
				`${API_URL}/calendar/delete-event/${eventId}`,
				{params: { id: id }}
			);
			console.log(response.data, deleteOneEvent);
			setDeleteOneEvent(response.data.success);
			setPending(false)
		} catch (error) {
			console.log(error.message);
			setPending(false);
		}
	};

	const handleEventLink = async (eventId) => {
		const eventLink = `${HOST_URL}/booking/${id}?eventId=${eventId}`;
		console.log(eventLink);
		await navigator.clipboard.writeText(eventLink);
	};

	return (
		<div className={"max-w-md w-1/4 p-6 bg-white rounded-lg shadow-lg"}>
			{deleteOneEvent ? (
				<h4>This item is deleted successfully.</h4>
			) : (
				<>
					<h1 className="text-xl font-semibold text-left text-gray-500 mt-8 mb-6">
						{props?.summary}
					</h1>
					<p className="text-sm text-gray-600 text-justify mt-8 mb-6">
						{props?.location}
					</p>

					{/* delete visit */}
					<div className="flex justify-around space-x-2 my-4">
						{/* copy link */}
						<button
							onClick={() => handleEventLink(props?.id)}
							className="bg-gradient-to-r from-green-400 to-green-400 hover:to-blue-500 text-white cursor-pointer px-2 py-2 rounded-md ">
							Copy Link
						</button>
						{/* delete */}
						<button
							onClick={() => handleDeleteEvent(props?.id)}
							disabled={pending}
							className="bg-gradient-to-r from-red-600 to-red-500 hover:to-red-700 text-white cursor-pointer px-4 py-2 rounded-md ">
							Delete
						</button>
					</div>
				</>
			)}
			{/* something else */}
			<p className="text-xs text-gray-600 text-center mt-8">
				&copy; 2023 Vivek
			</p>
		</div>
	);
};

export default EventCard;
