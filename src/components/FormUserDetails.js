import { Button, TextField } from "@mui/material";
import React, { Component } from "react";
import { ButtonAppBar } from "./AppBarBasic";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    console.log(values.fName);

    return (
      <div>
        <ButtonAppBar title="Enter User Details" />
        <br />
        <TextField
          label="First Name"
          helperText="Enter First Name"
          onChange={handleChange("fName")}
          defaultValue={values.fName}
          required
          error={!values.fName}
        />
        <TextField
          label="Last Name"
          helperText="Enter Last Name"
          onChange={handleChange("lName")}
          defaultValue={values.lName}
        />
        <br />
        <br />
        <TextField
          label="Email"
          helperText="Enter email"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <br />
        <Button variant="contained" label="continue" onClick={this.continue}>
          Continue
        </Button>
      </div>
    );
  }
}

export default FormUserDetails;
