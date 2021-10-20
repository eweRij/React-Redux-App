import axios from "./axios";

export const userRegister = (user) => {
  axios.post(`/register`, user);
};

export const userLogin = (user) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/login`, user)
      .then((resp) => {
        console.log("resolve");
        resolve(resp);
      })
      .catch((err) => {
        console.log("reject");
        reject(new Error(err));
      });
  });
}; //jesli bez type scrip to musi byc tu ze promise:/
