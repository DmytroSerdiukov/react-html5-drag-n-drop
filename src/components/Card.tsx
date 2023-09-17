import useDragAndDrop from "../hooks/DragAndDrop";

const Card = (props: any) => {
  const dnd = useDragAndDrop(props.id);
  return (
    <div
      id={props.id}
      {...dnd}
      {...props}
      style={{
        border: "1px solid black",
        padding: 15,
        margin: 5,
        cursor: "pointer",
      }}
    >
      {props.title}
    </div>
  );
};
export default Card;
