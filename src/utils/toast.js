import { toast } from "react-toastify";

const toastStyle = {
  position: "top-center",
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};
export const success_toast = (info) => {
  toast.success(`${info}`, toastStyle);
};
export const error_toast = (info) => {
  toast.error(`${info}`, toastStyle);
};
