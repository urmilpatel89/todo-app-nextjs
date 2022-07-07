import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

interface DataInterface {
  onSelect: any;
  text: string;
  id: number;
}
const ToDoLists = (props: DataInterface) => {
  return (
    <>
      <li className="list-group-item mb-2">
        <div className="row">
          <div className="col-10">{props.text}</div>
          <div className="col-2">
            <div className="remove-btn">
              <FontAwesomeIcon
                className="button"
                icon={faTrash}
                onClick={() => {
                  props.onSelect(props.id);
                }}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default ToDoLists;
