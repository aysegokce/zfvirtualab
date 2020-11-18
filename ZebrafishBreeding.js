function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    document.getElementById("Home").style.display="none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


var BreedingSetupID=document.getElementById("BreedingSetup");
var checkRadiomale ;
var checkRadiofemale ;
var GenderDiv = document.getElementById("FishSelect");
function openBreedingSetup(){    
    checkRadiomale =document.querySelector('input[name="male"]:checked');
    checkRadiofemale =document.querySelector( 'input[name="female"]:checked');
   
    if (checkRadiomale != null && checkRadiofemale != null ){
        GenderDiv.style.display = "none";
        BreedingSetupID.style.display= "block"; 
        
    }
    
    else {
       alert("Please select one male and one female fish" )
    }
    
}





var setup1Img = document.getElementById("setup1");
var setup2Img = document.getElementById("setup2");
var setup3Img = document.getElementById("setup3");
var setup4Img = document.getElementById("setup4");
var setup5Img = document.getElementById("setup5");
var setup6Img = document.getElementById("setup6");

var setup0AllImg = document.getElementById("setupAll0");
var setup1AllImg = document.getElementById("setupAll1");
var setup2AllImg = document.getElementById("setupAll12");
var setup3AllImg = document.getElementById("setupAll123");
var setup4AllImg = document.getElementById("setupAll1234");
var setup5AllImg = document.getElementById("setupAll12345");
var setup6AllImg = document.getElementById("setupAll123456");

var nextDayButton = document.getElementById("NextDay");

function togglePopup_BreedingSetup0(){
    document.getElementById("popup-1").classList.toggle("active");
  }

  function togglePopup_BreedingSetup1(){
    document.getElementById("popup-2").classList.toggle("active");
    nextDayButton.style.display="block";
  }
  function togglePopup_BreedingSetup2(){
    document.getElementById("popup-3").classList.toggle("active");
    document.getElementById("togglebutton2").style.display="none";
    document.getElementById("NextDay2").style.display="block";
  }



  




function clicksetup(setupID){
    if (setupID == 1){
        var moveStart = {"top": "500px",
                         "left": "100px"};
        var moveEnd   = {"top": "1000px",
                        "left": "600px"};
        var options        = {"duration": 1000};

        setup1Img.animate([moveStart, moveEnd], options)
        setup1Img.style.opacity = '0'
        setup0AllImg.style.display = 'none'        
        setup2Img.setAttribute("onclick", "clicksetup(2)")
    }

    else if (setupID == 2){
        var moveStart = {"top": "500px",
                         "left": "350px"};
        var moveEnd   = {"top": "1000px",
                        "left": "600px"};
        var options        = {"duration": 1000};

        setup2Img.animate([moveStart, moveEnd], options)        
        setup2Img.style.opacity = '0'
        setup1AllImg.style.display = "none"
        setup3Img.setAttribute("onclick", "clicksetup(3)")
    }

    else if (setupID == 3){
        var moveStart = {"top": "500px",
                         "left": "600px"};
        var moveEnd   = {"top": "1000px",
                        "left": "600px"};
        var options        = {"duration": 1000};

        setup3Img.animate([moveStart, moveEnd], options)        
        setup3Img.style.opacity = '0'
        setup2AllImg.style.display = "none"
        setup4Img.setAttribute("onclick", "clicksetup(4)")
    }
    else if (setupID == 4){
        var moveStart = {"top": "500px",
                         "left": "850px"};
        var moveEnd   = {"top": "1000px",
                        "left": "600px"};
        var options        = {"duration": 1000};

        setup4Img.animate([moveStart, moveEnd], options)
        setup4Img.style.opacity = '0'
        setup3AllImg.style.display = "none"        
        setup5Img.setAttribute("onclick", "clicksetup(5)")
    }

    else if (setupID == 5){
        var moveStart = {"top": "500px",
                         "left": "1100px"};
        var moveEnd   = {"top": "1000px",
                        "left": "600px"};
        var options        = {"duration": 1000};

        setup5Img.animate([moveStart, moveEnd], options)
        setup5Img.style.opacity = '0'
        setup4AllImg.style.display = "none"        
        setup6Img.setAttribute("onclick", "clicksetup(6)")
    }

    else if (setupID == 6){
        var moveStart = {"top": "500px",
                         "left": "1350px"};
        var moveEnd   = {"top": "1000px",
                        "left": "600px"};
        var options        = {"duration": 1000};

        setup6Img.animate([moveStart, moveEnd], options)        
        setup6Img.style.opacity = '0'
        setup5AllImg.style.display = "none"
        document.getElementById("togglebutton1").style.display="block"

    }
            


}

