'use strict';
//
// describe("list-article.controller", () => {
//     var ctrl, article, scope, mdDialog, q;
//
//     var mdDialogProperties = {
//         title: jasmine.createSpy('title'),
//         textContent: jasmine.createSpy('textContent'),
//         ariaLabel: jasmine.createSpy('ariaLabel'),
//         targetEvent: jasmine.createSpy('targetEvent'),
//         ok: jasmine.createSpy('ok'),
//         cancel: jasmine.createSpy('cancel')
//     };
//
//     beforeEach(module('category-name'));
//     beforeEach(module('list-article'));
//     beforeEach(() => {
//         mdDialog = {
//             confirm: jasmine.createSpy('confirm').and.returnValue(mdDialogProperties),
//             show: jasmine.createSpy('show'),
//         };
//         inject(($controller, $rootScope, $q) => {
//             q = $q;
//             scope = $rootScope.$new();
//             ctrl = $controller('listArticleController', {
//                 $scope: scope,
//                 $mdDialog: mdDialog
//             });
//         });
//
//     });
//
//
//     it("Should call the modal & if the asnwer is yes we call the callback", () => {
//         // Given
//         let ev = {};
//         let confirm = {
//             _options: {
//                 clickOutsideToClose: false
//             }
//         };
//
//         ctrl.deleteArticleCallback = jasmine.createSpy('ctrl.deleteArticleCallback');
//
//         mdDialogProperties.title.and.returnValue(mdDialogProperties);
//         mdDialogProperties.textContent.and.returnValue(mdDialogProperties);
//         mdDialogProperties.ariaLabel.and.returnValue(mdDialogProperties);
//         mdDialogProperties.targetEvent.and.returnValue(mdDialogProperties);
//         mdDialogProperties.ok.and.returnValue(mdDialogProperties);
//         mdDialogProperties.cancel.and.returnValue(confirm);
//         mdDialog.show.and.returnValue(q.when());
//
//         article = {
//             editMod: false,
//             titre: 'test!',
//             article: 'toto'
//         };
//
//         // When
//         ctrl.showConfirmDelete(ev, article.article);
//         scope.$apply();
//
//         // Then
//
//         expect(ctrl.deleteArticleCallback).toHaveBeenCalledWith('toto');
//         expect(confirm._options.clickOutsideToClose).toBe(true);
//
//     });
//
//
//     it("Should submit an update article", function() {
//         //Given
//         ctrl.validArticleCallback = jasmine.createSpy('ctrl.validArticleCallback');
//
//         article = {
//             editMod: true,
//             article: 'toto'
//         };
//
//         //When
//
//         ctrl.valid(article);
//
//         //then
//         expect(article.editMod).toBe(false);
//         expect(ctrl.validArticleCallback).toHaveBeenCalledWith('toto');
//     });
//
//     it("Should set editMod to true", () => {
//         // Given
//
//         article = {
//             editMod: false
//         };
//
//         // When
//         ctrl.modEdit(article);
//
//         // Then -
//         expect(article.editMod).toBe(true);
//     });
//
//     it("Should watch any modification on articles", () => {
//         // Given
//         article = {
//             titre: 'totoPasCard'
//         };
//
//         var articles = [article]
//
//         // When
//         ctrl.articles = articles;
//         scope.$apply();
//
//         // Then
//         // toBe compare des types primitifs, toEqual compare des objects/collections
//         expect(ctrl.articlesCard).toEqual([{
//             article:article,
//             editMod:false
//         }]);
//     });
// });
