import Header from './components/Header.js';
import List from './components/List.js';
import HeadLine from './components/HeadLIne.js';
import createComponent from './core/component.js';
async function App() {
    const headerComponent = createComponent(Header);
    const headLineComponent = await createComponent(HeadLine);
    const listComponent = createComponent(List);
    return {
        element: `
        ${headerComponent.element}
        ${headLineComponent.element}
        ${listComponent.element}
        `,
    };
}
export default App;