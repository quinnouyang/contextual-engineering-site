import { connect } from "frontity";
import Link from "@frontity/components/link";
import { Connect } from "frontity/types";
import { Packages } from "../../types";

const List: React.FC<Connect<Packages>> = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <div>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        return (
          <Link key={item.id} link={post.link}>
            {post.title.rendered}
            <br />
          </Link>
        );
      })}
    </div>
  );
};

export default connect(List);
