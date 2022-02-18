/*공통*/
html { width:100%; height:100vh; overflow: auto; scroll-snap-type: y mandatory; background-color: black; } 
a { text-decoration: none; color:white; } 
.page { scroll-snap-align: center; display: inline-block; width:100%; height:100vh; display:flex; flex-direction: column; justify-content: center; font-size: 38px; align-items: center; background-color: black; color:white; } 
.page h1 { font-size:3.5vw; display: block;; } 
.title_kor { transform: translateX(0); transition:all 2s ease-out 1s; /* property duration function delay */ -webkit-transition:all 2s ease-out 1s; -moz-transition:all 2s ease-out 1s; -ms-transition:all 2s ease-out 1s; -o-transition:all 2s ease-out 1s; } 
.page button { display: block; border:3px solid white; color:white; background: none; width:15%; height:45px; font-size: 18px; font-weight: bold; } 
 
.geeks { position: relative; width: 300px; text-align: center; } 
.geeks::before { content: ""; position: absolute; top: -2px; left: -2px; width: 0; height: 0; background: transparent; border: 2px solid transparent; } 
.geeks:hover::before { animation: animate 1s linear forwards; content: ""; } 
@keyframes animate { 
 0% { width: 0; height: 0; border-top-color: white; border-right-color: transparent; border-bottom-color: transparent; border-left-color: transparent; } 

 50% { width: 100%; height: 0; border-top-color: white; border-right-color: white; border-bottom-color: transparent; border-left-color: transparent; } 

 100% { width: 100%; height: 100%; border-top-color: white; border-right-color: white; border-bottom-color: transparent; border-left-color: transparent; } 
 }
.geeks:hover { content: "Yes"; } 
.geeks::after { content: ""; position: absolute; top: -2px; left: -2px; width: 0; height: 0; background: transparent; border: 2px solid transparent; } 
.geeks:hover::after { animation: animates 1s linear forwards; } 

@keyframes animates { 
 0% { width: 0; height: 0; border-top-color: transparent; border-right-color: transparent; border-bottom-color: transparent; border-left-color: white; } 

 50% { width: 0; height: 100%; border-top-color: transparent; border-right-color: transparent; border-bottom-color: white; border-left-color: white; } 

 100% { width: 100%; height: 100%; border-top-color: transparent; border-right-color: transparent; border-bottom-color: white; border-left-color: white; } 
 }
.glitch { font-size:8vw; font-family: 'Raleway', sans-serif; font-weight: 700; text-decoration: none; text-transform: uppercase; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); margin: 0; color: #fff; letter-spacing: 5px; } 
.glitch:before, .glitch:after { display: block; content: attr(data-glitch); text-transform: uppercase; position: absolute; top: 0; left: 0; height: 100%; width: 100%; opacity: .8; } 
.glitch:after { color: #c3200e; z-index: -2; animation: glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both 1000 } 
.glitch:before { color: rgb(37, 206, 206); z-index: -1; animation: glitch .35s cubic-bezier(.25, .46, .45, .94) both 1000 } .glitch:hover:before { animation: none; } 
.glitch:hover:after { animation: none; } 
@keyframes glitch { 
 0% { transform: translate(0) } 
20% { transform: translate(-5px, 5px) } 
40% { transform: translate(-5px, -5px) } 
60% { transform: translate(5px, 5px) } 
80% { transform: translate(5px, -5px) } 
to { transform: translate(0) } 
 }
 .geeks { margin:30px auto; padding: 10px; width: 200px; font-size: 15px; } 
 .geeks i { font-size: 38px; } 
.select_date { display: inline; } 
 /*apply*/
 input[type="radio"] { color:white; } 
 label { font-size: 18px; display: flex; } 
.inrow { display: flex; align-items: center; margin-bottom: 20px; } 
.select_date { display: inline; margin: 10px 10px 10px 0; font-size: 18px; } 
.select_data { width:350px; } 
.select { justify-content: center; } 
.turn_next { position: absolute; bottom:10px; /*display: none; */
 animation: motion 0.5s linear 0s infinite alternate; } 
 @keyframes motion { 
 0% { bottom: 20px; } 
 100% { bottom: 10px; } 
 }
.personnel { font-size: 15px; background-size: 20px; padding: 5px 20px 5px 10px; border-radius: 4px; outline: 0 none; } 
.input_check { margin:0 2px; color:rgb(131, 209, 13); justify-content:space-between; } 
.input_check i { font-size: 18px; display: none; } 
.chk2,.chk3,.chk4 { display: none; } 
input[type="text"] { width:100%; padding:5px; font-size: 15px; border-radius: 4px; border-color: rgb(164, 194, 130);; } 
 input[type="text"]:focus { outline-color:rgb(165, 87, 87); } 
 /*status*/
 .details { width:60%; } 
 progress { width:100%; } 
 summary::marker { display: none; content: ""; } 
.progress { font-size: 12px; } 
table { width:100%; border-collapse: collapse; line-height: 1.5; margin-top:20px; } 
table td { font-size: 15px; padding: 10px; vertical-align: top; border: 1px solid #ccc; width:15%; text-align: center; } 
table td :first-child { width:35%; } 
table tr:first-child { text-align: center; } 
.cancel_event { margin-top:50px; } 
/*list*/
.list tr:hover{background-color: rgb(92, 189, 156);}
.list tr:first-child{background:none;}
.list table{
    border-color: white;
    table-layout: fixed;
    text-overflow: ellipsis;
}
@media (max-width:768px) and (min-width:320px){
 .glitch { font-size:10vw; } 
 .page h1 { font-size:7vw; display: block;; } 
 .details,table { width:100%; } 
 /*apply*/
 .select_data { width:80%; } 
 /*status*/

 /*table { width:100%; transform:rotate(-90deg); } 
 table td { transform:rotate(90deg); } 
 table tr:first-child { width:40%; }*/
/*list*/
.list table td{vertical-align: middle;}
:is(.list table) td:first-child,td:nth-child(3),td:nth-child(6){width:5%;}
.list table td:nth-child(2){text-overflow:ellipsis; overflow:hidden;}
:is(.list table) td:nth-child(4),td:nth-child(5),td:nth-child(6){font-size: 3vw;}
} 
