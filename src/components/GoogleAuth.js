import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1053139855552-4uqffvaon9lub3c2s7i6b0peenq9tnk8.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignIn = () => this.auth.signIn();
  onSignOut = () => this.auth.signOut();

  onAuthChange = isSignedIn =>
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>Nao estamos logados</div>;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui google plus button" onClick={this.onSignOut}>
          <i className="google plus icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui google plus button" onClick={this.onSignIn}>
          <i className="google plus icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
