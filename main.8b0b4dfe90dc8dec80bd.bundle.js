(()=>{"use strict";const t={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function e(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const n={date:e({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:e({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:e({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},a={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function r(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function o(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let c;return c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c,{value:c,rest:e.slice(i.length)}}}var i;const s={code:"en-US",formatDistance:(e,n,a)=>{let r;const o=t[e];return r="string"==typeof o?o:1===n?o.one:o.other.replace("{{count}}",n.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+r:r+" ago":r},formatLong:n,formatRelative:(t,e,n,r)=>a[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:r({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:r({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:r({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:r({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:r({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(i.matchPattern);if(!n)return null;const a=n[0],r=t.match(i.parsePattern);if(!r)return null;let o=i.valueCallback?i.valueCallback(r[0]):r[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(a.length)}}),era:o({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:o({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:o({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:o({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let u={};function c(){return u}Math.pow(10,8);const d=6048e5,l=864e5;function m(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function h(t){const e=m(t);return e.setHours(0,0,0,0),e}function f(t){const e=m(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function g(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function w(t){const e=m(t);return function(t,e){const n=h(t),a=h(e),r=+n-f(n),o=+a-f(a);return Math.round((r-o)/l)}(e,function(t){const e=m(t),n=g(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function y(t,e){const n=c(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=m(t),o=r.getDay(),i=(o<a?7:0)+o-a;return r.setDate(r.getDate()-i),r.setHours(0,0,0,0),r}function b(t){return y(t,{weekStartsOn:1})}function p(t){const e=m(t),n=e.getFullYear(),a=g(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const r=b(a),o=g(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=b(o);return e.getTime()>=r.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function v(t){const e=m(t),n=+b(e)-+function(t){const e=p(t),n=g(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),b(n)}(e);return Math.round(n/d)+1}function M(t,e){const n=m(t),a=n.getFullYear(),r=c(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=g(t,0);i.setFullYear(a+1,0,o),i.setHours(0,0,0,0);const s=y(i,e),u=g(t,0);u.setFullYear(a,0,o),u.setHours(0,0,0,0);const d=y(u,e);return n.getTime()>=s.getTime()?a+1:n.getTime()>=d.getTime()?a:a-1}function S(t,e){const n=m(t),a=+y(n,e)-+function(t,e){const n=c(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=M(t,e),o=g(t,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),y(o,e)}(n,e);return Math.round(a/d)+1}function k(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const P={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return k("yy"===e?a%100:a,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):k(n+1,2)},d:(t,e)=>k(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>k(t.getHours()%12||12,e.length),H:(t,e)=>k(t.getHours(),e.length),m:(t,e)=>k(t.getMinutes(),e.length),s:(t,e)=>k(t.getSeconds(),e.length),S(t,e){const n=e.length,a=t.getMilliseconds();return k(Math.trunc(a*Math.pow(10,n-3)),e.length)}},T={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return P.y(t,e)},Y:function(t,e,n,a){const r=M(t,a),o=r>0?r:1-r;return"YY"===e?k(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):k(o,e.length)},R:function(t,e){return k(p(t),e.length)},u:function(t,e){return k(t.getFullYear(),e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return k(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return k(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return P.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return k(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=S(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):k(r,e.length)},I:function(t,e,n){const a=v(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):k(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):P.d(t,e)},D:function(t,e,n){const a=w(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):k(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return k(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return k(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return k(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return P.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):P.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):k(a,e.length)},k:function(t,e,n){let a=t.getHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):k(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):P.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):P.s(t,e)},S:function(t,e){return P.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return D(a);case"XXXX":case"XX":return W(a);default:return W(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return D(a);case"xxxx":case"xx":return W(a);default:return W(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+x(a,":");default:return"GMT"+W(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+x(a,":");default:return"GMT"+W(a,":")}},t:function(t,e,n){return k(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return k(t.getTime(),e.length)}};function x(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),o=a%60;return 0===o?n+String(r):n+String(r)+e+k(o,2)}function D(t,e){return t%60==0?(t>0?"-":"+")+k(Math.abs(t)/60,2):W(t,e)}function W(t,e=""){const n=t>0?"-":"+",a=Math.abs(t);return n+k(Math.trunc(a/60),2)+e+k(a%60,2)}const O=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},Y=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},C={p:Y,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return O(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",O(a,e)).replace("{{time}}",Y(r,e))}},H=/^D+$/,N=/^Y+$/,q=["D","DD","YY","YYYY"];function E(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=m(t);return!isNaN(Number(n))}const A=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,F=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,L=/^'([^]*?)'?$/,j=/''/g,I=/[a-zA-Z]/;function z(t,e,n){const a=c(),r=n?.locale??a.locale??s,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,u=m(t);if(!E(u))throw new RangeError("Invalid time value");let d=e.match(F).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,C[e])(t,r.formatLong):t})).join("").match(A).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:G(t)};if(T[e])return{isToken:!0,value:t};if(e.match(I))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));r.localize.preprocessor&&(d=r.localize.preprocessor(u,d));const l={firstWeekContainsDate:o,weekStartsOn:i,locale:r};return d.map((a=>{if(!a.isToken)return a.value;const o=a.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return N.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return H.test(t)}(o))&&function(t,e,n){const a=function(t,e,n){const a="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(a),q.includes(t))throw new RangeError(a)}(o,e,String(t)),(0,T[o[0]])(u,o,r.localize,l)})).join("")}function G(t){const e=t.match(L);return e?e[1].replace(j,"'"):t}function Q(t,e){return+h(t)==+h(e)}const X={localStorage:{LOCAL_STORAGE_KEY:"timerData",save(t){localStorage.setItem(this.LOCAL_STORAGE_KEY,JSON.stringify(t))},load(){return JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY))}}},B=new class{constructor(t){this.storageAPI=X[t]}save(t,e){this.storageAPI.save(t,e)}load(t){return this.storageAPI.load(t)}}("localStorage");let J,$=B.load();if(!$){const t={occupations:[{name:"default",color:"#ff0000"}],days:[{date:z(new Date,"HH:mm:ss yyyy/MM/dd"),occupations:[{name:"default",time:0}]}]};B.save(t),$=t}const R={isActive:!1,startTime:void 0,endTime:void 0,timeInterval:void 0,occupation:$.occupations[0]},K=()=>{B.save($)},_=()=>{const t=$.days[$.days.length-1],e=Q(new Date,$.days[$.days.length-1].date);R.timeInterval=Math.round((new Date-R.startTime)/1e3);const n=t.occupations.find((t=>t.name===R.occupation.name));if(e){if(!n)return t.occupations.push({name:R.occupation.name,time:R.timeInterval}),void K();n.time=Number(n.time)+R.timeInterval,K()}else $.days.push({date:z(new Date,"HH:mm:ss yyyy/MM/dd"),occupations:[{name:R.occupation.name,time:Number(n.time)+R.timeInterval}]}),K(),console.log("next day!")},U={getStorage:()=>({...$}),getTimerStatus:()=>({startTime:z(R.startTime,"HH:mm:ss"),endTime:z(R.endTime,"HH:mm:ss"),timeInterval:R.timeInterval,occupation:R.occupation}),setOccupation(t){if(R.isActive)throw Error("Error: Timer is active! Stop timer before changing occupation.");R.occupation=$.occupations.find((e=>e.name===t))},addOccupation(t){const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;$.occupations.push({name:t,color:e}),K()},switchTimer(){R.isActive?(R.isActive=!1,R.endTime=new Date,R.timeInterval=Math.round((R.endTime-R.startTime)/1e3),clearInterval(J),(()=>{const t=$.days[$.days.length-1],e=Q(new Date,$.days[$.days.length-1].date),n=t.occupations.find((t=>t.name===R.occupation.name));if(e){if(!n)return t.occupations.push({name:R.occupation.name,time:R.timeInterval}),void K();n.time=Number(n.time)+R.timeInterval,K()}else $.days.push({date:z(new Date,"HH:mm:ss yyyy/MM/dd"),occupations:[{name:R.occupation.name,time:Number(n.time)+R.timeInterval}]}),K(),console.log("next day!")})()):(R.isActive=!0,R.startTime=new Date,J=setInterval(_,2e3))}},V=document.querySelector(".container"),Z=(V.querySelector("nav"),V.querySelector("main"),document.querySelector(".container"));Z.querySelector("nav"),Z.querySelector("main"),window.app=U})();