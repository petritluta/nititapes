"use client";
import React from "react";
import Select from "react-select";
import { SelectType, SelectOptions } from "@/@types/general/Select";

export default function SelectComponent({
  data,
  defaultValue,
}: {
  data: SelectType;
  defaultValue: SelectOptions;
}) {
  return (
    <Select
      options={data}
      defaultValue={defaultValue}
      isSearchable={false}
      styles={{
        dropdownIndicator: dropdownIndicatorStyles,
        menu: menuStyles,
        menuList: menuListStyles,
        control: controlStyles,
        option: optionStyles,
      }}
    />
  );
}

const dropdownIndicatorStyles = (provided: any, state: any) => ({
  ...provided,
  transition: "0.5s",
  transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
});

const menuStyles = (provided: any) => ({
  ...provided,
  border: "1px solid var(--border)",
  borderRadius: "5px",
  padding: 0,
  zIndex: 3,
});

const menuListStyles = (provided: any) => ({
  ...provided,
  padding: 0,
});

const controlStyles = (baseStyles: any, state: any) => ({
  ...baseStyles,
  cursor: "pointer",
  textTransform: "capitalize",
  fontSize: "13px",
  height: "40px",
  borderRadius: "5px",
  boxShadow: "none",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  border: "1px solid var(--border)",
});

const optionStyles = (styles: any, { isFocused, isSelected }: any) => ({
  ...styles,
  backgroundColor: "transparent",
  borderRadius: "0px",
  textTransform: "capitalize",
  color: isSelected
    ? "var(--black)"
    : isFocused
    ? "var(--black)"
    : "var(--black)",
  cursor: "pointer",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  lineHeight: "14px",
  fontWeight: "400",
  padding: "15px",
});
