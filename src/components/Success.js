import React, { Component } from "react";
import { ButtonAppBar } from "./AppBarBasic";

export class Success extends Component {
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
        <ButtonAppBar title="Success" />
        <br />
        <h1>Thank Your For Your Submission.</h1>
        <p>Your will receive an email confirmation.</p>
      </div>
    );
  }
}

export default Success;