var day0ID  = document.getElementById("Day0")
function Day0(){
    BreedingSetupID.style.display= "none";

    day0ID.style.display= "block";
    
}

var day1ID  = document.getElementById("Day1")
function Day1(){
    alert("By the way why we add methylene blue to E3 medium?")
    day0ID.style.display= "none";
    day1ID.style.display= "block";
}


function E3mediumcheck(){
    if ( document.getElementById("E3mediumID").value == "16.5"){

        alert("Correct!");
        document.getElementById("demo2").innerHTML = "Now we have 1x E3 medium ready. <br> We collected embryos and placed them in petri dish with E3 medium";
        document.getElementById("togglebutton2").style.display = "block";

    }
    else {
        alert("Not Correct! Please calculate again");
    }
}



function removeDead(){
    document.getElementById("popup-4").classList.toggle("active");
    document.getElementById("zf_day1_after").style.display = "block";
    document.getElementById("button_DevStages").style.display = "block";
}


// Developmental Stages

var DevVideo = document.getElementById("DevelopmentVideo")
var Devquizbut = document.getElementById("DevQuizButton")

function DevQuiz() {
    DevVideo.style.display= "none";
    Devquizbut.style.display= "none";
    document.getElementById("DevelopmentQuiz").style.display = "block";
    DevQuizRand();
}

var quizCount = 1;
var randomNum;
var myPix = ["Zygote.png",
"Zygote1.png",
"Zygote2.png",
"Zygote3.png",
"Zygote4.png",
"Zygote5.png",
"Zygote6.png",
"Zygote7.png",
"Zygote8.png",
"Zygote9.png",
"Zygote10.png",
"Zygote11.png",
"Zygote12.png",
"Zygote13.png",
"Zygote14.png"];  
var devstartArray =   [0,0,0,3,3,3,5,8 ,10,11,16,20,30,47,72];
var devEndArray = [1,1,2,4,4,4,6,10,11,16,20,24,40,72,85]; 

function DevQuizRand(){     
    
    randomNum = Math.floor(Math.random() * myPix.length);   
    document.getElementById("ZfDevPic").src = myPix[randomNum];
    alert(myPix[randomNum])   
    }
     

    function TestQuiz() {

    if (quizCount < 2){
           
    var devend = devEndArray[randomNum];
    var devstart = devstartArray[randomNum];    
    if(document.getElementById("DevQuizNum").value <= devend && document.getElementById("DevQuizNum").value >= devstart ){
        alert("Close enough!");
        quizCount ++;
        DevQuizRand();
    }
    else {alert("Try Again")}
    
}

    else{
        document.getElementById("DevQuizNum").style.display="none";
        document.getElementById("EnterTestQuiz").style.display="none";
        document.getElementById("hpf").style.display="none";
        document.getElementById("GoTailTest").style.display="block";

    }
    
}


// Tail Test

var testCount;
function TailTestNumofEmbryo(){
    testCount = document.getElementById("TailTestNumofEmbryoID").value;
    document.getElementById("TailTest2").style.display = "block";
    tailtestvideos();
    TailtestGifShow();
    alert(gentype)

}



function shuffle(array) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }

