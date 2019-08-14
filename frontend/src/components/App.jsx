import React, { Component } from "react";
import getFinance from "../Helpers/getFinancial";

export default class components extends Component {
  state = {
    value: ""
  };

  componentDidMount() {
    getFinance("mglu3");
  }
  render() {
    return (
      <div>
        <div>Hello</div>
        <p>World</p>
      </div>
    );
  }
}
