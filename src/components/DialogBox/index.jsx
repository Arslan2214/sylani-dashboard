import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import {
  ReloadOutlined,
} from "@ant-design/icons";

import FormContent from "../Form";

export default function DialogSizes({ getStudentData }) {
  const [size, setSize] = React.useState(null);

  const handleOpen = (value) => setSize(value);

  return (
    <div className="container">
      <div className="flex justify-end items-center px-4 mt-3 mb-6">
        <div
          className="font-bold cursor-pointer text-gray-500"
          onClick={() => getStudentData()}
        >
          <Typography
            variant="large"
            color="blue-gray"
            className="px-1 aspect-square mr-3 shadow-md rounded-full"
          >
            <ReloadOutlined />
          </Typography>
        </div>
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
