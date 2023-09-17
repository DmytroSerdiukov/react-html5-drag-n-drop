import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { changeElements } from "../store/features/cardsReducers";

const useDragAndDrop = (props: any) => {
  const item: any = document.getElementById(props);
  const dispatch = useAppDispatch();
  const [draggable, setDraggable] = useState(true);

  const onDragEnter = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("enter");
  };

  const onDragStart = (e: any) => {
    e.dataTransfer.effectAllowed = "move";
    const Data = `${props}`;
    e.dataTransfer.setData("id", Data);
    e.stopPropagation();
  };

  const onDragOver = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("over");
  };

  const onDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const id = e.dataTransfer.getData("id");
    const targetId = e.target.id;
    const data: any = { id, targetId };
    if (id !== targetId) return dispatch(changeElements(data));
  };

  return { draggable, onDragStart, onDragEnter, onDragOver, onDrop };
};

export default useDragAndDrop;
