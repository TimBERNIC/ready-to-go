import { useState } from "react";
import "./App.css";
import Button from "./assets/components/Button";
import ResultScreenBox from "./assets/components/ResultScreenBox";
import logo from "./assets/img/logo.png";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  console.log(switch1);
  const [launcher, setLauncher] = useState(false);
  return (
    <>
      <header>
        <img src={logo} alt="fusée" />
        <div>Ready To Go</div>
      </header>
      <main>
        <div className="starting-box">
          <div>
            <div className="on-button-box">
              <Button
                className={
                  switch1 === false ? "inactive-button" : "active-button"
                }
                functionOnClick={() => {
                  setSwitch1(switch1 === false ? true : false);
                }}
                title="ON"
              />
              <Button
                className={
                  switch2 === false ? "inactive-button" : "active-button"
                }
                functionOnClick={() => {
                  setSwitch2(switch2 === false ? true : false);
                }}
                title="ON"
              />
              <Button
                className={
                  switch3 === false ? "inactive-button" : "active-button"
                }
                functionOnClick={() => {
                  setSwitch3(switch3 === false ? true : false);
                }}
                title="ON"
              />
            </div>
            <div className="off-button-box">
              <Button
                className={
                  switch1 === false ? "active-button" : "inactive-button"
                }
                functionOnClick={() => {
                  setSwitch1(switch1 === false ? true : false);
                }}
                title="OFF"
              />
              <Button
                className={
                  switch2 === false ? "active-button" : "inactive-button"
                }
                functionOnClick={() => {
                  setSwitch2(switch2 === false ? true : false);
                }}
                title="OFF"
              />
              <Button
                className={
                  switch3 === false ? "active-button" : "inactive-button"
                }
                functionOnClick={() => {
                  setSwitch3(switch3 === false ? true : false);
                }}
                title="OFF"
              />
            </div>
          </div>
          <div>
            <ResultScreenBox
              className={
                switch1 && switch2 && switch3 ? "ready-to-go" : "not-ready"
              }
              title={switch1 && switch2 && switch3 ? "Go !" : "No way !"}
            />
          </div>
        </div>
        <div>
          <Button
            className="reset-button"
            functionOnClick={() => {
              setSwitch1(false);
              setSwitch2(false);
              setSwitch3(false);
            }}
            title="RESET"
          />
        </div>
      </main>
      <footer>
        <div className="container">
          This exercice was made with <span> React </span> by
          <a href="https://github.com/TimBERNIC"> TimBERNIC </a> with
          <a href="https://www.lereacteur.io/"> LE REACTEUR </a>
        </div>
      </footer>
    </>
  );
};

export default App;
