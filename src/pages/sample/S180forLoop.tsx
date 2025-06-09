const S180forLoop = () => {
  const names = ["武田", "織田", "豊臣", "上杉", "徳川"];

  return (
    <div className="sample">
      {names.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
};

export default S180forLoop;
