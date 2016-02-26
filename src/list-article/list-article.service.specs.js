'use strict';

describe("list-article.controller", () => {
    let service;
    let q;
    let httpBackend;
    let categoryServiceMock = {
        getCategory: jasmine.createSpy('getCategory')
    };

    beforeEach(module('category-name'));
    beforeEach(module('list-article'));

    beforeEach(module(($provide) => {
        $provide.constant('categoryService', categoryServiceMock)
    }));

    beforeEach(inject((articleService, $httpBackend, $q) => {
        q = $q;
        service = articleService;
        httpBackend = $httpBackend;
    }));

    // Check les requetes
    afterEach(() => {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it("Should get the article list from the API and the categories associated", () => {

        // Given
        var article = [{titre:'tst', categoryId:'0'}];

        categoryServiceMock.getCategory.and.returnValue(q.when('toto'));

        httpBackend.expectGET('http://mini-cms.cleverapps.io/otherUser/articles').respond(article);

        // When
        var result =service.getListArticle(); // result est une promesse

        httpBackend.flush(); // Equivalent du $scope.$apply va résoudre les promesses du httpBackend

        // Then
        result.then((listArticles)=>{
            expect(listArticles.length).toBe(1);
            expect(categoryServiceMock.getCategory).toHaveBeenCalledWith(article[0].categoryId);
            expect(listArticles[0].category).toBe('toto');
        });
    });
});
