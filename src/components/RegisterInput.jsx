import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  return (
    <form>
      <h3 className="text-center mb-5">Register Page</h3>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          className="form-control"
          id="exampleInputName"
          aria-describedby="emailHelp"
        />
      </div>
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
          aria-describedby="emailHelp"
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
        />
      </div>
      <div className="d-grid gap-2 mb-3">
        <button
          className="btn btn-dark"
          type="button"
          onClick={() => register({ name, email, password })}
        >
          Register
        </button>
      </div>
    </form>
  )
}
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
}

export default RegisterInput
