import { FileSearchOutlined } from "@ant-design/icons";
import { Button, PageHeader, Tag } from "antd";
import Tooltip from "antd/es/tooltip";
import { Link, useNavigate } from "react-router-dom";
import classes from './component.module.css'
export function Navigation() {
    const navigate = useNavigate()
    return (
        // <nav className="flex justify-between align-text-bottom px-5 h-[50px] bg-gray-200">
        //     <Button type="default" onClick={() => navigate("/")}>Список Аэропортов</Button>
        //     <Button type="default" >Авторизация</Button>
        //     <Tooltip title="search">
        //         <Button type="primary" shape="circle" icon={<FileSearchOutlined />}>

        //         </Button>
        //     </Tooltip>

        // </nav>
        <div className={classes.bgBlue}>
            <PageHeader                
                onBack={() => window.history.back()}
                // title="Title"
                // tags={<Tag color="blue">{}</Tag>}

                extra={[
                    <Button type="default" onClick={() => navigate("/")}>Список Аэропортов</Button>,
                    <Button type="default" >Авторизация</Button>,
                    <Button type="default" >Поиск</Button>,
                    <Button type="default" >Фильтры</Button>,
                    <Button type="primary" shape="circle" icon={<FileSearchOutlined />} />
                ]}
            ></PageHeader>
        </div>




    )
}