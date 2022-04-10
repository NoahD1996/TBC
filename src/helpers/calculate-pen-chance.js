const pen_chance = (armor, bullet) =>{
    let stopping_power = armor_effectiveness(armor);
    let true_pen = bullet.penetration;
    //Unable to penatrate
    if(stopping_power >= bullet.penetration + 15)
    {
        return 0;
    }
    else if(stopping_power >= bullet.penetration)
    {
        return round_one(0.4 * (stopping_power - bullet.penetration - 15.0) * (stopping_power - bullet.penetration - 15.0));
    }
    else
    {
        return round_one(bullet.penetration / (0.9 * stopping_power - bullet.penetration) + 100);
    }

}

/* Stopping power of armor */
const armor_effectiveness = (armor) =>{
    let stopPwr = (121.0 - 5000.0 / (45.0 + calc_durability(armor) * 2.0)) * armor.class_score * 0.01;
    return round_one(stopPwr);
}

const calc_durability = (armor) =>{
    return armor.current_durability / armor.max_durability * 100;
}

const round_one = (num) =>{
    return Math.round(num * 10) / 10;
}
/*
armor = {
    max_durability: INT,
    current_durability: INT,
    class_score: INT (Level * 10),
    level: INT,
    material: STRING,
    destructibility: FLOAT
};

bullet = {
    damage: INT,
    penetration: INT,
    armor_damage: FLOAT
};

*/

module.exports = {
    pen_calculation: pen_chance
}

