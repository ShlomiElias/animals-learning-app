function imgInsert() {
    
    /************************************************
    ********** Creat divs with small images *********
    ************************************************/

    for (i = 1; i <= 12; i++) {

        var imgNumber = i.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false}) // imgNumber must be at least 2 digits

        var animals = {
            imgName: "images/" + imgNumber + ".png",
            imgSound: "sounds/" + imgNumber + ".mp3",
            imgIndex: i
        };


        var newImg = newImg + "<div id='smallImg'><img src=" + animals.imgName + "></div>";

        document.getElementById("navImg").innerHTML = newImg;

        document.getElementById('navImg').childNodes[0].nodeValue = null;
    }
    
    $(document).ready(function () {
        $(function() {
            $('body').hide().fadeIn(3000);
            
            });

    /************************************************
    ***** Insert small image into the Large div *****
    ************************************************/
        
        $("#smallImg img").click(function () {

            var replaceImg = $(this).attr("src");

            $("#largeImg").attr({"src": replaceImg});

        });
        
    /************************************************
    ******* Change images in the large image ********
    ************************************************/
        var next = function () {
            var currentImg = $("#largeImg").attr("src");
            
            var currentImgNum = parseInt(currentImg.substr(7,2))+1;
            
            console.log(currentImgNum);
            
            if (currentImgNum > 12) currentImgNum = 1;
            
            if (currentImgNum < 1) currentImgNum = 12;

            var numNextImg = currentImgNum.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false});
            
            console.log(numNextImg);

            $("#largeImg").attr("src", "images/" + numNextImg + ".png");
        }
        
        var pre = function () {

            var currentImg = $("#largeImg").attr("src");
            
            var currentImgNum = parseInt(currentImg.substr(7,2))-1;
            
            console.log(currentImgNum);

            if (currentImgNum > 12) currentImgNum = 1;
            
            if (currentImgNum < 1) currentImgNum = 12;

            var numPrevImg = currentImgNum.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false});

            $("#largeImg").attr("src", "images/" + numPrevImg + ".png");
        }

        $("#nextImgBt").click(function () {
            
            next();

        });

        $("#prevImgBt").click(function () {
            
            pre();

        });
        
    /************************************************
    ***** Sound off the animal in the large img *****
    ************************************************/ 
        
                var audioElement = document.createElement("audio");
                
                $('.animalSoundOn').click(function() {

                    var ImgSound = $("#largeImg").attr("src");
            
                    var ImgSoundNum = parseInt(ImgSound.substr(7,2));
        
                    var numSound = ImgSoundNum.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false});
        
                    audioElement.setAttribute("src", "sounds/" + numSound + ".mp3");
        
                    audioElement.addEventListener("load", function() {
                        audioElement.play();
                            }, true);

                    audioElement.play();
                });


                $('.animalSoundOff').click(function() {

                    audioElement.pause();
                    
                });
        
                $("#nextImgBt").click(function () {

                    audioElement.pause();   

                });
        
                $("#prevImgBt").click(function () {

                    audioElement.pause();   

                });

                $("#smallImg img").click(function () {

                    audioElement.pause();   

                });

                /************************************************
                 ***** Select images with keybord arrows ********
                 ************************************************/ 
                document.onkeydown = checkKey;
                
                function checkKey(key) {
                
                    key = key || window.event;
                
                    if (key.keyCode == '37') {
                       // left arrow
                       next();
                    }
                    else if (key.keyCode == '39') {
                       // right arrow
                       pre();
                    }
                
                }
             
        });
}
