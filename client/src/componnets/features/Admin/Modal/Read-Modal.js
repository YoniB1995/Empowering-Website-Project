import { Modal, Button, Space } from "antd";
import { ReadOutlined } from "@ant-design/icons";
import { useState } from "react";
const { confirm } = Modal;

const ReadModal = (props) => {
  const { contactPersonName, contactText } = props;
  function showDeleteConfirm() {
    confirm({
      title: `${contactPersonName}פנייה של `,
      icon: <ReadOutlined />,
      content: `${contactText}`,
      okText: "השב",
      cancelText: "סגור",
      onOk() {
        alert("אולי נשים אופציה להשבה ישירות מפה")
      },
      onCancel() {},
    });
  }

  return <ReadOutlined onClick={showDeleteConfirm} />;
};

export default ReadModal;
