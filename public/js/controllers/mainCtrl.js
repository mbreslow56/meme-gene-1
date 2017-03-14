app.controller('mainCtrl', function($scope, memeFactory) {
 	$scope.memes = memeFactory.memes
 	$scope.addMeme = memeFactory.addMeme
 	$scope.removeMeme = memeFactory.removeMeme
});