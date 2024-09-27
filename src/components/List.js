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
    ]
    let nowCategory = "종합/경제";
    let nowNum = 1;

    return {
        element: `
            <List>
                ${category.map((value, index) => `
                    <li class="${index === 0 ? 'selected' : 'wait'}">
                        <h1>${value}</h1>
                        <h2><span>${nowNum}</span>/${categoryNum[index]}</h2>
                    </li>
                `).join('')}
            </List>
        `
    };
}
export default List;