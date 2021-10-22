import axios from "./axios";

export const userRegister = async (user) => {
  await axios.post(`/register`, user);
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
        reject(err);
      });
  });
}; //jesli bez type scrip to musi byc tu ze promise:/

// export const userLogin = async (user) => {
//   await axios.post(`/login`, user).then((resp) => resp.data);
// };
