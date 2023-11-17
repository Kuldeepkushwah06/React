// const heading=React.createElement("h1",{},"Hello world from react");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent=React.createElement('div',{id:"parent"},
React.createElement('div',{id:"child"},

[React.createElement('h1',{},'Hello react from kuldeep'),
React.createElement('h2',{},"I am type of h2")]));

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);