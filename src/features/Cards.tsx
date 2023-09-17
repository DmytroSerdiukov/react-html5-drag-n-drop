import Card from "../components/Card";
import useDragAndDrop from "../hooks/DragAndDrop";
import { useAppSelector } from "../store/hooks";

const Cards = (props: any) => {
  const cards = useAppSelector((state) => state.cards.cards);
  return (
    <div>
      {cards.map((el: any) => (
        <Card key={el.id} id={el.id} {...el} />
      ))}
    </div>
  );
};
export default Cards;
