import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// context #1
// we are running this file in development in isolation
// we are using our local index.html file
// which DEFINITELY has an element with an id of 'dev-products'
// we want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) mount(devRoot);
}

// Context #2
// we are running this file in development or production
// through the CONTAINER app
// there is no GUARANTEE that an element with an id of 'dev-products' exist
// we do not want to immediately render the app
export { mount };
