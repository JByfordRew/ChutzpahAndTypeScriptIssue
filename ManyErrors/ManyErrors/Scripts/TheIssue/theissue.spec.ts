/// <reference path="../jasmine/jasmine.d.ts" />
/// <reference path="theissue.ts" />

describe("given a component that uses a library like jquery, knockout, underscore, or any other", () => {
    var issueExample: theissue.example;    
    describe("when we create the our component", () => {
        beforeEach(() => {
            issueExample = new theissue.example();
        });
        it("should then list a lot of errors relating to knockout (as this was the example library we used to demonstrate this issue)", () => {
            //try running this test in Chutzpah
            //initially it will fail and report 'Can't find variable: ko'
            //now add the knockout-2.2.1.js reference to theissue.ts
            //check the 'Error List' below and you will see lots of knockout errors
            //but the test will run.
        });
    });
});
