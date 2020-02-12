import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncreament, onDecrement, onDelete } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          {/* style={{fontSize:30}} */}
          <span className={this.getCounterStyle(counter)}>
            {this.formatCount(counter)}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncreament(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(counter.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getCounterStyle(counter) {
    let counterStyleClasses = "badge m-2 badge-";
    counterStyleClasses += counter.value === 0 ? "warning" : "primary";
    return counterStyleClasses;
  }

  formatCount(counter) {
    const { value: count } = counter;
    return <span>{count == 0 ? "zero" : count}</span>;
  }
}

export default Counter;
