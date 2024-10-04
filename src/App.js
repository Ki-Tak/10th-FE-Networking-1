import Header from './components/Header.js';
import List from './components/List.js';
import HeadLine from './components/HeadLIne.js';
import createComponent from './core/component.js';
async function App() {
    const [headerComponent, headLineComponent, listComponent] = await Promise.all([
        createComponent(Header),
        createComponent(HeadLine),
        createComponent(List)
    ]);

    return {
        element: `
        ${headerComponent.element}
        ${headLineComponent.element}
        ${listComponent.element}
        `,
    };
}
export default App;