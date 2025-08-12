// src/pages/Courses.js
import React, { useState } from 'react';
import { Table, Input } from 'antd';

const { Search } = Input;

export default function Courses() {
  const [searchText, setSearchText] = useState('');
  const [data] = useState([
    { key: 1, name: 'React Basics', category: 'Web Development' },
    { key: 2, name: 'Python for Data Science', category: 'Data Science' },
    { key: 3, name: 'Machine Learning Intro', category: 'AI' },
  ]);

  const filteredData = data.filter(course =>
    course.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    { title: 'Course Name', dataIndex: 'name', key: 'name' },
    { title: 'Category', dataIndex: 'category', key: 'category' }
  ];

  return (
    <>
      <Search
        placeholder="Search courses"
        onChange={e => setSearchText(e.target.value)}
        style={{ marginBottom: 16, maxWidth: 300 }}
      />
      <Table dataSource={filteredData} columns={columns} pagination={{ pageSize: 5 }} />
    </>
  );
}
