// nahid hasan sagar
let ro = document.querySelector('#ro');

async function  data(){
    var res = await fetch("src/data.json");
    var data = await res.json();
    return data;
};



 let strNew = async (sour , num)=>{
    let da = await data();
    // console.log(da[0]);
    let n ;
    
    if( da.length > num ){
      n = da.length - num;
    }else{
      n = 0;
    }
    for ( let i = da.length - 1 ; i > n; i--) {
        sour.innerHTML += `<div class="block">
        <h1>${da[i].name}</h1>
        <h2>${da[i].size}</h2>
        <a href="${da[i].link}"
          >download</a
        >
        <img src="${da[i].img}" alt="" />
      </div>`
        
    }

}

 let str = async (sour , num)=>{
    let da = await data();
    // console.log(da[0]);
    let n ;
    if( da.length > num ){
      n = num;
    }else{
      n = da.length
    }
    for (let i = 0; i < n; i++) {
        sour.innerHTML += `<div class="block">
        <h1>${da[i].name}</h1>
        <h2>${da[i].size}</h2>
        <a href="${da[i].link}"
          >download</a
        >
        <img src="${da[i].img}" alt="" />
      </div>`
        
    }

}

str(ro ,10)

let search = document.querySelector('#search');

async function qury_movie (value){

  let data2 = await data();
  let newdata = [];
  let key = value.toLowerCase();

  for (let i = 0; i < data2.length; i++) {
    
    let v = data2[i].tag.toLowerCase();
    
    if( v.indexOf(key) !== -1){
      newdata.push(data2[i]);
      // console.log(v);
    
    }
    else{
      console.log(`not macth ${v} , with ${key}`)
      // console.log(key);
    }

    
  }
  return newdata;

}


// async function debunce (fn , dellay){
//   let timeoutid;
//   async function nashi(){
//     if(timeout){
//       clearTimeout(timeoutid);
//       console.log(dellay);
//     }else{
//       console.log(timeoutid);
//     }

//     timeoutid = setTimeout(()=>{
//       fn();
//       console.log('ok');
//     }, dellay);
//   }
  
// }


search.addEventListener('keyup', 
        async ()=>{
          let data3 = await qury_movie(search.value);
          ro.innerHTML='';
          let n ;
          if( data3.length > 10 ){
            n = 10;
          }else{
            n = data3.length
          }
          
          for (let i = 0; i < n; i++) {
            ro.innerHTML += `<div class="block">
            <h1>${data3[i].name}</h1>
            <h2>${data3[i].size}</h2>
            <a href="${data3[i].link}"
              >download</a
            >
            <img src="${data3[i].img}" alt="" />
          </div>`
            
        }
      })

      let verti = document.querySelector('.verti');
      strNew(verti , 9)


