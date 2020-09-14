function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
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


function clicksetup(setupID){
    if (setupID == 1){
        let moveStart = {"top": "500px",
                         "left": "100px"};
        let moveEnd   = {"top": "1000px",
                        "left": "600px"};
        let options        = {"duration": 1000};

        setup1Img.animate([moveStart, moveEnd], options)
        setup1Img.style.opacity = '0'
        setup0AllImg.style.display = 'none'        
        setup2Img.setAttribute("onclick", "clicksetup(2)")
    }

    else if (setupID == 2){
        let moveStart = {"top": "500px",
                         "left": "350px"};
        let moveEnd   = {"top": "1000px",
                        "left": "600px"};
        let options        = {"duration": 1000};

        setup2Img.animate([moveStart, moveEnd], options)        
        setup2Img.style.opacity = '0'
        setup1AllImg.style.display = "none"
        setup3Img.setAttribute("onclick", "clicksetup(3)")
    }

    else if (setupID == 3){
        let moveStart = {"top": "500px",
                         "left": "600px"};
        let moveEnd   = {"top": "1000px",
                        "left": "600px"};
        let options        = {"duration": 1000};

        setup3Img.animate([moveStart, moveEnd], options)        
        setup3Img.style.opacity = '0'
        setup2AllImg.style.display = "none"
        setup4Img.setAttribute("onclick", "clicksetup(4)")
    }
    else if (setupID == 4){
        let moveStart = {"top": "500px",
                         "left": "850px"};
        let moveEnd   = {"top": "1000px",
                        "left": "600px"};
        let options        = {"duration": 1000};

        setup4Img.animate([moveStart, moveEnd], options)
        setup4Img.style.opacity = '0'
        setup3AllImg.style.display = "none"        
        setup5Img.setAttribute("onclick", "clicksetup(5)")
    }

    else if (setupID == 5){
        let moveStart = {"top": "500px",
                         "left": "1100px"};
        let moveEnd   = {"top": "1000px",
                        "left": "600px"};
        let options        = {"duration": 1000};

        setup5Img.animate([moveStart, moveEnd], options)
        setup5Img.style.opacity = '0'
        setup4AllImg.style.display = "none"        
        setup6Img.setAttribute("onclick", "clicksetup(6)")
    }

    else if (setupID == 6){
        let moveStart = {"top": "500px",
                         "left": "1350px"};
        let moveEnd   = {"top": "1000px",
                        "left": "600px"};
        let options        = {"duration": 1000};

        setup6Img.animate([moveStart, moveEnd], options)        
        setup6Img.style.opacity = '0'
        setup5AllImg.style.display = "none"
        nextDayButton.style.display="block"

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
        document.getElementById("NextDay2").style.display = "block";
        document.getElementById("zf_day0").style.display = "block";
        document.getElementById("NextDay2").style.display = "block";

    }
    else {
        alert("Not Correct! Please calculate again");
    }
}

function zoomInDead(type){
    if (type=="before"){
    document.getElementById("zf_day1_deadzoom").style.display = "block";
    document.getElementById("closeImg").style.display = "block"; 
    }
    else if (type == "after"){
    document.getElementById("zf_day1_deadzoom").style.display = "block";
    document.getElementById("closeImg").style.display = "block";
    }
    
}



function zoomOutDead(type){
    if (type=="before"){
        document.getElementById("zf_day1_deadzoom").style.display = "none";
        document.getElementById("closeImg").style.display = "none";
        }
        else if (type == "after"){
        document.getElementById("zf_day1_deadzoom").style.display = "none";
        document.getElementById("closeImg").style.display = "none";
        }
    
}

function removeDead(){
    document.getElementById("zf_day1_after").style.display = "block";
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
var myPix = new Array("zf_1.jpg","zf_2.jpg","zf_3.jpg", "zf_4.jpg","zf_5.jpg");    
var devEndArray = [3,6,11,36,72];
var devstartArray = [1,4,7,12, 37]; 

function DevQuizRand(){    
    
    randomNum = Math.floor(Math.random() * myPix.length);   
    document.getElementById("ZfDevPic").src = myPix[randomNum]; 
    }


    function TestQuiz() {       
    if (quizCount < 2){
           
    var devend = devEndArray[randomNum];
    var devstart = devstartArray[randomNum];         
   
    if(document.getElementById("DevQuizText").value <= devend &&document.getElementById("DevQuizText").value >= devstart ){
        alert("Close enough!");
        quizCount ++;
        DevQuizRand();
    }
    else {alert("Try Again")}
    
}

    else{
        document.getElementById("EnterTestQuiz").style.display="block";
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
var nonparalyzedVid = ["tailtest_1.gif", "tailtest_2.gif", "tailtest_3.gif", "tailtest_4.gif"];
var paralyzedVid=["tailtest_5.gif", "tailtest_6.gif"];


var gentype;
function tailtestvideos(){
    var female = checkRadiofemale.value;
    var male = checkRadiomale.value;
    if (female  == "female_c" || female =="female_b")
    {
        if (male = "male_a"){
            gentype="het"
        }
        else{
            gentype = "wthet"
        }
    }
    else if (female == "female_a"){
        if (male = "male_a"){
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
    testvid = [paralyzedVid, nonparalyzedVid];
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


function chiSquared() {
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
   }



   