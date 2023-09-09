import { useState } from 'react'
import './SignUp.css'

function SignUp() {

  const [action, setAction] = useState("Login");
  return (
    <div className='kontainer'>
      <div className='eader'>
        <div className='text'>{action}</div>
        <div className='underline'></div>

      </div>
      <div className='inputs'>
        {action==='Login' ? <div></div>:
        <div className='input'><i class="fa fa-user" aria-hidden="true"></i>
        <input  type='text'  placeholder="Name"/>
      </div>}
        
        <div className='input'><i class="fa fa-envelope" aria-hidden="true"></i>
          <input type='email' placeholder='Email Id'/>
        </div>
        <div className='input'><i class="fa fa-unlock-alt" aria-hidden="true"></i>
          <input type='password' placeholder='Password'/>
        </div>
        {action==='SignUp' ? <div></div>:
        <div className='forgot-password'>Forgot Password ? <span>Click Here !!!</span></div>}
        <div className='submit-container'>
          <div className={action==='Login' ? 'submit gray':'submit'} onClick={(e)=>{setAction('SignUp')}}>SignUp</div>
          <div className={action==='SignUp' ? 'submit gray':'submit'} onClick={(e)=>{setAction('Login')}}>Login</div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
