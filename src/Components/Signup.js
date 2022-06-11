import React from 'react';
import { Button, Divider, Form, Input, Select, } from 'antd';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const { Option } = Select;


const Signup = ()=>{

    const [name,setname] = useState("");
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [type,setType] = useState("");
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    const addData = ()=>{

        if( name && userName && email && password && type ){

            let users = JSON.parse(localStorage.getItem("users"));
            let idNo;
    
            if(users===null){
               users = [];
               idNo=1;
            }
    
            else{
                idNo = users[users.length-1].id+1;
            }
    
            let result = {
                "id":idNo,
                "name":name,
                "userName":userName,
                "email":email ,
                "password":password,
                "type":type
            };
        
            users.push(result);
            localStorage.setItem("users",JSON.stringify(users));
            navigate("/admin");
        }
    }

    return (
        <div>
         
            <Divider plain style={{ fontSize:"30px" }}>Sign up</Divider>
           
 

            <Form labelCol={{ span:10 }} wrapperCol={{ span: 6 }} form={form} >

                <Form.Item 
                    autoComplete="off"
                    name="name" 
                    label="Name"
                    hasFeedback 
                    rules={[
                        { required: true, message: 'Please input your name!' },
                        {whitespace:true}
                        ]} >
                    <Input onChange={(e) => setname(e.target.value)}/>
                </Form.Item>

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
                    name="email" 
                    label="Email"
                    hasFeedback 
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        {whitespace:true},
                        {type:"email" , message:"Please enter a valid email"}
                        ]} >
                    <Input onChange={(e) => setEmail(e.target.value)}/>
                </Form.Item>

                <Form.Item 
                    autoComplete="off"
                    name="Password" 
                    label="Password"
                    hasFeedback 
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        {whitespace:true},
                        {min:4, max:10}
                        ]} >
                    <Input onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>

               

                <Form.Item 
                    autoComplete="off"
                    name="type" 
                    label="Type"
                    hasFeedback 
                    rules={[
                        { required: true, message: 'Please select Type!' },
                    ]} >

                    <Select onChange={(value) => {setType(value)}} >
                        <Option value="User">User</Option>
                        <Option value="Admin">Admin</Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{  offset: 10, span:10 }} >
                    <Button type="primary" htmlType="submit" onClick={addData}>Save</Button>
                    <Button htmlType="button" onClick={onReset}>Reset</Button>
                </Form.Item>

            
            </Form>
        </div>
    )

}

export default Signup;