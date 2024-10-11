// 무한롤링 되는 헤드라인 컴포넌트 함수 
import { getHeadLineData } from "../core/apis.js";

async function HeadLine() {
    const dummyData = {
        newHeadLine1: [
            { journer: "로딩 중..", content: "로딩 중.." }
        ],
        newHeadLine2: [
            { journer: "로딩 중..", content: "로딩 중.." }
        ]
    };
    let leftIndex = 0;
    let rightIndex = 0;
    let headLineData = dummyData;
    let headLineTimer
    const rollingPeriod = 5000;
    const rollInterval = 1000;
    const aniDuration = 500;
    try {
        headLineData = await getHeadLineData();
    } catch (error) {
        console.error('Error fetching headline data:', error);
    }
    const updateLeft = () => { // 왼쪽 헤드라인 업데이트 하는 함수 
        // 왼쪽 헤드라인 값을 가져와서 headline 클래스를 추가하여 애니메이션을 줌
        // 애니메이션과 함께 텍스트 변경
        // 500ms 이후 (애니메이션 시간) headline 클래스 삭제 
        const leftHeadLine = document.getElementById('left');
        leftHeadLine.classList.add('headline');
        leftHeadLine.innerHTML = `
        <h1>${headLineData.newHeadLine1[leftIndex].journer}</h1>
        <h2>${headLineData.newHeadLine1[leftIndex].content}</h2>
    `;
        setTimeout(() => {
            leftHeadLine.classList.remove('headline');
        }, aniDuration);
    }
    const updateRight = () => { // 오른쪽 헤드라인 업데이트하는 함수
        const rightHeadLine = document.getElementById('right');
        rightHeadLine.classList.add('headline');
        rightHeadLine.innerHTML = `
            <h1>${headLineData.newHeadLine2[rightIndex].journer}</h1>
            <h2>${headLineData.newHeadLine2[rightIndex].content}</h2>
        `;
        setTimeout(() => {
            rightHeadLine.classList.remove('headline');
        }, aniDuration);
    }
    const rollHeadLine = () => {  // 헤드라인 롤링
        headLineTimer = setTimeout(() => {
            leftIndex = (leftIndex + 1) % headLineData.newHeadLine1.length;
            updateLeft();
            setTimeout(() => {
                rightIndex = (rightIndex + 1) % headLineData.newHeadLine2.length;
                updateRight();
            }, rollInterval);
            rollHeadLine(); // 재귀호출 
        }, rollingPeriod); // 애니메이션 시간 생각하여 500 줄임 
    };

    const startRoll = () => { // 타이머 중복호출 방지
        if (!headLineTimer) {
            rollHeadLine();
        }
    }
    const addHeadLineEventListeners = () => {
        const articleElement = document.querySelector('article');
        articleElement.addEventListener('mouseenter', () => {
            clearTimeout(headLineTimer); // 타이머 멈춤 
            headLineTimer = null; // 타이머 초기화
        })
        articleElement.addEventListener('mouseleave', () => {
            startRoll();
        })
    }
    const render = () => {
        const element = ` 
        <article>
            <div id='left'>
            <h1>${headLineData.newHeadLine1[leftIndex].journer}</h1>
            <h2>${headLineData.newHeadLine1[leftIndex].content}</h2>
            </div>
            <div id ='right'>
            <h1>${headLineData.newHeadLine2[rightIndex].journer}</h1>
            <h2>${headLineData.newHeadLine2[rightIndex].content}</h2>
            </div>
        </article>
        `
        // DOM에 요소 삽입 후 이벤트 리스너 추가
        setTimeout(() => {
            addHeadLineEventListeners();
            startRoll();
        }, 0);
        return element;

    }
    return { render };
}

export default HeadLine;