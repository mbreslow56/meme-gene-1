app.factory('memeFactory', function($http) {

  var memesFactory = { memes[] };

  memeFactory.addMeme = function(newMeme) {
    //console.log("button works");
    newMeme = {
      // newMeme.name: $scope.name,
      // newMeme.text: $scope.text,
      // newMeme.waterMark: $scope.waterMark,
      newMeme.image: $scope.imageFile
    };

    $scope.memesFactory.memes.push(newMeme);

    // console.log($scope.memesFactory);

    // $scope.name = "";
    // $scope.text = "";
    // $scope.waterMark = "";
    $scope.image = "";
  }

  memesFactory.removeMeme = function(index) {
    //console.log(index);
    $scope.memesFactory.memes.splice(index, 1);
  }

  memesFactory.getMemes = function() {
  return $http.get('/memes')
    .then(function(response) {
      angular.copy(response.data, memesFactory.memes);
    }, function(err) {
      console.error(err)
    });
};

  return memeFactory;
});