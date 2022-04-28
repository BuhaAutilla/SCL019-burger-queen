import React from "react";
import TodoMenu from "../data/menu.js";


class Desayuno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: {}
    };
    // this.resetArray = this.props.resetArray();
  }

  render() {
    return (
        <div>
          <div>
            <div className="line"></div>
            {TodoMenu.map(btn => (
              <button
                onClick={() => this.props.agregar(btn.name, btn.value)}
                className="main-button">
                <img src={btn.img} alt="icon"></img>
                <div>
                  <p>{btn.name}</p>
                </div>
                <div>
                  <p className="item-price">${btn.value}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
    );
  }
}

export default Desayuno;