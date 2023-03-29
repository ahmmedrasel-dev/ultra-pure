import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Login = () => {
  useTitle('Login')
  const navigate = useNavigate()
  const handleSubmit = () => {

  }
  return (
    <>
      <div className="hero py-8">
        <div className="hero-content flex-col">
          <h1 className='text-2xl uppercase'>Please Login Now</h1>
          <div className="card shadow-2xl bg-slate-100">
            <form onSubmit={handleSubmit} className="card-body lg:w-[500px] w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn border-0 bg-warning text-white hover:bg-primary" type='submit'>Login</button>
              </div>
              <p className='text-center'>New to Wathin? <span className='text-primary cursor-pointer font-bold' onClick={() => navigate('/register')}>Create New Account</span></p>
            </form>


          </div>
        </div>
      </div>
    </>
  );
};

export default Login;