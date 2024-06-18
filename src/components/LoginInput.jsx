import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  return (
    <form>
      <h3 className="text-center mb-5">Login Page</h3>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="text"
          value={email}
          onChange={onEmailChange}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="d-grid">
        <button
          className="btn btn-dark mb-3"
          type="button"
          onClick={() => login({ email, password })}
        >
          Login
        </button>
      </div>
    </form>
  )
}
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput
