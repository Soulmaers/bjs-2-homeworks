function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
      const hash = args.join(',');
      let idx = cache.findIndex((element)=> (element.hash===hash) ); 
      if (idx !== -1 ) { 
        let result = cache[idx].result;
          console.log("Из кэша: " + result); 
          return "Из кэша: " + result;
      }
      let result = func(...args);
      let object={};
      cache.push({
        hash,
        result
      }) ; 
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
    if (!flag) {
      func.apply(this,...args);
      flag=true;
      return;
       
    }

    clearTimeout(timeout);
    timeout=setTimeout(()=>{
      flag=false;
      func.apply(this,...args);
    }, ms);
      }
  return wrapper;
}



function debounceDecorator2(func) {
  let timeout;
  let flag=false;
  
  function wrapper(...args){
    wrapper.count=0;
    wrapper.count++;
    if (!flag) {
      func.apply(this,...args);
      flag=true;
      return;
       
    }

    clearTimeout(timeout);
    timeout=setTimeout(()=>{
      flag=false;
      func.apply(this,...args);
    }, ms);
    
      }
  return wrapper;
}
