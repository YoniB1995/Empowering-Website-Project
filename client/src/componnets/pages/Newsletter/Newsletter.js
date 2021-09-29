import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const campaigns = [
    {
      iframe:
      'https://us5.campaign-archive.com/?u=4c2830c704079978d3ed5f940&id=a0a46a5859',
      id: 0,
    },
    {
      iframe: 'https://yehudabayana.github.io/my-spotify/#/',
      id: 1,
    },
    {
      iframe: 'https://yehudabayana.github.io/portfolio/',
      id: 2,
    },
    {
      iframe: 'https://yehudabayana.github.io/my-order/',
      id: 3,
    },
    {
      iframe: 'https://yehudabayana.github.io/frontfolio/',
      id: 4,
    },
  ];
  const [visible, setVisible] = useState(false);
  const [iframeSelected, setIframeSelected] = useState({});
  const showIframe = (id) => {
    setVisible(true);
    setIframeSelected(() => campaigns.find((campaign) => campaign.id === id));
  };
  return (
    <>
      <div className='campaign-T'>
        {campaigns.map((campaign) => {
          return (
            <>
              <h3 onClick={() => showIframe(campaign.id)}>
                click {campaign.id}
              </h3>
            </>
          );
        })}
      </div>
      {visible && (
        <div className='iframe'>
          <iframe src={iframeSelected.iframe}
            width='100%'
            height='500px'
            frameborder='0'></iframe>
        </div>
      )}
    </>
  );
};

export default Newsletter;
