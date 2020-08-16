_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{AIIw:function(e){e.exports=JSON.parse('{"label":"complex","text":"A kind of splinter psyche that is a collection of images and ideas centered around a core archetype that can take temporary possesion of the ego (for example a money complex).","source":"A Critical Dictionary of Jungian Analysis pg. 34"}')},BBbC:function(e,n,t){e.exports={prev_next:"PrevNext_prev_next__3uyX5",list:"PrevNext_list__RKtDj",hdg2:"PrevNext_hdg2__AiWTE",hdg3:"PrevNext_hdg3__2IZIN",alink:"PrevNext_alink__3W5hJ"}},Fwg7:function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),s=t("YFqc"),i=t.n(s),r=t("BBbC"),c=t.n(r),l=o.a.createElement;n.a=function(e){var n=e.parent,t=e.prev,a=e.current,o=e.next;return l("nav",{className:c.a.prev_next},l("h2",{className:c.a.hdg2},n),l("ul",{className:c.a.list},t&&l("li",null,l("h3",{className:c.a.hdg3},"Previous"),l(i.a,{href:t.href},l("a",{className:c.a.alink},t.name))),l("li",null,l("h3",{className:c.a.hdg3},"Currently Reading"),a),o&&l("li",null,l("h3",{className:c.a.hdg3},"Next"),l(i.a,{href:o.href},l("a",{className:c.a.alink},o.name)))))}},NQmR:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/racial-complex/1-the-nature-of-complexes",function(){return t("n3Vu")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var a=t("zoAU"),o=t("7KCV");n.__esModule=!0,n.default=void 0;var s,i=o(t("q1tI")),r=t("g/15"),c=t("nOHt"),l=t("elyg");var u=new Map,h=window.IntersectionObserver,p={};var f=function(e,n){var t=s||(h?s=new h((function(e){e.forEach((function(e){if(u.has(e.target)){var n=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),u.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),u.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}u.delete(e)}):function(){}};function d(e,n,t,a){e.prefetch(n,t,a).catch((function(e){0})),p[n+"%"+t]=!0}function m(e,n,t,a,o,s,i){var c=e.currentTarget,l=c.nodeName,u=c.target;"A"===l&&(u&&"_self"!==u||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var n=(0,r.getLocationOrigin)();return new URL(e,n).origin===n}(t)&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),n[o?"replace":"push"](t,a,{shallow:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}var b=function(e){var n=!1!==e.prefetch,t=i.default.useState(),o=a(t,2),s=o[0],r=o[1],u=(0,c.useRouter)(),b=u&&u.pathname||"/",g=i.default.useMemo((function(){var n=(0,l.resolveHref)(b,e.href);return{href:n,as:e.as?(0,l.resolveHref)(b,e.as):n}}),[b,e.href,e.as]),v=g.href,y=g.as;i.default.useEffect((function(){if(n&&h&&s&&s.tagName&&!p[v+"%"+y])return f(s,(function(){d(u,v,y)}))}),[n,s,v,y,u]);var w=e.children,x=e.replace,O=e.shallow,j=e.scroll;"string"===typeof w&&(w=i.default.createElement("a",null,w));var _=i.Children.only(w),N={ref:function(e){e&&r(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||m(e,u,v,y,x,O,j)}};return n&&(N.onMouseEnter=function(e){_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),d(u,v,y,{priority:!0})}),!e.passHref&&("a"!==_.type||"href"in _.props)||(N.href=(0,l.addBasePath)(y)),i.default.cloneElement(_,N)};n.default=b},dUEA:function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),s=t("YFqc"),i=t.n(s),r=t("yIZk"),c=t.n(r),l=o.a.createElement;n.a=function(e){var n=e.parent;return l("ul",{className:c.a.breadcrumb},l("li",{className:c.a.list_item},l(i.a,{href:n.href},l("a",null,n.name))))}},n3Vu:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return x}));var a=t("wx14"),o=t("Ff2n"),s=t("q1tI"),i=t.n(s),r=t("7ljp"),c=t("YFqc"),l=t.n(c),u=t("dUEA"),h=t("vQD/"),p=t.n(h),f=i.a.createElement,d=function(e){var n=e.label,t=e.text,a=e.source,o=Object(s.useState)("description"),i=o[0],r=o[1],c=function(){r("description"===i?"view":"description")};return f("dl",{className:p.a.definiton},f("dt",{className:p.a.term},f("a",{onClick:function(){return c()}},n)),f("dd",{className:p.a[i]},t," ",f("em",null,a)," ",f("br",null)," ",f("a",{onClick:function(){return c()}},"Close")))},m=t("j1XH"),b=t("Fwg7"),g=t("pv4s"),v=t("AIIw"),y=(i.a.createElement,{}),w="wrapper";function x(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.a)(w,Object(a.a)({},y,t,{components:n,mdxType:"MDXLayout"}),Object(r.a)(m.a,{title:"Notes on The Racial Complex: A Jungian Perspective on Culture and Race: The Nature of Complexes",mdxType:"HtmlHeader"}),Object(r.a)(u.a,{parent:{name:"The Racial Complex: A Jungian Perspective on Culture and Race",href:"/racial-complex"},mdxType:"Breadcrumb"}),Object(r.a)("h1",null,"1. The Nature of Complexes"),Object(r.a)("p",null,Object(r.a)("em",{parentName:"p"},"How unconscious psychological processes like complexes influence the our\nego conscious thinking, and our collective human behavioral\ninteractions.")),Object(r.a)("p",null,"Dr. Brewster starts the chapter by locating the position of the ",Object(r.a)(d,{label:v.label,text:v.text,source:v.source,mdxType:"Definition"})," in Jung's model of the psyche. In doing so she\ngives us a nice, even poetic review of Jung's model. "),Object(r.a)(l.a,{href:"/johnbetts",mdxType:"Link"},Object(r.a)("a",null,"See notes on Jungian Analyst primer on Jung's model if you want a primer.")),Object(r.a)("p",null,"She starts by noting consciousness - the ",Object(r.a)(d,{label:g.label,text:g.text,source:g.source,mdxType:"Definition"})),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"lives inside the unconscious"),Object(r.a)("li",{parentName:"ul"},"just as the earth (ego) is pulled by the gravitation of the sun (the\nunconscious). ")),Object(r.a)("p",null,"The ego, like gravity, keeps us from getting overwhelmed by the\nunconscious (sun) by giving us a basic understanding and of our place in\nthe world. The ego however is not the sum of our psyche just the part\nwhich we are conscious of. The unconscious (sun) is very powerful and can\noverwhelm the ego. "),Object(r.a)("p",null,"She quotes Jung on the lack of delineation between conscious and\nunconscious:"),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},"We must however, accustom ourselves to the thought that conscious and\nunconscious have no clear demarcation ... It is rather the case that\nthe psyche is a conscious-unconscious whole.")),Object(r.a)("p",null,Object(r.a)("em",{parentName:"p"},"On the Nature of the Psyche, Collected Works vol. 8, para 397")),Object(r.a)("h3",null,"The Personal Unconscious as a Location of Complexes"),Object(r.a)("p",null,"There is a space in the psyche just beyond consciousness where we have\nnon-ego, unconsciousness and otherness. Often when we suffer\npsychologically we discover this place. This other place may lead us to\nseek out therapy for example. This place may be thought of as the personal\nunconscious."),Object(r.a)("p",null,"Jung describes the personal unconscious as contents of psyche that:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Lost intensity and were forgotten"),Object(r.a)("li",{parentName:"ul"},"Had consciousness withdrawn (repression)"),Object(r.a)("li",{parentName:"ul"},"Never had sufficient intensity to reach consciousness but still found\nits way into the psyche.")),Object(r.a)("h3",null,"Shadow as another location of complexes"),Object(r.a)("p",null,"Jung defined the shadow very succinctly:"),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},"The thing a person has no wish to be. ")),Object(r.a)("p",null,Object(r.a)("em",{parentName:"p"},"Collected Works Vol 16 para 470.")," The Ego stands to shadow as light to\nshade. It is the part of the personality one wishes to hide - even from\nthemselves. ( ",Object(r.a)("em",{parentName:"p"},"A Critical Dictionary of Jungian Analysis")," pg.\n138)."),Object(r.a)("p",null,"Jung also indicated the shadow is located in the personal unconscious. The\ncollective unconscious is also important in Jung's model. The collective\nunconscious is related to instinctual patterns of energy inherited across\ngenerations (archetypes). Humans all inherit these archetypes. One key thing to\nunderstand about complexes and archetypes is that we do no channel them, they\nchannel us. They can overwhelm the ego and take control of an individual. The\nego gets shoved to the back seat of the car in this situation and is no longer\ndriving the car."),Object(r.a)("h2",null,"Complexes"),Object(r.a)("p",null,"From ",Object(r.a)("em",{parentName:"p"},"A Critical Dictionary of Jungian Analysis"),": a ",Object(r.a)("strong",{parentName:"p"},"complex"),' is\na collection of images and ideas, clustered around a core derived from one\nor more archetypes, and characterized by an emotional tone. When they come\ninto play (become "constellated"), complexes contribute to behavior and\nare marked by affect whether a person is conscious of them or not. They\nare particularly useful in analysis of neurotic symptoms.'),Object(r.a)("p",null,"For Jung the Ego is a complex that makes itself aware through observation. It\nalso shares connections to other complexes.  It's power of observation and\nability to manage day to day life give it the impression of supreme power, but\nwhen it had to cope with the unconscious like a dream, it loses its power. "),Object(r.a)(b.a,{parent:"The Racial Complex: A Jungian Perspective on Culture and Race",current:"The Nature of Complexes",prev:{name:"Introduction",href:"/racial-complex/introduction"},mdxType:"PrevNext"}))}x.isMDXComponent=!0},pv4s:function(e){e.exports=JSON.parse('{"label":"ego","text":"Jung thought of the ego as the the center of consciousness. He distinguished himself from Freud in that he thought of the ego as incomplete and as less than the entire psyche.","source":"A Critical Dictionary of Jungian Analysis pg. 50."}')},"vQD/":function(e,n,t){e.exports={definiton:"Definition_definiton__3vaT5",term:"Definition_term__2Cv6i",description:"Definition_description__3c73c",view:"Definition_view__2eP8k"}},yIZk:function(e,n,t){e.exports={breadcrumb:"Breadcrumb_breadcrumb__2vI7f",list_item:"Breadcrumb_list_item__120iu"}}},[["NQmR",0,1,2,3]]]);