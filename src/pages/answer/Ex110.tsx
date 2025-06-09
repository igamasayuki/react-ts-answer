// Employee型を定義
interface Employee {
  id: number;
  name: string;
  joinDate: string;
  salary: number;
  dependents: number;
}

// 従業員データ
const employees: Employee[] = [
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
];

const Ex110 = () => {
  // 給料30万円以上の従業員をフィルタリング
  const highSalaryEmployees = employees.filter(
    (employee) => employee.salary >= 300000
  );

  return (
    <div className="sample">
      {/* 全件表示 */}
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

      {/* 全件表示 (index番号あり) */}
      <h2>全件表示 (index番号あり)：</h2>
      <table className="table">
        <thead>
          <tr>
            <th>index</th>
            <th>ID</th>
            <th>名前</th>
            <th>入社日</th>
            <th>給料</th>
            <th>扶養人数</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.joinDate}</td>
              <td>{employee.salary.toLocaleString()}円</td>
              <td>{employee.dependents}人</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 給料30万円以上の人のみ表示 */}
      <h2>給料30万円以上の人のみ表示：</h2>
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
          {highSalaryEmployees.map((employee) => (
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
    </div>
  );
};

export default Ex110;
