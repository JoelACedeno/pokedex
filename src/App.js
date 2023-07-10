import React from "react";
import Pokedex from "./Pokedex.js"
import Pokemon from "./Pokemon.js";

const App = () => {
    return (
        <div className="App">
            <Pokedex pokemon={Pokemon} />
        </div>
    )
}

export default App;