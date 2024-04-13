import React from "react";
import Form from "../form/Form";
import Table from "../table/Table";

function Content() {
  return (
    <React.Fragment>
      <h1>Добро пожаловать на основную страницу с контентом!</h1>
      <p>Здесь вы можете разместить свое содержимое.</p>
      <Form />
      <Table />
    </React.Fragment>
  );
}
export default Content;
