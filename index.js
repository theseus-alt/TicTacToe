var turn = 0;
function rungame(id) {
  //console.log(id)
  if (turn % 2 == 0) {
    document.getElementById(id).value = "X";
    document.getElementById(id).disabled = true;
    //document.getElementsByClassName("p2").style.display = "none";
  } else {
    document.getElementById(id).value = "O";
    document.getElementById(id).disabled = true;
    //document.getElementsByClassName("p1").style.display = "none";
  }
  turn++;
}
