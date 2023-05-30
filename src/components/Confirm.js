import React, { Component } from "react";
import { Button, Tab, TextField } from "@mui/material";
import { ButtonAppBar } from "./AppBarBasic";
import { List, ListItem, ListItemText } from "@mui/material";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    //PROCESS FORM//
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { fName, lName, email, job, city, YOB },
    } = this.props;

    return (
      <div>
        <ButtonAppBar title="Confirm Personal Details" />
        <br />
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={fName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={job} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Birth Year" secondary={YOB} />
          </ListItem>
        </List>
        <br />
        <br />
        <Button variant="contained" label="confirm" onClick={this.continue}>
          Confirm
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

export default Confirm;
