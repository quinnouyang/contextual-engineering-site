import { connect } from "frontity";
import dayjs from "dayjs";
import { Connect } from "frontity/types";
import { Packages } from "../../types";

const Post: React.FC<Connect<Packages>> = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const formmattedDate = dayjs(post.date).format("DD MMMM YYYY");

  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <p>
        <strong>Posted: </strong>
        {formmattedDate}
      </p>
      <p>
        <strong>Author: </strong>
        {author.name}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default connect(Post);
