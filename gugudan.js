const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 사용자로부터 숫자 입력 받기
rl.question('Enter a number for the multiplication table: ', (answer) => {
    const number = parseInt(answer);

    // 입력값이 유효한지 확인
    if (!isNaN(number)) {
        // 구구단 출력 함수 호출
        generateMultiplicationTable(number);
    } else {
        console.log('Invalid input. Please enter a valid number.');
    }

    // rl.close()를 호출하지 않고 close 이벤트를 기다림
});

// close 이벤트를 처리하여 프로그램 종료
rl.on('close', () => {
    console.log('Program terminated.');
    process.exit(0);
});

// 구구단 출력 함수
function generateMultiplicationTable(number) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }

    // rl.close()를 호출하여 readline 인터페이스 종료
    rl.close();
}
