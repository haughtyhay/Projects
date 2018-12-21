function calcMen () {
  let menAge = parseInt(document.querySelector("#menage").value);
  let menWeight = parseInt(document.querySelector("#menweight").value);
  let menRate = parseInt(document.querySelector("#menrate").value);
  let menTime = parseInt(document.querySelector("#mentime").value);

  let menResult = ((menAge * 0.2017) - (menWeight * 0.09036) + (menRate * 0.6309) - 55.0969) * menTime / 4.184;

  document.querySelector("#menresult").innerHTML = menResult;
}

function calcWomen () {
  let womenAge = parseInt(document.querySelector("#womenage").value);
  let womenWeight = parseInt(document.querySelector("#womenweight").value);
  let womenRate = parseInt(document.querySelector("#womenrate").value);
  let womenTime = parseInt(document.querySelector("#womentime").value);

  let womenResult = ((womenAge * 0.074) - (womenWeight * 0.05741) + (womenRate * 0.4472) - 20.4022) * womenTime / 4.184;

  document.querySelector("#womenresult").innerHTML = womenResult;
}
