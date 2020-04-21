var num, c;
function check() {
  num = document.getElementById("num").value;
  c = 1
  while (c < (num - 1)) {
    ++c;
    if (num / c == Math.round(num / c)) {
      document.getElementById("result").innerHTML = "Not prime. Divisible by " + c;
      break;
    }
    if(c == (num - 1)) {
      document.getElementById("result").innerHTML = "Prime";
      break;
    }
  }
}
function enter(event) {
  var x = event.which || event.keyCode;
  if(x == 13) {
    check();
  }
}
