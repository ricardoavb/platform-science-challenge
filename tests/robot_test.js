const { scenarios } = require('../data/scenarios')

Feature('robot');

scenarios.forEach((scenario, index) => {
    const testId = index + 1
    Scenario(`Scenario ${testId} - cleaning sessions`, ({ I }) => {
        I.sendPostRequest('/cleaning-sessions', scenario.input);
        I.seeResponseCodeIs(200);
        I.seeResponseContainsKeys(['coords', 'patches']);
        I.seeResponseContainsJson(scenario.output);
    });
})
