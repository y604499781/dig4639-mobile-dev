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
      result = result + arr[i];
    }
  }
  return result;
}

function DivideBy(a, b) {
  if(typeof a == "number" && typeof b == "number" && b != 0) {
    result = a/b
  }
  return result;
}

function ContainsString() {

}

function ReSortedNumbers() {

}

export { Sum, AddList, DivideBy};