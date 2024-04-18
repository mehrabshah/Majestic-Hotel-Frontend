import { differenceInDays } from "date-fns";
/**
 * Format a date object as "Month Day, Year"
 * @param {Date} date The date to format
 * @returns {string} The formatted date in "Month Day, Year" format
 */
const formatDate = (date) => {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear(); 
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    
    return `${monthNames[monthIndex]} ${day}, ${year}`;
  };


/**
 * get current date
 * @param {Date} date
 * @returns {string} For example "2024-04-16"
 */
export const getCurrentDate = () => {
    const currentDate = new Date();
    return formatDate(currentDate);
};

/**
 * get date after the current date
 * @param {Date} date
 * @returns {string} For example "Month Day, Year" format
 */
export const getDateAfterCurrentDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    return formatDate(currentDate);
};

/**
 * Object that we will sned to availibility Form
 * @returns {object} 
 */
export const getAvailibilityObject=()=>{
    const AvailabilityObject={
        startDate: getCurrentDate(),
        endDate:getDateAfterCurrentDate()   
    }
    return AvailabilityObject
}

/**
 * Creates a Date object from a string and extracts the local date in "Day Month Year" format.
 * @param {string} dateString - The date string from which to create the Date object.
 * @returns {string} The date in "Day Month Year" format
 */
export const extractLocalDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const month = monthNames[dateObject.getMonth()];
    const day = dateObject.getDate();
    // Return the formatted date as "Day Month Year"
    return `${day} ${month} ${year}`;
}

/**
 * Calculates the number of nights between two dates.
 * @param {Date} startDate - The start date.
 * @param {Date} endDate - The end date.
 * @returns {number} The number of nights.
 */
export const calculateNumberOfNights = (startDate, endDate) => {
    const nights = differenceInDays(new Date(endDate), new Date(startDate));
    return nights;
  };


  /**
 * Converts a date from the format "Month Day, Year" to "YYYY-MM-DD" format.

 * @param {string} inputDate - The date string to be converted. Format: "Month Day, Year".
 * @returns {string} The converted date string in "YYYY-MM-DD" format.
 */
export const formatedDate=(inputDate)=> {
    const monthNames = {
        January: '01', February: '02', March: '03', April: '04',
        May: '05', June: '06', July: '07', August: '08',
        September: '09', October: '10', November: '11', December: '12'
    };
    const parts = inputDate.split(' ');
    const month = parts[0];
    const day = parseInt(parts[1], 10); 
    const year = parts[2];

    const formattedDay = day < 10 ? `0${day}` : day;
    const monthNumber = monthNames[month];

    // Return the formatted date string
    return `${year}-${monthNumber}-${formattedDay}`;
}
