function solution(number) {

    let result = number;
    return (outsideNum) => result + outsideNum;
}