import React from 'react';
import { Button, Form} from 'antd';
import { useNavigate } from 'react-router-dom';

const Headers = ()=>{

    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.setItem("status",0);
        navigate("/");
    }
    return (
       <div>
            <Form.Item wrapperCol={{  offset: 16, span:10 }}  >
                <Button type="warning" onClick={logout} >LogOut</Button>
            </Form.Item>
       </div>
    )
}

export default Headers;