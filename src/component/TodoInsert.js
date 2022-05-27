import React, { memo } from "react";

const TodoInsert = ({ input, onChangeInput, onKeyPress }) => {
  return (
    <div className={"insert"}>
      <input
        className={"text"}
        type="text"
        value={input}
        placeholder="할일을 적어주세요"
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
        autoFocus
      />
      <input className={"addbtn"} type="button" value="추가" />
    </div>
  );
};
export default memo(TodoInsert);
