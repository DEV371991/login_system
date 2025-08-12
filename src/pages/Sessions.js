// src/pages/Sessions.js
import React from 'react';
import { Table } from 'antd';

export default function Sessions() {
  const data = [
    { key: 1, course: 'React Basics', date: '2025-08-20', status: 'Upcoming' },
    { key: 2, course: 'Python for Data Science', date: '2025-08-15', status: 'Completed' },
  ];

  const columns = [
    { title: 'Course', dataIndex: 'course', key: 'course' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Status', dataIndex: 'status', key: 'status' }
  ];

  return <Table dataSource={data} columns={columns} pagination={false} />;
}
