export default function EventsHero() {
  return (
    <>
      <div
        className="relative  bg-cover bg-center h-[30rem]"
        style={{ backgroundImage: `url(./assets/banner-10.jpg)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl fontPlayfair font-bold text-white">
              Events & Celebrations
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white">
              Extraordinary Elegant Venues
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-auto bg-center"
        style={{ backgroundImage: "url(assets/ONLY_DECOR1.png)" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 py-5 text-center">
              <h2 className="fontPlayfair text-xl md:text-2xl font-bold mb-2">
                Majestic Hotel England
              </h2>
              <h4 className="text-xl mb-2">Begin Your Story With Us</h4>
              <p>
                Celebrate an unforgettable events at
                <br />
                Majestic Hotel England's indoor and outdoor venues.
              </p>
              <button
                type="submit"
                className="border-[#d0902e] border-2  mt-3 text-[#d0902e] font-bold py-2 px-4 focus:outline-none"
              >
                ENQUIRE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
