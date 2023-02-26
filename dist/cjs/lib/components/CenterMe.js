"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var CenterMe = function (_a) {
    var children = _a.children, _b = _a.backdropColor, backdropColor = _b === void 0 ? "inherit" : _b;
    var styles = {
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
    return (0, jsx_runtime_1.jsx)("div", __assign({ style: styles }, { children: children }));
};
exports.default = CenterMe;
