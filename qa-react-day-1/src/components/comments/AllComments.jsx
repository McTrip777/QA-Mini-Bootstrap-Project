import comments from "../../data/Comments.json";
import IndividualComment from "./IndividualComment";

const AllComments = () => {
  return (
    <div className="container mt-3">
        <h1>All Comments</h1>
      {comments.map((commentObject, i) => (
        <IndividualComment
          key={commentObject.id}
          body={commentObject.body}
          email={commentObject.email}
          id={commentObject.id}
          name={commentObject.name}
          postId={commentObject.postId}
        />
      ))}
    </div>
  );
};

export default AllComments;
