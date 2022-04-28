import { connect } from "frontity";
import { Connect } from "frontity/types";
import { Packages } from "../../types";

const Page: React.FC<Connect<Packages>> = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return (
    <div>
      <h2>{page.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  );
};

export default connect(Page);
