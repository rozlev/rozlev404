function App(){
    return React.createElement(
        "div",
        {
            className:"border"
        },
        "Doboz", 
        React.createElement(BoxComponent)
 
 
    );
}
 
 
function BoxComponent(props){
    return React.createElement(
        "div",
 
        {
 
            style:{
                width:"200px",
                height:"200px",
                backgroundColor:"red",
 
            },
            className:"p-2 m-5 rounded",
        },
    );
}
ReactDOM.render (
    React.createElement(App),
    document.getElementById("app-container")
 
);
 