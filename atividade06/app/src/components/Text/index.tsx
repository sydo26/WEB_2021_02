import React from "react";
import styled from "./text.module.css";

export type TextProps = {
  title?: boolean;
  size?: "small" | "medium" | "large";
  center?: boolean;
};

const Text: React.FC<TextProps> = ({
  title = false,
  size = "medium",
  children,
  center = false,
}) => {
  const HeaderTitle: React.FC<any> = ({ ...rest }) => {
    return size === "small" ? (
      <h3 {...rest}>{children}</h3>
    ) : size === "medium" ? (
      <h2 {...rest}>{children}</h2>
    ) : (
      <h1 {...rest}>{children}</h1>
    );
  };

  return title ? (
    <HeaderTitle
      {...(center
        ? {
            style: {
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            },
          }
        : {})}
      className={styled.title}
    />
  ) : (
    <p
      {...(center
        ? {
            style: {
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            },
          }
        : {})}
      className={styled.text}
    >
      {children}
    </p>
  );
};

export default Text;
