import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a rel="noopener noreferrer" href="">
            Logout
          </a>
        ),
      },
      
    ]}
  />
);

const Logged: React.FC = () => (
  <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Welcome, Username!
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default Logged;