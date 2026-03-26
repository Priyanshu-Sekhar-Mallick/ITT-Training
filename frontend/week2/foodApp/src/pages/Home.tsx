import FoodCard from "../components/FoodCard";


function Home(){
    const userName = "Priyanshu";

    const foodItems = [
        {id: 1, name: "Samosa and Kachori", price: 50, ratings: 4.5, isAvailable: false},
        {id: 2, name: "Chakuli", price: 70, ratings: 3.0, isAvailable: true},
        {id: 3, name: "Dosa and Idly", price: 80, ratings: 3.7, isAvailable: true},
        {id: 4, name: "Upma and Curry", price: 70, ratings: 4.0, isAvailable: true},
        {id: 5, name: "Puri and Sabji", price: 70, ratings: 4.2, isAvailable: true},
    ];

    return(
        <div>
            <h1>Welcome {userName}👏</h1>

            {foodItems.map((food) => (
                <FoodCard 
                key={food.id}
                name={food.name}
                price={food.price}
                ratings={food.ratings}
                isAvailable={food.isAvailable}
                />
            ))}
        </div>
    );
}
export default Home;