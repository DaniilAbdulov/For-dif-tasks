
let n = 40;

function prostieChisla(){
    cont:
    for (i = 2; i < n; i++){
        for (j = 2; j < i; j++){
            if (i % j == 0)continue cont;
        }console.log(i)
    }
}
prostieChisla();