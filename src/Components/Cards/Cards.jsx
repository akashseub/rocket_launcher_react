import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {

    const [cards, setCards] = useState([]); 

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => setCards(data))
    },[])

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center w-9/12 mx-auto mt-10">
            {
                cards.map(card => <Card 
                    key = {card.flight_number}
                    card = {card}
                ></Card>)
            }
        </div>
    );
};

export default Cards;