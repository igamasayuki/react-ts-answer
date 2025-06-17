interface Props {
  yourName?: string;
  yourAge?: number;
}

const CompPropsYourInfo = ({ yourName = "名無し", yourAge = 0 }: Props) => {
  return (
    <div className="ex">
      <div>こんにちは、{yourName}さん！</div>
      <div>年齢：{yourAge}歳</div>
    </div>
  );
};

export default CompPropsYourInfo;
