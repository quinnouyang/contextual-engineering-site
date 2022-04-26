import React from "react";
import { Packages } from "../../types";
import { Connect } from "frontity/types";
import Link from "@frontity/components/link";
import { useConnect } from "frontity";
import { connect } from "frontity";

const Root: React.FC<Connect<Packages>> = connect(() => {
  const { state } = useConnect<Packages>();
  return (
    <>
      <h1>FOOD</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/thing/1">Thing 1</Link>
        <br />
        <Link link="/thing/2">Thing 2</Link>
      </nav>
    </>
  );
});

export default Root;
