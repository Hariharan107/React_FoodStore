(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__1klA8",control:"Checkout_control__COZ92",actions:"Checkout_actions__1qKar",submit:"Checkout_submit__OddQe",cancel:"Checkout_cancel__1_-pY",invalid:"Checkout_invalid__29k7_"}},function(e,t,n){e.exports={cart_items:"Cart_cart_items__MDTzF",errors:"Cart_errors__tKsbI",total:"Cart_total__1sOaY",actions:"Cart_actions__R-ggm",tasty:"Cart_tasty__2VPAN","lds-heart":"Cart_lds-heart__Xfmua",sending:"Cart_sending__1cGHd",button__alt:"Cart_button__alt__1_Rr-",button:"Cart_button__1-xJB"}},,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__38Azi",summary:"CartItem_summary__tY2W5",price:"CartItem_price__oSJNj",amount:"CartItem_amount__xBO2B",actions:"CartItem_actions__2BndU"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2zNck",icon:"HeaderCartButton_icon__22MXS",badge:"HeaderCartButton_badge__308Xz",bump:"HeaderCartButton_bump__1hL45"}},,,function(e,t,n){e.exports={header:"Header_header__2BZdJ",main_image:"Header_main_image__32i9o","main-image":"Header_main-image__26RYm"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__12QUW","meals-appear":"AvailableMeals_meals-appear__3ie5n",error:"AvailableMeals_error__3IzA2","lds-hourglass":"AvailableMeals_lds-hourglass__hzbqy",meals_loading:"AvailableMeals_meals_loading__2fIYG"}},function(e,t,n){e.exports={meal:"MealItem_meal__21vxr",description:"MealItem_description__hEWiA",price:"MealItem_price__3jEln"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__I4BkQ",modal:"Modal_modal__2Grs4","slide-down":"Modal_slide-down__3JDyj"}},,,function(e,t,n){e.exports={card:"Card_card__2yoEw"}},function(e,t,n){e.exports={form:"MealForm_form__1O9vQ"}},function(e,t,n){e.exports={input:"Input_input__3QouY"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__6BM56"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),r=(n(28),n(2)),i=n(1),s=n.n(i),o=n(14),l=n.n(o),d=n(0),u=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})})},j=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),m=n(11),b=n.n(m),O=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(j).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(b.a.button," ").concat(a?b.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),280);return function(){clearTimeout(e)}}}),[s]),Object(d.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(d.jsx)("span",{className:b.a.icon,children:Object(d.jsx)(u,{})}),Object(d.jsx)("span",{children:"Your Cart"}),Object(d.jsx)("span",{className:b.a.badge,children:o})]})},h=function(e){return Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsxs)("header",{className:l.a.header,children:[Object(d.jsx)("h1",{children:"Messi_Meals"}),Object(d.jsx)(O,{onClick:e.onShowcart})]}),Object(d.jsx)("div",{className:l.a.main_image,children:Object(d.jsx)("img",{className:l.a.messi,src:"https://img.mensxp.com/media/content/2022/Dec/Header-Image-Credit-Twitter-FIFA-1400_639feac656718.jpeg?w=656&h=432&cc=1",height:"400px",alt:"GG"})})]})},x=n(7),_=n(13),p=n(15),f=n.n(p),v=n(20),C=n.n(v),g=function(e){return Object(d.jsx)("div",{className:C.a.card,children:e.children})},N=n(16),y=n.n(N),k=n(21),A=n.n(k),w=n(5),S=n(22),I=n.n(S),M=s.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:I.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(w.a)({ref:t},e.input))]})})),F=function(e){var t=Object(i.useRef)(),n=Object(i.useState)(!0),a=Object(r.a)(n,2),c=a[0],s=a[1];return Object(d.jsxs)("form",{className:A.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<1||c>5?s(!1):e.onAddtocart(c)},children:[Object(d.jsx)(M,{label:"Amount",ref:t,input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"Add"}),!c&&Object(d.jsx)("p",{children:"Enter Valid Amount(1-5)"})]})},E=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(i.useContext)(j);return Object(d.jsxs)("section",{className:y.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{className:y.a.description,children:e.description}),Object(d.jsx)("div",{className:y.a.price,children:t})]}),Object(d.jsx)("div",{children:Object(d.jsx)(F,{onAddtocart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price})}})})]},e.id)},R=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),o=s[0],l=s[1],u=Object(i.useState)(!1),j=Object(r.a)(u,2),m=j[0],b=j[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(_.a)(Object(x.a)().mark((function e(){var t,n,c,r;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-api-c7ada-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went Wrong");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});l(!1),a(c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){l(!1),b(e.message)}))}),[]),o)return Object(d.jsx)("section",{className:f.a["lds-hourglass"],children:Object(d.jsx)("p",{children:"Loading..."})});if(m)return Object(d.jsx)("section",{className:f.a.error,children:Object(d.jsx)("p",{children:m})});var O=n.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(E,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)},e.id)}));return Object(d.jsx)("div",{className:f.a.meals,children:Object(d.jsx)(g,{children:Object(d.jsx)("ul",{children:O})})})},B=n(23),H=n.n(B),D=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("section",{className:H.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})})},T=function(){return Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsx)(D,{}),Object(d.jsx)(R,{})]})},V=n(4),Y=n.n(V),z=n(17),P=n.n(z),J=function(e){return Object(d.jsx)("div",{className:P.a.backdrop,onClick:e.onClick})},W=function(e){return Object(d.jsx)("div",{className:P.a.modal,children:Object(d.jsx)("div",{className:P.a.content,children:e.children})})},L=function(e){var t=document.getElementById("overlays");return Object(d.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(d.jsx)(J,{onClick:e.onClick}),t),c.a.createPortal(Object(d.jsx)(W,{children:e.children}),t)]})},G=n(8),Q=n.n(G),q=function(e){var t="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:Q.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:Q.a.summary,children:[Object(d.jsx)("span",{className:Q.a.price,children:t}),Object(d.jsxs)("span",{className:Q.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:Q.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},X=n(3),$=n.n(X),K=function(e){var t=Object(i.useState)({name:!0,street:!0,postal:!0,city:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),j=function(e){return""===e.trim()},m="".concat($.a.control," ").concat(a.name?"":$.a.invalid),b="".concat($.a.control," ").concat(a.street?"":$.a.invalid),O="".concat($.a.control," ").concat(a.city?"":$.a.invalid),h="".concat($.a.control," ").concat(a.postal?"":$.a.invalid);return Object(d.jsxs)("form",{className:$.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=o.current.value,r=l.current.value,i=u.current.value,d=!j(n),m=!j(a),b=r.trim().length>=2,O=!j(i);c({name:d,street:m,postal:b,city:O}),d&&m&&b&&O&&(s.current.value="",o.current.value="",l.current.value="",u.current.value="",e.onConfirm({name:n,street:a,postal:r,city:i}))},children:[Object(d.jsxs)("div",{className:m,children:[Object(d.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(d.jsx)("input",{type:"text",id:"name",ref:s}),!a.name&&Object(d.jsx)("p",{children:"Enter Valid Name"})]}),Object(d.jsxs)("div",{className:b,children:[Object(d.jsx)("label",{htmlFor:"street",children:"Street"}),Object(d.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(d.jsx)("p",{children:"Enter Valid Street"})]}),Object(d.jsxs)("div",{className:h,children:[Object(d.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(d.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postal&&Object(d.jsx)("p",{children:"Enter Valid Postal-Code(1-5)"})]}),Object(d.jsxs)("div",{className:O,children:[Object(d.jsx)("label",{htmlFor:"city",children:"City"}),Object(d.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(d.jsx)("p",{children:"Enter Valid City"})]}),Object(d.jsxs)("div",{className:$.a.actions,children:[Object(d.jsx)("button",{className:$.a.cancel,type:"button",onClick:e.onCancel,children:"Cancel"}),Object(d.jsx)("button",{className:$.a.submit,children:"Confirm"})]})]})},U=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(i.useState)(!1),l=Object(r.a)(o,2),u=l[0],m=l[1],b=Object(i.useState)(!1),O=Object(r.a)(b,2),h=O[0],p=O[1],f=Object(i.useState)(!1),v=Object(r.a)(f,2),C=v[0],g=v[1],N=Object(i.useContext)(j),y="$".concat(N.totalAmount.toFixed(2)),k=N.items.length>0,A=function(e){N.removeItem(e)},S=function(e){N.addItem(Object(w.a)(Object(w.a)({},e),{},{amount:1}))},I=function(){var e=Object(_.a)(Object(x.a)().mark((function e(t){var n;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),m(!1),e.prev=2,e.next=5,fetch("https://react-api-c7ada-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({userDetails:t,orderedItems:N.items})});case 5:if(n=e.sent,g(!0),n.ok){e.next=9;break}throw new Error("Something went Wrong");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),m(e.t0.message);case 14:return e.prev=14,p(!1),e.finish(14);case 17:N.clearCart();case 18:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(t){return e.apply(this,arguments)}}(),M=Object(d.jsx)("ul",{className:Y.a.cart_items,children:N.items.map((function(e){return Object(d.jsx)(q,{name:e.name,amount:e.amount,price:e.price,onRemove:A.bind(null,e.id),onAdd:S.bind(null,e)},e.id)}))}),F=Object(d.jsxs)("div",{className:Y.a.actions,children:[Object(d.jsx)("button",{className:Y.a.button__alt,onClick:e.onHideCart,children:"Close"}),k&&Object(d.jsx)("button",{className:Y.a.button,onClick:function(){c(!0)},children:"Order"})]}),E=Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsx)("div",{className:Y.a["lds-heart"],children:Object(d.jsx)("div",{})}),Object(d.jsx)("p",{className:Y.a.sending,children:"Sending Order Data"})]}),R=Object(d.jsx)(s.a.Fragment,{children:Object(d.jsx)("p",{className:Y.a.errors,children:"Something went Wrong. Please Try Again\ud83d\ude2d"})}),B=Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsx)("p",{className:Y.a.sending,children:"Successfully Ordered.Sit Tight\ud83d\ude09"}),Object(d.jsx)("div",{className:Y.a.actions,children:Object(d.jsx)("button",{className:Y.a.tasty,onClick:e.onHideCart,children:"Tasty\ud83d\ude0b"})})]}),H=Object(d.jsxs)(s.a.Fragment,{children:[M,Object(d.jsxs)("div",{className:Y.a.total,children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:y})]}),a&&Object(d.jsx)(K,{onConfirm:I,onCancel:e.onHideCart}),!a&&F]});return Object(d.jsxs)(L,{onClick:e.onHideCart,children:[!h&&!C&&!u&&H,u&&R,h&&E,C&&B]})},Z=n(19),ee={item:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.item.findIndex((function(e){return e.id===t.item.id})),r=e.item[c];if(r){var i=Object(w.a)(Object(w.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(Z.a)(e.item))[c]=i}else n=e.item.concat(t.item);return{item:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.item.findIndex((function(e){return e.id===t.id})),l=e.item[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.item.filter((function(e){return e.id!==t.id}));else{var u=Object(w.a)(Object(w.a)({},l),{},{amount:l.amount-1});(s=Object(Z.a)(e.item))[o]=u}return{item:s,totalAmount:d}}return t.type,ee},ne=function(e){var t=Object(i.useReducer)(te,ee),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.item,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(d.jsx)(j.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(ne,{children:[n&&Object(d.jsx)(U,{onHideCart:function(){a(!1)}}),Object(d.jsx)(h,{onShowcart:function(){a(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(T,{})})]})};c.a.render(Object(d.jsx)(ae,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.dc8853fd.chunk.js.map