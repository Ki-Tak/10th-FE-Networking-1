import getTodayStr from "../utils/getTodayStr.js";
import { newsURL } from "../assets/images/images.js";
function Header() {
    const date = getTodayStr();
    const render = () => {
        const element = ` <header>
        <h1>
            <img src=${newsURL}>
            뉴스 스탠드
        </h1>
        <h2>${date}</h2>
    </header>`
        return element;
    }
    return { render };
}
export default Header;