const { scenarios } = require('../data/scenarios')

Feature('robot');

scenarios.forEach(scenario => {
    Scenario('test cleaning session', ({ I }) => {
        I.sendPostRequest('/cleaning-sessions', scenario.input);
        I.seeResponseCodeIs(200);
        I.seeResponseContainsKeys(['coords', 'patches']);
        I.seeResponseContainsJson(scenario.output);
    });
})
