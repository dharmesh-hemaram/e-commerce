const Error = ({ error }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {error.message || error}
    </div>
  );
};

export { Error };
