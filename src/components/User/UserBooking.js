import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ConfirmEmail from "./ConfirmEmail";
import { useParams, useSearchParams } from "react-router-dom";
import { API_URL } from "../../config/server-config";

const UserBooking = () => {
	const { id } = useParams();
	// eslint-disable-next-line
	const [searchParams, setSearchParams] = useSearchParams();
	const eventId = searchParams.get("eventId");
	console.log("id", eventId, searchParams, id);
	const [successFull, setSuccessFull] = useState(false);
	const [event, setEvent] = useState(null);

	const initialValues = {
		name: "",
		email: "",
		comment: "",
		eventId: eventId,
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().min(3, "Too Short!").max(70, "Too Long!").required(),
		email: Yup.string().email().required(),
		comment: Yup.string()
			.min(10, "Too Short!")
			.max(1000, "Too Long!")
			.required(),
	});

	const handleSubmit = (values) => {
		console.log("values : ", values);
		axios
			.patch(`${API_URL}/calendar/update-event`, values, {
				params: { id: id },
			})
			.then((response) => {
				console.log(response.data);
				setEvent(response.data.data);
				setSuccessFull(response.data.success);
			})
			.catch((error) => console.log(error.message));
	};

	return successFull ? (
		<ConfirmEmail props={event} />
	) : (
		<div className=" flex justify-center items-center md:pt-10">
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				{(props) => {
					console.log(props);
					return (
						<Form>
							<p className=" text-center m-2 p-2 text-4xl text-slate-800 border-b-2 shadow-sm font-bold ">
								Fill the form
							</p>

							<div className=" flex flex-col md:w-96 justify-start items-baseline space-x-1 mb-5 ">
								<label htmlFor="name" className=" uppercase ">
									Name*
								</label>
								<Field
									name="name"
									placeholder="Event Full Name"
									className=" md:w-2/3 border-2 border-blue-500 rounded-md  focus:outline-none p-1 md:px-2 "
								/>

								<ErrorMessage
									name="name"
									component="p"
									className=" text-sm italic text-red-600  "
								/>
							</div>

							<div className=" flex flex-col md:w-96 justify-start items-baseline space-x-1 mb-5">
								<label htmlFor="email" className=" uppercase ">
									Email*
								</label>
								<Field
									name="email"
									placeholder="Enter Email"
									className=" border-2 md:w-2/3 border-blue-500 rounded-md  focus:outline-none p-1 md:px-2 "
								/>
								<ErrorMessage
									name="email"
									component="p"
									className=" text-sm italic text-red-600  "
								/>
							</div>

							<div className=" flex flex-col md:w-96 justify-start items-baseline space-x-1 mb-5">
								<label htmlFor="comment" className="">
									Please share anything that will help prepare
									for our meeting.
								</label>
								<Field
									name="comment"
									as="textarea"
									placeholder="Enter comment "
									className=" border-2 h-24 md:w-11/12 border-blue-500 rounded-md  focus:outline-none p-1 md:px-2 "
								/>
								<ErrorMessage
									name="comment"
									component="p"
									className=" text-sm italic text-red-600  "
								/>
							</div>

							<div>
								<button
									type="submit"
									onClick={props.handleSubmit}
									className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline visited:bg-green-600">
									Schedule Event
								</button>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default UserBooking;
