(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function a(r){return f(r)}function f(r){const s=r.split(`
`),c=u(s[0]);let n=[];for(let e=1,t=s.length;e<t;e++){let o={},p=u(s[e]);for(let i=0,d=p.length;i<d;i++)o[c[i]]=p[i];n.push(o)}return{speakers:n,properties:c}}function u(r){return r.split(",").map(s=>s.substring(1,s.length-1))}const m="19mpsbRV-wXdFU-n871eqUsNtFJ2PlkW3nVn5jUc5spE",h=encodeURIComponent("Form Responses 1"),g=`https://docs.google.com/spreadsheets/d/${m}/gviz/tq?tqx=out:csv&sheet=${h}`,l=await fetch(g).then(r=>r.text()).then(r=>a(r));l.speakers;l.properties;console.log(l);document.getElementById("app");