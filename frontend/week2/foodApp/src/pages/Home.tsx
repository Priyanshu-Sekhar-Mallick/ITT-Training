import FoodCard from "../components/FoodCard";


function Home(){
    const userName = "Priyanshu";

    return(
        <div>
            <h1>Welcome {userName}👏</h1>

            <FoodCard name = "Pizza " price={300} ratings={4.5} isAvailable= {true}></FoodCard>
            <FoodCard name = "Burger " price={250} ratings={3.0} isAvailable= {true}></FoodCard>
            <FoodCard name = "Dosa " price={100} ratings={4.2} isAvailable= {true}></FoodCard>
            <FoodCard name = "Puri Sabji " price={80} ratings={3.7} isAvailable= {true}></FoodCard>
            <FoodCard name = "Upma And Curry " price={80} ratings={4.8} isAvailable= {true}></FoodCard>
        </div>
    );
}
export default Home;