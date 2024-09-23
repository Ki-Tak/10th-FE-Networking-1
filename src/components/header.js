import getDateStr from "../utils/GetDate.js";

function Header() {
    const date = getDateStr();
    const newspapericon = "../../newspaper.png";
    return {
        element: `
            <header>
                <h1>
                    <img src=${newspapericon}>
                    뉴스 스탠드
                </h1>
                <h2>${date}</ㅗ>
            </header>
        `
    };
}
export default Header;