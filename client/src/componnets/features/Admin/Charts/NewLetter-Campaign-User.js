import React from 'react';
import { Line } from '@ant-design/charts';

const NewsletterCampaignChart = () => {
  const data = [
    { campaign: 'קמפיין ראשון', value: 4 },
    { campaign: 'קמפיין שלישי', value: 3.5 },
    { campaign: 'קמפיין רביעי', value: 5 },
    { campaign: 'קמפיין חמישי', value: 4.9 },
    { campaign: ' קמפיין שישי', value: 6 },
    { campaign: ' קמפיין שביעי', value: 7 },
    { campaign: ' קמפיין שמיני', value: 9 },
    { campaign: ' קמפיין תשיעי', value: 13 },
    { campaign: 'קמפיין עשירי', value: 13 },


  ];

  const config = {
    data,
    height: 100,
    xField: 'campaign',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return (
    <div>
      <h3 style={{textAlign:"center"}}>חשיפה חודשית לקמפיין</h3>
<Line {...config} />
    </div>
  );
};
export default NewsletterCampaignChart;