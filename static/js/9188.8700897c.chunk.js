"use strict";(self.webpackChunknasa_team_18=self.webpackChunknasa_team_18||[]).push([[9188],{9188:(n,i,t)=>{t.d(i,{Linker:()=>a});var s=t(4409),o=t(1744);const e=0,l=0;function r(n,i,t,o,e){const{dx:l,dy:r,distance:a}=(0,s.vr)(n,i);if(!e||a<=t)return a;const c={x:Math.abs(l),y:Math.abs(r)},d=Math.min(c.x,o.width-c.x),k=Math.min(c.y,o.height-c.y);return Math.sqrt(d**2+k**2)}class a extends s.U4{constructor(n){super(n),this._setColor=n=>{if(!n.options.links)return;const i=this.linkContainer,t=n.options.links;let o=void 0===t.id?i.particles.linksColor:i.particles.linksColors.get(t.id);if(o)return;const e=t.color;o=(0,s.PG)(e,t.blink,t.consent),void 0===t.id?i.particles.linksColor=o:i.particles.linksColors.set(t.id,o)},this.linkContainer=n}clear(){}init(){this.linkContainer.particles.linksColor=void 0,this.linkContainer.particles.linksColors=new Map}async interact(n){var i;if(!n.options.links)return;n.links=[];const o=n.getPosition(),a=this.container,c=a.canvas.size;if(o.x<e||o.y<l||o.x>c.width||o.y>c.height)return;const d=n.options.links,k=d.opacity,h=null!==(i=n.retina.linksDistance)&&void 0!==i?i:0,p=d.warp;let u;if(p){const{CircleWarp:n}=await t.e(7149).then(t.bind(t,7149));u=new n(o.x,o.y,h,c)}else u=new s.jl(o.x,o.y,h);const f=a.particles.quadTree.query(u);for(const t of f){const i=t.options.links;if(n===t||null===i||void 0===i||!i.enable||d.id!==i.id||t.spawning||t.destroyed||!t.links||n.links.some((n=>n.destination===t))||t.links.some((i=>i.destination===n)))continue;const s=t.getPosition();if(s.x<e||s.y<l||s.x>c.width||s.y>c.height)continue;const a=r(o,s,h,c,p&&i.warp);if(a>h)continue;const u=(1-a/h)*k;this._setColor(n),n.links.push({destination:t,opacity:u})}}isEnabled(n){var i;return!(null===(i=n.options.links)||void 0===i||!i.enable)}loadParticlesOptions(n){n.links||(n.links=new o.q);for(var i=arguments.length,t=new Array(i>1?i-1:0),s=1;s<i;s++)t[s-1]=arguments[s];for(const o of t)n.links.load(null===o||void 0===o?void 0:o.links)}reset(){}}}}]);
//# sourceMappingURL=9188.8700897c.chunk.js.map