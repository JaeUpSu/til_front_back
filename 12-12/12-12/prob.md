1.  var nums = [100, 200, 300, 400, 500];

    nums.pop(3);
    nums.pop(4);

    console.log(nums);

2.  var number = arr.pop();
    arr.push(10000);
    arr.push(number);

3.  object

4.  2

5.  4

6.  2

7.  5

8.  84

9.  var result = year.concat("/" + month + "/" + day)

    - " " + hour.concat(":" + minute + ":" + second);

10. for (let y = 1; y <= input; y++) {

        const count = y;
        const blank = input-1;
        let raw = "";

        for (let x = 0; x < blank - count + 1; x++) {
            raw += " ";
        }
        for (let x = 0; x < count*2-1; x++) {
            raw += "*";
        }
        console.log(raw);

    }

11. for (let number = 1; number <= 100; number++) { s += number; }

12. class Wizard {
    constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
    }
    attack() {
    console.log("파이어볼");
    }
    }

13. const solar = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];

const number = parseInt(prompt("몇번째?"));

console.log("입력 : " + number);
console.log("출력 : " + solar[number]);

14. const pivot = 3;

const number = parseInt(prompt("숫자 입력"));

console.log("입력 : " + number);

if (number % pivot === 0) {
console.log("출력 : 짝")
} else {
console.log("출력 : " + number);
}

15. const name = prompt("이름 입력");

console.log("안녕하세요. 저는 " + name +"입니다.");
