"use strict";(self.webpackChunknasa_team_18=self.webpackChunknasa_team_18||[]).push([[5411],{5411:(e,t,s)=>{s.d(t,{BounceOutMode:()=>n});var i=s(4409);class n{constructor(e){this.container=e,this.modes=["bounce","split"]}async update(e,t,n,o){if(!this.modes.includes(o))return;const a=this.container;let c=!1;for(const[,s]of a.plugins)if(void 0!==s.particleBounce&&(c=await s.particleBounce(e,n,t)),c)break;if(c)return;const u=e.getPosition(),r=e.offset,d=e.getRadius(),f=(0,i.AE)(u,d),l=a.canvas.size,{bounceHorizontal:p,bounceVertical:b}=await s.e(6221).then(s.bind(s,6221));p({particle:e,outMode:o,direction:t,bounds:f,canvasSize:l,offset:r,size:d}),b({particle:e,outMode:o,direction:t,bounds:f,canvasSize:l,offset:r,size:d})}}}}]);
//# sourceMappingURL=5411.b4e1ca5d.chunk.js.map