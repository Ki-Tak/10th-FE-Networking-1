import Header from './components/Header.js';
import List from './components/List.js';
import createComponent from './core/component.js';
import HeadLine from './components/HeadLIne.js';

async function App() {
    const headerComponent = createComponent(Header);
    const headLineComponent = await createComponent(HeadLine);
    const listComponent = createComponent(List);
    return {
        element: `
        ${headerComponent.render()}
        ${headLineComponent.render()}
        ${listComponent.render()}
    `};
}
export default App;