import React from "react";
import Calendar from "./component/calendar";
import Navbar from "./component/navbar";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Calendar />
      </>
    );
  }
}