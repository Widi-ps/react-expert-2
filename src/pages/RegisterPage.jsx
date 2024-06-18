import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import Header from '../components/Header';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function onRegister({ name, email, password }) {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  }
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row justify-content-center pt-5'>
          <div className='col-md-5'>
            <RegisterInput register={onRegister} />
            <p>
              Already have an account?{' '}
              <Link className='text-primary text-decoration-none' to='/'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
