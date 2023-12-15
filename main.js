const n = 5;
const balls = [1, 2, 3, 4, 5];

const getBall = (n, ball) => {
    let topTube = [];
    let bottomTube = [];
    let middleTube = [];
    let result = [];

    for (let i = 0; i < n; i++){
        if (i % 2 === 0) {
            bottomTube.push(ball[i])
        }else{
            middleTube.push(ball[i])
        }
    }

    bottomTube.reverse();
    topTube = middleTube.concat(bottomTube)

    result = topTube.join(' ')
    console.log(result);
}

getBall(n, balls)  
