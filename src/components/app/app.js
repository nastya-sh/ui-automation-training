import React from "react";
import { Route, Switch } from "react-router-dom";
import { AlbumsListPage, AlbumPage } from "../page";
import HeaderApp from "../header-app";
import TabMenu from "../tab-menu";

import "./app.css";
const App = () => {
  return (
    <main role="main" className="container">
      <HeaderApp />
      <TabMenu />
      <Switch>
        <Route path="/" component={AlbumsListPage} exact />
        <Route path="/albums/:id" component={AlbumPage} />
      </Switch>
    </main>
  );
};

export default App;
