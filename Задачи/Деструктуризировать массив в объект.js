let obj={}
function destruct(arr) {
    for(let i=0;i<arr.length;i++){
      let ind=arr[0+i]
      obj[i]=ind;
    }
    console.log(obj.keys());
    return obj
  }
  destruct(['one','two'])
