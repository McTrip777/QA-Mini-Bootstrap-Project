import React from "react";

const Login = () => {
  return (
    <div className="container d-flex w-100 vh-100">
      <div className="h-75 w-75 m-auto d-flex flex-column align-items-center justify-content-center bg-dark">
        <h2 className="text-white">Login</h2>
        <form action="submit" className="d-flex flex-column align-items-center w-100">
          <input type="text" placeholder="Username" className="w-50 m-3" />
          <input type="text" placeholder="Password" className="w-50 m-3" />
          <button type="submit" value="Submit" className="w-25 m-4 btn-light">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
