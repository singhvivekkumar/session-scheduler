import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
// import { formatDate } from "@fullcalendar/core";
// import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
// import { INITIAL_EVENTS, createEventId } from "../../utils/helper";
// import axios from "axios";


const UserCalendar = ({events}) => {
	
	// const handleDateSelect = (arg) => {
	// 	console.log(arg);
	// };

	return (
		<FullCalendar
			plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
			headerToolbar={{
				left: "title",
				center: "",
				right: "",
			}}
			initialView="dayGridMonth"
			// timeZone="local"
			editable={true}
			aspectRatio={1}
			contentHeight={420}
			events={events}
			selectable={true}
			// selectMirror={true}
			// dayMaxEvents={true}
			// weekends={false}
			// initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
			// select={handleDateSelect}
			// eventContent={renderEventContent} // custom render function
			// eventClick={handleEventClick}
			// eventsSet={handleEvents} // called after events are initialized/added/changed/removed
			
		/>
	);
};

export default UserCalendar;
