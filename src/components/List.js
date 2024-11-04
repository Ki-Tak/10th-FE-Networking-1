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
    const elementClick = (index, tag) => {
        if (tag === 'li') { // li 태그인 경우  
            nowCategoryIndex = index;
            updateElement('li');
            resetAutoSelectTimer();
        }
        else if (tag === 'tap') {   // tap 태그인 경우 
            tapType = index;
            updateElement('tap');
        }
        else if (tag === 'viewer') {    // viewer 태그인 경우 
            viewerType = index;
            updateElement('viewer');
        }
    }
    const updateElement = (element) => {    // 태그에 따라 최신화
        const list = document.querySelectorAll(element);
        let listIndex;
        if (element === 'li') {     // li 태그인 경우 
            listIndex = nowCategoryIndex;
        }
        else if (element === 'tap') {   // tap 태그인 경우 
            listIndex = tapType;
        }
        else if (element === 'viewer') {    // viewer 태그인 경우 
            listIndex = viewerType;
        }
        list.forEach((value, index) => {
            value.classList.toggle('selected', index === listIndex);    // 조건을 만족한다면 selected 클래스 추가 아니라면 제거
            value.classList.toggle('wait', index !== listIndex);    // 조건을 만족하지 않는다면 wait 클래스 추가 아니라면 제거 
        })
    }
    const addListEventListeners = () => {   // 각 항목들 클릭 이벤트 리스너 추가 
        const categoryList = document.querySelectorAll('li');
        const tapList = document.querySelectorAll('tap');
        const viewerList = document.querySelectorAll('viewer');
        categoryList.forEach((value, index) => {
            value.addEventListener('click', () => elementClick(index, 'li'));
        });
        tapList.forEach((value, index) => {
            value.addEventListener('click', () => elementClick(index, 'tap'));
        });
        viewerList.forEach((value, index) => {
            value.addEventListener('click', () => elementClick(index, 'viewer'));
        });
    };
    const autoSelectNextCategory = () => {  // 자동으로 다음 카테고리 선택하는 함수 
        autoSelectTimer = setTimeout(() => {
            nowCategoryIndex = (nowCategoryIndex + 1) % category.length;    // 다음 인덱스 계산 
            updateElement('li');   // 계산 후, 리스트 업데이트 
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
                    <tap class="selected">전체 언론사</tap>
                    <tap class="wait">내가 구독한 언론사</tap>
                </tapContainer>
                <viewerContainer>
                    <viewer class = "selected">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 5V19H5V5H19ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15Z" fill="#4362D0"/>
                        </svg>
                    </viewer>
                    <viewer class = "wait">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 11V3H11V11H3ZM3 21V13H11V21H3ZM13 11V3H21V11H13ZM13 21V13H21V21H13ZM5 9H9V5H5V9ZM15 9H19V5H15V9ZM15 19H19V15H15V19ZM5 19H9V15H5V19Z" fill="#879298"/>
                        </svg>
                    </viewer>
                </viewerContainer>
            </tapViewer>
            <list>
                ${category.map((value, index) => `
                    <li class="${index === 0 ? 'selected' : 'wait'}" >
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