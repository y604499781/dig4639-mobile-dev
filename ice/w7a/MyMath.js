function Sum (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number") {
    result = a + b
  } 
  return result;
}

function AddList(arr) {
  let result = undefined;
  if (Array.isArray(arr) && arr.length >0) {
    result = 0;
    for(var elem of arr) {
     if(typeof elem != "number") {
       result = undefined;
       break;
     }
      result = result + elem;
    }
  }
  return result;
}

function DivideBy(a, b) {
  let result = undefined;
  if(typeof a == "number" && typeof b == "number" && b != 0) {
    result = a/b
  }
  return result;
}

function ContainsString(a, b) {
  let result = false;
  if(typeof a == "string" && typeof b == "string") {
    if(b.includes(a)) {
      result = true;
    } 
  }
  return result;
}

function ReSortedNumbers() {

}

export { Sum, AddList, DivideBy, ContainsString};