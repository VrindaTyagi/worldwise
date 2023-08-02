
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import React from "react";

export default function Home() {
  return (
    <div>
    <PageNav />
      <h1>WorldWise</h1>

      <Link to="/app">Go to the App</Link>
    </div>
  )
}
