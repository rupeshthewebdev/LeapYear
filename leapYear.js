function checkLeap() {
  let year = parseInt(document.getElementById("year").value);
  if (year % 4 == 0 && year % 100 != 0) {
    document.getElementById("para").innerHTML = "It is a Leap Year";
  } else if (year % 400 == 0) {
    document.getElementById("para").innerHTML = "It is a Leap Year";
  } else {
    document.getElementById("para").innerHTML = "It is not a Leap Year";
  }
}
