(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),s=n(7),o=n.n(s),u=n(12),l=n(10),j=n(194),d=n(21),b=n(15),p=n(83),m=n(175),h=n(176),O=n(177),x=n(179),f=n(180),g=n(58),v=n(178),y=n.p+"static/media/commerce.457bea4f.png",k=n(11),w=n(170),C=n(18),S=Object(w.a)((function(e){return{appBar:Object(k.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(k.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(k.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(C.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(C.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(k.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),_=n(2),N=function(e){var t=e.totalItems,n=Object(a.useState)(null),r=Object(l.a)(n,2),c=r[0],i=r[1],s=S(),o=Object(b.g)(),u=Boolean(c),j=Object(_.jsx)(p.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:function(){return i(null)},children:Object(_.jsxs)(m.a,{children:[Object(_.jsx)(h.a,{component:d.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(_.jsx)(O.a,{badgeContent:t,color:"secondary",children:Object(_.jsx)(v.a,{})})}),Object(_.jsx)("p",{children:"Cart"})]})});return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(x.a,{position:"fixed",className:s.appBar,color:"inherit",children:Object(_.jsxs)(f.a,{children:[Object(_.jsxs)(g.a,{component:d.b,to:"/",variant:"h4",className:s.title,color:"primary",children:[Object(_.jsx)("img",{src:y,alt:"commerce.js",height:"50px",className:s.image})," WEB STORE"]}),Object(_.jsx)("div",{className:s.grow}),"/"===o.pathname&&Object(_.jsx)("div",{className:s.button,children:Object(_.jsx)(h.a,{component:d.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(_.jsx)(O.a,{badgeContent:t,color:"secondary",children:Object(_.jsx)(v.a,{})})})})]})}),j]})},T=n(186),B=n(181),E=n(182),R=n(183),q=n(184),F=n(185),I=Object(w.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"100%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),L=function(e){var t=e.product,n=e.onAddToCart,a=I();return Object(_.jsxs)(B.a,{className:a.root,children:[Object(_.jsx)(E.a,{className:a.media,image:t.media.source,title:t.name}),Object(_.jsxs)(R.a,{children:[Object(_.jsxs)("div",{className:a.cardContent,children:[Object(_.jsx)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.name}),Object(_.jsxs)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["\u20b9",t.price.formatted]})]}),Object(_.jsx)(g.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary",component:"p"})]}),Object(_.jsx)(q.a,{disableSpacing:!0,className:a.cardActions,children:Object(_.jsx)(h.a,{"aria-label":"Add to Cart",onClick:function(){return n(t.id,1)},children:Object(_.jsx)(F.a,{})})})]})},A=Object(w.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}})),D=function(e){var t=e.products,n=e.onAddToCart,a=A();return t.length?Object(_.jsxs)("main",{className:a.content,children:[Object(_.jsx)("div",{className:a.toolbar}),Object(_.jsx)(T.a,{container:!0,justify:"center",spacing:4,children:t.map((function(e){return Object(_.jsx)(T.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(_.jsx)(L,{product:e,onAddToCart:n})},e.id)}))})]}):Object(_.jsx)("p",{children:"Loading..."})},P=n(187),z=n(188),W=Object(w.a)((function(){return{media:{height:250},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),Q=function(e){var t=e.item,n=e.onUpdateCartQty,a=e.onRemoveFromCart,r=W(),c=function(e,t){return n(e,t)};return Object(_.jsxs)(B.a,{className:"cart-item",children:[Object(_.jsx)(E.a,{image:t.media.source,alt:t.name,className:r.media}),Object(_.jsxs)(R.a,{className:r.cardContent,children:[Object(_.jsx)(g.a,{variant:"h4",children:t.name}),Object(_.jsx)(g.a,{variant:"h5",children:t.line_total.formatted_with_symbol})]}),Object(_.jsxs)(q.a,{className:r.cardActions,children:[Object(_.jsxs)("div",{className:r.buttons,children:[Object(_.jsx)(P.a,{type:"button",size:"small",onClick:function(){return c(t.id,t.quantity-1)},children:"-"}),Object(_.jsxs)(g.a,{children:["\xa0",t.quantity,"\xa0"]}),Object(_.jsx)(P.a,{type:"button",size:"small",onClick:function(){return c(t.id,t.quantity+1)},children:"+"})]}),Object(_.jsx)(P.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return e=t.id,a(e);var e},children:"Remove"})]})]})},U=Object(w.a)((function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(t={minWidth:"150px"},Object(k.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(k.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"5%",marginBottom:"10%",width:"100%",justifyContent:"space-between"}}})),G=function(e){var t=e.cart,n=e.onUpdateCartQty,a=e.onRemoveFromCart,r=e.onEmptyCart,c=U(),i=function(){return r()};if(!t.line_items)return"Loading";return Object(_.jsxs)(z.a,{children:[Object(_.jsx)("div",{className:c.toolbar}),Object(_.jsx)(g.a,{className:c.title,variant:"h4",align:"center",color:"primary",gutterBottom:!0,children:"Your Shopping Cart"}),t.line_items.length?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(T.a,{container:!0,spacing:3,children:t.line_items.map((function(e){return Object(_.jsx)(T.a,{item:!0,xs:12,sm:4,children:Object(_.jsx)(Q,{item:e,onUpdateCartQty:n,onRemoveFromCart:a})},e.id)}))}),Object(_.jsxs)("div",{className:c.cardDetails,children:[Object(_.jsxs)(g.a,{variant:"h4",children:["Subtotal: ",t.subtotal.formatted_with_symbol]}),Object(_.jsxs)("div",{children:[Object(_.jsx)(P.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:i,children:"Empty cart"}),Object(_.jsx)(P.a,{className:c.checkoutButton,component:d.b,to:"/checkout",size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]}):Object(_.jsxs)(g.a,{variant:"subtitle1",children:["You have no items in your shopping cart,",Object(_.jsx)(d.b,{className:c.link,to:"/",children:"start adding some"}),"!"]})]})},M=n(192),Y=n(193),H=n(85),Z=n(201),J=n(195),V=n(197),X=n(81),K=new(n.n(X).a)("pk_test_31020fe9c0b471011429454573762880061a9035cb5e0",!0),$=n(51),ee=n(200),te=n(196),ne=n(46),ae=n(198);var re=function(e){var t,n=e.name,a=e.label,r=(e.required,e.field,Object(ne.d)().control);return Object(_.jsx)(T.a,{item:!0,xs:12,sm:6,children:Object(_.jsx)(ne.a,(t={control:r,name:n},Object(k.a)(t,"control",r),Object(k.a)(t,"render",(function(e){e.field;return Object(_.jsx)(ae.a,{fullWidth:!0,label:a,required:!0})})),Object(k.a)(t,"error",!1),t))})},ce=function(e){var t=e.checkoutToken,n=e.test,r=Object(a.useState)([]),c=Object(l.a)(r,2),i=c[0],s=c[1],j=Object(a.useState)(""),b=Object(l.a)(j,2),p=b[0],h=b[1],O=Object(a.useState)([]),x=Object(l.a)(O,2),f=x[0],v=x[1],y=Object(a.useState)(""),k=Object(l.a)(y,2),w=k[0],C=k[1],S=Object(a.useState)([]),N=Object(l.a)(S,2),B=N[0],E=N[1],R=Object(a.useState)(""),q=Object(l.a)(R,2),F=q[0],I=q[1],L=Object(ne.c)(),A=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.services.localeListShippingCountries(t);case 2:n=e.sent,a=n.countries,s(a),h(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.services.localeListSubdivisions(t);case 2:n=e.sent,a=n.subdivisions,v(a),C(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r,c=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,K.checkout.getShippingOptions(t,{country:n,region:a});case 3:r=e.sent,E(r),I(r[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){A(t.id)}),[]),Object(a.useEffect)((function(){p&&D(p)}),[p]),Object(a.useEffect)((function(){w&&z(t.id,p,w)}),[w]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(g.a,{variant:"h5",color:"primary",gutterBottom:!0,children:"Shipping address"}),Object(_.jsx)(ne.b,Object($.a)(Object($.a)({},L),{},{children:Object(_.jsxs)("form",{onSubmit:L.handleSubmit((function(e){return n(Object($.a)(Object($.a)({},e),{},{shippingCountry:p,shippingSubdivision:w,shippingOption:F}))})),children:[Object(_.jsxs)(T.a,{container:!0,spacing:3,children:[Object(_.jsx)(re,{required:!0,name:"firstName",label:"First name"}),Object(_.jsx)(re,{required:!0,name:"lastName",label:"Last name"}),Object(_.jsx)(re,{required:!0,name:"address1",label:"Address line 1"}),Object(_.jsx)(re,{required:!0,name:"email",label:"Email"}),Object(_.jsx)(re,{required:!0,name:"city",label:"City"}),Object(_.jsx)(re,{required:!0,name:"zip",label:"Zip / Postal code"}),Object(_.jsxs)(T.a,{item:!0,xs:12,sm:6,children:[Object(_.jsx)(ee.a,{children:"Shipping Country"}),Object(_.jsx)(te.a,{value:p,fullWidth:!0,onChange:function(e){return h(e.target.value)},children:Object.entries(i).map((function(e){var t=Object(l.a)(e,2);return{id:t[0],label:t[1]}})).map((function(e){return Object(_.jsx)(m.a,{value:e.id,children:e.label},e.id)}))})]}),Object(_.jsxs)(T.a,{item:!0,xs:12,sm:6,children:[Object(_.jsx)(ee.a,{children:"Shipping Subdivision"}),Object(_.jsx)(te.a,{value:w,fullWidth:!0,onChange:function(e){return C(e.target.value)},children:Object.entries(f).map((function(e){var t=Object(l.a)(e,2);return{id:t[0],label:t[1]}})).map((function(e){return Object(_.jsx)(m.a,{value:e.id,children:e.label},e.id)}))})]}),Object(_.jsxs)(T.a,{item:!0,xs:12,sm:6,children:[Object(_.jsx)(ee.a,{children:"Shipping Options"}),Object(_.jsx)(te.a,{value:F,fullWidth:!0,onChange:function(e){return I(e.target.value)},children:B.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})).map((function(e){return Object(_.jsx)(m.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(_.jsx)("br",{}),Object(_.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(_.jsx)(P.a,{component:d.b,variant:"contained",color:"primary",to:"/cart",children:"Back to Cart"}),Object(_.jsx)(P.a,{type:"submit",variant:"contained",color:"secondary",children:"Next"})]})]})}))]})},ie=n(52),se=n(82),oe=n(174),ue=n(139),le=n(191),je=function(e){var t=e.checkoutToken;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(g.a,{variant:"h5",color:"primary",gutterBottom:!0,children:"Order summary"}),Object(_.jsxs)(oe.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(_.jsxs)(ue.a,{style:{padding:"10px 0"},children:[Object(_.jsx)(le.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),Object(_.jsx)(g.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.name)})),Object(_.jsxs)(ue.a,{style:{padding:"10px 0"},children:[Object(_.jsx)(le.a,{primary:"Total"}),Object(_.jsx)(g.a,{variant:"subtitle1",color:"secondary",style:{fontWeight:700},children:t.live.subtotal.formatted_with_symbol})]})]})]})},de=Object(se.a)("pk_test_51IUwSiLwalanwD1yTYzI9BPtedAZwsQcDPM0XdSVPSfmGH2RAisnajKI1wXCDq3dR6pRmyT5Uu8pxFRkhSihPPoZ00pqjctHVs"),be=function(e){var t=e.checkoutToken,n=e.nextStep,a=e.backStep,r=e.shippingData,c=e.onCaptureCheckout,i=function(){var e=Object(u.a)(o.a.mark((function e(a,i,s){var u,l,j,d,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),s&&i){e.next=3;break}return e.abrupt("return");case 3:return u=i.getElement(ie.CardElement),e.next=6,s.createPaymentMethod({type:"card",card:u});case 6:l=e.sent,j=l.error,d=l.paymentMethod,j?console.log("[error]",j):(b={line_items:t.live.line_items,customer:{firstname:r.firstName,lastname:r.lastName,email:r.email},shipping:{name:"International",street:r.address1,town_city:r.city,county_state:r.shippingSubdivision,postal_zip_code:r.zip,country:r.shippingCountry},fulfillment:{shipping_method:r.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:d.id}}},c(t.id,b),n());case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(je,{checkoutToken:t}),Object(_.jsx)(M.a,{}),Object(_.jsx)(g.a,{variant:"h5",gutterBottom:!0,color:"primary",style:{margin:"20px 0"},children:"Payment method"}),Object(_.jsx)(ie.Elements,{stripe:de,children:Object(_.jsx)(ie.ElementsConsumer,{children:function(e){var n,r=e.elements,c=e.stripe;return Object(_.jsxs)("form",{onSubmit:function(e){return i(e,r,c)},children:[Object(_.jsx)(ie.CardElement,{}),Object(_.jsx)("br",{})," ",Object(_.jsx)("br",{}),Object(_.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(_.jsx)(P.a,{variant:"contained",onClick:a,color:"secondary",children:"Back"}),Object(_.jsxs)(P.a,(n={type:"submit",variant:"contained",color:"primary",disabled:!c},Object(k.a)(n,"color","primary"),Object(k.a)(n,"children",["Pay ",t.live.subtotal.formatted_with_symbol]),n))]})]})}})})]})},pe=Object(w.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(k.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(k.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(k.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),me=["Shipping address","Payment details"],he=function(e){var t=e.cart,n=e.onCaptureCheckout,r=e.order,c=e.error,i=Object(a.useState)(null),s=Object(l.a)(i,2),p=s[0],m=s[1],h=Object(a.useState)(0),O=Object(l.a)(h,2),x=O[0],f=O[1],v=Object(a.useState)({}),y=Object(l.a)(v,2),k=y[0],w=y[1],C=Object(a.useState)(!1),S=Object(l.a)(C,2),N=S[0],T=S[1],B=pe(),E=Object(b.f)(),R=function(){return f((function(e){return e+1}))},q=function(){return f((function(e){return e-1}))};Object(a.useEffect)((function(){t.id&&function(){var e=Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,m(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x!==me.length&&E.push("/");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[t]);var F=function(e){w(e),R()},I=function(){setTimeout((function(){T(!0)}),3e3)},L=function(){return r.customer?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{children:[Object(_.jsxs)(g.a,{variant:"h5",children:["Thank you for your purchase, ",r.customer.firstname," ",r.customer.lastname,"!"]}),Object(_.jsx)(M.a,{className:B.divider}),Object(_.jsxs)(g.a,{variant:"subtitle2",children:["Order ref: ",r.customer_reference]})]}),Object(_.jsx)("br",{}),Object(_.jsx)(P.a,{component:d.b,variant:"outlined",type:"button",to:"/",children:"Back to home"})]}):N?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)(g.a,{variant:"h5",children:"Thank you for your purchase!"}),Object(_.jsx)(M.a,{className:B.divider})]}),Object(_.jsx)("br",{}),Object(_.jsx)(P.a,{component:d.b,variant:"outlined",type:"button",to:"/",children:"Back to home"})]}):Object(_.jsx)("div",{className:B.spinner,children:Object(_.jsx)(Y.a,{})})};c&&(L=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(g.a,{variant:"h5",children:" Thankyou for your purchase... Your order will be deliver soon..."}),Object(_.jsx)("br",{}),Object(_.jsx)(P.a,{component:d.b,variant:"contained",color:"secondary",type:"button",to:"/",children:"Back to home"})]})});var A=function(){return 0===x?Object(_.jsx)(ce,{checkoutToken:p,nextStep:R,setShippingData:w,test:F}):Object(_.jsx)(be,{checkoutToken:p,nextStep:R,backStep:q,shippingData:k,onCaptureCheckout:n,timeout:I})};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(j.a,{}),Object(_.jsx)("div",{className:B.toolbar}),Object(_.jsx)("main",{className:B.layout,children:Object(_.jsxs)(H.a,{className:B.paper,children:[Object(_.jsx)(g.a,{variant:"h4",align:"center",children:"Checkout"}),Object(_.jsx)(Z.a,{activeStep:x,className:B.stepper,children:me.map((function(e){return Object(_.jsx)(J.a,{children:Object(_.jsx)(V.a,{children:e})},e)}))}),x===me.length?Object(_.jsx)(L,{}):p&&Object(_.jsx)(A,{})]})})]})},Oe=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),s=Object(l.a)(i,2),p=s[0],m=s[1],h=Object(a.useState)({}),O=Object(l.a)(h,2),x=O[0],f=O[1],g=Object(a.useState)({}),v=Object(l.a)(g,2),y=v[0],k=v[1],w=Object(a.useState)(""),C=Object(l.a)(w,2),S=C[0],T=C[1],B=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.products.list();case 2:t=e.sent,n=t.data,m(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,K.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.add(t,n);case 2:a=e.sent,f(a.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.update(t,{quantity:n});case 2:a=e.sent,f(a.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.remove(t);case 2:n=e.sent,f(n.cart);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.empty();case 2:t=e.sent,f(t.cart);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.refresh();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.checkout.capture(t,n);case 3:a=e.sent,k(a),L(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),T(e.t0.data.error.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){B(),E()}),[]);return Object(_.jsx)(d.a,{children:Object(_.jsxs)("div",{style:{display:"flex"},children:[Object(_.jsx)(j.a,{}),Object(_.jsx)(N,{totalItems:x.total_items,handleDrawerToggle:function(){return c(!n)}}),Object(_.jsxs)(b.c,{children:[Object(_.jsx)(b.a,{exact:!0,path:"/",children:Object(_.jsx)(D,{products:p,onAddToCart:R,handleUpdateCartQty:!0})}),Object(_.jsx)(b.a,{exact:!0,path:"/cart",children:Object(_.jsx)(G,{cart:x,onUpdateCartQty:q,onRemoveFromCart:F,onEmptyCart:I})}),Object(_.jsx)(b.a,{path:"/checkout",exact:!0,children:Object(_.jsx)(he,{cart:x,order:y,onCaptureCheckout:A,error:S})})]})]})})};i.a.render(Object(_.jsx)(Oe,{}),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.ebcc205a.chunk.js.map