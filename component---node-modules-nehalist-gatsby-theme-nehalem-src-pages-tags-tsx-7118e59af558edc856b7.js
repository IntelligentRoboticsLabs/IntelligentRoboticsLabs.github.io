(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3//0":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("vOnD"),r=a("15bR"),l=o.default.div.withConfig({displayName:"subheader__StyledSubheader",componentId:"sc-113zvsz-0"})(["background-color:",";color:",";display:flex;align-items:center;height:60px;margin-bottom:30px;"],(function(e){return e.backgroundColor?e.backgroundColor:"#fff"}),(function(e){return e.textColor?e.textColor:"#090909"})),c=o.default.h1.withConfig({displayName:"subheader__SubheaderTitle",componentId:"sc-113zvsz-1"})(["font-size:2.0em;font-weight:bold;color:#a1342b;line-height:1em;margin-left:45%;"]),s=o.default.small.withConfig({displayName:"subheader__SubheaderSubtitle",componentId:"sc-113zvsz-2"})(["font-weight:normal;display:block;opacity:.9;float:left;margin-left:500px;"]);t.a=function(e){var t=e.title,a=e.subtitle,n=e.backgroundColor,o=e.textColor;return i.a.createElement(l,{backgroundColor:n,textColor:o},i.a.createElement(r.a,null,i.a.createElement(c,null,t,i.a.createElement(s,null,a))))}},"9KPi":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return y}));var n=a("q1tI"),i=a.n(n),o=a("IJQQ"),r=a("3//0"),l=a("WLZb"),c=a("NmYn"),s=a.n(c),d=a("15bR"),u=a("9eSz"),m=a.n(u),p=a("vOnD"),g=a("ywv1"),h=p.default.img.withConfig({displayName:"tags__TagSvgIcon",componentId:"sc-1ozcbrh-0"})(["max-height:55px;"]),f=p.default.p.withConfig({displayName:"tags__TagName",componentId:"sc-1ozcbrh-1"})(["margin:0 !important;"]);t.default=function(e){var t=e.data,a=e.location,n=t.allTags.edges.map((function(e){return e.node}));return i.a.createElement(o.a,{bigHeader:!1},i.a.createElement(g.a,{location:a,title:"Tags",type:"Series"}),i.a.createElement(r.a,{title:"Tags",subtitle:n.length+" tags"}),i.a.createElement(d.b,{columns:6},n.map((function(e,t){return i.a.createElement(l.a,{key:t,path:"/tag/"+s()(e.name,{lower:!0}),compact:!0,style:{textAlign:"center"}},"svg"!==e.icon.extension?i.a.createElement(m.a,{fixed:e.icon.childImageSharp.fixed}):i.a.createElement(h,{src:e.icon.publicURL,alt:e.name}),i.a.createElement(f,null,e.name))}))))};var y="1706320965"},NmYn:function(e,t,a){var n;n=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),t=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue"},"vi":{"Đ":"D","đ":"d"}}');function a(a,n){if("string"!=typeof a)throw new Error("slugify: string argument expected");var i=t[(n="string"==typeof n?{replacement:n}:n||{}).locale]||{},o=void 0===n.replacement?"-":n.replacement,r=a.split("").reduce((function(t,a){return t+(i[a]||e[a]||a).replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"").trim().replace(new RegExp("[\\s"+o+"]+","g"),o);return n.lower&&(r=r.toLowerCase()),n.strict&&(r=r.replace(new RegExp("[^a-zA-Z0-9"+o+"]","g"),"").replace(new RegExp("[\\s"+o+"]+","g"),o)),r}return a.extend=function(t){for(var a in t)e[a]=t[a]},a},e.exports=n(),e.exports.default=n()},WLZb:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a("q1tI"),i=a.n(n),o=a("vOnD"),r=a("Wbzz"),l=a("PvO4"),c=a("9eSz"),s=a.n(c),d=Object(o.default)(r.Link).withConfig({displayName:"style__StyledCard",componentId:"sc-1jkg5b1-0"})(["display:block;background-color:#fff;border-radius:3px;box-shadow:0 1px 1px #e6e6e6,0 2px 4px #e6e6e6;transition:.5s all;width:100%;height:100%;overflow:hidden;&:hover{transform:translate3d(0,-5px,0);box-shadow:0 1px 1px #ccc,0 4px 4px #ccc;}"]),u=o.default.article.withConfig({displayName:"style__StyledArticle",componentId:"sc-1jkg5b1-1"})(["display:inline-block;width:100%;@media (max-width:","){grid-area:unset !important;}"],l.a.breakpoints.sm),m=Object(o.default)(s.a).withConfig({displayName:"style__FeaturedImage",componentId:"sc-1jkg5b1-2"})(["background-position:center;background-size:contain;max-width:100%;border-top-left-radius:3px;",";"],(function(e){return e.halfImage?"\n    width: 50%;\n    float: left;\n    margin-right: 30px;\n    height: 320px;\n    border-bottom-left-radius: 3px;\n\n    @media (max-width: "+l.a.breakpoints.sm+") {\n      width: 100%;\n      float: none;\n      height: 190px;\n    }\n  ":"\n    height: 190px;\n    max-height: 190px;\n    width: 100%;\n    border-top-right-radius: 3px;\n  "})),p=o.default.section.withConfig({displayName:"style__CardContent",componentId:"sc-1jkg5b1-3"})(["padding:",";p{margin:15px 0;}h2{font-size:1.2em;}"],(function(e){return e.compact?"10px":"40px"})),g=o.default.section.withConfig({displayName:"style__CardMeta",componentId:"sc-1jkg5b1-4"})(["display:flex;justify-content:space-between;margin-bottom:8px;font-size:.8em;opacity:.8;line-height:1em;"]),h=o.default.h2.withConfig({displayName:"style__CardTitle",componentId:"sc-1jkg5b1-5"})(["margin:0;padding:0;"]),f=function(e){var t=e.title,a=e.meta,n=e.path,o=e.featuredImage,r=e.content,l=e.halfImage,c=void 0!==l&&l,s=e.compact,f=void 0!==s&&s,y=e.style,b=e.children;return i.a.createElement(u,{style:y},i.a.createElement(d,{to:n},o&&o.fixed&&i.a.createElement(m,{fixed:o.fixed,halfImage:c}),o&&o.sizes&&i.a.createElement(m,{sizes:o.sizes,halfImage:c}),i.a.createElement(p,{compact:f},b,i.a.createElement("header",null,a&&i.a.createElement(g,null,a.tag&&i.a.createElement(i.a.Fragment,null,a.tag),a.time&&i.a.createElement("time",{dateTime:a.time},a.timePretty)),t&&i.a.createElement(h,null,t)),r&&i.a.createElement("p",{dangerouslySetInnerHTML:{__html:r}}))))}}}]);
//# sourceMappingURL=component---node-modules-nehalist-gatsby-theme-nehalem-src-pages-tags-tsx-7118e59af558edc856b7.js.map