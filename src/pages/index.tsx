import Button from "~/components/base/Button";
import Label from "~/components/base/Label";
import Loader from "~/components/base/Loader";
import Textarea from "~/components/base/Textarea";
import toast from "~/lib/toast";

export default function Home() {
  return (
    <main className="container min-h-screen">
      <h1 className="font-header text-2xl font-bold">Header Font</h1>
      <p className="my-3 font-body">
        Cheese wheels dance merrily under starlit skies while purple elephants
        play jazz on crystal pianos. Whimsical butterflies knit sweaters for
        grumpy clouds as laughter echoes through forests of candied bacon trees.
        Sneaky typewriters gossip with chatty teacups about the secret lives of
        mismatched socks and their daring escape from laundry baskets.
      </p>
      <div className="">
        <Label>Text Area:</Label>
        <Textarea />
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
    </main>
  );
}
