import hotToast, { type ToastOptions } from "react-hot-toast";

const baseToastStyles: ToastOptions = {
  style: {
    padding: "16px 20px",
    borderRadius: "8px",
    fontSize: "15px",
    maxWidth: "350px",
    display: "flex",
    alignItems: "center",
    gap: "9px",
  },
};

const successToastStyles: ToastOptions = {
  ...baseToastStyles,
  iconTheme: {
    primary: "#22c55e",
    secondary: "#fff",
  },
};

const errorToastStyles: ToastOptions = {
  ...baseToastStyles,
  iconTheme: {
    primary: "#ef4444",
    secondary: "#fff",
  },
};

type ToastType = "info" | "success" | "error";

function toast(
  type: ToastType,
  message: string,
  options?: ToastOptions,
): string {
  const customOptions: ToastOptions = {
    ...options,
    style: {
      ...baseToastStyles.style,
      ...options?.style,
    },
  };

  switch (type) {
    case "success":
      return hotToast.success(message, {
        ...successToastStyles,
        ...customOptions,
      });
    case "error":
      return hotToast.error(message, { ...errorToastStyles, ...customOptions });
    case "info":
    default:
      return hotToast(message, {
        ...baseToastStyles,
        ...customOptions,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="h-6 w-6 fill-blue-500"
          >
            <path d="M425-265h110v-255H425v255Zm55-315q25.5 0 42.75-17.25T540-640q0-25.5-17.25-42.75T480-700q-25.5 0-42.75 17.25T420-640q0 25.5 17.25 42.75T480-580Zm0 534q-91 0-169.99-34.08-78.98-34.09-137.41-92.52-58.43-58.43-92.52-137.41Q46-389 46-480q0-91 34.08-169.99 34.09-78.98 92.52-137.41 58.43-58.43 137.41-92.52Q389-914 480-914q91 0 169.99 34.08 78.98 34.09 137.41 92.52 58.43 58.43 92.52 137.41Q914-571 914-480q0 91-34.08 169.99-34.09 78.98-92.52 137.41-58.43 58.43-137.41 92.52Q571-46 480-46Z" />
          </svg>
        ),
      });
  }
}

export default toast;
