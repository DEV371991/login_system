import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import ReactPlayer from 'react-player';

const VideoModal = ({ url, title }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Video
      </Button>
      <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url={url}
            controls
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      </Modal>
    </>
  );
};

export default VideoModal;
