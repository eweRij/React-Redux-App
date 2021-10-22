import { toast, ToastContainer } from "react-toastify";

export const success_toast = (info) => {
  toast.success(`${info}`, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
export const error_toast = (info) => {
  toast.error(`${info}`, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
