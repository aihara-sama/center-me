import { CSSProperties, FunctionComponent } from "react";
import React from "react";

interface IProps {
  children: JSX.Element;
  backdropColor?: string;
}

export const CenterMe: FunctionComponent<IProps> = ({
  children,
  backdropColor = "inherit",
}) => {
  const styles: CSSProperties = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: backdropColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <div style={styles}>{children}</div>;
};
