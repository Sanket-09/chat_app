import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex justify-between h-screen w-screen sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    <Sidebar />
    <MessageContainer />
</div>

	);
};
export default Home;
