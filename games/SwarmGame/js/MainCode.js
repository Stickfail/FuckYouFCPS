	
	var myStorage = localStorage;

	var windowWidth = window.innerWidth,
		windowHeight = window.innerHeight,
		pixelRatio = window.devicePixelRatio || 1;

	var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d");

		canvas.width = windowWidth * pixelRatio;
		canvas.height = windowHeight * pixelRatio;

		canvas.style.width = windowWidth + 'px';
		canvas.style.height = windowHeight + 'px';	
	
	function PixelRatio(){ 
	
		if(MainData.Orientation == "Landscape"){

			if(MainData.ScreenType == "Normal"){ // Full
			
				MainData.DiffY = 0;
				MainData.DiffX = 0;
		
				if(windowWidth != window.innerWidth || windowHeight != window.innerHeight){
		
					windowWidth = window.innerWidth;
					windowHeight = window.innerHeight;
			
					canvas.width = windowWidth * pixelRatio;
					canvas.height = windowHeight * pixelRatio;
			
					canvas.style.width = windowWidth + 'px';
					canvas.style.height = windowHeight + 'px';	
					
				}
		
				MainData.PxW = ((windowWidth * pixelRatio) / 1920);
				MainData.PxH = ((windowHeight * pixelRatio) / 1080);
		
				setTimeout(function(){
			
					if((windowWidth != window.innerWidth || windowHeight != window.innerHeight) && MainData.ScreenType == "Normal"){
		
						windowWidth = window.innerWidth;
		
						windowHeight = window.innerHeight;
				
						canvas.width = windowWidth * pixelRatio;
						canvas.height = windowHeight * pixelRatio;
				
						canvas.style.width = windowWidth + 'px';
						canvas.style.height = windowHeight + 'px';	
					
					MainData.PxW = ((windowWidth * pixelRatio) / 1920);
					MainData.PxH = ((windowHeight * pixelRatio) / 1080);
				
				}
		
				},200);
		
				setTimeout(function(){
			
					if((windowWidth != window.innerWidth || windowHeight != window.innerHeight) && MainData.ScreenType == "Normal"){
		
						windowWidth = window.innerWidth;
		
						windowHeight = window.innerHeight;
				
						canvas.width = windowWidth * pixelRatio;
						canvas.height = windowHeight * pixelRatio;
				
						canvas.style.width = windowWidth + 'px';
						canvas.style.height = windowHeight + 'px';	
						
					MainData.PxW = ((windowWidth * pixelRatio) / 1920);
					MainData.PxH = ((windowHeight * pixelRatio) / 1080);
				
				}
		
				},1000);
		
			} else { // 16:9
	
				windowWidth = window.innerWidth;
				windowHeight = window.innerHeight;
				pixelRatio = window.devicePixelRatio || 1;
		
				canvas.width = windowWidth * pixelRatio;
				canvas.height = windowHeight * pixelRatio;
		
				canvas.style.width = windowWidth + 'px';
				canvas.style.height = windowHeight + 'px';
		
				var Height = windowHeight* pixelRatio , Width = windowWidth* pixelRatio;
		
				if(Math.floor((windowHeight / (windowWidth + windowHeight)) * 100) > 36)
					for (;Math.floor((windowHeight / (windowWidth + windowHeight)) * 100) != 36;)
						windowHeight = Math.round(36 * ((windowWidth + windowHeight) / 100));
		
				if (Math.floor((windowWidth / (windowWidth + windowHeight)) * 100) > 64)
					for (;Math.floor((windowWidth / (windowWidth + windowHeight)) * 100) != 64;)
						windowWidth = Math.round(64 * ((windowWidth + windowHeight) / 100));
		
				MainData.PxW = ((windowWidth * pixelRatio) / 1920);
				MainData.PxH = ((windowHeight * pixelRatio) / 1080);
		
				MainData.DiffY = ((Height - windowHeight* pixelRatio)) / 2;
				MainData.DiffX = ((Width - windowWidth* pixelRatio)) / 2;
			
			}

		} else {

			if(MainData.ScreenType == "Normal"){ // Full
			
				MainData.DiffY = 0;
				MainData.DiffX = 0;
		
				if(windowWidth != window.innerWidth || windowHeight != window.innerHeight){
		
					windowWidth = window.innerWidth;
					windowHeight = window.innerHeight;
			
					canvas.width = windowWidth * pixelRatio;
					canvas.height = windowHeight * pixelRatio;
			
					canvas.style.width = windowWidth + 'px';
					canvas.style.height = windowHeight + 'px';	
					
				}
		
				MainData.PxW = ((windowWidth * pixelRatio) / 1080);
				MainData.PxH = ((windowHeight * pixelRatio) / 1920);
		
				setTimeout(function(){
			
					if((windowWidth != window.innerWidth || windowHeight != window.innerHeight) && MainData.ScreenType == "Normal"){
		
						windowWidth = window.innerWidth;
		
						windowHeight = window.innerHeight;
				
						canvas.width = windowWidth * pixelRatio;
						canvas.height = windowHeight * pixelRatio;
				
						canvas.style.width = windowWidth + 'px';
						canvas.style.height = windowHeight + 'px';	
					
					MainData.PxW = ((windowWidth * pixelRatio) / 1080);
					MainData.PxH = ((windowHeight * pixelRatio) / 1920);
				
				}
		
				},200);
		
				setTimeout(function(){
			
					if((windowWidth != window.innerWidth || windowHeight != window.innerHeight) && MainData.ScreenType == "Normal"){
		
						windowWidth = window.innerWidth;
		
						windowHeight = window.innerHeight;
				
						canvas.width = windowWidth * pixelRatio;
						canvas.height = windowHeight * pixelRatio;
				
						canvas.style.width = windowWidth + 'px';
						canvas.style.height = windowHeight + 'px';	
						
						MainData.PxW = ((windowWidth * pixelRatio) / 1080);
						MainData.PxH = ((windowHeight * pixelRatio) / 1920);
					
				}
		
				},1000);
		
			} else { // 16:9
	
				windowWidth = window.innerWidth;
				windowHeight = window.innerHeight;
				pixelRatio = window.devicePixelRatio || 1;
		
				canvas.width = windowWidth * pixelRatio;
				canvas.height = windowHeight * pixelRatio;
		
				canvas.style.width = windowWidth + 'px';
				canvas.style.height = windowHeight + 'px';
		
				var Height = windowHeight* pixelRatio , Width = windowWidth* pixelRatio;
		
				if(Math.floor((windowHeight / (windowWidth + windowHeight)) * 100) > 64)
					for (;Math.floor((windowHeight / (windowWidth + windowHeight)) * 100) != 64;)
						windowHeight = Math.round(64 * ((windowWidth + windowHeight) / 100));
		
				if (Math.floor((windowWidth / (windowWidth + windowHeight)) * 100) > 36)
					for (;Math.floor((windowWidth / (windowWidth + windowHeight)) * 100) != 36;)
						windowWidth = Math.round(36 * ((windowWidth + windowHeight) / 100));
		
				MainData.PxW = ((windowWidth * pixelRatio) / 1080);
				MainData.PxH = ((windowHeight * pixelRatio) / 1920);
					
				MainData.DiffY = ((Height - windowHeight* pixelRatio)) / 2;
				MainData.DiffX = ((Width - windowWidth* pixelRatio)) / 2;
			
			}

		}

	}

	function TextSet(){

		for (var x = 0; x < TextData.length; x++) {
			
			TextData[x].Width = TextData[x].TW*TextData[x].Size;
			TextData[x].Height = TextData[x].TH*TextData[x].Size;
			
		}

		for (var x = 0; x < Desktop.Objects.length; x++) 
		if(Desktop.Objects[x].Text){ 

			MiddleText(Desktop.Objects[x].Text,Desktop.Objects[x]);
			ListText(Desktop.Objects[x].Text);

		}
		
		for (var x = 0; x < Window.length; x++) {
		
			for (var y = 0; y < Window[x].ObjectNumber; y++)
			if(Window[x].ID[y]){ 

				MiddleText(Window[x].ID[y],WindowObjects[Window[x].WindowType][y]);
				ListText(Window[x].ID[y]);
				
			}
			
			if(Window[x].List)
			for (var y = 0; y < Window[x].List.Objects.length; y++)
			if(Window[x].List.Objects[y].Text){ 

				MiddleText(Window[x].List.Objects[y].Text,Window[x].List); 
				ListText(Window[x].List.Objects[y].Text);

			}

		}
		
		for (var y = 0; y < InterfejsData.length; y++) 
		for (var x = 0; x < InterfejsData[y].length; x++) 
		if(InterfejsData[y][x].Text){ 

			MiddleText(InterfejsData[y][x].Text,InterfejsData[y][x]); 
			ListText(InterfejsData[y][x].Text);

		}

	}

	function MiddleText(TextDataM,Obj){
	
		for (var y = 0; y < TextDataM.Num; y++) {
				
			for (var z = 0; z < MainData.LanNumber; z++) {

				if(TextDataM[y].Data[z].Middle) {

					var Width = 0, TN = String(Text[z][TextDataM[y].Text]),
						TxtData = TextDataM[y].Data[z],Texttype = TextData[TxtData.TData];
		
					for(var w = 0; w < TN.length; w++){
		
						if(TN[w] != "@"){
							
							var funkcja_XY = TextNumber(TN[w],Texttype.TW,Texttype.TH,Texttype.Size);
							Width += Texttype.Width*funkcja_XY[2];
							
						} else w = TN.length; 

					}

					TextDataM[y].Data[z].PX = (Obj.Width/2)-(Width/2);

				}
			
			}
			
		}

	}

	function ListText(TextDataM){
		
		for (var y = 0; y < TextDataM.Num; y++) {
			
			for (var z = 0; z < MainData.LanNumber; z++) {

				TextDataM[y].Data[z].List = [];

				var Width = 0, TN = String(Text[z][TextDataM[y].Text]), Pass = 0,
					TxtData = TextDataM[y].Data[z],Texttype = TextData[TxtData.TData];
	
				for(var w = 0; w < TN.length; w++){
	
					if(TN[w] != "@"){
						
						var funkcja_XY = TextFile[Texttype.File].Fun(TN[w],Texttype.Size);

						TextDataM[y].Data[z].List.push({
							
							"File": funkcja_XY[0],
							"X": Width,
							"Y": Pass+funkcja_XY[2]

						});

						Width += Texttype.Width*funkcja_XY[1];
						
					} else {

						Pass += Texttype.Height+TxtData.Enter;
						Width = 0;
	
					}
				}

			}
			
		}

	}

	// -----------------------------------------------------------------------------

	function InfoWindow(Val){
		
		console.log("Nowa Wersja");

		//MainData.HelpValue.P0 = Val; // Poprzednia wersja numer

		//MainData.Window = true;	
		//WindowDrawList[WindowDrawList.length-1] = "W0";
		//if(Window[WindowDrawList[WindowDrawList.length-1]].Animation) AnimationStarterWindow(WindowDrawList[WindowDrawList.length-1]);
	
	}

	function LoadData(){
		
		if(MainData.AppVersion > Number(localStorage.getItem('CFSD_AppVersion'))) InfoWindow(Number(localStorage.getItem('CFSD_AppVersion')));
		
		localStorage.setItem('CFSD_AppVersion',MainData.AppVersion);
		
		// Ustawienia

		MainData.Language = Number(localStorage.getItem('CFSD_Language'));
		MainData.ScreenType = localStorage.getItem('CFSD_ScreenType');
		MainData.Frame = Number(localStorage.getItem('CFSD_Frame'));

		PixelRatio();

		if(MainData.ScreenType == "Normal")
		SpecText.S0 = "FULL"; else SpecText.S0 = "16:9";

		if(MainData.Frame == 34)
		SpecText.S1 = 30; else SpecText.S1 = 60;

		AddData.SwarmKill = Number(localStorage.getItem('CFSD_SwarmKill'));
		AddData.Money = Number(localStorage.getItem('CFSD_Money'));
		
		if(localStorage.getItem('CFSD_FinishGame') == "true")
		AddData.FinishGame = true; else AddData.FinishGame = false;

		AddData.FinishCounter = Number(localStorage.getItem('CFSD_FinishCounter'));

		if(AddData.FinishCounter > 0){

			for (var z = 0; z < MainData.LanNumber; z++)
			Text[z].N0 = Text[z].N1; 

			Desktop.Objects[3].TMY = 0;

			for (var x = 0; x < Desktop.Objects.length; x++) 
			if(Desktop.Objects[x].Text){ 
	
				MiddleText(Desktop.Objects[x].Text,Desktop.Objects[x]);
				ListText(Desktop.Objects[x].Text);
	
			}

		}
		
		AddData.Hour = Number(localStorage.getItem('CFSD_Hour'));
		AddData.Minute = Number(localStorage.getItem('CFSD_Minute'));
		AddData.Sec = Number(localStorage.getItem('CFSD_Sec'));

		SpecText.N3 = fnum(AddData.Money);

		Skills.MaxFortLive = Number(localStorage.getItem('CFSD_MaxFortLive'));
		Skills.Turrets_1_Unlock = Number(localStorage.getItem('CFSD_Turrets_1_Unlock'));
		Skills.Turrets_2_Unlock = Number(localStorage.getItem('CFSD_Turrets_2_Unlock'));
		
		Skills.Turrets_0_Circle = Number(localStorage.getItem('CFSD_Turrets_0_Circle'));
		Skills.Turrets_1_SPEED = Number(localStorage.getItem('CFSD_Turrets_1_SPEED'));
		Skills.Turrets_2_SPEED = Number(localStorage.getItem('CFSD_Turrets_2_SPEED'));
		
		Skills.Turrets_0_Level = Number(localStorage.getItem('CFSD_Turrets_0_Level'));
		Skills.Turrets_1_Level = Number(localStorage.getItem('CFSD_Turrets_1_Level'));
		Skills.Turrets_2_Level = Number(localStorage.getItem('CFSD_Turrets_2_Level'));
		Skills.Fort_Level = Number(localStorage.getItem('CFSD_Fort_Level'));
		
		if(Skills.Turrets_1_Unlock > 0){

			WindowObjects[0][8].TMY = 0;
			   
			SpecText.P1 = fnum(Shop.Turret_1_Speed[Skills.Turrets_1_Level]);

		}

		SpecText.T0 = fnum(Shop.Turret_1[Skills.Turrets_1_Unlock]);

		if(Shop.Turret_1.Max == Skills.Turrets_1_Unlock){

			WindowObjects[1][2].TMY = WindowObjects[1][2].Height;
			SpecText.T0 = "";

		} 

		if(Skills.Turrets_2_Unlock > 0){

			WindowObjects[0][9].TMY = 0;

			SpecText.P2 = fnum(Shop.Turret_2_Speed[Skills.Turrets_2_Level]);

		}

		SpecText.T1 = fnum(Shop.Turret_2[Skills.Turrets_2_Unlock]);
				
		if(Shop.Turret_2.Max == Skills.Turrets_2_Unlock){

			WindowObjects[1][3].TMY = WindowObjects[1][3].Height;
			SpecText.T1 = "";

		}

		if(Shop.Boom.Max != Skills.Turrets_0_Level)
		SpecText.P0 = fnum(Shop.Boom[Skills.Turrets_0_Level]);
		else {
			
			SpecText.P0 = "MAX";
			WindowObjects[0][7].TMY = WindowObjects[0][7].Height;
	
		}

		if(Shop.Turret_1_Speed.Max != Skills.Turrets_1_Level)
		SpecText.P1 = fnum(Shop.Turret_1_Speed[Skills.Turrets_1_Level]);
		else {
			
			SpecText.P1 = "MAX";
			WindowObjects[0][8].TMY = WindowObjects[0][8].Height;
	
		}

		if(Shop.Turret_2_Speed.Max != Skills.Turrets_2_Level)
		SpecText.P2 = fnum(Shop.Turret_2_Speed[Skills.Turrets_2_Level]);
		else {
			
			SpecText.P2 = "MAX";
			WindowObjects[0][9].TMY = WindowObjects[0][9].Height;
	
		}

		if(Shop.Fort.Max != Skills.Fort_Level)
		SpecText.P3 = fnum(Shop.Fort[Skills.Fort_Level]);
		else {
			
			SpecText.P3 = "MAX";
			WindowObjects[0][10].TMY = WindowObjects[0][10].Height;
	
		}		

		Skills.FortLive = Skills.MaxFortLive;

		SpecText.N1 = Skills.FortLive;
		
		for (var z = 0; z < MainData.LanNumber; z++) {
		
			Text[z].S1 = AddData.Hour+":"+TimeSM(AddData.Minute*60+AddData.Sec);
			Text[z].S2 = AddData.SwarmKill;
			Text[z].S3 = AddData.FinishCounter;

		}
		
		for (var x = 0; x < Desktop.Objects.length; x++) 
		if(Desktop.Objects[x].Text){ 

			MiddleText(Desktop.Objects[x].Text,Desktop.Objects[x]);
			ListText(Desktop.Objects[x].Text);

		}

		Wave.Wave = Number(localStorage.getItem('CFSD_Wave'));
		Wave.WavesLive = Number(localStorage.getItem('CFSD_WavesLive'));
		Wave.Waves = Number(localStorage.getItem('CFSD_Waves'));
		Wave.Spawn = Number(localStorage.getItem('CFSD_Spawn'));
		Wave.SpeedSpawn = Number(localStorage.getItem('CFSD_SpeedSpawn'));
		Wave.SwarmSpeed = Number(localStorage.getItem('CFSD_SwarmSpeed'));

		AddData.WaveLive = Wave.WavesLive;
		AddData.Waves = Wave.Waves;

		SpecText.N4 = AddData.WaveLive;

		AddData.RecHour = Number(localStorage.getItem('CFSD_RecHour'));
		AddData.RecMinute = Number(localStorage.getItem('CFSD_RecMinute'));
		AddData.RecSec = Number(localStorage.getItem('CFSD_RecSec'));

		for (var z = 0; z < MainData.LanNumber; z++) 
		Text[z].S0 = AddData.RecHour+":"+TimeSM(AddData.RecMinute*60+AddData.RecSec);
	
		for (var x = 0; x < Desktop.Objects.length; x++) 
		if(Desktop.Objects[x].Text){ 

			MiddleText(Desktop.Objects[x].Text,Desktop.Objects[x]);
			ListText(Desktop.Objects[x].Text);

		}

	}
	
	function StartEvent(){
	
		setTimeout(function(){
	
			localStorage.setItem('CFSD_StartGame',true);
			localStorage.setItem('CFSD_AppVersion',MainData.AppVersion);
	
			SaveData();
			SaveSettings();

		},5000);
		
	}

	// -----------------------------------------------------------------------------
		
	function SaveData(){
		
		localStorage.setItem('CFSD_SwarmKill', AddData.SwarmKill);
		localStorage.setItem('CFSD_Money', AddData.Money);
		localStorage.setItem('CFSD_FinishGame', AddData.FinishGame);
		
		localStorage.setItem('CFSD_Hour', AddData.Hour);
		localStorage.setItem('CFSD_Minute', AddData.Minute);
		localStorage.setItem('CFSD_Sec', AddData.Sec);
		
		localStorage.setItem('CFSD_MaxFortLive', Skills.MaxFortLive);
		localStorage.setItem('CFSD_Turrets_1_Unlock', Skills.Turrets_1_Unlock);
		localStorage.setItem('CFSD_Turrets_2_Unlock', Skills.Turrets_2_Unlock);
		
		localStorage.setItem('CFSD_Turrets_0_Circle', Skills.Turrets_0_Circle);
		localStorage.setItem('CFSD_Turrets_1_SPEED', Skills.Turrets_1_SPEED);
		localStorage.setItem('CFSD_Turrets_2_SPEED', Skills.Turrets_2_SPEED);
		
		localStorage.setItem('CFSD_Turrets_0_Level', Skills.Turrets_0_Level);
		localStorage.setItem('CFSD_Turrets_1_Level', Skills.Turrets_1_Level);
		localStorage.setItem('CFSD_Turrets_2_Level', Skills.Turrets_2_Level);
		localStorage.setItem('CFSD_Fort_Level', Skills.Fort_Level);
		
		localStorage.setItem('CFSD_Wave', Wave.Wave);
		localStorage.setItem('CFSD_WavesLive', Wave.WavesLive);
		localStorage.setItem('CFSD_Waves', Wave.Waves);
		localStorage.setItem('CFSD_Spawn', Wave.Spawn);
		localStorage.setItem('CFSD_SpeedSpawn', Wave.SpeedSpawn);
		localStorage.setItem('CFSD_SwarmSpeed', Wave.SwarmSpeed);

	}

	function SaveSettings(){
		
		localStorage.setItem('CFSD_Language', MainData.Language);
		localStorage.setItem('CFSD_ScreenType', MainData.ScreenType);
		localStorage.setItem('CFSD_Frame', MainData.Frame);

	}

	function FinishData(){
		
		if(((AddData.RecHour*360)+(AddData.RecMinute*60)+AddData.RecSec) == 0 ||
		((AddData.RecHour*360)+(AddData.RecMinute*60)+AddData.RecSec) >= ((AddData.Hour*360)+(AddData.Minute*60)+AddData.Sec)){
			
			AddData.RecHour = AddData.Hour;
			AddData.RecMinute = AddData.Minute;
			AddData.RecSec = AddData.Sec;
			
		}

		localStorage.setItem('CFSD_RecHour', AddData.RecHour);
		localStorage.setItem('CFSD_RecMinute', AddData.RecMinute);
		localStorage.setItem('CFSD_RecSec', AddData.RecSec);
		localStorage.setItem('CFSD_FinishCounter', AddData.FinishCounter);

		AddWindow(4);

	}

	// -----------------------------------------------------------------------------

	function ButtonScripts(Data){
		
		//console.log(Data);

		if(Data.Name == "Window") {

			if(Data.Object.Type == "WindowOpen") AddWindow(Data.Object.Href);
			else if(Data.Object.Type == "ChangeWindow") { 
				
				var ActWin = WindowDrawList[WindowDrawList.length-1];

				if(WindowList[ActWin].Window.Fullscreen){
				
					if(WindowDrawList.length > 1){

						if(!WindowList[WindowDrawList[WindowDrawList.length-2]].Window.Fullscreen){

							MainData.Desktop = true;
							MainData.Interfejs = true;
		
						}

					} else {

						MainData.Desktop = true;
						MainData.Interfejs = true;
	
					}

				}

				if(WindowList[ActWin].Window.Animations)
				for(var y = 0; y < WindowList[ActWin].Window.Animations.AnimationsNum; y++)	
				clearInterval(WindowList[ActWin].AnimList[y]);

                var NewList = [];

                for (var x = 0; x < WindowDrawList.length-1; x++) 
                NewList.push(WindowDrawList[x]);
				
				WindowDrawList = NewList;
				
				var PXY = [WindowList[ActWin].Window.PX,WindowList[ActWin].Window.PY];

				WindowList[ActWin] = null;
				
				AddWindow(Data.Object.Href,PXY);
        	
				if(WindowDrawList.length) 
				ButtonHBWindowPC(MainData.TouchX,MainData.TouchY); else MainData.OnWindow = false;
		
			} else if(Data.Object.Type == "ScreenSettings") {

				if(MainData.ScreenType == "Normal")
				MainData.ScreenType = "Line"; else MainData.ScreenType = "Normal";
				
				if(MainData.ScreenType == "Normal")
				SpecText.S0 = "FULL"; else SpecText.S0 = "16:9";

				PixelRatio();
				
				SaveSettings();

			} else if(Data.Object.Type == "Frame"){ 
				
				if(MainData.Frame == 34)
				MainData.Frame = 16; else MainData.Frame = 34;
				
				if(MainData.Frame == 34)
				SpecText.S1 = 30; else SpecText.S1 = 60;
				
				SaveSettings();
				
			} else if(Data.Object.Type == "LanguageChange"){ 
			
				MainData.Language++;
				
				if(MainData.Language == MainData.LanNumber)
				MainData.Language = 0;
			
				SaveSettings();

			} else if(Data.Object.Type == "Exit") { 
				
				var ActWin = WindowDrawList[WindowDrawList.length-1];

				WindowList[ActWin].Window.Scale = 0.9;
				WindowList[ActWin].Window.ScaleSim = 2;

				WindowList[ActWin].Window.Xmove = -50;
				WindowList[ActWin].Window.Ymove = -50;

				WindowList[ActWin].Window.SPX = 0;
				WindowList[ActWin].Window.SPY = 0;

				setTimeout(CloseWindow,30);

			}
		
			if(Data.Object.Type == "Turret_1"){
				
				if(Shop.Turret_1.Max != Skills.Turrets_1_Unlock)
				if(AddData.Money >= Shop.Turret_1[Skills.Turrets_1_Unlock]){
					
					if(Skills.Turrets_1_Unlock == 0){

						WindowObjects[0][8].TMY = 0;
						WindowList[0].WindowObjects[8].TMY = 0;
						   
						SpecText.P1 = fnum(Shop.Turret_1_Speed[Skills.Turrets_1_Level]);

					}

					AddData.Money -= Shop.Turret_1[Skills.Turrets_1_Unlock];
					Skills.Turrets_1_Unlock++;

					SpecText.N3 = fnum(AddData.Money);
					SpecText.T0 = fnum(Shop.Turret_1[Skills.Turrets_1_Unlock]);

					
					if(Shop.Turret_1.Max == Skills.Turrets_1_Unlock){

						WindowObjects[1][2].TMY = WindowObjects[1][2].Height;
						SpecText.T0 = "";

						var ActWin = WindowDrawList[WindowDrawList.length-1];
           
						WindowList[ActWin].WindowObjects[2].TMY = WindowList[ActWin].WindowObjects[2].Height;

					} 

				}


			} else if(Data.Object.Type == "Turret_2"){

				if(Shop.Turret_2.Max != Skills.Turrets_2_Unlock)
				if(AddData.Money >= Shop.Turret_2[Skills.Turrets_2_Unlock]){
					
					if(Skills.Turrets_2_Unlock == 0){

						WindowObjects[0][9].TMY = 0;
           				WindowList[0].WindowObjects[9].TMY = 0;

						SpecText.P2 = fnum(Shop.Turret_2_Speed[Skills.Turrets_2_Level]);

					}

					AddData.Money -= Shop.Turret_2[Skills.Turrets_2_Unlock];
					Skills.Turrets_2_Unlock++;

					SpecText.N3 = fnum(AddData.Money);
					SpecText.T1 = fnum(Shop.Turret_2[Skills.Turrets_2_Unlock]);
				
					if(Shop.Turret_2.Max == Skills.Turrets_2_Unlock){

						WindowObjects[1][3].TMY = WindowObjects[1][3].Height;
						SpecText.T1 = "";

						var ActWin = WindowDrawList[WindowDrawList.length-1];
           
						WindowList[ActWin].WindowObjects[3].TMY = WindowList[ActWin].WindowObjects[3].Height;

					}

				}

			}

			if(Data.Object.Type == "SpeedT1"){
				
				if(Skills.Turrets_1_Unlock > 0)
				if(Shop.Turret_1_Speed.Max != Skills.Turrets_1_Level)
				if(AddData.Money >= Shop.Turret_1_Speed[Skills.Turrets_1_Level]){
					
					Skills.Turrets_1_SPEED -= Skills.Turrets_1_SPEED_I;
					AddData.Money -= Shop.Turret_1_Speed[Skills.Turrets_1_Level];
					Skills.Turrets_1_Level++;
					
					if(Shop.Turret_1_Speed.Max != Skills.Turrets_1_Level)
					SpecText.P1 = fnum(Shop.Turret_1_Speed[Skills.Turrets_1_Level]);
					else {
						
						SpecText.P1 = "MAX";
						WindowObjects[0][8].TMY = WindowObjects[0][8].Height;
           				WindowList[0].WindowObjects[8].TMY = WindowObjects[0][8].Height;
				
					}

					SpecText.N3 = fnum(AddData.Money);
				}

			} else if(Data.Object.Type == "SpeedT2"){
				
				if(Skills.Turrets_2_Unlock > 0)
				if(Shop.Turret_2_Speed.Max != Skills.Turrets_2_Level)
				if(AddData.Money >= Shop.Turret_2_Speed[Skills.Turrets_2_Level]){
					
					Skills.Turrets_2_SPEED -= Skills.Turrets_2_SPEED_I;
					AddData.Money -= Shop.Turret_2_Speed[Skills.Turrets_2_Level];
					Skills.Turrets_2_Level++;

					if(Shop.Turret_2_Speed.Max != Skills.Turrets_2_Level)
					SpecText.P2 = fnum(Shop.Turret_2_Speed[Skills.Turrets_2_Level]);
					else {
						
						SpecText.P2 = "MAX";
						WindowObjects[0][9].TMY = WindowObjects[0][9].Height;
           				WindowList[0].WindowObjects[9].TMY = WindowObjects[0][9].Height;
				
					}

					SpecText.N3 = fnum(AddData.Money);
				}

			} 

			if(Data.Object.Type == "Boom"){
				
				if(Shop.Boom.Max != Skills.Turrets_0_Level)
				if(AddData.Money >= Shop.Boom[Skills.Turrets_0_Level]){
					
					Skills.Turrets_0_Circle += Skills.Turrets_0_Circle_I;
					AddData.Money -= Shop.Boom[Skills.Turrets_0_Level];
					Skills.Turrets_0_Level++;

					if(Shop.Boom.Max != Skills.Turrets_0_Level)
					SpecText.P0 = fnum(Shop.Boom[Skills.Turrets_0_Level]);
					else {
						
						SpecText.P0 = "MAX";
						WindowObjects[0][7].TMY = WindowObjects[0][7].Height;
           				WindowList[0].WindowObjects[7].TMY = WindowObjects[0][7].Height;
				
					}

					SpecText.N3 = fnum(AddData.Money);
				}

			} else if(Data.Object.Type == "Live"){
				
				if(Shop.Fort.Max != Skills.Fort_Level)
				if(AddData.Money >= Shop.Fort[Skills.Fort_Level]){
					
					Skills.MaxFortLive += Skills.FortIncrease;
					AddData.Money -= Shop.Fort[Skills.Fort_Level];
					Skills.Fort_Level++;

					if(Shop.Fort.Max != Skills.Fort_Level)
					SpecText.P3 = fnum(Shop.Fort[Skills.Fort_Level]);
					else {
						
						SpecText.P3 = "MAX";
						WindowObjects[0][10].TMY = WindowObjects[0][10].Height;
           				WindowList[0].WindowObjects[10].TMY = WindowObjects[0][10].Height;
				
					}

					SpecText.N3 = fnum(AddData.Money);
				}

			} 

			if(Data.Object.Type == "Reset"){

				Skills.FortLive = 10;
				Skills.MaxFortLive = 10;
				Skills.FortIncrease = 5;

				Skills.Turrets_1_Unlock = 0;
				Skills.Turrets_2_Unlock = 0;

				Skills.Turrets_0_Circle = 100;
				Skills.Turrets_1_SPEED = 200;
				Skills.Turrets_2_SPEED = 3000;

				Skills.Turrets_0_Circle_I = 10;
				Skills.Turrets_1_SPEED_I = 5;
				Skills.Turrets_2_SPEED_I = 100;

				Skills.Turrets_0_Level = 0;
				Skills.Turrets_1_Level = 0;
				Skills.Turrets_2_Level = 0;
				Skills.Fort_Level = 0;

				Wave.Wave = 1;
				
				Wave.WavesLive = 10;
				Wave.Waves = 1;
				Wave.Spawn = 10;
				Wave.SpawnIncrease = 10;

				Wave.SpeedSpawn = 2000;
				Wave.SpeedSpawnIncrease = 20;

				Wave.SwarmSpeed = 2;

				SaveData();
				
				AddData.Money = 0;

				AddData.Waves = 1;
				AddData.WaveLive = 10;

				AddData.Hour = 0;
				AddData.Minute = 0;
				AddData.Sec = 0;

				AddData.FinishGame = false;
	
				SpecText.N4 = AddData.WaveLive;

				SpecText.T0 = fnum(Shop.Turret_1[Skills.Turrets_1_Unlock]);
		
				WindowObjects[1][2].TMY = 0;
		
				SpecText.T1 = fnum(Shop.Turret_2[Skills.Turrets_2_Unlock]);
					
				WindowObjects[1][3].TMY = 0;
		
				SpecText.P0 = fnum(Shop.Boom[Skills.Turrets_0_Level]);
				WindowObjects[0][7].TMY = 0;
			
				SpecText.P1 = "SPEED";
				WindowObjects[0][8].TMY = WindowObjects[0][8].Height;
			
				SpecText.P2 = "SPEED";
				WindowObjects[0][9].TMY = WindowObjects[0][9].Height;
			
				SpecText.P3 = fnum(Shop.Fort[Skills.Fort_Level]);
				WindowObjects[0][10].TMY = 0;
			
				SpecText.N1 = Skills.FortLive;
				
				for (var z = 0; z < MainData.LanNumber; z++) {
				
					Text[z].S1 = AddData.Hour+":"+TimeSM(AddData.Minute*60+AddData.Sec);
					Text[z].S2 = AddData.SwarmKill;
					Text[z].S3 = AddData.FinishCounter;

				}
				
				for (var x = 0; x < Desktop.Objects.length; x++) 
				if(Desktop.Objects[x].Text){ 
		
					MiddleText(Desktop.Objects[x].Text,Desktop.Objects[x]);
					ListText(Desktop.Objects[x].Text);
		
				}

				var ActWin = WindowDrawList[WindowDrawList.length-1];

				WindowList[ActWin].Window.Scale = 0.9;
				WindowList[ActWin].Window.ScaleSim = 2;

				WindowList[ActWin].Window.Xmove = -50;
				WindowList[ActWin].Window.Ymove = -50;

				WindowList[ActWin].Window.SPX = 0;
				WindowList[ActWin].Window.SPY = 0;

				setTimeout(CloseWindow,30);

			}

			SaveData();

			//---- Pokazowe ----

		} else if(Data.Name == "List"){

		} else if(Data.Name == "Inter"){

		} else if(Data.Name == "Desktop"){

				if(Data.Object.Type == "GPlay") 
				window.open("http://www.cutfujigames.pl/", "_blank")
	
			if(Data.Object.Type == "WindowOpen") AddWindow(Data.Object.Href);
			if(Data.Object.Type == "DefenseOpen") {
				
				IntervalGame();
				AddWindow(Data.Object.Href,false,true);
				
			}

			if(Data.Object.Type == "Restart") {
				
				if(AddData.FinishCounter)
				AddWindow(Data.Object.Href);

			}

		}

		ButtonClean();

	}

	// -----------------------------------------------------------------------------

	function DesktopDraw(){
		
		for(var y = 0; y < Desktop.Objects.length; y++){
			
			var OData = Desktop.Objects[y];
			
			ctx.save();
			
				ctx.translate(OData.PX*MainData.PxW,OData.PY*MainData.PxH);
							
				ctx.drawImage(Images[OData.File], OData.TMX*OData.AnX, OData.TMY, OData.Width, OData.Height,0,0, OData.Width*MainData.PxW, OData.Height*MainData.PxH);

				if(OData.Text) TextDraw(OData.Text);
				if(OData.SpecText) SpecTextDraw(OData.SpecText);

			ctx.restore();

		}
        
	}
	
	function WindowDraw(Obj){

		var WindowData = Obj.Window,
			WinData = Obj.WindowObjects;
			
		if(WindowData.ScaleSim && WindowData.Scale < 1) WindowScale(WindowData,WindowData.ScaleSim);

		if(WindowData.Background)
		ctx.drawImage(Images[WindowData.Background], 0, 0, WindowData.Width, WindowData.Height, 0, 0, WindowData.Width*MainData.PxW, WindowData.Height*MainData.PxH);
		
		ctx.save();

		ctx.globalAlpha = WindowData.Alpha;

		for(var y = 0; y < WindowData.ObjectNumber; y++){	
			
			ctx.save();

				ctx.translate(WindowData.PX*MainData.PxW, WindowData.PY*MainData.PxH);
				ctx.scale(WindowData.Scale, WindowData.Scale);
				
				ctx.translate(WinData[y].PX*MainData.PxW, WinData[y].PY*MainData.PxH);
				
				ctx.drawImage(Images[WinData[y].File], WinData[y].TMX*WinData[y].AnX, WinData[y].TMY, WinData[y].Width,WinData[y].Height, 0, 0, WinData[y].Width*MainData.PxW, WinData[y].Height*MainData.PxH);
				
				if(WindowData.List) if(WindowData.List.ListNum == y) Obj.ListFunction();

				if(WindowData.ID[y]) TextDraw(WindowData.ID[y]);	
				if(WindowData.SpecText[y]) SpecTextDraw(WindowData.SpecText[y]);
				
			ctx.restore();
            
		}

		ctx.restore();
           	
	}	
	
	function Interfejs(){

		for (var i = 0; i < InterfejsData[MainData.InterNum].length; i++) {

			var OData = InterfejsData[MainData.InterNum][i];

			if(OData.Unlock){

				ctx.save();

				ctx.translate(OData.PX * MainData.PxW, OData.PY * MainData.PxH);
			
				ctx.drawImage(Images[OData.File], OData.TMX * OData.AnX, OData.TMY, OData.Width, OData.Height, 0, 0, OData.Width * MainData.PxW, OData.Height * MainData.PxH);
				
				if(OData.Text) TextDraw(OData.Text);
				if(OData.SpecText) SpecTextDraw(OData.SpecText);

				ctx.restore();

			}

		}
		
	}

	function DrawMouse(){

		ctx.save();	

		ctx.translate(-MainData.DiffX,-MainData.DiffY); 
		
		ctx.drawImage(Images[MouseData[MainData.Mouse].File], 0, 0, MouseData[MainData.Mouse].Width, MouseData[MainData.Mouse].Height,MainData.TouchX+MouseData[MainData.Mouse].PX*MainData.PxW,MainData.TouchY+MouseData[MainData.Mouse].PY*MainData.PxH, MouseData[MainData.Mouse].Width*MainData.PxW, MouseData[MainData.Mouse].Height*MainData.PxH);

		ctx.restore();

	}
	
	function TextDraw(TextDataM){
		
		for(var h = 0; h < TextDataM.Num; h++) {
	
			var TxtData = TextDataM[h].Data[MainData.Language],
				Texttype = TextData[TxtData.TData];

			for(var w = 0; w < TxtData.List.length; w++)
			ctx.drawImage(TextFile[Texttype.File][TxtData.List[w].File], 0, 0, 
				Texttype.TW, Texttype.TH, (TxtData.PX+TxtData.List[w].X)*MainData.PxW, (TxtData.PY+TxtData.List[w].Y)*MainData.PxH,Texttype.Width*MainData.PxW, Texttype.Height*MainData.PxH);
				
		}

	}

	function SpecTextDraw(TData,SText){ 
	
		for(var h = 0; h < TData.Num; h++) {
			
			if(TData[h].Spec) var TN = String(SpecText[TData[h].Spec]); 
			else if(SText) var TN = String(SText); 
			else var TN = Text[MainData.Language][TData[h].Text]; 

			if(!TData[h].Font){
				
				var Width = 0, Txt = TextData[TData[h].Data.TData];
				
				if(TData[h].Data.Width)
				var	PX = (TData[h].Data.Width/2)-((TN.length*Txt.Width)/2); else var PX = 0;
				
				ctx.save();	

				ctx.translate((TData[h].Data.PX+PX)*MainData.PxW,TData[h].Data.PY*MainData.PxH); 
					
					for(var w = 0; w < TN.length; w++){

						var funkcja_XY = TextFile[Txt.File].Fun(TN[w],Txt.Split);

						ctx.drawImage(TextFile[Txt.File][funkcja_XY[0]], 0, 0, Txt.TW, Txt.TH, Width*MainData.PxW, funkcja_XY[2]*MainData.PxH,Txt.Width*MainData.PxW, Txt.Height*MainData.PxH);
						
						Width += Txt.Width;

					}
				
				ctx.restore();

			} else { 
				
				TextF = TData[h].Data[MainData.Language];
				
				ctx.font = TextF.Spec+" "+(TextF.Size*MainData.PxW)+"px "+TextF.Font;
				ctx.textAlign = TextF.Align;
				ctx.textBaseline = TextF.Baseline;

				if(TextF.SColor){
				
					ctx.save();	

					ctx.lineWidth = TextF.LWidth*MainData.PxW;
					ctx.strokeStyle = TextF.SColor;
					ctx.lineJoin = TextF.LineJoin;
					ctx.strokeText(TN, TextF.PX*MainData.PxW, TextF.PY*MainData.PxH);

					ctx.restore();

				}
			
				ctx.fillStyle = TextF.Color;
				ctx.fillText(TN, TextF.PX*MainData.PxW, TextF.PY*MainData.PxH);

			}

		}
	
	}
	
	function ProgressBar(Obj,BarData){
		
			ctx.save();

				ctx.translate(BarData.PX*MainData.PxW,BarData.PY*MainData.PxH);
						
				if(BarData.Type == "Percent"){
	
					if(Obj.Unlock) var BarWidth = BarData.BarC.MaxWidth; 
					else if(Obj.Type == "time") var BarWidth = (((Achievements.PlayTimeH*60+Achievements.PlayTimeM)/(Obj.CTF*60)))*BarData.BarC.MaxWidth;
					
					ctx.drawImage(Images[BarData.File], BarData.TMX,BarData.TMY, BarData.Width,BarData.Height,0,0, BarData.Width*MainData.PxW, BarData.Height*MainData.PxH);	
					ctx.drawImage(Images[BarData.BarC.File], BarData.BarC.TMX,BarData.BarC.TMY, 15,15,BarData.BarC.PX*MainData.PxW,BarData.BarC.PY*MainData.PxH, BarWidth*MainData.PxW, BarData.BarC.Height*MainData.PxH);	
				
					if(Obj.Type == "time"){

						//if(!Obj.Unlock) MiddleTextDraw(Math.round(((Achievements.PlayTimeH*60+Achievements.PlayTimeM)/(Obj.CTF*60))*100)+"_",0,721,10,0);
						//else MiddleTextDraw("100_",0,721,10,0);
 
					} 

				}

			ctx.restore();
				
	}

	function ProgressBarWin(Obj,BarData){
	
		ctx.save();

		ctx.translate(BarData.PX*MainData.PxW,BarData.PY*MainData.PxH);
				
		if(BarData.Type == "Fort"){

			if(Skills.FortLive == Skills.MaxFortLive) var BarWidth = BarData.BarC.MaxWidth; 
			else var BarWidth = ((Skills.FortLive/Skills.MaxFortLive))*BarData.BarC.MaxWidth;
			
			ctx.drawImage(Images[BarData.File], BarData.TMX,BarData.TMY, BarData.Width,BarData.Height,0,0, BarData.Width*MainData.PxW, BarData.Height*MainData.PxH);	
			ctx.drawImage(Images[BarData.BarC.File], BarData.BarC.TMX,BarData.BarC.TMY, 7,66,BarData.BarC.PX*MainData.PxW,BarData.BarC.PY*MainData.PxH, BarWidth*MainData.PxW, BarData.BarC.Height*MainData.PxH);	

			SpecTextDraw(BarData.SpecText);

		}
	
		if(BarData.Type == "Wave"){

			if(Wave.WavesLive == AddData.WaveLive) var BarWidth = BarData.BarC.MaxWidth; 
			else var BarWidth = (( AddData.WaveLive/Wave.WavesLive))*BarData.BarC.MaxWidth;
			
			ctx.drawImage(Images[BarData.File], BarData.TMX,BarData.TMY, BarData.Width,BarData.Height,0,0, BarData.Width*MainData.PxW, BarData.Height*MainData.PxH);	
			ctx.drawImage(Images[BarData.BarC.File], BarData.BarC.TMX,BarData.BarC.TMY, 7,66,BarData.BarC.PX*MainData.PxW,BarData.BarC.PY*MainData.PxH, BarWidth*MainData.PxW, BarData.BarC.Height*MainData.PxH);	

			SpecTextDraw(BarData.SpecText);

		}

		ctx.restore();
	
	}
	
	//-----------------------------------------------------------------------------
	
	function ListDrawN(ListCopy,Window){ 
		
		var ListData = Window.List,
			ListSpecial = Window.ListSpecial,
			Vertical = ListData.PY,
			Horizon = [ListData.PX,ListData.PX],
			BlockData = ListData.SpecData,
			CounterRender = 0;

		ctx.save();
		ctx.beginPath();
		ctx.rect(ListData.Ram.PX * MainData.PxW, ListData.Ram.PY * MainData.PxH, ListData.Ram.Width * MainData.PxW, ListData.Ram.Height * MainData.PxH);
		ctx.clip();	

		for(var x = 0; x < ListCopy.length; x++) {
		
			ctx.save();

			if(	Vertical+ListSpecial.DifferenceY+ListData.PH > ListData.Ram.PY && 
				Vertical+ListSpecial.DifferenceY < ListData.Ram.PY+ListData.Ram.Height){

				ctx.translate(Horizon[1]*MainData.PxW, (Vertical+ListSpecial.DifferenceY)*MainData.PxH);
				
				ctx.drawImage(Images[ListData.File], ListData.TMX, ListData.TMY,ListData.Width, ListData.Height,0,0, ListData.Width*MainData.PxW, ListData.Height*MainData.PxH);
				
				if(BlockData.Image)  //<----  Image
				for(var g = 0; g < BlockData.ImageNumber; g++) 
				ctx.drawImage(Images[ListCopy[x]["N"+g].File_Image],ListCopy[x]["N"+g].TMX, ListCopy[x]["N"+g].TMY, BlockData.Width, BlockData.Height, BlockData.PX*MainData.PxW, BlockData.PY*MainData.PxH, BlockData.Width*MainData.PxW, BlockData.Height*MainData.PxH);
				
				if(ListData.Button)
				ctx.drawImage(Images[ListData.Button.File], ListData.Button.TMX*ListCopy[x].AnX, ListData.Button.TMY, ListData.Button.Width, ListData.Button.Height, ListData.Button.PX*MainData.PxW, ListData.Button.PY*MainData.PxH, ListData.Button.Width*MainData.PxW, ListData.Button.Height*MainData.PxH);
				
				if(ListCopy[x].Text) TextDraw(ListCopy[x].Text);
				
				if(Window.Name == "W10") 
				SpecTextDraw(ListCopy[x].Points,Window.List.SpecText);

			}

			if((ListData.StopListX-1) == CounterRender){
				
				Horizon[1] = Horizon[0];
				Vertical += ListData.PH;
				CounterRender = 0;
				
			} else {
				
				Horizon[1] += ListData.PW;
				CounterRender++;
				
			}
		
			ctx.restore();
			
		}
		
		ctx.closePath();
		ctx.restore();
	}
	
	function ListDrawS(ListCopy,Window){ 
		
		var ListData = Window.List,
			ListSpecial = Window.ListSpecial,
			Vertical = ListData.PY,
			Horizon = [ListData.PX,ListData.PX],
			BlockData = ListData.SpecData,
			CounterRender = 0;

		ctx.save();
		ctx.beginPath();
		ctx.rect(ListData.Ram.PX * MainData.PxW, ListData.Ram.PY * MainData.PxH, ListData.Ram.Width * MainData.PxW, ListData.Ram.Height * MainData.PxH);
		ctx.clip();	

		for(var x = 0; x < ListCopy.length; x++) {
		
			ctx.save();

			if(	Vertical+ListSpecial.DifferenceY+ListData.PH > ListData.Ram.PY && 
				Vertical+ListSpecial.DifferenceY < ListData.Ram.PY+ListData.Ram.Height){

				ctx.translate(Horizon[1]*MainData.PxW, (Vertical+ListSpecial.DifferenceY)*MainData.PxH);
				
				if(ListData.TypeList == "Level")
				if(ListCopy[x].Unlock > AddData.Points)
				ListData.Button.TMY = ListData.Button.Lock; else ListData.Button.TMY = 0;

				ctx.drawImage(Images[ListData.File], ListData.TMX, ListData.TMY,ListData.Width, ListData.Height,0,0, ListData.Width*MainData.PxW, ListData.Height*MainData.PxH);
				
				if(ListData.TypeList == "Achievement") {

					if(!Achievements[ListCopy[x].Num].Unlock) //<----  Achievemente
						ctx.drawImage(Images[BlockData.LockTrophy], 0, 0, BlockData.Width, BlockData.Height, BlockData.PX*MainData.PxW,BlockData.PY*MainData.PxH,BlockData.Width*MainData.PxW, BlockData.Height*MainData.PxH);
					else ctx.drawImage(Images[ListCopy[x].Trophy], 0, 0, BlockData.Width, BlockData.Height, BlockData.PX*MainData.PxW,BlockData.PY*MainData.PxH,BlockData.Width*MainData.PxW, BlockData.Height*MainData.PxH);

					if(Achievements[ListCopy[x].Num].Unlock || !Achievements[ListCopy[x].Num].Hidden)
					TextDraw(ListCopy[x].Text); else TextDraw(BlockData.Text);
				
				} else if(ListCopy[x].Text) TextDraw(ListCopy[x].Text);

				if(ListCopy[x].Bar) 
				ProgressBar(Achievements[ListCopy[x].Num],ListData.PBData);
	
				if(ListData.Button)
				ctx.drawImage(Images[ListData.Button.File], ListData.Button.TMX*ListCopy[x].AnX, ListData.Button.TMY, ListData.Button.Width, ListData.Button.Height, ListData.Button.PX*MainData.PxW, ListData.Button.PY*MainData.PxH, ListData.Button.Width*MainData.PxW, ListData.Button.Height*MainData.PxH);
				
				if(ListData.TypeList == "Level"){
					
					if(ListCopy[x].Unlock > AddData.Points)
					SpecTextDraw(ListCopy[x].Unlock,ListData.SpecText);
					
					ctx.drawImage(Images[BlockData.Points.File], BlockData.Points.TMX*ListCopy[x].Points, BlockData.Points.TMY, BlockData.Points.Width, BlockData.Points.Height, BlockData.Points.PX*MainData.PxW, BlockData.Points.PY*MainData.PxH, BlockData.Points.Width*MainData.PxW, BlockData.Points.Height*MainData.PxH);
	
				}
				
			}

			if((ListData.StopListX-1) == CounterRender){
				
				Horizon[1] = Horizon[0];
				Vertical += ListData.PH;
				CounterRender = 0;
				
			} else {
				
				Horizon[1] += ListData.PW;
				CounterRender++;
				
			}
		
			ctx.restore();
			
		}
		
		ctx.closePath();
		ctx.restore();
	}

	//-----------------------------------------------------------------------------
	
	function AddWindow(Num,Change,Special) { 

		MainData.Window = true; 
		
		var Check = true, WNum = null;

		if(!Window[Num].Copy){

			for (var x = 0; x < WindowDrawList.length; x++) {

				if(WindowList[WindowDrawList[x]].Window.Name == Window[Num].Name)
				{ Check = false; WNum = WindowDrawList[x];}
				
			}

		}

		if(Check){

			var WindowData = JSON.parse(JSON.stringify(Window[Num]));
		
			if(Change){

				WindowData.PX = Change[0];
				WindowData.PY = Change[1];
				WindowData.ScaleSim = 0;

			} 

			if(WindowData.ScaleSim){

				WindowData.SPX = WindowData.PX;
				WindowData.SPY = WindowData.PY;
		
				WindowData.PX = (MainData.TouchX-MainData.DiffX)/MainData.PxW;
				WindowData.PY = (MainData.TouchY-MainData.DiffY)/MainData.PxH;
		
				WindowData.Xmove = Math.abs(WindowData.SPX-WindowData.PX)/5;
				WindowData.Ymove = Math.abs(WindowData.SPY-WindowData.PY)/5;
	
				WindowData.Scale = 0;
				WindowData.Alpha = 0;

				if(WindowData.Fullscreen){
				
					MainData.Interfejs = false;
					MainData.OnInter = false;
	
				}

			} else if(WindowData.Fullscreen){
				
				MainData.Desktop = false;
				MainData.Interfejs = false;
				MainData.OnInter = false;

			}

			var WindowObject = {
					
				"WindowObjects": JSON.parse(JSON.stringify(WindowObjects[WindowData.WindowType])),
				"Window": JSON.parse(JSON.stringify(WindowData)),
				"CopyList": ListCreator(WindowData),
				"Function": null,
				"ListFunction": null,
				"AnimList": null
						
			};
	
			var Check = false, x = 0, Num = 0;

			if(WindowList.length > 1)
			for (var x = 0; x < WindowList.length; x++) {
				
				if(WindowList[x] == null){

					Check = true;
					Num = x;

				}

			}

			if(!Check){

				WindowList.push(WindowObject);
			
				x = WindowList.length-1;
		
			} else {
				
				WindowList[Num] = WindowObject;
			
				x = Num;
		
			}

			WindowDrawList.push(x);
			
			if(!Special)
			WindowList[x].Function = function (){ WindowDraw(WindowList[x]); };
			else WindowList[x].Function = function (){ DefenseDraw(WindowList[x]); }; 

			WindowList[x].AnimList = AnimationStarter(WindowList[x].Window,WindowList[x].WindowObjects);
		
			if(WindowList[x].CopyList){

				if(WindowList[x].Window.List.StopListX || WindowList[x].Window.List.StopListX == 1){

					var Val = 0;
		
					for(var y = 0; y < WindowList[x].CopyList.length; y++) if(WindowList[x].Window.List.StopListX*Val == y) Val++;
		
					WindowList[x].Window.ListSpecial.StopList = ((Val-2)*WindowList[x].Window.List.PH);
		
				} else WindowList[x].Window.ListSpecial.StopList = (WindowList[x].CopyList.length-2)*WindowList[x].Window.List.PH;
				
				if(WindowList[x].Window.List.TypeList == "Normal") 
					WindowList[x].ListFunction = function (){ ListDrawN(WindowList[x].CopyList,WindowList[x].Window); };	
				else
					WindowList[x].ListFunction = function (){ ListDrawS(WindowList[x].CopyList,WindowList[x].Window); };
		
			}
				
		} else {

			var NewList = [];

			for (var x = 0; x < WindowDrawList.length; x++) 
			if(WindowDrawList[x] != WNum)
			NewList.push(WindowDrawList[x]);
			
			NewList.push(WNum);

			WindowDrawList = NewList;
	
		}

		if(WindowDrawList.length) 
		ButtonHBWindowPC(MainData.TouchX,MainData.TouchY); else MainData.OnWindow = false;

	}	

	function CloseWindow(){

		var ActWin = WindowDrawList[WindowDrawList.length-1];
		
		if(WindowList[ActWin].Window.Name == "W14"){
		
			clearInterval(DefenseData.SpawnFunction);
			clearInterval(DefenseData.ShotMove);
			clearInterval(DefenseData.SwormMove);
			clearInterval(DefenseData.TurretShotList);

			DefenseData.SpawnFunction = null;
			DefenseData.ShotMove = null;
			DefenseData.SwormMove = null;
			DefenseData.TurretShotList = null;

			DefenseData.SwarmList = [];
			DefenseData.ShotList = [];

		}

		if(WindowList[ActWin].Window.Fullscreen){
		
			if(WindowDrawList.length > 1){

				if(!WindowList[WindowDrawList[WindowDrawList.length-2]].Window.Fullscreen){

					MainData.Desktop = true;
					MainData.Interfejs = true;

				}

			} else {

				MainData.Desktop = true;
				MainData.Interfejs = true;

			}

		}

		var NewList = [];

		for (var x = 0; x < WindowDrawList.length-1; x++) 
		NewList.push(WindowDrawList[x]);
		
		WindowDrawList = NewList;
		
		if(WindowList[ActWin].Window.Animations)
		for(var y = 0; y < WindowList[ActWin].Window.Animations.AnimationsNum; y++)	
		clearInterval(WindowList[ActWin].AnimList[y]);

		WindowList[ActWin] = null;
		
		var Check = false;

		for (var x = 0; x < WindowList.length; x++) 
		if(WindowList[x] != null) Check = true;
			
		if(!Check) WindowList = [];

		if(WindowDrawList.length) 
		ButtonHBWindowPC(MainData.TouchX,MainData.TouchY); else { 
			MainData.OnWindow = false; 
			if(MainData.CurrentButton != null)
			if(MainData.CurrentButton.Name == "Window") 
			MainData.CurrentButton = null;
		}

	}

	function ListData(WinsowNum){

		WinsowNum.Window.ListSpecial.DifferenceY = 0;

		WinsowNum.CopyList = ListCreator(WinsowNum.Window);
		
		if(WinsowNum.Window.List.StopListX || WinsowNum.Window.List.StopListX == 1){

			var Val = 0;

			for(var y = 0; y < WinsowNum.CopyList.length; y++) if(WinsowNum.Window.List.StopListX*Val == y) Val++;

			WinsowNum.Window.ListSpecial.StopList = ((Val-2)*WinsowNum.Window.List.PH);

		} else WinsowNum.Window.ListSpecial.StopList = (WinsowNum.CopyList.length-2)*WinsowNum.Window.List.PH;
		
	}

	function ListCreator(DataList){

		if(!DataList.List) return null;

		var List = DataList.List.Objects;

		var CList = [];

		if(!DataList.ListSpecial.ListFilter)
		for(var x = 0; x < List.length; x++)
		CList.push(List[x]);

		if(DataList.ListSpecial.ListFilter)
		for(var c = 0; c < List.length; c++){

			for(var y = 0; y < List[c].TagsNumber; y++){
				
				var Tag = DataList.ListSpecial.ListTag,
					CheckTag = List[c].Tags[MainData.Language][y];

					Tag = Tag.toLowerCase();
					CheckTag = CheckTag.toLowerCase();
					
				var Checkf = Tag.includes(CheckTag);
				
				if(Checkf && Tag.length > 2)
				CList.push(List[c]);
	
			}

		}

		if(DataList.ListSpecial.Sort){

			if(DataList.ListSpecial.SortMax){
				
				CList.sort(function(a, b){
					return a.Points - b.Points;
				});

			} else {

				CList.sort(function(a, b){
					return b.Points - a.Points;
				});

			}

		}

		return JSON.parse(JSON.stringify(CList));

	}

	function LevelCreator(Num){
		
		// Normally empty
		
		console.log("Poziom Włączony "+Num);

	}

	//-----------------------------------------------------------------------------
	
    function WindowScale(Obj,ScaleSim){

		var WindowData = Obj;
		
		if(WindowData.SPX <= WindowData.PX)
		WindowData.PX -= WindowData.Xmove;
		else WindowData.PX += WindowData.Xmove;
		
		if(WindowData.SPY <= WindowData.PY)
		WindowData.PY -= WindowData.Ymove;
		else WindowData.PY += WindowData.Ymove;

		if(ScaleSim == 1){
		
			WindowData.Scale += 0.2;
			WindowData.Alpha += 0.2;
	
			if(WindowData.Scale >= 1){
			
				if(WindowData.Fullscreen){
					
					MainData.Desktop = false;
					MainData.Interfejs = false;
					MainData.OnInter = false;
	
				}
	
				WindowData.PX = WindowData.SPX;
				WindowData.PY = WindowData.SPY;
		
				WindowData.SPX = 0;
				WindowData.SPY = 0;
	
				WindowData.Scale = 1;
				WindowData.Alpha = 1;
	
			} 

		} else if(ScaleSim == 2){

			WindowData.Scale -= 0.1;
			WindowData.Alpha -= 0.1;
	

		}
		
    }

	//-----------------------------------------------------------------------------

	function AchievementF(){
	
	}
	
	function AddAlert(Obj,alertnum,num) { 

		MainData.Alert = true; 
				
		var ActualAlert = {
				
			"File": Obj[num].File,
			"TMX": Obj.TMX,
			"TMY": Obj.TMY,
			"Width": Obj.Width,
			"Height": Obj.Height,
			"Alpha": 0,
			"SpecText": false,
			"Counter": 0,
			"MaxCounter": 100,
			"Function": null
					
		};

		if(Obj[num].Text) ActualAlert.SpecText = Obj[num].Text;
		if(Obj[num].Prize) ActualAlert.Text = "+"+Obj[num].Prize+"!";

		AlertList.push(ActualAlert);
		
		var x = AlertList.length-1;

		if(Alerts[alertnum].Num == "Alert_1")
		AlertList[x].Function = function (){ Alert_1(AlertList[x],alertnum); };
		
		if(Alerts[alertnum].Num == "Alert_2")
		AlertList[x].Function = function (){ Alert_2(AlertList[x],alertnum); };

	}	

	function Alert_1(Obj,Type){

		ctx.save();

		var Move = (Alerts[Type].Time/6)/((Alerts[Type].Time/60)/2);

		if(Obj.MaxCounter/2 > Obj.Counter && Obj.Alpha < Math.abs(Alerts[Type].PX+40))
		Obj.Alpha += Move;
			else if(Obj.MaxCounter/2 < Obj.Counter)
		Obj.Alpha -= Move;

		ctx.translate((Obj.Alpha+Alerts[Type].PX)*MainData.PxW,Alerts[Type].PY*MainData.PxH);
				
		ctx.drawImage(Images[Alerts[Type].File], Alerts[Type].TMX, Alerts[Type].TMY, Alerts[Type].Width, Alerts[Type].Height, 0,0, Alerts[Type].Width*MainData.PxW, Alerts[Type].Height*MainData.PxH);		

		if(Obj.SpecText) SpecTextDraw(Text[MainData.Language][Obj.SpecText.Text],Obj.SpecText.Data);

		Obj.Counter++;

		if(Obj.MaxCounter == Obj.Counter){
		
			Obj.Counter = 0;

			if(AlertList.length-1 != MainData.AlertNum)
			MainData.AlertNum++; else {
			
				MainData.Alert = false;
				AlertList = [];
				MainData.AlertNum = 0;
					
			}
			
		}

		ctx.restore();

	}	
				
	function Alert_2(Obj,Type){

		ctx.save();

		var globalAlpha = 1/((Alerts[Type].Time/60)/2);

		if(Obj.MaxCounter/2 > Obj.Counter)
		Obj.Alpha += globalAlpha;
			else
		Obj.Alpha -= globalAlpha;

			ctx.globalAlpha = Obj.Alpha;

		ctx.translate(Alerts[Type].PX*MainData.PxW,Alerts[Type].PY*MainData.PxH);
				
		ctx.drawImage(Images[Alerts[Type].File], Alerts[Type].TMX, Alerts[Type].TMY, Alerts[Type].Width, Alerts[Type].Height, 0,0, Alerts[Type].Width*MainData.PxW, Alerts[Type].Height*MainData.PxH);		

		ctx.drawImage(Images[Obj.File], Obj.TMX, Obj.TMY, Obj.Width, Obj.Height, Alerts[Type].Spec.PX*MainData.PxW,Alerts[Type].Spec.PY*MainData.PxH, Alerts[Type].Spec.Width*MainData.PxW, Alerts[Type].Spec.Height*MainData.PxH);		
						
			ctx.globalAlpha = 0;
			
		Obj.Counter++;

		if(Obj.MaxCounter == Obj.Counter){
		
			Obj.Counter = 0;

			if(AlertList.length-1 != MainData.AlertNum)
			MainData.AlertNum++; else {
			
				MainData.Alert = false;
				AlertList = [];
				MainData.AlertNum = 0;

			}
			
		}

		ctx.restore();

	}

	//-----------------------------------------------------------------------------

	function AnimationStarter(Data,Obj){
		
		if(!Data.Animations)
		return null;

		var AnimList = [];

		for(var y = 0; y < Data.Animations.AnimationsNum; y++){	
		
			if(Data.Animations[y].Type == "LoopGoBack") 
			AnimList.push(setInterval(LoopGoBack,Data.Animations[y].Speed,Data.Animations[y],Obj[Data.Animations[y].ObjectNumber]));
			else	
			if(Data.Animations[y].Type == "LoadStay")
			AnimList.push(setInterval(LoadStay,Data.Animations[y].Speed,Data.Animations[y],Obj[Data.Animations[y].ObjectNumber]));
			else
			if(Data.Animations[y].Type == "InfiniteLoop") 
			AnimList.push(setInterval(InfiniteLoop,Data.Animations[y].Speed,Data.Animations[y],Obj[Data.Animations[y].ObjectNumber]));
			
		}
	
		return AnimList;

	}
	
	function InfiniteLoop(AData,Obj){
			
		if(AData.Work){
				
			Obj.AnX++;

			if(Obj.AnX == AData.MaxFrame)
			Obj.AnX = 0;

		}

	}

	function LoopGoBack(AData,Obj){
		
		if(AData.Work){
				
			if(AData.Direction) {
			
				if(Obj.AnX+1 >= AData.MaxFrame)
				AData.Direction = false;
				
				if(Obj.AnX < AData.MaxFrame+1)
				Obj.AnX++;
				

			} else {
					
				Obj.AnX--;
				
				if(Obj.AnX == 0)
				AData.Direction = true;
			
			}
		}

	}

	function LoadStay(AData,Obj){

		if(AData.Work){

			if(AData.Direction) {
				
				if(Obj.AnX+1 == AData.MaxFrame)
				{
					AData.Direction = false; 
					AData.Work = false;	
				}
				
				Obj.AnX++;
				
			} else {
				
				Obj.AnX--; 
				
				if(Obj.AnX == 0)
				{
					AData.Direction = true; 
					AData.Work = false;	
				}
			
			}

		}

	}

	//-----------------------------------------------------------------------------
			
	function PlaySound(Num){
		
		SoundBase[Num].pause();
		SoundBase[Num].load();
		SoundBase[Num].play();
		
	}
	
	function VolumeSound(Num){

		for(var x = 0; x < SoundBase.length; x++){

			SoundBase[x].volume = Num;

		}

	}

	//-----------------------------------------------------------------------------

	function StartTime(){ 
    
		Time.Today = new Date();
		Time.A0 = Time.Today.getMinutes();
		Time.A1 = Time.Today.getSeconds();
		Time.A2 = Time.Today.getHours();
		
	}	
	
	function TextNumber(TextNumber,Width,Height,Split){  
		
		if(TextNumber == ' ') return [10*Width,1,0.7,0];
		
		if(TextNumber == '0') return [0*Width,0,0.95,0];
		if(TextNumber == '1') return [1*Width,0,0.7,0];
		if(TextNumber == '2') return [2*Width,0,1,0];
		if(TextNumber == '3') return [3*Width,0,1,0];
		if(TextNumber == '4') return [4*Width,0,1,0];
		if(TextNumber == '5') return [5*Width,0,1,0];
		if(TextNumber == '6') return [6*Width,0,1,0];
		if(TextNumber == '7') return [7*Width,0,1,0];
		if(TextNumber == '8') return [8*Width,0,1,0];
		if(TextNumber == '9') return [9*Width,0,1,0];

		if(TextNumber == 'e') return [4*Width,4*Height+8,0.9,0];
		if(TextNumber == 't') return [8*Width,5*Height+10,0.6,0];
		if(TextNumber == 'a') return [0*Width,4*Height+8,1,0];
		if(TextNumber == 'o') return [3*Width,5*Height+10,0.9,0];
		if(TextNumber == 'i') return [8*Width,4*Height+8,0.2,0];
		if(TextNumber == 'n') return [2*Width,5*Height+10,0.8,0];
		if(TextNumber == 's') return [7*Width,5*Height+10,0.8,0];
		if(TextNumber == 'h') return [7*Width,4*Height+8,0.9,0];
		if(TextNumber == 'r') return [6*Width,5*Height+10,0.9,0];
		if(TextNumber == 'd') return [3*Width,4*Height+8,0.9,0];
		if(TextNumber == 'l') return [0*Width,5*Height+10,0.25,0];
		if(TextNumber == 'c') return [2*Width,4*Height+8,0.8,0];
		if(TextNumber == 'u') return [9*Width,5*Height+10,0.7,0];
		if(TextNumber == 'm') return [1*Width,5*Height+10,0.95,0];
		if(TextNumber == 'w') return [10*Width,5*Height+10,0.9,0];
		if(TextNumber == 'f') return [5*Width,4*Height+8,0.6,0];
		if(TextNumber == 'g') return [6*Width,4*Height+8,0.9,24*Split];
		if(TextNumber == 'y') return [1*Width,6*Height+14,0.9,24*Split];
		if(TextNumber == 'p') return [4*Width,5*Height+10,0.9,24*Split];
		if(TextNumber == 'b') return [1*Width,4*Height+8,0.9,0];
		if(TextNumber == 'v') return [3*Width,6*Height+12,0.9,0];
		if(TextNumber == 'k') return [10*Width,4*Height+8,0.8,0];
		if(TextNumber == 'j') return [9*Width,4*Height+8,0.5,19*Split];
		if(TextNumber == 'x') return [0*Width,6*Height+12,0.9,0];
		if(TextNumber == 'q') return [5*Width,5*Height+10,0.9,21*Split];
		if(TextNumber == 'z') return [2*Width,6*Height+13,0.9,0];
		
		if(TextNumber == 'E') return [4*Width,1*Height+2,0.9,0];
		if(TextNumber == 'T') return [8*Width,2*Height+4,0.9,0];
		if(TextNumber == 'A') return [0*Width,1*Height+2,0.9,0];
		if(TextNumber == 'O') return [3*Width,2*Height+4,0.9,0];
		if(TextNumber == 'I') return [8*Width,1*Height+2,0.4,0];
		if(TextNumber == 'N') return [2*Width,2*Height+4,0.9,0];
		if(TextNumber == 'S') return [7*Width,2*Height+4,0.9,0];
		if(TextNumber == 'H') return [7*Width,1*Height+2,0.9,0];
		if(TextNumber == 'R') return [6*Width,2*Height+4,0.9,0];
		if(TextNumber == 'D') return [3*Width,1*Height+2,0.9,0];
		if(TextNumber == 'L') return [0*Width,2*Height+4,0.9,0];
		if(TextNumber == 'C') return [2*Width,1*Height+2,0.9,0];
		if(TextNumber == 'U') return [9*Width,2*Height+4,0.9,0];
		if(TextNumber == 'M') return [1*Width,2*Height+4,0.9,0];
		if(TextNumber == 'W') return [10*Width,2*Height+4,0.9,0];
		if(TextNumber == 'F') return [5*Width,1*Height+2,0.9,0];
		if(TextNumber == 'G') return [6*Width,1*Height+2,0.9,0];
		if(TextNumber == 'Y') return [1*Width,3*Height+6,0.9,0];
		if(TextNumber == 'P') return [4*Width,2*Height+4,0.9,0];
		if(TextNumber == 'B') return [1*Width,1*Height+2,0.9,0];
		if(TextNumber == 'V') return [3*Width,3*Height+6,0.9,0];
		if(TextNumber == 'K') return [4*Width,3*Height+6,0.9,0];
		if(TextNumber == 'J') return [9*Width,1*Height+2,0.9,0];
		if(TextNumber == 'X') return [0*Width,3*Height+6,0.9,0];
		if(TextNumber == 'Q') return [5*Width,2*Height+4,0.9,0];
		if(TextNumber == 'Z') return [2*Width,3*Height+6,0.9,0];

		if(TextNumber == 'ę') return [2*Width,8*Height+23,0.9,0];
		if(TextNumber == 'ą') return [0*Width,8*Height+16,1,0];
		if(TextNumber == 'ó') return [4*Width,8*Height+19,0.9,0];
		if(TextNumber == 'ż') return [6*Width,8*Height+20,0.9,0];
		if(TextNumber == 'ś') return [5*Width,8*Height+16,0.8,0];
		if(TextNumber == 'ć') return [1*Width,8*Height+18,0.7,0];
		if(TextNumber == 'ń') return [3*Width,8*Height+18,0.8,0];
		if(TextNumber == 'ź') return [7*Width,8*Height+18,0.9,0];
		if(TextNumber == 'ł') return [8*Width,8*Height+20,0.4,0];

		if(TextNumber == 'Ę') return [2*Width,7*Height+14,0.9,0];
		if(TextNumber == 'Ą') return [0*Width,7*Height+14,0.9,0];
		if(TextNumber == 'Ó') return [4*Width,7*Height+14,0.9,0];
		if(TextNumber == 'Ż') return [6*Width,7*Height+14,0.9,0];
		if(TextNumber == 'Ś') return [5*Width,7*Height+14,0.9,0];
		if(TextNumber == 'Ć') return [1*Width,7*Height+14,0.9,0];
		if(TextNumber == 'Ń') return [3*Width,7*Height+14,0.9,0];
		if(TextNumber == 'Ź') return [7*Width,7*Height+14,0.9,0];
		if(TextNumber == 'Ł') return [8*Width,7*Height+14,0.9,0];

		if(TextNumber == ',') return [8*Width,6*Height+12,0.6,3*Split];
		if(TextNumber == '.') return [10*Width,1*Height+2,0.3,0];

		if(TextNumber == '^') return [10*Width,7*Height+14,1,0];
		if(TextNumber == '_') return [11*Width,2,1,0]; // czarny %	
		if(TextNumber == '+') return [5*Width,6*Height+12,0.8,0];
		if(TextNumber == '(') return [5*Width,3*Height+6,0.3,0];
		if(TextNumber == ')') return [6*Width,3*Height+6,0.3,0];
		if(TextNumber == ':') return [9*Width,3*Height+6,1,0];
		if(TextNumber == '/') return [8*Width,3*Height+6,0.2,0];
		if(TextNumber == '%') return [4*Width,6*Height+12,1,0];
		if(TextNumber == '=') return [6*Width,6*Height+12,0.4,0];
		if(TextNumber == '-') return [7*Width,6*Height+12,0.4,0];
		if(TextNumber == '<') return [9*Width,6*Height+12,0.55,0];
		if(TextNumber == '>') return [10*Width,6*Height+12,0.65,0];
		if(TextNumber == '!') return [10*Width,3*Height+6,1,0];

	}

	function TimeSM(Val){

		var minutes = Math.floor(Val / 60);
		var seconds = Val - minutes * 60;

		if(seconds > 9)
		return minutes+":"+seconds;
		else return minutes+":0"+seconds;

	}

	function fnum(x) {
		
		if(isNaN(x) || x < 1000) return Math.round(x)+"/"; // mniej niż tysiac
	
		if(x < 1000000) return (x/1000).toFixed(2) + Text[MainData.Language][83] +"/"; // mniej niż milion

		if(x < 1000000000) return (x/1000000).toFixed(2) + Text[MainData.Language][84] +"/"; // mniej niż miliard
		
		if(x < 1000000000000) return (x/1000000000).toFixed(2) + Text[MainData.Language][85]+"/"; // mniej niż bilion
		
		if(x < 1000000000000000) return (x/1000000000000).toFixed(2) + Text[MainData.Language][86]+"/"; // mniej niż biliard
		
		if(x < 1000000000000000000) return (x/1000000000000000).toFixed(2) + Text[MainData.Language][87]+"/"; // mniej niż trylion
		
		if(x < 100000000000000000000) return (x/1000000000000000000).toFixed(2) + Text[MainData.Language][88]+"/"; // do konca

		return "OVER 9000";

	}

	//-----------------------------------------------------------------------------

	function IntervalGame(){
		
		if(DefenseData.Stats == null){

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

	function DefenseDraw(Obj){

		var WindowData = Obj.Window,
			WinData = Obj.WindowObjects;
			
		if(WindowData.ScaleSim && WindowData.Scale < 1) WindowScale(WindowData,WindowData.ScaleSim);

		if(WindowData.Background)
		ctx.drawImage(Images[WindowData.Background], 0, 0, WindowData.Width, WindowData.Height, 0, 0, WindowData.Width*MainData.PxW, WindowData.Height*MainData.PxH);
		
		ctx.save();

		ctx.globalAlpha = WindowData.Alpha;

		for(var y = 0; y < WindowData.ObjectNumber; y++){	
			
			ctx.save();

			ctx.translate(WindowData.PX*MainData.PxW, WindowData.PY*MainData.PxH);
			ctx.scale(WindowData.Scale, WindowData.Scale);
			
			ctx.translate(WinData[y].PX*MainData.PxW, WinData[y].PY*MainData.PxH);
			
			ctx.drawImage(Images[WinData[y].File], WinData[y].TMX*WinData[y].AnX, WinData[y].TMY, WinData[y].Width,WinData[y].Height, 0, 0, WinData[y].Width*MainData.PxW, WinData[y].Height*MainData.PxH);
				
			if(y == 1){
				
				ctx.save();
				
				for (var x = 0; x < DefenseData.ShotList.length; x++) {
					
					if(DefenseData.ShotList[x] != null){
						
						ctx.save();
				
						ctx.translate(DefenseData.ShotList[x].PX * MainData.PxW, DefenseData.ShotList[x].PY * MainData.PxH);
						ctx.rotate(DefenseData.ShotList[x].Route);
						
						ctx.drawImage(
							Images[DefenseData.ShotList[x].File], 
							0, 0, 
							DefenseData.ShotList[x].Width,
							DefenseData.ShotList[x].Height, 
							-(DefenseData.ShotList[x].Width/2)* MainData.PxW, 
							-(DefenseData.ShotList[x].Height/2)* MainData.PxH,
							DefenseData.ShotList[x].Width*MainData.PxW, 
							DefenseData.ShotList[x].Height*MainData.PxH);
						
						ctx.restore();
		
					}
					
				}

				for (var x = 0; x < Skills.Turrets_1_Unlock; x++) {
				
					ctx.save();
					ctx.translate(DefenseData.TurretList[x].PX * MainData.PxW, DefenseData.TurretList[x].PY * MainData.PxH);
					ctx.rotate(DefenseData.TurretList[x].Route);
						
					ctx.drawImage(
						Images[DefenseData.TurretList[x].File], 
						DefenseData.TurretList[x].TMX*DefenseData.TurretList[x].AnX, 
						DefenseData.TurretList[x].TMY, 
						DefenseData.TurretList[x].Width,
						DefenseData.TurretList[x].Height, 
						-(DefenseData.TurretList[x].Width/2)* MainData.PxW, 
						-(DefenseData.TurretList[x].Height/2)* MainData.PxH,
						DefenseData.TurretList[x].Width*MainData.PxW, 
						DefenseData.TurretList[x].Height*MainData.PxH);
						
					ctx.restore();
		
				}

				for (var x = 0; x < Skills.Turrets_2_Unlock; x++) {
				
					ctx.save();
					ctx.translate(DefenseData.SpecTurrets[x].PX * MainData.PxW, DefenseData.SpecTurrets[x].PY * MainData.PxH);
					ctx.rotate(DefenseData.SpecTurrets[x].Route);
						
					ctx.drawImage(
						Images[DefenseData.SpecTurrets[x].File], 
						DefenseData.SpecTurrets[x].TMX*DefenseData.SpecTurrets[x].AnX, 
						DefenseData.SpecTurrets[x].TMY, 
						DefenseData.SpecTurrets[x].Width,
						DefenseData.SpecTurrets[x].Height, 
						-(DefenseData.SpecTurrets[x].Width/2)* MainData.PxW, 
						-(DefenseData.SpecTurrets[x].Height/2)* MainData.PxH,
						DefenseData.SpecTurrets[x].Width*MainData.PxW, 
						DefenseData.SpecTurrets[x].Height*MainData.PxH);
						
					ctx.restore();
		
				}

				ctx.translate(DefenseData.Tower.PX * MainData.PxW, DefenseData.Tower.PY * MainData.PxH);
				ctx.rotate(DefenseData.Tower.Route);
					
				ctx.drawImage(Images[DefenseData.Tower.File], DefenseData.Tower.TMX*DefenseData.Tower.AnX, DefenseData.Tower.TMY, DefenseData.Tower.Width,DefenseData.Tower.Height, -(DefenseData.Tower.Width/2)* MainData.PxW, -(DefenseData.Tower.Height/2)* MainData.PxH,DefenseData.Tower.Width*MainData.PxW, DefenseData.Tower.Height*MainData.PxH);
				
				ctx.restore();
		
			} else if(y == 0){

				for (var i = 0; i < DefenseData.SwarmList.length; i++) {
		
					if(DefenseData.SwarmList[i] != null)
					ctx.drawImage(Images[DefenseData.SwarmList[i].File], DefenseData.Swarm.TMX * DefenseData.SwarmList[i].AnX, DefenseData.Swarm.TMY,DefenseData.Swarm.Width, DefenseData.Swarm.Height, DefenseData.SwarmList[i].PX * MainData.PxW, DefenseData.SwarmList[i].PY * MainData.PxH,(DefenseData.Swarm.Width*DefenseData.SwarmList[i].Size) * MainData.PxW, (DefenseData.Swarm.Height*DefenseData.SwarmList[i].Size) * MainData.PxH);
			
				}
		
				for (var x = 0; x < DefenseData.HitList.length; x++) {
					
					if(DefenseData.HitList[x] != null){
						
						ctx.drawImage(
							Images[DefenseData.HitList[x].File], 
							DefenseData.HitList[x].TMX*DefenseData.HitList[x].AnX, 
							DefenseData.HitList[x].TMY, 
							DefenseData.HitList[x].Width,
							DefenseData.HitList[x].Height, 
							DefenseData.HitList[x].PX * MainData.PxW, 
							DefenseData.HitList[x].PY * MainData.PxH,
							DefenseData.HitList[x].HWidth*MainData.PxW, 
							DefenseData.HitList[x].HHeight*MainData.PxH);
							
					}

				}

			}
			
			if(WindowData.ID[y]) TextDraw(WindowData.ID[y]);
			if(WindowData.SpecText[y]) SpecTextDraw(WindowData.SpecText[y]);

			ctx.restore();
            
		}
       
			ctx.save();

			ctx.translate(WindowData.PX*MainData.PxW, WindowData.PY*MainData.PxH);
			ctx.scale(WindowData.Scale, WindowData.Scale);

				for (var z = 0; z < 2; z++) 
				ProgressBarWin(SpecText["N"+z],WindowData.PBData[z]);
			
			ctx.restore();
            
		ctx.restore();


	}	

	function ShotMove(){

		for (var x = 0; x < DefenseData.ShotList.length; x++) {
		
			if(DefenseData.ShotList[x] != null){

				var Boom = false;

				DefenseData.ShotList[x].PX -= DefenseData.ShotList[x].MoveX;
				DefenseData.ShotList[x].PY -= DefenseData.ShotList[x].MoveY;
			
				for (var y = 0; y < DefenseData.SwarmList.length; y++) {

					if(DefenseData.ShotList[x] != null && DefenseData.SwarmList[y] != null){

						if(DefenseData.ShotList[x].Hit == "Shot_0_Hit"){

							if( DefenseData.ShotList[x].PX+DefenseData.ShotList[x].Width/2 > DefenseData.SwarmList[y].PX && 
								DefenseData.ShotList[x].PY+DefenseData.ShotList[x].Height/4 > DefenseData.SwarmList[y].PY && 
								DefenseData.ShotList[x].PX+DefenseData.ShotList[x].Width/2 < DefenseData.SwarmList[y].PX+DefenseData.Swarm.Width && 
								DefenseData.ShotList[x].PY+DefenseData.ShotList[x].Height/4 < DefenseData.SwarmList[y].PY+DefenseData.Swarm.Height){
								
							var Check = false, Num = 0;
	
							if(DefenseData.HitList.length > 1)
							for (var o = 0; o < DefenseData.HitList.length; o++) {
								
								if(DefenseData.HitList[o] == null){
		
									Check = true;
									Num = o;
		
								}
		
							}
		
							if(Check) {
								DefenseData.HitList[Num] = {
								
									File: DefenseData[DefenseData.ShotList[x].Hit].File,
									PX: DefenseData.ShotList[x].PX-Skills.Turrets_0_Circle/2,
									PY: DefenseData.ShotList[x].PY-Skills.Turrets_0_Circle/2,
									AnX: 0,
									MaxAnX: DefenseData[DefenseData.ShotList[x].Hit].MaxAnX,
									TMX: DefenseData[DefenseData.ShotList[x].Hit].TMX,
									TMY: 0,
									HWidth: Skills.Turrets_0_Circle,
									HHeight: Skills.Turrets_0_Circle,
									Width: DefenseData[DefenseData.ShotList[x].Hit].Width,
									Height: DefenseData[DefenseData.ShotList[x].Hit].Height,
									
								}
							}
							else
							DefenseData.HitList.push({
								
								File: DefenseData[DefenseData.ShotList[x].Hit].File,
								PX: DefenseData.ShotList[x].PX-Skills.Turrets_0_Circle/2,
								PY: DefenseData.ShotList[x].PY-Skills.Turrets_0_Circle/2,
								AnX: 0,
								MaxAnX: DefenseData[DefenseData.ShotList[x].Hit].MaxAnX,
								TMX: DefenseData[DefenseData.ShotList[x].Hit].TMX,
								TMY: 0,
								HWidth: Skills.Turrets_0_Circle,
								HHeight: Skills.Turrets_0_Circle,
								Width: DefenseData[DefenseData.ShotList[x].Hit].Width,
								Height: DefenseData[DefenseData.ShotList[x].Hit].Height,
								
							});	
		
							for (var m = 0; m < DefenseData.SwarmList.length; m++)	
							if(DefenseData.ShotList[x] != null && DefenseData.SwarmList[m] != null)
							if( (DefenseData.ShotList[x].PX+Skills.Turrets_0_Circle/2 > DefenseData.SwarmList[m].PX-DefenseData.Swarm.Width/2 && 
								DefenseData.ShotList[x].PY+Skills.Turrets_0_Circle/2 > DefenseData.SwarmList[m].PY-DefenseData.Swarm.Height/2 && 
								DefenseData.ShotList[x].PX-Skills.Turrets_0_Circle/2 < DefenseData.SwarmList[m].PX-DefenseData.Swarm.Width/2 && 
								DefenseData.ShotList[x].PY-Skills.Turrets_0_Circle/2 < DefenseData.SwarmList[m].PY-DefenseData.Swarm.Height/2) || (
									DefenseData.ShotList[x].PX+DefenseData.ShotList[x].Width/2 > DefenseData.SwarmList[m].PX && 
									DefenseData.ShotList[x].PY+DefenseData.ShotList[x].Height/4 > DefenseData.SwarmList[m].PY && 
									DefenseData.ShotList[x].PX+DefenseData.ShotList[x].Width/2 < DefenseData.SwarmList[m].PX+DefenseData.Swarm.Width && 
									DefenseData.ShotList[x].PY+DefenseData.ShotList[x].Height/4 < DefenseData.SwarmList[m].PY+DefenseData.Swarm.Height
								)){

									var Check = false, Num = 0;

									if(DefenseData.HitList.length > 1)
									for (var o = 0; o < DefenseData.HitList.length; o++) {
										
										if(DefenseData.HitList[o] == null){
				
											Check = true;
											Num = o;
				
										}
				
									}
				
									if(Check) {
										DefenseData.HitList[Num] = {
										
											File: DefenseData.Sworm_Hit.File,
											PX: DefenseData.SwarmList[m].PX,
											PY: DefenseData.SwarmList[m].PY,
											AnX: 0,
											MaxAnX: DefenseData.Sworm_Hit.MaxAnX,
											TMX: DefenseData.Sworm_Hit.TMX,
											TMY: 0,
											HWidth: DefenseData.Sworm_Hit.HWidth,
											HHeight: DefenseData.Sworm_Hit.HHeight,
											Width: DefenseData.Sworm_Hit.Width,
											Height: DefenseData.Sworm_Hit.Height,
											
										}
									}
									else
									DefenseData.HitList.push({
										
										File: DefenseData.Sworm_Hit.File,
										PX: DefenseData.SwarmList[m].PX,
										PY: DefenseData.SwarmList[m].PY,
										AnX: 0,
										MaxAnX: DefenseData.Sworm_Hit.MaxAnX,
										TMX: DefenseData.Sworm_Hit.TMX,
										TMY: 0,
										HWidth: DefenseData.Sworm_Hit.HWidth,
										HHeight: DefenseData.Sworm_Hit.HHeight,
										Width: DefenseData.Sworm_Hit.Width,
										Height: DefenseData.Sworm_Hit.Height,
										
									});
	
									AddData.Money += 1*Wave.Wave;
									AddData.SwarmKill ++;
									SpecText.N2 = AddData.SwarmKill;
									SpecText.N3 = fnum(AddData.Money);
									
									DefenseData.SwarmList[m] = null;

									AddData.WaveLive--;
				
									SpecText.N4 = AddData.WaveLive;
				
									if(AddData.WaveLive == 0){
											
										NextWave();

									}
	
							}

							DefenseData.ShotList[x] = null;
			
							}

						} else {

							if(
							DefenseData.ShotList[x].PX+DefenseData.ShotList[x].Width/2 > DefenseData.SwarmList[y].PX && 
							DefenseData.ShotList[x].PY+DefenseData.ShotList[x].Height/4 > DefenseData.SwarmList[y].PY && 
							DefenseData.ShotList[x].PX+DefenseData.ShotList[x].Width/2 < DefenseData.SwarmList[y].PX+DefenseData.Swarm.Width && 
							DefenseData.ShotList[x].PY+DefenseData.ShotList[x].Height/4 < DefenseData.SwarmList[y].PY+DefenseData.Swarm.Height){
							
								var Check = false, Num = 0;
	
								if(DefenseData.HitList.length > 1)
								for (var o = 0; o < DefenseData.HitList.length; o++) {
									
									if(DefenseData.HitList[o] == null){
	
										Check = true;
										Num = o;
	
									}
	
								}
	
								if(Check) {
									DefenseData.HitList[Num] = {
									
										File: DefenseData[DefenseData.ShotList[x].Hit].File,
										PX: DefenseData.ShotList[x].PX-DefenseData[DefenseData.ShotList[x].Hit].Width/2,
										PY: DefenseData.ShotList[x].PY-DefenseData[DefenseData.ShotList[x].Hit].Height/2,
										AnX: 0,
										MaxAnX: DefenseData[DefenseData.ShotList[x].Hit].MaxAnX,
										TMX: DefenseData[DefenseData.ShotList[x].Hit].TMX,
										TMY: 0,
										Width: DefenseData[DefenseData.ShotList[x].Hit].Width,
										Height: DefenseData[DefenseData.ShotList[x].Hit].Height,
										HWidth: DefenseData[DefenseData.ShotList[x].Hit].Width,
										HHeight: DefenseData[DefenseData.ShotList[x].Hit].Height,
										
									}
								}
								else
								DefenseData.HitList.push({
									
									File: DefenseData[DefenseData.ShotList[x].Hit].File,
									PX: DefenseData.ShotList[x].PX-DefenseData[DefenseData.ShotList[x].Hit].Width/2,
									PY: DefenseData.ShotList[x].PY-DefenseData[DefenseData.ShotList[x].Hit].Height/2,
									AnX: 0,
									MaxAnX: DefenseData[DefenseData.ShotList[x].Hit].MaxAnX,
									TMX: DefenseData[DefenseData.ShotList[x].Hit].TMX,
									TMY: 0,
									Width: DefenseData[DefenseData.ShotList[x].Hit].Width,
									Height: DefenseData[DefenseData.ShotList[x].Hit].Height,
									HWidth: DefenseData[DefenseData.ShotList[x].Hit].Width,
									HHeight: DefenseData[DefenseData.ShotList[x].Hit].Height,
									
								});	
	
								Check = false; Num = 0;
	
								if(DefenseData.HitList.length > 1)
								for (var o = 0; o < DefenseData.HitList.length; o++) {
									
									if(DefenseData.HitList[o] == null){
	
										Check = true;
										Num = o;
	
									}
	
								}
	
								if(Check) {
									DefenseData.HitList[Num] = {
									
										File: DefenseData.Sworm_Hit.File,
										PX: DefenseData.ShotList[x].PX-DefenseData.Sworm_Hit.Width/2,
										PY: DefenseData.ShotList[x].PY-DefenseData.Sworm_Hit.Height/2,
										AnX: 0,
										MaxAnX: DefenseData.Sworm_Hit.MaxAnX,
										TMX: DefenseData.Sworm_Hit.TMX,
										TMY: 0,
										Width: DefenseData.Sworm_Hit.Width,
										Height: DefenseData.Sworm_Hit.Height,
										HWidth: DefenseData.Sworm_Hit.Width,
										HHeight: DefenseData.Sworm_Hit.Height,
										
									}
								}
								else
								DefenseData.HitList.push({
									
									File: DefenseData.Sworm_Hit.File,
									PX: DefenseData.ShotList[x].PX-DefenseData.Sworm_Hit.Width/2,
									PY: DefenseData.ShotList[x].PY-DefenseData.Sworm_Hit.Height/2,
									AnX: 0,
									MaxAnX: DefenseData.Sworm_Hit.MaxAnX,
									TMX: DefenseData.Sworm_Hit.TMX,
									TMY: 0,
									Width: DefenseData.Sworm_Hit.Width,
									Height: DefenseData.Sworm_Hit.Height,
									HWidth: DefenseData.Sworm_Hit.Width,
									HHeight: DefenseData.Sworm_Hit.Height,
									
								});	
	
								DefenseData.ShotList[x] = null;
								DefenseData.SwarmList[y] = null;
	
								AddData.Money += 1*Wave.Wave;
								AddData.SwarmKill ++;
								SpecText.N2 = AddData.SwarmKill;
								SpecText.N3 = fnum(AddData.Money);
								
								AddData.WaveLive--;
	
								SpecText.N4 = AddData.WaveLive;
	
								if(AddData.WaveLive == 0){
										
									NextWave();

								}
	
							}
		
						}

					}

				}

				if(DefenseData.ShotList[x] != null && (DefenseData.Rect.PY > DefenseData.ShotList[x].PY || DefenseData.Rect.PX > DefenseData.ShotList[x].PX || DefenseData.Rect.PX+DefenseData.Rect.Width < DefenseData.ShotList[x].PX))
				DefenseData.ShotList[x] = null;
						
			}
				
		}

	}

	function SpawnShot(radians,mouse_x,mouse_y,center_x,center_y){
		
		var Check = false, x = 0, Num = 0;

		if(DefenseData.ShotList.length > 1)
		for (var x = 0; x < DefenseData.ShotList.length; x++) {
			
			if(DefenseData.ShotList[x] == null){

				Check = true;
				Num = x;

			}

		}

		if(Check) {
			DefenseData.ShotList[Num] = {
					
				PX: DefenseData.Tower.PX, 
				PY: DefenseData.Tower.PY,
				MoveX: (((center_x-mouse_x)/(Math.abs(center_x-mouse_x)+Math.abs(center_y-mouse_y)))*DefenseData.Shot.Speed),
				MoveY: (((center_y-mouse_y)/(Math.abs(center_x-mouse_x)+Math.abs(center_y-mouse_y)))*DefenseData.Shot.Speed),
				Route: radians,
				File: DefenseData.Shot.File,
				Width: DefenseData.Shot.Width,
				Height: DefenseData.Shot.Height,
				Hit: DefenseData.Shot.Hit,
				
			} 
		}
		else
		DefenseData.ShotList.push({
				
			PX: DefenseData.Tower.PX, 
			PY: DefenseData.Tower.PY,
			MoveX: (((center_x-mouse_x)/(Math.abs(center_x-mouse_x)+Math.abs(center_y-mouse_y)))*DefenseData.Shot.Speed),
			MoveY: (((center_y-mouse_y)/(Math.abs(center_x-mouse_x)+Math.abs(center_y-mouse_y)))*DefenseData.Shot.Speed),
			Route: radians,
			File: DefenseData.Shot.File,
			Width: DefenseData.Shot.Width,
			Height: DefenseData.Shot.Height,
			Hit: DefenseData.Shot.Hit,
			
		});	

	}

	function AddSworm(){
			
		if(AddData.Waves > 0){
			
			AddData.Waves--;

			for (var z = 0; z < Wave.Spawn; z++) {
	
				var Check = false, Num = 0;
	
				if(DefenseData.SwarmList.length > 1)
				for (var x = 0; x < DefenseData.SwarmList.length; x++) {
					
					if(DefenseData.SwarmList[x] == null){
	
						Check = true;
						Num = x;
	
					}
	
				}
	
				if(Check) {
					DefenseData.SwarmList[Num] = {
					
						File: "Sworm_0",
						PX: Math.floor((Math.random() * 930)+50), 
						PY: Math.floor(Math.random() * 100),
						AnX: Math.floor((Math.random() * 2) + 1),
						Size: 1,
						
					}
				}
				else
				DefenseData.SwarmList.push({
					
					File: "Sworm_0",
					PX: Math.floor((Math.random() * 930)+50), 
					PY: Math.floor(Math.random() * 100),
					AnX: Math.floor((Math.random() * 2) + 1),
					Size: 1,
					
				});	
	
			}
		
		}

		DefenseData.AddSworm = setTimeout(AddSworm,Wave.SpeedSpawn);

	}

	function AnimationsGame(){

		for (var x = 0; x < DefenseData.HitList.length; x++){
			
			if(DefenseData.HitList[x] != null){

				DefenseData.HitList[x].AnX++; 
				if (DefenseData.HitList[x].AnX == DefenseData.HitList[x].MaxAnX) DefenseData.HitList[x] = null;	

			}

		}

	}

	function SwormMove(){

		for (var i = 0; i < DefenseData.SwarmList.length; i++) {
			
				if(DefenseData.SwarmList[i] != null){
					
					DefenseData.SwarmList[i].AnX++; if (DefenseData.SwarmList[i].AnX == 4) DefenseData.SwarmList[i].AnX = 0;
					
					if(Math.floor(Math.random() * 2) == 1){

						if(DefenseData.SwarmList[i].PX > 930)
						DefenseData.SwarmList[i].PX -= DefenseData.SwarmMove[(Math.floor(Math.random() * 2)+1)];
						else DefenseData.SwarmList[i].PX += DefenseData.SwarmMove[(Math.floor(Math.random() * 2)+1)];
						
						DefenseData.SwarmList[i].Route = -6;
		
					} else {
		
						if(DefenseData.SwarmList[i].PX < 50)
						DefenseData.SwarmList[i].PX += DefenseData.SwarmMove[(Math.floor(Math.random() * 2)+1)];
						else DefenseData.SwarmList[i].PX -= DefenseData.SwarmMove[(Math.floor(Math.random() * 2)+1)];

						DefenseData.SwarmList[i].Route = 6;
		
					}

					DefenseData.SwarmList[i].PY += Math.floor((Math.random() * 5 + Wave.SwarmSpeed));

					if(DefenseData.SwarmList[i].PY > 1470){

						DefenseData.SwarmList[i] = null; 
						
						Skills.FortLive --;
						SpecText.N1 = Skills.FortLive;

						AddData.WaveLive--;

						SpecText.N4 = AddData.WaveLive;

						if(AddData.WaveLive == 0 && Skills.FortLive != 0){
						
							NextWave();

						} else if(Skills.FortLive == 0){
							
							DefenseData.SwarmList = [];

							for (var b = 0; b < Skills.Turrets_1_Unlock; b++) 
							DefenseData.TurretList[b].Target = null;
					
							for (var b = 0; b < Skills.Turrets_2_Unlock; b++) 
							DefenseData.SpecTurrets[b].Target = null;

							Skills.FortLive = Skills.MaxFortLive;
							SpecText.N1 = Skills.FortLive;

							AddData.Spawn = JSON.parse(JSON.stringify(Wave.Spawn));

							AddData.WaveLive = Wave.Waves*Wave.Spawn;
							Wave.WavesLive = AddData.WaveLive;

							AddData.Waves = Wave.Waves;

							SpecText.N4 = AddData.WaveLive;

							SaveData();

						} 

					}
		
				}

		}

		TurretMove();

	}

	function TurretMove(){
		
		for (var i = 0; i < DefenseData.SwarmList.length; i++) {
			
			for (var x = 0; x < Skills.Turrets_1_Unlock; x++) {

				if(DefenseData.SwarmList[i] != null && DefenseData.TurretList[x].Target == null){
			
					DefenseData.TurretList[x].Target = i; 
					x = Skills.Turrets_1_Unlock;
	
				} else if(DefenseData.SwarmList[i] == null && DefenseData.TurretList[x].Target == i){
	
					DefenseData.TurretList[x].Target = null;
	
				}

			}
		
			for (var x = 0; x < Skills.Turrets_2_Unlock; x++) {

				if(DefenseData.SwarmList[i] != null && DefenseData.SpecTurrets[x].Target == null){
			
					DefenseData.SpecTurrets[x].Target = i; 
					x = Skills.Turrets_2_Unlock;
	
					//DefenseData.SpecTurrets[x].TPX = DefenseData.SwarmList[i].PX;
					//DefenseData.SpecTurrets[x].TPY = DefenseData.SwarmList[i].PY;

				} else if(DefenseData.SwarmList[i] == null && DefenseData.SpecTurrets[x].Target == i){
	
					DefenseData.SpecTurrets[x].Target = null;
	
				}

			}

		}

		for (var x = 0; x < Skills.Turrets_1_Unlock; x++) {
			
			if(DefenseData.TurretList[x].Target != null){

				var center_x = DefenseData.TurretList[x].PX,
					center_y = DefenseData.TurretList[x].PY;

				radians = Math.atan2(DefenseData.SwarmList[DefenseData.TurretList[x].Target].PX - center_x, DefenseData.SwarmList[DefenseData.TurretList[x].Target].PY - center_y);
			
				DefenseData.TurretList[x].Route = radians * -1;

			} 

		}

		for (var x = 0; x < Skills.Turrets_2_Unlock; x++) {
			
			if(DefenseData.SpecTurrets[x].Target != null){

				var center_x = DefenseData.SpecTurrets[x].PX,
					center_y = DefenseData.SpecTurrets[x].PY;

				radians = Math.atan2(DefenseData.SwarmList[DefenseData.SpecTurrets[x].Target].PX - center_x, DefenseData.SwarmList[DefenseData.SpecTurrets[x].Target].PY - center_y);
			
				DefenseData.SpecTurrets[x].Route = radians * -1;

			} 

		}

	}

	function TurretShot(){
		
		for (var y = 0; y < Skills.Turrets_1_Unlock; y++) {

			if(DefenseData.SwarmList[DefenseData.TurretList[y].Target] != null){

				var center_x = DefenseData.TurretList[y].PX,
				    center_y = DefenseData.TurretList[y].PY;

				var Check = false, x = 0, Num = 0;

				if(DefenseData.ShotList.length > 1)
				for (var x = 0; x < DefenseData.ShotList.length; x++) {
					
					if(DefenseData.ShotList[x] == null){
		
						Check = true;
						Num = x;
		
					}
		
				}
		
				if(Check) {
					DefenseData.ShotList[Num] = {
							
						PX: center_x, 
						PY: center_y,
						MoveX: (((center_x-DefenseData.SwarmList[DefenseData.TurretList[y].Target].PX)/(Math.abs(center_x-DefenseData.SwarmList[DefenseData.TurretList[y].Target].PX)+Math.abs(center_y-DefenseData.SwarmList[DefenseData.TurretList[y].Target].PY)))*DefenseData.TurretShot.Speed),
						MoveY: (((center_y-DefenseData.SwarmList[DefenseData.TurretList[y].Target].PY)/(Math.abs(center_x-DefenseData.SwarmList[DefenseData.TurretList[y].Target].PX)+Math.abs(center_y-DefenseData.SwarmList[DefenseData.TurretList[y].Target].PY)))*DefenseData.TurretShot.Speed),
						Route: Math.atan2(DefenseData.SwarmList[DefenseData.TurretList[y].Target].PX - center_x, DefenseData.SwarmList[DefenseData.TurretList[y].Target].PY - center_y) * -1,
						File: DefenseData.TurretShot.File,
						Width: DefenseData.TurretShot.Width,
						Height: DefenseData.TurretShot.Height,
						Hit: DefenseData.TurretShot.Hit,
						
					} 
				}
				else
				DefenseData.ShotList.push({
						
					PX: center_x, 
					PY: center_y,
					MoveX: (((center_x-DefenseData.SwarmList[DefenseData.TurretList[y].Target].PX)/(Math.abs(center_x-DefenseData.SwarmList[DefenseData.TurretList[y].Target].PX)+Math.abs(center_y-DefenseData.SwarmList[DefenseData.TurretList[y].Target].PY)))*DefenseData.TurretShot.Speed),
					MoveY: (((center_y-DefenseData.SwarmList[DefenseData.TurretList[y].Target].PY)/(Math.abs(center_x-DefenseData.SwarmList[DefenseData.TurretList[y].Target].PX)+Math.abs(center_y-DefenseData.SwarmList[DefenseData.TurretList[y].Target].PY)))*DefenseData.TurretShot.Speed),
					Route: Math.atan2(DefenseData.SwarmList[DefenseData.TurretList[y].Target].PX - center_x, DefenseData.SwarmList[DefenseData.TurretList[y].Target].PY - center_y) * -1,
					File: DefenseData.TurretShot.File,
					Width: DefenseData.TurretShot.Width,
					Height: DefenseData.TurretShot.Height,
					Hit: DefenseData.TurretShot.Hit,
					
				});		
			
			}

		}

		DefenseData.TurretShotList = setTimeout(TurretShot,Skills.Turrets_1_SPEED);
	}

	function SpecTurretShot(){

		for (var y = 0; y < Skills.Turrets_2_Unlock; y++) {

			if(DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target] != null){ // || DefenseData.SpecTurrets[x].TPX != null){

				var center_x = DefenseData.SpecTurrets[y].PX,
				    center_y = DefenseData.SpecTurrets[y].PY;

				var Check = false, x = 0, Num = 0;

				if(DefenseData.ShotList.length > 1)
				for (var x = 0; x < DefenseData.ShotList.length; x++) {
					
					if(DefenseData.ShotList[x] == null){
		
						Check = true;
						Num = x;
		
					}
		
				}
		
				if(Check) {
					DefenseData.ShotList[Num] = {
							
						PX: center_x, 
						PY: center_y,
						MoveX: (((center_x-DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PX)/(Math.abs(center_x-DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PX)+Math.abs(center_y-DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PY)))*DefenseData.Shot.Speed),
						MoveY: (((center_y-DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PY)/(Math.abs(center_x-DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PX)+Math.abs(center_y-DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PY)))*DefenseData.Shot.Speed),
						Route: Math.atan2(DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PX - center_x, DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PY - center_y) * -1,
						File: DefenseData.Shot.File,
						Width: DefenseData.Shot.Width,
						Height: DefenseData.Shot.Height,
						Hit: DefenseData.Shot.Hit,
						
					} 
				}
				else
				DefenseData.ShotList.push({
						
					PX: center_x, 
					PY: center_y,
					MoveX: (((center_x-DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PX)/(Math.abs(center_x-DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PX)+Math.abs(center_y-DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PY)))*DefenseData.Shot.Speed),
					MoveY: (((center_y-DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PY)/(Math.abs(center_x-DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PX)+Math.abs(center_y-DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PY)))*DefenseData.Shot.Speed),
					Route: Math.atan2(DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PX - center_x, DefenseData.SwarmList[DefenseData.SpecTurrets[y].Target].PY - center_y) * -1,
					File: DefenseData.Shot.File,
					Width: DefenseData.Shot.Width,
					Height: DefenseData.Shot.Height,
					Hit: DefenseData.Shot.Hit,
					
				});		
			
				//DefenseData.SpecTurrets[x].TPX = null;
				//DefenseData.SpecTurrets[x].TPY = null;

			}

		}

		DefenseData.SpecTurretShotList = setTimeout(SpecTurretShot,Skills.Turrets_2_SPEED);
	}

	function Stats(){

		AddData.Sec++;

		if(AddData.Sec == 60){
			AddData.Sec = 0;
			AddData.Minute++;
		}

		if(AddData.Minute == 60){
			AddData.Minute = 0;
			AddData.Hour ++;
		}

	}

	function NextWave(){

		DefenseData.SwarmList = [];

		for (var b = 0; b < Skills.Turrets_1_Unlock; b++) 
		DefenseData.TurretList[b].Target = null;

		for (var b = 0; b < Skills.Turrets_2_Unlock; b++) 
		DefenseData.SpecTurrets[b].Target = null;
		
		Skills.FortLive = Skills.MaxFortLive;
		SpecText.N1 = Skills.FortLive;

		Wave.Wave++;
				
		if(Wave.Spawn < 200)
		Wave.Spawn += Wave.SpawnIncrease;
		
		if(Wave.Waves >= 7 && Wave.SpeedSpawn == 760 && Wave.Spawn < 450){
		
			Wave.Spawn += Wave.SpawnIncrease;
			Wave.SwarmSpeed += 0.1;

		}

		if(Wave.Waves > 2 && Wave.SpeedSpawn != 760){

			Wave.SpeedSpawn -= Wave.SpeedSpawnIncrease;
			Wave.Spawn += 5;

		}

		if((Wave.Wave / 10) == Wave.Waves && Wave.Waves != 10){
		
			Wave.Waves ++;
			Wave.SwarmSpeed += 0.2;

		}

		AddData.Spawn = JSON.parse(JSON.stringify(Wave.Spawn));
		
		AddData.WaveLive = Wave.Waves*Wave.Spawn;
		Wave.WavesLive = AddData.WaveLive;

		AddData.Waves = Wave.Waves;

		SpecText.N4 = AddData.WaveLive;

		if(Wave.Waves >= 7 && Wave.SpeedSpawn == 760 && Wave.Spawn >= 450){

			if(Wave.SwarmSpeed < 7)
			Wave.SwarmSpeed += 0.3;

		}

		if(Wave.SwarmSpeed >= 7 && !AddData.FinishGame){

			console.log("Koniec");
			AddData.FinishGame = true;
			AddData.FinishCounter ++;
			
			FinishData();

		}

		SaveData();

	}

	function AutoShot(){
	
		if(AddData.mouse_y < (DefenseData.Rect.PY+DefenseData.Rect.Height)* MainData.PxH){

			var Check = false, x = 0, Num = 0;

			if(DefenseData.ShotList.length > 1)
			for (var x = 0; x < DefenseData.ShotList.length; x++) {
				
				if(DefenseData.ShotList[x] == null){
	
					Check = true;
					Num = x;
	
				}
	
			}
	
			if(Check) {
				DefenseData.ShotList[Num] = {
					
					PX: DefenseData.Tower.PX, 
					PY: DefenseData.Tower.PY,
					MoveX: (((AddData.center_x-AddData.mouse_x)/(Math.abs(AddData.center_x-AddData.mouse_x)+Math.abs(AddData.center_y-AddData.mouse_y)))*DefenseData.Shot.Speed),
					MoveY: (((AddData.center_y-AddData.mouse_y)/(Math.abs(AddData.center_x-AddData.mouse_x)+Math.abs(AddData.center_y-AddData.mouse_y)))*DefenseData.Shot.Speed),
					Route: DefenseData.Tower.Route,
					File: DefenseData.Shot.File,
					Width: DefenseData.Shot.Width,
					Height: DefenseData.Shot.Height,
					Hit: DefenseData.Shot.Hit,
				
				} 
			}
			else
			DefenseData.ShotList.push({
					
				PX: DefenseData.Tower.PX, 
				PY: DefenseData.Tower.PY,
				MoveX: (((AddData.center_x-AddData.mouse_x)/(Math.abs(AddData.center_x-AddData.mouse_x)+Math.abs(AddData.center_y-AddData.mouse_y)))*DefenseData.Shot.Speed),
				MoveY: (((AddData.center_y-AddData.mouse_y)/(Math.abs(AddData.center_x-AddData.mouse_x)+Math.abs(AddData.center_y-AddData.mouse_y)))*DefenseData.Shot.Speed),
				Route: DefenseData.Tower.Route,
				File: DefenseData.Shot.File,
				Width: DefenseData.Shot.Width,
				Height: DefenseData.Shot.Height,
				Hit: DefenseData.Shot.Hit,
				
			});	

		}


	}