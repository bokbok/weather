(this.webpackJsonpweather_javascript=this.webpackJsonpweather_javascript||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),i=n(13),o=n.n(i),c=(n(20),n(6)),u=(n(21),n(14)),h=n(11),l=n(2),d=n.n(l),p=n(5),f=n(3),b=n(4),v=function(){function e(t){Object(f.a)(this,e),this.audioContext=new AudioContext,this.voice=window.speechSynthesis.getVoices().find((function(e){return"Karen"===e.name})),this.script=t,this.soundCache=new m(this.audioContext)}return Object(b.a)(e,[{key:"play",value:function(){var e=Object(p.a)(d.a.mark((function e(t,n){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.next=8,new j(t,this.audioContext,this.voice,this.script,this.soundCache,r).play();case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();function x(e,t){return"undefined"===typeof e&&(e=e||t),e}var j=function(){function e(t,n,a,r,s,i){Object(f.a)(this,e),this.audioContext=n,this.voice=a,this.script=r,this.sonification=i,this.config=t,this.soundCache=s}return Object(b.a)(e,[{key:"play",value:function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._playIntro();case 2:return e.next=4,this._playSonification();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_playIntro",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.config.playIntro){e.next=23;break}t=Object(h.a)(this.script.intro),e.prev=2,t.s();case 4:if((n=t.n()).done){e.next=14;break}return a=n.value,e.next=8,this._speak(a.text);case 8:return e.next=10,Promise.all([this._playSound(a.sound,x(a.volume,1),x(a.balance,0),x(a.lowPass,2e4))]);case 10:return e.next=12,this._pause(a.pauseAfter||0);case 12:e.next=4;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),t.e(e.t0);case 19:return e.prev=19,t.f(),e.finish(19);case 22:console.log("Played intro");case 23:case"end":return e.stop()}}),e,this,[[2,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"_playSonification",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n,a,r=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(h.a)(this.sonification.hours),e.prev=1,a=d.a.mark((function e(){var t,a,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.value,a=[],s=r.audioContext.currentTime,i=t.sounds.map((function(e){return r._playSound(e.sound,x(e.volume,1),x(e.balance,0),x(e.lowPass,2e4),s)})),t.speak&&a.push(r._speak(t.speak)),e.next=7,Promise.all(a.concat(i));case 7:console.log("Played "+t.speak);case 8:case"end":return e.stop()}}),e)})),t.s();case 4:if((n=t.n()).done){e.next=8;break}return e.delegateYield(a(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),t.e(e.t1);case 13:return e.prev=13,t.f(),e.finish(13);case 16:console.log("Played sonification");case 17:case"end":return e.stop()}}),e,this,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"_pause",value:function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout(e,1e3*t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"_playSound",value:function(){var e=Object(p.a)(d.a.mark((function e(t,n,a,r,s){var i,o,c,u,h,l,p,f,b,v=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",Promise.resolve());case 2:return i=this.audioContext,e.next=5,this.soundCache.getSound(t);case 5:return o=e.sent,c=o.buffer(),u=x(s,i.currentTime),(h=i.createBufferSource()).buffer=c,(l=i.createGain()).connect(i.destination),p=Math.log(n)/Math.log(2),l.gain.value=Math.pow(10,p),(f=i.createStereoPanner()).connect(l),f.pan.value=a,(b=i.createBiquadFilter()).type="lowpass",b.frequency.value=r,b.connect(f),h.connect(b),h.loop=!0,e.abrupt("return",new Promise((function(e){console.log(u),h.start(u),h.stop(u+1.5/v.config.sonificationSpeed),h.onended=e})));case 24:case"end":return e.stop()}}),e,this)})));return function(t,n,a,r,s){return e.apply(this,arguments)}}()},{key:"_speak",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var n=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var a=new SpeechSynthesisUtterance;a.text=t,a.voice=n.voice,a.rate=n.config.narrationSpeed,a.onend=e,window.speechSynthesis.speak(a)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),w=function(){function e(t){Object(f.a)(this,e),this.audioBuffer=t}return Object(b.a)(e,[{key:"buffer",value:function(){return this.audioBuffer}}]),e}(),m=function(){function e(t){Object(f.a)(this,e),this.cache={},this.audioContext=t}return Object(b.a)(e,[{key:"getSound",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.cache[t]){e.next=11;break}return e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.arrayBuffer();case 6:return a=e.sent,e.next=9,this.audioContext.decodeAudioData(a);case 9:r=e.sent,this.cache[t]=new w(r);case 11:return e.abrupt("return",this.cache[t]);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),O=v,y={intro:[{text:"Temperature is represented like a Geiger Counter, with more ticks for higher temperatures. For example, 10 degrees.",sound:"/sounds/ticks_10_c.wav"},{text:"and 20 degrees.",sound:"/sounds/ticks_20_c.wav",pauseAfter:1},{text:"Wind strength is represented by the volume of the wind sound. For example, 10 kilometres per hour.",sound:"/sounds/wind.wav",volume:.2},{text:"25 kilometres per hour.",sound:"/sounds/wind.wav",volume:.5},{text:"and 50 kilometres per hour.",sound:"/sounds/wind.wav",volume:1,pauseAfter:1},{text:"The wind sound moves according to the wind's source direction. Westerly wind's are on the left hand side.",sound:"/sounds/wind.wav",volume:1,balance:-1},{text:"Easterly wind's are on the right hand side.",sound:"/sounds/wind.wav",volume:1,balance:1,pauseAfter:1},{text:"Northerly wind's are in front.",sound:"/sounds/wind.wav",volume:1,balance:0},{text:"Southerly wind's are behind.",sound:"/sounds/wind.wav",volume:1,balance:0,lowPass:600,pauseAfter:1},{text:"Wind's can be heard in all directions, including the south east.",sound:"/sounds/wind.wav",volume:1,balance:.3,lowPass:600},{text:"The north east.",sound:"/sounds/wind.wav",volume:1,balance:.3},{text:"The south west.",sound:"/sounds/wind.wav",volume:1,balance:-.3,lowPass:600},{text:"And the north west.",sound:"/sounds/wind.wav",volume:1,balance:-.3,pauseAfter:1},{text:"A rain sound is heard when the chance of rain is above 25%. It increases in intensity for the amount of rain expected. For example, 0.1 millimetres",sound:"/sounds/light_rain.wav"},{text:"1 millimetre",sound:"/sounds/medium_rain.wav"},{text:"and 2 millimetres",sound:"/sounds/heavy_rain.wav",pauseAfter:1},{text:"Time will be indicated with every third hour being announced.",pauseAfter:1},{text:"We now begin our sonification of the weather, starting at midnight.",sound:null,pauseAfter:2}]},k=n(9),g=n(7),C=function(e){Object(k.a)(n,e);var t=Object(g.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("p",{children:[Object(a.jsx)("label",{children:this.props.label}),Object(a.jsxs)("select",{onChange:this.props.onChange,children:[Object(a.jsx)("option",{value:1,children:"Medium"}),Object(a.jsx)("option",{value:this.props.min,children:"Slow"}),Object(a.jsx)("option",{value:this.props.max,children:"Fast"})]})]})}}]),n}(r.Component),S=function(e){Object(k.a)(n,e);var t=Object(g.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("p",{children:[Object(a.jsx)("label",{children:"Select date"}),Object(a.jsxs)("select",{onChange:this.props.onChange,children:[Object(a.jsx)("option",{value:"melb20201205",children:"5th December 2020"}),Object(a.jsx)("option",{value:"melb20201204",children:"4th December 2020"}),Object(a.jsx)("option",{value:"melb20201105",children:"5th November 2020"}),Object(a.jsx)("option",{value:"melb20210205",children:"5th February 2021"})]})]})}}]),n}(r.Component);var _=function(){var e=s.a.useState(!1),t=Object(c.a)(e,2),n=t[0],r=t[1],i=s.a.useState(1),o=Object(c.a)(i,2),h=o[0],l=o[1],d=s.a.useState(1),p=Object(c.a)(d,2),f=p[0],b=p[1],v=s.a.useState("melb20201205"),x=Object(c.a)(v,2),j=x[0],w=x[1],m=s.a.useState(!0),k=Object(c.a)(m,2),g=k[0],_=k[1],P=new O(y);return s.a.useEffect((function(){n&&(P.play({sonificationSpeed:h,narrationSpeed:f,playIntro:g},"/data/".concat(j,".json")),r(!1))}),[n]),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)(u.a,{as:"input",size:"lg",disabled:n,type:"button",value:"Play",onClick:function(){r(!0)}})," "]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("label",{children:"Play Intro"}),Object(a.jsx)("input",{type:"checkbox",checked:g,onChange:function(e){return _(e.target.checked),!0}})]}),Object(a.jsx)("p",{children:Object(a.jsx)(S,{onChange:function(e){w(e.target.value)}})}),Object(a.jsx)("p",{children:Object(a.jsx)(C,{min:.8,max:1.2,label:"Narration speed",onChange:function(e){b(parseFloat(e.target.value))}})}),Object(a.jsx)("p",{children:Object(a.jsx)(C,{min:.5,max:2,label:"Sonification speed",onChange:function(e){l(parseFloat(e.target.value))}})})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root")),P()}},[[23,1,2]]]);
//# sourceMappingURL=main.fb062057.chunk.js.map