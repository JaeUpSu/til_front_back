/**
 * 
 *  비교할 첫 번째 숫자:
 *  비교할 두 번째 숫자:
 * 
 *  첫번째 숫자(이)가 두번째숫자보다 큽니다.
 *  첫번째 숫자(이)가 두번째숫자보다 작습니다.
 * 
 * 
 *  프롬프트 창에서 입력받은 두 수를 각각 num1,2 변수에 저장
 * 
 *  함수를 선언할 때 함수명은 자유롭게 지정하고 매개변수는 2개 사용
 * 
 *  조건문과 비교 연산자 === 사용
 * 
 *  두 수가 같을 경우 "같습니다" 표시
 */

const num1 = parseInt(prompt("비교할 첫 번째 숫자:"));
const num2 = parseInt(prompt("비교할 첫 번째 숫자:"));

if (num1 === num2) {
    alert("같습니다.");
} else if (num1 < num2) {
    alert(num2 + "(이)가 " + num1 + "보다 큽니다.");
} else { 
    alert(num2 + "(이)가 " + num1 + "보다 작습니다.")
}