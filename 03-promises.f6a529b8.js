const e=document.querySelector(".form"),{delay:t,step:n,amount:o}=e;e.addEventListener("submit",(function(t){t.preventDefault();const n=Number(e.elements.delay.value),o=Number(e.elements.step.value),l=Number(e.elements.amount.value);let m=1,s=n;for(let e=1;e<=l;e+=1){new Promise(((t,n)=>{setTimeout((function(o,l){Math.random()>.3?t(`✅ Fulfilled promise ${e} in ${l}ms`):n(`❌ Rejected promise ${e} in ${l}ms`)}),s),s+=o,m+=1})).then((e=>console.log(e))).catch((e=>console.log(e)))}}));
//# sourceMappingURL=03-promises.f6a529b8.js.map