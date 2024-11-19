
	var Images = {

            "Background_0": document.createElement("img"),
            "Background_1": document.createElement("img"),
            "Background_2": document.createElement("img"),
            "Background_3": document.createElement("img"),
            "Background_4": document.createElement("img"),
            "Background_5": document.createElement("img"),
            "Inter_0": document.createElement("img"),
            "Inter_1": document.createElement("img"),
            "Inter_2": document.createElement("img"),
            "red": document.createElement("img"),
            "Tower_0": document.createElement("img"),
            "Turret_0": document.createElement("img"),
            "Turret_1": document.createElement("img"),
            "Shot_0": document.createElement("img"),
            "Shot_1": document.createElement("img"),
            "Sworm_0": document.createElement("img"),
            "Shot_0_Hit": document.createElement("img"),
            "Shot_1_Hit": document.createElement("img"),
            "Sworm_Hit": document.createElement("img"),
            "Button_0": document.createElement("img"),
            "Button_1": document.createElement("img"),
            "Button_2": document.createElement("img"),
            "Button_3": document.createElement("img"),
            "Button_4": document.createElement("img"),
            "Button_6": document.createElement("img"),
            "Button_7": document.createElement("img"),
            "Button_8": document.createElement("img"),
            "Button_9": document.createElement("img"),
            "Black": document.createElement("img"),

        };
        
        Images.Background_0.src = "img/Background_0.png";
        Images.Background_1.src = "img/Background_1.png";
        Images.Background_2.src = "img/Background_2.png";
        Images.Background_3.src = "img/Background_3.png";
        Images.Background_4.src = "img/Background_4.png";
        Images.Background_5.src = "img/Background_5.png";
        Images.Inter_0.src = "img/Inter_0.png";
        Images.Inter_1.src = "img/Inter_1.png";
        Images.Inter_2.src = "img/Inter_2.png";
        Images.red.src = "img/red.png";
        Images.Tower_0.src = "img/Tower_0.png";
        Images.Turret_0.src = "img/Turret_0.png";
        Images.Turret_1.src = "img/Turret_1.png";
        Images.Shot_0.src = "img/Shot_0.png";
        Images.Shot_1.src = "img/Shot_1.png";
        Images.Sworm_0.src = "img/Sworm_0.png";
        Images.Shot_0_Hit.src = "img/Shot_0_Hit.png";
        Images.Shot_1_Hit.src = "img/Shot_1_Hit.png";
        Images.Sworm_Hit.src = "img/Sworm_Hit.png";
        Images.Button_0.src = "img/Button_0.png";
        Images.Button_1.src = "img/Button_1.png";
        Images.Button_2.src = "img/Button_2.png";
        Images.Button_3.src = "img/Button_3.png";
        Images.Button_4.src = "img/Button_4.png";
        Images.Button_6.src = "img/Button_6.png";
        Images.Button_7.src = "img/Button_7.png";
        Images.Button_8.src = "img/Button_8.png";
        Images.Button_9.src = "img/Button_9.png";
        Images.Black.src = "img/Black.png";

        TextFile = {

            "Alphabet_1":{
                
                "Fun": function TextNumber(TextNumber,Split){  
	
                    if(TextNumber == ' ') return ["_",0.7,0];
                    
                    if(TextNumber == '0') return ["_0",0.95,0];
                    if(TextNumber == '1') return ["_1",0.7,0];
                    if(TextNumber == '2') return ["_2",1,0];
                    if(TextNumber == '3') return ["_3",1,0];
                    if(TextNumber == '4') return ["_4",1,0];
                    if(TextNumber == '5') return ["_5",1,0];
                    if(TextNumber == '6') return ["_6",1,0];
                    if(TextNumber == '7') return ["_7",1,0];
                    if(TextNumber == '8') return ["_8",1,0];
                    if(TextNumber == '9') return ["_9",1,0];
            
                    if(TextNumber == 'e') return ["_e",0.9,0];
                    if(TextNumber == 't') return ["_t",0.6,0];
                    if(TextNumber == 'a') return ["_a",1,0];
                    if(TextNumber == 'o') return ["_o",0.9,0];
                    if(TextNumber == 'i') return ["_i",0.2,0];
                    if(TextNumber == 'n') return ["_n",0.8,0];
                    if(TextNumber == 's') return ["_s",0.8,0];
                    if(TextNumber == 'h') return ["_h",0.9,0];
                    if(TextNumber == 'r') return ["_r",0.9,0];
                    if(TextNumber == 'd') return ["_d",0.9,0];
                    if(TextNumber == 'l') return ["_l",0.25,0];
                    if(TextNumber == 'c') return ["_c",0.8,0];
                    if(TextNumber == 'u') return ["_u",0.7,0];
                    if(TextNumber == 'm') return ["_m",0.95,0];
                    if(TextNumber == 'w') return ["_w",0.9,0];
                    if(TextNumber == 'f') return ["_f",0.6,0];
                    if(TextNumber == 'g') return ["_g",0.9,24*Split];
                    if(TextNumber == 'y') return ["_y",0.9,24*Split];
                    if(TextNumber == 'p') return ["_p",0.9,24*Split];
                    if(TextNumber == 'b') return ["_b",0.9,0];
                    if(TextNumber == 'v') return ["_v",0.9,0];
                    if(TextNumber == 'k') return ["_k",0.8,0];
                    if(TextNumber == 'j') return ["_j",0.5,19*Split];
                    if(TextNumber == 'x') return ["_x",0.9,0];
                    if(TextNumber == 'q') return ["_q",0.9,21*Split];
                    if(TextNumber == 'z') return ["_z",0.9,0];
                    
                    if(TextNumber == 'E') return ["E",0.9,0];
                    if(TextNumber == 'T') return ["T",0.9,0];
                    if(TextNumber == 'A') return ["A",0.9,0];
                    if(TextNumber == 'O') return ["O",0.9,0];
                    if(TextNumber == 'I') return ["I",0.4,0];
                    if(TextNumber == 'N') return ["N",0.9,0];
                    if(TextNumber == 'S') return ["S",0.9,0];
                    if(TextNumber == 'H') return ["H",0.9,0];
                    if(TextNumber == 'R') return ["R",0.9,0];
                    if(TextNumber == 'D') return ["D",0.9,0];
                    if(TextNumber == 'L') return ["L",0.9,0];
                    if(TextNumber == 'C') return ["C",0.9,0];
                    if(TextNumber == 'U') return ["U",0.9,0];
                    if(TextNumber == 'M') return ["M",0.9,0];
                    if(TextNumber == 'W') return ["W",0.9,0];
                    if(TextNumber == 'F') return ["F",0.9,0];
                    if(TextNumber == 'G') return ["G",0.9,0];
                    if(TextNumber == 'Y') return ["Y",0.9,0];
                    if(TextNumber == 'P') return ["P",0.9,0];
                    if(TextNumber == 'B') return ["B",0.9,0];
                    if(TextNumber == 'V') return ["V",0.9,0];
                    if(TextNumber == 'K') return ["K",0.9,0];
                    if(TextNumber == 'J') return ["J",0.9,0];
                    if(TextNumber == 'X') return ["X",0.9,0];
                    if(TextNumber == 'Q') return ["Q",0.9,0];
                    if(TextNumber == 'Z') return ["Z",0.9,0];
            
                    if(TextNumber == 'ę') return ["_pl_e",0.9,0];
                    if(TextNumber == 'ą') return ["_pl_a",1,0];
                    if(TextNumber == 'ó') return ["_pl_o",0.9,0];
                    if(TextNumber == 'ż') return ["_pl_z0",0.9,0];
                    if(TextNumber == 'ś') return ["_pl_s",0.8,0];
                    if(TextNumber == 'ć') return ["_pl_c",0.7,0];
                    if(TextNumber == 'ń') return ["_pl_n",0.8,0];
                    if(TextNumber == 'ź') return ["_pl_z1",0.9,0];
                    if(TextNumber == 'ł') return ["_pl_l",0.4,0];
            
                    if(TextNumber == 'Ę') return ["pl_E",0.9,0];
                    if(TextNumber == 'Ą') return ["pl_A",0.9,0];
                    if(TextNumber == 'Ó') return ["pl_O",0.9,0];
                    if(TextNumber == 'Ż') return ["pl_Z0",0.9,0];
                    if(TextNumber == 'Ś') return ["pl_S",0.9,0];
                    if(TextNumber == 'Ć') return ["pl_C",0.9,0];
                    if(TextNumber == 'Ń') return ["pl_N",0.9,0];
                    if(TextNumber == 'Ź') return ["pl_Z1",0.9,0];
                    if(TextNumber == 'Ł') return ["pl_L",0.9,0];
            
                    if(TextNumber == ',') return ["S11",0.6,3*Split]; // ,
                    if(TextNumber == '.') return ["S0",0.3,0]; // .
            
                    if(TextNumber == '^') return ["S3",1,0]; // ^
                    if(TextNumber == '+') return ["S8",0.8,0]; // +
                    if(TextNumber == '(') return ["S1",0.3,0]; // (
                    if(TextNumber == ')') return ["S2",0.3,0]; // )
                     if(TextNumber == ':') return ["S5",1,0]; // ' : '
                    if(TextNumber == '?') return ["S6",0.8,0]; // ':  '
                   // if(TextNumber == '/') return ["S4",0.6,0]; // /
                    if(TextNumber == '%') return ["S7",1,0]; // %
                    if(TextNumber == '/') return ["S9",0.4,0]; // =
                    if(TextNumber == '-') return ["S10",0.4,0]; // -
                    if(TextNumber == '<') return ["S12",0.55,0]; // <
                    if(TextNumber == '>') return ["S13",0.65,0]; // >
                    if(TextNumber == '!') return ["S14",1,0]; // OK
                    
                    return ["_",0.7,0];
            
                },
            
                "_0": document.createElement("img"),
                "_1": document.createElement("img"),
                "_2": document.createElement("img"),
                "_3": document.createElement("img"),
                "_4": document.createElement("img"),
                "_5": document.createElement("img"),
                "_6": document.createElement("img"),
                "_7": document.createElement("img"),
                "_8": document.createElement("img"),
                "_9": document.createElement("img"),

                "_": document.createElement("img"),
                "S0": document.createElement("img"),
                "S1": document.createElement("img"),
                "S2": document.createElement("img"),
                "S3": document.createElement("img"),
                "S4": document.createElement("img"),
                "S5": document.createElement("img"),
                "S6": document.createElement("img"),
                "S7": document.createElement("img"),
                "S8": document.createElement("img"),
                "S9": document.createElement("img"),
                "S10": document.createElement("img"),
                "S11": document.createElement("img"),
                "S12": document.createElement("img"),
                "S13": document.createElement("img"),
                "S14": document.createElement("img"),

                "A": document.createElement("img"),
                "B": document.createElement("img"),
                "C": document.createElement("img"),
                "D": document.createElement("img"),
                "E": document.createElement("img"),
                "F": document.createElement("img"),
                "G": document.createElement("img"),
                "H": document.createElement("img"),
                "I": document.createElement("img"),
                "J": document.createElement("img"),
                "K": document.createElement("img"),
                "L": document.createElement("img"),
                "M": document.createElement("img"),
                "N": document.createElement("img"),
                "O": document.createElement("img"),
                "P": document.createElement("img"),
                "Q": document.createElement("img"),
                "R": document.createElement("img"),
                "S": document.createElement("img"),
                "T": document.createElement("img"),
                "U": document.createElement("img"),
                "V": document.createElement("img"),
                "W": document.createElement("img"),
                "X": document.createElement("img"),
                "Y": document.createElement("img"),
                "Z": document.createElement("img"),

                "pl_A": document.createElement("img"),  
                "pl_C": document.createElement("img"),   
                "pl_E": document.createElement("img"),   
                "pl_L": document.createElement("img"),   
                "pl_N": document.createElement("img"), 
                "pl_O": document.createElement("img"),   
                "pl_S": document.createElement("img"),   
                "pl_Z0": document.createElement("img"),   
                "pl_Z1": document.createElement("img"),      

                "_a": document.createElement("img"),
                "_b": document.createElement("img"),
                "_c": document.createElement("img"),
                "_d": document.createElement("img"),
                "_e": document.createElement("img"),
                "_f": document.createElement("img"),
                "_g": document.createElement("img"),
                "_h": document.createElement("img"),
                "_i": document.createElement("img"),
                "_j": document.createElement("img"),
                "_k": document.createElement("img"),
                "_l": document.createElement("img"),
                "_m": document.createElement("img"),
                "_n": document.createElement("img"),
                "_o": document.createElement("img"),
                "_p": document.createElement("img"),
                "_q": document.createElement("img"),
                "_r": document.createElement("img"),
                "_s": document.createElement("img"),
                "_t": document.createElement("img"),
                "_u": document.createElement("img"),
                "_v": document.createElement("img"),
                "_w": document.createElement("img"),
                "_x": document.createElement("img"),
                "_y": document.createElement("img"),
                "_z": document.createElement("img"), 

                "_pl_a": document.createElement("img"),  
                "_pl_c": document.createElement("img"),   
                "_pl_e": document.createElement("img"),   
                "_pl_l": document.createElement("img"),   
                "_pl_n": document.createElement("img"), 
                "_pl_o": document.createElement("img"),   
                "_pl_s": document.createElement("img"),   
                "_pl_z0": document.createElement("img"),   
                "_pl_z1": document.createElement("img"),                   

            },

            "Alphabet_2":{

                "Fun": function TextNumber(TextNumber,Split){  
	
                    if(TextNumber == '.') return ["S0",1,0]; // %
                    if(TextNumber == ' ') return ["_",0.7,0];
                    
                    if(TextNumber == '0') return ["_0",0.95,0];
                    if(TextNumber == '1') return ["_1",0.7,0];
                    if(TextNumber == '2') return ["_2",1,0];
                    if(TextNumber == '3') return ["_3",1,0];
                    if(TextNumber == '4') return ["_4",1,0];
                    if(TextNumber == '5') return ["_5",1,0];
                    if(TextNumber == '6') return ["_6",1,0];
                    if(TextNumber == '7') return ["_7",1,0];
                    if(TextNumber == '8') return ["_8",1,0];
                    if(TextNumber == '9') return ["_9",1,0];
            
                    if(TextNumber == ':') return ["S5",1,0]; // ' : '
                    if(TextNumber == '%') return ["S7",1,0]; // %
                    if(TextNumber == '/') return ["S9",1,0]; // %

                    if(TextNumber == 'B') return ["B",1,0]; 
                    if(TextNumber == 'D') return ["D",1,0]; 
                    if(TextNumber == 'L') return ["L",1,0]; 
                    if(TextNumber == 'M') return ["M",1,0]; 
                    if(TextNumber == 'N') return ["N",1,0]; 
                    if(TextNumber == 'Q') return ["Q",1,0]; 
                    if(TextNumber == 'T') return ["T",1,0]; 
                    
                    return ["_",0.7,0];

                },

                "_": document.createElement("img"),

                "_0": document.createElement("img"),
                "_1": document.createElement("img"),
                "_2": document.createElement("img"),
                "_3": document.createElement("img"),
                "_4": document.createElement("img"),
                "_5": document.createElement("img"),
                "_6": document.createElement("img"),
                "_7": document.createElement("img"),
                "_8": document.createElement("img"),
                "_9": document.createElement("img"),

                "S0": document.createElement("img"),
                "S5": document.createElement("img"),
                "S7": document.createElement("img"),
                "S9": document.createElement("img"),

                "B": document.createElement("img"),
                "D": document.createElement("img"),
                "L": document.createElement("img"),
                "M": document.createElement("img"),
                "N": document.createElement("img"),
                "Q": document.createElement("img"),
                "T": document.createElement("img"),

            }

        };

        TextFile.Alphabet_1._0.src = "img/Alphabet_1/0.png";
        TextFile.Alphabet_1._1.src = "img/Alphabet_1/1.png";
        TextFile.Alphabet_1._2.src = "img/Alphabet_1/2.png";
        TextFile.Alphabet_1._3.src = "img/Alphabet_1/3.png";
        TextFile.Alphabet_1._4.src = "img/Alphabet_1/4.png";
        TextFile.Alphabet_1._5.src = "img/Alphabet_1/5.png";
        TextFile.Alphabet_1._6.src = "img/Alphabet_1/6.png";
        TextFile.Alphabet_1._7.src = "img/Alphabet_1/7.png";
        TextFile.Alphabet_1._8.src = "img/Alphabet_1/8.png";
        TextFile.Alphabet_1._9.src = "img/Alphabet_1/9.png";

        TextFile.Alphabet_1._.src = "img/Alphabet_1/_.png";
        TextFile.Alphabet_1.S0.src = "img/Alphabet_1/S0.png";
        TextFile.Alphabet_1.S1.src = "img/Alphabet_1/S1.png";
        TextFile.Alphabet_1.S2.src = "img/Alphabet_1/S2.png";
        TextFile.Alphabet_1.S3.src = "img/Alphabet_1/S3.png";
        TextFile.Alphabet_1.S4.src = "img/Alphabet_1/S4.png";
        TextFile.Alphabet_1.S5.src = "img/Alphabet_1/S5.png";
        TextFile.Alphabet_1.S6.src = "img/Alphabet_1/S6.png";
        TextFile.Alphabet_1.S7.src = "img/Alphabet_1/S7.png";
        TextFile.Alphabet_1.S8.src = "img/Alphabet_1/S8.png";
        TextFile.Alphabet_1.S9.src = "img/Alphabet_1/S9.png";
        TextFile.Alphabet_1.S10.src = "img/Alphabet_1/S10.png";
        TextFile.Alphabet_1.S11.src = "img/Alphabet_1/S11.png";
        TextFile.Alphabet_1.S12.src = "img/Alphabet_1/S12.png";
        TextFile.Alphabet_1.S13.src = "img/Alphabet_1/S13.png";
        TextFile.Alphabet_1.S14.src = "img/Alphabet_1/S14.png";

        TextFile.Alphabet_1.A.src = "img/Alphabet_1/A.png";
        TextFile.Alphabet_1.B.src = "img/Alphabet_1/B.png";
        TextFile.Alphabet_1.C.src = "img/Alphabet_1/C.png";
        TextFile.Alphabet_1.D.src = "img/Alphabet_1/D.png";
        TextFile.Alphabet_1.E.src = "img/Alphabet_1/E.png";
        TextFile.Alphabet_1.F.src = "img/Alphabet_1/F.png";
        TextFile.Alphabet_1.G.src = "img/Alphabet_1/G.png";
        TextFile.Alphabet_1.H.src = "img/Alphabet_1/H.png";
        TextFile.Alphabet_1.I.src = "img/Alphabet_1/I.png";
        TextFile.Alphabet_1.J.src = "img/Alphabet_1/J.png";
        TextFile.Alphabet_1.K.src = "img/Alphabet_1/K.png";
        TextFile.Alphabet_1.L.src = "img/Alphabet_1/L.png";
        TextFile.Alphabet_1.M.src = "img/Alphabet_1/M.png";
        TextFile.Alphabet_1.N.src = "img/Alphabet_1/N.png";
        TextFile.Alphabet_1.O.src = "img/Alphabet_1/O.png";
        TextFile.Alphabet_1.P.src = "img/Alphabet_1/P.png";
        TextFile.Alphabet_1.R.src = "img/Alphabet_1/R.png";
        TextFile.Alphabet_1.S.src = "img/Alphabet_1/S.png";
        TextFile.Alphabet_1.T.src = "img/Alphabet_1/T.png";
        TextFile.Alphabet_1.U.src = "img/Alphabet_1/U.png";
        TextFile.Alphabet_1.V.src = "img/Alphabet_1/V.png";
        TextFile.Alphabet_1.W.src = "img/Alphabet_1/W.png";
        TextFile.Alphabet_1.X.src = "img/Alphabet_1/X.png";
        TextFile.Alphabet_1.Y.src = "img/Alphabet_1/Y.png";
        TextFile.Alphabet_1.Z.src = "img/Alphabet_1/Z.png";
        
        TextFile.Alphabet_1.pl_A.src = "img/Alphabet_1/pl_A.png";
        TextFile.Alphabet_1.pl_C.src = "img/Alphabet_1/pl_C.png";
        TextFile.Alphabet_1.pl_E.src = "img/Alphabet_1/pl_E.png";
        TextFile.Alphabet_1.pl_L.src = "img/Alphabet_1/pl_L.png";
        TextFile.Alphabet_1.pl_N.src = "img/Alphabet_1/pl_N.png";
        TextFile.Alphabet_1.pl_O.src = "img/Alphabet_1/pl_O.png";
        TextFile.Alphabet_1.pl_S.src = "img/Alphabet_1/pl_S.png";
        TextFile.Alphabet_1.pl_Z0.src = "img/Alphabet_1/pl_Z0.png";
        TextFile.Alphabet_1.pl_Z1.src = "img/Alphabet_1/pl_Z1.png";

        TextFile.Alphabet_1._a.src = "img/Alphabet_1/_a.png";
        TextFile.Alphabet_1._b.src = "img/Alphabet_1/_b.png";
        TextFile.Alphabet_1._c.src = "img/Alphabet_1/_c.png";
        TextFile.Alphabet_1._d.src = "img/Alphabet_1/_d.png";
        TextFile.Alphabet_1._e.src = "img/Alphabet_1/_e.png";
        TextFile.Alphabet_1._f.src = "img/Alphabet_1/_f.png";
        TextFile.Alphabet_1._g.src = "img/Alphabet_1/_g.png";
        TextFile.Alphabet_1._h.src = "img/Alphabet_1/_h.png";
        TextFile.Alphabet_1._i.src = "img/Alphabet_1/_i.png";
        TextFile.Alphabet_1._j.src = "img/Alphabet_1/_j.png";
        TextFile.Alphabet_1._k.src = "img/Alphabet_1/_k.png";
        TextFile.Alphabet_1._l.src = "img/Alphabet_1/_l.png";
        TextFile.Alphabet_1._m.src = "img/Alphabet_1/_m.png";
        TextFile.Alphabet_1._n.src = "img/Alphabet_1/_n.png";
        TextFile.Alphabet_1._o.src = "img/Alphabet_1/_o.png";
        TextFile.Alphabet_1._p.src = "img/Alphabet_1/_p.png";
        TextFile.Alphabet_1._r.src = "img/Alphabet_1/_r.png";
        TextFile.Alphabet_1._s.src = "img/Alphabet_1/_s.png";
        TextFile.Alphabet_1._t.src = "img/Alphabet_1/_t.png";
        TextFile.Alphabet_1._u.src = "img/Alphabet_1/_u.png";
        TextFile.Alphabet_1._v.src = "img/Alphabet_1/_v.png";
        TextFile.Alphabet_1._w.src = "img/Alphabet_1/_w.png";
        TextFile.Alphabet_1._x.src = "img/Alphabet_1/_x.png";
        TextFile.Alphabet_1._y.src = "img/Alphabet_1/_y.png";
        TextFile.Alphabet_1._z.src = "img/Alphabet_1/_z.png";
        
        TextFile.Alphabet_1._pl_a.src = "img/Alphabet_1/_pl_a.png";
        TextFile.Alphabet_1._pl_c.src = "img/Alphabet_1/_pl_c.png";
        TextFile.Alphabet_1._pl_e.src = "img/Alphabet_1/_pl_e.png";
        TextFile.Alphabet_1._pl_l.src = "img/Alphabet_1/_pl_l.png";
        TextFile.Alphabet_1._pl_n.src = "img/Alphabet_1/_pl_n.png";
        TextFile.Alphabet_1._pl_o.src = "img/Alphabet_1/_pl_o.png";
        TextFile.Alphabet_1._pl_s.src = "img/Alphabet_1/_pl_s.png";
        TextFile.Alphabet_1._pl_z0.src = "img/Alphabet_1/_pl_z0.png";
        TextFile.Alphabet_1._pl_z1.src = "img/Alphabet_1/_pl_z1.png";

        TextFile.Alphabet_2._.src = "img/Alphabet_2/_.png";
        TextFile.Alphabet_2._0.src = "img/Alphabet_2/0.png";
        TextFile.Alphabet_2._1.src = "img/Alphabet_2/1.png";
        TextFile.Alphabet_2._2.src = "img/Alphabet_2/2.png";
        TextFile.Alphabet_2._3.src = "img/Alphabet_2/3.png";
        TextFile.Alphabet_2._4.src = "img/Alphabet_2/4.png";
        TextFile.Alphabet_2._5.src = "img/Alphabet_2/5.png";
        TextFile.Alphabet_2._6.src = "img/Alphabet_2/6.png";
        TextFile.Alphabet_2._7.src = "img/Alphabet_2/7.png";
        TextFile.Alphabet_2._8.src = "img/Alphabet_2/8.png";
        TextFile.Alphabet_2._9.src = "img/Alphabet_2/9.png";

        TextFile.Alphabet_2.B.src = "img/Alphabet_2/B.png";
        TextFile.Alphabet_2.D.src = "img/Alphabet_2/D.png";
        TextFile.Alphabet_2.L.src = "img/Alphabet_2/L.png";
        TextFile.Alphabet_2.M.src = "img/Alphabet_2/M.png";
        TextFile.Alphabet_2.N.src = "img/Alphabet_2/N.png";
        TextFile.Alphabet_2.Q.src = "img/Alphabet_2/Q.png";
        TextFile.Alphabet_2.T.src = "img/Alphabet_2/T.png";

        TextFile.Alphabet_2.S0.src = "img/Alphabet_2/S0.png";
        TextFile.Alphabet_2.S5.src = "img/Alphabet_2/S5.png";
        TextFile.Alphabet_2.S7.src = "img/Alphabet_2/S7.png";
        TextFile.Alphabet_2.S9.src = "img/Alphabet_2/S9.png";

        var CopyList = [],
            AlertList = [],
            WindowList = [],
            WindowDrawList = [],

            Resize,
          
            TimeInter = {

                "UpdateScreen": null

            },
            
            MainData = {
                
                "Orientation": "Portrait", //Landscape Portrait
                "Frame": 16, // 16,17 - 60f , 40 - 24f , 34 - 30f
                "AppVersion": 1.01,

                "Mobile": false,
                "ScreenType": "16:9", // 16:9 liczy jako 16:8
                "PxW": 0,
                "PxH": 0,
                "TouchX": 0,
                "TouchY": 0,
                "PointZeroY": 0,
                "PointZeroX": 0,
                "DiffY": 0, 
                "DiffX": 0, 

                "LanNumber": 2,
                "Language": 1,  // 0 - Polski  1 - Angielski

                "Desktop" : true,
                "Mouse" : 0,
                "DoubleAlarm": false, // Mobile
                "PointZeroY": 0,
                "PointZeroX": 0,

                "Interfejs": true,
                "InterNum": 0,
                "OnInter": false,

                "OnWindow": false,
                "OnWindowNum": 0,
                "WindowMove": false,

                "Alert": false,
                "AlertNum": 0,
                
                "CurrentButton": null,
                "ButtonWork": true,

                "HelpValue": {

                    "P0": "",

                },

            },
            
            Desktop = {
        
                "AnimList": null,

                "Objects": {
                    
                    "length": 5,
        
                    0: { 
                        "ObjectName": "Tlo",
                        "File": "Background_0",
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 1920,
                        "Width": 1080,
                        "PX": 0,
                        "PY": 0
                    },
        
                    1: { 
                        "ObjectName": "Tlo",
                        "File": "Background_5",
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 1920,
                        "Width": 1080,
                        "PX": 0,
                        "PY": 0,
                        "Text": {

                            "Num": 10,
    
                            0: {
                                "Text": 38,
                                "Data": {

                                    0: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 170,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 170,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            } ,  

                            1: {
                                "Text": 39,
                                "Data": {

                                    0: {

                                        "TData": 4,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 240,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 4,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 240,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            },  

                            2: {
                                "Text": 34,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 530,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 530,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            },  

                            3: {
                                "Text": 35,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 710,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 710,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            },  

                            4: {
                                "Text": 36,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 890,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 890,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            },  

                            5: {
                                "Text": 37,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 1070,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 1070,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            },  

                            6: {
                                "Text": "S0",
                                "Data": {

                                    0: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 610,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 610,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            },  

                            7: {
                                "Text": "S1",
                                "Data": {

                                    0: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 790,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 790,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            },  

                            8: {
                                "Text": "S2",
                                "Data": {

                                    0: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 970,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 970,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            },  

                            9: {
                                "Text": "S3",
                                "Data": {

                                    0: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 1150,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 1150,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            },

                        }
                    },

                    2: { 
                        "ObjectName": "Gra",
                        "File": "Button_6",
                        "Type": "DefenseOpen",
                        "AnX": 0,
                        "TMX":763,
                        "TMY":0,
                        "Height": 268,
                        "Width": 763,
                        "PX": 158,
                        "PY": 1580-70,
                        
                        "Href": 0,
                        "BAnim": true,
                        "Text": {

                            "Num": 1,
    
                            0: {
                                "Text": 33,
                                "Data": {

                                    0: {

                                        "TData": 7,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 80,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 7,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 80,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        }

                    },

                    3: { 
                        "ObjectName": "Gra",
                        "File": "Button_7",
                        "Type": "Restart",
                        "AnX": 0,
                        "TMX":685,
                        "TMY":136,
                        "Height": 135,
                        "Width": 685,
                        "PX": 197,
                        "PY": 348,
                        
                        "Href": 3,
                        "BAnim": true,
                        "Text": {

                            "Num": 1,
    
                            0: {
                                "Text": "N0",
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 40,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 40,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        }

                    },

                    4: { 
                        "ObjectName": "Gra",
                        "File": "Button_8",
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":763,
                        "TMY":0,
                        "Height": 135,
                        "Width": 763,
                        "PX": 158,
                        "PY": 1435-70,
                        
                        "Href": 5,
                        "BAnim": true,
                        "Text": {

                            "Num": 1,
    
                            0: {
                                "Text": 30,
                                "Data": {

                                    0: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 40,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 40,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        }

                    },
        
                }
                     
            },
            
            Window = {
		        
                "length": 6,
          
                0: { // Test specjalnego okna i swarm defense
    
                    "Fullscreen": true, 
                    
                    "Name": "W0",
                    "ObjectNumber": 11,
                    "WindowType": 0,
                    "Copy": false,
                    
                    "PX": 0,
                    "PY": 0,

                    "ScaleSim": 1,
                    "SPX": 0,
                    "SPY": 0,
                    "Alpha": 1,
                    "Scale": 1,
                    "Xmove": 0,
                    "Ymove": 0,

                    "List": false,

                    "Background": null,
                    "Height": 1080,
                    "Width": 1920,
        
                    "PBData":{
                           
                        0:{

                            "Type": "Wave",
                            "File": "Inter_1",
                            "TMX":0,
                            "TMY":0,
                            "Height": 70,
                            "Width": 468,
                            "PX": 577,
                            "PY": 19,
                            
                            "BarC":{
                                
                                "File": "red",
                                "PX": 2,
                                "PY": 2,
                                "TMX":0,
                                "TMY":0,
                                "MaxWidth": 468-4,
                                "Height": 70-4
                            },

                            "SpecText": {
                                
                                "Num": 1,
                              
                                0:{

                                    "Spec": "N4",
                                    "Data": {
            
                                        "TData": 2,
                                        "PX": 0,
                                        "PY": 10,
                                        "Width": 468,
            
                                    }
            
                                }

                            }

                        },

                        1:{

                            "Type": "Fort",
                            "File": "Inter_1",
                            "TMX":0,
                            "TMY":0,
                            "Height": 70,
                            "Width": 468,
                            "PX": 306,
                            "PY": 1610,
                            
                            "BarC":{
                                
                                "File": "red",
                                "PX": 2,
                                "PY": 2,
                                "TMX":0,
                                "TMY":0,
                                "MaxWidth": 468-4,
                                "Height": 70-4
                            },

                            "SpecText": {
                                "Num": 1,

                                0:{

                                    "Spec": "N1",
                                    "Data": {
            
                                        "TData": 2,
                                        "PX": 0,
                                        "PY": 10,
                                        "Width": 468,
            
                                    }

                                }
        
                            }

                        }  
                       
                    },

                    "ID": { 

                        5: {

                            "Num": 1,
    
                            0: {
                                "Text": 29,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 11,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 11,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        },
                        
                        6: {

                            "Num": 1,
    
                            0: {
                                "Text": 30,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 11,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 11,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        },

                    },

                    "SpecText": {
                       
                        3:{
                            "Num": 1,
                        0:{
                            "Spec": "N3",
                            "Data": {
    
                                "TData": 2,
                                "PX": 0,
                                "PY": 10,
                                "Width": 468,
    
                            }}
    
                        },

                        7:{
                            "Num": 1,
                        0:{
                            "Spec": "P0",
                            "Data": {
    
                                "TData": 4,
                                "PX": 0,
                                "PY": 10,
                                "Width": 222,
    
                            }}
    
                        },

                        8:{
                            "Num": 1,
                        0:{
                            "Spec": "P1",
                            "Data": {
    
                                "TData": 4,
                                "PX": 0,
                                "PY": 10,
                                "Width": 222,
    
                            }}
    
                        },

                        9:{
                            "Num": 1,
                        0:{
                            "Spec": "P2",
                            "Data": {
    
                                "TData": 4,
                                "PX": 0,
                                "PY": 10,
                                "Width": 222,
    
                            }}
    
                        },

                        10:{
                            "Num": 1,
                        0:{
                            "Spec": "P3",
                            "Data": {
    
                                "TData": 4,
                                "PX": 0,
                                "PY": 10,
                                "Width": 222,
    
                            }}
    
                        },

                    }
        
                },
         
                1: { // sklep
    
                    "Fullscreen": true, 
                    
                    "Name": "W1",
                    "ObjectNumber": 4,
                    "WindowType": 1,
                    "Copy": false,
                    
                    "PX": 0,
                    "PY": 0,

                    "ScaleSim": 1,
                    "SPX": 0,
                    "SPY": 0,
                    "Alpha": 1,
                    "Scale": 1,
                    "Xmove": 0,
                    "Ymove": 0,

                    "List": false,

                    "Background": "Black",
                    "Height": 1920,
                    "Width": 1080,
        
                    "ID": { 

                        1: {

                            "Num": 1,
    
                            0: {
                                "Text": 24,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 17,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 13,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        },

                        2: {

                            "Num": 1,
    
                            0: {
                                "Text": 31,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 25,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 25,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        },

                        3: {

                            "Num": 1,
    
                            0: {
                                "Text": 32,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 25,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 25,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        }

                    },

                    "SpecText": {
                       
                        2:{
                            "Num": 1,
                        0:{
                            "Spec": "T0",
                            "Data": {
    
                                "TData": 6,
                                "PX": 0,
                                "PY": 210,
                                "Width": 763,
    
                            }}
    
                        }, 

                        3:{
                            "Num": 1,
                        0:{
                            "Spec": "T1",
                            "Data": {
    
                                "TData": 6,
                                "PX": 0,
                                "PY": 210,
                                "Width": 763,
    
                            }}
    
                        }, 

                     }
        
                }, 
         
                2: { // ustawienia
    
                    "Fullscreen": true, 
                    
                    "Name": "W2",
                    "ObjectNumber": 4,
                    "WindowType": 2,
                    "Copy": false,
                    
                    "PX": 0,
                    "PY": 0,

                    "ScaleSim": 1,
                    "SPX": 0,
                    "SPY": 0,
                    "Alpha": 1,
                    "Scale": 1,
                    "Xmove": 0,
                    "Ymove": 0,

                    "List": false,

                    "Background": "Black",
                    "Height": 1920,
                    "Width": 1080,
        
                    "ID": { 

                        1: {

                            "Num": 1,
    
                            0: {
                                "Text": 24,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 17,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 13,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        },
                        
                        2: {

                            "Num": 2,
    
                            0: {
                                "Text": 26,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 30,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 30,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            },  

                            1: {
                                "Text": 28,
                                "Data": {

                                    0: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 110,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 110,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            } 
                        },
                        
                        3: {

                            "Num": 1,
    
                            0: {
                                "Text": 27,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 30,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 30,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        }

                    },
                    
                    "SpecText": {
                       
                        3:{"Num": 1,
                        0:{
                            "Spec": "S1",
                            "Data": {
    
                                "TData": 6,
                                "PX": 0,
                                "PY": 110,
                                "Width": 763,
    
                            }}
    
                        },

                    }
        
                }, 
         
                3: { // restart
    
                    "Fullscreen": true, 
                    
                    "Name": "W3",
                    "ObjectNumber": 3,
                    "WindowType": 3,
                    "Copy": false,
                    
                    "PX": 0,
                    "PY": 0,

                    "ScaleSim": 1,
                    "SPX": 0,
                    "SPY": 0,
                    "Alpha": 1,
                    "Scale": 1,
                    "Xmove": 0,
                    "Ymove": 0,

                    "List": false,

                    "Background": "Black",
                    "Height": 1920,
                    "Width": 1080,
        
                    "ID": { 

                        1: {

                            "Num": 1,
    
                            0: {
                                "Text": 24,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 17,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 13,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        }, 

                        0: {

                            "Num": 1,
    
                            0: {
                                "Text": 41,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "PX": 80,
                                        "PY": 80,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "PX": 80,
                                        "PY": 80,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        },

                        2: {

                            "Num": 1,
    
                            0: {
                                "Text": 40,
                                "Data": {

                                    0: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 67,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 63,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        },

                    },
                    
                    "SpecText": { }
        
                }, 
         
                4: { // restart
    
                    "Fullscreen": true, 
                    
                    "Name": "W4",
                    "ObjectNumber": 2,
                    "WindowType": 3,
                    "Copy": false,
                    
                    "PX": 0,
                    "PY": 0,

                    "ScaleSim": 1,
                    "SPX": 0,
                    "SPY": 0,
                    "Alpha": 1,
                    "Scale": 1,
                    "Xmove": 0,
                    "Ymove": 0,

                    "List": false,

                    "Background": "Black",
                    "Height": 1920,
                    "Width": 1080,
        
                    "ID": { 

                        1: {

                            "Num": 1,
    
                            0: {
                                "Text": 24,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 17,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 13,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        }, 

                        0: {

                            "Num": 1,
    
                            0: {
                                "Text": 42,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "PX": 80,
                                        "PY": 80,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "PX": 80,
                                        "PY": 80,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        },

                    },
                    
                    "SpecText": { }
        
                }, 
         
                5: { // ustawienia 2
    
                    "Fullscreen": true, 
                    
                    "Name": "W2",
                    "ObjectNumber": 4,
                    "WindowType": 2,
                    "Copy": false,
                    
                    "PX": 0,
                    "PY": 0,

                    "ScaleSim": 1,
                    "SPX": 0,
                    "SPY": 0,
                    "Alpha": 1,
                    "Scale": 1,
                    "Xmove": 0,
                    "Ymove": 0,

                    "List": false,

                    "Background": "Background_0",
                    "Height": 1920,
                    "Width": 1080,
        
                    "ID": { 

                        1: {

                            "Num": 1,
    
                            0: {
                                "Text": 24,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 17,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 13,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        },
                        
                        2: {

                            "Num": 2,
    
                            0: {
                                "Text": 26,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 30,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 30,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            },  

                            1: {
                                "Text": 28,
                                "Data": {

                                    0: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 110,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 6,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 110,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            } 
                        },
                        
                        3: {

                            "Num": 1,
    
                            0: {
                                "Text": 27,
                                "Data": {

                                    0: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 30,
                                        "Enter": 30,
                                        "List": []
    
                                    },

                                    1: {

                                        "TData": 5,
                                        "Middle": true,
                                        "PX": 0,
                                        "PY": 30,
                                        "Enter": 30,
                                        "List": []
    
                                    }

                                },
                            }   

                        }

                    },
                    
                    "SpecText": {
                       
                        3:{

                            "Num": 1,
                            0:{
                                "Spec": "S1",
                                "Data": {
        
                                    "TData": 6,
                                    "PX": 0,
                                    "PY": 110,
                                    "Width": 763,
        
                                }   
                            }
                           
    
                        },

                    }
        
                }, 

            },
            
            WindowObjects = {
                
                0:{  

                    0:{
                        "File": "Background_0",
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 1920,
                        "Width": 1080,
                        "PX": 0,
                        "PY": 0		
                    },

                    1:{
                        "File": "Background_3",
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 1920,
                        "Width": 1080,
                        "PX": 0,
                        "PY": 0		
                    },

                    2:{
                        "File": "Background_1",
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 106,
                        "Width": 1080,
                        "PX": 0,
                        "PY": 0		
                    },

                    3:{
                        "File": "Inter_0",
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 70,
                        "Width": 468,
                        "PX": 36,
                        "PY": 19		
                    },

                    4:{
                        "File": "Background_2",
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 322,
                        "Width": 1080,
                        "PX": 0,
                        "PY": 1598		
                    },

                    5:{
                        "File": "Button_0",
                        "Type": "WindowOpen",
                        "Href": 1,
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":276,
                        "TMY":0,
                        "Height": 70,
                        "Width": 276,
                        "PX": 15,
                        "PY": 1610		
                    },

                    6:{
                        "File": "Button_0",
                        "Type": "WindowOpen",
                        "Href": 2,
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":276,
                        "TMY":0,
                        "Height": 70,
                        "Width": 276,
                        "PX": 789,
                        "PY": 1610		
                    },

                    7:{
                        "File": "Button_1",
                        "Type": "Boom",
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":222,
                        "TMY":0,
                        "Height": 54,
                        "Width": 222,
                        "PX": 29,
                        "PY": 1840		
                    },

                    8:{
                        "File": "Button_1",
                        "Type": "SpeedT1",
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":222,
                        "TMY":54,
                        "Height": 54,
                        "Width": 222,
                        "PX": 296,
                        "PY": 1840		
                    },

                    9:{
                        "File": "Button_1",
                        "Type": "SpeedT2",
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":222,
                        "TMY":54,
                        "Height": 54,
                        "Width": 222,
                        "PX": 562,
                        "PY": 1840		
                    },

                    10:{
                        "File": "Button_1",
                        "Type": "Live",
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":222,
                        "TMY":0,
                        "Height": 54,
                        "Width": 222,
                        "PX": 829,
                        "PY": 1840		
                    },

                },
        
                1:{  

                    0:{
                        "File": "Background_4",
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 825,
                        "Width": 825,
                        "PX": 127,
                        "PY": 505		
                    },

                    1:{
                        "File": "Button_0",
                        "Type": "Exit",
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":276,
                        "TMY":0,
                        "Height": 70,
                        "Width": 276,
                        "PX": 646,
                        "PY": 1230	
                    },

                    2:{
                        "File": "Button_2",
                        "Type": "Turret_1",
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":763,
                        "TMY":0,
                        "Height": 310,
                        "Width": 763,
                        "PX": 158,
                        "PY": 536	
                    },

                    3:{
                        "File": "Button_4",
                        "Type": "Turret_2",
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":763,
                        "TMY":0,
                        "Height": 310,
                        "Width": 763,
                        "PX": 158,
                        "PY": 862	
                    },

                },
        
                2:{  

                    0:{
                        "File": "Background_4",
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 825,
                        "Width": 825,
                        "PX": 127,
                        "PY": 505		
                    },

                    1:{
                        "File": "Button_0",
                        "Type": "Exit",
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":276,
                        "TMY":0,
                        "Height": 70,
                        "Width": 276,
                        "PX": 646,
                        "PY": 1230	
                    },

                    2:{
                        "File": "Button_3",
                        "Type": "LanguageChange",
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":763,
                        "TMY":0,
                        "Height": 207,
                        "Width": 763,
                        "PX": 158,
                        "PY": 663	
                    },

                    3:{
                        "File": "Button_3",
                        "Type": "Frame",
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":763,
                        "TMY":0,
                        "Height": 207,
                        "Width": 763,
                        "PX": 158,
                        "PY": 901	
                    },

                },
        
                3:{  

                    0:{
                        "File": "Background_4",
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 825,
                        "Width": 825,
                        "PX": 127,
                        "PY": 505		
                    },

                    1:{
                        "File": "Button_0",
                        "Type": "Exit",
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":276,
                        "TMY":0,
                        "Height": 70,
                        "Width": 276,
                        "PX": 646,
                        "PY": 1230	
                    },

                    2:{
                        "File": "Button_3",
                        "Type": "Reset",
                        "BAnim": true,
                        "AnX": 0,
                        "TMX":763,
                        "TMY":0,
                        "Height": 207,
                        "Width": 763,
                        "PX": 158,
                        "PY": 870	
                    },

                },

            },
        
            InterfejsData = {
                
                "length": 1,

                0:{

                    "length": 0,

                }

            },
               
            MouseData = {

            },
            
            Text = {
        
                0: {
                   
                    83: "T",
                    84: "MLN",
                    85: "MLD",
                    86: "BLN",
                    87: "BLD",
                    88: "TLN",
                    24: "Powrót",
                    25: "Ekran ( Zablokowane )",
                    26: "Język",
                    27: "Klatkarz",
                    28: "POLSKI",
                    29: "Sklep",
                    30: "Ustawienia",
                    31: "Wieżyczka Zwykła",
                    32: "Wieżyczka Specjalna",
                    33: "START",

                    34: "Rekordowy Czas",
                    35: "Aktualny Czas",
                    36: "Zniszczone Jednostki",
                    37: "Ukończenia Gry",
                    38: "Swarm Defense Classic",
                    39: "Stworzony przez CUTFUJI games",

                    40: "Resetuj Progres",
                    41: "           Gratulacje@Gra Ukończona, zrestartuj by@pobić rekord czasowy.",
                    42: "           Gratulacje@Gra Ukończona, w menu@startowym znajdziesz reset@by pobić swój wynik czasowy. @@Do resetu wymagane jest@ponowne właczenie gry",

                    "N0": "Ukończ Gre by Odblokować",
                    "N1": "Restart Gry",

                    "S0": "0:00:00",
                    "S1": "0:00:00",
                    "S2": "0",
                    "S3": "0",

                    43: "CUTFUJI games",
                    44: "Inne Gry",
        
                },
                
                1: { 
                    
                    83: "T",
                    84: "M",
                    85: "B",
                    86: "T",
                    87: "Q",
                    88: "Q",
                    24: "Close",
                    25: "Screen ( Blocade )",
                    26: "Language",
                    27: "Frames",
                    28: "ENGLISH",
                    29: "Shop",
                    30: "Settings",
                    31: "Normal Turret",
                    32: "Special Turret",
                    33: "START",

                    34: "Record Time",
                    35: "Current Time",
                    36: "Destroyed Units",
                    37: "Game Completions",
                    38: "Swarm Defense Classic",
                    39: "Made by CUTFUJI games",

                    40: "Reset Progress",
                    41: "        Congratulations @Game Completed, restart to@break the time record.",
                    42: "        Congratulations @Game Completed, in the start@menu you will find a reset @to beat your time score. @@Reset requires restarting@the game",

                    "N0": "Complete Game to Unlock",
                    "N1": "Restart Game",

                    "S0": "0:00:00",
                    "S1": "0:00:00",
                    "S2": "0",
                    "S3": "0",

                    43: "CUTFUJI games",
                    44: "Other Apps",
                }
        
            },
            
            SpecText = {

                "N0":0,
                "N1":10,
                "N2":10,
                "N3":0+"/",
                "N4":10,

                "S0": "16:9", // "Full"
                "S1": 60, // 30

                "P0": "1000/",
                "P1": "SPEED",
                "P2": "SPEED",
                "P3": "500/",

                "T0": 40 + "/",
                "T1": "25.00T/",

            },

            TextData = { 
        
                "length": 8,

                0:{ 
                    
                    "File": "Alphabet_2",
                    "TW": 60,
                    "TH": 83,
                    "Size": 0.3,
                    "Width": 0,
                    "Height": 0,
    
                },

                1:{ 
                    
                    "File": "Alphabet_2",
                    "TW": 60,
                    "TH": 83,
                    "Size": 0.25,
                    "Width": 0,
                    "Height": 0,
    
                },
                
                2:{ 
                    
                    "File": "Alphabet_2",
                    "TW": 60,
                    "TH": 83,
                    "Size": 0.6,
                    "Width": 0,
                    "Height": 0,
    
                },

                3:{ 
                    
                    "File": "Alphabet_1", //2
                    "TW": 60,
                    "TH": 82,
                    "Size": 0.3,
                    "Width": 0,
                    "Height": 0,
    
                },

                4:{ 
                    
                    "File": "Alphabet_1",
                    "TW": 60,
                    "TH": 82,
                    "Size": 0.4,
                    "Width": 0,
                    "Height": 0,
    
                },

                5:{ 
                    
                    "File": "Alphabet_1",
                    "TW": 60,
                    "TH": 82,
                    "Size": 0.5,
                    "Width": 0,
                    "Height": 0,
    
                },

                6:{ 
                    
                    "File": "Alphabet_1",
                    "TW": 60,
                    "TH": 82,
                    "Size": 0.6,
                    "Width": 0,
                    "Height": 0,
    
                },

                7:{ 
                    
                    "File": "Alphabet_1",
                    "TW": 60,
                    "TH": 82,
                    "Size": 1,
                    "Width": 0,
                    "Height": 0,
    
                },

            },
            
            Alerts = {

            },
            
            Achievements = {

                "Plat": false,

                "length": 0,
                "UnlockN": 0, // ilość odblokowanych osiągnięć

                "Height": 90,
                "Width": 90,
                "TMX":0,
                "TMY":0,            
        
                "PlayTimeH": 0, // czas gry
                "PlayTimeM": 0,
                "PlayTimeS": 0,

            },
            
            Time = {

                "Today": new Date(),
                "A0": 0,  // Minuta
                "A1": 0,  // Sekunda
                "A2": 0   // Godzina

            },

            SoundBase = {
                
                "length": 0,

                //0: new Audio('sound/click.mp3'),

            },
            
            AddData = {

                "mouse_x": 0,
                "mouse_y": 0,
                "center_x": 0,
                "center_y": 0,

                "SwarmKill": 0,
                "Money": 0,

                "Waves": 1, // load
                "WaveLive": 10, // load

                "Hour": 0,
                "Minute": 0,
                "Sec": 0,

                "FinishGame": false,
                "FinishCounter": 0,

                "RecHour": 0,
                "RecMinute": 0,
                "RecSec": 0,

            };

            //--------------------------------------------------------
            
            DefenseData = {

                "Rect": {

                    "PX": 0,
                    "PY": 0,
                    "Width": 1080,
                    "Height": 1580

                },

                "ShotList": [],

                "Shot":{

                    "File": "Shot_0",
                    "Width": 16,
                    "Height": 41,
                    "Speed": 40,
                    "SpeedMove": 10,
                    "Hit": "Shot_0_Hit"

                },

                "TurretShot":{

                    "File": "Shot_1",
                    "Width": 2,
                    "Height": 35,
                    "Speed": 75,
                    "ShootSpeed": 4,
                    "Hit": "Shot_1_Hit"

                },

                "Tower":{

                    "File": "Tower_0",
                    "AnX": 0,
                    "TMX":85,
                    "TMY":0,
                    "PX": 494+43,
                    "PY": 1402+152,
                    "Width": 86,
                    "Height": 304,
                    "Route": 3.15

                },

                "TurretShotList": [],

                "TurretList": {
                    
                    0:{
                   
                        "File": "Turret_0",
                        "AnX": 0,
                        "TMX":44,
                        "TMY":0,
                        "PX": 252+22,
                        "PY": 1334+40,
                        "Width": 44,
                        "Height": 80,
                        "Route": 3.15,
                        "Target": null,
    
                    },

                    1:{
                   
                        "File": "Turret_0",
                        "AnX": 0,
                        "TMX":44,
                        "TMY":0,
                        "PX": 781+22,
                        "PY": 1334+40,
                        "Width": 44,
                        "Height": 80,
                        "Route": 3.15,
                        "Target": null,
    
                    },

                    2:{
                   
                        "File": "Turret_0",
                        "AnX": 0,
                        "TMX":44,
                        "TMY":0,
                        "PX": 90+22,
                        "PY": 1397+40,
                        "Width": 44,
                        "Height": 80,
                        "Route": 3.15,
                        "Target": null,
    
                    },

                    3:{
                   
                        "File": "Turret_0",
                        "AnX": 0,
                        "TMX":44,
                        "TMY":0,
                        "PX": 414+22,
                        "PY": 1397+40,
                        "Width": 44,
                        "Height": 80,
                        "Route": 3.15,
                        "Target": null,
    
                    },

                    4:{
                   
                        "File": "Turret_0",
                        "AnX": 0,
                        "TMX":44,
                        "TMY":0,
                        "PX": 619+22,
                        "PY": 1397+40,
                        "Width": 44,
                        "Height": 80,
                        "Route": 3.15,
                        "Target": null,
    
                    },

                    5:{
                   
                        "File": "Turret_0",
                        "AnX": 0,
                        "TMX":44,
                        "TMY":0,
                        "PX": 943+22,
                        "PY": 1397+40,
                        "Width": 44,
                        "Height": 80,
                        "Route": 3.15,
                        "Target": null,
    
                    },

                    6:{
                   
                        "File": "Turret_0",
                        "AnX": 0,
                        "TMX":44,
                        "TMY":0,
                        "PX": 164+22,
                        "PY": 1484+40,
                        "Width": 44,
                        "Height": 80,
                        "Route": 3.15,
                        "Target": null,
    
                    },

                    7:{
                   
                        "File": "Turret_0",
                        "AnX": 0,
                        "TMX":44,
                        "TMY":0,
                        "PX": 339+22,
                        "PY": 1484+40,
                        "Width": 44,
                        "Height": 80,
                        "Route": 3.15,
                        "Target": null,
    
                    },

                    8:{
                   
                        "File": "Turret_0",
                        "AnX": 0,
                        "TMX":44,
                        "TMY":0,
                        "PX": 693+22,
                        "PY": 1484+40,
                        "Width": 44,
                        "Height": 80,
                        "Route": 3.15,
                        "Target": null,
    
                    },

                    9:{
                   
                        "File": "Turret_0",
                        "AnX": 0,
                        "TMX":44,
                        "TMY":0,
                        "PX": 868+22,
                        "PY": 1484+40,
                        "Width": 44,
                        "Height": 80,
                        "Route": 3.15,
                        "Target": null,
    
                    },

                },

                "SwarmList": [],

                "Swarm":{

                    "File": "Sworm_0",
                    "TMX": 76,
                    "TMY": 0,
                    "Height": 60,
                    "Width": 76,
                    "SpeedMove": 20

                },

                "SwarmMove":{

                    0: 5,
                    1: 10,
                    2: 13,
                    3: 16

                },

                "SpecTurrets":{

                    0:{
                   
                        "File": "Turret_1",
                        "AnX": 0,
                        "TMX":84,
                        "TMY":0,
                        "PX": -10+42,
                        "PY": 1246+77,
                        "Width": 84,
                        "Height": 154,
                        "Route": 3.15,
                        "Target": null,
                        "TPX": 0,
                        "TPY": 0,
    
                    },

                    1:{
                   
                        "File": "Turret_1",
                        "AnX": 0,
                        "TMX":84,
                        "TMY":0,
                        "PX": 1001+42,
                        "PY": 1246+77,
                        "Width": 84,
                        "Height": 154,
                        "Route": 3.15,
                        "Target": null,
                        "TPX": 0,
                        "TPY": 0,
    
                    },

                },

                "HitList": [],

                "Shot_0_Hit":{
                   
                    "File": "Shot_0_Hit",
                    "AnX": 0,
                    "MaxAnX": 7,
                    "TMX":104,
                    "Width": 104,
                    "Height": 105,
                    "HWidth": 104,
                    "HHeight": 105

                },

                "Shot_1_Hit":{
                   
                    "File": "Shot_1_Hit",
                    "AnX": 0,
                    "MaxAnX": 4,
                    "TMX":7,
                    "Width": 7,
                    "Height": 7,
                    "HWidth": 7,
                    "HHeight": 7

                },

                "Sworm_Hit":{
                   
                    "File": "Sworm_Hit",
                    "AnX": 0,
                    "MaxAnX": 6,
                    "TMX":76,
                    "Width": 76,
                    "Height": 60,
                    "HWidth": 76,
                    "HHeight": 60

                },

            },
            
            Skills =  {

                "FortLive": 10, // Zycie - load
                "MaxFortLive": 10, // MaxZycie
                "FortIncrease": 5, // dodawanie co poziom zycia

                "Turrets_1_Unlock": 0,
                "Turrets_2_Unlock": 0,

                "Turrets_0_Circle": 100, // 240 koniec gry
                "Turrets_1_SPEED": 200, // 15 koniec gry
                "Turrets_2_SPEED": 3000, //  400 koniec gry

                "Turrets_0_Circle_I": 10,
                "Turrets_1_SPEED_I": 5,
                "Turrets_2_SPEED_I": 100,

                "Turrets_0_Level": 0,
                "Turrets_1_Level": 0,
                "Turrets_2_Level": 0,
                "Fort_Level": 0,

            },
            
            Wave = {

                "Wave": 1, // aktualna poziom fall
                
                "WavesLive": 10,
                "Waves": 1, // ilsc fall
                "Spawn": 10, // ilosc do stworzenia
                "SpawnIncrease": 10, // zwiekszenie co poziom

                "SpeedSpawn": 2000, // szybkosc spalnu minifal jednostek
                "SpeedSpawnIncrease": 20,

                "SwarmSpeed": 2

            },
           
            Shop = {

                "Turret_1":{

                    "Max": 10,

                    0: 40,
                    1: 100,
                    2: 300,
                    3: 1000,
                    4: 3000,
                    5: 10000,
                    6: 20000,
                    7: 25000,
                    8: 30000,
                    9: 50000,

                },

                "Turret_2":{

                    "Max": 2,

                    0: 25000,
                    1: 50000,

                },

                "Turret_1_Speed":{

                    "Max": 37,

                    0: 200,
                    1: 300,
                    2: 400,
                    3: 500,
                    4: 600,
                    5: 700,
                    6: 800,
                    7: 1000,
                    8: 1300,
                    9: 1700,
                    10: 2000,
                    11: 2400,
                    12: 2900,
                    13: 3300,
                    14: 3900,
                    15: 4500,
                    16: 5000,
                    17: 8000,
                    18: 10000,
                    19: 11000,
                    20: 12000,
                    21: 13000,
                    22: 13500,
                    23: 19000,
                    24: 25000,
                    25: 30000,
                    26: 35000,
                    27: 40000,
                    28: 45000,
                    29: 50000,
                    30: 55000,
                    31: 60000,
                    32: 65000,
                    33: 70000,
                    34: 75000,
                    35: 80000,
                    36: 90000,
                    37: 100000,

                },

                "Turret_2_Speed":{

                    "Max": 25,

                    0: 10000,
                    1: 11000,
                    2: 12000,
                    3: 13000,
                    4: 13500,
                    5: 14000,
                    6: 14500,
                    7: 15000,
                    8: 15500,
                    9: 16000,
                    10: 16500,
                    11: 17000,
                    12: 18000,
                    13: 19000,
                    14: 19000,
                    15: 20000,
                    16: 30000,
                    17: 50000,
                    18: 60000,
                    19: 70000,
                    20: 90000,
                    21: 100000,
                    22: 110000,
                    23: 120000,
                    24: 130000,
                    25: 140000,
                    26: 150000,
                    27: 160000,
                    28: 170000,
                    29: 180000,
                    30: 200000,

                },

                "Boom":{

                    "Max": 14,

                    0: 1000,
                    1: 2000,
                    2: 3000,
                    3: 4000,
                    4: 5000,
                    5: 8000,
                    6: 9000,
                    7: 15000,
                    8: 20000,
                    9: 40000,
                    10: 70000,
                    11: 100000,
                    12: 150000,
                    13: 160000,
                    14: 170000,

                },

                "Fort":{

                    "Max": 50,

                    0: 500,
                    1: 1000,
                    2: 1500,
                    3: 2000,
                    4: 2500,
                    5: 3000,
                    6: 3500,
                    7: 4000,
                    8: 4500,
                    9: 5000,
                    10: 5500,
                    11: 6000,
                    12: 6500,
                    13: 7000,
                    14: 7500,
                    15: 8000,
                    16: 9000,
                    17: 10000,
                    18: 11000,
                    19: 12000,
                    20: 13000,
                    21: 14000,
                    22: 15000,
                    23: 16000,
                    24: 17000,
                    25: 18000,
                    26: 19000,
                    27: 20000,
                    28: 21000,
                    29: 22000,
                    30: 23000,
                    31: 24000,
                    32: 25000,
                    33: 26000,
                    34: 27000,
                    35: 28000,
                    36: 29000,
                    37: 30000,
                    38: 31000,
                    39: 32000,
                    40: 33000,
                    41: 34000,
                    42: 35000,
                    43: 36000,
                    44: 37000,
                    45: 38000,
                    46: 39000,
                    47: 40000,
                    48: 41000,
                    49: 42000,
                    50: 43000,

                },

            };
        