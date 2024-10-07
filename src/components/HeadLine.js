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
    let headLineTimer;
    try {
        headLineData = await getHeadLineData();
    } catch (error) {
        console.error('Error fetching headline data:', error);
    }
    const updateHeadLine = () => {  // 헤드라인 업데이트
        document.querySelector('article').innerHTML = render();
    }
    const rollHeadLine = () => {    // 5초 지나면 헤드라인 업데이트 
        headLineTimer = setTimeout(() => {
            leftIndex = (leftIndex + 1) % headLineData.newHeadLine1.length;
            rightIndex = (rightIndex + 1) % headLineData.newHeadLine2.length;
            updateHeadLine();
            rollHeadLine(); // 재귀호출 
        }, 5000);
    }
    const startRoll = () => {
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
            <div>
            <h1>${headLineData.newHeadLine1[leftIndex].journer}</h1>
            <h2>${headLineData.newHeadLine1[leftIndex].content}</h2>
            </div>
            <div>
            <h1>${headLineData.newHeadLine2[rightIndex].journer}</h1>
            <h2>${headLineData.newHeadLine2[rightIndex].content}</h2>
            </div>
        </article>`
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