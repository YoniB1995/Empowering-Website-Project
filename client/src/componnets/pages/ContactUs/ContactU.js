import { useState } from "react";
import { Modal, Button } from "antd";

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
  return (
    <>
   
      <Button onClick={showModal}>
        צור קשר
      </Button>
      <div className="modal">
      <Modal 
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className="form1">
        <label>שם:</label>
        <input type="text" name="name" placeholder="נושא"></input>
        <label>אימייל:</label>
        <input type="email" name="email" placeholder="אימייל"></input>
        <label>תיאור:</label>
        <textarea></textarea>
        </form>
      </Modal>
      </div>
    </>
  );
};

export default ContactU;