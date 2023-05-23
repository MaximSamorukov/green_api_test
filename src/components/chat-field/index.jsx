import React, { useContext } from "react";
import AppContext from "../../context";

function ChatField() {
  const context = useContext(AppContext);
  console.log("chat", context);
  return (
    <div>
      chat field
      <button
        type="button"
        disabled={false}
        className="create_btn"
        onClick={() => {
          context?.setState("register");
        }}
      >
        Register
      </button>
    </div>
  );
}

export default ChatField;
