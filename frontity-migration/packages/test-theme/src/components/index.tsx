import React from "react";
import { Packages } from "../../types";
import { Connect } from "frontity/types";
import Link from "@frontity/components/link";
import { connect, Global, css } from "frontity";
import Switch from "@frontity/components/switch";
import List from "./List";
import Post from "./Post";
import Page from "./Page";

const Root: React.FC<Connect<Packages>> = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global
        styles={css`
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
        `}
      />
      <h1>FOOD</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/page/2">More posts</Link>
        <br />
        <Link link="/about-us">About Us</Link>
      </nav>
      <hr />
      <main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost}>This is a post</Post>
          <Page when={data.isPage}>This is a page</Page>
        </Switch>
      </main>
    </>
  );
};

export default connect(Root);
