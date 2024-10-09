import { useState } from "react";
import { api } from "~/lib/api";
import Button from "../base/Button";
import { tw } from "~/lib/utils";
import toast from "~/lib/toast";
import Textarea from "./Textarea";

type Props = {
  //
};

const baseClasses =
  "fixed lg:bottom-10 bottom-3 right-3 lg:right-10 border border-bg-200 rounded-lg shadow bg-white transition-all duration-150 ease-in-out z-20";

const sentimentClasses = "w-10 h-10 fill-slate-300 cursor-pointer";

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    className="h-7 w-6 scale-x-[-1] transform fill-slate-500"
  >
    <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm283-310 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z" />
  </svg>
);

const Feedback: React.FC<Props> = ({}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedSentiment, setSelectedSentiment] = useState<
    "bad" | "neutral" | "happy" | undefined
  >(undefined);

  const { mutate: sendFeedback } = api.user.sendFeedback.useMutation({});

  if (isOpen) {
    return (
      <div className={tw(baseClasses, "max-w-[25rem]")}>
        <div className="flex justify-between border-b px-6 py-4">
          <div className="flex gap-3 text-xl font-medium text-slate-600">
            {icon} Feedback / Help
          </div>
          <button onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              className="fill-slate-500"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-4">
          <p className="mt-3">
            If you need any help or just have feedback please enter it here.{" "}
            <br />
            <br />
            You can also email me at{" "}
            <a href="mailto:crauxy@gmail.com" className="text-blue-400">
              crauxy@gmail.com
            </a>
          </p>
          <div className="my-9 flex justify-center gap-9 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className={tw(
                sentimentClasses,
                selectedSentiment === "bad" && "fill-red-500",
              )}
              onClick={() => setSelectedSentiment("bad")}
            >
              <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 100q-68 0-123.5 38.5T276-280h66q22-37 58.5-58.5T480-360q43 0 79.5 21.5T618-280h66q-25-63-80.5-101.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className={tw(
                sentimentClasses,
                selectedSentiment === "neutral" && "fill-blue-500",
              )}
              onClick={() => setSelectedSentiment("neutral")}
            >
              <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm20 180h240v-60H360v60ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className={tw(
                sentimentClasses,
                selectedSentiment === "happy" && "fill-green-500",
              )}
              onClick={() => setSelectedSentiment("happy")}
            >
              <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
            </svg>
          </div>
          <Textarea
            placeholder="Enter your feedback / help request here..."
            className="mt-9"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="mb-3 mt-6 flex justify-end">
            <Button
              onClick={() => {
                sendFeedback({
                  sentiment: selectedSentiment ?? "none",
                  message: message,
                });
                toast("success", "Feedback sent! Thank you 🙏", {
                  duration: 2000,
                });
                setIsOpen(false);
                setMessage("");
                setSelectedSentiment(undefined);
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      className={tw(
        baseClasses,
        "flex gap-2 border-slate-200 px-3 py-2 font-medium text-slate-500 hover:border-slate-300",
      )}
      onClick={() => setIsOpen(true)}
    >
      {icon} Feedback / Help
    </button>
  );
};

export default Feedback;
