(this["webpackJsonptext-compare"]=this["webpackJsonptext-compare"]||[]).push([[0],{16:function(e,t,a){e.exports={numberedOriginal:"Input_numberedOriginal__v22TV",numberedChanged:"Input_numberedChanged__I8fS-",inputs:"Input_inputs__KCaP2",numberedInputs:"Input_numberedInputs__2_wDO",input:"Input_input__8i3HE",inputHeader:"Input_inputHeader__3vIZe",scrollOriginalContainer:"Input_scrollOriginalContainer__jr-9e",scrollChangedContainer:"Input_scrollChangedContainer__3G4mN",linesContainer:"Input_linesContainer__148Xw",inputText:"Input_inputText__kjNb0"}},18:function(e,t,a){e.exports={container:"Home_container__1WTXh",main:"Home_main__1pfeu",header:"Home_header__kiQSJ",headerText:"Home_headerText__3xPbA",logo:"Home_logo__FfQBi",scroll:"Home_scroll__1U1lT",compareButton:"Home_compareButton__VAP_e",clearButton:"Home_clearButton__3iHN1",swapButton:"Home_swapButton__1tT69",footer:"Home_footer__1cDZ5",gitHubButton:"Home_gitHubButton__1_hdk",footerText:"Home_footerText__1pMYF"}},39:function(e,t,a){e.exports={numberedOriginal:"Output_numberedOriginal__fGBT7",numberedChanged:"Output_numberedChanged__G0-zM",outputs:"Output_outputs__3X_ou",output:"Output_output__3md22",outputOriginal:"Output_outputOriginal__WAIKv",outputChanged:"Output_outputChanged__JRAvk"}},46:function(e,t,a){e.exports={diffStats:"Toolbar_diffStats__1-xr5",minus:"Toolbar_minus__Om6zV",plus:"Toolbar_plus__1b7sh",dropDownMenuTools:"Toolbar_dropDownMenuTools__1HfqA",toolbar:"Toolbar_toolbar__2cKuL"}},87:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(19),c=a.n(s),r=(a(87),a(24)),l=a(25),o=a(28),d=a(27),A=a(78),h=a(13),u=a(20),p=a(18),b=a.n(p),j=a(59),g=a(79),m=a(102),O=a(100),f=a(101),v=a(46),C=a.n(v),x=a(4),B=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.diffArray.filter((function(e){return!0===e.removed})).length,t=this.props.diffArray.filter((function(e){return!0===e.added})).length,a=Object(x.jsxs)(O.a,{onClick:this.props.onMenuClick,children:[Object(x.jsx)(O.a.Item,{onClick:this.props.onLowercase,children:"To lowercase"},"1"),Object(x.jsx)(O.a.Item,{onClick:this.props.onBreaksToSpaces,children:"Replace line breaks with spaces"},"2"),Object(x.jsx)(O.a.Item,{onClick:this.props.onRemoveWhiteSpaces,children:"Remove excess whitespace"},"3")]});return Object(x.jsxs)("div",{className:C.a.toolbar,children:[Object(x.jsx)(f.a.Button,{className:C.a.dropDownMenuTools,overlay:a,children:"Tools"}),Object(x.jsxs)("div",{className:C.a.diffStats,children:[Object(x.jsx)("div",{className:C.a.minus,children:"\u2013"}),Object(x.jsxs)("div",{children:[e," ",1===e?"removal":"removals"]}),Object(x.jsx)("div",{className:C.a.plus,children:"+"}),Object(x.jsxs)("div",{children:[t," ",1===t?"addition":"additions"]})]})]})}}]),a}(i.a.Component),N=a(76),y=a(38),T=a(39),k=a.n(T),w=function(e){for(var t=[],a=[],n=0;n<e.length;n++)if(e[n].value.match("\n")){for(var i=e[n].value.split("\n"),s=0;s<i.length-1;s++)a.push(Object(y.a)(Object(y.a)({},e[n]),{},{value:i[s]})),t.push(a),a=[];a.push(Object(y.a)(Object(y.a)({},e[n]),{},{value:i[i.length-1]}))}else a.push(e[n]);return a.length&&t.push(a),t};function H(e){var t=e.line,a=e.index,n=e.color,i=e.removedOrAdded,s=e.numbered;return Object(x.jsx)("div",{className:s,children:t.map((function(e,t,a){var s=a[t+1];return s&&s[i]&&"\n"===s.value?Object(x.jsx)("span",{style:{backgroundColor:n},children:e.value},t):Object(x.jsx)("span",{style:{backgroundColor:e[i]?n:"transparent"},children:e.value},t)}))},a)}var L=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=w(this.props.diffArray.filter((function(e){return!(!0===e.added)}))).map((function(e,t){return Object(x.jsx)(H,{line:e,color:"#ffc4c1",numbered:k.a.numberedOriginal,removedOrAdded:"removed"},t)})),t=w(this.props.diffArray.filter((function(e){return!(!0===e.removed)}))).map((function(e,t){return Object(x.jsx)(H,{line:e,color:"#b5efdb",numbered:k.a.numberedChanged,removedOrAdded:"added"},t)}));return Object(x.jsxs)("div",{className:k.a.outputs,children:[Object(x.jsx)("div",{spellCheck:"false",className:"".concat(k.a.output," ").concat(k.a.outputOriginal),children:e}),Object(x.jsx)("div",{spellCheck:"false",className:"".concat(k.a.output," ").concat(k.a.outputChanged),children:t})]})}}]),a}(i.a.Component),W=a(77),S=a(16),Q=a.n(S),I=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(u.a)(n)),n.changed=i.a.createRef(),n.original=i.a.createRef(),n.state={original:"",changed:""},n}return Object(l.a)(a,[{key:"handleChange",value:function(){this.setState({original:this.original.current.value,changed:this.changed.current.value}),this.props.onChange(this.original.current.value,this.changed.current.value)}},{key:"render",value:function(){var e=this.props,t=e.original,a=e.changed,n=t.split("\n").map((function(e,t){return Object(x.jsx)("div",{className:Q.a.numberedOriginal,children:e},t)})),i=a.split("\n").map((function(e,t){return Object(x.jsx)("div",{className:Q.a.numberedChanged,children:e},t)}));return Object(x.jsx)("div",{className:Q.a.container,children:Object(x.jsx)("div",{className:Q.a.main,children:Object(x.jsxs)("div",{className:"".concat(Q.a.inputs," ").concat(Q.a.numberedInputs),children:[Object(x.jsxs)("div",{className:Q.a.input,children:[Object(x.jsx)("div",{className:Q.a.inputHeader,children:"Original Text"}),Object(x.jsx)("div",{className:Q.a.scrollOriginalContainer,children:Object(x.jsxs)("div",{className:Q.a.scroll,children:[Object(x.jsx)("div",{className:Q.a.linesContainer,children:n}),Object(x.jsx)("textarea",{spellCheck:"false",className:Q.a.inputText,onChange:this.handleChange,ref:this.original,value:this.props.original})]})})]}),Object(x.jsxs)("div",{className:Q.a.input,children:[Object(x.jsx)("div",{className:Q.a.inputHeader,children:"Changed Text"}),Object(x.jsx)("div",{className:Q.a.scrollChangedContainer,children:Object(x.jsxs)("div",{className:Q.a.scroll,children:[Object(x.jsx)("div",{className:Q.a.linesContainer,children:i}),Object(x.jsx)("textarea",{spellCheck:"false",className:Q.a.inputText,onChange:this.handleChange,ref:this.changed,value:this.props.changed})]})})]})]})})})}}]),a}(i.a.Component);function G(e){return e.replace(/\s{2,}/g," ").trim()}function J(e){return e.replace(/\n/g," ")}var D=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleCompare=n.handleCompare.bind(Object(u.a)(n)),n.handleClear=n.handleClear.bind(Object(u.a)(n)),n.handleMenuClick=n.handleMenuClick.bind(Object(u.a)(n)),n.handleLowercase=n.handleLowercase.bind(Object(u.a)(n)),n.handleBreaksToSpaces=n.handleBreaksToSpaces.bind(Object(u.a)(n)),n.handleRemoveWhiteSpaces=n.handleRemoveWhiteSpaces.bind(Object(u.a)(n)),n.handleSwap=n.handleSwap.bind(Object(u.a)(n)),n.state={diffArray:[],result:!1,identical:!1,swapped:!1,original:"",changed:""},n}return Object(l.a)(a,[{key:"handleCompare",value:function(){var e=this.state.original,t=this.state.changed,a=W.diffChars(e,t);e===t?this.setState({identical:!0,result:!1}):this.setState({diffArray:a,result:!0,identical:!1})}},{key:"handleChange",value:function(e,t){this.setState({original:e,changed:t})}},{key:"handleClear",value:function(){this.setState({result:!1,identical:!1,original:"",changed:""})}},{key:"handleMenuClick",value:function(){this.setState({identical:!1})}},{key:"handleLowercase",value:function(){this.setState({identical:!1,original:this.state.original.toLocaleLowerCase(),changed:this.state.changed.toLocaleLowerCase()})}},{key:"handleBreaksToSpaces",value:function(){this.setState({identical:!1,original:J(this.state.original),changed:J(this.state.changed)})}},{key:"handleRemoveWhiteSpaces",value:function(){this.setState({identical:!1,original:G(this.state.original),changed:G(this.state.changed)})}},{key:"handleSwap",value:function(){if(!1===this.state.swapped){var e=[this.state.changed,this.state.original];this.state.original=e[0],this.state.changed=e[1],this.handleCompare(),this.setState({identical:!1,swapped:!0})}else{var t=[this.state.original,this.state.changed];this.state.changed=t[0],this.state.original=t[1],this.setState({identical:!1,swapped:!1}),this.handleCompare()}}},{key:"render",value:function(){var e=this.state,t=e.result,a=e.identical;return Object(x.jsxs)("div",{className:b.a.container,children:[Object(x.jsxs)("div",{className:b.a.main,children:[Object(x.jsxs)("div",{className:b.a.header,children:[Object(x.jsx)("img",{className:b.a.logo,src:"data:image/png;base64,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",alt:"logo"}),Object(x.jsx)("div",{className:b.a.headerText,children:"2Text Compare"})]}),a?Object(x.jsx)("div",{children:"The two texts are identical!"}):null,t?Object(x.jsxs)("div",{children:[Object(x.jsx)(B,{diffArray:this.state.diffArray,onMenuClick:this.handleMenuClick,onLowercase:this.handleLowercase,onBreaksToSpaces:this.handleBreaksToSpaces,onRemoveWhiteSpaces:this.handleRemoveWhiteSpaces}),Object(x.jsx)(L,{diffArray:this.state.diffArray}),Object(x.jsxs)("div",{className:b.a.outputButtons,children:[Object(x.jsx)(j.a,{className:b.a.clearButton,onClick:this.handleClear.bind(this),children:"Clear"}),Object(x.jsx)(g.a,{title:"Swap",children:Object(x.jsx)(m.a,{className:b.a.swapButton,onClick:this.handleSwap})})]})]}):null,Object(x.jsx)(I,{onChange:this.handleChange,original:this.state.original,changed:this.state.changed}),Object(x.jsx)(j.a,{type:"primary",className:b.a.compareButton,onClick:this.handleCompare,children:"Compare"}),Object(x.jsx)("div",{className:b.a.push})]}),Object(x.jsxs)("div",{className:b.a.footer,children:[Object(x.jsx)("div",{className:b.a.gitHubButton,children:Object(x.jsx)(N.a,{href:"https://github.com/ostannya/text-compare","aria-label":"Star ostannya/text-compare on GitHub",children:"Star on GitHub"})}),Object(x.jsxs)("div",{className:b.a.footerText,children:["2Text Compare is a an open source side-by-side text comparison tool. Created using \u269b\ufe0f React and",Object(x.jsx)("a",{href:"https://github.com/kpdecker/jsdiff",children:" jsdiff"})," library."]})]})]})}}]),a}(i.a.Component),R=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(x.jsx)(A.a,{basename:"/text-compare",children:Object(x.jsx)("div",{children:Object(x.jsx)(h.c,{children:Object(x.jsx)(h.a,{exact:!0,path:"/",children:Object(x.jsx)(D,{})})})})})}}]),a}(i.a.Component),Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,103)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};a(95);c.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(R,{})}),document.getElementById("root")),Z()}},[[96,1,2]]]);
//# sourceMappingURL=main.a5157cc1.chunk.js.map