import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { setRandomText, setUserData } from "../store/slices/userSlice";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../store/slices/snackbarSlice";

// producer of data
const UserDetailsForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
        onSubmit={(values) => {
          //   console.log(values);
          dispatch(setUserData(values));
          //   dispatch(openSuccessSnackbar("User is added successfully."));
          dispatch(openErrorSnackbar("User cannot be added at this time..."));
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid grey",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <TextField label="Email" {...formik.getFieldProps("email")} />

            <TextField label="Password" {...formik.getFieldProps("password")} />

            <TextField
              label="Enter random text"
              onChange={(event) => {
                dispatch(setRandomText(event.target.value));
              }}
            />

            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default UserDetailsForm;
