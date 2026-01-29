import { toast } from "react-toastify";

const baseClass =
  "rounded-lg shadow-lg border-l-4 text-sm font-medium";

export const successToast = (msg) =>
  toast.success(msg, {
    className: `${baseClass} border-green-500`,
  });

export const infoToast = (msg) =>
  toast.info(msg, {
    className: `${baseClass} border-blue-500`,
  });

export const errorToast = (msg) =>
  toast.error(msg, {
    className: `${baseClass} border-red-500`,
  });
