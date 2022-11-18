Feature('robot');

Scenario('test something', ({ I }) => {
    I.sendGetRequest('/pokemon/ditto');
});
