
export class Character {
    name: string;
    title: string;
    image: string; // Base 64 Image

    weapon: Weapon;


    content: {
        weapons: Weapon[];
    };
}

export class Weapon {
    name: string;
    mt: number;
    range: number;
}
