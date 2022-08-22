// dependency injection is a design pattern in which an object or function receives other objects or functions that it depends on

// A service is any class which contains useful functionality. In turn, a client is any class which uses services.
// The injector, sometimes also called an assembler, container, provider or factory, introduces services to the client.

interface rectangle {
    width: number;
    height: number;
}
//service
const wall: rectangle = {
    width: 1,
    height: 2,
}
// client
function calculateArea(someObject: rectangle): number {
    return someObject.height * someObject.width
}

// service
class Wall implements rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

// client
class CalculateWallArea {
    area: number;
    constructor(wall: rectangle){
        this.area = wall.height * wall.width;
    }
}

const service = new Wall(10,20);

// assembler
// injecting service to client
const client = new CalculateWallArea(service);
console.log(client.area)

