import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHref, useNavigate } from "react-router-dom";
import { register } from "../store/actions/authAction";
import { useAppSelector } from "../store/hook/redux";
import { useEffect, useState } from "react";


export function AuthPage() {
    const {isAuth} = useAppSelector(state=>state.authReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onFinish = async(values) => {
        dispatch(register(values))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(()=>{
        if(isAuth){
            navigate("/")
        }
    },[isAuth])   
    
    return (
        <div className="formWrapper">
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="login"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )
}