let x = 2, n = 5
function solution(x, n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x * i)
    }
    return answer;
}
console.log(solution(x,n))