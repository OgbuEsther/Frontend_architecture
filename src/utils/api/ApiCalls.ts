import axios from "./Api";

export const fetchDictionary = async () => {
  return await axios
    .get("/define")
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
};
