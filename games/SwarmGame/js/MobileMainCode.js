 
	function UpdateScreen(){  

		StartTime();

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.save();	
        ctx.translate(MainData.DiffX,MainData.DiffY); 
        ctx.beginPath();
		ctx.rect(0, 0,  1080 * MainData.PxW, 1920 * MainData.PxH);
		ctx.clip();	

		if(MainData.Desktop) DesktopDraw();

		for (var x = 0; x < WindowDrawList.length; x++) 
		if(WindowList[WindowDrawList[x]].Window.Fullscreen || !WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Fullscreen)
		WindowList[WindowDrawList[x]].Function();

		if(MainData.Interfejs) Interfejs();
		
		ctx.closePath();
		
        if (AlertList[MainData.AlertNum]) AlertList[MainData.AlertNum].Function();
		
		ctx.restore();
	
        TimeInter.UpdateScreen = setTimeout(UpdateScreen,MainData.Frame);
	}

	//-----------------------------------------------------------
	
	function ButtonClean(){

        if(MainData.CurrentButton != null) if(MainData.CurrentButton.Object.BAnim) 
        MainData.CurrentButton.Object.AnX = 0;

        MainData.ButtonWork = true; 
		MainData.CurrentButton = null;
     
    }
    
	//-----------------------------------------------------------
	
    function ButtonHBWindowPC(Button_x, Button_y) {
        
        var Check = false, Check2 = false, Check3 = true;
       
        for (var y = 0; y < WindowDrawList.length; y++) {

            var WinList = WindowList[WindowDrawList[y]];

            for(var x = 0; x < WinList.Window.ObjectNumber; x++){

                var WObject = WinList.WindowObjects[x];
    
                if((y == WindowDrawList.length-1 || !WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Fullscreen) &&
                    Button_x > MainData.DiffX+(WinList.Window.PX+WObject.PX)*MainData.PxW &&  !MainData.OnInter && 
                    Button_y > MainData.DiffY+(WinList.Window.PY+WObject.PY)*MainData.PxH &&  
                    Button_x < MainData.DiffX+(WinList.Window.PX+WObject.PX)*MainData.PxW+WObject.Width*MainData.PxW && 
                    Button_y < MainData.DiffY+(WinList.Window.PY+WObject.PY)*MainData.PxH+WObject.Height*MainData.PxH){
                   
                    if(!MainData.WindowMove){

                        for (var u = 0; u < WindowDrawList.length; u++) {
                        
                            var WObject_2 = WindowList[WindowDrawList[u]].WindowObjects[0];
        
                            if(y != u &&
                            Button_x > MainData.DiffX+(WindowList[WindowDrawList[u]].Window.PX+WObject_2.PX)*MainData.PxW && 
                            Button_y > MainData.DiffY+(WindowList[WindowDrawList[u]].Window.PY+WObject_2.PY)*MainData.PxH && 
                            Button_x < MainData.DiffX+(WindowList[WindowDrawList[u]].Window.PX+WObject_2.PX)*MainData.PxW+WObject_2.Width*MainData.PxW && 
                            Button_y < MainData.DiffY+(WindowList[WindowDrawList[u]].Window.PY+WObject_2.PY)*MainData.PxH+WObject_2.Height*MainData.PxH){
                                
                                Check3 = false;
    
                                if(y > u) Check3 = true;
    
                            }
    
                        }

                    } else Check3 = false;

                    Check = true;
                    
                    if(Check3) MainData.OnWindowNum = WindowDrawList[y];

                    if(WObject.Type && Check3){
                    
                        Check2 = true;

                        if(WObject.BAnim) WObject.AnX = 1; 
                        
                        MainData.CurrentButton = {

                            "Name": "Window",
                            "Object": WObject,
                            "Num": x
        
                        };
                        
                    }

                } 
               
            }

            if(MainData.CurrentButton != null)
            if(!Check2 && MainData.CurrentButton.Name == "Window")
            MainData.CurrentButton = null;
    
        } 
        
        if(Check) MainData.OnWindow = true; 
        else { MainData.OnWindow = false;}
       
	}

	function ButtonHBDesktop(Button_x,Button_y){
        
		for(var y = 0; y < Desktop.Objects.length; y++){
		
			var MObject = Desktop.Objects[y];
            	
            if(MainData.Desktop && Button_x > MainData.DiffX+MObject.PX*MainData.PxW && Button_y > MainData.DiffY+MObject.PY*MainData.PxH && Button_x < MainData.DiffX+MObject.PX*MainData.PxW+MObject.Width*MainData.PxW && Button_y < MainData.DiffY+MObject.PY*MainData.PxH+MObject.Height*MainData.PxH){
					
                if(!MainData.WindowMove && Desktop.Objects[y].Type && !MainData.OnWindow){
                   
					MainData.CurrentButton = {

                        "Name": "Desktop",
                        "Object": MObject,
						"Num": y

					};
					
                    if(MObject.BAnim) MObject.AnX = 1;
                
                } 	
                 
			}

		}
	
	}

	function ButtonHBInterfejsPC(Button_x,Button_y){
        
        var Check = false;

        MainData.OnInter = false;

        for(var y = 0; y < InterfejsData[MainData.InterNum].length; y++) {

            var MObject = InterfejsData[MainData.InterNum][y];

            if (Button_x > MainData.DiffX+MObject.PX * MainData.PxW && MainData.Interfejs && 
                Button_y > MainData.DiffY+MObject.PY * MainData.PxH && 
                Button_x < MainData.DiffX+MObject.PX * MainData.PxW + MObject.Width * MainData.PxW && 
                Button_y < MainData.DiffY+MObject.PY * MainData.PxH + MObject.Height * MainData.PxH) {
                
                MainData.OnInter = true;
                
                if(!MainData.WindowMove && MObject.Type && MObject.Unlock){

                    Check = true;

                    MainData.CurrentButton = {

                        "Name": "Inter",
                        "Object": MObject,
                        "Num": y,
    
                    };
    
                    if (MObject.BAnim) if(MObject.AnX != 2) MObject.AnX = 1;
                
                }

            } else  if(MObject.Unlock && MObject.BAnim) MObject.AnX = 0;

        }

        if(MainData.CurrentButton != null)
        if(!Check && MainData.CurrentButton.Name == "Inter")
        MainData.CurrentButton = null;

	}

	//-----------------------------------------------------------
	
	window.addEventListener("load", function(){ 
	
		PixelRatio();	
        TextSet();

		if(localStorage.getItem('CFSD_StartGame'))
		LoadData(); else StartEvent();

        Desktop.AnimList = AnimationStarter(Desktop,Desktop.Objects);
        
        TimeInter.UpdateScreen = setTimeout(UpdateScreen,MainData.Frame);
        
        window.addEventListener('blur', onPause);
        window.addEventListener('focus', onResume);

		if(navigator.userAgent.match(/mobile/i) || navigator.userAgent.match(/iPad|Android|Touch/i)){

            MainData.Mobile = true;

            document.body.addEventListener('touchmove', function(e){
            
                e.preventDefault();
                
                if(!MainData.DoubleAlarm){
        
                    MainData.TouchX = e.changedTouches[0].pageX* pixelRatio;
                    MainData.TouchY = e.changedTouches[0].pageY* pixelRatio;
                   
                    if(!(MainData.DiffY+MainData.PointZeroY-(10* MainData.PxH) < MainData.TouchY && MainData.DiffY+MainData.PointZeroY+(10* MainData.PxH) > MainData.TouchY)
                    || !(MainData.DiffX+MainData.PointZeroX-(10* MainData.PxW) < MainData.TouchX && MainData.DiffX+MainData.PointZeroX+(10* MainData.PxW) > MainData.TouchX))
                    ButtonClean();
     
                }	
        
            }, {passive:false})

            document.body.addEventListener('touchstart', function(e){

                if(MainData.TouchX == 0 && MainData.TouchY == 0){
        
                    MainData.TouchX = e.changedTouches[0].pageX* pixelRatio;
                    MainData.TouchY = e.changedTouches[0].pageY* pixelRatio;
                
                    MainData.PointZeroY = MainData.TouchY;
                    MainData.PointZeroX = MainData.TouchX;
                
                    if(MainData.Interfejs) ButtonHBInterfejsPC(MainData.TouchX,MainData.TouchY);
        
                    if(WindowDrawList.length) ButtonHBWindowPC(MainData.TouchX,MainData.TouchY); else MainData.OnWindow = false;
                    
                    if(MainData.Desktop) ButtonHBDesktop(MainData.TouchX,MainData.TouchY);
        
                    if(MainData.OnWindow){
                            
                        var ActWin = WindowDrawList[WindowDrawList.length-1];
                   
                        if(WindowList[ActWin].Window.Name == "W0"){
                          
                            if( (WindowList[ActWin].Window.PX + DefenseData.Rect.PX)*MainData.PxW + MainData.DiffX < MainData.TouchX &&
                                (WindowList[ActWin].Window.PY + DefenseData.Rect.PY)*MainData.PxH + MainData.DiffY < MainData.TouchY && 
                                (WindowList[ActWin].Window.PX + DefenseData.Rect.Width+DefenseData.Rect.PX)*MainData.PxW + MainData.DiffX > MainData.TouchX &&
                                (WindowList[ActWin].Window.PY + DefenseData.Rect.Height+DefenseData.Rect.PY)*MainData.PxH + MainData.DiffY > MainData.TouchY ){
        
                                const bounds = canvas.getBoundingClientRect();
                                var mouse_x = e.changedTouches[0].pageX* pixelRatio - bounds.left - scrollX;
                                    mouse_y = e.changedTouches[0].pageY* pixelRatio - bounds.top - scrollY,
        
                                    center_x = (WindowList[ActWin].Window.PX + DefenseData.Tower.PX )* MainData.PxW + MainData.DiffX,
                                    center_y = (WindowList[ActWin].Window.PY + DefenseData.Tower.PY )* MainData.PxH + MainData.DiffY,
        
                                    radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
                                
                                    DefenseData.Tower.Route = radians * -1;
                                    
                                    SpawnShot(radians* -1,mouse_x,mouse_y,center_x,center_y);
                            
        
                            }
                        
                        }
                        
                    }
                } else MainData.DoubleAlarm = true;
        
            }, false)

            document.body.addEventListener('touchend', function(e){
        
                if(!MainData.DoubleAlarm){
        
                    if(MainData.CurrentButton != null && MainData.ButtonWork) 
                    ButtonScripts(MainData.CurrentButton);	
        
                    MainData.TouchX = 0;
                    MainData.TouchY = 0;
        
                    ButtonClean();
        
                } else MainData.DoubleAlarm = false;
        
            }, false)

        } else {

            MainData.Mobile = false;

            document.body.addEventListener('mousemove', function(e){
              
                for (var x = 0; x < WindowDrawList.length; x++)  
                if(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Name == "W0"){
                        
                    var ActWin = WindowDrawList[WindowDrawList.length-1];
            
                    const bounds = canvas.getBoundingClientRect();
                    var mouse_x = e.clientX* pixelRatio - bounds.left - scrollX;
                        mouse_y = e.clientY* pixelRatio - bounds.top - scrollY,
    
                        center_x = (WindowList[ActWin].Window.PX + DefenseData.Tower.PX )* MainData.PxW + MainData.DiffX,
                        center_y = (WindowList[ActWin].Window.PY + DefenseData.Tower.PY )* MainData.PxH + MainData.DiffY,
    
                        radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
                    
                        if( (radians * -1 > 1.50 && radians * -1 >= 0) || 
                            (radians * -1 < -1.50 && radians * -1 < 0))
                        DefenseData.Tower.Route = radians * -1;
    
                        AddData.mouse_x = mouse_x;
                        AddData.mouse_y = mouse_y;
                        AddData.center_x = center_x;
                        AddData.center_y = center_y;
                        
                }
    
            }, false)
           
            document.body.addEventListener('mouseup', function(e){
        
                window.onmousemove = false;
        
                if(!MainData.DoubleAlarm){
        
                    if(MainData.CurrentButton != null && MainData.ButtonWork) 
                    ButtonScripts(MainData.CurrentButton);	
        
                    MainData.TouchX = 0;
                    MainData.TouchY = 0;
        
                    ButtonClean();
        
                } else MainData.DoubleAlarm = false;
        
            }, false)
        
            document.body.addEventListener('mousedown', function(e){

                if(MainData.TouchX == 0 && MainData.TouchY == 0){
        
                    MainData.TouchX = e.clientX * pixelRatio;
                    MainData.TouchY = e.clientY * pixelRatio;
                
                    MainData.PointZeroY = MainData.TouchY;
                    MainData.PointZeroX = MainData.TouchX;
                
                    if(MainData.Interfejs) ButtonHBInterfejsPC(MainData.TouchX,MainData.TouchY);
        
                    if(WindowDrawList.length) ButtonHBWindowPC(MainData.TouchX,MainData.TouchY); else MainData.OnWindow = false;
                    
                    if(MainData.Desktop) ButtonHBDesktop(MainData.TouchX,MainData.TouchY);
        
                    if(MainData.OnWindow){
                            
                        var ActWin = WindowDrawList[WindowDrawList.length-1];
                   
                        if(WindowList[ActWin].Window.Name == "W0"){
                          
                            if( (WindowList[ActWin].Window.PX + DefenseData.Rect.PX)*MainData.PxW + MainData.DiffX < MainData.TouchX &&
                                (WindowList[ActWin].Window.PY + DefenseData.Rect.PY)*MainData.PxH + MainData.DiffY < MainData.TouchY && 
                                (WindowList[ActWin].Window.PX + DefenseData.Rect.Width+DefenseData.Rect.PX)*MainData.PxW + MainData.DiffX > MainData.TouchX &&
                                (WindowList[ActWin].Window.PY + DefenseData.Rect.Height+DefenseData.Rect.PY)*MainData.PxH + MainData.DiffY > MainData.TouchY ){
        
                                const bounds = canvas.getBoundingClientRect();
                                var mouse_x = e.clientX* pixelRatio - bounds.left - scrollX;
                                    mouse_y = e.clientY* pixelRatio - bounds.top - scrollY,
        
                                    center_x = (WindowList[ActWin].Window.PX + DefenseData.Tower.PX )* MainData.PxW + MainData.DiffX,
                                    center_y = (WindowList[ActWin].Window.PY + DefenseData.Tower.PY )* MainData.PxH + MainData.DiffY,
        
                                    radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
                                
                                    SpawnShot(radians* -1,mouse_x,mouse_y,center_x,center_y);
                            
        
                            }
                        
                        }
                        
                    }
        
                    window.onmousemove = function(e) {
                            
                       MouseMove(e);
        
                    }
        
                } else MainData.DoubleAlarm = true;
        
            }, false)
        
        }


	});
   
    window.addEventListener("resize", function (event) {

        clearTimeout(Resize);

        Resize = setTimeout(PixelRatio, 30); 

    });

    function MouseMove(e){

        if(!MainData.DoubleAlarm){
    
            MainData.TouchX = e.clientX * pixelRatio;
            MainData.TouchY = e.clientY * pixelRatio;
           
			if(!(MainData.PointZeroY-(30* MainData.PxH) < MainData.TouchY && MainData.PointZeroY+(30* MainData.PxH) > MainData.TouchY) || !(MainData.PointZeroX-(30* MainData.PxW) < MainData.TouchX && MainData.PointZeroX+(30* MainData.PxW) > MainData.TouchX))
			ButtonClean();

        }	

    }

    // Cordova Mobile Events

    function onPause() {
	
        ButtonClean();
		
		MainData.DoubleAlarm = false;
		MainData.ButtonWork = true;
		MainData.TouchX = 0;
		MainData.TouchY = 0;

		MainData.Alert = false;
		AlertList = [];
		MainData.AlertNum = 0;

		clearTimeout(TimeInter.UpdateScreen);
		
        if(WindowDrawList.length > 0 && WindowList[0].Window.Name == "W0"){

            clearTimeout(DefenseData.AddSworm);
            clearTimeout(DefenseData.TurretShotList);
            clearTimeout(DefenseData.SpecTurretShotList);
            clearInterval(DefenseData.Stats);
            clearInterval(DefenseData.ShotMove);
            clearInterval(DefenseData.SwormMove);
            clearInterval(DefenseData.AnimationsGame);
            clearInterval(DefenseData.AutoShot);
			  
        }
 		
    }

    function onResume() {
	
        clearTimeout(TimeInter.UpdateScreen);
        TimeInter.UpdateScreen = setTimeout(UpdateScreen,MainData.Frame);	

        if(WindowDrawList.length > 0 && WindowList[0].Window.Name == "W0"){

            clearTimeout(DefenseData.AddSworm);
            clearTimeout(DefenseData.TurretShotList);
            clearTimeout(DefenseData.SpecTurretShotList);
            clearInterval(DefenseData.Stats);
            clearInterval(DefenseData.ShotMove);
            clearInterval(DefenseData.SwormMove);
            clearInterval(DefenseData.AnimationsGame);
            clearInterval(DefenseData.AutoShot);
    
            DefenseData.AddSworm = setTimeout(AddSworm,Wave.SpeedSpawn);
            DefenseData.TurretShotList = setTimeout(TurretShot,Skills.Turrets_1_SPEED);
            DefenseData.SpecTurretShotList = setTimeout(SpecTurretShot,Skills.Turrets_2_SPEED);
            DefenseData.Stats = setInterval(Stats,1000);
            DefenseData.ShotMove = setInterval(ShotMove,DefenseData.Shot.SpeedMove);
            DefenseData.SwormMove = setInterval(SwormMove,DefenseData.Swarm.SpeedMove);
            DefenseData.AnimationsGame = setInterval(AnimationsGame,100);
            DefenseData.AutoShot = setInterval(AutoShot,400);
			
        }
	}
