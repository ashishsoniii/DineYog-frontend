import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import "./App.css";
import Footer from "./pages/footer/Footer";
import Home from "./pages/content/Home";
import DataAnalysis from "./pages/content/DataAnalysis.js";
import Team from "./pages/content/components/Team";
import UploadFile from "./pages/content/UploadFile";
import LoginBtn from "./pages/content/components/LoginBtn";
import Navbar2 from "./pages/navbar/Navbar2";
// import NonTemporal from "./pages/nonTemporal/NonTemporal";
// import Temporal from "./pages/Temporal/Temporal";
// import NonTemporalIndex from "./pages/Temporal/NonTemporalIndex";
import NonTemporalAnalysis from "./pages/nonTemporal/DataAnalysis";
import MatrixIndex from "./pages/matrix/MatrixIndex";
import FPMIndex from "./pages/FPM/FPMIndex";
import HomeIntro from "./pages/home/HomeIntro";
import NewHome from "./pages/content/NewHome";
import Login from "./pages/login/Login";
import AnalysisShortcut from "./pages/content/components/AnalysisShortcut";
import Forecasting from "./pages/forecastingg/Forecasting";

const App = () => {
  const [topic, setTopic] = useState("data");
  const [activeTopic, setActiveTopic] = useState("Temporal Sales Insights");

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleTopicChange = (newTopic) => {
    setTopic(newTopic);
  };
  const handleActiveTopicChange = (newTopic) => {
    setActiveTopic(newTopic);
  };
  return (
    <>
      <div className="loginFloat">
        <LoginBtn
          open={open}
          setOpen={setOpen}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </div>
      {loggedIn && (
        <div className="AnalysisShortcutFloat">
          <AnalysisShortcut />
        </div>
      )}
      <div className="bg">
        {loggedIn ? (
          <Navbar
            onTopicChange={handleTopicChange}
            onAcitiveTopicChange={handleActiveTopicChange}
          />
        ) : (
          <Navbar2 />
        )}
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={<NewHome setOpen={setOpen} loggedIn={loggedIn} />}
        />
        {/* element={<Home setOpen={setOpen} loggedIn={loggedIn} />} */}
        <Route
          exact
          path="/dataAnalysis"
          element={
            <DataAnalysis
              topic={topic}
              activeTopic={activeTopic}
              loggedIn={loggedIn}
              setOpen={setOpen}
            />
          }
        />
        <Route
          exact
          path="/team"
          element={<Team topic={topic} activeTopic={activeTopic} />}
        />
        <Route
          exact
          path="/login"
          element={
            <Login
              open={open}
              setOpen={setOpen}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route
          exact
          path="/nonTemporal"
          element={
            <NonTemporalAnalysis topic={topic} activeTopic={activeTopic} />
          }
        />
        <Route
          exact
          path="/forcast"
          element={<Forecasting topic={topic} activeTopic={activeTopic} />}
        />
        <Route
          exact
          path="/upload"
          element={<UploadFile loggedIn={loggedIn} />}
        />
        <Route exact path="/home" element={<HomeIntro />} />
        <Route exact path="/matrix" element={<MatrixIndex />} />
        <Route exact path="/FPM" element={<FPMIndex />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
