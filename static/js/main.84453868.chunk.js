(this["webpackJsonptext-compare"]=this["webpackJsonptext-compare"]||[]).push([[0],{44:function(e,t,a){e.exports={diffStats:"Toolbar_diffStats__1-xr5",minus:"Toolbar_minus__Om6zV",plus:"Toolbar_plus__1b7sh",dropDownMenuTools:"Toolbar_dropDownMenuTools__1HfqA",toolbar:"Toolbar_toolbar__2cKuL"}},7:function(e,t,a){e.exports={container:"Home_container__1WTXh",main:"Home_main__1pfeu",header:"Home_header__kiQSJ",headerText:"Home_headerText__3xPbA",logo:"Home_logo__FfQBi",diffInputs:"Home_diffInputs__1rQMZ",numberedInputs:"Home_numberedInputs__2hWfm",diffInputHeader:"Home_diffInputHeader__263-K",diffInput:"Home_diffInput__2eHHr",diffInputText:"Home_diffInputText__3NFdU",inputScrollOriginal:"Home_inputScrollOriginal__3BAkS",inputScrollChanged:"Home_inputScrollChanged__1KHN9",innerScrollOriginal:"Home_innerScrollOriginal__1QcuA",innerScrollChanged:"Home_innerScrollChanged__1C4RZ",compareButton:"Home_compareButton__VAP_e",diffOutputs:"Home_diffOutputs__3UQsl",output:"Home_output__2CIv4",outputLeft:"Home_outputLeft__1ienU",outputRight:"Home_outputRight__3Om6i",linesContainer:"Home_linesContainer__1Eq71",numberedLineLeft:"Home_numberedLineLeft__3v1q9",numberedLineRight:"Home_numberedLineRight__1oWVA",numberedOriginal:"Home_numberedOriginal__3YUEA",numberedChanged:"Home_numberedChanged__3Jl_J",clearButton:"Home_clearButton__3iHN1",swapButton:"Home_swapButton__1tT69",footer:"Home_footer__1cDZ5",githubButton:"Home_githubButton__Vn3uh",footerText:"Home_footerText__1pMYF"}},84:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(18),s=a.n(c),r=(a(84),a(31)),l=a(32),o=a(34),d=a(33),A=a(75),u=a(14),h=a(25),b=a(37),m=a(7),j=a.n(m),p=a(57),g=a(76),f=a(100),v=a(98),O=a(99),x=a(44),C=a.n(x),B=a(4),H=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.diff.filter((function(e){return!0===e.removed})).length,t=this.props.diff.filter((function(e){return!0===e.added})).length,a=Object(B.jsxs)(v.a,{onClick:this.props.onMenuClick,children:[Object(B.jsx)(v.a.Item,{onClick:this.props.onLowercase,children:"To lowercase"},"1"),Object(B.jsx)(v.a.Item,{onClick:this.props.onBreakstoSpaces,children:"Replace line breaks with spaces"},"2"),Object(B.jsx)(v.a.Item,{onClick:this.props.onRemoveWhitespaces,children:"Remove excess whitespace"},"3")]});return Object(B.jsxs)("div",{className:C.a.toolbar,children:[Object(B.jsx)(O.a.Button,{className:C.a.dropDownMenuTools,overlay:a,children:"Tools"}),Object(B.jsxs)("div",{className:C.a.diffStats,children:[Object(B.jsx)("div",{className:C.a.minus,children:"\u2013"}),Object(B.jsxs)("div",{children:[e," ",1===e?"removal":"removals"]}),Object(B.jsx)("div",{className:C.a.plus,children:"+"}),Object(B.jsxs)("div",{children:[t," ",1===t?"addition":"additions"]})]})]})}}]),a}(i.a.Component),L=a(74);function N(e){return e.replace(/\s{2,}/g," ").trim()}function w(e){return e.replace(/\n/g," ")}var k=function(e){for(var t=[],a=[],n=0;n<e.length;n++)if(e[n].value.match("\n")){for(var i=e[n].value.split("\n"),c=0;c<i.length-1;c++)a.push(Object(b.a)(Object(b.a)({},e[n]),{},{value:i[c]})),t.push(a),a=[];a.push(Object(b.a)(Object(b.a)({},e[n]),{},{value:i[i.length-1]}))}else a.push(e[n]);return a.length&&t.push(a),t},S=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleCompare=a.handleCompare.bind(Object(h.a)(a)),a.handleClear=a.handleClear.bind(Object(h.a)(a)),a.handleMenuClick=a.handleMenuClick.bind(Object(h.a)(a)),a.handleLowercase=a.handleLowercase.bind(Object(h.a)(a)),a.handleBreakstoSpaces=a.handleBreakstoSpaces.bind(Object(h.a)(a)),a.handleRemoveWhitespaces=a.handleRemoveWhitespaces.bind(Object(h.a)(a)),a.handleSwap=a.handleSwap.bind(Object(h.a)(a)),a.changed=i.a.createRef(),a.original=i.a.createRef(),a.state={diff:[],result:!1,identical:!1,swapped:!1,original:"",changed:""},a}return Object(l.a)(n,[{key:"handleChange",value:function(){this.setState({original:this.original.current.value,changed:this.changed.current.value})}},{key:"handleCompare",value:function(){var e=a(89),t=this.original.current.value,n=this.changed.current.value,i=e.diffChars(t,n);t===n?this.setState({identical:!0,result:!1}):this.setState({diff:i,result:!0,identical:!1})}},{key:"handleClear",value:function(){this.original.current.value="",this.changed.current.value="",this.setState({result:!1,identical:!1,original:this.original.current.value,changed:this.changed.current.value})}},{key:"handleMenuClick",value:function(){this.setState({identical:!1})}},{key:"handleLowercase",value:function(){this.original.current.value=this.original.current.value.toLowerCase(),this.changed.current.value=this.changed.current.value.toLowerCase(),this.setState({identical:!1})}},{key:"handleBreakstoSpaces",value:function(){this.original.current.value=w(this.original.current.value),this.changed.current.value=w(this.changed.current.value),this.setState({identical:!1})}},{key:"handleRemoveWhitespaces",value:function(){this.original.current.value=N(this.original.current.value),this.changed.current.value=N(this.changed.current.value),this.setState({identical:!1})}},{key:"handleSwap",value:function(){if(!1===this.state.swapped){var e=[this.changed.current.value,this.original.current.value];this.original.current.value=e[0],this.changed.current.value=e[1],this.handleCompare(),this.setState({identical:!1,swapped:!0})}else{var t=[this.original.current.value,this.changed.current.value];this.changed.current.value=t[0],this.original.current.value=t[1],this.setState({identical:!1,swapped:!1}),this.handleCompare()}}},{key:"render",value:function(){var e=this.state,t=e.diff,a=e.result,n=e.identical,i=e.original,c=e.changed,s=k(t.filter((function(e){return!(!0===e.added)}))).map((function(e,t){return Object(B.jsx)("div",{className:j.a.numberedLineLeft,children:e.map((function(e,t,a){var n=a[t+1];return n&&n.removed&&"\n"===n.value?Object(B.jsx)("span",{style:{backgroundColor:"#ffc4c1"},children:e.value},t):Object(B.jsx)("span",{style:{backgroundColor:e.removed?"#ffc4c1":"transparent"},children:e.value},t)}))},t)})),r=k(t.filter((function(e){return!(!0===e.removed)}))).map((function(e,t){return Object(B.jsx)("div",{className:j.a.numberedLineRight,children:e.map((function(e,t,a){var n=a[t+1];return n&&n.added&&"\n"===n.value?Object(B.jsx)("span",{style:{backgroundColor:"#b5efdb"},children:e.value},t):Object(B.jsx)("span",{style:{backgroundColor:e.added?"#b5efdb":"transparent"},children:e.value},t)}))},t)})),l=i.split("\n").map((function(e,t){return Object(B.jsx)("div",{className:j.a.numberedOriginal,children:e},t)})),o=c.split("\n").map((function(e,t){return Object(B.jsx)("div",{className:j.a.numberedChanged,children:e},t)}));return Object(B.jsxs)("div",{className:j.a.container,children:[Object(B.jsxs)("div",{className:j.a.main,children:[Object(B.jsxs)("div",{className:j.a.header,children:[Object(B.jsx)("img",{className:j.a.logo,src:"data:image/png;base64,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",alt:"logo"}),Object(B.jsx)("div",{className:j.a.headerText,children:"2Text Compare"})]}),n?Object(B.jsx)("div",{children:"The two texts are identical!"}):null,a?Object(B.jsxs)("div",{children:[Object(B.jsx)(H,{diff:this.state.diff,onMenuClick:this.handleMenuClick.bind(),onLowercase:this.handleLowercase.bind(),onBreakstoSpaces:this.handleBreakstoSpaces.bind(),onRemoveWhitespaces:this.handleRemoveWhitespaces.bind()}),Object(B.jsxs)("div",{className:j.a.diffOutputs,children:[Object(B.jsx)("div",{spellCheck:"false",className:"".concat(j.a.output," ").concat(j.a.outputLeft),children:s}),Object(B.jsx)("div",{spellCheck:"false",className:"".concat(j.a.output," ").concat(j.a.outputRight),children:r})]}),Object(B.jsxs)("div",{className:j.a.outputButtons,children:[Object(B.jsx)(p.a,{className:j.a.clearButton,onClick:this.handleClear,children:"Clear"}),Object(B.jsx)(g.a,{title:"Swap",children:Object(B.jsx)(f.a,{className:j.a.swapButton,onClick:this.handleSwap})})]})]}):null,Object(B.jsxs)("div",{className:"".concat(j.a.diffInputs," ").concat(j.a.numberedInputs),children:[Object(B.jsxs)("div",{className:j.a.diffInput,children:[Object(B.jsx)("div",{className:j.a.diffInputHeader,children:"Original Text"}),Object(B.jsx)("div",{className:j.a.inputScrollOriginal,children:Object(B.jsxs)("div",{className:j.a.innerScrollOriginal,children:[Object(B.jsx)("div",{className:j.a.linesContainer,children:l}),Object(B.jsx)("textarea",{spellCheck:"false",className:"".concat(j.a.diffInputText," ").concat(j.a.left),onChange:this.handleChange.bind(),ref:this.original})]})})]}),Object(B.jsxs)("div",{className:j.a.diffInput,children:[Object(B.jsx)("div",{className:j.a.diffInputHeader,children:"Changed Text"}),Object(B.jsx)("div",{className:j.a.inputScrollChanged,children:Object(B.jsxs)("div",{className:j.a.innerScrollChanged,children:[Object(B.jsx)("div",{className:j.a.linesContainer,children:o}),Object(B.jsx)("textarea",{spellCheck:"false",className:"".concat(j.a.diffInputText," ").concat(j.a.right),onChange:this.handleChange.bind(),ref:this.changed})]})})]})]}),Object(B.jsx)(p.a,{type:"primary",className:j.a.compareButton,onClick:this.handleCompare,children:"Compare"}),Object(B.jsx)("div",{className:j.a.push})]}),Object(B.jsxs)("div",{className:j.a.footer,children:[Object(B.jsx)("div",{className:j.a.githubButton,children:Object(B.jsx)(L.a,{href:"https://github.com/ostannya/text-compare","aria-label":"Star ostannya/text-compare on GitHub",children:"Star on GitHub"})}),Object(B.jsxs)("div",{className:j.a.footerText,children:["2Text Compare is a an open source side-by-side text comparison tool. Created using \u269b\ufe0f React and ",Object(B.jsx)("a",{href:"https://github.com/kpdecker/jsdiff",children:"jsdiff"})," library."]})]})]})}}]),n}(i.a.Component),W=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(B.jsx)(A.a,{children:Object(B.jsx)("div",{children:Object(B.jsx)(u.c,{children:Object(B.jsx)(u.a,{exact:!0,path:"/",children:Object(B.jsx)(S,{})})})})})}}]),a}(i.a.Component),Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,101)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};a(93);s.a.render(Object(B.jsx)(i.a.StrictMode,{children:Object(B.jsx)(W,{})}),document.getElementById("root")),Q()}},[[94,1,2]]]);
//# sourceMappingURL=main.84453868.chunk.js.map