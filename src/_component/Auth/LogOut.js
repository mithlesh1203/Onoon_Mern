import React, { createContext, useState } from 'react'
import { Button, Row, Col, Input, message } from 'antd';
import loginLogo from '../../images/loginPic.png'
import { api } from '../../Api';
import { UserContext } from '../../App'



function Login() {
  const {state, dispatch} = createContext(UserContext)
  // const [formError, setFormError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [usersEmail, setUsersEmail] = useState('')
  const [usersPassword, setUsersPassword] = useState('')
  const [usersCPassword, setUsersCPassword] = useState('')
  const [isModalSubmitLoading, setIsModalSubmitLoading] = useState(false);
  
  

  const userLogin = async () => {

    setIsModalSubmitLoading(true);
    try {
      let paylod = {
        email: usersEmail,
        password: usersPassword,
        cPassword: usersCPassword
      };

      if (!usersEmail || !usersPassword || !usersCPassword) {
        return message.warning('All fields are compersary please fill')
      }

      if (usersPassword !== usersCPassword) {
        return message.warning('Both Password should be same')
      }

      setLoading(true)
      const usersdata = await api.post('/login', paylod)

      if (usersdata.status === 200) {
        window.alert('Registation Sucessfull')
        dispatch({type:'USER', payload:false})
        window.location.href = "/Home"
        // history.push('/Home');
        setIsModalSubmitLoading(false);

      } else {
        window.alert('Invalid Registation')

      }
    } catch (err) {
    console.log("🚀 ~ file: Login.js:56 ~ userLogin ~ err", err)

  }

  }

  return (
    <Row span={16} type="flex" justify="center" align="middle" style={{ marginTop: '5%' }}>
      <Col span={6} style={{ backgroundColor: '#BDB76B' }}>
        <Row justify="center" align="middle" className="mt-1.5re">
          <h1> USER LOGIN</h1>
        </Row>

        <Row type="flex" style={{ marginTop: '5%' }}>
          <Col>
            <label className='p-2'>
              <i className="zmdi zmdi-email"></i>
            </label>
          </Col>
          <Col span={16}>
          <Input type='text' name='email' id='email' placeholder='Enter your Email'
              value={usersEmail}
              onChange={(e) => setUsersEmail(e.target.value)}
            ></Input>
          </Col>
        </Row>

        <Row type="flex" style={{ marginTop: '5%' }}>
          <Col>
            <label className='p-2'>
              <i className="zmdi zmdi-lock"></i>
            </label>
          </Col>
          <Col span={16}>
          <Input type='text' name='usersPassword' id='usersPassword' placeholder='Enter your Password'
              value={usersPassword}
              onChange={(e) => setUsersPassword(e.target.value)}
            ></Input>
          </Col>
        </Row>

        <Row type="flex" style={{ marginTop: '5%' }}>
          <Col>
            <label className='p-2'>
              <i className="zmdi zmdi-lock"></i>
            </label>
          </Col>
          <Col span={16}>
          <Input type='text' name='usersCPassword' id='usersCPassword' placeholder='Enter your Password'
              value={usersCPassword}
              onChange={(e) => setUsersCPassword(e.target.value)}
            ></Input>
          </Col>
        </Row>

        <Row justify="center" align="middle" style={{ margin: '10%' }}>
          <Col >
            <Button
            onClick={userLogin}
            loading={isModalSubmitLoading} 
            >LOGIN</Button>
          </Col>
        </Row>
      </Col>
      <Col span={10}>
        <img
          src={ loginLogo }
          alt="Login"
          style={{
            width: "100%",
            borderRadius: "100%",
            objectFit: "cover",
          }}
        />
      <Col justify="center" align="middle">
        <Button href="/Signup">Creat an account</Button>
        </Col>
      </Col>
    </Row >
  );
}

export default Login;