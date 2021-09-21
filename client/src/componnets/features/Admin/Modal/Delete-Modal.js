import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
const { confirm } = Modal;

const DeleteModal = (props) => {
  const { stuffMemberName } = props;
  function showDeleteConfirm() {
    confirm({
      title: ` ${stuffMemberName}  את/ה בטוח/ה שתרצה למחוק את `,
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "כן",
      okType: "danger",
      cancelText: "לא",
      onOk() {
        alert("רשומה נמחקה בהצלחה");
      },
      onCancel() {},
    });
  }

  return <DeleteOutlined onClick={showDeleteConfirm} />;
};

export default DeleteModal;
