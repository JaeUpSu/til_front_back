/**
 * 
 *  함수 선언은 function sumMulti(x,y) 로 한다
 *      ㄴ> 같으면 두수를 곱하고
 *      ㄴ> 다르면 더한다
 * 
 *  조건문을 사용해 두 값 비교
 * 
 *  비교는 === 사용
 * 
 *  console.log 사용
 * 
 *  값은 5,10  / 10,10
 * 
 */

function sumMulti(x, y) { 
    
    let result = 0; 

    if (x === y) { 
        result = x * y;
    } else {
        result = x + y;
    }

    return result;
}

console.log(sumMulti(5, 10));
console.log(sumMulti(10, 10));