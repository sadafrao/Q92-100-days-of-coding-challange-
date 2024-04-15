//Q92
// this function using.pop()method to remove last element of array
function removeelement<a>(arr:a[]): a | undefined{
        return arr.pop();
}
let game : string[] = ["Hockey","Tennis","Cricket"]
console.log(removeelement(game));
console.log(game);