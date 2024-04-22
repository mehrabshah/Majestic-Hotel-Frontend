import React from 'react';

const ConferenceFacts = () => {
  return (
    <div className="py-5 bg-white w-full">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full md:w-11/12 lg:w-11/12 xl:w-8/12 mx-auto">
            <div className="flex flex-wrap align-items-center">
              <div className="w-full md:w-5/12 lg:w-5/12 xl:w-6/12">
                <h4 className="font-bold text-2xl text-uppercase mb-3">Facts</h4>
                <p className="text-gray-600 pr-5 mb-0">
                  Our conference rooms and banquet halls serve as ideal venues for launches, receptions and annual events with a large number of business and presentation facilities.
                </p>
              </div>
              <div className="w-full md:w-7/12 lg:w-7/12 xl:w-6/12">
                <div className="mt-2">
                  <h6 className="font-medium border-t-2 border-b-2 border-brand-600 py-2 my-0 pl-2"><span className="w-1/4 inline-block">9</span><span className="font-bold ml-5"> Conference Rooms</span></h6>
                  <h6 className="font-medium border-b-2 border-brand-600 py-2 my-0 pl-2"><span className="w-1/4 inline-block">13</span><span className="font-bold ml-5"> Convention Facilities</span></h6>
                  <h6 className="font-medium border-b-2 border-brand-600 py-2 my-0 pl-2"><span className="w-1/4 inline-block">6</span> <span className="font-bold ml-5">Banquet Halls</span></h6>
                  <h6 className="font-medium border-b-2 border-brand-600 py-2 my-0 pl-2"><span className="w-1/4 inline-block">37,101 sq ft</span><span className="font-bold ml-5">  Largest Hall </span></h6>
                  <h6 className="font-medium border-b-2 border-brand-600 py-2 my-0 pl-2"><span className="w-1/4 inline-block">630 sq ft</span> <span className="font-bold ml-5">Largest Conference Room</span></h6>
                  <h6 className="font-medium border-b-2 border-brand-600 py-2 my-0 pl-2"><span className="w-1/4 inline-block">2000</span> <span className="font-bold ml-5">Capacity for Largest Hall</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceFacts;
