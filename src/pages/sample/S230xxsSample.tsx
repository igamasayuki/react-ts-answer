import { useState } from "react";

const S230xxsSample = () => {
  const [name, setName] = useState<string>("悪意太郎");
  const [comment, setComment] = useState<string>(
    "<script>alert('JavaScriptプログラム');</script>"
  );
  const [inputName, setInputName] = useState<string>("");
  const [inputComment, setInputComment] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputComment(e.target.value);
  };

  const handleSubmit = () => {
    setName(inputName);
    setComment(inputComment);
  };

  return (
    <div className="sample">
      <div>
        <label>名前</label>
        <input type="text" value={inputName} onChange={handleNameChange} />
      </div>
      <div>
        <label>内容</label>
        <textarea value={inputComment} onChange={handleCommentChange} />
      </div>
      <button onClick={handleSubmit}>投稿</button>

      <hr />

      <div>
        <h3>表示された内容:</h3>
        {/* サニタイズされない場合の表示例 */}
        <div>
          <strong>サニタイズされない例:</strong>
          <p dangerouslySetInnerHTML={{ __html: name }} />
          <p dangerouslySetInnerHTML={{ __html: comment }} />
        </div>
        {/* サニタイズされた場合の表示例 */}
        <div>
          <strong>サニタイズされた例:</strong>
          <p>{name}</p>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default S230xxsSample;
