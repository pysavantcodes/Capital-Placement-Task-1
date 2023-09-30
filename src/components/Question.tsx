import { Input } from "antd";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

interface Props {
  onSave: () => void;
  onDelete: () => void;
}
const Question = ({ onSave, onDelete }: Props) => {
  const [questionOption, setQuestionOption] = useState<string>("");
  return (
    <div className="container question">
      <div className="head">
        <h3>Questions</h3>
      </div>

      <div className="area">
        <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>Type</h3>
        <select onChange={(e) => setQuestionOption(e.target.value)}>
          <option value={"Paragraph"}>Paragraph</option>
          <option value={"ShortAnswer"}>Short Answer</option>
          <option value={"YesNo"}>Yes/No</option>
          <option value={"Dropdown"}>Dropdown</option>
          <option value={"MultipleChoice"}>Multiple Choice</option>
          <option value={"Date"}>Date</option>
          <option value={"Number"}>Number</option>
          <option value={"FileUpload"}>File Upload</option>
        </select>
        <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>Question</h3>
        <Input className="input" placeholder="Type here" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 0",
          }}
        >
          <div
            onClick={() => onDelete()}
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "9px",
              color: "#A80000",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <CloseOutlined />
            <p>Delete question</p>
          </div>
          <button onClick={() => onSave()} className="save-btn">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
