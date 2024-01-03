/**
 * <div id="parent">
 *  <div id="child1">
 *      <h1>h1 tag</h1>
 *  </div>
 * </div>
 * 
 */

var parent = React.createElement(
    "div", 
    { id: "parent" }, 
    React.createElement(
        "div", 
        { id: "child1" }, 
        React.createElement(
            "h1", 
            {}, 
            "h1 heading")));

// 2nd arg is config, which will be treated as props to the element.

// now we need to render this heading into the root dom
var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);