import CompMyName from "../../components/sample/CompMyName";
import CompMyHobby from "../../components/sample/CompMyHobby";

const S240basicParent = () => {
  return (
    <div className="sample">
      名前：
      <CompMyName />
      趣味：
      <CompMyHobby />
      名前：
      <CompMyName />
      趣味：
      <CompMyHobby />
    </div>
  );
};

export default S240basicParent;
