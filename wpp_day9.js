function nearest(x,y){
    let differanceX=Math.abs(100-x)
    let differanceY=Math.abs(100-y)
    if(differanceX<differanceY){
        return x;
    }
    else if(differanceX>differanceY){
        return y;
    }
    else{
        console.log("Both number are same distance")
    }
}
console.log("Nearest Number of 100 is ",nearest(80,75))
console.log("Nearest Number of 100 is ",nearest(70,75))
console.log("Nearest Number of 100 is ",nearest(-80,-75))
console.log("Nearest Number of 100 is ",nearest(99,95))
console.log("Nearest Number of 100 is ",nearest(10,9))