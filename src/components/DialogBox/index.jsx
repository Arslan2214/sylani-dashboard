import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";

import FormContent from "../Form";

export default function DialogSizes() {
  const [size, setSize] = React.useState(null);

  const handleOpen = (value) => setSize(value);

  return (
    <div className="container">
      <div className="flex justify-end px-4 mt-3 mb-6">
        <div className="text-end">
          <Button
            style={{
              background: "green",
            }}
            onClick={() => handleOpen("sm")}
            variant="gradient"
          >
            Add Student
          </Button>
        </div>
      </div>
      <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogBody style={{ textAlign: "center" }}>
          <FormContent handleOpen={handleOpen} />
        </DialogBody>
      </Dialog>
    </div>
  );
}
