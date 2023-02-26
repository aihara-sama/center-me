import React from "react";
export const CenterMe = ({ children, backdropColor = "inherit", }) => {
    const styles = {
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
    return React.createElement("div", { style: styles }, children);
};
