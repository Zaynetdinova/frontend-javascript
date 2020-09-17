import React, {useState} from 'react'
import {useInput} from '../../../../Common/utils/hooks'
import './styles/Form.scss'

function Form(props) {
  const inputName = useInput('')
  const inputSurname = useInput('')
  const inputEmail = useInput('')
  const inputPhone = useInput('')
  const [count, setCount] = useState(501)

  const handleSubmit = (e) => {
    setCount(count + 1)
    const user = {
      _id: count,
      firstName: inputName.value,
      lastName: inputSurname.value,
      email: inputEmail.value,
      phone: inputPhone.value
    }
    inputClear([inputName, inputSurname, inputEmail, inputPhone])
    props.addUser(user)
    e.preventDefault()
  }

  function inputClear(inputs) {
    inputs.forEach((item) => {
      item.clear()
    })
  }

  return (
    <form className='Form' onSubmit={handleSubmit}>
      <div className="form-group">
        <input placeholder='name' required name='user' className="form-control" {...inputName.bind}/>
      </div>

      <div className="form-group">
        <input placeholder='surname' name='surname' required type="text" className="form-control" {...inputSurname.bind}/>
      </div>

      <div className="form-group">
        <input placeholder='email' required name="email" className="form-control" {...inputEmail.bind}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group">
        <input placeholder='phone' required name="phone" className="form-control" {...inputPhone.bind}/>
      </div>

      <button type="submit" className="btn btn-primary">ОТПРАВИТЬ</button>
      <button onClick={() => props.changeFormState()} className="btn btn-secondary form-cancel">ОТМЕНА</button>
    </form>
  )
}

export default Form
