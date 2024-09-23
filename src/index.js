import App from './App.js';
import createComponent from './core/component.js';
export const render = () => {
    const $app = document.getElementById('app');
    const appComponent = createComponent(App);
    $app.innerHTML = appComponent.element;
}
render();

