var e=document.body,n=document.querySelector(".logo");new Promise(function(e){n.addEventListener("click",function(){return e()})}).then(function(){e.insertAdjacentHTML("beforeend",'<div class="message">Promise was resolved!</div>')}),new Promise(function(e,n){return setTimeout(n,3e3)}).catch(function(){e.insertAdjacentHTML("beforeend",'<div class="message error-message">Promise was rejected!</div>')});
//# sourceMappingURL=index.e146df2b.js.map
