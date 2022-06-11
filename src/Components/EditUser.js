import { Button, Divider, Form, Input, Select, } from 'antd';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const { Option } = Select;

const EditUser = () =>{

    const [name,setname] = useState("");
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [type,setType] = useState("");
    const [form] = Form.useForm();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        editDatas();
    },[]);

    const editDatas = ()=>{
        let allDatas = JSON.parse(localStorage.getItem("users"));
        let data = allDatas.find(data => data.id ===Number(params.id));
    
        setname(data.name);
        setUserName(data.userName);
        setEmail(data.email);
        setPassword(data.password);
        setType(data.type);

    }

    
    const UpdateData = ()=>{
        let allDatas = JSON.parse(localStorage.getItem("users"));
        let index = allDatas.findIndex(data => data.id ===Number(params.id));

        allDatas[index].name = name;
        allDatas[index].userName = userName;
        allDatas[index].email = email;
        allDatas[index].password = password;
        allDatas[index].type = type;

        localStorage.setItem("users",JSON.stringify(allDatas));
        navigate("/admin");
        
    }

    return(
        <div>
         
        <Divider plain style={{ fontSize:"30px" }}>Update Details</Divider>

        <Form labelCol={{ span:10 }} wrapperCol={{ span: 6 }} form={form} >

            <Form.Item 
                
                label="Name"
                hasFeedback 
                rules={[
                    { required: true, message: 'Please input your name!' },
                    {whitespace:true}
                    ]} 
                    >
                <Input type="text" value={name} onChange={(e) => setname(e.target.value)}/>
            </Form.Item>

            <Form.Item 
                label="User Name"
                hasFeedback 
                rules={[
                    { required: true, message: 'Please input your username!' },
                    {whitespace:true}
                    ]} >
                <Input value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </Form.Item>

            <Form.Item 
                
                label="Email"
                hasFeedback 
                rules={[
                    { required: true, message: 'Please input your email!' },
                    {whitespace:true},
                    {type:"email" , message:"Please enter a valid email"}
                    ]} 
                    >
                <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Item>

            <Form.Item 
                label="Password"
                hasFeedback 
                rules={[
                    { required: true, message: 'Please input your email!' },
                    {whitespace:true},
                    {min:4, max:10}
                    ]} >
                <Input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Item>

           

            <Form.Item 
                label="Type"
                hasFeedback 
                rules={[
                    { required: true, message: 'Please select Type!' },
                ]} >

                <Select value={type} onChange={(value) => {setType(value)}} >
                    <Option value="User">User</Option>
                    <Option value="Admin">Admin</Option>
                </Select>
            </Form.Item>

            <Form.Item wrapperCol={{  offset: 10, span:10 }} >
                <Button type="primary" htmlType="submit" onClick={UpdateData}>Update</Button>
            </Form.Item>
        </Form>
    </div>
    )

}

export default EditUser;