var paralyzed = 0;
var nonparalyzed = 0;
var testvid;
var nonparalyzedVid = ["tailtest_p1_a1.gif",
"tailtest_p1_a2.gif",
"tailtest_p1_a4.gif",
"tailtest_p1_a6.gif",
"tailtest_p1_b1.gif",
"tailtest_p1_b2.gif",
"tailtest_p1_b3.gif",
"tailtest_p1_b5.gif",
"tailtest_p1_c1.gif",
"tailtest_p1_c3.gif",
"tailtest_p1_c4.gif",
"tailtest_p1_c6.gif",
"tailtest_p1_d1.gif",
"tailtest_p1_d3.gif",
"tailtest_p1_d4.gif",
"tailtest_p1_d5.gif",
"tailtest_p1_d6.gif",
"tailtest_p2_a2.gif",
"tailtest_p2_a3.gif",
"tailtest_p2_a4.gif",
"tailtest_p2_a5.gif",
"tailtest_p2_a6.gif",
"tailtest_p2_b1.gif",
"tailtest_p2_b2.gif",
"tailtest_p2_b4.gif",
"tailtest_p2_b5.gif",
"tailtest_p2_b6.gif",
"tailtest_p2_c1.gif",
"tailtest_p2_c2.gif",
"tailtest_p2_c3.gif",
"tailtest_p2_c4.gif",
"tailtest_p2_c6.gif",
"tailtest_p2_d1.gif",
"tailtest_p2_d2.gif",
"tailtest_p2_d3.gif",
"tailtest_p2_d4.gif",
"tailtest_p2_d5.gif"];

var paralyzedVid=["tailtest_p1_a3_paralyzed.gif",
"tailtest_p1_a5_paralyzed.gif",
"tailtest_p1_b4_paralyzed.gif",
"tailtest_p1_b6_paralyzed.gif",
"tailtest_p1_c2_paralyzed.gif",
"tailtest_p1_c5_paralyzed.gif",
"tailtest_p1_d2_paralyzed.gif",
"tailtest_p2_a1_paralyzed.gif",
"tailtest_p2_b3_paralyzed.gif",
"tailtest_p2_c5_paralyzed.gif",
"tailtest_p2_d6_paralyzed.gif"];


var gentype;
function tailtestvideos(){
    var female = checkRadiofemale.value;
    var male = checkRadiomale.value;
    if (female  == "female_c" || female =="female_b")
    {
        
        if (male == "male_a"){
            gentype="het"
        }
        else{
            gentype = "wthet"
        }
    }
    else if (female == "female_a"){
        if (male == "male_a"){
            
            gentype="wthet"
        }
        else{
            gentype = "wt"
        }

        }

if (gentype ==  "het"){

    paralyzedVid=shuffle(paralyzedVid);
    nonparalyzedVid=shuffle(nonparalyzedVid);    
    var wn=Math.floor(Math.random() * 4)-2;    
    var npar = Math.ceil(testCount/4 + wn);    
    paralyzedVid = paralyzedVid.slice(0, npar);
    nonparalyzedVid = nonparalyzedVid.slice(0, testCount-npar);
    testvid = paralyzedVid;
    alert("test")
    alert(testvid)
    alert(paralyzedVid)
    alert(nonparalyzedVid)
    testvid=testvid.concat(nonparalyzedVid);
    alert("test2")
    alert(testvid)
    testvid = shuffle(testvid);
    }
    else{
    testvid =shuffle(nonparalyzedVid);
    testvid= testvid.slice(0,testCount);
    }
}

var shownvid=0;

function TailtestGifShow(){
    
    document.getElementById("TailTestGif").src = testvid[shownvid];
    alert(testvid)   
   
    }
  
 function   TailtestPred(){ 
    var checkpheno =document.querySelector('input[name="TailtestPredID"]:checked').value; 
    
     if (checkpheno == "Paralyzed"){        
         paralyzed = paralyzed +1;
         
     }
     else {
        nonparalyzed++;
     }
     if  (shownvid < testCount-1){
        shownvid++;
        var ele = document.getElementsByName("TailtestPredID");
        for(var i=0;i<ele.length;i++){
           ele[i].checked = false; 
        }        

        TailtestGifShow()
     
    }
    else if ( shownvid == testCount-1){
    document.getElementById("EnterTailtestPred").style.display = "none";
    document.getElementById("GoChisquareID").style.display = "block";  
    }
    
   
    }

  

function GoChisquare(){
    document.getElementById("TailTestPred").style.display = "none";
    document.getElementById("ChiSquaredTest").style.display = "block";
    document.getElementById("TailTestSumTable").rows[0].cells[0].innerHTML = paralyzed;
    document.getElementById("TailTestSumTable").rows[0].cells[1].innerHTML = nonparalyzed;
   
}


