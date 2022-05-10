import React from "react";
import { Packages } from "../../types";
import { Connect } from "frontity/types";
import Link from "@frontity/components/link";
import { connect, Global, css, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import List from "./List";
import Post from "./Post";
import Loading from "./Loading";
import Error from "./Error";
import Header from "./Header";

const Root: React.FC<Connect<Packages>> = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -ms-word-wrap: break-word;
            word-wrap: break-word;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
        `}
      />

      <Head>
        <title>Test Theme</title>
        <meta name="description" content="Based on the Frontity tutorial." />
      </Head>

      <Header />

      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPost | data.isPage | data.isDestinations} />
          <Error when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Root);

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`;
