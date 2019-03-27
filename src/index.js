import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import AlbumstoreService from "./services/gallery-service";
import { GalleryServiceProvider } from "./components/gallery-service-context";

import store from "./store";

const albumstoreService = new AlbumstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <GalleryServiceProvider value={albumstoreService}>
        <Router>
          <App />
        </Router>
      </GalleryServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
