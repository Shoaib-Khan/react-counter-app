import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <React.Fragment>
        {/* style={{fontSize:30}} */}
        <h4>Counter # {this.props.counter.id}</h4>
        <span className={this.getCounterStyle()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncreament(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
        <button className="btn btn-danger btn-sm m-2"
        onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
      </React.Fragment>
    );
  }

  getCounterStyle() {
    let counterStyleClasses = "badge m-2 badge-";
    counterStyleClasses += this.props.counter.value === 0 ? "warning" : "primary";
    return counterStyleClasses;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return <span>{count == 0 ? "zero" : count}</span>;
  }
}

export default Counter;
