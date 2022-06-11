import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card ,Button,  Form, Input,} from 'antd';
import { useNavigate } from 'react-router-dom';
import Headers from "./Header";

const Edit = ()=>{

    const [name,setName] = useState("");
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    

    const params = useParams();

    useEffect(()=>{
        details();
    },[]);

    const details = ()=>{
        let allDatas = JSON.parse(localStorage.getItem("users"));
        let data = allDatas.find(data => data.id ===Number(params.id));
        setName(data.name);
        setUserName(data.userName);
        setEmail(data.email);
        setPassword(data.password);
    }


    const update = ()=>{

        let allDatas = JSON.parse(localStorage.getItem("users"));
        let index = allDatas.findIndex(data => data.id ===Number(params.id));

        allDatas[index].name = name;
        allDatas[index].userName = userName;
        allDatas[index].email = email;
        allDatas[index].password = password;
        

        localStorage.setItem("users",JSON.stringify(allDatas));
        navigate(`/user/${ allDatas[index].id}`);

    }



    return(
        <div>

                <Headers/>

                <div className='center-box'>

              <Card title="Details"  style={{ width: 300 }}>
                <p>Name : </p> 
                <Form.Item >
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Item> 

                <p>User Name :  </p>
                <Form.Item >
                    <Input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </Form.Item> 

                <p>Email :  </p>
                <Form.Item >
                    <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Item> 

                <p>Password : </p> 
                <Form.Item >
                    <Input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item> 

                <Form.Item >
                    <Button onClick={update} style={{ background: "green", color:"white"}}>Update</Button>
                </Form.Item>
            </Card>
            </div>

        </div>
    )
}

export default Edit;