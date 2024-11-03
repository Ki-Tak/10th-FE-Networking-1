export async function getHeadLineData() {   // 헤드라인 json 데이터 값 가져오는 함수 
    const response = await fetch("/src/data/headLineData.json");
    const data = await response.json();
    return data;
}