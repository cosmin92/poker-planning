import { Button, Form, Input } from "antd";
import React from "react";
import { setGameName } from "../service/Games";
import { Game } from "../types/Game";

interface GameSettingsFormProps {
  game: Game;
}

const GameSettingsForm: React.FC<GameSettingsFormProps> = ({ game }) => {

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
        label="Game's Name"
        name="GameName"
        rules={[
          { required: true, message: "Please input the name of the game!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() =>
            setGameName(
              (document.getElementById("basic_GameOwner") as HTMLInputElement)
                .value,
              (document.getElementById("basic_GameName") as HTMLInputElement)
                .value
            )
          }
        >
          Change Game Settings
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GameSettingsForm;
