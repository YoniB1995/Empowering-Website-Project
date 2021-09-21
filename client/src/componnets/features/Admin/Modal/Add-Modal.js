import React, { useState } from "react";
import { Modal, Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";


const AddModal = () => {
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
      <PlusCircleFilled type="Default" onClick={showModal}/>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          שם מלא
          <input />
          תפקיד
          <input />
          תיאור
          <input />
          תמונה
          <input />
          <Button type="primary">שלח</Button>
        </form>
      </Modal>
    </>
  );
};

export default AddModal;