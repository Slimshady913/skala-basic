const drawButton = document.getElementById('drawButton');
const messageDiv = document.getElementById('message');

// drawLottery 함수는 그대로 Promise를 반환하도록 둡니다 (비동기 작업의 핵심)
function drawLottery() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isWinner = Math.random() < 0.5; // 50% 확률
            isWinner ? resolve("당첨 되었습니다.") : reject("꽝! 다음 기회에...");
        }, 1000);
    });
}

// 클릭 이벤트 핸들러를 async 함수로 변경합니다.
drawButton.addEventListener('click', async () => {
    // 초기화 및 안내 문구
    messageDiv.textContent = "1초 후에 당첨 결과가 발표됩니다.";
    messageDiv.className = 'message'; 

    try {
        // await를 사용하여 Promise가 완료될 때까지 기다린 후 결과를 result에 할당합니다.
        const result = await drawLottery();
        
        // resolve(성공) 시 실행될 로직
        messageDiv.textContent = result;
        messageDiv.classList.add('success'); // 파란색
        
    } catch (error) {
        // reject(실패) 시 실행될 로직
        messageDiv.textContent = error;
        messageDiv.classList.add('failure'); // 빨간색
        
    } finally {
        // (선택 사항) 성공/실패 여부와 상관없이 실행하고 싶은 로직이 있다면 여기에 작성합니다.
        console.log("추첨 프로세스가 종료되었습니다.");
    }
});