function Blog(props) {
  const content = props.posts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  return (
    <div>
      <h1>Latest Posts</h1>
      <div>{content}</div>
    </div>
  );
}

function Post(props) {
  const { id, title, content } = props.post;

  return (
    <div>
      <h2>
        {id}. {title}
      </h2>
      <p>{content}</p>
    </div>
  );
}

export default Blog;
