import logo from "./logo.svg";
import "./App.css";
import React, { useState, UseEffect } from "react";
function App() {
  const [id, todo] = useState();
  // UseEffect(() => {});
  console.log("hi");
  const x = async () => {
    const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
    const y = await fetch(url);
    const s = await y.json();
    const res = s;
    todo(res);
    return s.results;
  };
  x();

  return (
    <div className="App">
      <table className="tabla">
        <tr className="tabla">
          <td>_id</td>
          <td>cityid</td>
          <td>name</td>
          <td>state</td>
          <td>probabilityof precip </td>
          <td>relativehu</td>
          <td>Lastreportt ime formato (YYYY/MM /DD)</td>
          <td>
            LLUEVE SI se cumple = probabilityof precip 60 || relativehumi dity
            50
          </td>
        </tr>
        <tr>
          <td>
            {
              !id
                ? "Cargando..."
                : id.map((id, index) => {
                    <li>{id}</li>;
                  })
              /* {id.map((todo, index) => {
              return;
              <li>{todo._id}</li>;
            })} */
            }
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
