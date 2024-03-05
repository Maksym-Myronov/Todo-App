import PostCard from "./PostCard";

const Card = ({
  currentItems,
  setNewText,
  setIdTitle,
  setCardsIsOpen,
  cardsIsOpen,
}) => {
  return (
    <div>
      {currentItems &&
        currentItems.map((element) => (
          <PostCard
            key={element.id}
            id={element.id}
            title={element.title}
            completed={element.completed}
            setNewText={setNewText}
            setIdTitle={setIdTitle}
            setCardsIsOpen={setCardsIsOpen}
            cardsIsOpen={cardsIsOpen}
          />
        ))}
    </div>
  );
};

export default Card;
