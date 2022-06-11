import { Button, Table ,Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Headers from './Header';


const AdminDashboard = ()=>{

    const[dataSource,setdataSource] = useState([]);

    useEffect(()=>{
        getUsers();
       
    },[]);

    const getUsers = ()=>{
        let users = JSON.parse(localStorage.getItem("users"));
        setdataSource(users);
    }
  
    const columns = [

        {
            key:'1',
            title: "Id",
            dataIndex:"id"
        },
        {
            key:'2',
            title: "Name",
            dataIndex:"name"
        },

        {
            key:'3',
            title: "UserName",
            dataIndex:"userName"
        },

        {
            key:'4',
            title: "Email",
            dataIndex:"email"
        },

        {
            key:'5',
            title: "Password",
            dataIndex:"password"
        },

        {
            key:'6',
            title: "Type",
            dataIndex:"type"
        },

        {
            key:'7',
            title:"Edit",
            render: (record)=>{
                return(
                    <>
                        <Button style={{ background: "blue", color:"white"}}><Link to={`/${record.id}`}>Edit</Link></Button>
                    </>
                )
            }
        },

        {
            key:'6',
            title:"Delete",
            render: (record)=>{
                return(
                    <>
                    <Button type="primary" danger onClick={()=>{
                        deleteUser(record)
                    }}>Delete</Button>
                    </>
                )
            }
        },
    ];

    

    const deleteUser = (record)=>{

        let allDatas = JSON.parse(localStorage.getItem("users"));
        let index = allDatas.findIndex(data => data.id === record.id);
        allDatas.splice(index, 1);
        localStorage.setItem("users",JSON.stringify(allDatas));
        getUsers();
    
    }

    return (
        <div>
            <Headers/>
            <h1>User Details</h1>
            <Form.Item wrapperCol={{ span:10 }}>
                <Button  type="success"  shape="round" style={{ background:"green", color:"white" }} ><Link to="/signup">ADD</Link> </Button>
            </Form.Item>

            <Table columns={columns} dataSource={dataSource}  rowKey={row=>row.id}></Table>


        </div>
    )
}

export default AdminDashboard;