import Slider from "react-slick";
import "./SliderEvents.css";
function SliderEvents() {
	let settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};
	return (
		<Slider {...settings} className="pt-4">
			<img src="./assets/Dinning/interior-1.jpg" alt="banner-2" />
			<img src="./assets/Dinning/interior-2.jpg" alt="banner-2" />
			<img src="./assets/Dinning/interior-3.jpg" alt="banner-2" />
			<img src="./assets/Dinning/interior-4.jpg" alt="banner-2" />
			<img src="./assets/Dinning/interior-5.jpg" alt="banner-2" />
			<img src="./assets/Dinning/interior-6.jpg" alt="banner-2" />
		</Slider>
	);
}
export default SliderEvents;
