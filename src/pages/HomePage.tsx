import React from "react";

export default class HomePage extends React.Component {
  state = {
    value: "",
  };

  render() {
    return (
      <div className="home">
        <h1>Watch later</h1>
        <form>
          <input type="text" value={this.state.value} />
          <button type="submit">Найти фильм</button>
        </form>
      </div>
    );
  }
}
