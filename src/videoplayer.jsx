import React from 'react';
import ReactPlayer from 'react-player';
import { Card } from 'antd';

const VideoPlayer = ({ url, title }) => {
  return (
    <Card
      title={title}
      style={{ width: '100%', margin: '20px auto' }}
      bodyStyle={{ padding: 0 }}
    >
      <div className="video-wrapper" style={{ position: 'relative', paddingTop: '56.25%' }}>
        <ReactPlayer
          url={url}
          controls
          width="70%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </Card>
  );
};

export default VideoPlayer;
