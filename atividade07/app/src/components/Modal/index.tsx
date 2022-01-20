import React from "react";

import styled from "./modal.module.css";

export type ModalProps = {
  hidden?: boolean;
  title: string;
  subtitle?: string;
  onCloseClick?: () => any;
};

const Modal: React.FC<ModalProps> = ({
  title,
  subtitle,
  hidden = true,
  children,
  onCloseClick = () => null,
}) => {
  return (
    <div
      className={styled.modal}
      style={{ ...(hidden && { display: "none" }) }}
    >
      <div className={styled.container}>
        <button onClick={onCloseClick} className={styled.close}></button>
        <div className={styled.header}>
          <div className={styled.title}>{title}</div>
          <div className={styled.subtitle}>{subtitle}</div>
        </div>
        <div className={styled.body}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
