import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
}
const SelectDropDown=()=>{
  return(
    <Select defaultValue="lucy" style={{ width: 200,direction:"rtl"}} onChange={handleChange} size="large">
      <Option value="jack">מייסדים</Option>
      <Option value="lucy">וועד מנהל</Option>
      <Option value="Yiminghe">צוות</Option>
    </Select>
 
)
}



export default SelectDropDown
