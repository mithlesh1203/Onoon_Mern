
import React, { createContext, useState } from 'react'
import { Button, Row, Col, Input, message } from 'antd';
import loginLogo from '../_Image/loginPic.png'
import { api } from '../Api';
import { useNavigate } from "react-router-dom";
import HaderTop from '../_Hader/HaderTop'
import FooterUI from '../footer/FooterUI';



function Login() {
  const navigate = useNavigate();
  const [usersEmail, setUsersEmail] = useState('')
  const [usersPassword, setUsersPassword] = useState('')
  const [usersCPassword, setUsersCPassword] = useState('')
  
  

  const userLogin = async () => {

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

        window.alert('Both Password should be same')
        navigate("/Login")
      }
      const usersdata = await api.post('/login', paylod)

      if (usersdata.status === 200) {
        window.alert('Registation Sucessfull')
        navigate("/Home")

      } else {
        window.alert('Invalid Registation')
        navigate("/Login")

      }
    } catch (err) {

  }

  }

  return (
<>

<Row span={24} type="flex" justify="center" align="middle" style={{ marginTop: '5%' }}>
      <Col span={24} style={{ backgroundColor: '#BDB76B' }}>
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
            >LOGIN</Button>
          </Col>
        </Row>
      </Col>
    </Row >

</>
  );
}

export default Login;