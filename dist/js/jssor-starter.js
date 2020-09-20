$(function(){

    var sliderhOptions = {
                    $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 1
                    $AutoPlaySteps: 4,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                    $SlideDuration: 300,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                    $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                    $SlideWidth: 220,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                    //$SlideHeight: 150,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                    $SlideSpacing: 20,                                   //[Optional] Space between each slide in pixels, default value is 0
                    $DisplayPieces: 4,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                    $ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                    $UISearchMode: 0,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                    $AutoPlay : true,

                    $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
                        $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
                        $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                        $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                        
                        $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                    }
                };

                var sliderhOptions2 = {
                    $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 1
                    $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                    $SlideDuration: 1000,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                    $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                    $SlideWidth: 320,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                    //$SlideHeight: 150,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                    $SlideSpacing: 0,                                   //[Optional] Space between each slide in pixels, default value is 0
                    $DisplayPieces: 9,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                    $ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                    $UISearchMode: 0,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                    $AutoPlay : true,

                    $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
                        $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
                        $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                        $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                        $Steps: 1,
                        
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



                var sliderhOptions5 = {
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
                        $Steps: 1
                        
                    },
                  $BulletNavigatorOptions: {
                    $Class: $JssorBulletNavigator$,
                    $AutoCenter: 1,
                    $SpacingX: 10
                  }

                };

                var sliderhOptions6 = {
                    $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 1
                    $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                    $SlideDuration: 1000,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                    $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                    $SlideWidth: 250,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                    $SlideHeight: 230,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                    $SlideSpacing: 0,                                   //[Optional] Space between each slide in pixels, default value is 0
                    $DisplayPieces: 3,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                    $ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                    $UISearchMode: 0,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                    //$AutoPlay : true,

                       $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
                        $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
                        $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                        //$AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                        $Steps: 1
                        
                    }
                };

                 var sliderhOptions7 = {
                    $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 1
                    $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                    $SlideDuration: 1000,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                    $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                    $SlideWidth: 860,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                    $SlideHeight: 360,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                    $SlideSpacing: 0,                                   //[Optional] Space between each slide in pixels, default value is 0
                    $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                    $ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                    $UISearchMode: 0,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                    //$AutoPlay : true,

                       $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
                        $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
                        $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                        //$AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                        $Steps: 1
                        
                    }
                };
  
                  var sliderOptionsTop = {
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
  
  				if ($('#slider1').length > 0){
                setTimeout(function(){
                    var jssor_slider1 = new $JssorSlider$("slider1", sliderhOptions);   
                }, 10);
                }
                if ($('#slider2').length > 0){
                setTimeout(function(){
                    $('#slider2, #slider2>div').css('width', $('footer').width() + 'px');
                    var jssor_slider2 = new $JssorSlider$("slider2", sliderhOptions2);
                }, 10);
                }
                
                if ($('#slider3').length > 0){
                setTimeout(function(){
                    var jssor_slider3 = new $JssorSlider$("slider3", sliderhOptions3);  
                }, 10);
                }
                
                if ($('#slider4').length > 0){
                setTimeout(function(){
                    var jssor_slider4 = new $JssorSlider$("slider4", sliderhOptions3);  
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

                if ($('#slider_gift').length > 0){
                  setTimeout(function(){
                    var jssor_slider_gift = new $JssorSlider$("slider_gift", sliderhOptions5);  
                }, 10);
                }

                if ($('#slider_people').length > 0){
                  setTimeout(function(){
                    var jssor_slider_people = new $JssorSlider$("slider_people", sliderhOptions6);  
                }, 10);
                }

                if ($('#slider_man').length > 0){
                  setTimeout(function(){
                    var jssor_slider_people = new $JssorSlider$("slider_man", sliderhOptions7);  
                }, 10);
                }
  

    			if ($('#sliderTop').length > 0){
                  setTimeout(function(){
                      //$('#sliderTop, #sliderTop>div').css('width', $('footer').width() + 'px');
                      var jssor_sliderTop = new $JssorSlider$("sliderTop", sliderOptionsTop);
                  }, 10);  
                }
});
