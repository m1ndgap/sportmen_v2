$(function(){



                var sliderhOptions2 = {
                    $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 1
                    $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                    $SlideDuration: 1000,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                    $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                    $SlideWidth: 274,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                    //$SlideHeight: 150,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                    $SlideSpacing: 0,                                   //[Optional] Space between each slide in pixels, default value is 0
                    $DisplayPieces: 9,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                    $ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                    $UISearchMode: 0,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                    $AutoPlay : true,

                    //$ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
                    //    $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
                    //    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    //    $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    //    $Steps: 1,
                        
                    //}
                };


                if ($('#slider2').length > 0){
                  setTimeout(function(){
                      $('#slider2, #slider2>div').css('width', $('footer').width() + 'px');
                      var jssor_slider2 = new $JssorSlider$("slider2", sliderhOptions2);
                  }, 10);
                }  


  

                var sliderhOptions1 = {
                    $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 1
                    $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                    $SlideDuration: 1000,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                    $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                    $SlideWidth: 1350,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                    //$SlideHeight: 150,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                    $SlideSpacing: 0,                                   //[Optional] Space between each slide in pixels, default value is 0
                    $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                    $ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                    $UISearchMode: 0,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                    $AutoPlay : true,

                    //$ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
                    //    $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
                    //    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    //    $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    //    $Steps: 1,
                        
                    //}
                    $BulletNavigatorOptions: {
                        $Class: $JssorBulletNavigator$,
                        $ChanceToShow: 2
                    }
                };

                var sliderhOptions3 = {
                    $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 1
                    $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                    $SlideDuration: 1000,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                    $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                    //$SlideWidth: 320,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                    //$SlideHeight: 150,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                    $SlideSpacing: 0,                                   //[Optional] Space between each slide in pixels, default value is 0
                    //$DisplayPieces: 9,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                    $ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                    $UISearchMode: 0,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                    //$AutoPlay : true,

                    $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
                        $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
                        $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                        //$AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                        $Steps: 1,
                        
                    }
                };


                var sliderhOptions4 = {
                    $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 1
                    $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                    $SlideDuration: 1000,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                    $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                    //$SlideWidth: 320,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                    //$SlideHeight: 150,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                    $SlideSpacing: 0,                                   //[Optional] Space between each slide in pixels, default value is 0
                    //$DisplayPieces: 9,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                    $ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                    $UISearchMode: 0,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                    //$AutoPlay : true,
                    $FillMode: 1,

                    $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
                        $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
                        $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                        //$AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                        $Steps: 1,
                        
                    }
                };

  
                if ($('#slider1').length > 0){

                  setTimeout(function(){
                      //$('#slider1, #slider1>div').css('width', $('footer').width() + 'px');
                      var jssor_slider1 = new $JssorSlider$("slider1", sliderhOptions1);
                  }, 10); 
                }  
  

                if ($('#slider3').length > 0){
                setTimeout(function(){
                    var jssor_slider3 = new $JssorSlider$("slider3", sliderhOptions3);  
                }, 10);
                }
                

                if ($('#slider_vdnx').length > 0){
                setTimeout(function(){
                    var jssor_slider_vdnx = new $JssorSlider$("slider_vdnx", sliderhOptions3);  
                }, 10);
                }

                if ($('#slider_zg').length > 0){
                setTimeout(function(){
                    var jssor_slider_zg = new $JssorSlider$("slider_zg", sliderhOptions4);  
                }, 10);
                }

                if ($('#slider_shukhov').length > 0){
                setTimeout(function(){
                    var jssor_slider_shukhov = new $JssorSlider$("slider_shukhov", sliderhOptions3);  
                }, 10);
                }
});
