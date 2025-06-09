import { useState } from "react";

// Employee型を定義
interface Employee {
  id: number;
  name: string;
  joinDate: string;
  salary: number;
  dependents: number;
}

const Ex120 = () => {
  // 初期データ
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 10,
      name: "渡辺三郎",
      joinDate: "2018-10-29",
      salary: 130000,
      dependents: 3,
    },
    {
      id: 20,
      name: "佐藤次郎",
      joinDate: "2017-08-22",
      salary: 450000,
      dependents: 3,
    },
    {
      id: 30,
      name: "山本八郎",
      joinDate: "2017-06-18",
      salary: 300000,
      dependents: 12,
    },
    {
      id: 40,
      name: "山田太郎",
      joinDate: "2021-06-12",
      salary: 200000,
      dependents: 1,
    },
  ]);

  // フォームの入力状態
  const [newEmployee, setNewEmployee] = useState<Employee>({
    id: 0,
    name: "",
    joinDate: "",
    salary: 0,
    dependents: 0,
  });

  // 先頭を削除
  const handleRemoveFirst = () => {
    setEmployees((prev) => prev.slice(1));
  };

  // 最後を削除
  const handleRemoveLast = () => {
    setEmployees((prev) => prev.slice(0, -1));
  };

  // フォームの入力を管理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({
      ...prev,
      [name]:
        name === "salary" || name === "dependents" || name === "id"
          ? Number(value)
          : value,
    }));
  };

  // 新しい従業員を追加
  const handleAddEmployee = () => {
    setEmployees((prev) => [...prev, newEmployee]);
    // フォームをクリア
    setNewEmployee({ id: 0, name: "", joinDate: "", salary: 0, dependents: 0 });
  };

  return (
    <div className="sample">
      <h2>全件表示：</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
            <th>入社日</th>
            <th>給料</th>
            <th>扶養人数</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.joinDate}</td>
              <td>{employee.salary.toLocaleString()}円</td>
              <td>{employee.dependents}人</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleRemoveFirst}>先頭を削除</button>
      <button onClick={handleRemoveLast}>最後を削除</button>
      <h2>新しい従業員を追加：</h2>
      <div>
        <label>
          ID:
          <input
            name="id"
            value={newEmployee.id}
            onChange={handleChange}
            type="number"
          />
        </label>
        <br />
        <label>
          名前:
          <input
            name="name"
            value={newEmployee.name}
            onChange={handleChange}
            type="text"
          />
        </label>
        <br />
        <label>
          入社年月日:
          <input
            name="joinDate"
            value={newEmployee.joinDate}
            onChange={handleChange}
            type="date"
          />
        </label>
        <br />
        <label>
          給料:
          <input
            name="salary"
            value={newEmployee.salary}
            onChange={handleChange}
            type="number"
          />
        </label>
        <br />
        <label>
          扶養人数:
          <input
            name="dependents"
            value={newEmployee.dependents}
            onChange={handleChange}
            type="number"
          />
        </label>
        <br />
        <button onClick={handleAddEmployee}>上記を追加</button>
      </div>
    </div>
  );
};

export default Ex120;
