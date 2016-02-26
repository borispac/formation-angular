'use strict';

describe("list-article.controller", () => {
    var ctrl, article, scope, mdDialog;

    beforeEach(module('category-name'));
    beforeEach(module('list-article'));

    it("Should set editMod to true", () => {
        console.log(inject);

        // Given
        scope = {};
        mdDialog = {};
        inject(($controller) => {
            console.log('enter ctrl');
            console.log($controller);
            ctrl = $controller('listArticleController', {
                $scope: scope,
                $mdDialog: mdDialog
            });

            console.log('exit ctrl');

        });

        article = {
            editMod: false
        };

        // When
        ctrl.modEdit(article);

        // Then
        expect(article.editMod).toBe(true);
    });
});
