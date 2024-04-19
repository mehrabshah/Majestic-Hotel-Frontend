import "./Enquiry.css";
function Enquiry() {
	return (
		<section className="">
			<div className=" enquiry position-relative ">
				<div className="lg:max-w-screen-lg  ps-4 pe-4 mx-auto">
					<div className="row">
						<div className="col-md-12 py-5 text-center">
							<h2 className="mb-2 enquiry__title">
								MAJESTIC-CONTINENTAL HOTEL ENGLAND
							</h2>

							<h4 className="mb-2">Begin Your Story With Us</h4>

							<p>
								Celebrate life's special moments in majesty at the Sea Front
								Majestic Hotel, where unforgettable memories are made and dreams
								come true. Our exquisite venue is perfect for weddings,
								birthdays, parties, corporate events, and more.
							</p>

							<div className="button-hov">
								{" "}
								<a
									href="/"
									className="text-uppercase inquery-section ft-22 g-bold border-top border-bottom py-2 border-color text-yellow text-center mx-auto d-block btn-1"
								>
									{" "}
									<span>Enquire now</span>
								</a>{" "}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Enquiry;
