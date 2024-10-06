import App from './App.js';
import createComponent from './core/component.js';

export async function render() {
    const $app = document.getElementById('app');
    const appComponent = await createComponent(App);
    $app.innerHTML = appComponent.element;
}
render();

