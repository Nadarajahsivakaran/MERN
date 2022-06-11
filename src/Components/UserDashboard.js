import { Card } from 'antd';
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { Button} from 'antd';
import Header from './Header';



const UserDsahBoard = () =>{


    const params = useParams();
    
    let allDatas = JSON.parse(localStorage.getItem("users"));
    let data = allDatas.find(data => data.id ===Number(params.id));

    return(
        <div>

            <Header/>

            <h4>Hai {data.name}</h4>
            <div className='center-box'>

            
            <Card title="Details" extra={<Button  style={{ background: "blue", color:"white"}}><Link to={`edit/${params.id}`}> Edit</Link></Button>} style={{ width: 400 }}>
                <p>Name : {data.name} </p>  
                <p>User Name : {data.userName} </p>
                <p>Email : {data.email} </p>
                <p>Password : {data.password} </p>
                
            </Card>
            </div>
        </div>
    )
}


export default UserDsahBoard;