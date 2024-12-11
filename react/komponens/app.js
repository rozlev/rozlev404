function App() {
    // Az App komponens egy "div"-et hoz létre, amely tartalmazza a "Doboz" szöveget 
    // és egy másik React komponens, a BoxComponent példányát.
    return React.createElement(
        "div",
        {
            className: "border" // A "div" HTML elemhez egy "border" osztály van hozzárendelve.
        },
        "Doboz", 
        React.createElement(BoxComponent),// Itt hívjuk meg a BoxComponent komponenst, amely egy piros dobozt jelenít meg.
        React.createElement(BoxComponent),//itt adtuk hozzá a másik két dobozt +1
        React.createElement(BoxComponent)//+2
    );
}

function BoxComponent(props) {
    // A BoxComponent egy piros dobozt hoz létre, meghatározott stílusokkal.
    return React.createElement(
        "div",
        {
            style: {
                width: "200px", 
                height: "200px", 
                backgroundColor: "red", 
            },
            className: "p-2 m-5 rounded", // Bootstrap osztályok: padding, margin, és lekerekített sarkok.
        },
    );
}

// Az alkalmazást a ReactDOM.render függvény rendereli az app-container azonosítójú DOM elembe.
ReactDOM.render(
    React.createElement(App), // Itt hívjuk meg az App komponenst, amely a teljes alkalmazást tartalmazza.
    document.getElementById("app-container") // Az "app-container" HTML elemhez csatoljuk a React alkalmazást.
);
