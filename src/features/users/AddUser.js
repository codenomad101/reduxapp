import React from "react";
import Button from "../../Components/Button";
import TextField from "../../Components/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";

const AddUser = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const handleUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: "3",
        names: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto gap-3">
      <TextField
        label="Name "
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "John Doe" }}
      />
      <br />
      <TextField
        label="Email "
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "Johndoe@mail.com" }}
      />
      <Button onClick={handleUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
