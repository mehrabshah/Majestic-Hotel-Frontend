const useLocalStorage = () => {
  const setValue = (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const getValue = (key) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.clear();;
    } catch (error) {
      console.error(error);
    }
  };

  return { setValue, getValue, removeValue };
};

export default useLocalStorage;
