import Header from './components/Header.js'
import createComponent from './core/component.js';

function App() {
    const headerComponent = createComponent(Header)
    console.log(headerComponent);
    return {
        element: `
        ${headerComponent.element}
        `,
    };
}
export default App;