function chiSquared(order) {
    if (order == 1){
      var exp1 = document.getElementById("exp1").value;
    var pred1 = document.getElementById("pred1").value;
    var exp2= document.getElementById("exp2").value;
    var pred2 = document.getElementById("pred2").value;
    
    var chi = Math.pow((exp1-pred1), 2)/exp1 + Math.pow((exp2-pred2), 2)/exp2
    
     if (chi > 3.28){  
     document.getElementById("demo").innerHTML=("Chi-squared = " + chi + " p value < 0.05");
     }
     else {
     document.getElementById("demo").innerHTML= ("Chi-squared = " + chi + " p value > 0.05");
     }

     document.getElementById("GoGenotype").style.display = "block";
   }
   else if (order ==2) {
      var exp1 = document.getElementById("exp1b").value;
      var pred1 = document.getElementById("pred1b").value;
      var exp2= document.getElementById("exp2b").value;
      var pred2 = document.getElementById("pred2b").value;
      var exp3= document.getElementById("exp3b").value;
      var pred3 = document.getElementById("pred3b").value;
      
      var chi = Math.pow((exp1-pred1), 2)/exp1 + Math.pow((exp2-pred2), 2)/exp2+ Math.pow((exp3-pred3), 2)/exp3
      
       if (chi > 5.99){  
       document.getElementById("demo3").innerHTML=("Chi-squared = " + chi + " p value < 0.05");
       }
       else {
       document.getElementById("demo3").innerHTML= ("Chi-squared = " + chi + " p value > 0.05");
       }
  
       document.getElementById("EnterPredGenType").style.display = "block";
       document.getElementById("CheckGentypeID").style.display = "block";


   }
    }
    


function DNAExt(ingred){
    
    if (ingred == "tris"){
        
       var amount = document.getElementById("TrisAmount").value;
       
       if (amount == 5){
           alert("Tris is added");
           document.getElementById("DNAFalcon1").style.display="none"
           document.getElementById("EdtaAmount").style.display = "block";
           document.getElementById("AddEdtaAmount").style.display = "block";
           document.getElementById("ml2").style.display = "block";
       }
       else alert("Amount is not correct")

    }

    if (ingred == "edta"){
        var amount = document.getElementById("EdtaAmount").value;
        if (amount == 5){
            alert("EDTA is added");
            document.getElementById("DNAFalcon2").style.display="none"
            document.getElementById("NaclAmount").style.display = "block";
            document.getElementById("AddNaclAmount").style.display = "block";
            document.getElementById("ml3").style.display = "block";
        }
        else alert("Amount is not correct")
 
     }

     if (ingred== "nacl"){
        var amount = document.getElementById("NaclAmount").value;
        if (amount == 5){
            alert("NaCl is added");
            document.getElementById("DNAFalcon3").style.display="none";
            document.getElementById("SDSAmount").style.display = "block";
            document.getElementById("AddSDSAmount").style.display = "block";
            document.getElementById("ml4").style.display = "block";
        }
        else alert("Amount is not correct")
 
     }

     if (ingred == "sds"){
        var amount = document.getElementById("NaclAmount").value;
        if (amount == 5){
            alert("SDS is added");
            document.getElementById("DNAFalcon4").style.display="none"
            document.getElementById("waterAmount").style.display = "block";
            document.getElementById("AddwaterAmount").style.display = "block";
            document.getElementById("ml5").style.display = "block";
        }
        else alert("Amount is not correct")
 
     }

     if (ingred == "water"){
        var amount = document.getElementById("waterAmount").value;
        if (amount == 5){
            alert("Water is added");
            document.getElementById("DNAFalcon5").style.display="none";
            document.getElementById("NextStage").style.display = "block";
        }
        else alert("Amount is not correct")
 
     }
}

function DNAextStage2(){
    document.getElementById("DNAExtractionBuffer").style.display = "none";
    document.getElementById("DNAExtraction").style.display = "block";
}

