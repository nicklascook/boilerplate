import { useState } from "react";
import Button from "~/components/base/Button";
import Checkbox from "~/components/base/Checkbox";
import Input from "~/components/base/Input";
import Label from "~/components/base/Label";
import Loader from "~/components/base/Loader";
import Select from "~/components/base/Select";
import Textarea from "~/components/base/Textarea";
import Modal from "~/components/base/Modal";
import toast from "~/lib/toast";
import Tooltip from "~/components/base/Tooltip";
import Switch from "~/components/base/Switch";
import Radio from "~/components/base/Radio";
import Popover from "~/components/base/Popover";
import DatePicker from "~/components/base/DatePicker";
import { type DateRange } from "react-day-picker";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const [isCheckboxEnabled, setIsCheckboxEnabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState("option1");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [dateRange, setDateRange] = useState<DateRange>();

  return (
    <main className="container min-h-screen">
      <h1 className="font-header text-2xl font-bold">Header Font</h1>
      <p className="py-2 font-body">
        Cheese wheels dance merrily under starlit skies while purple elephants
        play jazz on crystal pianos. Whimsical butterflies knit sweaters for
        grumpy clouds as laughter echoes through forests of candied bacon trees.
        Sneaky typewriters gossip with chatty teacups about the secret lives of
        mismatched socks and their daring escape from laundry baskets.
      </p>
      <div className="py-2">
        <Label>Text Area:</Label>
        <Textarea placeholder="Type something..." />
      </div>
      <div className="py-2">
        <Label>Text Input:</Label>
        <Input placeholder="Type something..." />
      </div>
      <div className="py-2">
        <Label>Checkbox:</Label>
        <Checkbox
          checked={isCheckboxEnabled}
          onCheckedChange={setIsCheckboxEnabled}
          label="Option 1"
        />
      </div>
      <div className="py-2">
        <Label>Switch:</Label>
        <Switch
          checked={isSwitchEnabled}
          onCheckedChange={setIsSwitchEnabled}
          label="Enable feature"
        />
      </div>
      <div className="py-2">
        <Label>Radio:</Label>
        <Radio
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
          value={selectedValue}
          onValueChange={setSelectedValue}
          name="my-radio-group"
        />
      </div>
      <div className="py-2">
        <Label>Select:</Label>
        <Select
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
          placeholder="Select an option"
        />
      </div>
      <div className="flex gap-3">
        <Button
          label="Show Success Toast"
          onClick={() => toast("success", "Your image has been generated")}
          className="mt-4"
        />
        <Button
          label="Show Info Toast"
          variant="outline"
          onClick={() => toast("info", "Your image has been generated")}
          className="mt-4"
        />
        <Button
          label="Show Error Toast"
          variant="error"
          onClick={() => toast("error", "Your image has not been generated")}
          className="mt-4"
        />
      </div>
      <Loader label="Loading..." size="md" className="my-4" />

      <div className="py-2">
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          title="Confirm Action"
          description="Are you sure you want to perform this action?"
          onConfirm={() => setIsModalOpen(false)}
        ></Modal>
      </div>

      <div className="my-6">
        <Tooltip content="This is a helpful tooltip">
          <p className="inline">Hover here!</p>
        </Tooltip>
      </div>
      <div className="py-3">
        <Popover
          trigger={<Button label="Open Popover" />}
          content={
            <div>
              <h3 className="font-bold">Popover Title</h3>
              <p>This is the popover content.</p>
            </div>
          }
        />
      </div>
      <div className="py-3">
        <Label>Date Picker:</Label>
        <DatePicker date={selectedDate} setDate={setSelectedDate} />
      </div>
      <div className="py-3">
        <Label>Date Range:</Label>
        <DatePicker dateRange={dateRange} setDateRange={setDateRange} />
      </div>
    </main>
  );
}
