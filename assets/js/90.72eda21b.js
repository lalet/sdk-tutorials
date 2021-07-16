(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{695:function(l,c,e){"use strict";e.r(c);var Z=e(0),b=Object(Z.a)({},(function(){var l=this,c=l.$createElement,e=l._self._c||c;return e("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[e("h1",{attrs:{id:"cancel-orders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cancel-orders"}},[l._v("#")]),l._v(" Cancel orders")]),l._v(" "),e("p",[l._v("You have implemented order books, buy and sell orders.\nIn this chapter you will enable cancelling buy and sell orders.")]),l._v(" "),e("p",[l._v("The function "),e("code",[l._v("RemoveOrderFromID")]),l._v(" will be used to remove the buy or sell order from the order book.")]),l._v(" "),e("h2",{attrs:{id:"cancel-the-sell-order"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cancel-the-sell-order"}},[l._v("#")]),l._v(" Cancel the Sell Order")]),l._v(" "),e("p",[l._v("To cancel a sell order, you have to get the ID of the specific sell order.\nThen you can use the function "),e("code",[l._v("RemoveOrderFromID")]),l._v(" to remove the specific order from the order book and update the keeper accordingly.")]),l._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9pYmNkZXgva2VlcGVyL21zZ19zZXJ2ZXJfY2FuY2VsX3NlbGxfb3JkZXIuZ28KaW1wb3J0ICZxdW90O2Vycm9ycyZxdW90OwoKZnVuYyAoayBtc2dTZXJ2ZXIpIENhbmNlbFNlbGxPcmRlcihnb0N0eCBjb250ZXh0LkNvbnRleHQsIG1zZyAqdHlwZXMuTXNnQ2FuY2VsU2VsbE9yZGVyKSAoKnR5cGVzLk1zZ0NhbmNlbFNlbGxPcmRlclJlc3BvbnNlLCBlcnJvcikgewoJY3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGdvQ3R4KQoKCS8vIFJldHJpZXZlIHRoZSBib29rCglwYWlySW5kZXggOj0gdHlwZXMuT3JkZXJCb29rSW5kZXgobXNnLlBvcnQsIG1zZy5DaGFubmVsLCBtc2cuQW1vdW50RGVub20sIG1zZy5QcmljZURlbm9tKQoJcywgZm91bmQgOj0gay5HZXRTZWxsT3JkZXJCb29rKGN0eCwgcGFpckluZGV4KQoJaWYgIWZvdW5kIHsKCQlyZXR1cm4gJmFtcDt0eXBlcy5Nc2dDYW5jZWxTZWxsT3JkZXJSZXNwb25zZXt9LCBlcnJvcnMuTmV3KCZxdW90O3RoZSBwYWlyIGRvZXNuJ3QgZXhpc3QmcXVvdDspCgl9CgoJLy8gQ2hlY2sgb3JkZXIgY3JlYXRvcgoJb3JkZXIsIGVyciA6PSBzLmJvb2suR2V0T3JkZXJGcm9tSUQobXNnLk9yZGVySUQpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gJmFtcDt0eXBlcy5Nc2dDYW5jZWxTZWxsT3JkZXJSZXNwb25zZXt9LCBlcnIKCX0KCWlmIG9yZGVyLkNyZWF0b3IgIT0gbXNnLkNyZWF0b3IgewoJCXJldHVybiAmYW1wO3R5cGVzLk1zZ0NhbmNlbFNlbGxPcmRlclJlc3BvbnNle30sIGVycm9ycy5OZXcoJnF1b3Q7Y2FuY2VsbGVyIG11c3QgYmUgY3JlYXRvciZxdW90OykKCX0KCgkvLyBSZW1vdmUgb3JkZXIKCWlmIGVyciA6PSBzLmJvb2suUmVtb3ZlT3JkZXJGcm9tSUQobXNnLk9yZGVySUQpOyBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gJmFtcDt0eXBlcy5Nc2dDYW5jZWxTZWxsT3JkZXJSZXNwb25zZXt9LCBlcnIKCX0KCWsuU2V0U2VsbE9yZGVyQm9vayhjdHgsIHMpCgogICAgLy8gUmVmdW5kIHNlbGxlciB3aXRoIHJlbWFpbmluZyBhbW91bnQKCXNlbGxlciwgZXJyIDo9IHNkay5BY2NBZGRyZXNzRnJvbUJlY2gzMihvcmRlci5DcmVhdG9yKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuICZhbXA7dHlwZXMuTXNnQ2FuY2VsU2VsbE9yZGVyUmVzcG9uc2V7fSwgZXJyCgl9CglpZiBlcnIgOj0gay5TYWZlTWludCgKCQljdHgsCgkJbXNnLlBvcnQsCgkJbXNnLkNoYW5uZWwsCgkJc2VsbGVyLAoJCW1zZy5BbW91bnREZW5vbSwKCQlvcmRlci5BbW91bnQsCgkpOyBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gJmFtcDt0eXBlcy5Nc2dDYW5jZWxTZWxsT3JkZXJSZXNwb25zZXt9LCBlcnIKCX0KCglyZXR1cm4gJmFtcDt0eXBlcy5Nc2dDYW5jZWxTZWxsT3JkZXJSZXNwb25zZXt9LCBuaWwKfQo="}}),l._v(" "),e("h2",{attrs:{id:"cancel-the-buy-order"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cancel-the-buy-order"}},[l._v("#")]),l._v(" Cancel the Buy Order")]),l._v(" "),e("p",[l._v("To cancel a buy order, you have to get the ID of the specific buy order.\nThen you can use the function "),e("code",[l._v("RemoveOrderFromID")]),l._v(" to remove the specific order from the order book and update the keeper accordingly.")]),l._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9pYmNkZXgva2VlcGVyL21zZ19zZXJ2ZXJfY2FuY2VsX2J1eV9vcmRlci5nbwppbXBvcnQgJnF1b3Q7ZXJyb3JzJnF1b3Q7CgpmdW5jIChrIG1zZ1NlcnZlcikgQ2FuY2VsQnV5T3JkZXIoZ29DdHggY29udGV4dC5Db250ZXh0LCBtc2cgKnR5cGVzLk1zZ0NhbmNlbEJ1eU9yZGVyKSAoKnR5cGVzLk1zZ0NhbmNlbEJ1eU9yZGVyUmVzcG9uc2UsIGVycm9yKSB7CgljdHggOj0gc2RrLlVud3JhcFNES0NvbnRleHQoZ29DdHgpCgoJLy8gUmV0cmlldmUgdGhlIGJvb2sKCXBhaXJJbmRleCA6PSB0eXBlcy5PcmRlckJvb2tJbmRleChtc2cuUG9ydCwgbXNnLkNoYW5uZWwsIG1zZy5BbW91bnREZW5vbSwgbXNnLlByaWNlRGVub20pCgliLCBmb3VuZCA6PSBrLkdldEJ1eU9yZGVyQm9vayhjdHgsIHBhaXJJbmRleCkKCWlmICFmb3VuZCB7CgkJcmV0dXJuICZhbXA7dHlwZXMuTXNnQ2FuY2VsQnV5T3JkZXJSZXNwb25zZXt9LCBlcnJvcnMuTmV3KCZxdW90O3RoZSBwYWlyIGRvZXNuJ3QgZXhpc3QmcXVvdDspCgl9CgoJLy8gQ2hlY2sgb3JkZXIgY3JlYXRvcgoJb3JkZXIsIGVyciA6PSBiLmJvb2suR2V0T3JkZXJGcm9tSUQobXNnLk9yZGVySUQpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gJmFtcDt0eXBlcy5Nc2dDYW5jZWxCdXlPcmRlclJlc3BvbnNle30sIGVycgoJfQoJaWYgb3JkZXIuQ3JlYXRvciAhPSBtc2cuQ3JlYXRvciB7CgkJcmV0dXJuICZhbXA7dHlwZXMuTXNnQ2FuY2VsQnV5T3JkZXJSZXNwb25zZXt9LCBlcnJvcnMuTmV3KCZxdW90O2NhbmNlbGxlciBtdXN0IGJlIGNyZWF0b3ImcXVvdDspCgl9CgoJLy8gUmVtb3ZlIG9yZGVyCglpZiBlcnIgOj0gYi5ib29rLlJlbW92ZU9yZGVyRnJvbUlEKG1zZy5PcmRlcklEKTsgZXJyICE9IG5pbCB7CgkJcmV0dXJuICZhbXA7dHlwZXMuTXNnQ2FuY2VsQnV5T3JkZXJSZXNwb25zZXt9LCBlcnIKCX0KCWsuU2V0QnV5T3JkZXJCb29rKGN0eCwgYikKCiAgLy8gUmVmdW5kIGJ1eWVyIHdpdGggcmVtYWluaW5nIHByaWNlIGFtb3VudAoJYnV5ZXIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIob3JkZXIuQ3JlYXRvcikKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiAmYW1wO3R5cGVzLk1zZ0NhbmNlbEJ1eU9yZGVyUmVzcG9uc2V7fSwgZXJyCgl9CglpZiBlcnIgOj0gay5TYWZlTWludCgKCQljdHgsCgkJbXNnLlBvcnQsCgkJbXNnLkNoYW5uZWwsCgkJYnV5ZXIsCgkJbXNnLlByaWNlRGVub20sCgkJb3JkZXIuQW1vdW50Km9yZGVyLlByaWNlLAoJKTsgZXJyICE9IG5pbCB7CgkJcmV0dXJuICZhbXA7dHlwZXMuTXNnQ2FuY2VsQnV5T3JkZXJSZXNwb25zZXt9LCBlcnIKCX0KCglyZXR1cm4gJmFtcDt0eXBlcy5Nc2dDYW5jZWxCdXlPcmRlclJlc3BvbnNle30sIG5pbAp9Cg=="}}),l._v(" "),e("p",[l._v("That finishes all necessary functions needed for the "),e("code",[l._v("ibcdex")]),l._v(" module. In this chapter you have implemented the design for cancelling specific buy or sell orders.\nIn the next chapter, you will be able to use and interact with your "),e("code",[l._v("ibcdex")]),l._v(" module. You will be using the command line to create order books, buy and sell orders on the "),e("code",[l._v("Mars")]),l._v(" and "),e("code",[l._v("Venus")]),l._v(" blockchain.")])],1)}),[],!1,null,null,null);c.default=b.exports}}]);