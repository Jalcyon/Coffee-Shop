(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{26:function(e,c,t){},27:function(e,c,t){},34:function(e,c,t){"use strict";t.r(c);var a=t(1),i=t.n(a),r=t(19),n=t.n(r),s=(t(26),t(27),t(11)),o=t(21),j=t(17),l=t(7),f=t(2),h=t(0);function p(e){var c=0;e.cart.forEach((function(e){c+=e.price}));var t,a=!1;return 0===c&&(a=!0),t=a?Object(h.jsx)("p",{className:"title",children:"You have no Items in your cart"}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"title",children:"Cart"}),Object(h.jsx)("div",{className:"cart",children:e.cart.map((function(c,t){return Object(h.jsxs)("div",{className:"cart-item",children:[Object(h.jsx)("p",{children:c.name}),Object(h.jsxs)("p",{children:["$",c.price]}),Object(h.jsx)("button",{className:"remove-item",onClick:function(){return e.removeFromCart(t)},children:"\u2715"})]})}))}),Object(h.jsxs)("p",{className:"total",children:["Your total is: $",c]})]}),Object(h.jsx)("div",{children:t})}function b(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"title",children:"Welcome to the Coffee Shop"}),Object(h.jsx)("p",{className:"home-p",children:"We got some of that gooooooooooodd coffee"}),Object(h.jsx)("p",{className:"home-p",children:"Hit up that Menu link up top to check out our yummy Hot Coffees, our Hot and Cold Teas, and our Frappy's"})]})}function d(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"title",children:"Menu"}),e.categories.map((function(e){var c=e.split(" "),t="";return c.forEach((function(e){t=t.concat(e)})),Object(h.jsx)(l.b,{className:"menu-link",to:"/menu/"+t,children:e})}))]})}function u(e){var c=Object.keys(e.category),t=Object.keys(e.category[c]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"title",children:Object.keys(e.category)}),Object(h.jsx)("div",{className:"items",children:t.map((function(t){var a={name:t,price:e.category[c][t].price},i="../images/"+t.split(" ").join("")+".webp";return Object(h.jsxs)("div",{className:"item-card",children:[Object(h.jsx)("h3",{children:t}),Object(h.jsxs)("p",{children:["Size: ",e.category[c][t].size]}),Object(h.jsxs)("p",{children:["Price: $",e.category[c][t].price]}),Object(h.jsxs)("p",{children:["Caffeine Content: ",e.category[c][t].caffeine,"mg"]}),Object(h.jsx)("img",{alt:t,src:i,className:"menu-img"}),Object(h.jsxs)("button",{onClick:function(){e.addToCart(a)},children:["Add ",t," to Cart"]})]})}))})]})}var m=function(){for(var e=Object(a.useState)([]),c=Object(j.a)(e,2),t=c[0],i=c[1],r=Object(a.useState)([{"Hot Coffees":{"Caffe Americano":{size:"16 oz",calories:15,caffeine:225,price:3},"Blonde Roast":{size:"16 oz",calories:5,caffeine:360,price:3},Cappucino:{size:"16 oz",calories:140,caffeine:150,price:3.5},"Espresso Shot":{size:"1.5 oz",calories:10,caffeine:150,price:2},"Caramel Macchiato":{size:"16 oz",calories:250,caffeine:150,price:4},"Caffe Mocha":{size:"16 oz",calories:370,caffeine:175,price:4}}},{"Iced Teas":{"Unsweetened Peach Tea":{size:"14.5 oz",calories:0,caffeine:16,price:3},"Mango Black Tea":{size:"14.5 oz",calories:100,caffeine:55,price:3},"Iced Black Tea Lemonade":{size:"16 oz",calories:50,caffeine:25,price:3},"Iced Matcha Tea Latte":{size:"16 oz",calories:200,caffeine:80,price:3}}},{"Hot Teas":{"Chai Tea":{size:"16 oz",calories:0,caffeine:40,price:2.5},"London Fog Tea Latte":{size:"16 oz",calories:180,caffeine:40,price:3.5},"Matcha Tea Latte":{size:"16 oz",calories:240,caffeine:80,price:3},"Honey Citrus Mint Tea":{size:"16 oz",calories:130,caffeine:16,price:3}}},{Frappucinos:{"Strawberry Funnel Cake Frappuccino":{size:"16 oz",calories:410,caffeine:85,price:5},"Mocha Cookie Crumble Frappuccino":{size:"16 oz",calories:480,caffeine:95,price:5},"Caramel Ribbon Crunch Frappuccino":{size:"16 oz",calories:470,caffeine:85,price:5}}}]),n=Object(j.a)(r,1)[0],m=[],O=0;O<n.length;O++){var x=n[O];m.push(Object.keys(x).toString())}var z=function(e){i(t.concat(e))},v=function(e){var c=Object(o.a)(t);c.splice(e,1),i(c)};return Object(h.jsxs)(l.a,{basename:"/coffee-shop",children:[Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:"/",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:"/cart",children:"Cart \u2022 "+t.length})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:"/menu",children:"Menu"})})]})}),Object(h.jsxs)(f.c,{children:[Object(h.jsx)(f.a,{path:"/",exact:!0,component:b}),Object(h.jsx)(f.a,{path:"/cart",exact:!0,render:function(e){return Object(h.jsx)(p,Object(s.a)(Object(s.a)({},e),{},{removeFromCart:v,cart:t}))}}),Object(h.jsx)(f.a,{path:"/menu",exact:!0,render:function(e){return Object(h.jsx)(d,Object(s.a)(Object(s.a)({},e),{},{categories:m}))}}),m.map((function(e,c){var t=e.split(" "),a="";return t.forEach((function(e){a=a.concat(e)})),Object(h.jsx)(f.a,{exact:!0,path:"/menu/"+a,render:function(e){return Object(h.jsx)(u,{addToCart:z,category:n[c]})}},"meme")}))]})]})};n.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.5fca0308.chunk.js.map