app.controller('imgCtrl', function($scope, FileUploader) {
        $scope.uploader = new FileUploader();
        $scope.uploader.filters.push({
           name: 'imageFilter',
           fn: function(item /*{File|FileLikeObject}*/, options) {
               var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
               return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
           }
       });
        $scope.uploader.onAfterAddingFile = function(file){
        	$scope.file = file;
        }


    });