import React from "react";
import styled from "styled-components";

export const ElemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonElem = styled.button`
  width: 250px;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0 auto;
  background: #299b01;
  border: none;
  font-size: 21px;
  color: #fff;
`;
export const SubmitInput = styled.input`
  width: 250px;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0 20px 0 0;
  background: #299b01;
  border: none;
  font-size: 21px;
  color: #fff;
`;

export const SmthWrapper = styled.div`
  column-count: 2;
  column-width: 200px;
  text-align: left;
`;
export const SmthWrap = styled.div`
  margin-bottom: 15px;
`;
export const SmthLabel = styled.label`
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 600px;
  min-height: 600px;
  text-align: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 50px 10px #444;
  transform: translate(-50%, -50%);
`;
const Checkboxlabel = styled.label` display: inline-block; margin-bottom: 15px;`;
export const CheckboxInput = ({ label, name = "checkbox", checkboxState, onCheckboxChange, ...props }) => {
  return (
    <>
      <Checkboxlabel>
        <input type="checkbox" name={name} {...props} checked={checkboxState} onChange={onCheckboxChange} />
        {label}
      </Checkboxlabel>
    </>
  );
};
