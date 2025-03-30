import { Link, Element, scroller } from "react-scroll";
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
                The Horizon Hotel
              </h2>
               <p>
              </p>
              <div className="mt-3">
              <Link
                 to="enquiry"
                 spy={true}
                 smooth={true}
                 duration={500}
                className="border-[#d0902e] border-2 cursor-pointer  mt-3 text-[#d0902e] font-bold py-2 px-4 focus:outline-none"
              >
                ENQUIRE NOW
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
