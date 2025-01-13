const i=(t,u,e=null)=>{let r;return()=>{e!=="breakFunction"&&(e&&e(),clearTimeout(r),r=setTimeout(()=>{u()},t))}};export{i as d};
