import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignIn = () => this.auth.signIn();
  onSignOut = () => this.auth.signOut();

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Nao estamos logados</div>;
    } else if (this.state.isSignedIn) {
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
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

export default GoogleAuth;
