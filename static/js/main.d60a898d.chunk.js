(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(78),s=n.n(o),c=(n(97),n(3)),i=n.n(c),u=n(4),l=n(10),p=n(11),m=n(14),d=n(12),h=n(13),f=n(8),v=n(167),g=n(164),N=n(168),b=function(e){return{type:"SET_NOTES",notes:e}},E=function(e){return{type:"ADD_NOTE",note:e}},k=function(e){return{type:"UPDATE_NOTE",note:e}},C=function(e){return{type:"DELETE_NOTE",id:e}},O=function(e){return{type:"TOGGLE_LOADING",bool:e}},y=function(e){return{type:"SET_ERROR",message:e}},w=function(e){return{type:"SET_STATUS",code:e}},I=function(e){return{type:"SET_USER",user:e}},j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).filterNotes=function(e){var t=e.target.value;(0,n.props.setQuery)(t)},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{onChange:this.filterNotes,className:"SearchBar--input",placeholder:"Search notes"})}}]),t}(a.Component),x=Object(f.b)(null,function(e){return{setQuery:function(t){return e(function(e){return{type:"SET_QUERY",query:e}}(t))}}})(j),D=n(20),S=n(91),T=n(36),L=n(163),F=function(){var e=Object(u.a)(i.a.mark(function e(t){var n,a,r,o=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,fetch(t,n);case 3:if((a=e.sent).ok){e.next=9;break}return e.next=7,a.json();case 7:throw r=e.sent,new Error(r);case 9:return e.next=11,a;case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),A=function(e,t){return{method:e,body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}},U=function(e,t){return function(){var n=Object(u.a)(i.a.mark(function n(a){var r,o,s,c,u,l,p;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,o=e.title,s=e.listItems,c=e.color,u="https://keeper-turing-api.herokuapp.com/api/v1/notes/".concat(r),l=A("PUT",{title:o,listItems:s,color:c,user:t}),n.prev=3,a(O(!0)),n.next=7,F(u,l);case 7:p=n.sent,a(O(!1)),a(k(e)),a(w(p.status)),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),a(y(n.t0.message));case 16:case"end":return n.stop()}},n,this,[[3,13]])}));return function(e){return n.apply(this,arguments)}}()},_=function(e,t){return function(){var n=Object(u.a)(i.a.mark(function n(a){var r,o,s;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://keeper-turing-api.herokuapp.com/api/v1/notes/".concat(e),o=A("DELETE",{user:t}),n.prev=2,a(O(!0)),n.next=6,F(r,o);case 6:s=n.sent,a(O(!1)),a(w(s.status)),a(C(e)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),a(y(n.t0.message));case 15:case"end":return n.stop()}},n,this,[[2,12]])}));return function(e){return n.apply(this,arguments)}}()},R=n(44),G=n.n(R),P=n(45),K=n.n(P),W=n(80),q=n.n(W),B=n(81),Q=n.n(B),z=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).getCompleteItems=function(){return n.props.listItems.filter(function(e){return e.isComplete}).map(function(e){var t=e.description,a=e.id;return r.a.createElement("span",{key:a,className:"NoteCard--span--complete"},r.a.createElement("img",{src:K.a,className:"NoteCard--icon--checked",alt:"checked icon",onClick:function(){return n.handleComplete(a)}}),r.a.createElement("p",{className:"NoteForm--p--complete"},t))})},n.getIncompleteItems=function(){return n.props.listItems.filter(function(e){return!e.isComplete}).map(function(e){var t=e.description,a=e.id;return r.a.createElement("span",{key:a,className:"NoteCard--span--incomplete"},r.a.createElement("img",{src:G.a,className:"NoteCard--icon--unchecked",alt:"unchecked icon",onClick:function(){return n.handleComplete(a)}}),r.a.createElement("p",{className:"NoteForm--p--incomplete"},t))})},n.handleComplete=function(){var e=Object(u.a)(i.a.mark(function e(t){var a,r,o,s,c,u,l,p,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,r=a.id,o=a.title,s=a.color,c=a.listItems,u=a.putNote,l=a.setStatus,p=a.user,m=c.map(function(e){var n=e.isComplete;return e.id===t?Object(T.a)({},e,{isComplete:!n}):e}),e.next=4,u({id:r,title:o,color:s,listItems:m},p);case 4:l(0);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.handleDelete=Object(u.a)(i.a.mark(function e(){var t,a,r,o,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,a=t.id,r=t.deleteNoteThunk,o=t.setStatus,s=t.user,e.next=3,r(a,s);case 3:o(0);case 4:case"end":return e.stop()}},e,this)})),n.handleDrag=function(e){e.dataTransfer.setData("draggedIndex",n.props.index)},n.handleDrop=function(e){var t=n.props,a=t.notes,r=t.index,o=t.putAllNotes,s=t.user,c=Object(S.a)(a).slice(0),i=e.dataTransfer.getData("draggedIndex"),u=c.splice(i,1);c.splice.apply(c,[r,0].concat(Object(D.a)(u))),o(c,s)},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.title,a=e.color,o=e.disabled,s=[].concat(Object(D.a)(this.getIncompleteItems()),Object(D.a)(this.getCompleteItems()));s.length>10&&(s.splice(10),s.push(r.a.createElement("p",{className:"NoteCard--ellipsis",key:"..."},"...")));var c="NoteCard--background-";return c+=o?"disabled":a,r.a.createElement("div",{draggable:!0,onDragStart:this.handleDrag,onDragOver:function(e){return e.preventDefault()},onDrop:this.handleDrop,className:c},r.a.createElement("h3",{className:"NoteCard--h3"},n),r.a.createElement("div",null,s),r.a.createElement("span",{className:"NoteCard--icon-container"},r.a.createElement(L.a,{to:"/notes/"+t},r.a.createElement("img",{className:"NoteCard--edit-icon",src:q.a,alt:"edit icon"})),r.a.createElement("img",{className:"NoteCard--delete-icon",src:Q.a,alt:"delete icon",onClick:this.handleDelete})))}}]),t}(a.Component),J=Object(f.b)(function(e){return{notes:e.notes,user:e.user}},function(e){return{putAllNotes:function(t,n){return e(function(e,t){return function(){var n=Object(u.a)(i.a.mark(function n(a){var r;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=A("PUT",{notes:e,user:t}),n.prev=2,a(O(!0)),n.next=6,F("https://keeper-turing-api.herokuapp.com/api/v1/notes",r);case 6:a(O(!1)),a(b(e)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),a(y(n.t0.message));case 13:case"end":return n.stop()}},n,this,[[2,10]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))},putNote:function(t,n){return e(U(t,n))},deleteNoteThunk:function(t,n){return e(_(t,n))},setStatus:function(t){return e(w(t))}}})(z),M=n(82),Y=n.n(M),Z=n(83),$=n.n(Z),H=n(17),V=n.n(H),X=(n(64),n(84)),ee=n.n(X),te=function(e){return function(){var t=Object(u.a)(i.a.mark(function t(n){var a,r,o,s,c,u,l,p;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(O(!0)),a=e.displayName,r=e.email,o=e.uid,"https://keeper-turing-api.herokuapp.com/api/v1/users",c=A("POST",s={displayName:a,email:r,uid:o}),t.next=8,F("https://keeper-turing-api.herokuapp.com/api/v1/users",c);case 8:return u=t.sent,t.next=11,u.json();case 11:l=t.sent,p=l.notes,n(O(!1)),n(I(s)),n(b(p)),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),n(y(t.t0.message));case 21:case"end":return t.stop()}},t,this,[[0,18]])}));return function(e){return t.apply(this,arguments)}}()},ne=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleClick=Object(u.a)(i.a.mark(function e(){var t,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new V.a.auth.GoogleAuthProvider,e.prev=1,e.next=4,V.a.auth().signInWithPopup(t);case 4:a=e.sent,r=a.user,n.props.fetchUser(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n.props.setError(e.t0.message);case 12:case"end":return e.stop()}},e,this,[[1,9]])})),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("button",{className:"Login--button",onClick:this.handleClick},r.a.createElement("img",{src:ee.a,alt:"Google Icon",className:"Login--icon"}),r.a.createElement("span",{className:"Login--text"},"Sign in with Google")))}}]),t}(a.Component),ae=Object(f.b)(null,function(e){return{fetchUser:function(t){return e(te(t))},setError:function(t){return e(y(t))}}})(ne),re=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).addWelcomeNote=function(){var e={id:"welcome",title:"Welcome to Keeper!",listItems:[{id:"firstInstruction",description:"Keep track of your projects",isComplete:!1},{id:"secondInstruction",description:"List out your tasks to track",isComplete:!1},{id:"thirdInstruction",description:n.props.user?"Click the plus sign above to get started":"Sign in with Google",isComplete:!1}],color:"white"};return r.a.createElement(J,Object.assign({},e,{key:e.id,disabled:!0}))},n.getNotesToDisplay=function(){var e=n.props.notes,t=n.props.query.toLowerCase();return t?e.filter(function(e){return e.title.toLowerCase().includes(t)||e.listItems.filter(function(e){return e.description.toLowerCase().includes(t)}).length}):e},n.handleClick=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.auth().signOut();case 2:n.props.setUser(null),n.props.setNotes([]);case 4:case"end":return e.stop()}},e,this)})),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.notes,n=e.isDisabled,a=e.user,o=this.getNotesToDisplay().map(function(e,t){return r.a.createElement(J,Object.assign({},e,{key:e.id,index:t}))}).reverse(),s=n?"--disabled":"";if(!t.length){var c=this.addWelcomeNote();o.push(c)}return r.a.createElement("div",{className:"NoteContainer"+s},r.a.createElement("div",{className:"NoteContainer--div"},!a&&r.a.createElement(ae,null),a&&r.a.createElement(L.a,{to:"/new-note",className:"NoteContainer--link"},r.a.createElement("img",{src:$.a,className:"NoteContainer--icon--new-note",alt:"new note icon"}),r.a.createElement("span",{className:"NoteContainer--span"},"New Note")),a&&r.a.createElement("button",{className:"NoteContainer--sign-out",onClick:this.handleClick},"Sign Out")),r.a.createElement(Y.a,{breakpointCols:{default:6,1552:5,1296:4,1040:3,784:2,528:1},className:"NoteContainer--cards",columnClassName:"NoteContainer--cards-masonry-cols"},o))}}]),t}(a.Component),oe=Object(f.b)(function(e){return{notes:e.notes,query:e.query,user:e.user}},function(e){return{setUser:function(t){return e(I(t))},setNotes:function(t){return e(b(t))}}})(re),se=n(165),ce=n(85),ie=n.n(ce),ue=n(46),le=n.n(ue),pe=function(e){var t=e.id,n=e.description;return r.a.createElement("span",{className:"NoteForm--span--complete"},r.a.createElement("img",{src:K.a,className:"NoteForm--icon--checked",onClick:function(){return e.handleComplete(t)},alt:"checked icon"}),r.a.createElement("p",{className:"NoteForm--p--complete"},n),r.a.createElement("img",{src:le.a,className:"NoteForm--icon--delete",onClick:function(){return e.handleItemDelete(t)},alt:"delete icon"}))},me=function(e){var t=e.id,n=e.description,a=e.focusedListItemID;return r.a.createElement("span",{className:"NoteForm--span--incomplete"},r.a.createElement("img",{src:G.a,className:"NoteForm--icon--unchecked",onClick:function(){return e.handleComplete(t)},alt:"unchecked icon"}),r.a.createElement("input",{name:t,value:n,autoFocus:t===a,onChange:e.handleChange,className:"NoteForm--list-item"}),r.a.createElement("img",{src:le.a,className:"NoteForm--icon--delete",onClick:function(){return e.handleItemDelete(t)},alt:"delete icon"}))},de=n(86),he=n.n(de),fe=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).createListItem=function(e,t){return{id:e,description:t,isComplete:!1}},e.editListItems=function(e,t,n){return e.map(function(e){return e.id===t?Object(T.a)({},e,{description:n}):e})},e.getIncompleteListItems=function(){var t=e.state,n=t.focusedListItemID;return t.listItems.filter(function(e){return!e.isComplete}).map(function(t){return r.a.createElement(me,{key:t.id,id:t.id,description:t.description,focusedListItemID:n,handleComplete:e.handleComplete,handleChange:e.handleChange,handleItemDelete:e.handleItemDelete})})},e.getCompleteListItems=function(){return e.state.listItems.filter(function(e){return e.isComplete}).map(function(t){return r.a.createElement(pe,{key:t.id,id:t.id,description:t.description,handleComplete:e.handleComplete,handleItemDelete:e.handleItemDelete})})},e.getNewListItemInput=function(){return r.a.createElement("input",{name:ie.a.generate(),value:"",onChange:e.handleChange,placeholder:"List item",className:"NoteForm--new-input"})},e.getTitleInput=function(){return r.a.createElement("input",{name:"title",value:e.state.title,autoFocus:"title"===e.state.focusedListItemID,placeholder:"Title",onChange:function(t){return e.setState({title:t.target.value})},className:"NoteForm--title"})},e.handleChange=function(t){var n,a=t.target,r=a.name,o=a.value,s=e.state.listItems;n=s.find(function(e){return e.id===r})?e.editListItems(s,r,o):[].concat(Object(D.a)(s),[e.createListItem(r,o)]),e.setState({listItems:n,focusedListItemID:r})},e.handleColorChoice=function(t){t.preventDefault();var n=t.target.id;e.setState({color:n})},e.handleComplete=function(t){var n=e.state.listItems.map(function(e){var n=e.isComplete;return e.id===t?Object(T.a)({},e,{isComplete:!n}):e});e.setState({listItems:n})},e.handleItemDelete=function(t){var n=e.state.listItems.filter(function(e){return e.id!==t});e.setState({listItems:n})},e.handleKeydown=function(t){"Escape"===t.key&&e.props.setStatus(200)},e.handleNoteDelete=function(){var t=Object(u.a)(i.a.mark(function t(n){var a,r,o,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.props.match.params.id,r=e.props,o=r.deleteNoteThunk,s=r.user,t.next=5,o(a,s);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(){var t=Object(u.a)(i.a.mark(function t(n){var a,r,o,s,c,u;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.props.user,r=e.props.match.params.id,o=e.state,s=o.title,c=o.listItems,u=o.color,!r){t.next=9;break}return t.next=7,e.props.putNote({id:r,title:s,listItems:c,color:u},a);case 7:t.next=11;break;case 9:return t.next=11,e.props.postNote({title:s,listItems:c,color:u},a);case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.toggleShowColorOptions=function(){var t=e.state.showColorOptions;e.setState({showColorOptions:!t})},e.state={title:"",listItems:[],focusedListItemID:"title",color:"white",showColorOptions:!1},e}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeydown);var e=this.props.match.path,t=this.props,n=t.title,a=t.listItems,r=t.color;"/new-note"!==e&&this.setState({title:n,listItems:a,color:r})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeydown),this.props.setStatus(0)}},{key:"render",value:function(){var e=this,t=this.state,n=t.title,a=t.color,o=t.showColorOptions,s=this.props.status,c=this.props.match.path,i=["white","pink","orange","yellow","green","blue","lavender","gray"].map(function(t){return r.a.createElement("button",{key:t,id:t,className:"NoteForm--color",onClick:e.handleColorChoice})});return r.a.createElement("div",{className:"NoteForm--div--overlay"},r.a.createElement("form",{className:"NoteForm--background-"+a,onSubmit:this.handleSubmit},this.getTitleInput(),r.a.createElement("div",{className:"NoteForm--title-and-listitems"},this.getIncompleteListItems(),this.getNewListItemInput(),this.getCompleteListItems()),r.a.createElement("button",{className:"NoteForm--button-"+a,disabled:""===n.trim()},"Save"),"/new-note"!==c?r.a.createElement("button",{className:"NoteForm--button-"+a,onClick:this.handleNoteDelete},"Delete"):r.a.createElement(L.a,{to:"/"},r.a.createElement("button",{className:"NoteForm--button-"+a},"Discard")),o&&r.a.createElement("div",{className:"NoteForm--color-options"},i),r.a.createElement("div",{className:"NoteForm--div--palette-icon"},r.a.createElement("img",{className:"NoteForm--palette-icon",src:he.a,alt:"palette icon",onClick:this.toggleShowColorOptions})),s>=200&&s<300&&r.a.createElement(se.a,{to:"/"})))}}]),t}(a.Component),ve=Object(f.b)(function(e){return{status:e.status,user:e.user}},function(e){return{putNote:function(t,n){return e(U(t,n))},postNote:function(t,n){return e(function(e,t){return function(){var n=Object(u.a)(i.a.mark(function n(a){var r,o,s,c,u,l;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.title,o=e.listItems,s=e.color,c=A("POST",{title:r,listItems:o,color:s,user:t}),n.prev=3,a(O(!0)),n.next=7,F("https://keeper-turing-api.herokuapp.com/api/v1/notes/",c);case 7:return u=n.sent,n.next=10,u.json();case 10:l=n.sent,a(O(!1)),a(E(l)),a(w(u.status)),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(3),a(y(n.t0.message));case 19:case"end":return n.stop()}},n,this,[[3,16]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))},deleteNoteThunk:function(t,n){return e(_(t,n))},setStatus:function(t){return e(w(t))}}})(fe),ge=function(){return r.a.createElement("div",{className:"Error404"},r.a.createElement("h2",{className:"Error404--h2"},"No Note Found"),r.a.createElement(L.a,{to:"/",className:"Error404--Link"},"Back to Notes"))},Ne=n(87),be=n.n(Ne),Ee=function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader--div Loader--balls"}))},ke=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).checkUser=function(){n.props.toggleLoading(!0),V.a.auth().onAuthStateChanged(function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t?n.props.fetchUser(t):n.props.toggleLoading(!1);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},n.getNotesRoute=function(e){var t=e.match,a=n.props.notes,o=t.params.id,s=a.find(function(e){return e.id===o});return s?[r.a.createElement(oe,{isDisabled:!0,key:"NoteContainer"}),r.a.createElement(ve,Object.assign({},s,{match:t,key:"NoteForm"}))]:r.a.createElement(ge,null)},n.getNewNoteRoute=function(e){var t=e.match;return n.props.user?[r.a.createElement(oe,{isDisabled:!0,key:"NoteContainer"}),r.a.createElement(ve,{match:t,key:"NoteForm"})]:r.a.createElement(ge,null)},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.checkUser()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App--header"},r.a.createElement("h1",{className:"App--h1"},r.a.createElement("img",{className:"App--notebook-icon",src:be.a,alt:"note icon"}),"Keeper"),r.a.createElement(x,null)),this.props.isLoading&&r.a.createElement(Ee,null),r.a.createElement(v.a,null,r.a.createElement(g.a,{path:"/new-note",render:this.getNewNoteRoute}),r.a.createElement(g.a,{path:"/notes/:id",render:this.getNotesRoute}),r.a.createElement(g.a,{exact:!0,path:"/",component:oe}),r.a.createElement(g.a,{component:ge})))}}]),t}(a.Component),Ce=Object(N.a)(Object(f.b)(function(e){return{notes:e.notes,isLoading:e.isLoading,error:e.error,user:e.user}},function(e){return{fetchUser:function(t){return e(te(t))},toggleLoading:function(t){return e(O(t))}}})(ke));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=n(18),ye=n(166),we=Object(Oe.combineReducers)({notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTES":return t.notes;case"ADD_NOTE":return[].concat(Object(D.a)(e),[t.note]);case"UPDATE_NOTE":return e.map(function(e){var n=t.note.id;return e.id===n?t.note:e});case"DELETE_NOTE":return e.filter(function(e){return e.id!==t.id});default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOADING":return t.bool;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERROR":return t.message;default:return e}},status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STATUS":return t.code;default:return e}},query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return t.query;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.user;default:return e}}}),Ie=n(89),je=n(90);V.a.initializeApp({apiKey:"AIzaSyB7Pu_Sta0xfZgdOEGyKUI5pbU2gBn1zI0",authDomain:"keeper-233521.firebaseapp.com"});var xe=Object(Ie.composeWithDevTools)(Object(Oe.applyMiddleware)(je.a)),De=Object(Oe.createStore)(we,xe),Se=r.a.createElement(f.a,{store:De},r.a.createElement(ye.a,null,r.a.createElement(Ce,null)));s.a.render(Se,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,n){e.exports=n.p+"static/media/uncheckedicon.284c00e2.svg"},45:function(e,t,n){e.exports=n.p+"static/media/checkedicon.c959b724.svg"},46:function(e,t,n){e.exports=n.p+"static/media/deleteicon.777b93c6.svg"},80:function(e,t,n){e.exports=n.p+"static/media/edit.5ef43b89.svg"},81:function(e,t,n){e.exports=n.p+"static/media/delete.d98e9b10.svg"},83:function(e,t,n){e.exports=n.p+"static/media/newnoteicon.0edd6a52.svg"},84:function(e,t,n){e.exports=n.p+"static/media/googleicon.86fcd15e.svg"},86:function(e,t,n){e.exports=n.p+"static/media/paletteicon.beacd3a5.svg"},87:function(e,t,n){e.exports=n.p+"static/media/notebook.eadd7bd9.svg"},92:function(e,t,n){e.exports=n(162)},97:function(e,t,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.d60a898d.chunk.js.map