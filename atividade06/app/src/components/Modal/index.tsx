import React from "react";

import styled from "./modal.module.css";

export type ModalProps = {
  hidden?: boolean;
};

const Modal: React.FC<ModalProps> = ({ hidden = true, children }) => {
  return <div className={styled.modal}>{children}</div>;
};

export default Modal;
