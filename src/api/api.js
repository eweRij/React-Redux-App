import axios from "axios";

const { REACT_APP_API_PORT } = process.env;

export const userRegister = (user) => {
  axios.post(`http://localhost:${REACT_APP_API_PORT}/register`, user);
};

export const userLogin = (user) => {
  return new Promise((resolve) => {
    axios
      .post(`http://localhost:${REACT_APP_API_PORT}/login`, user)
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        resolve(err);
      });
  });
}; //jesli bez type scrip to musi byc tu ze promise:/
