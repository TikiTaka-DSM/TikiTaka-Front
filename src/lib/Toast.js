import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Success = (message) => {
  toast.success(message, {
    autoClose: 3000,
  });
};

export const Error = (message) => {
  toast.error(message, {
    autoClose: 2000,
    position: "top-right",
  });
};

export const Warning = (message) => {
  toast.warning(message, {
    autoClose: 3000,
  });
};
