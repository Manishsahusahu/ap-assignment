import React from "react";
import Navbar from "./components/core/Navbar";
import Notification from "./components/core/Notification";
import SearchBar from "./components/core/SearchBar";

const App = () => {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <Notification/>
      <SearchBar/>
    </div>
  );
};

export default App;
