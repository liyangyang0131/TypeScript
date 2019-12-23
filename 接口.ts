// typescript 接口

// 1.基本使用

interface SquareConfig{
    color:string,
    width:number
}

function createSquare(config:SquareConfig):{color:string,area:number}{
    let newSquare = {color:'red',area:100}
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color:'black',width:50});
alert(JSON.stringify(mySquare))