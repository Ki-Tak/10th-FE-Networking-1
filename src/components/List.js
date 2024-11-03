import { listSelectURL, listWaitURL, girdWaitURL, girdSelectURL } from "../assets/images/images.js";
// 리스트 컴포넌트 함수 
function List() {
    const category = [
        "종합/경제",
        "방송/통신",
        "IT",
        "영자지",
        "스포츠/연애",
        "매거진/전문지",
        "지역",
    ]
    const categoryNum = [
        "81",
        "24",
        "17",
        "20",
        "22",
        "35",
        "42",
    ] // 임시 값..
    let nowCategoryIndex = 0;   // 현재 선택된 카테고리 인덱스 
    let nowNum = 1;
    let autoSelectTimer; // 시간 저장
    let tapType = 0; // 0 (전체 언론사), 1 (내가 구독한 언론사)
    let viewerType = 0; // 0 (리스트), 1 (그리드)

    const listClick = (index) => {  // 리스트 항목 클릭 처리 
        nowCategoryIndex = index;   // 현재 카테고리 인덱스 업데이트 
        updateList();   // 리스트 업데이트 
        resetAutoSelectTimer(); // 클릭 시 20초 세는거 다시 초기화 
    };
    const updateList = () => {  // 리스트 업데이트 
        const categoryList = document.querySelectorAll('li');   // 모든 리스트 항목 선택 
        categoryList.forEach((value, index) => {
            value.classList.toggle('listSelected', index === nowCategoryIndex); // 선택된 리스트 항목 인덱스와 현재 가리켜야하는 인덱스가 같으면 selected 클래스 추가 아니면 제거  
            value.classList.toggle('listWait', index !== nowCategoryIndex); // 선택된 리스트 항목이 현재 가리켜야하는 인덱스와 다르다면 wait 클래스 추가 아니면 제거
        });
    };
    const tapClick = (index) => {
        tapType = index;
        updateTap();
    }
    const updateTap = () => {
        const tapList = document.querySelectorAll('tap');
        tapList.forEach((value, index) => {
            value.classList.toggle('tapSelected', index === tapType);
            value.classList.toggle('tapWait', index !== tapType);
        })
    }
    const viewerClick = (index) => {
        tapType = index;
        updateviewer();
    }
    const updateviewer = () => {
        const viewerList = document.querySelectorAll('viewer');
        viewerList.forEach((value, index) => {
            value.classList.toggle('viewerSelected', index === viewerType);
            value.classList.toggle('viewerWait', index !== viewerType);
        })
    }
    const addListEventListeners = () => {   // 리스트 항목에 클릭 이벤트 리스너 추가 
        const categoryList = document.querySelectorAll('li');
        const tapList = document.querySelectorAll('tap');
        const viewerList = document.querySelectorAll('viewer');
        categoryList.forEach((value, index) => {
            value.addEventListener('click', () => listClick(index));    // 클릭 시 listClick 함수 호출 
        });
        tapList.forEach((value, index) => {
            value.addEventListener('click', () => tapClick(index));
        });
        viewerList.forEach((value, index) => {
            value.addEventListener('click', () => viewerClick(index));
        });
    };
    const autoSelectNextCategory = () => {  // 자동으로 다음 카테고리 선택하는 함수 
        autoSelectTimer = setTimeout(() => {
            nowCategoryIndex = (nowCategoryIndex + 1) % category.length;    // 다음 인덱스 계산 
            updateList();   // 계산 후, 리스트 업데이트 
            autoSelectNextCategory(); // 재귀호출
        }, 20000); // 20초 후 실행 
    };
    const resetAutoSelectTimer = () => {    // 타이머 초기화 함수 
        clearTimeout(autoSelectTimer);  // 기존 타이머 초기화 
        autoSelectNextCategory(); // 새 타이머 시작 
    };
    const render = () => {  // 렌더링 함수 
        const element = `
            <tapViewer>
                <tapContainer>
                    <tap class="tapSelected">전체 언론사</tap>
                    <tap class="tapWait">내가 구독한 언론사</tap>
                </tapContainer>
                <viewerContainer>
                    <viewer class = "viewerSelected"><img src=${viewerType === 0 ? listSelectURL : listWaitURL}/></viewer>
                    <viewer class = "viewerWait"><img src=${viewerType === 0 ? girdWaitURL : girdSelectURL}/></viewer>
                </viewerContainer>
            </tapViewer>
            <list>
                ${category.map((value, index) => `
                    <li class="${index === 0 ? 'listSelected' : 'listWait'}" >
                        <h1>${value}</h1>
                        <h2><span>${nowNum}</span>/${categoryNum[index]}</h2>
                    </li>
                `).join('')}
            </list>
        `;

        // DOM에 요소 삽입 후 이벤트 리스너 추가
        setTimeout(() => {
            addListEventListeners();
            autoSelectNextCategory();
        }, 0);

        return element;
    };

    return {
        render
    };
}
export default List;