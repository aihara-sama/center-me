"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenterMe = void 0;
const react_1 = __importDefault(require("react"));
const CenterMe = ({ children, backdropColor = "inherit", }) => {
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
    return react_1.default.createElement("div", { style: styles }, children);
};
exports.CenterMe = CenterMe;
