/**
 * Format a date object as "YYYY-MM-DD"
 * @param {Date} date The date to format
 * @returns {string} The formatted date in "YYYY-MM-DD" format
 */
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
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
 * @returns {string} For example "2024-04-17"
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
 * Creates a Date object from a string and extracts the local date in "YYYY-MM-DD" format.
 * @param {string} dateString - The date string from which to create the Date object.
 * @returns {string} The date in "YYYY-MM-DD" format.
 * @throws {TypeError} If the input is not a valid Date string or Date conversion fails.
 */
export const extractLocalDate = (dateString) => {
    // Attempt to create a Date object from the input string
    const dateObject = new Date(dateString);
    // Extract the year, month, and day from the Date object
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); 
    const day = String(dateObject.getDate()).padStart(2, '0');
    // Return the formatted date as "YYYY-MM-DD"
    return `${year}-${month}-${day}`;
}