import { Select } from 'antd';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

return(
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="קטגוריות בצוות"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">מייסדים</Option>
    <Option value="lucy">וועד מנהל</Option>
    <Option value="tom">צוות</Option>
  </Select>
);

