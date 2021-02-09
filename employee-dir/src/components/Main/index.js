import React, { Component } from "react";
import DataArea from "../DataArea/index.js";


export default class Main extends Component {
  render() {
    return (
        //Empty fragment for wrapper .. Don't have to add many more nodes //
      <>
        <DataArea />
      </>
    );
  }
}