(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"48fX":function(e,t,n){var a=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"5sOH":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/origins/intro",function(){return n("f6BR")}])},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("q1tI"),o=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),h=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return(o.a.createElement(o.a.Fragment,{},t))}},f=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=h(n),f=a,d=u["".concat(r,".").concat(f)]||u[f]||p[f]||s;return n?o.a.createElement(d,i(i({ref:t},l),{},{components:n})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var s=n.length,r=new Array(s);r[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"===typeof e?e:a,r[1]=i;for(var l=2;l<s;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return a}))},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("/GRZ"),o=n("i2R6"),s=n("48fX"),r=n("tCBg"),i=n("T0f4");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return r(this,n)}}var l=n("AroE"),h=n("7KCV");t.__esModule=!0,t.default=void 0;var u,p=h(n("q1tI")),f=n("QmWs"),d=n("g/15"),m=l(n("nOHt")),b=n("elyg");function g(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,O=window.IntersectionObserver,j={};function v(){return u||(O?u=new O((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){s(n,e);var t=c(n);function n(e){var o;return a(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,a=null;return function(o,s){if(a&&o===t&&s===n)return a;var r=e(o,s);return t=o,n=s,a=r,r}}((function(e,t){return{href:(0,b.addBasePath)(g(e)),as:t?(0,b.addBasePath)(g(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,a=t.target;if("A"!==n||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=o.formatUrls(o.props.href,o.props.as),r=s.href,i=s.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(r)){var c=window.location.pathname;r=(0,f.resolve)(c,r),i=i?(0,f.resolve)(c,i):r,e.preventDefault();var l=o.props.scroll;null==l&&(l=i.indexOf("#")<0),m.default[o.props.replace?"replace":"push"](r,i,{shallow:o.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,a=t.as,o=(0,f.resolve)(e,n);return[o,a?(0,f.resolve)(e,a):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&O&&e&&e.tagName&&(this.cleanUpListeners(),j[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=v();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),j[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var s=p.Children.only(t),r={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(r.href=o||a),p.default.cloneElement(s,r)}}]),n}(p.Component);t.default=w},f6BR:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n("wx14"),o=n("Ff2n"),s=n("q1tI"),r=n.n(s),i=n("7ljp"),c=n("YFqc"),l=n.n(c),h=(r.a.createElement,{}),u="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.a)(u,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h1",null,"Introduction"),Object(i.a)("h3",null,"Recommended reading or listening if you want more depth on Jung and his model of the psyche."),Object(i.a)("p",null,"I am relying heavily on two resources that I can recommend if you want to dive\ndeeper into Jung's model. Instead of just providing definitions of the parts of\nthe psyche in Jung's model I will try to give you an idea of the core\nconcepts and how they relate to one another. It really helps to have\na sense of Jung's model of the psyche before tackling this book. "),Object(i.a)("p",null,Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://jungian.libsyn.com/"}),"The Jung Podcast")," and excellent introduction to\nJung's model of the psyche by Jon Betts a Canadian Jungian Analyst. "),Object(i.a)("p",null,"I have my notes from this podcast ",Object(i.a)(l.a,{href:"/johnbetts",mdxType:"Link"},Object(i.a)("a",null,"available on this blog")),"."),Object(i.a)("p",null,Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://www.amazon.com/gp/offer-listing/069101048X"}),"On Jung by Anthony\nStevens"),"."),Object(i.a)("h2",null,"Book Introduction"),Object(i.a)("h3",null,"Introduction to the Introduction"),Object(i.a)("p",null,'What is Neumann trying to accomplish in this book? We don\'t have to read far to\nanswer this question. In the first sentence of the introduction he states: "The\nfollowing attempt outline the archetypal stages of the development of\nconsciousness is based on modern depth psychology (psychology that studies\nthe unconscious - Jung, Freud, and Adler for example). It is an\napplication of the analytical psychology of C.J. Jung ..." '),Object(i.a)("p",null,"The key word here is stages.  His theory outlines what he sees as the stages of\nthe development of consciousness."),Object(i.a)("p",null,"Neumann emphasises that unlike other methods that look at environmental\nfactors in the development of consciousness, he is interested in the\ninternal, psychic, and archetypal factors in the development of\nconsciousness."),Object(i.a)("p",null,"He calls archetypes the structural organs of the psyche, or pictorial\ninstincts. The unconscious uses these archetypes to reveal itself to the\nconscious mind. "),Object(i.a)("p",null,'Neumann:  "It is the task of this book to show that a series of archetypes is\na main constituent of mythology, that they (archetypes) stand in stadial\nsuccession in an organic relation to one another, and that their stadial\nsuccession determines the growth of consciousness. In the course of its\nontogenetic (lifetime) development, the individual ego has to pass through the\nsame archetypal stages which determined the evolution of consciousness in the\nlife humanity. '),Object(i.a)("p",null,"This idea of the individual repeating the stages of growth of the species\nis an idea Jung took from Friedrich Nietzsche. Now all of this is quite\nabstract, let's try to make it clearer."),Object(i.a)("p",null,"What I think he is saying in this statement is that historically human\nconsciousness went through a series of stages of development. The individual in\nhis lifetime passes through these same stages as the species. These stages are\ncomposed of archetypes - pictoral forms of instincts. We see these archetypes in\nmythology. To the extent he can Neumann is trying to survey all of mythology and\ndetermines its outlines.  In theses outlines he sees the stages of the\ngrowth of consciousness of the individual and of humanity. He is using\nthis outline to develop thoery of consciousness."),Object(i.a)("h3",null,"Stages of the Development of Consciousness"),Object(i.a)("p",null,'Passing through each stage, the ego transforms its relationship to the\narchetypes. "The ability to perceive, to understand, and to interpret\nthese images is a process of succession in time, ..  it takes place in\nstages." This ability to absorb unconscious contents improves at each\nstage and leads to individual transformation and improvement. Jung called\nthis telos which means self-realization. At each stage the individual can\nlook at its relationship to these core archetypes with increasing wisdom\nand light. It\'s as if we get another bite at the apple at each stage being\nwiser and more conscious of the complexes and archetypes that influence us\nin our actions.'),Object(i.a)("p",null,"Akin to geological layers these stages are not cleanly separated: they\nblend together. Pieces of an earlier stage can be found three stags later\nand vice versa. The uroboros of the first stage changes in each stages but\nmanages to stick around for quite awhile and never really leaves\ncompletely - it just manifests differently."),Object(i.a)("p",null,"In each of these stages we see the position of the individual (ego) in\nrelation to the symbolic feminine and masculine. What do we mean by the\nsymbolic masculine and feminine?  "),Object(i.a)("p",null,"This is difficult to define for us with our modern minds and our current\npolitical thought to get a grasp of.  When we talk about the symbolic\nmasculine and feminine we want to look at the symbols more in the way the\nancient mind looked at them.  Keep in mind that everyone has masculine and\nfeminine characteristics in their personality. In Jungian psychology the\ngoal is always the balance of the opposites in an effort to create\nwholeness and move away from one sidedness.  Don't take this as commentary\non the nature of gender or men and women in general. Remember in the myth\nof the birth of the goddess Athena she is born of Zeus directly without\na mother and is a goddess of wisdom and war both very masculine pursuits.\nIn other words she is feminine but exhibits strong masculine qualities."),Object(i.a)("p",null,"Let's try some word associations to get a feel for this. Clear your mind\nand just let these words sir your imagination. I'll state a feminine word\nfirst followed by a masculine word and pause before the next pair. Close\nyour eyes and take a deep breath. "),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Feminine"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Masculine"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Moon"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sun")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Earth"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Heaven")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Feeling"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Thought")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Instinct"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Logic")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Womb"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Phallus")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Darkness"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Light")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Listen"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Speak")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mystery"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Revelation")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sheath"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sword")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unconscious"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ego")))),Object(i.a)("p",null,"Hopefully, this gives you a feel for the concepts.  Defining concepts like\nthe symbolic feminine and masculine is almost counter-productive in the\nsense that the harder we try to grasp the concepts the more they can slip\nthrough our fingers. It seems better to circle around the concepts by\nproviding examples to illustrate.  "),Object(i.a)("p",null,"The ego position then shifts, changes and transforms its in relationship\nto the symbolic feminine and masculine at each stage. The ego, the\nmasculine and the feminine are all there at each stage - they just relate\nto each other differently at each stage."),Object(i.a)("p",null,"We can get a feel for these stages composed of archetypes by just examining the\nsection titles of the book. "),Object(i.a)("p",null,"Here I just offer a comment about the ego position in relation to the\nsymbolic masculine and feminine in each chapter. We will do a podcast\nepisode about each of these perhaps multiple podcasts on some of the\nlonger chapters."),Object(i.a)("p",null,"A. The Creation Myth "),Object(i.a)("p",null,"I. The Uroborous"),Object(i.a)("p",null,"  In the beginning - the creation stage - the masculine and feminine\nare united in perpeptual embrace while the ego is contained in this\nembrace. The ego sees itself as indistinct from the unified\nmasculine and feminine and lives in parcticpacion mystique.\nNeumann calls this stage the uroboros. The uroboros is the snake\neating its tale representing creation, destruction and rebirth. "),Object(i.a)("p",null,"II. The Great Mother"),Object(i.a)("p",null,"  The ego shifts slightly and the uroboros reappears as the Great\nMother who is both nuturer and destroyer. Tied to the seasons\nand agricultural cycle the masculine and/or the ego appear\nas the son of the mother who is nutured, raised, sacrificed\nand reborn each year (a corn king for example). "),Object(i.a)("p",null,"III. The Seperation of of World Parents: The Principle of Opposites"),Object(i.a)("p",null,"  Here the ego finally starts to find solid ground by separating\nworld parents but at the same time feels a great loss and guilt\nover the being seperated (think of the fall). The uroboros is\nfinally starting to break."),Object(i.a)("p",null,"B. The Hero Myth"),Object(i.a)("p",null,"I. The Birth of the Hero"),Object(i.a)("p",null,"  The hero is born and the struggle with the primordial parents\nbegins. The son (the ego) places himself between the world\nparents and divides them. The who picture shifts and the ego\ntakes up more space on the stage while the uroboros becomes\nthe dragon of chaos that must be defeated or the hero is\ndevoured (the ego dissolving back into the unconscious)."),Object(i.a)("p",null,"II. The Slaying of the Mother"),Object(i.a)("p",null,"  The hero is faced with dragon fight. The dragon is the uroboros\n(or the first parents) rearing its ugly head trying to snatch\nthe ego back into the unconscious. Killing the terrible mother\nliberates the treasure or the fertile feminine."),Object(i.a)("p",null,"III. The Slaying of the Father"),Object(i.a)("p",null,"  Even if the ego (hero or son) kills the terrible mother there is\nstill the masculine side of the uroboros to deail with."),Object(i.a)("p",null,"C. The Transformation Myth\nI. The Captive and the Treasure\nII. Transformation or Osiris"),Object(i.a)("p",null," The symbol then in the final stage is the mandala where unity is again\nachieved but the individual now joins in the embrace of the symbolic\nfeminine and masculine as a conscious participant."),Object(i.a)("p",null,"Each of these stages is a chapter in the book and will have one or\npodcasts dedicated to them.  "),Object(i.a)("p",null,"Human consciousness has absorbed more and more unconscious contents over\nthousands of years and in this process expands its own frontiers. Neumann\nsuggests that in the West consciousness has achieved continuity where each\nstage is integrated. According to Neumann modern consciousness sits on\nthis integration."),Object(i.a)("p",null,"Now when he says West this includes ancient Babylon and Egypt. I am really\nexcited to get into this aspect of the book because its absolutely fascinating.\nHe ties the myths like those of Marduk (Babylon), Osiris (Egypt), and Christ\ntogether as themes that are the basis for development of society and\nconsciousness.  This is that ability to look under the current of history and\nsee the themes that still influence us today that make Neumann so compelling."),Object(i.a)("p",null,"Why is this podcast called The Gods Within? For Neumann that which was projected\noutward the gods is still with us in our psyches due to the influence of the\ncollective unconscious.  The collective unconscious is the deeper layer of\nhumanity that each of us is connected to.  Consciousness is a late evolutionary\nproduct and the collective unconscious came first. Throughout human history and\npre-history symbols were projected outward as powerful forces or gods. These\nsame symbols and archetypes determine individual psychic growth as well."),Object(i.a)("p",null,'Neumann states "The integration of these collective symbols leads to the further\ndevelopment of the psyche and synthesis of the personality thus it has a\ntherapeutic aim as well. In this process the psyche expands leading to new\nsolutions and new problems which trigger the whole process again. The collective\nhuman aspect is rediscovered and begins to come alive, new insights, new\npossibilities of life add themselves to the narrowly personalistic and\nrigid personality of the sick-souled modern man."  '),Object(i.a)("p",null,"The development of consciousness from the unconscious in myth is the focus of the\nfirst half of the book while the second half focuses on the internalization of\nthese myths into the individual psyche."))}p.isMDXComponent=!0},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},tCBg:function(e,t,n){var a=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?o(e):t}},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))}},[["5sOH",0,1,2]]]);