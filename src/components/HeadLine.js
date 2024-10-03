function HeadLine() {
    const newHeadLine1 = [
        "연합뉴스",
        "공공의료기관 의사 3천500여명 부족…연봉 6억여원까지 치솟아"
    ]
    const newHeadLine2 = [
        "연합뉴스",
        "의대교수들 \"국민 상해입히는 급발진 정부…의평원 말살하려 해\""
    ]
    return {
        element: `
            <article>
                <div>
                <h1>${newHeadLine1[0]}</h1>
                <h2>${newHeadLine1[1]}</h2>
                </div>
                <div>
                <h1>${newHeadLine2[0]}</h1>
                <h2>${newHeadLine2[1]}</h2>
                </div>
            </article>
        `
    };
}
export default HeadLine;