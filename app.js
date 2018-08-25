//Functions that changes the 4 images in the middle section of th webpage
function leftImage()
{
    document.getElementById("first-room").src = "images/room1.jpg";
    document.getElementById("second-room").src = "images/room2.jpg";
    document.getElementById("third-room").src = "images/room3.jpg";
    document.getElementById("fourth-room").src = "images/room4.jpg";
}

function rightImage()
{
    document.getElementById("first-room").src = "images/room5.jpg";
    document.getElementById("second-room").src = "images/room6.jpg";
    document.getElementById("third-room").src = "images/room7.jpg";
    document.getElementById("fourth-room").src = "images/room8.jpg";
}

$('#datepicker1').datepicker({
            uiLibrary: 'bootstrap4'
        });
$('#datepicker2').datepicker({
            uiLibrary: 'bootstrap4'
        });