// *********************ecom.html*******************
let globlaarr=[]
let cart = document.getElementById('cart')
let body=document.getElementById('body')
let fetchData=async()=>{
    let url="https://dummyjson.com/products"
  fetch(url).then((item)=>item.json()).then((data)=>{
    globlaarr=data.products
    print(globlaarr)
  }).catch(err=>console.log(err))
}
fetchData()
function print(arg)
{
    let str=""
      arg.map((item)=>{
        str+= `   <div class="col-3 col-xs-12 col-sm-6 col-md-3 col-lg-3 mt-3">
            <div class="card">
               <div class="card-body">
                   <img src=${item.thumbnail} class="img-fluid"/>
                  <p></p>
                  <p>title${item.title}</p>
               </div>
            </div>
       </div>`
      })
   body.innerHTML=str;
}

cart.addEventListener('click',()=>{
    cartPrintHandler();
    window.location.href='cart.html'
})


// *****************cart.html***************

let content = document.getElementById('content');

function cartPrintHandler(arg1){
    let str1 = '';
    arg1.forEach((item) =>{
        str1 += `   <div class="card">
                        <div class="card-body d-flex justify-content-evenly">
                            <img src="${item.thumbnail}" class="img-fluid" alt="">
                            <p>Title${item.title}</p>
                            <button class="btn border rounded">-</button>
                            <p>Count</p>
                            <button class="btn border rounded">+</button>
                            <p>price</p>
                            <button class="btn   btn-danger">delete</button>
                        </div>
                    </div>`

    });
    
}






