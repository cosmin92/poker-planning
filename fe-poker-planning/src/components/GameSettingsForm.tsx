import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

const GameSettingsForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
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
        label="Game's Owner"
        name="GameOwner"
        rules={[{ required: true, message: 'Please input the owner of the game!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Game's Name"
        name="GameName"
        rules={[{ required: true, message: 'Please input the name of the game!' }]}
      >
        <Input />
      </Form.Item>

    </Form>
  );
};

export default GameSettingsForm;