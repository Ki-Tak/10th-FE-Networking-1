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
    let nowCategoryIndex = 0;
    let nowNum = 1;
    let autoSelectTimer; // 시간 저장

    const listClick = (index) => {
        nowCategoryIndex = index;
        updateList();
        resetAutoSelectTimer(); // 클릭 시 20초 세는거 다시 초기화 
    };
    const updateList = () => {
        const categoryList = document.querySelectorAll('li');
        categoryList.forEach((value, index) => {
            value.classList.toggle('selected', index === nowCategoryIndex);
            value.classList.toggle('wait', index !== nowCategoryIndex);
        });
    };
    const addListEventListeners = () => {
        const categoryList = document.querySelectorAll('li');
        categoryList.forEach((value, index) => {
            value.addEventListener('click', () => listClick(index));
        });
    };
    const autoSelectNextCategory = () => {
        autoSelectTimer = setTimeout(() => {
            nowCategoryIndex = (nowCategoryIndex + 1) % category.length;
            updateList();
            autoSelectNextCategory(); // 재귀호출
        }, 20000);
    };
    const resetAutoSelectTimer = () => {
        clearTimeout(autoSelectTimer);
        autoSelectNextCategory();
    };
    const render = () => {
        const element = `
            <List>
                ${category.map((value, index) => `
                    <li class="${index === 0 ? 'selected' : 'wait'}" >
                        <h1>${value}</h1>
                        <h2><span>${nowNum}</span>/${categoryNum[index]}</h2>
                    </li>
                `).join('')}
            </List>
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