export async function getHeadLineData() {
    const response = await fetch("/src/data/headLineData.json");
    const data = await response.json();
    return data;
}