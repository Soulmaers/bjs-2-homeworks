function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
      const hash = args.join(',');
      let idx = cache.findIndex((el)=> (el['hash']===hash) ); 
      if (idx !== -1 ) { 
        let res = cache[idx].res;
          console.log("Из кэша: " + res); 
          return "Из кэша: " + res;
      }
  
      let result = func(...args);
      let object={};
      object['hash']=hash;
      object['res']=result;
      cache.push(object) ; 
      if (cache.length > 5) { 
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}


function debounceDecoratorNew(func,ms) {
  let timeout;
  let flag=false;
  function wrapper(...args){
    if (flag===false) {
      func.call(this,...args);
      flag=true;
      timeout=setTimeout(()=>{
        flag=false;
      },ms)
    }else{
    clearTimeout(timeout);
    timeout=setTimeout(()=>{
      flag=false;
    }, ms);


    }

  }
  return wrapper;
}

function debounceDecorator2(func,ms) {
  let timeout;
  let flag=false;
  wrapper.count=0;

  function wrapper(...args){
    if (flag==false){
      func.call(this,...args);
      flag=true;
      timeout=setTimeout(()=>{
        flag=false;
      },ms);
    }else{
      clearTimeout(timeout);
      timeout=setTimeout(()=>{
        flag=false;
      },ms);
wrapper.count+=1;
    }
    return wrapper;
  }
}
