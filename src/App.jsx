import React from "react";
import MainPanel from "./components/panel";
import ChatField from "./components/chat-field";
import "./App.css";
import AppContext, { useAppContext } from "./context";

function App() {
  const init = useAppContext();
  const isRegister = init.state === "register";
  const isChat = init.state === "chat";
  return (
    <AppContext.Provider value={init}>
      <div className={`main-field main-field-${init.state}`}>
        {isRegister && <MainPanel />}
        {isChat && <ChatField />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
