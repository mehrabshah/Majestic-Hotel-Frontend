import React from "react";
import "./Categories.css";
import Category from "./components/Category";
import { useCategories } from "./hooks/useCategories";
const features = [
  "Air-conditioning",
  "Bathroom amenities",
  "Hair dryer",
  "Safe in room",
  "Writing Desk and chair",
  "Iron and ironing board on request",
  "Room service",
  "Complimentary bottled water",
];
function Categories() {
  const { Categories, isLoading, error } = useCategories();
  return (
    <div>
      <div className="accomodation accomodation-banner">
        <div className="col-md-12 py-0 py-md-5 text-center">
          <h2 className=" ft-17 border-bottom d-inline-block px-3 border-color-dark  mx-auto pt-5 pb-2 text-uppercase">
            Accommodation
          </h2>
          <h4 className=" text-uppercase p-fair pt-2">Rooms Overview</h4>
          <p className=" pt-2 px-4 col-12 col-md-6 col-lg-6 col-xl-3 mx-auto">
            Choose from a total of 605 lavishly furnished rooms, with sleek and
            inviting interior perfectly set to create an unforgettable luxury
            experience.
          </p>
        </div>
      </div>
      <div>
        <div className="lg:max-w-screen-lg  ps-4 pe-4 mx-auto">
          {Categories.map((category) => (
            <div key={category.id} className="mt-4 mt-lg-0">
                <Category
                    orderFirst={`${category.id % 2 === 0 ? 'order-lg-1' : 'order-lg-2'} `}
                    orderSecond={`${category.id % 2 === 0 ? 'order-lg-2' : 'order-lg-1'} `}
                    id={category.id}
                    imgSrc={category.image}
                    heading={category.name}
                    paragraph={category.description}
                    features={features}                 
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
