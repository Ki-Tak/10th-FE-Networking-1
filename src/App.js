import Header from './components/Header.js';
import List from './components/List.js';
import createComponent from './core/component.js';
function App() {
    const headerComponent = createComponent(Header);
    const listComponent = createComponent(List);
    return {
        element: `
        ${headerComponent.element}
        ${listComponent.element}
        `,
    };
}
export default App;