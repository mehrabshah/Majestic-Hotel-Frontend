import "./Hero.css";
function Hero() {
	return (
		<div className="slide-carousal ">
			<div id="carouselExample" className="carousel slide">
				<div className="carousel-inner h-50">
					<div className="carousel-item active ">
						<img
							src="./assets/Dinning/interior-1.jpg"
							className="d-block w-100  slick-image"
							alt="banner-2"
						/>
						<div class="carousel-caption">
							<div className="animate__animated animate__fadeInUp">
								<h1 class=" light-color main-heading-dinning ft-55">
									Fine Dining Restaurants
								</h1>
								<h2 class="fadeInUp-2 text-start text-white mx-auto mt-3 main-paragraph-dinning text-uppercase border-bottom d-inline-block px-3 pb-2">
									Delight Your Palate With Delicious Cuisine
								</h2>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img
							src="./assets/Dinning/interior-2.jpg"
							className="d-block w-100  slick-image"
							alt="banner-3"
						/>
						<div class="carousel-caption">
							<div className="animate__animated animate__fadeInUp">
								<h1 class="light-color main-heading-dinning ft-55">
									Temptation For Every Taste
								</h1>
								<h2 class="fadeInUp-2 text-start text-white mx-auto mt-3 main-paragraph-dinning text-uppercase border-bottom d-inline-block px-3 pb-2">
									Indulge Your Senses{" "}
								</h2>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img
							src="./assets/Dinning/interior-3.jpg"
							className="d-block w-100  slick-image"
							alt="banner-3"
						/>
						<div class="carousel-caption">
							<div className="animate__animated animate__fadeInUp">
								<h1 class="light-color main-heading-dinning ft-55">
									Savour The Ultimate
								</h1>
								<h2 class="fadeInUp-2 text-start text-white mx-auto mt-3 main-paragraph-dinning text-uppercase border-bottom d-inline-block px-3 pb-2">
									Try Our Signature Dishes{" "}
								</h2>
							</div>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}
export default Hero;
