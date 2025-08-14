import React, { useEffect, useState } from "react";
import { Table, Spin } from "antd";
import api from "../../api/client"; 
interface Post {
  id: number;
  title: string;
  body: string;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<Post[]>("/posts")
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spin />;

  return (
    <Table<Post>
      dataSource={data}
      rowKey="id"
      columns={[
        { title: "ID", dataIndex: "id" },
        { title: "Title", dataIndex: "title" },
        { title: "Body", dataIndex: "body" },
      ]}
    />
  );
};

export default Dashboard;
