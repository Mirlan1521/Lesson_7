// class Dog {
//     constructor(weight, height,color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }
// const rex = new Dog(6,2,"black")
// console.log(rex);

//Абстрактный класс

class Animal {
    constructor(type, gender, color, voiceText) {
        this.type = type;
        this.gender = gender;
        this.color = color;
        this.voiceText = voiceText;

    }
    voice(){
        console.log(this.voiceText)
    }

}
class Dog extends Animal{
    constructor(type,gender,color, voiceText, name, purposeText) {
        super(type,gender,color, voiceText);
        this.name = name;
        this.purposeText = purposeText
    }
    purpose(){
        console.log(`Dog: ${this.name}\nPurpose:${this.purposeText}`)
    }

}
const rex = new Dog(
    'domestic',
    'female',
    'white',
    'gaf',
    'rex'
)

console.log(rex)
rex.purpose();

const  mily = new Dog(
    'domestic',
    'male',
    'pink',
    'tiaf tyaf',
    'mily',
    'chihua'
)
mily.purpose()

class Home{
    constructor(building, floor, entrance, room, colorRoof, window) {
        this.building = building;
        this.floor = floor;
        this.entrace = entrance;
        this.room = room;
        this.colorRoof = colorRoof;
        this.window = window;
    }
    Characteristic(){
        console.log(Home)
    }
}
// const appartment = new Home('cement', 'Дерево', 3, 3, 'red', 'Пластик' );
// console.log(appartment)

class Type extends Home {
    constructor(building, floor, entrance, room, colorRoof, window, door, security) {
        super(building, floor, entrance, room, colorRoof, window);
        this.door = door;
        this.security = security;

    };

}

const variant = new Type(
    'дерево',
    'паркет',
    3,
    6,
    'black',
    'металл',
    'стальной',
    'camera'
)
console.log(variant)

class HomeInterior{
    constructor(wallpaper, colorRoom, innerDoor, wifi, cinema, light, warmFloor, bedroom, lining) {
        this.wallpaper = wallpaper;
        this.colorRoom = colorRoom;
        this.innerDoor = innerDoor;
        this.wifi = wifi;
        this.cinema = cinema;
        this.warmFloor = warmFloor;
        this.bedroom = bedroom;
        this.lining= lining
    }

}

class variant2 extends HomeInterior{
    constructor(wallpaper, colorRoom, innerDoor, wifi, cinema, light, warmFloor,bedroom, lining, toilet, washroom, area, system){
        super(wallpaper, colorRoom, innerDoor, wifi, cinema, light, warmFloor, bedroom, lining)
        this.toilet = toilet;
        this.washroom = washroom;
        this.area= area;
        this.system = system

    };

}
const sale = new variant2(
    'Моющийся',
    'по желанию покупателя',
    'из березки',
    'безлимит',
    'Экран с размером стены',
    'эмбиентная подсветка всех комнат',
    'водяной',
    'анатомические матрасы двух местные',
    'По желанию клиента',
    'из золото ))))',
    'из мрамора и плюс джакузи',
    '200 метров квадрат',
    'Умный дом по всей квартиры'

)
console.log(sale)
