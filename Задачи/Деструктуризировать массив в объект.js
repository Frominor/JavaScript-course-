let obj={}
function destruct(arr,obj) {
    for(let i=0;i<arr.length;i++){
      let ind=arr[0+i]
      obj[i]=ind;
    }
    console.log(Object.keys(obj));
    
  }
  destruct(['one','two'],obj)
