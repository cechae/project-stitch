import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { CheckedIcon, UncheckedIcon } from "./Icon";
import { Card, CardBody } from "reactstrap";
// import Card from 'react-bootstrap/Card';

TodoItem.propTypes = {
  item: PropTypes.object,
  remove: PropTypes.func,
  setStatus: PropTypes.func,
  toggleStatus: PropTypes.func,
};
export default function TodoItem(props) {
  const { item, toggleStatus } = props;
  const Checkbox = item.checked ? CheckedIcon : UncheckedIcon;
  return (
    <Todo onClick={toggleStatus}>
      <Layout className="layout">
        <Checkbox />
        <div className="text" style={{marginLeft: '2%'}}>{item.task}</div>
      </Layout>
    </Todo>
  );
}
const Todo = styled(Card)`
  margin: 4px auto;
  :first-of-type {
    margin-top: 0px;
  }
`;
const Layout = styled(CardBody)`
  
  align-items: top;
  padding: 10px !important;
`;
