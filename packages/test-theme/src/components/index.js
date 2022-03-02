import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link"

const Root = ({ state }) => {
  return (
    <>
      <h1>Food!</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link link="/">Home Food!</Link>
        <br />
        <Link link="/extra">Extra Food!</Link>
      </nav>
    </>
  );
};

export default connect(Root);
