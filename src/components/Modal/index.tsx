import React from "react";
import { Props } from "../../models/DefaultProps";
import classes from "./Modal.module.css";

interface ModalProps extends Props {
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

export const Modal: React.FC<ModalProps> = (props) => {
  return (
    <>
      <div onClick={props.onClose} className={classes.modal_backdrop}></div>
      <div className={classes.modal_container}>
        <div className={classes.modal_content}>{props.children}</div>
      </div>
    </>
  );
};
