import Enquiry from "../components/Events/Enquiry/Enquiry";
import Gallery from "../components/Events/Gallery/Gallery";
import Hero from "../components/Events/Hero/Hero";
import Footer from "../components/ui/Footer/Footer";
import Navbar from "../components/ui/Navbar/Navbar";

function Events() {
	return (
		<>
			<Navbar />
			<Hero />
			<Enquiry />
			<Gallery />
			<Footer />
		</>
	);
}
export default Events;
