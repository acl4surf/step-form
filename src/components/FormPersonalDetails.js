import React, { Component } from "react";
import { Button, Tab, TextField } from "@mui/material";
import { ButtonAppBar } from "./AppBarBasic";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <ButtonAppBar title="Enter Personal Details" />
        <br />
        <TextField
          label="Occupation"
          helperText="Enter Occupation"
          onChange={handleChange("job")}
          defaultValue={values.job}
        />
        <TextField
          label="City"
          helperText="Enter City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <br />
        <TextField
          label="Birth Year"
          helperText="Enter Birth Year"
          onChange={handleChange("YOB")}
          defaultValue={values.YOB}
        />
        <br />
        <br />
        <Button variant="contained" label="continue" onClick={this.continue}>
          Continue
        </Button>
        <br />
        <br />
        <Button
          variant="contained"
          label="back"
          color="secondary"
          onClick={this.back}
        >
          Back
        </Button>
      </div>
    );
  }
}

export default FormPersonalDetails;
