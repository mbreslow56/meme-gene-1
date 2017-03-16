$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});

var $img = $(".wm-bk-bl");

$('input[name=color]').on('change', function() {
   $img.removeClass().addClass($(this).val());
});
    

var ranger = document.getElementById('ranger'),
    image =  document.getElementById('image'),
    width = image.width,
    height = image.height;

ranger.onchange = function(){
    image.width = width * (ranger.value / 100);
    image.height = height * (ranger.value / 100);
}

var marginer = document.getElementById('marginer'),
    pic = document.getElementById('image'),
    margin = image.margin;

marginer.onchange = function(){
    pic.style.marginTop = (margin - margin.height) / 2 + "px";
}

$(document).ready(function(){

    
var element = $(".white-square"); // global variable
var getCanvas; // global variable
 
    $("#btn-Preview-Image").on('click', function () {
         html2canvas(element, {
         onrendered: function (canvas) {
                $("#previewImage").append(canvas);
                getCanvas = canvas;
             }
         });
    });

    $("#btn-Convert-Html2Image").on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#btn-Convert-Html2Image").attr("download", "my_meme.png").attr("href", newData);
    });

});
