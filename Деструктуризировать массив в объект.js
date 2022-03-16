function destruct(arr) {
    let obj={}
    for(let i=0;i<arr.length;i++){
      let ind=arr[0+i]
      obj[i]=ind;
    }
    console.log(obj.keys());
  }
  destruct(['one','two'])