import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useState } from 'react';
import { LoginInterface } from '../repository/LoginInterface';
import { LoginInterfaceImpl } from '../repositoryImpl/LoginInterfaceImpl';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  // login

  const onFinish = (values: any) => {
    console.log('Success:', values);
    const LoginInterface: LoginInterface = new LoginInterfaceImpl();
    LoginInterface.login(values);
    window.location.reload();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type="primary" shape="round" size="large" onClick={showModal}>
        Login
      </Button>
      <Modal
        visible={visible}
        title="Login"
        onOk={handleOk}
        onCancel={handleCancel}
      >

        <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" onClick={() => handleOk()}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
      </Modal>
    </>
  );
};

export default Login;