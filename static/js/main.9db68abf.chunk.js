(this["webpackJsonppatryk-zwolak-portfolio"]=this["webpackJsonppatryk-zwolak-portfolio"]||[]).push([[0],[,,,,,,,,,,,function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(8),o=t.n(r),c=(t(16),t(17),t(18),t(1)),m=t(2),s=t(4),l=t(3),d=t(5),u=t(9),_=t.n(u),h=t(10),p=t.n(h),g=(t(20),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){new p.a(document.querySelector(".parallax-background"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"parallax-background"},i.a.createElement("div",{className:"parallax-background__elements","data-depth":"1","data-invert-x":!0,"data-invert-y":!0},i.a.createElement("div",{className:"parallax-background__element parallax-background__element--first"})),i.a.createElement("div",{className:"parallax-background__elements","data-depth":"0.9"},i.a.createElement("div",{className:"parallax-background__element parallax-background__element--second"})),i.a.createElement("div",{className:"parallax-background__elements","data-depth":"0.8"},i.a.createElement("div",{className:"parallax-background__element parallax-background__element--third"})),i.a.createElement("div",{className:"parallax-background__elements","data-depth":"0.7"},i.a.createElement("div",{className:"parallax-background__element parallax-background__element--fourth"})),i.a.createElement("div",{className:"parallax-background__elements","data-depth":"0.6"},i.a.createElement("div",{className:"parallax-background__element parallax-background__element--fifth"})),i.a.createElement("div",{className:"parallax-background__elements","data-depth":"0.5"},i.a.createElement("div",{className:"parallax-background__element parallax-background__element--sixth"})))}}]),a}(n.Component)),b=(t(21),function(e){var a=["header__hamburger-icon"];return e.hamburgerActive&&a.push("header__hamburger-active"),i.a.createElement("div",{className:"header__hamburger"},i.a.createElement("div",{className:a.join(" "),onClick:e.handleHamburger},i.a.createElement("svg",{width:"1000px",height:"1000px"},i.a.createElement("path",{className:"header__hamburger-path1",d:"M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"}),i.a.createElement("path",{className:"header__hamburger-path2",d:"M 300 500 L 700 500"}),i.a.createElement("path",{className:"header__hamburger-path3",d:"M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"})),i.a.createElement("button",{className:"header__hamburger-icon-button"})))}),v=function(e){var a=["header__info"];return e.hamburgerActive&&a.push("header__info--active"),i.a.createElement("div",{className:a.join(" ")},i.a.createElement("div",{className:"header__info-inner"}))},y=function(e){var a=["header__empty"];return e.firstElement&&a.push("header__empty--first-element"),e.hamburgerActive&&a.push("header__empty--active"),i.a.createElement("div",{className:a.join(" ")},i.a.createElement("div",{className:"header__empty-inner"}))},f=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={hamburgerActive:!1},t.handleHamburger=function(e){e.preventDefault(),t.setState({hamburgerActive:!t.state.hamburgerActive})},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=["header"];return this.state.hamburgerActive?e.push("header--active"):(e.push("header--deactive"),setTimeout((function(){document.querySelector("header.header").classList.remove("header--deactive")}),700)),i.a.createElement("header",{className:e.join(" ")},i.a.createElement(y,{hamburgerActive:this.state.hamburgerActive,firstElement:!0}),i.a.createElement(b,{handleHamburger:this.handleHamburger,hamburgerActive:this.state.hamburgerActive}),i.a.createElement(v,{hamburgerActive:this.state.hamburgerActive}),i.a.createElement(y,{hamburgerActive:this.state.hamburgerActive}))}}]),a}(n.Component),x=function(e){var a=e.sideData;return i.a.createElement("div",{className:"main-section__left-side"},i.a.createElement("div",{className:"main-section__header"},0===a.id?i.a.createElement("h1",{className:"fs-45 fw-600 ls-05"},a.header):i.a.createElement("h2",{className:"fs-45 fw-600 ls-05"},a.header)),i.a.createElement("div",{className:"main-section__geometry-elements"},i.a.createElement("div",{className:"main-section__geometry-element main-section__geometry-element--first"}),i.a.createElement("div",{className:"main-section__geometry-element main-section__geometry-element--second"}),i.a.createElement("div",{className:"main-section__geometry-element main-section__geometry-element--third"})),i.a.createElement("div",{className:"main-section__subheader"},i.a.createElement("p",{className:"subheader"},a.subheader)))},E=function(e){var a,t=e.sideData;return t.textOnBanner&&(a=t.textOnBanner.map((function(e,a){return i.a.createElement("div",{className:"main-section__right-side-inner-description-element"},i.a.createElement("h3",{className:"main-section__right-side-inner-description-element--number-".concat(a," fw-500")},e.line))}))),i.a.createElement("div",{className:"main-section__right-side"},i.a.createElement("div",{className:"main-section__right-side-inner"},i.a.createElement("div",{className:"main-section__right-side-inner-background-img"},i.a.createElement("div",{className:"main-section__right-side-inner-background-mask main-section__right-side-inner-background-mask--color-11"}),i.a.createElement("div",{className:"main-section__right-side-inner-background-mask main-section__right-side-inner-background-mask--color-5"}),i.a.createElement("div",{className:"main-section__right-side-inner-background-mask"}),i.a.createElement("div",{className:"main-section__right-side-inner-background-img main-section__right-side-inner-background-img--".concat(t.id)})),i.a.createElement("div",{className:"main-section__right-side-inner-number"},i.a.createElement("span",{className:"numbers"},"0"+(t.id+1))),i.a.createElement("div",{className:"main-section__right-side-inner-description"},a)))},k=function(){return i.a.createElement("div",{className:"main-section__element-button primary-button"},i.a.createElement("span",null),i.a.createElement("div",{className:"mask"},i.a.createElement("div",{className:"ring"})))},N=function(e){var a=e.sectionData,t="section main-section__element main-section__".concat(a.sectionClass);return i.a.createElement("div",{className:t},i.a.createElement(x,{sideData:a.sectionLeftData}),i.a.createElement(E,{sideData:a.sectionRightData}),i.a.createElement(k,null))},T=(t(22),t(23),t(24),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={},t.sectionsData={},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){new _.a(".main-section",{navigation:!0})}},{key:"render",value:function(){var e=this.props.data.map((function(e){return i.a.createElement(N,{key:e.sectionClass,sectionData:e})}));return i.a.createElement("div",{className:"App"},i.a.createElement(g,null),i.a.createElement(f,null),i.a.createElement("div",{className:"main-section"},e))}}]),a}(n.Component));T.defaultProps={data:[{sectionClass:"start-page",sectionLeftData:{id:0,header:"Patryk Zwolak",subheader:"Front-end Developer"},sectionRightData:{id:0,textOnBanner:[{line:"I am person who:"},{line:"1. Belive that everything is possible"},{line:"2. Learns and develops constantly"},{line:"3. Never give up because... (read point no 1)"}]}},{sectionClass:"about-me",sectionLeftData:{id:1,header:"About me",subheader:"Some words about me"},sectionRightData:{id:1}},{sectionClass:"resume",sectionLeftData:{id:2,header:"Curiculum vitae",subheader:"Check my CV and e-CV in 2 language version"},sectionRightData:{id:2}}]};var w=T,A=t(6),j=t.n(A),D=t(29);document.onreadystatechange=function(){if("complete"===document.readyState){var e=!0;D.b.fromTo(".active .main-section__header",{x:-1e3},{x:0,duration:1,delay:.5,ease:"expo.out"}),D.b.fromTo(".active .main-section__geometry-element--first",{x:-1e3},{x:0,duration:1,delay:.6,ease:"expo.out"}),D.b.fromTo(".active .main-section__geometry-element--second",{x:-1e3},{x:0,duration:1,delay:.7,ease:"expo.out"}),D.b.fromTo(".active .main-section__geometry-element--third",{x:-1e3},{x:0,duration:1,delay:.8,ease:"expo.out"}),D.b.fromTo(".active .main-section__subheader",{x:-1e3},{x:0,duration:1,delay:1,ease:"expo.out"}),D.b.fromTo(".active .main-section__right-side-inner-number",{y:500},{y:0,duration:1,delay:1.2,ease:"expo.out"}),D.b.fromTo(".active .main-section__element-button.primary-button",{x:500},{x:0,duration:1,delay:1.4,ease:"expo.out"}),D.b.fromTo(".active .main-section__right-side-inner-background-img",{y:-2e3},{y:0,duration:.5,delay:.4,ease:"expo.out"}),D.b.fromTo(".active .main-section__right-side-inner-description",{opacity:0},{duration:.5,delay:1.5,opacity:1}),D.b.fromTo(".active .main-section__right-side-inner-background-mask--color-5",{x:0},{x:1e3,duration:2,delay:1,ease:"expo.out"}),D.b.fromTo(".active .main-section__right-side-inner-background-mask--color-11",{x:0},{x:1e3,duration:1.2,delay:1.2,ease:"expo.out"});setTimeout((function(){!function(){var e=new D.a({repeat:-1}),a=new j.a(document.querySelector(".main-section__right-side-inner-description-element--number-1")).chars,t=new j.a(document.querySelector(".main-section__right-side-inner-description-element--number-2")).chars,n=new j.a(document.querySelector(".main-section__right-side-inner-description-element--number-3")).chars;e.staggerFrom(a,.03,{opacity:0,ease:"expo.out"},.05,"+=0.1"),e.to(a,{duration:0,delay:5,opacity:0}),e.staggerFrom(t,.03,{opacity:0,ease:"expo.out"},.05,"+=0.1"),e.to(t,{duration:0,delay:5,opacity:0}),e.staggerFrom(n,.03,{opacity:0,ease:"expo.out"},.05,"+=0.1"),e.to(n,{duration:0,delay:5,opacity:0})}()}),1400),window.addEventListener("wheel",(function(){!0===e&&(document.querySelector(".main-section__element.active:not(.fp-completely)")&&(D.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__header",{x:-1e3},{x:0,duration:1,delay:.5,ease:"expo.out"}),D.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__geometry-element--first",{x:-1e3},{x:0,duration:1,delay:.6,ease:"expo.out"}),D.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__geometry-element--second",{x:-1e3},{x:0,duration:1,delay:.7,ease:"expo.out"}),D.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__geometry-element--third",{x:-1e3},{x:0,duration:1,delay:.8,ease:"expo.out"}),D.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__subheader",{x:-1e3},{x:0,duration:1,delay:1,ease:"expo.out"}),D.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__right-side-inner-number",{y:500},{y:0,duration:1,delay:1.2,ease:"expo.out"}),D.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__element-button.primary-button",{x:500},{x:0,duration:1,delay:1.4,ease:"expo.out"}),D.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__right-side-inner-background-img",{y:-2e3},{y:0,duration:.5,delay:.4,ease:"expo.out"}),D.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__right-side-inner-description",{opacity:0},{duration:.5,delay:1.5,opacity:1}),D.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__right-side-inner-background-mask--color-5",{x:0},{x:1e3,duration:2,delay:1,ease:"expo.out"}),D.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__right-side-inner-background-mask--color-11",{x:0},{x:1e3,duration:1.2,delay:1.2,ease:"expo.out"})),e=!e,setTimeout((function(){e=!0}),1e3))}))}},o.a.render(i.a.createElement(w,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.9db68abf.chunk.js.map