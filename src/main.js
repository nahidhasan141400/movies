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
        ${da[i].paly ? ` <button id='play' onclick="play('${da[i].link}','${da[i].language}')"><img src="src/img/play.png" alt=""></button>` : ` <a id='down' href="${da[i].link}">Download</a>`}
        <img id='thumb' src="${da[i].img}" alt="" />
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
        ${da[i].paly ? ` <button id='play' onclick="play('${da[i].link}','${da[i].language}')"><img src="src/img/play.png" alt=""></button>` : ` <a id='down' href="${da[i].link}">Download</a>`}
        <img id='thumb' src="${da[i].img}" alt="" />
      </div>`
        
    }

}

str(ro ,30)

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
      // console.log(` macth ${v} , with ${key}`)
    
    }
    else{
      // console.log(`not macth ${v} , with ${key}`)
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

let red =  async (data3 , ti)=>{
  console.log(data3);
  debugger
  ti.innerHTML='';
  let n ;
  if( data3.length > 10 ){
    n = 10;
  }else{
    n = data3.length
  }
  
  for (let i = 0; i < n; i++) {
              ti.innerHTML += `<div class="block">
              <h1>${data3[i].name}</h1>
              <h2>${data3[i].size}</h2>
              ${data3[i].paly ? ` <button id='play' onclick="play('${data3[i].link}','${data3[i].language}')"><img src="src/img/play.png" alt=""></button>` : ` <a id='down' href="${data3[i].link}">Download</a>`}
              <img id='thumb' src="${data3[i].img}" alt="" />
            </div>`
              
        }
}


async function key (list , it){
  let data3 = await qury_movie(list);
  red(data3 , it);
}

search.addEventListener('keyup',()=>{
  key(search.value, ro);
} )

      let verti = document.querySelector('.verti');
      strNew(verti , 9)


      let body = document.querySelector('body');


function play (link, qdata){


  body.innerHTML=` <div id='blo'></div><iframe id="player"
  src="${link}"
  allow="autoplay"
  allowfullscreen
></iframe><div id='gap'></div><div id="ro2" class="box"></div><script src="src/view.js"></script>`
let ro2 = document.querySelector('#ro2')
// strNew(ro2 ,6)
console.log(qdata);
key(qdata ,ro2);
 
};