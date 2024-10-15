import { useState } from "react";
import { motion } from "framer-motion";
import { api } from "~/lib/api";
import Button from "../base/Button";
import { tw } from "~/lib/utils";
import toast from "~/lib/toast";
import Textarea from "./Textarea";
import Label from "./Label";
import Input from "./Input";

const baseClasses =
  "fixed lg:bottom-10 bottom-3 right-3 lg:right-10 border border-bg-200 rounded-lg shadow bg-white z-20";

const icon = (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    className="h-5 w-5 fill-slate-500"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <path d="M160-240q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720L720-240H160Z" />
  </motion.svg>
);

const Feedback: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { mutate: sendFeedback } = api.user.sendFeedback.useMutation({
    onError: (error) => {
      console.log(error);
      toast("error", "There was an error sending your feedback");
    },
    onSuccess: () => {
      toast("success", "Feedback sent! Thank you 🙏", {
        duration: 2000,
      });
      setIsOpen(false);
      setMessage("");
    },
  });

  if (isOpen) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className={tw(baseClasses, "max-w-[25rem]")}
      >
        <div className="flex justify-between border-b px-6 py-4">
          <div className="flex items-center gap-3 text-xl font-medium text-slate-600">
            {icon} Feedback & Help
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center rounded-base px-2 py-2 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              className="fill-slate-500"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </motion.button>
        </div>
        <div className="flex flex-col gap-4 px-6 py-4">
          <p className="">
            If you need help or have feedback, please enter it here or email{" "}
            <a
              href="mailto:crauxy@gmail.com"
              className="text-blue-500 hover:underline"
            >
              crauxy@gmail.com
            </a>
          </p>
          <div className="">
            <Label>Your Email:</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="">
            <Label>Your Message:</Label>
            <Textarea
              placeholder="Enter your feedback / help request"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <Button
              className="flex items-center gap-1"
              onClick={() => {
                if (!email) {
                  toast("error", "Please enter your email");
                  return;
                }
                if (!(email.includes("@") && email.includes("."))) {
                  toast("error", "Please enter a valid email");
                  return;
                }
                if (!message) {
                  toast("error", "Please include a message");
                  return;
                }
                sendFeedback({
                  email,
                  message,
                });
              }}
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="h-4 w-4 fill-white"
              >
                <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
              </svg>
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={tw(
        baseClasses,
        "flex items-center gap-2 border-slate-200 px-3 py-2 font-medium text-slate-500 hover:border-slate-300",
      )}
      onClick={() => setIsOpen(true)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon} Feedback & Help
    </motion.button>
  );
};

export default Feedback;
