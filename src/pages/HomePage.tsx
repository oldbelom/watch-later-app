import React from "react";
import SearchBlock from "../components/SearchBlock/SearchBlock";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Watch later</h1>
        <SearchBlock />
      </div>
    );
  }
}
