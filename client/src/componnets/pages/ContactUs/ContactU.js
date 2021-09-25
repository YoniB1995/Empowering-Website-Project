import { useState } from "react";
import { Modal, Button } from "antd";
import { Menu, Dropdown } from 'antd';
import { DownOutlined,MailOutlined } from '@ant-design/icons';
import './ContactU.css';

const ContactU = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const menu = (
    <Menu className="inputOne">
      <Menu.Item key="0">
        <a href="#">חבר מועדון</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">אחר</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <MailOutlined onClick={showModal} id="mail-icon"/>
      
      <div >
        <Modal 
          title="יצירת קשר"
          visible={isModalVisible}
          onOk={handleOk}
          okText="שלח"
          onCancel={handleCancel}
          cancelText="ביטול"

        >
          <form className="form1">
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                סיבת פנייה
                <DownOutlined/>
              </a>
            </Dropdown>
            <label>אימייל</label>
            <input className="input" type="email" name="email" placeholder="אימייל" ></input>
            <label>תיאור</label>
            <textarea style={{width:"320px",height:"100px",borderRadius:"5px",margin:"5px"}}></textarea>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default ContactU;


