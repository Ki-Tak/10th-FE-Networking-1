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
                <li class="selected">
                <h1>${category[0]}</h1>
                <h2><span>${nowNum}</span>/${categoryNum[0]}</h2>
                </li>
                <li class="wait">
                <h1>${category[1]}</h1>
                <h2><span>${nowNum}</span>/${categoryNum[1]}</h2>
                </li>
                <li class="wait">
                <h1>${category[2]}</h1>
                <h2><span>${nowNum}</span>/${categoryNum[2]}</h2>
                </li>
                <li class="wait">
                <h1>${category[3]}</h1>
                <h2><span>${nowNum}</span>/${categoryNum[3]}</h2>
                </li>
                <li class="wait">
                <h1>${category[4]}</h1>
                <h2><span>${nowNum}</span>/${categoryNum[4]}</h2>
                </li>
                <li class="wait">
                <h1>${category[5]}</h1>
                <h2><span>${nowNum}</span>/${categoryNum[5]}</h2>
                </li>
                <li class="wait">
                <h1>${category[6]}</h1>
                <h2><span>${nowNum}</span>/${categoryNum[6]}</h2>
                </li>
            </List>
        `
    };
}
export default List;