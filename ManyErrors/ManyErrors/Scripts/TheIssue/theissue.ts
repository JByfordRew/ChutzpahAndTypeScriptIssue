// adding this reference below allows the test to pass
// but it results in a lot of errors related to knockout in the 'Errors List'

/// <reference path="../knockout-2.2.1.js" />

// removing this reference above above will remove the reported errors but the test will fail
// reporting 'Can't find variable: ko'

/// <reference path="../knockout.d.ts" />

module theissue {
    export class example {
        public myLibraryInstance: KnockoutObservableAny = ko.observable();
    };
};