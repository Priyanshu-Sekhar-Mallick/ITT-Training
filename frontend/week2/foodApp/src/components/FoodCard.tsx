type FoodProps = {
    name: string;
    price: number;
    ratings: number;
    isAvailable: boolean;
};

function FoodCard({name, price, ratings, isAvailable}: FoodProps){
    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ₹{price}</p>
            <p>Ratings: ⭐{ratings}</p>
            <p>Available: {isAvailable? "Yes":"No"}</p>
        </div>
    );
}

export default FoodCard;