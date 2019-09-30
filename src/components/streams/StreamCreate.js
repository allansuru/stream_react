import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StremForm from "./StremForm";

export class StreamCreate extends React.Component {
  onSubmit = formValues => this.props.createStream(formValues);

  sendOk = value => {
    console.log(value);
  };

  render() {
    return (
      <div>
        <h3>Create a Strem</h3>
        <StremForm sendOk={this.sendOk} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
