import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainContainer = () => {

	return (
		<main className=" h-full w-full flex flex-col justify-center pt-4">
			{/* section 1 */}
			<Header/>

			{/* section 2 */}
			<Outlet />
		</main>
	);
};

export default MainContainer;
