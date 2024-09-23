function GetDateStr() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
    const date = String(today.getDate()).padStart(2, '0');
    // 요일 배열
    const arr = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const dayOfWeek = arr[today.getDay()]; // 0-6 (일-토)

    return `${year}. ${month}. ${date} ${dayOfWeek}`;
}
export default GetDateStr;