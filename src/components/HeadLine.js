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

    let headLineData = dummyData;
    try {
        headLineData = await getHeadLineData();
    } catch (error) {
        console.error('Error fetching headline data:', error);
    }

    return {
        element: `
            <article>
                <div>
                <h1>${headLineData.newHeadLine1[0].journer}</h1>
                <h2>${headLineData.newHeadLine1[0].content}</h2>
                </div>
                <div>
                <h1>${headLineData.newHeadLine2[0].journer}</h1>
                <h2>${headLineData.newHeadLine2[0].content}</h2>
                </div>
            </article>
        `
    };
}
export default HeadLine;