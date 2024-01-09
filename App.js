import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div id="parent">
 *  <div id="child1">
 *      <h1>h1 tag</h1>
 *  </div>
 * </div>
 *
 */

const Title = () => (
  <div id="title">
    <h1>This is title component</h1>
  </div>
);

const HeadingComponent = () => (
  <div id="heading">
    {Title()}
    <h1>This is a heading component</h1>
  </div>
);

// now we need to render this heading into the root dom
var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
