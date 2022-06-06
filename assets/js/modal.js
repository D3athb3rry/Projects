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
        var displayTime = hours + ":" + minutes;
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