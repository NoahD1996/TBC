import pc from "../helpers/calculate-pen-chance"


const Home = () =>{
    let armor = {
        max_durability: 60,
        current_durability: 60,
        class_score: 50,
        level: 5,
        material: "UHMW",
        destructibility: 0.45
    };

    let bullet = {
        damage: 58,
        penetration: 47,
        armor_damage: 63.0
    };

    let chance: number = pc.pen_calculation(armor,bullet);
    return(
        <div>
            <p>
                {chance}
            </p>
        </div>
    )
}



export default Home;