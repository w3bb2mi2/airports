import { FileSearchOutlined } from "@ant-design/icons";
import { Button, PageHeader, Tag } from "antd";
import Tooltip from "antd/es/tooltip";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hook/redux";
import classes from './component.module.css'


export function Navigation() {
    const navigate = useNavigate()
    const {isAuth, username} = useAppSelector(state => state.authReducer)

    return (        
        <div className={classes.bgBlue}>
            {!isAuth && <PageHeader                
                onBack={() => window.history.back()}
                
                extra={[
                    <Button type="default" onClick={() => navigate("/")}>Список Аэропортов</Button>,
                    <Button type="default" onClick={()=>navigate("/auth")}>Авторизация</Button>,
                    <Button type="default" >Поиск</Button>,
                    <Button type="default" >Фильтры</Button>,
                    <Button type="primary" shape="circle" icon={<FileSearchOutlined />} />
                ]}
            ></PageHeader>}
            {isAuth && <PageHeader                
                onBack={() => window.history.back()}
                
                extra={[
                    <Button type="default" onClick={() => navigate("/")}>Список Аэропортов</Button>,
                    <Button type="default" >Поиск</Button>,
                    <Button type="default" >Фильтры</Button>,
                    <Button type="primary" shape="circle" icon={<FileSearchOutlined />} />
                ]}
            ></PageHeader>}
        </div>




    )
}