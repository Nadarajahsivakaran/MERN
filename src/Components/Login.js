import React from 'react';
import { Button,Divider, Form, Input} from 'antd';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = ()=>{

    const [userName,setUserName] = useState();
    const [password,setPassword] = useState();
    const [errorMessage, setErrorMessage] = React.useState("");
    const navigate = useNavigate();


    const check = ()=>{
      
        let users = JSON.parse(localStorage.getItem("users"));
        const loginUser = users.find(user => user.userName=== userName);

        if(userName && password){

            if(loginUser){

                if(loginUser.password===password){
                    localStorage.setItem("status",1);
                    
                    if(loginUser.type==="Admin"){
                        navigate(`/admin`);
                    }

                    else{
                        navigate(`/user/${loginUser.id}`); 
                    }
                    
                }

                else{
                    setErrorMessage("password does not matched ");
                }
                
            }
            else{
                setErrorMessage("user name does not matched");
            }
        }
        
    }

    return (
        <div>

            {errorMessage && (
                <p style={{ color:"red" }}> {errorMessage} </p>
            )}

            <Divider plain style={{ fontSize:"30px" }}>Log in</Divider>

            <Form labelCol={{ span:10 }} wrapperCol={{ span: 6 }}>

                <Form.Item 
                    autoComplete="off"
                    name="username" 
                    label="User Name"
                    hasFeedback 
                    rules={[
                        { required: true, message: 'Please input your username!' },
                        {whitespace:true}
                        ]} >
                   <Input onChange={(e) => setUserName(e.target.value)}/>
                </Form.Item>

                <Form.Item 
                    autoComplete="off"
                    name="password" 
                    label="Password"
                    hasFeedback 
                    rules={[{required:true,message: 'Please input your password!'}
                    ,{whitespace:true}
                    ]}>
                   <Input.Password onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item  wrapperCol={{  offset: 10, span:6 }} >
                    <Button block type="primary" onClick={check} htmlType="submit">Log in</Button>
                </Form.Item>
    
            </Form>         
        </div>
    );

}

export default Login;