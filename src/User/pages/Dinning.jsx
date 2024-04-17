import React from "react";
import Navbar from "../components/ui/Navbar/Navbar";
import Footer from "../components/ui/Footer/Footer";
import Hero from "../components/Dining/Hero/Hero";
import Resturant from "../components/Dining/Resturant/Resturant";

function Dinning() {
	return (
		<>
			<Navbar />
			<Hero />
			<Resturant />
			<Footer />
		</>
	);
}

export default Dinning;
