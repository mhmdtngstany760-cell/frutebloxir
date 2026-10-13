const products=[
{name:"Dragon West",emoji:"🐉",price:5000000,cat:"mythical",tag:"افسانه‌ای"},
{name:"Dragon East",emoji:"🐉",price:4000000,cat:"mythical",tag:"افسانه‌ای"},
{name:"Kitsune",emoji:"🦊",price:750000,cat:"mythical",tag:"محبوب"},
{name:"T-Rex",emoji:"🦖",price:60000,cat:"popular",tag:"محبوب"},
{name:"Tiger",emoji:"🐅",price:140000,cat:"popular",tag:"محبوب"},
{name:"Buddha",emoji:"🧘",price:250000,cat:"popular",tag:"محبوب"},
{name:"Portal",emoji:"🌀",price:180000,cat:"popular",tag:"محبوب"},
{name:"Yeti",emoji:"❄️",price:900000,cat:"mythical",tag:"ویژه"},
{name:"Lightning",emoji:"⚡",price:350000,cat:"special",tag:"ویژه"},
{name:"Gas",emoji:"💨",price:300000,cat:"special",tag:"ویژه"},
{name:"Dough",emoji:"🍩",price:450000,cat:"mythical",tag:"محبوب"},
{name:"Light",emoji:"✨",price:80000,cat:"special",tag:"ویژه"}
];
let active="all",cart=[];
const toman=n=>n.toLocaleString("fa-IR")+" تومان";
function renderProducts(){
 const q=document.getElementById("search").value.trim().toLowerCase();
 const list=products.filter(p=>(active==="all"||p.cat===active)&&p.name.toLowerCase().includes(q));
 document.getElementById("products").innerHTML=list.map((p,i)=>`<article class="card"><div class="fruit"><span>${p.emoji}</span><span class="tag">${p.tag}</span></div><h3>${p.name}</h3><small>تحویل پس از هماهنگی سفارش</small><div class="price"><b>${toman(p.price)}</b><button class="add" onclick="addToCart('${p.name}')">+ سبد</button></div></article>`).join("")||"<p>محصولی پیدا نشد.</p>";
}
function filterCat(cat,btn){active=cat;document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));btn.classList.add("active");renderProducts()}
function addToCart(name){const p=products.find(x=>x.name===name);cart.push(p);updateCart();toast("به سبد خرید اضافه شد")}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.length.toLocaleString("fa-IR");
 document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><span class="mini">${p.emoji}</span><div><b>${p.name}</b><small>${toman(p.price)}</small></div><button class="remove" onclick="removeItem(${i})">حذف</button></div>`).join(""):"<p style='color:#7f88a4'>سبد خرید خالی است.</p>";
 document.getElementById("total").textContent=toman(cart.reduce((s,p)=>s+p.price,0));
}
function removeItem(i){cart.splice(i,1);updateCart()}
function openCart(){document.getElementById("overlay").classList.add("open")}
function closeCart(e){if(!e||e.target.id==="overlay")document.getElementById("overlay").classList.remove("open")}
function checkout(){
 if(!cart.length){toast("اول یک محصول به سبد اضافه کن");return}
 document.getElementById("overlay").classList.remove("open");document.getElementById("contact").scrollIntoView({behavior:"smooth"});toast("سبد شما آماده ثبت سفارش است")}
function submitOrder(e){e.preventDefault();const names=cart.map(x=>x.name).join("، ");toast("سفارش شما ثبت شد! "+(names||"لطفاً محصول را انتخاب کنید"));if(cart.length){cart=[];updateCart()}e.target.reset()}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2500)}
renderProducts();updateCart();
