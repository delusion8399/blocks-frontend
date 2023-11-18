const DB = {
  storeData: (key: string, value: string) => {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
    return true;
  },
  retrieveData: (key: string) => {
    try {
      const value = localStorage.getItem(key) as string;
      return JSON.parse(value);
    } catch (error) {
      console.log("json parse", error);
      return false;
    }
  },
  removeData: (key: string) => {
    localStorage.removeItem(key);
    return true;
  },
};

export default DB;
