// src/pages/Dashboard.js
import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';

export default function Dashboard() {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic title="Total Courses" value={12} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Active Sessions" value={5} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Students Enrolled" value={230} />
        </Card>
      </Col>
    </Row>
  );
}
