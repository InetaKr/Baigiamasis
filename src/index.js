import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { QuestionsProvider } from "./context/QuestionsContext";
import { AnswersProvider } from "./context/AnswersContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <QuestionsProvider>
        <AnswersProvider>
          <App />
        </AnswersProvider>
      </QuestionsProvider>
    </UserProvider>
  </BrowserRouter>
);
