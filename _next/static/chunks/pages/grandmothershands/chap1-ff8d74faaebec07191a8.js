_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{BBbC:function(e,t,n){e.exports={prev_next:"PrevNext_prev_next__3uyX5",list:"PrevNext_list__RKtDj",hdg2:"PrevNext_hdg2__AiWTE",hdg3:"PrevNext_hdg3__2IZIN",alink:"PrevNext_alink__3W5hJ"}},Fwg7:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("YFqc"),i=n.n(o),s=n("BBbC"),l=n.n(s),c=r.a.createElement;t.a=function(e){var t=e.parent,n=e.prev,a=e.current,r=e.next;return c("nav",{className:l.a.prev_next},c("h2",{className:l.a.hdg2},t),c("ul",{className:l.a.list},n&&c("li",null,c("h3",{className:l.a.hdg3},"Previous"),c(i.a,{href:n.href},c("a",{className:l.a.alink},n.name))),c("li",null,c("h3",{className:l.a.hdg3},"Currently Reading"),a),r&&c("li",null,c("h3",{className:l.a.hdg3},"Next"),c(i.a,{href:r.href},c("a",{className:l.a.alink},r.name)))))}},OuZR:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/grandmothershands/chap1",function(){return n("gXFL")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("zoAU"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var o=r(n("q1tI")),i=n("elyg"),s=n("nOHt"),l=n("vNVm"),c={};function u(e,t,n,a){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.asPath||"/",d=o.default.useMemo((function(){var t=(0,i.resolveHref)(r,e.href,!0),n=a(t,2),o=n[0],s=n[1];return{href:o,as:e.as?(0,i.resolveHref)(r,e.as):s||o}}),[r,e.href,e.as]),h=d.href,f=d.as,p=e.children,v=e.replace,m=e.shallow,b=e.scroll,g=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var y=o.Children.only(p),w=y&&"object"===typeof y&&y.ref,_=(0,l.useIntersection)({rootMargin:"200px"}),O=a(_,2),k=O[0],j=O[1],T=o.default.useCallback((function(e){k(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,k]);(0,o.useEffect)((function(){var e=j&&t&&(0,i.isLocalURL)(h),a="undefined"!==typeof g?g:n&&n.locale,r=c[h+"%"+f+(a?"%"+a:"")];e&&!r&&u(n,h,f,{locale:a})}),[f,h,j,g,t,n]);var N={ref:T,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o,locale:l,scroll:s}))}(e,n,h,f,v,m,b,g)},onMouseEnter:function(e){(0,i.isLocalURL)(h)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,h,f,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var I="undefined"!==typeof g?g:n&&n.locale,x=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(f,I,n&&n.locales,n&&n.domainLocales);N.href=x||(0,i.addBasePath)((0,i.addLocale)(f,I,n&&n.defaultLocale))}return o.default.cloneElement(y,N)};t.default=d},dUEA:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("YFqc"),i=n.n(o),s=n("yIZk"),l=n.n(s),c=r.a.createElement;t.a=function(e){var t=e.parent;return c("ul",{className:l.a.breadcrumb},c("li",{className:l.a.list_item},c(i.a,{href:t.href},c("a",null,t.name))))}},gXFL:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("HALo"),r=n("dhJC"),o=n("q1tI"),i=n.n(o),s=n("7ljp"),l=(n("YFqc"),n("j1XH")),c=n("dUEA"),u=(n("Fwg7"),i.a.createElement,{});function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.a)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)(l.a,{title:"My Grandmother's Hands: Introduction",mdxType:"HtmlHeader"}),Object(s.a)(c.a,{parent:{name:"My Grandmother's Hands",href:"/grandmothershands"},mdxType:"Breadcrumb"}),Object(s.a)("h1",null,"Chapter One: Your Body and Blood"),Object(s.a)("p",null,"  For the last three decades we have tried to use our brains to address\nwhite supremacy in our country but we have made little progress.  The\nproblem is white supremacy lives in our bodies not our brains. It's\nvisceral not logical. "),Object(s.a)("p",null,"  Our bodies have a different kind of knowledge than our brains. This\nsomatic knowledge is felt as constriction or expansion, ease or pain,\nenergy or numbness and are driven by bodily structures that connect the\nbrain to our other vital organs. This nerve comes from the brainstem and\nis called the wandering nerve or the vagus nerve. Menakem suggests soul\nnerve might be a better name. This nerve is not connection to the\nrational part of our brain - it is connected to the part of the brain\nthat helps us navigate the world and gives us activating or resisting\nenergy. In other words it connects to the lizard brain that regulates\nsurvival. In a given moment the lizard brain gives commands to fight,\nflee, freeze and in extreme cases annihilate. "),Object(s.a)("p",null,"  The body then reacts to real and ",Object(s.a)("strong",null,"perceived")," threats."),Object(s.a)("p",null,"  White body supremacy operates at this level first - the level of the\nlizard brain.  These reactions are all about what is safe and\ncomfortable for the body and what is a threat to the body. The former is\nwhat the body loves and the later invokes the flee, freeze or fight\nresponse.  In many cases the brain can overcome this but when there is\nperceived or real danger, the lizard brain shoves the thinking brain out\nof the way and reacts with flee, freeze or fight. The lizard brain is in\ncharge of regulating our reactions to stimuli in our environment. It\ngets first crack at a response and only if there is no perceived danger\ndoes higher cognitive function kick in. "),Object(s.a)("p",null,"  A threat can be more than just physical danger, it also can be to\na threat to our beliefs and values. "),Object(s.a)("p",null,"  This is were we live - in the body. We constrict or relax depending on\nwhat is happening around us. When things around us move too fast and are\noverwhelming, we are traumatized."),Object(s.a)("p",null,"  Menakem has a different definition of trauma than the colloquial\nunderstanding. "),Object(s.a)("p",null,"  Trauma is not an emotional response - it happens at a lower lever - the\nbody. It is a protection mechanism designed to stop damage to protect\nthe body."),Object(s.a)("p",null,"  Trauma is not an emotional weakness but a tool to protect our bodies\nfrom damage and help us survive. Trauma can be triggered by real or"),Object(s.a)("strong",null,"perceived")," threats. Our reaction to events that are perceived as threatening and traumatic is lightning fast - our cognitive brains don't even have a chance to figure into the equation. Trauma then gets stuck in the body and stays there until we address it - which is hard work.",Object(s.a)("p",null,"  We can have a traumatic response to real threats and perceived ones.\nThat is why people can get killed in arguments over a simple sporting\nmatch between rival favorite teams. The body can react as if there is\na threat even over a football game."),Object(s.a)("p",null,"  Trauma responses are individual and dependent on our individual\nexperiences and makeup. Trauma always happens ",Object(s.a)("em",null,"to")," us it is never\na choice. "),Object(s.a)("p",null,"  Another way to describe trauma is that is is a wordless story our body\ntells us about what is a threat and is what is safe. Our thinking brain\nnever has a chance to enter into the equation."))}d.isMDXComponent=!0},vNVm:function(e,t,n){"use strict";var a=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,l=(0,r.useRef)(),c=(0,r.useState)(!1),u=a(c,2),d=u[0],h=u[1],f=(0,r.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,o=a.observer,i=a.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(r))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,d]);return(0,r.useEffect)((function(){if(!i&&!d){var e=(0,o.requestIdleCallback)((function(){return h(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[f,d]};var r=n("q1tI"),o=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var s=new Map},yIZk:function(e,t,n){e.exports={breadcrumb:"Breadcrumb_breadcrumb__2vI7f",list_item:"Breadcrumb_list_item__120iu"}}},[["OuZR",0,1,2,3]]]);