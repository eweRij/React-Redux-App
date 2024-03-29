import axios from "./axios";

export const userRegister = async (user) => {
  await axios.post(`user/register`, user);
};

export const userLogin = (user) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`user/login`, user)
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`user/getUser`, id)
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const addTaskDB = (id, task) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`tasks/addTask`, { id, task })
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getTasks = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`tasks/getTasks`, id)
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const setDone = (id, user) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`tasks/getTasks/${id}`, user)
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteTask = (id, user) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`tasks/removeTask/${user._id}/${id}`)
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const setAvatar = (userId, avatar) => {
  return new Promise((resolve, reject) => {
    const avatarArray = Array.from(avatar);
    let formData = new FormData();
    formData.append("avatar", avatarArray[0]);
    axios
      .patch(`user/${userId}/avatar`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const verifyUser = (code) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`user/confirm/${code}`)
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
