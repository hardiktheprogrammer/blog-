const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`something wentm=, make sure that ${selector} exists or is typed correctly`);

};
`1`