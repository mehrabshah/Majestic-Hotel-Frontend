import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { usePriceDetails } from "./hooks/usePriceDetails";
import Modal from "../../components/Modal";
import Button from "../../../User/components/Shared/Button/Button";
import { useForm } from "react-hook-form";
import { Input } from "../../components/ui/Input";
import {addPrices} from "../../services/apiPrices"
function Calender({ categoryId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { price } = usePriceDetails(categoryId);
  const [calenderPrice,setCalenderPrice]=useState(null);
  
  const [date, setdDate] = useState(null);
  //Function to opne the modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  //Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleDateClick = (arg) => {
    setdDate(arg.dateStr);
    openModal();
  };

  const onSubmit = async (data) => {
    const objdata={
      date:date,
      price: parseInt(data.price),
      categoryId:categoryId
    }
    const response= await addPrices(objdata)
    setCalenderPrice(response)
    reset();
    closeModal();
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        events={price}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold mb-3">Update Price</h2>
          <div>
            <span className="text-xl font-bold me-2 ">Date:</span>
            {date}
          </div>
          <div className="pb-6">
            <Input
              label="Enter Price"
              placeholder="Enter Price"
              register={register("price", {
                required: "Price is required",
                pattern: {
                  value: /^[0-9]+(\.[0-9]{1,2})?$/,
                  message: "Enter a valid number",
                },
              })}
              error={errors.price}
            />
          </div>
          <div className="flex  flex-row justify-end">
            <Button
              text="Close"
              type="button"
              backgroundColor="px-4 py-2 font-semibold text-white hover:bg-blue-200  rounded-lg bg-[#2c3e50]"
              onClick={closeModal}
            />
            <Button
              text="Submit"
              type="submit"
              backgroundColor="ms-2  px-4 py-2 font-semibold text-white hover:bg-blue-200  rounded-lg bg-[#2c3e50]"
            />
          </div>
        </form>
      </Modal>
    </>
  );
}

export default Calender;
