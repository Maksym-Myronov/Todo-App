import PostCard from "./PostCard";

const Card = ({currentItems}) => {    
    return (
        <div>
            {currentItems && currentItems.map((item) => (
                <PostCard key={item.id} title={item.title} completed={item.completed} />
            ))}
        </div>
    );
};

export default Card;