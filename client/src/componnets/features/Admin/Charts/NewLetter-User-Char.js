import React from 'react';
import { Line } from '@ant-design/charts';

const NewsLetterUserChart = () => {
  const data = [
    { month: 'ינואר', value: 3 },
    { month: 'פבואר', value: 4 },
    { month: 'מרץ', value: 3.5 },
    { month: 'אפריל', value: 5 },
    { month: 'מאי', value: 4.9 },
    { month: 'יוני', value: 6 },
    { month: 'יולי', value: 7 },
    { month: 'אוקטובר', value: 9 },
    { month: 'נובמבר', value: 13 },
    { month: 'נובמבר', value: 13 },

  ];
  const config = {
    data,
    height: 100,
    xField: 'month',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return (
    <div>
      <h3 style={{textAlign:"center"}}>כמות  חודשית של משתמשים בניוזלטר </h3>
<Line {...config} />
    </div>
  );
};
export default NewsLetterUserChart;