// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("buy-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.classList.add('show');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.classList.remove('show');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.remove('show');
    }
}


function insertAfter(referenceNode, newNode) 
{
     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function createText() 
{
     var selectValue = document.getElementById("ticket-type").value;
     if (selectValue == "permanent") 
     {
         var text = "Permanent exhibition";
     } 
     else if (selectValue == "temporary") {
         text = "Temporary exhibition";
     }
     else if (selectValue == "combined") {
        text = "Combined Admission";
    }
    else if (selectValue == "") {
        text = "Ticket Type";
    }
     document.getElementById("type-option").innerText = text;
}
createText();

function createTime(time) {
    if (time.value !== "") {
        var hours = time.split(":")[0];
        var minutes = time.split(":")[1];
        var displayTime = hours + " : " + minutes;
        document.getElementById("time-option").innerHTML = displayTime;
    }
}

function createDate(date) {
    var allMonth = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December' 
      ];
      
      var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
    var dateInput = document.getElementById( 'date' ).value;
    if (dateInput !== "") {
    var d = new Date(dateInput);
    var month = d.getMonth();
    var date = d.getDate();
    var day = d.getDay();
    var displayDate = days[day] + ', ' + allMonth[month] + " " + date;
    document.getElementById("date-option").innerHTML = displayDate;
    }
}

const minValueBasic = 0;
const maxValueBasic = 20;
const minValueSenior = 0;
const maxValueSenior = 20;
let inputValue1 = minValueBasic;
let inputValue2 = minValueSenior;
const firstInput = document.getElementById('basic-modal');
const secondInput = document.getElementById('basic-modal-repeat');
const thirdInput = document.getElementById('senior-modal');
const fourthInput = document.getElementById('senior-modal-repeat');

function init() {
  firstInput.value = inputValue1;
  secondInput.value = inputValue1;
  thirdInput.value = inputValue2;
  fourthInput.value = inputValue2;
}

function checkValue(num, checkValue) {
  if (typeof num === "number") {
    return num !== checkValue;
  }
}

function decreaseBasic() {
  if (checkValue(inputValue1, minValueBasic)) {
    inputValue1 -= 1;
    firstInput.value = inputValue1;
    secondInput.value = inputValue1;
  }
}

function increaseBasic() {
  if (checkValue(inputValue1, maxValueBasic)) {
    inputValue1 += 1;
    firstInput.value = inputValue1;
    secondInput.value = inputValue1;
    let result = inputValue1 * 20;
    document.getElementById("basic-result").innerHTML = result;
  }
}
function decreaseSenior() {
  if (checkValue(inputValue2, minValueSenior)) {
    inputValue2 -= 1;
    thirdInput.value = inputValue2;
    fourthInput.value = inputValue2;
    // let result = document.getElementById("senior-result").innerText /  fourthInput.value* 10;
    document.getElementById("senior-result").innerHTML = result;
  }
}

function increaseSenior() {
  if (checkValue(inputValue2, maxValueSenior)) {
    inputValue2 += 1;
    thirdInput.value = inputValue2;
    fourthInput.value = inputValue2;
    let result = inputValue2 * 10;
    document.getElementById("senior-result").innerHTML = result;
  }
}

init();

