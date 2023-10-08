import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, setDoc } from "firebase/firestore";
import {
  Button,
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { db } from "../../config/firebase";
export default function SimpleRegistrationForm({ handleOpen }) {
  const StdDefault = {
    rollNo: "",
    name: "",
    phone: "",
    email: "",
  };
  const [stdData, setStdData] = useState(StdDefault);

  const handelChange = (e) => {
    // Handel change
    return setStdData({
      ...stdData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Handel submit
    try {
      console.log(stdData);
      await setDoc(doc(db, "students", stdData.rollNo), stdData);
      toast.success("Data Added successfully");
      setStdData(StdDefault);
      return;
    } catch (error) {
      toast.error("Error in adding document ");
      console.log("Error", error.message);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Add Student
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details of Student
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-full">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            name="rollNo"
            type="number"
            value={stdData.rollNo}
            size="lg"
            label="Roll No."
            onChange={(e) => handelChange(e)}
          />
          <Input
            name="name"
            value={stdData.name}
            size="lg"
            label="Name"
            onChange={(e) => handelChange(e)}
          />
          <Input
            name="phone"
            value={stdData.phone}
            size="lg"
            label="Phone"
            onChange={(e) => handelChange(e)}
          />
          <Input
            name="email"
            value={stdData.email}
            size="lg"
            label="Email"
            onChange={(e) => handelChange(e)}
          />
        </div>

        <div className="flex justify-end">
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-2 bg-red-50 my-6"
          >
            <span>Close</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={(e) => handleSubmit(e)}
            className=" bg-green-100 my-6"
          >
            <span>Add Data</span>
          </Button>
        </div>
        <ToastContainer />
      </form>
    </Card>
  );
}
