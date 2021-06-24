import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";
import UserList from "./users/UserList";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="container">
      <ToastContainer />
      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
            <Route path="/users" exact component={UserList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
