let arr=[]
let obj={
  one:1,
  two:2,
  three:3,
  four:4,
  [Symbol.iterator](){
    return {
      next(){
        arr=Object.values(obj)
        alert(arr)
        return{done:true}
      }
    }
  }
}
for(let k of obj){
  alert(k)
}
