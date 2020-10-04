var nine_am = localStorage.getItem("9");
document.getElementById("9").value = nine_am;

var ten_am = localStorage.getItem("10");
document.getElementById("10").value = ten_am;

var eleven_am = localStorage.getItem("11");
document.getElementById("11").value = eleven_am;

var twelve_am = localStorage.getItem("12");
document.getElementById("12").value = twelve_am;

var thirteen_am = localStorage.getItem("13");
document.getElementById("13").value = thirteen_am;

var fourteen_am = localStorage.getItem("14");
document.getElementById("14").value = fourteen_am;

var fifteen_am = localStorage.getItem("15");
document.getElementById("15").value = fifteen_am;

var sixteen_am = localStorage.getItem("16");
document.getElementById("16").value = sixteen_am;

var seventen_am = localStorage.getItem("16");
document.getElementById("16").value = seventen_am;

function save() {
  var test = document.getElementById("9").value;
  localStorage.setItem("9", test);

  var test = document.getElementById("17").value;
  localStorage.setItem("17", test);
}
var date = new Date();
var current_time = date.getHours();
if (9 > current_time) {
  document.getElementById("9").style.backgroundColor = "green";
}
if (9 < current_time) {
  document.getElementById("9").style.backgroundColor = "lightgray";
}

if (9 == current_time) {
  document.getElementById("9").style.backgroundColor = "red";
}

if (10 > current_time) {
  document.getElementById("10").style.backgroundColor = "green";
}
if (10 < current_time) {
  document.getElementById("10").style.backgroundColor = "lightgray";
}

if (10 == current_time) {
  document.getElementById("10").style.backgroundColor = "red";
}

if (11 > current_time) {
  document.getElementById("11").style.backgroundColor = "green";
}
if (11 < current_time) {
  document.getElementById("11").style.backgroundColor = "lightgray";
}

if (11 == current_time) {
  document.getElementById("11").style.backgroundColor = "red";
}
if (12 > current_time) {
    document.getElementById("12").style.backgroundColor = "green";
  }
if (12 < current_time) {
    document.getElementById("12").style.backgroundColor = "lightgray";
  }

if (12 == current_time) {
    document.getElementById("12").style.backgroundColor = "red";
  }

if (13 > current_time) {
    document.getElementById("13").style.backgroundColor = "green";
  }
if (13 < current_time) {
    document.getElementById("13").style.backgroundColor = "lightgray";
  }

if (13 == current_time) {
    document.getElementById("13").style.backgroundColor = "red";
  }

if (14 > current_time) {
    document.getElementById("14").style.backgroundColor = "green";
  }
if (14 < current_time) {
    document.getElementById("14").style.backgroundColor = "lightgray";
  }

if (14 == current_time) {
    document.getElementById("14").style.backgroundColor = "red";
  }
if (15 > current_time) {
    document.getElementById("11").style.backgroundColor = "green";
  }
if (15 < current_time) {
    document.getElementById("11").style.backgroundColor = "lightgray";
  }

if (15 == current_time) {
    document.getElementById("11").style.backgroundColor = "red";
  }

if (16 > current_time) {
    document.getElementById("11").style.backgroundColor = "green";
  }
if (16 < current_time) {
    document.getElementById("11").style.backgroundColor = "lightgray";
  }

if (16 == current_time) {
    document.getElementById("11").style.backgroundColor = "red";
  }
if (17 > current_time) {
    document.getElementById("11").style.backgroundColor = "green";
  }
if (17 < current_time) {
    document.getElementById("11").style.backgroundColor = "lightgray";
  }
if (17 < current_time) {
    document.getElementById("11").style.backgroundColor = "lightgray";
  }

