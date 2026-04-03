import { useParams } from "react-router-dom";

function FoodDetails(){
    const {id} = useParams();

    const foods = [
        { id: 1, name: "Pizza", price: 200, desc: "Cheesy pizza" },
        { id: 2, name: "Burger", price: 150, desc: "Tasty burger" }
    ];

    const selectedFoods = foods.find((items) => items.id === Number(id));

    return(
        <div className="p-6 bg-white">
            <h1 className="text-center text-gray-900 text-xl font-bold">Food Details:</h1>
            {selectedFoods? (
                <div>
                    <h2>{selectedFoods.name}</h2>
                    <h2>{selectedFoods.price}</h2>
                    <h2>{selectedFoods.desc}</h2>
                </div>
            ): (<p>Food not found</p>)}
        </div>
    );
}
export default FoodDetails;