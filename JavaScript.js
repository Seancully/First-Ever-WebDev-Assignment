// form field validation
function validate () {
    
    var email = document.getElementById('email');

    // first name 
    if (document.getElementById("firstname").value === ""){
        alert("Please enter first name");
    } // end if first name
    
    // second name
   if (document.getElementById("secondname").value === ""){
        alert("Please enter last name");
   } // end if second name
      
   // email 
   if (validateEmail(email) === false) {
       alert("Please enter a valid email")
   } // end if email

}// end function validate()

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} // end function validateEmail(email)


// rotating pictures
var pict_array = ["backBefore.jpg","backAfter.jpg","frontBefore.jpg","frontAfter.jpg",""];
var counter = 0;

function rotatePics(){
    document.getElementById("rotator").src = "assets/images/" + pict_array[counter];
    counter++;

    setTimeout(rotatePics,3000);
    if (counter == pict_array.length) {
        counter = 0;
    } // end if counter

} // end function rotatePicts


// Quiz
var questions = [];

var answers = [];

questions[0] = "Does the gym have mental health benefits?";
answers[0] = "yes";

questions[1] = "Does the gym have physical health benefits?";
answers[1] = "yes";

questions[2] = "Does it matter when you start training?";
answers[2] = "no";

var currentQuestion;

// Quiz display question function
function setQuestion(questionNumber) {
    currentQuestion = questionNumber;
    document.getElementById("question").innerHTML = questions[questionNumber];
} // end function setQuestion(questionNumber)

// Quiz check answer function
function checkAnswer() {
    var tempAnswer = document.getElementById("answer").value;
    if (tempAnswer == answers[currentQuestion]) {
        document.getElementById("correct").innerHTML = "Correct :)"
    } // end if 
    else{
        document.getElementById("correct").innerHTML = "Wrong :("
    } // end else
}

