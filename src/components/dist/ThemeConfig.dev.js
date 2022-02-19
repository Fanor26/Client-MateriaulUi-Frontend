"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = require("@material-ui/core/colors");

var theme = (0, _styles.createTheme)({
  palette: {
    primary: {
      main: '#cc5702'
    },
    secondary: {
      main: '#654321'
    },
    "inherit": {
      main: _colors.orange[500]
    },
    "outlined": {
      main: '#39FF14'
    }
  }
});
var _default = theme;
exports["default"] = _default;