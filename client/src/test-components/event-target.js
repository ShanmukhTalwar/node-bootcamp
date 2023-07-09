import React from 'react';

class MyComponent extends React.Component {
  handleClick(e) {
    console.log(e);
    console.log(e.target); // logs the element that triggered the click event
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    );
  }
}

export default MyComponent;