function DNAext2(order){
    if (order == 1){
        document.getElementById("embryo").style.display = "none";
        document.getElementById("AddEmby").style.display = "none";
        document.getElementById("removewat").style.display = "block";
        document.getElementById("eppendorf1").style.display = "none";

    }

    if (order == 2){
        document.getElementById("removewat").style.display = "none";
        document.getElementById("AddExtBuffer").style.display = "block";
        document.getElementById("eppendorf2").style.display = "none";

    }

    if (order == 3){
        document.getElementById("Buffer").style.display = "none";
        document.getElementById("AddExtBuffer").style.display = "none";
        document.getElementById("AddProteinaseK").style.display = "block";
        document.getElementById("eppendorf3").style.display = "none";

    }

    if (order == 4){
        document.getElementById("ProtainaseK").style.display = "none";
        document.getElementById("AddProteinaseK").style.display = "none";
        document.getElementById("HeatBlockimg").style.display = "block";
        document.getElementById("HeatBlock").style.display = "block";

    }

    if (order == 5){
        document.getElementById("HeatBlock").style.display = "none";
        document.getElementById("eppendorf4").style.display = "none";
        document.getElementById("DNAextDay2").style.display = "block";


    }

    if (order == 6){
        document.getElementById("DNAExtraction").style.display = "none";
        document.getElementById("DNAExtractionDay2").style.display = "block";

    }

    

}

function DNAext3(order){
    if (order ==1){
        document.getElementById("NextstepDNAext").style.display = "none";
        document.getElementById("Centrifuge1").style.display = "block";
        document.getElementById("eppendorf_day2a").style.display = "block";


    }
   
    if (order ==2){
        document.getElementById("Centrifuge1").disabled = true;
        document.getElementById("eppendorf_day2b").style.display = "block";
        document.getElementById("supernatant1").style.display = "block";
    }

    if (order ==3){
        document.getElementById("supernatant1").disabled = true;
        document.getElementById("eppendorf_day2c").style.display = "block";
        document.getElementById("isop").style.display = "block";
        
    }

    if (order ==4){
        document.getElementById("isop").style.display = "none";
        document.getElementById("eppendorf_day2d").style.display = "block";
        document.getElementById("Centrifuge2").style.display = "block";
        
    }
    if (order ==5){
        document.getElementById("Centrifuge2").disabled = true;
        document.getElementById("eppendorf_day2e").style.display = "block";
        document.getElementById("supernatant2").style.display = "block";
        
    }

    if (order ==6){
        document.getElementById("supernatant2").style.display = "none";
        document.getElementById("eppendorf_day2f").style.display = "block";
        document.getElementById("etoh").style.display = "block";
        
    }
    if (order ==7){
        document.getElementById("etoh").style.display = "none";
        document.getElementById("eppendorf_day2g").style.display = "block";
        document.getElementById("Centrifuge3").style.display = "block";
        
    }
    if (order ==8){
        document.getElementById("Centrifuge3").disabled = true;
        document.getElementById("eppendorf_day2h").style.display = "block";
        document.getElementById("supernatant3").style.display = "block";
        
    }
    if (order ==9){
        document.getElementById("supernatant3").style.display = "none";
        document.getElementById("eppendorf_day2h").style.display = "none";
        document.getElementById("eppendorf_day2hi").style.display = "block";
        document.getElementById("airdry").style.display = "block";
        
    }
    if (order ==10){
        document.getElementById("airdry").style.display = "none";
        document.getElementById("eppendorf_day2hi").style.display = "none";
        document.getElementById("eppendorf_day2i").style.display = "block";
        document.getElementById("supernatant4").style.display = "block";
        
    }

    if (order ==11){
        document.getElementById("supernatant4").style.display = "none";
        document.getElementById("eppendorf_day2i").style.display = "none";
        document.getElementById("eppendorf_day2j").style.display = "block";
        document.getElementById("gotonanodrop").style.display = "block";
        
    }

    if (order ==12){
        document.getElementById("DNAExtractionDay2").style.display = "none";
        document.getElementById("nanodrop").style.display = "block";
        NanoDropTable(1)
        
    }


}

var nanoQPCRres = [];

