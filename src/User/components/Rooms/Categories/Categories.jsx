import React from "react";
import "./Categories.css";
import Category from "./components/Category";
import { useCategories } from "./hooks/useCategories";
const features = [
  [ 
    "Accomodate upto 2",
    "Spacious work desk",
    "Flat screen Television",
    "Hospitality tray with Tea/Coffee",
    "Telephone",
    "Hair Dryer",
    "Non Smoking Rooms",
    "Wireless Internet",
    "Lift to all floors",
    "Multi-lingual Staff",
  ],
  [
    "Accomodate upto 2",
    "Spacious work desk",
    "Flat screen Television",
    "Hospitality tray with Tea/Coffee",
    "Telephone",
    "Hair Dryer",
    "Non Smoking Rooms",
    "Wireless Internet",
    "Lift to all floors",
    "Multi-lingual Staff",
  ],
  [
    "Accomodate upto 1",
    "Spacious work desk",
    "Flat screen Television",
    "Hospitality tray with Tea/Coffee",
    "Telephone",
    "Hair Dryer",
    "Non Smoking Rooms",
    "Wireless Internet",
    "Lift to all floors",
    "Multi-lingual Staff",
  ],
  [
    "Accomodate upto 2",
    "Spacious work desk",
    "Flat screen Television",
    "Hospitality tray with Tea/Coffee",
    "Telephone",
    "Hair Dryer",
    "Non Smoking Rooms",
    "Wireless Internet",
    "Lift to all floors",
    "Multi-lingual Staff",
  ],
  [
    "Accomodate upto 2",
    "Spacious work desk",
    "Flat screen Television",
    "Hospitality tray with Tea/Coffee",
    "Telephone",
    "Hair Dryer",
    "Non Smoking Rooms",
    "Wireless Internet",
    "Lift to all floors",
    "Multi-lingual Staff",
  ],
  [
    "Accomodate upto 2",
    "Spacious work desk",
    "Flat screen Television",
    "Hospitality tray with Tea/Coffee",
    "Telephone",
    "Hair Dryer",
    "Non Smoking Rooms",
    "Wireless Internet",
    "Lift to all floors",
    "Multi-lingual Staff",
  ],
  [
    "Accomodate upto 3",
    "Spacious work desk",
    "Flat screen Television",
    "Hospitality tray with Tea/Coffee",
    "Telephone",
    "Hair Dryer",
    "Non Smoking Rooms",
    "Wireless Internet",
    "Lift to all floors",
    "Multi-lingual Staff",
  ],
  [
    "Accomodate upto 1",
    "Spacious work desk",
    "Flat screen Television",
    "Hospitality tray with Tea/Coffee",
    "Telephone",
    "Hair Dryer",
    "Non Smoking Rooms",
    "Wireless Internet",
    "Lift to all floors",
    "Multi-lingual Staff",
  ],
];
function Categories() {
  const { Categories } = useCategories();
  return (
    <div>
      <div className="accomodation accomodation-banner">
        <div className="col-md-12 py-0 py-md-5  text-center">
          <h2 className=" ft-17 border-bottom d-inline-block px-3 border-color-dark  mx-auto pt-5 pb-2 text-uppercase">
            Accommodation
          </h2>
          <h4 className=" text-uppercase p-fair pt-2">Rooms Overview</h4>
          <p className=" pt-2 pb-16 px-4 col-12 col-md-6 col-lg-6 col-xl-3 mx-auto">
            Choose from a total of 96 lavishly furnished rooms, with sleek and
            inviting interior perfectly set to create an unforgettable luxury
            experience.
          </p>
        </div>
      </div>
      <div>
        <div className="lg:max-w-screen-lg  ps-4 pe-4 mx-auto">
          {Categories.map((category,index) => (
            <div key={category.id} className="mt-4 mt-lg-0">
              <Category
                orderFirst={`${
                  category.id % 2 === 0 ? "order-lg-1" : "order-lg-2"
                } `}
                orderSecond={`${
                  category.id % 2 === 0 ? "order-lg-2" : "order-lg-1"
                } `}
                id={category.id}
                imgSrc={category.image}
                heading={category.name}
                paragraph={category.description}
                features={features[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
