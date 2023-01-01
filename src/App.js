import React, { useState } from "react";
import About from "./components/About";
import Navebar from "./components/Navebar";
import Alert from "./components/Alert";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App() {
  const [ap, setap] = useState(
    "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
  );
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark"),
        setap("https://source.unsplash.com/60x40/?sun"),
        (document.body.style.backgroundColor = "black");
      showAlert("Dark mode is has been enabled ", "success");
    } else {
      setmode("light"),
        setap(
          "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
        ),
        (document.body.style.backgroundColor = "white");
      showAlert("light mode is has been enabled ", "success");
    }
  };
  return (
    <Router>
      <>
        <Navebar
          title="TextUtils "
          about="About TextUtils"
          mode={mode}
          ap={ap}
          togglemode={togglemode}
        />

        <Alert alert={alert} />

        <div className="container my_3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  mode={mode}
                  heading="Enter the text to analyze"
                />
              }
            ></Route>
          </Routes>
        </div>
      </>
    </Router>
  );
}
