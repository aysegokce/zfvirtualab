function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      document.getElementById("Home").style.display="none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "rgba(114, 159, 185, 0.733)";
    }
    document.getElementById(cityName).style.display = "block";
    document.getElementById(cityName.concat("tab")).style.backgroundColor = "rgba(11, 91, 138, 0.877)";
    
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
      document.getElementById("togglebutton1").style.display="none";
      nextDayButton.style.display="block";
    }
    function togglePopup_BreedingSetup2(){
      document.getElementById("popup-3").classList.toggle("active");
      document.getElementById("togglebutton2").style.display="none";
      document.getElementById("NextDay2").style.display="block";
    }
    function togglePopup_sexdiff(){
        document.getElementById("popup-sexdiff").classList.toggle("active");
      }
      function togglePopup_E3(){
        document.getElementById("popup-E3").classList.toggle("active");
      }

      function togglePopup_devstages(){
        document.getElementById("popup-devstages").classList.toggle("active");
      }
      function togglePopup_tailtest(){
        document.getElementById("popup-tailtest").classList.toggle("active");
      }
      function togglePopup_chisquare1(){
        document.getElementById("popup-chisquare1").classList.toggle("active");
      }
      function togglePopup_ext_dil(){
        document.getElementById("popup-ext_dil").classList.toggle("active");
      }

      function togglePopup_nanodrop(){
        document.getElementById("popup-nanodrop").classList.toggle("active");
      }

      function togglePopup_genotyping(){
        document.getElementById("popup-genotyping").classList.toggle("active");
      }

      function togglePopup_mastermix(){
        document.getElementById("popup-mastermix").classList.toggle("active");
      }
      function togglePopup_genotyping2(){
        document.getElementById("popup-genotyping2").classList.toggle("active");
      }
  
    
  
  
  
  
  function clicksetup(setupID){
      if (setupID == 1){
          setup1Img.style.opacity = '0'
          setup0AllImg.style.display = 'none';
          setup2Img.setAttribute("onclick", "clicksetup(2)")
      }
  
      else if (setupID == 2){
          setup2Img.style.opacity = '0'
          setup1AllImg.style.display = "none";
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
          setup2AllImg.style.display = "none";
          setup4Img.setAttribute("onclick", "clicksetup(4)")
      }
      else if (setupID == 4){
          setup4Img.style.opacity = '0'
          setup3AllImg.style.display = "none";       
          setup5Img.setAttribute("onclick", "clicksetup(5)")
      }
  
      else if (setupID == 5){

          setup5Img.style.opacity = '0'
          setup4AllImg.style.display = "none";       
          setup6Img.setAttribute("onclick", "clicksetup(6)")
      }
  
      else if (setupID == 6){       
          setup6Img.style.opacity = '0'
          setup5AllImg.style.display = "none";
          document.getElementById("togglebutton1").style.display="block"
  
      }
              
  
  
  }
  
  var day0ID  = document.getElementById("Day0")
  function Day0(){
      BreedingSetupID.style.display= "none";
      document.getElementById("togglebutton1").style.display="none";
      day0ID.style.display= "block";
      
  }
  
  var day1ID  = document.getElementById("Day1")
  function Day1(){
      alert("By the way why we add methylene blue to E3 medium?")
      day0ID.style.display= "none";
      day1ID.style.display= "block";
  }
  
  var E3amount =1;
  function E3mediumcheck(){
      
      if ( document.getElementById("E3mediumID").value >=16.6 & document.getElementById("E3mediumID").value <=16.7 ){
  
          alert("Correct!");
          document.getElementById("demo2").innerHTML = "Now we have 1X E3 medium ready. <br> We collected embryos and placed them in petri dish with E3 medium";
          document.getElementById("togglebutton2").style.display = "block";
  
      }
      else {
        E3amount++;
          alert("Not Correct! Please calculate again");
          if (E3amount == 4){
            document.getElementById("demo2").innerHTML = "16.67ml 60X E3 required to prepare 1L 1X E3. Now we have 1X E3 medium ready. <br> We collected embryos and placed them in petri dish with E3 medium";
            document.getElementById("togglebutton2").style.display = "block";

          }
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
  var myPix = ["https://drive.google.com/thumbnail?id=1anE_yZSEmNZQmLQLIBjrOJLRrr5j-yjh",
  "https://drive.google.com/thumbnail?id=1d32hfBW-kmz2_QA_4yg76-kLDobyJ6Iv",
  "https://drive.google.com/thumbnail?id=13YbVod65DUhxFfzoKZwDeg75L7cq_BUn",
  "https://drive.google.com/thumbnail?id=19F69KsUOWjQ9JO7gurRqHnES6u0SmvwF",
  "https://drive.google.com/thumbnail?id=1Mhc0plXyX0DVN9hPlNKLiwMikb933R8S",
  "https://drive.google.com/thumbnail?id=1sQSgqeoB6cduhD5ef9sOi8cURBRT3kB1",
  "https://drive.google.com/thumbnail?id=1jqYy3CjOsTCwy4nEdjhcf_3wx8ui-4CZ",
  "https://drive.google.com/thumbnail?id=1crJvQxn_LC707_femivcMqCW4j1iRR8H",
  "https://drive.google.com/thumbnail?id=1pGwtdyygWSEFC7tH6w7VG6RJ36W_KIXX",
  "https://drive.google.com/thumbnail?id=1WFiiXDmabRFJMRCOysnxInzx8frMy-Qc",
  "https://drive.google.com/thumbnail?id=1TDTG9v_8-CnRG4dQ6dgABH29b_BeZF9A",
  "https://drive.google.com/thumbnail?id=1ml07g-NlHFFGXdwgohfxg97f90cnXYhK",
  "https://drive.google.com/thumbnail?id=1IDjSoJ7WsegQ1G8aIYxRvrMIUtIwXIDb",
  "https://drive.google.com/thumbnail?id=1F2Q3PReqhjZ80qoIQTigCnTnSq86bdFQ",
  "https://drive.google.com/thumbnail?id=1eVrIXQG63DohYsPWaRuF3CKnPgsr9hZv"];  
  var devstartArray =   [0,0,0,3,3,3,5,8 ,10,11,16,20,30,47,72];
  var devEndArray = [1,1,2,4,4,4,6,10,11,16,20,24,40,72,85]; 
  
  function DevQuizRand(){     
      
      randomNum = Math.floor(Math.random() * myPix.length);   
      document.getElementById("ZfDevPic").src = myPix[randomNum];  
      }
       
  var trial=1;
      function TestQuiz() {
  
      if (quizCount < 3){
             
      var devend = devEndArray[randomNum];
      var devstart = devstartArray[randomNum]; 
         
      if(document.getElementById("DevQuizNum").value <= devend && document.getElementById("DevQuizNum").value >= devstart ){
          alert("Close enough!");
          quizCount ++;
          trial=1;
          if (quizCount < 3){
              DevQuizRand();}          
      }
      else {
          trial++
          alert("Try Again")
        if (trial == 4){
            quizCount ++;
        }
    }
      
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
      if (testCount >1 && testCount < 13){
      document.getElementById("EnterTailTestNumofEmbryo").disabled = true;
      document.getElementById("TailTest2").style.display = "block";
      tailtestvideos();
      TailtestGifShow();  
      }
      else { alert ("Enter a number between 1 and 12")}
      
  
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
  var nonparalyzedVid = ["https://drive.google.com/thumbnail?id=12jEqtTaKL0C-t877Dh74Se1ndeVuB1pL",
  "https://drive.google.com/thumbnail?id=1VYALUL40d-oGjCsIZqaccglg4M_KUayv",
  "https://drive.google.com/thumbnail?id=1e87NIpfy9XaI-Q-MaE_jZPkiX6IloV_O",
  "https://drive.google.com/thumbnail?id=16r03XGpnrJBWwtHoH1ii81BntmcQR7LW",
  "https://drive.google.com/thumbnail?id=1EW7wcKJPVzHZ9AGTNHVgID4e53FEq9eH",
  "https://drive.google.com/thumbnail?id=1RZLWZ9dDqD64m26PLwDtXBPmu9qGqOPM",
  "https://drive.google.com/thumbnail?id=1o_ZH99BCfMBKpOF0dHjL00o_yFP7pSD_",
  "https://drive.google.com/thumbnail?id=1QaMTuAQjN3GcKcUOs4x_5bx0OVsl47xR",
  "https://drive.google.com/thumbnail?id=1HxdSd46ze2F5HxyATb_KyE50mzFLcRih",
  "https://drive.google.com/thumbnail?id=1Mf9XBh6er0zxZP4ve1hmVoXYKLs2tCeD",
  "https://drive.google.com/thumbnail?id=1WzrT65D5KyPZ2Sn66G553XQCYGSgs9oJ",
  "https://drive.google.com/thumbnail?id=1Fd5ztkTbALFhl-DW890y8L-6_07CcT3z",
  "https://drive.google.com/thumbnail?id=13aObLkXSKnhqjDE0imOhZHxbYQXdYall",
  "https://drive.google.com/thumbnail?id=1SkdTr8fBCa74QO-uQ4RUsI572U1eKkBi",
  "https://drive.google.com/thumbnail?id=1If43H7bdiFrkgK9Mmlv65sUs2G7bjggt",
  "https://drive.google.com/thumbnail?id=1t2z-J7AQTJDXbdk-_2KteO_vTRP3PJ9k",
  "https://drive.google.com/thumbnail?id=1kXuIoIzKpwmXlWfALvsS2Z5jurEHtsRD",
  "https://drive.google.com/thumbnail?id=1vHfjEeIr8uz5SRssgVm5GQpm9J4wev9B",
  "https://drive.google.com/thumbnail?id=1K_CYc9MSaQ6CFYQLSQ3FV7nHIQqvFRCW",
  "https://drive.google.com/thumbnail?id=14yUPOC3BFN4QRG2S7uOll-8pJNG9aFq2",
  "https://drive.google.com/thumbnail?id=1ItenHF-4hOSkiPcUQhykxTHLnbc0_lfK",
  "https://drive.google.com/thumbnail?id=1iqPC_a49Ms1EelMivw4sfz6jB0CtnyFh",
  "https://drive.google.com/thumbnail?id=1QlVVG6GY7XO3gfJbv8yyhYAE20nqvixR",
  "https://drive.google.com/thumbnail?id=1pW08MZtEEgZhcavUr2UxpTVLAYYXfFRS",
  "https://drive.google.com/thumbnail?id=1OFDhHELDa1uTq5iqSSWIn_Q9XKpGbFAX",
  "https://drive.google.com/thumbnail?id=1d7decFw6lY6O_AUuGdKaiTuK2AF9q3y2",
  "https://drive.google.com/thumbnail?id=1zi7utc7z8juLzH7F0U51mSrzO_nzos5p",
  "https://drive.google.com/thumbnail?id=1IzICQrVuVbPM5CdVEbnkfbkN0J7ofmST",
  "https://drive.google.com/thumbnail?id=1yhKRTLcN9NNQbQuwR_I7o3D1DrPyoDiI",
  "https://drive.google.com/thumbnail?id=1zYGhG9Fqjf9cfqpPxeB_P67Hgp4EqzmH",
  "https://drive.google.com/thumbnail?id=1wJmGWA7QGSIQeStKoSOllB2e11Hw_zyv",
  "https://drive.google.com/thumbnail?id=1WGJbUyvqAeZYlNh5cT5QsjrfWAOKUAdK",
  "https://drive.google.com/thumbnail?id=1jxchmL4UnUXs41JBZh2EIXHnOzXCwGoD",
  "https://drive.google.com/thumbnail?id=1GJVYxXn_8U_YSOrh99vHN0TcK9GC753E",
  "https://drive.google.com/thumbnail?id=1ethKiEgZ_pmxHKIipbqn2AspifyTFKam",
  "https://drive.google.com/thumbnail?id=1S_sd9gjdx_mUDEhA9Xw80elLsf5kh3XP",
  "https://drive.google.com/thumbnail?id=1IWK70KI2MwkDeBc3OUivtVWn8L6t6TH3"];
  
  var paralyzedVid=["https://drive.google.com/thumbnail?id=1oh8EF-TjR9S-T14C11JgBSlRKdj9u_fb",
  "https://drive.google.com/thumbnail?id=173I9Kfnyt40k_mb8-8Faa_FpUYGg7z9B",
  "https://drive.google.com/thumbnail?id=13vlosVMv6zikTihpTdvzrIFgVqSf-Nyt",
  "https://drive.google.com/thumbnail?id=1qbZBfOlPWyl5mPmhCiCq0vbjl9WWCFT8",
  "https://drive.google.com/thumbnail?id=1B3K7_Pmw1_eLW01QZoDDymlC_VT-ahOq",
  "https://drive.google.com/thumbnail?id=1Pssp7WnIzcsWFrZdkgTvzpkF06SP2Dq9",
  "https://drive.google.com/thumbnail?id=1-JT3pd-IKo8JKi4krgj07RbNkOO3Zop5",
  "https://drive.google.com/thumbnail?id=1pxtKbqgUXYWI6D-pue-6ObSDslszrUwk",
  "https://drive.google.com/thumbnail?id=1GsEVBhyJuHdOCHH93Kr830GkCHd0w_r8",
  "https://drive.google.com/thumbnail?id=1KdI9PAqd5K73VgvJvDtu_WUgVjmzwR9R",
  "https://drive.google.com/thumbnail?id=1O-bpNKTpFyLfc1jCGHa3CSX4lmQE6F0k"];
  
  
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
      testvid=testvid.concat(nonparalyzedVid);    
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
         document.getElementById("TailTestGif").style.display="none";
          shownvid++;
          var ele = document.getElementsByName("TailtestPredID");
          for(var i=0;i<ele.length;i++){
             ele[i].checked = false; 
          }        
  
          TailtestGifShow()
          document.getElementById("TailTestGif").style.display="block";
       
      }
      else if ( shownvid == testCount-1){
      document.getElementById("EnterTailtestPred").style.display = "none";
      document.getElementById("GoChisquareID").style.display = "block";  
      }
      
     
      }
  
    
  
  function GoChisquare(){
      document.getElementById("TailTestPred").style.display = "none";
      document.getElementById("ChiSquaredTest").style.display = "block";
      document.getElementById("TailTestSumTable").rows[1].cells[0].innerHTML = paralyzed;
      document.getElementById("TailTestSumTable").rows[1].cells[1].innerHTML = nonparalyzed;
      document.getElementById("TailTestSumTable2").rows[1].cells[0].innerHTML = paralyzed;
      document.getElementById("TailTestSumTable2").rows[1].cells[1].innerHTML = nonparalyzed;
      document.getElementById("TailTestSumTable3").rows[1].cells[0].innerHTML = paralyzed;
      document.getElementById("TailTestSumTable3").rows[1].cells[1].innerHTML = nonparalyzed;
     
  }
  
  
  function chiSquared(order) {
      if (order == 1){
        var exp1 = document.getElementById("exp1").value;
      var pred1 = document.getElementById("pred1").value;
      var exp2= document.getElementById("exp2").value;
      var pred2 = document.getElementById("pred2").value;
      
      var chi = Math.pow((exp1-pred1), 2)/exp1 + Math.pow((exp2-pred2), 2)/exp2
      
       if (chi > 3.84){  
       document.getElementById("demo").innerHTML=("Chi-squared = " + chi + " p value < 0.05");
       document.getElementById("demo_b").innerHTML=("Chi-squared = " + chi + " p value < 0.05");
       document.getElementById("demo_c").innerHTML=("Chi-squared = " + chi + " p value < 0.05");
        
    }
       else {
       document.getElementById("demo").innerHTML= ("Chi-squared = " + chi + " p value > 0.05");
       document.getElementById("demo_b").innerHTML= ("Chi-squared = " + chi + " p value > 0.05");
       document.getElementById("demo_c").innerHTML= ("Chi-squared = " + chi + " p value > 0.05");
         
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
         document.getElementById("demo3_b").innerHTML=("Chi-squared = " + chi + " p value < 0.05");
         document.getElementById("demo3_c").innerHTML= ("Chi-squared = " + chi + " p value < 0.05");
        
        }
         else {
         document.getElementById("demo3").innerHTML= ("Chi-squared = " + chi + " p value > 0.05");
         document.getElementById("demo3_b").innerHTML= ("Chi-squared = " + chi + " p value > 0.05");
         document.getElementById("demo3_c").innerHTML= ("Chi-squared = " + chi + " p value > 0.05");
        }
    
         document.getElementById("GotoSumpage").style.display = "block";
         
  
  
     }
      }
      
  
  
  function DNAExt(ingred){
      
      if (ingred == "tris"){
          
         var amount = document.getElementById("TrisAmount").value;
         
         if (amount == 2){
             alert("Tris is added");
             document.getElementById("DNAFalcon1").style.display="none"
             document.getElementById("edtadiv").style.display = "block";
             
         }
         else alert("Amount is not correct")
  
      }
  
      if (ingred == "edta"){
          var amount = document.getElementById("EdtaAmount").value;
          if (amount == 2){
              alert("EDTA is added");
              document.getElementById("DNAFalcon2").style.display="none"
              document.getElementById("nacldiv").style.display = "block";
              
          }
          else alert("Amount is not correct")
   
       }
  
       if (ingred== "nacl"){
          var amount = document.getElementById("NaclAmount").value;
          if (amount == 4){
              alert("NaCl is added");
              document.getElementById("DNAFalcon3").style.display="none";
              document.getElementById("sdsdiv").style.display = "block";
              
          }
          else alert("Amount is not correct")
   
       }
  
       if (ingred == "sds"){
          var amount = document.getElementById("SDSAmount").value;
          if (amount == 1){
              alert("SDS is added");
              document.getElementById("DNAFalcon4").style.display="none"
              document.getElementById("waterdiv").style.display = "block";
              
          }
          else alert("Amount is not correct")
   
       }
  
       if (ingred == "water"){
          var amount = document.getElementById("waterAmount").value;
          if (amount == 11){
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
           "CT_1N":Math.ceil(( x + (Math.random()*3)+8)*10)/10,
           "CT_2N": Math.ceil(( x + (Math.random()*3)+8)*10)/10,
           "CT_1S":Math.ceil(x*10)/10,
           "CT_2S": Math.ceil(( x + (Math.random()*2)-1)*10)/10
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
           "CT_1N":Math.ceil(( x + (Math.random()*3)+8)*10)/10,
           "CT_2N": Math.ceil(( x + (Math.random()*3)+8)*10)/10,
           "CT_1S":Math.ceil(x*10)/10,
           "CT_2S": Math.ceil(( x + (Math.random()*2)-1)*10)/10
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
          if (z<0.33){
          var x = (Math.random()*3.75)+18.21;
  
          var temp={"name" : paralyzedVid[i],
           "n260230": Math.ceil(((Math.random()*1.67)+0.6)*10)/10 ,
           "n260280": Math.ceil(((Math.random()*0.25)+1.82)*10)/10 ,
           "nng":Math.ceil(((Math.random()*169)+30.6 )*10)/10,                      
           "CT_1N":Math.ceil(( x + (Math.random()*3)+8)*10)/10,
           "CT_2N": Math.ceil(( x + (Math.random()*3)+8)*10)/10,
           "CT_1S":Math.ceil(x*10)/10,
           "CT_2S": Math.ceil(( x + (Math.random()*2)-1)*10)/10
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
           "CT_1N": Math.ceil((x )*10)/10 ,
           "CT_2N": Math.ceil(((x + Math.random()*2)-1)*10)/10,
           "CT_1S": Math.ceil(((x+ Math.random()*3)+4)*10)/10 ,
           "CT_2S": Math.ceil(((x + Math.random()*3)+4)*10)/10      
  
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
  
  var tbody = document.getElementById('tbody_1');
  
  for (var i = 0; i < Object.keys(filtqPCRres).length; i++) {
      
  
      var tr = "<tr>";
      tr += "<th>Embryo_" + i + "</th><td>" + filtqPCRres[i].n260230.toString()  + "</td>" + "<td>" +
       filtqPCRres[i].n260280.toString()  +"</td><td>" + filtqPCRres[i].nng.toString()  +"</td></tr>";
      
      tbody.innerHTML += tr;
  }    
      }
  
      if (order == 2){
  
        var tbody = document.getElementById('tbody_2');
        for (var i = 0; i < Object.keys(filtqPCRres).length; i++) {
      
          var selectgentype= "<select size='1'> <option selected='selected'>wild type </option> <option > heterozygote </option> <option > mutant </option> </select>"
            
            var tr = "<tr>";
            tr += "<th>Embryo_" + i + "</th><td>" +
             filtqPCRres[i].CT_1S.toString() + "</td><td>" + filtqPCRres[i].CT_2S.toString() + "</td><td>" +
             filtqPCRres[i].CT_2N.toString() + "</td><td>"+ filtqPCRres[i].CT_1N.toString() + "</td><td>" + 
             "<input type= 'number' id = 'mean_s'></input>" + "</td><td>"+ "<input type= 'number' id = 'mean_n'></input>" + "</td><td>" + 
             "<input type= 'number' id = 'diff_sn'></input>" + "</td><td>"+ selectgentype +"</td></tr>";
            
            tbody.innerHTML += tr;
        }    
            }

    if (order == 3){
  
  var tbody = document.getElementById('tbody_3');
  for (var i = 0; i < Object.keys(filtqPCRres).length; i++) {

     
      var tr = "<tr>";
      tr += "<th>Embryo_" + i + "</th><td>" +filtqPCRres[i].n260230.toString()  + "</td>" + "<td>" +
      filtqPCRres[i].n260280.toString()  +"</td><td>" + filtqPCRres[i].nng.toString()  +"</td><td>" +
       filtqPCRres[i].CT_1S.toString() + "</td><td>" + filtqPCRres[i].CT_2S.toString() + "</td><td>" +
       filtqPCRres[i].CT_2N.toString() + "</td><td>"+ filtqPCRres[i].CT_1N.toString() + "</td></tr>";      
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
          document.getElementById("demo_cross2").innerHTML=("Selected Genotype of parents is " + gentype);
          document.getElementById("printPDF").style.display = "block";
          document.getElementById("refreshButton").style.display = "block";
      }
  }

  function printSummary(){
    NanoDropTable(3)
    document.getElementById("QPCRres").style.display = "none";
    document.getElementById("SummaryPage").style.display = "block";
    var female = checkRadiofemale.value;
    var male = checkRadiomale.value;
   
     var pred1 = document.getElementById("pred1b").value;        
     var pred2 = document.getElementById("pred2b").value;        
    var pred3 = document.getElementById("pred3b").value;


     if (female == "female_a"){
         female =  "Female 1";
     }
     else if (female == "female_b"){
        female =  "Female 2";
    }
    else if (female == "female_c"){
        female =  "Female 3";
    }
    if (male == "male_a"){
        male =  "male 1";
    }
    else if (male == "male_b"){
       male =  "male 2";
   }
   else if (male == "male_c"){
       male =  "male 3";
   }
    document.getElementById("crossF_cap").innerHTML=female;
    document.getElementById("crossM_cap").innerHTML=male;
    document.getElementById("demo_cross").innerHTML=(female + " x " +male);
    document.getElementById("GenotypingSumTable").rows[1].cells[0].innerHTML = pred1;
    document.getElementById("GenotypingSumTable").rows[1].cells[1].innerHTML = pred2;
    document.getElementById("GenotypingSumTable").rows[1].cells[2].innerHTML = pred3;
    
    document.getElementById("GenotypingSumTable2").rows[1].cells[0].innerHTML = pred1;
    document.getElementById("GenotypingSumTable2").rows[1].cells[1].innerHTML = pred2;
    document.getElementById("GenotypingSumTable2").rows[1].cells[2].innerHTML = pred3;
           

  }

  var doc = new jsPDF();
  doc.setFontSize(9);


function saveDiv(divId, title) {
        doc.fromHTML(`<html><head><title>${title}</title></head><body>` + document.getElementById(divId).innerHTML + `</body></html>`,
        );
        doc.save('div.pdf');

 
 doc.save('VirtualLabReport.pdf');
}








  
  
  
  
  
  
