/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

export default styled(Avatar)(({ theme, ownerState }) => {
  const { palette, functions, typography, boxShadows } = theme || {};
  const { shadow, bgColor, size } = ownerState || {};

  const { gradients = {}, transparent = {} } = palette || {};
  const { pxToRem, linearGradient } = functions || {};
  const { size: fontSize = {}, fontWeightBold } = typography || {};

  // backgroundImage value
  const backgroundValue =
    bgColor === "transparent"
      ? transparent.main || "transparent"
      : gradients[bgColor]
      ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
      : "transparent";

  // size value
  let sizeValue;

  switch (size) {
    case "xs":
      sizeValue = {
        width: pxToRem ? pxToRem(24) : "24px",
        height: pxToRem ? pxToRem(24) : "24px",
        fontSize: fontSize.xs || "12px",
      };
      break;
    case "sm":
      sizeValue = {
        width: pxToRem ? pxToRem(36) : "36px",
        height: pxToRem ? pxToRem(36) : "36px",
        fontSize: fontSize.sm || "14px",
      };
      break;
    case "lg":
      sizeValue = {
        width: pxToRem ? pxToRem(58) : "58px",
        height: pxToRem ? pxToRem(58) : "58px",
        fontSize: fontSize.sm || "14px",
      };
      break;
    case "xl":
      sizeValue = {
        width: pxToRem ? pxToRem(74) : "74px",
        height: pxToRem ? pxToRem(74) : "74px",
        fontSize: fontSize.md || "16px",
      };
      break;
    case "xxl":
      sizeValue = {
        width: pxToRem ? pxToRem(110) : "110px",
        height: pxToRem ? pxToRem(110) : "110px",
        fontSize: fontSize.md || "16px",
      };
      break;
    default: {
      sizeValue = {
        width: pxToRem ? pxToRem(48) : "48px",
        height: pxToRem ? pxToRem(48) : "48px",
        fontSize: fontSize.md || "16px",
      };
    }
  }

  return {
    background: backgroundValue,
    fontWeight: fontWeightBold || "bold",
    boxShadow: boxShadows?.[shadow] || "none",
    ...sizeValue,
  };
});
