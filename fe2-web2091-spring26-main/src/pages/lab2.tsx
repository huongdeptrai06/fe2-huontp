import { Table } from "antd";

function bai1() {
  const columns = [
    {
      title: "ID", dataIndex: "id",
    },
    {
      title: "Name", dataIndex: "name",
    },
    {
      title: "Age", dataIndex: "age",
    },
    {
      title: "Major", dataIndex: "major",
    },
  ];

  const data = [
    {
      key: 1, id: 1, name: "Nam", age: 20, major: "IT",
    },
    {
      key: 2, id: 2, name: "Linh", age: 21, major: "Business",
    },
    {
      key: 3, id: 3, name: "Hà", age: 19, major: "Design",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách sinh viên</h2>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
}

export default bai1;