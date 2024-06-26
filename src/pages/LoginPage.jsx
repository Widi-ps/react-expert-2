import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LoginInput from '../components/LoginInput'
import Header from '../components/Header'
import { asyncSetAuthUser } from '../states/authUser/action'

function LoginPage() {
  const dispatch = useDispatch()
  function onLogin({ email, password }) {
    dispatch(asyncSetAuthUser({ email, password }))
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center pt-5">
          <div className="col-md-5">
            <LoginInput login={onLogin} />
            <p>
              Don&apos;t have an account?{' '}
              <Link
                className="text-primary text-decoration-none"
                to="/register"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