function nanodropRand(){
    if (gentype == "wt"){
        for (i = 0; i<testCount; i++){
        var x = (Math.random()*3.75)+18.21;

        var temp={"name" : testvid[i],
         "n260230": Math.ceil(( (Math.random()*1.67)+0.6 )*10)/10,
         "n260280":Math.ceil((  (Math.random()*0.25)+1.82)*10)/10 ,
         "nng":Math.ceil(( (Math.random()*169)+30.6 )*10)/10,
         "CT_1N":Math.ceil(x*10)/10,
         "CT_2N": Math.ceil(( x + (Math.random()*2)-1)*10)/10,
         "CT_1S":Math.ceil(( x + (Math.random()*3)+8)*10)/10,
         "CT_2S": Math.ceil(( x + (Math.random()*3)+8)*10)/10
     }
     nanoQPCRres.push(temp);
    }  
    }

   else if (gentype == "wthet"){    
        for (i = 0; i<testCount; i++){
            
        var z =Math.random();
        if (z<0.5){
        var x = (Math.random()*3.75)+18.21;

        var temp={"name" : testvid[i],
         "n260230":Math.ceil(( (Math.random()*1.67)+0.6 )*10)/10,
         "n260280":Math.ceil(( (Math.random()*0.25)+1.82 )*10)/10,
         "nng":Math.ceil(((Math.random()*169)+30.6 )*10)/10,
         "CT_1N":Math.ceil(x*10)/10,
         "CT_2N":Math.ceil(( x + (Math.random()*2)-1)*10)/10,
         "CT_1S":Math.ceil(( x + (Math.random()*3)+8)*10)/10,
         "CT_2S":Math.ceil(( x + (Math.random()*3)+8)*10)/10
     }

     } else {
        
        var x = (Math.random()*3.75)+18.21;

        var temp={"name" : testvid[i],
         "n260230":Math.ceil(( (Math.random()*1.67)+0.6 )*10)/10,
         "n260280":Math.ceil(( (Math.random()*0.25)+1.82)*10)/10 ,
         "nng":Math.ceil(((Math.random()*169)+30.6 )*10)/10,
         "CT_1N":Math.ceil(x*10)/10,
         "CT_2N":Math.ceil(( x + (Math.random()*2)-1)*10)/10,
         "CT_1S":Math.ceil(( x + (Math.random()*2)-1)*10)/10,
         "CT_2S":Math.ceil(( x + (Math.random()*2)-1)*10)/10
     }

     }
     
        
     nanoQPCRres.push(temp);
    }  
    }

    else if (gentype == "het"){
        for (i = 0; i<paralyzedVid.length; i++){
        var z =Math.random();
        if (z<0.66){
        var x = (Math.random()*3.75)+18.21;

        var temp={"name" : paralyzedVid[i],
         "n260230": Math.ceil(((Math.random()*1.67)+0.6)*10)/10 ,
         "n260280": Math.ceil(((Math.random()*0.25)+1.82)*10)/10 ,
         "nng":Math.ceil(((Math.random()*169)+30.6 )*10)/10,
         "CT_1N":Math.ceil(( x)*10)/10,
         "CT_2N": Math.ceil((x + (Math.random()*2)-1)*10)/10,
         "CT_1S":Math.ceil(( x + (Math.random()*3)+8)*10)/10,
         "CT_2S":Math.ceil(( x + (Math.random()*3)+8)*10)/10
     }

     } else {
        var x = (Math.random()*3.75)+18.21;

        var temp={"name" : testvid[i],
         "n260230": Math.ceil(((Math.random()*1.67)+0.6 )*10)/10,
         "n260280": Math.ceil(((Math.random()*0.25)+1.82 )*10)/10,
         "nng":Math.ceil(((Math.random()*169)+30.6)*10)/10 ,
         "CT_1N":Math.ceil(( x)*10)/10,
         "CT_2N": Math.ceil((x + (Math.random()*2)-1)*10)/10,
         "CT_1S": Math.ceil((x + (Math.random()*2)-1)*10)/10,
         "CT_2S": Math.ceil((x + (Math.random()*2)-1)*10)/10
     }

     }        
     nanoQPCRres.push(temp);
    }
    for (i = 0; i<nonparalyzedVid.length; i++){
        var x = (Math.random()*3.75)+18.21;

        var temp={"name" : nonparalyzedVid[i],
         "n260230": Math.ceil(((Math.random()*1.67)+0.6)*10)/10,
         "n260280": Math.ceil(((Math.random()*0.25)+1.82)*10)/10,
         "nng":Math.ceil(((Math.random()*169)+30.6)*10)/10,
         "CT_1N": Math.ceil(((x+ Math.random()*3)+4)*10)/10 ,
         "CT_2N": Math.ceil(((x + Math.random()*3)+4)*10)/10 ,
         "CT_1S": Math.ceil((x )*10)/10 ,
         "CT_2S": Math.ceil(((x + Math.random()*2)-1)*10)/10      

     }
     nanoQPCRres.push(temp);

    }

}

}



