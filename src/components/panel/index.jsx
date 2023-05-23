import React, { useState, useContext } from "react";
import AppContext from "../../context";
import "./style.scss";
import { useConnect } from "../../hooks/use-connect";

export default function MainPanel() {
  const context = useContext(AppContext);
  const { sendMessage } = useConnect();
  console.log(context);
  const [state, setState] = useState({});
  const onChange = (name) => (e) =>
    setState((prev) => ({ ...prev, [name]: e.target.value }));
  const btnIsDisabled = Object.values(state).filter(Boolean).length < 3;
  return (
    <div className="main_panel">
      <div className="header">Создать соединение</div>
      <div className="field field_input">
        <label title="idInstance" htmlFor="idInstance">
          idInstance:
          <input
            required
            type="text"
            name="idInstance"
            onChange={onChange("idInstance")}
          />
        </label>
      </div>
      <div className="field field_input">
        <label title="apiTokenInstatnce" htmlFor="apiTokenInstatnce">
          apiTokenInstatnce:
          <input
            required
            type="text"
            name="apiTokenInstatnce"
            onChange={onChange("apiTokenInstance")}
          />
        </label>
      </div>
      <div className="field field_input">
        <label title="receiver_tel_number" htmlFor="receiver_tel_number">
          receiver_tel_number:
          <input
            required
            type="text"
            name="receiver_tel_number"
            onChange={onChange("receiver_tel_number")}
          />
        </label>
      </div>
      <div className="field field_create">
        <button
          type="button"
          disabled={btnIsDisabled}
          className="create_btn"
          onClick={() => {
            console.log(state);
            sendMessage(state);
            // context?.setState("chat");
          }}
        >
          Создать новый чат
        </button>
      </div>
    </div>
  );
}
