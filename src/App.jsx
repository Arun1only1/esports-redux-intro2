import React from "react";
import UserDetailsForm from "./component/UserDetailsForm";
import "./App.css";
import DisplayData from "./component/DisplayData";
import LiveDisplay from "./component/LiveDisplay";
import CustomSnackbar from "./component/CustomSnackbar";
const App = () => {
  return (
    <div>
      <UserDetailsForm />
      <DisplayData />
      <LiveDisplay />
      <CustomSnackbar />
    </div>
  );
};

export default App;
