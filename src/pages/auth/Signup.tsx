const Signup = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-4xl justify-center mb-5">Sign up</h2>
          <input type="text" placeholder="Email" className="input input-bordered input-success w-full max-w-xs text-white focus:outline-none mb-3" />
          <input type="text" placeholder="Full Name" className="input input-bordered input-success w-full max-w-xs text-white focus:outline-none mb-3" />
          <input type="password" placeholder="Password" className="input input-bordered input-success w-full max-w-xs text-white focus:outline-none mb-3" />
          <div className="card-actions w-full">
            <button className="btn btn-accent w-full hover:bg-login hover:text-accent transition-colors duration-300 text-lg">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;