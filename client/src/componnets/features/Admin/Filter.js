import { Menu, Dropdown, Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const Filter = (props) => {
  const { firstOption, secondOption, thirdOption } = props;
  const firstOptionWasChosen = () => {
    alert(` ${firstOption} נבחר`);
  };
  const secondOptionWasChosen = () => {
    alert(`${secondOption} נבחר`);
  };
  const thirdOptionWasChosen = () => {
    alert(` ${thirdOption} נבחר`);
  };
  const menu = (
    <Menu>
      <Menu.Item onClick={firstOptionWasChosen}>{firstOption}</Menu.Item>
      <Menu.Item onClick={secondOptionWasChosen}>{secondOption}</Menu.Item>
      <Menu.Item onClick={thirdOptionWasChosen}>{thirdOption}</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menu} placement="bottomCenter" arrow>
        <FilterOutlined />
      </Dropdown>
    </>
  );
};

export default Filter;
