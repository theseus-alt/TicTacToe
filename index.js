document.getElementById("p2").style.display = "none";
document.getElementById("p1").style.display = "block";
var turn = 0;
var ind = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function rungame(id) {
  if (turn % 2 == 0) {
    document.getElementById(id).value = "X";
    document.getElementById(id).disabled = true;
    document.getElementById("p2").style.display = "block";
    document.getElementById("p1").style.display = "none";
    putvalue(1, id, turn);
  } else {
    document.getElementById(id).value = "O";
    document.getElementById(id).disabled = true;
    document.getElementById("p1").style.display = "block";
    document.getElementById("p2").style.display = "none";
    putvalue(0, id, turn);
    //console.log(ind);
  }
  turn++;
}
function putvalue(n, id, turn) {
  //console.log("function called", n, " ", id);
  if (id == 1) {
    ind[0][0] = n;
  }
  if (id == 2) {
    ind[0][1] = n;
  }
  if (id == 3) {
    ind[0][2] = n;
  }
  if (id == 4) {
    ind[1][0] = n;
  }
  if (id == 5) {
    ind[1][1] = n;
  }
  if (id == 6) {
    ind[1][2] = n;
  }
  if (id == 7) {
    ind[2][0] = n;
  }
  if (id == 8) {
    ind[2][1] = n;
  }
  if (id == 9) {
    ind[2][2] = n;
  }

  //console.log(ind);
  let horizontal = checkHorizontal(id);
  let vertical = checkVertical(id);
  let rightDiagonal = false;
  let leftDiagonal = false;
  if (id == 1 || id == 5 || id == 9) {
    rightDiagonal = checkRightDiagonal(id);
  }
  if (id == 3 || id == 5 || id == 7) {
    leftDiagonal = checkLeftDiagonal(id);
  }

  if (horizontal || vertical || rightDiagonal || leftDiagonal || turn == 8) {
    gameover(turn);
  }
}

let index = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
];

function checkHorizontal(id) {
  const r = index[id - 1][0];
  const c = index[id - 1][1];
  for (let i = 0; i < 3; i++) {
    if (ind[i][c] != ind[r][c]) {
      return false;
    }
  }
  return true;
}

function checkVertical(id) {
  const r = index[id - 1][0];
  const c = index[id - 1][1];
  for (let i = 0; i < 3; i++) {
    if (ind[r][i] != ind[r][c]) {
      return false;
    }
  }
  return true;
}

function checkRightDiagonal(id) {
  const r = index[id - 1][0];
  const c = index[id - 1][1];
  for (let i = 0; i < 3; i++) {
    if (ind[i][i] != ind[r][c]) {
      return false;
    }
  }
  return true;
}

function checkLeftDiagonal(id) {
  const r = index[id - 1][0];
  const c = index[id - 1][1];
  const k = ind[r][c];
  if (ind[2][0] == k && ind[1][1] == k && ind[0][2] == k) {
    return true;
  } else {
    return false;
  }
}

function gameover(turn) {
  document.getElementById("go").style.display = "block";
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).disabled = true;
  }
  document.getElementById("p2").style.display = "none";
  document.getElementById("p1").style.display = "none";
}
