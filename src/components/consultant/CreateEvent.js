import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Booked from "./Booked";
import { API_URL } from "../../config/server-config";
import { useParams } from "react-router-dom";

const CreateEvent = () => {
	const { id } = useParams();
	// console.log(id);
	const [successFull, setSuccessFull] = useState(false);

	const initialValues = {
		name: "",
		summary: "",
		location: "",
		startDateTime: "",
		endDateTime: "",
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().min(3, "Too Short!").max(70, "Too Long!").required(),
		location: Yup.string().required(),
		summary: Yup.string()
			.min(10, "Too Short!")
			.max(1000, "Too Long!")
			.required(),
		startDateTime: Yup.string().required(),
		endDateTime: Yup.string().required(),
	});

	const handleSubmit = (values) => {
		axios
			.post(`${API_URL}/calendar/create-event`, values, {params: {id: id}})
			.then((response) => {
				// console.log(response.data);
				setSuccessFull(response.data.success);
			})
			.catch((error) => console.log(error.message));
	};

	const CustomInputDate = (props) => (
		<input className="" type="datetime-local" {...props} />
	);

	return successFull ? (
		<Booked />
	) : (
		<div className=" h-full w-full flex justify-center bg-slate-200 max-h-full ">
			<div className=" h-full w-full md:w-1/2  flex justify-center space-y-5 border-2 rounded-xl bg-white my-8 md:mx-40 lg:mx-80 ">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{(props) => {
						console.log(props);
						return (
							<Form>
								<p className=" text-center m-2 p-2 text-2xl text-blue-600 border-b-2 shadow-sm ">
									Submit Event Details
								</p>

								<div className=" flex flex-col md:w-96 justify-start items-baseline space-x-1 mb-5 ">
									<label
										htmlFor="name"
										className=" uppercase ">
										Name of event
									</label>
									<Field
										name="name"
										placeholder="Event Name"
										className=" md:w-2/3 border-2 border-blue-500 rounded-md  focus:outline-none p-1 md:px-2 "
									/>
									{/* <input
										type="text"
										id="name"
										name="name"
										value={props.values.name}
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										placeholder="Enter name of event "
										className=" border-2 border-blue-500 rounded-md  focus:outline-none p-1 md:px-2 "
									/> */}
									<ErrorMessage
										name="name"
										component="p"
										className=" text-sm italic text-red-600  "
									/>
									{/* {props.errors.name &&
										props.touched.name && (
											<p className=" text-sm italic font-light ">
												{props.errors.name}
											</p>
										)} */}
								</div>

								<div className=" flex flex-col md:w-96 justify-start items-baseline space-x-1 mb-5">
									<label
										htmlFor="location"
										className=" uppercase ">
										Location
									</label>
									<Field
										name="location"
										placeholder="Enter Location "
										className=" border-2 md:w-2/3 border-blue-500 rounded-md  focus:outline-none p-1 md:px-2 "
									/>
									<ErrorMessage
										name="location"
										component="p"
										className=" text-sm italic text-red-600  "
									/>
								</div>

								<div className=" flex flex-col md:w-96 justify-start items-baseline space-x-1 mb-5">
									<label
										htmlFor="summary"
										className=" uppercase ">
										Enter Summary
									</label>
									<Field
										name="summary"
										as="textarea"
										placeholder="Enter Summary "
										className=" border-2 h-24 md:w-11/12 border-blue-500 rounded-md  focus:outline-none p-1 md:px-2 "
									/>
									<ErrorMessage
										name="summary"
										component="p"
										className=" text-sm italic text-red-600  "
									/>
								</div>

								<div className=" flex flex-col md:flex-row md:space-x-4">
									<div className=" flex flex-col  justify-start items-baseline space-x-1 mb-5">
										<label
											htmlFor="startDateTime"
											className="uppercase ">
											start event date
										</label>
										<Field
											name="startDateTime"
											as={CustomInputDate}
											placeholder="Enter Date "
											className=" border-2 border-blue-500 rounded-md  focus:outline-none p-1 md:px-2 "
										/>
										<ErrorMessage
											name="startDateTime"
											component="p"
											className=" text-sm italic text-red-600  "
										/>
									</div>

									<div className=" flex flex-col  justify-start items-baseline space-x-1 mb-5">
										<label
											htmlFor="endDateTime"
											className="uppercase ">
											end evnt date
										</label>
										<Field
											name="endDateTime"
											as={CustomInputDate}
											placeholder="Enter Date "
											className=" border-2 border-blue-500 rounded-md  focus:outline-none p-1 md:px-2 "
										/>
										<ErrorMessage
											name="endDateTime"
											component="p"
											className=" text-sm italic text-red-600  "
										/>
									</div>
								</div>

								<div>
									<button
										type="submit"
										onClick={props.handleSubmit}
										className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
										Submit
									</button>
									<button
										type="reset"
										onClick={props.handleReset}
										className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
										Reset
									</button>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
			<div></div>
		</div>
	);
};

export default CreateEvent;