var filtqPCRres ;
function NanoDropTable(order){
    

    if (order == 1){
        nanodropRand()
    filtqPCRres =  nanoQPCRres.filter(function(hero) {
        
        return testvid.includes(hero.name);
    });
    var globalCounter = 0;
    alert(JSON.stringify(nanoQPCRres));
    alert(JSON.stringify(filtqPCRres));
var tbody = document.getElementById('tbody_1');

for (var i = 0; i < Object.keys(filtqPCRres).length; i++) {
    

    var tr = "<tr>";
    tr += "<th>Embryo_" + i + "</th><td>" + filtqPCRres[i].n260230.toString()  + "</td>" + "<td>" +
     filtqPCRres[i].n260280.toString()  +"</td><td>" + filtqPCRres[i].nng.toString()  +"</td></tr>";
    
    tbody.innerHTML += tr;
}    
    }

    if (order == 2){
        var globalCounter = 0;
var tbody = document.getElementById('tbody_2');
for (var i = 0; i < Object.keys(filtqPCRres).length; i++) {
    var tr = "<tr>";
    tr += "<th>Embryo_" + i + "</th><td>" + filtqPCRres[i].n260230.toString() + "</td>" + "<td>" +
     filtqPCRres[i].n260280.toString() +"</td><td>" + filtqPCRres[i].nng.toString() + "</td><td>" +
     filtqPCRres[i].CT_1S.toString() + "</td><td>" + filtqPCRres[i].CT_2S.toString() + "</td><td>" +
     filtqPCRres[i].CT_2N.toString() + "</td><td>"+ filtqPCRres[i].CT_1N.toString() + "</td><td>" + "</td></tr>";
    
    tbody.innerHTML += tr;
}    
    }
}

function gotoqpcr(){
    alert ("Did you checked 230/260 ratio and 260/280 ratio? Was there any sample you want to exclude?")
    document.getElementById("nanodrop").style.display = "none";
    document.getElementById("QPCR").style.display = "block";


}

function Checkmastermix(){
    if (document.getElementById("Syber_S").value != 50 || document.getElementById("Syber_N").value !=50){
        alert("Check Syber amount!")
    }
    else if (document.getElementById("SP_S").value !=10 || document.getElementById("SP_N").value !=0){
        alert("Check S primer amount. Note that you need S primer only in S primer set.")
    }
    else if (document.getElementById("NP_N").value !=10 || document.getElementById("NP_S").value !=0){
        alert("Check N primer amount. Note that you need S primer only in N primer set.")
    }
    else if (document.getElementById("SP_S").value !=10 || document.getElementById("SP_N").value !=0){
        alert("Check S primer amount. Note that you need S primer only in S primer set.")
    }

    else if (document.getElementById("RP_S").value !=10 || document.getElementById("RP_N").value !=10){
        alert("Check S primer amount. Note that you need Reverse primer only in both sets.")
    }

    else if (document.getElementById("NFW_S").value !=10 || document.getElementById("NFW_N").value !=10){
        alert("Check water amount.")
    }
    else {
        alert ("Master mix ready")
        document.getElementById("QPCR").style.display = "none";
        document.getElementById("QPCRres").style.display = "block";
        NanoDropTable(2)

    }


}

function CheckGentype(){
    if (document.getElementById("EnterPredGenType").value != gentype){
        alert( "Predicted genotype is not correct. Calculate again")
    }
    else{
        alert (" Well done!!")
    }
}





