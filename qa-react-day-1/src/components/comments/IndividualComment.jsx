const IndividualComment = (props) => {
  const { body, email, id, name, postId } = props;

  return (
    <div className="alert alert-secondary">
      <h4>{body}</h4>
      <div className="d-flex justify-content-between">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default IndividualComment;
