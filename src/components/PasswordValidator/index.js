// Write your code here
import {useState} from 'react'
import {Heading} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(0)
  const changeLength = event => {
    setPassword(event.target.value)
    setLength(password.length)
    //  console.log(length)
  }
  return (
    <div>
      <div>
        <Heading>Password Validator</Heading>
        <p>Check how strong and secure is your password</p>
        <input type="password" value={password} onChange={changeLength} />
        <p>{length < 7 ? 'Your password must be at least 8 characters' : ''}</p>
      </div>
    </div>
  )
}

export default PasswordValidator
