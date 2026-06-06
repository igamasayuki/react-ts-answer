import { useState, useEffect } from "react";
import { fetchEmployees, Employee } from "../../api/employeeApi";

const CompEmployeeList2 = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // 画面表示時に社員リストを取得する
    handleFetchEmployees();
  }, []);

  const handleFetchEmployees: () => Promise<void> = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchEmployees();
      setEmployees(data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error("エラー:", e.message);
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>従業員情報</h1>
      {loading && <p>読み込み中...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>入社日</th>
            <th>扶養人数</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.hireDate}</td>
              <td>{employee.dependentsCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompEmployeeList2;
