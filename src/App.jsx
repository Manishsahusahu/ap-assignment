import React from "react";
import Navbar from "./components/core/Navbar";
import Notification from "./components/core/Notification";
import SearchBar from "./components/core/SearchBar";
import NavPath from "./components/core/NavPath";
import MainPage from "./components/core/MainPage";

const App = () => {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <Notification/>
      <SearchBar/>
      <NavPath/>
      <MainPage/>
    </div>
  );
};

export default App;
