import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import FeedScreen from "./screens/Feed";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <FeedScreen></FeedScreen>
    </Layout>
  );
}

export default App;
