import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined,UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('User List', 'sub1', <UserOutlined />, [
        getItem('Marchent', '1'),
        getItem('User', '2'),
      ]),
      {
        type: 'divider',
      },
    getItem('Product', 'sub2', <AppstoreOutlined />, [
      getItem('Add product', '3'),
      getItem('All Products', '4'),
    ]),
    {
      type: 'divider',
    },
    getItem('Category', 'sub3', <AppstoreOutlined />, [
        getItem('Add Category', '5'),
        getItem('All Category', '6'),
      ]),
      {
        type: 'divider',
      },
      getItem('Sub Category', 'sub4', <AppstoreOutlined />, [
        getItem(' Add Sub Category', '7'),
        getItem(' All Sub Category', '8'),
      ]),
      {
        type: 'divider',
      },
      getItem('Discount', 'sub5', <AppstoreOutlined />, [
        getItem(' Add Discount', '9'),
        getItem(' All Discount', '10'),
      ]),
  ];
function Home() {
    const onClick = (e) => {
        console.log('click ', e);
      };
  return (
    <div>
            <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    </div>
  )
}

export default Home