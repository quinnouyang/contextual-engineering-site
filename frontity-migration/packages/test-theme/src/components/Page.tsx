import { connect, Head } from "frontity";
import { Connect } from "frontity/types";
import { Packages } from "../../types";

const Page: React.FC<Connect<Packages>> = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  const Html2React = libraries.html2react.Component;

  return (
    <div>
      <Head>
        <title>{page.title.rendered}</title>
        <meta name="description" content={page.excerpt.rendered} />
      </Head>
      <h2>{page.title.rendered}</h2>
      <Html2React html={page.content.rendered} />
    </div>
  );
};

export default connect(Page);
