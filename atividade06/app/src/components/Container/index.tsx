import React from "react";
import styled from "./container.module.css";

export type ContainerProps = {};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styled.container}>{children}</div>;
};

export default Container;
