function createComponent(component) {
    const componentInstance = component();
    return componentInstance;
}
export default createComponent;