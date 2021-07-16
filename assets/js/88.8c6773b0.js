(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{693:function(l,c,b){"use strict";b.r(c);var C=b(0),t=Object(C.a)({},(function(){var l=this,c=l.$createElement,b=l._self._c||c;return b("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[b("h1",{attrs:{id:"create-the-sell-order-ibc-packet"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#create-the-sell-order-ibc-packet"}},[l._v("#")]),l._v(" Create the Sell Order IBC packet")]),l._v(" "),b("p",[l._v("In this chapter you want to modify the IBC logic to create sell orders on the IBC exchange.\nA sell order must be submitted to an existing order book.\nWhen you are dealing with a native token, these tokens will get locked until the IBC packets get reversed.\nWhen you are dealing with an IBC token, these will get burned and you receive back the native token.")]),l._v(" "),b("h2",{attrs:{id:"modify-the-proto-definition"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#modify-the-proto-definition"}},[l._v("#")]),l._v(" Modify the Proto Definition")]),l._v(" "),b("p",[l._v("The packet proto file for a sell order is already generated. Add the seller information.")]),l._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gcHJvdG8vaWJjZGV4L3BhY2tldC5wcm90bwptZXNzYWdlIFNlbGxPcmRlclBhY2tldERhdGEgewogIHN0cmluZyBhbW91bnREZW5vbSA9IDE7CiAgaW50MzIgYW1vdW50ID0gMjsKICBzdHJpbmcgcHJpY2VEZW5vbSA9IDM7CiAgaW50MzIgcHJpY2UgPSA0OwogIHN0cmluZyBzZWxsZXIgPSA1OyAgLy8gJmx0Oy0tCn0K"}}),l._v(" "),b("h2",{attrs:{id:"about-the-ibc-packet"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#about-the-ibc-packet"}},[l._v("#")]),l._v(" About the IBC Packet")]),l._v(" "),b("p",[l._v("The IBC packet has four different stages you need to consider:")]),l._v(" "),b("ol",[b("li",[l._v("Before transmitting the packet")]),l._v(" "),b("li",[l._v("On Receipt of a packet")]),l._v(" "),b("li",[l._v("On Acknowledgment of a packet")]),l._v(" "),b("li",[l._v("On Timeout of a packet")])]),l._v(" "),b("h3",{attrs:{id:"pre-transmit"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#pre-transmit"}},[l._v("#")]),l._v(" Pre-transmit")]),l._v(" "),b("p",[l._v("Before a sell order will be submitted, make sure it contains the following logic:")]),l._v(" "),b("ul",[b("li",[l._v("Check if the pair exists on the order book")]),l._v(" "),b("li",[l._v("If the token is an IBC token, burn the tokens")]),l._v(" "),b("li",[l._v("If the token is a native token, lock the tokens")]),l._v(" "),b("li",[l._v("Save the voucher received on the target chain so it will be available later to resolve a denom")])]),l._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9pYmNkZXgva2VlcGVyL21zZ19zZXJ2ZXJfc2VsbF9vcmRlci5nbwppbXBvcnQgJnF1b3Q7ZXJyb3JzJnF1b3Q7CgpmdW5jIChrIG1zZ1NlcnZlcikgU2VuZFNlbGxPcmRlcihnb0N0eCBjb250ZXh0LkNvbnRleHQsIG1zZyAqdHlwZXMuTXNnU2VuZFNvdXJjZVNlbGxPcmRlcikgKCp0eXBlcy5Nc2dTZW5kU291cmNlU2VsbE9yZGVyUmVzcG9uc2UsIGVycm9yKSB7CgljdHggOj0gc2RrLlVud3JhcFNES0NvbnRleHQoZ29DdHgpCgoJLy8gQ2Fubm90IHNlbmQgYSBvcmRlciBpZiB0aGUgb3JkZXIgYm9vayBwYWlyIGRvZXNuJ3QgZXhpc3QKCXBhaXJJbmRleCA6PSB0eXBlcy5PcmRlckJvb2tJbmRleChtc2cuUG9ydCwgbXNnLkNoYW5uZWxJRCwgbXNnLkFtb3VudERlbm9tLCBtc2cuUHJpY2VEZW5vbSkKCV8sIGZvdW5kIDo9IGsuR2V0U2VsbE9yZGVyQm9vayhjdHgsIHBhaXJJbmRleCkKCWlmICFmb3VuZCB7CgkJcmV0dXJuICZhbXA7dHlwZXMuTXNnU2VuZFNlbGxPcmRlclJlc3BvbnNle30sIGVycm9ycy5OZXcoJnF1b3Q7dGhlIHBhaXIgZG9lc24ndCBleGlzdCZxdW90OykKCX0KCglzZW5kZXIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIobXNnLlNlbmRlcikKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiAmYW1wO3R5cGVzLk1zZ1NlbmRTZWxsT3JkZXJSZXNwb25zZXt9LCBlcnIKCX0KCgkvLyBVc2UgU2FmZUJ1cm4gdG8gZW5zdXJlIG5vIG5ldyBuYXRpdmUgdG9rZW5zIGFyZSBtaW50ZWQKCWlmIGVyciA6PSBrLlNhZmVCdXJuKAoJCWN0eCwKCQltc2cuUG9ydCwKCQltc2cuQ2hhbm5lbElELAoJCXNlbmRlciwKCQltc2cuQW1vdW50RGVub20sCgkJbXNnLkFtb3VudCwKCSk7IGVyciAhPSBuaWwgewoJCXJldHVybiAmYW1wO3R5cGVzLk1zZ1NlbmRTZWxsT3JkZXJSZXNwb25zZXt9LCBlcnIKCX0KCgkvLyBTYXZlIHRoZSB2b3VjaGVyIHJlY2VpdmVkIG9uIHRoZSBvdGhlciBjaGFpbiwgdG8gaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNvbHZlIGl0IGludG8gdGhlIG9yaWdpbmFsIGRlbm9tCglrLlNhdmVWb3VjaGVyRGVub20oY3R4LCBtc2cuUG9ydCwgbXNnLkNoYW5uZWxJRCwgbXNnLkFtb3VudERlbm9tKQoKCS8vIENvbnN0cnVjdCB0aGUgcGFja2V0Cgl2YXIgcGFja2V0IHR5cGVzLlNlbGxPcmRlclBhY2tldERhdGEKCglwYWNrZXQuU2VsbGVyID0gbXNnLlNlbmRlciAgLy8gJmx0Oy0gTWFudWFsbHkgc3BlY2lmeSB0aGUgc2VsbGVyIGhlcmUKCXBhY2tldC5BbW91bnREZW5vbSA9IG1zZy5BbW91bnREZW5vbQoJcGFja2V0LkFtb3VudCA9IG1zZy5BbW91bnQKCXBhY2tldC5QcmljZURlbm9tID0gbXNnLlByaWNlRGVub20KCXBhY2tldC5QcmljZSA9IG1zZy5QcmljZQoKCS8vIFRyYW5zbWl0IHRoZSBwYWNrZXQKCWVyciA9IGsuVHJhbnNtaXRTZWxsT3JkZXJQYWNrZXQoCgkJY3R4LAoJCXBhY2tldCwKCQltc2cuUG9ydCwKCQltc2cuQ2hhbm5lbElELAoJCWNsaWVudHR5cGVzLlplcm9IZWlnaHQoKSwKCQltc2cuVGltZW91dFRpbWVzdGFtcCwKCSkKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIGVycgoJfQoKCXJldHVybiAmYW1wO3R5cGVzLk1zZ1NlbmRTZWxsT3JkZXJSZXNwb25zZXt9LCBuaWwKfQo="}}),l._v(" "),b("h2",{attrs:{id:"create-the-onrecv-function"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#create-the-onrecv-function"}},[l._v("#")]),l._v(" Create the OnRecv Function")]),l._v(" "),b("ul",[b("li",[l._v("Update the buy order book")]),l._v(" "),b("li",[l._v("Distribute sold token to the buyer")]),l._v(" "),b("li",[l._v("Send the sell order to chain A after the fill attempt")])]),l._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9pYmNkZXgva2VlcGVyL3NlbGxfb3JkZXIuZ28KLy8gT25SZWN2U2VsbE9yZGVyUGFja2V0IHByb2Nlc3NlcyBwYWNrZXQgcmVjZXB0aW9uCmZ1bmMgKGsgS2VlcGVyKSBPblJlY3ZTZWxsT3JkZXJQYWNrZXQoY3R4IHNkay5Db250ZXh0LCBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwgZGF0YSB0eXBlcy5TZWxsT3JkZXJQYWNrZXREYXRhKSAocGFja2V0QWNrIHR5cGVzLlNlbGxPcmRlclBhY2tldEFjaywgZXJyIGVycm9yKSB7CgkvLyB2YWxpZGF0ZSBwYWNrZXQgZGF0YSB1cG9uIHJlY2VpdmluZwoJaWYgZXJyIDo9IGRhdGEuVmFsaWRhdGVCYXNpYygpOyBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gcGFja2V0QWNrLCBlcnIKCX0KCgkvLyBDaGVjayBpZiB0aGUgYnV5IG9yZGVyIGJvb2sgZXhpc3RzCglwYWlySW5kZXggOj0gdHlwZXMuT3JkZXJCb29rSW5kZXgocGFja2V0LlNvdXJjZVBvcnQsIHBhY2tldC5Tb3VyY2VDaGFubmVsLCBkYXRhLkFtb3VudERlbm9tLCBkYXRhLlByaWNlRGVub20pCglib29rLCBmb3VuZCA6PSBrLkdldEJ1eU9yZGVyQm9vayhjdHgsIHBhaXJJbmRleCkKCWlmICFmb3VuZCB7CgkJcmV0dXJuIHBhY2tldEFjaywgZXJyb3JzLk5ldygmcXVvdDt0aGUgcGFpciBkb2Vzbid0IGV4aXN0JnF1b3Q7KQoJfQoKCS8vIEZpbGwgc2VsbCBvcmRlcgoJcmVtYWluaW5nLCBsaXF1aWRhdGVkLCBnYWluLCBfIDo9IGJvb2suRmlsbFNlbGxPcmRlcih0eXBlcy5PcmRlcnsKCQlBbW91bnQ6IGRhdGEuQW1vdW50LAoJCVByaWNlOiAgZGF0YS5QcmljZSwKCX0pCgoJLy8gUmV0dXJuIHJlbWFpbmluZyBhbW91bnQgYW5kIGdhaW5zCglwYWNrZXRBY2suUmVtYWluaW5nQW1vdW50ID0gcmVtYWluaW5nLkFtb3VudAoJcGFja2V0QWNrLkdhaW4gPSBnYWluCgoJLy8gQmVmb3JlIGRpc3RyaWJ1dGluZyBzYWxlcywgd2UgcmVzb2x2ZSB0aGUgZGVub20KCS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBkZW5vbSByZWNlaXZlZCBjb21lcyBmcm9tIHRoaXMgY2hhaW4gb3JpZ2luYWxseQoJZmluYWxBbW91bnREZW5vbSwgc2F2ZWQgOj0gay5PcmlnaW5hbERlbm9tKGN0eCwgcGFja2V0LkRlc3RpbmF0aW9uUG9ydCwgcGFja2V0LkRlc3RpbmF0aW9uQ2hhbm5lbCwgZGF0YS5BbW91bnREZW5vbSkKCWlmICFzYXZlZCB7CgkJLy8gSWYgaXQgd2FzIG5vdCBmcm9tIHRoaXMgY2hhaW4gd2UgdXNlIHZvdWNoZXIgYXMgZGVub20KCQlmaW5hbEFtb3VudERlbm9tID0gVm91Y2hlckRlbm9tKHBhY2tldC5Tb3VyY2VQb3J0LCBwYWNrZXQuU291cmNlQ2hhbm5lbCwgZGF0YS5BbW91bnREZW5vbSkKCX0KCgkvLyBEaXNwYXRjaCBsaXF1aWRhdGVkIGJ1eSBvcmRlcnMKCWZvciBfLCBsaXF1aWRhdGlvbiA6PSByYW5nZSBsaXF1aWRhdGVkIHsKCQlsaXF1aWRhdGlvbiA6PSBsaXF1aWRhdGlvbgoKCQlhZGRyLCBlcnIgOj0gc2RrLkFjY0FkZHJlc3NGcm9tQmVjaDMyKGxpcXVpZGF0aW9uLkNyZWF0b3IpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBwYWNrZXRBY2ssIGVycgoJCX0KCgkJaWYgZXJyIDo9IGsuU2FmZU1pbnQoCgkJCWN0eCwKCQkJcGFja2V0LkRlc3RpbmF0aW9uUG9ydCwKCQkJcGFja2V0LkRlc3RpbmF0aW9uQ2hhbm5lbCwKCQkJYWRkciwKCQkJZmluYWxBbW91bnREZW5vbSwKCQkJbGlxdWlkYXRpb24uQW1vdW50LAoJCSk7IGVyciAhPSBuaWwgewoJCQlyZXR1cm4gcGFja2V0QWNrLCBlcnIKCQl9Cgl9CgoJLy8gU2F2ZSB0aGUgbmV3IG9yZGVyIGJvb2sKCWsuU2V0QnV5T3JkZXJCb29rKGN0eCwgYm9vaykKCglyZXR1cm4gcGFja2V0QWNrLCBuaWwKfQo="}}),l._v(" "),b("h2",{attrs:{id:"create-the-onacknowledgement-function"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#create-the-onacknowledgement-function"}},[l._v("#")]),l._v(" Create the OnAcknowledgement Function")]),l._v(" "),b("ul",[b("li",[l._v("Chain "),b("code",[l._v("Mars")]),l._v(" will store the remaining sell order in the sell order book and will distribute sold "),b("code",[l._v("MCX")]),l._v(" to the buyers and will distribute to the seller the price of the amount sold")]),l._v(" "),b("li",[l._v("On error we mint back the burned tokens")])]),l._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9pYmNkZXgva2VlcGVyL3NlbGxfb3JkZXIuZ28KZnVuYyAoayBLZWVwZXIpIE9uQWNrbm93bGVkZ2VtZW50U2VsbE9yZGVyUGFja2V0KGN0eCBzZGsuQ29udGV4dCwgcGFja2V0IGNoYW5uZWx0eXBlcy5QYWNrZXQsIGRhdGEgdHlwZXMuU2VsbE9yZGVyUGFja2V0RGF0YSwgYWNrIGNoYW5uZWx0eXBlcy5BY2tub3dsZWRnZW1lbnQpIGVycm9yIHsKCXN3aXRjaCBkaXNwYXRjaGVkQWNrIDo9IGFjay5SZXNwb25zZS4odHlwZSkgewoJY2FzZSAqY2hhbm5lbHR5cGVzLkFja25vd2xlZGdlbWVudF9FcnJvcjoKCQkvLyBJbiBjYXNlIG9mIGVycm9yIHdlIG1pbnQgYmFjayB0aGUgbmF0aXZlIHRva2VuCgkJcmVjZWl2ZXIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIoZGF0YS5TZWxsZXIpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBlcnIKCQl9CgoJCWlmIGVyciA6PSBrLlNhZmVNaW50KAoJCQljdHgsCgkJCXBhY2tldC5Tb3VyY2VQb3J0LAoJCQlwYWNrZXQuU291cmNlQ2hhbm5lbCwKCQkJcmVjZWl2ZXIsCgkJCWRhdGEuQW1vdW50RGVub20sCgkJCWRhdGEuQW1vdW50LAoJCSk7IGVyciAhPSBuaWwgewoJCQlyZXR1cm4gZXJyCgkJfQoKCQlyZXR1cm4gbmlsCgljYXNlICpjaGFubmVsdHlwZXMuQWNrbm93bGVkZ2VtZW50X1Jlc3VsdDoKCQkvLyBEZWNvZGUgdGhlIHBhY2tldCBhY2tub3dsZWRnbWVudAoJCXZhciBwYWNrZXRBY2sgdHlwZXMuU2VsbE9yZGVyUGFja2V0QWNrCiAgICAgICAgCgkJaWYgZXJyIDo9IHR5cGVzLk1vZHVsZUNkYy5Vbm1hcnNoYWxKU09OKGRpc3BhdGNoZWRBY2suUmVzdWx0LCAmYW1wO3BhY2tldEFjayk7IGVyciAhPSBuaWwgewoJCQkvLyBUaGUgY291bnRlci1wYXJ0eSBtb2R1bGUgZG9lc24ndCBpbXBsZW1lbnQgdGhlIGNvcnJlY3QgYWNrbm93bGVkZ21lbnQgZm9ybWF0CgkJCXJldHVybiBlcnJvcnMuTmV3KCZxdW90O2Nhbm5vdCB1bm1hcnNoYWwgYWNrbm93bGVkZ21lbnQmcXVvdDspCgkJfQoKCQkvLyBHZXQgdGhlIHNlbGwgb3JkZXIgYm9vawoJCXBhaXJJbmRleCA6PSB0eXBlcy5PcmRlckJvb2tJbmRleChwYWNrZXQuU291cmNlUG9ydCwgcGFja2V0LlNvdXJjZUNoYW5uZWwsIGRhdGEuQW1vdW50RGVub20sIGRhdGEuUHJpY2VEZW5vbSkKCQlib29rLCBmb3VuZCA6PSBrLkdldFNlbGxPcmRlckJvb2soY3R4LCBwYWlySW5kZXgpCgkJaWYgIWZvdW5kIHsKCQkJcGFuaWMoJnF1b3Q7c2VsbCBvcmRlciBib29rIG11c3QgZXhpc3QmcXVvdDspCgkJfQoKCQkvLyBBcHBlbmQgdGhlIHJlbWFpbmluZyBhbW91bnQgb2YgdGhlIG9yZGVyCgkJaWYgcGFja2V0QWNrLlJlbWFpbmluZ0Ftb3VudCAmZ3Q7IDAgewoJCQlfLCBlcnIgOj0gYm9vay5BcHBlbmRPcmRlcigKCQkJCWRhdGEuU2VsbGVyLAoJCQkJcGFja2V0QWNrLlJlbWFpbmluZ0Ftb3VudCwKCQkJCWRhdGEuUHJpY2UsCgkJCSkKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCgkJCS8vIFNhdmUgdGhlIG5ldyBvcmRlciBib29rCgkJCWsuU2V0U2VsbE9yZGVyQm9vayhjdHgsIGJvb2spCgkJfQoKCgkJLy8gTWludCB0aGUgZ2FpbnMKCQlpZiBwYWNrZXRBY2suR2FpbiAmZ3Q7IDAgewoJCQlyZWNlaXZlciwgZXJyIDo9IHNkay5BY2NBZGRyZXNzRnJvbUJlY2gzMihkYXRhLlNlbGxlcikKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCgkJCWZpbmFsUHJpY2VEZW5vbSwgc2F2ZWQgOj0gay5PcmlnaW5hbERlbm9tKGN0eCwgcGFja2V0LlNvdXJjZVBvcnQsIHBhY2tldC5Tb3VyY2VDaGFubmVsLCBkYXRhLlByaWNlRGVub20pCgkJCWlmICFzYXZlZCB7CgkJCQkvLyBJZiBpdCB3YXMgbm90IGZyb20gdGhpcyBjaGFpbiB3ZSB1c2Ugdm91Y2hlciBhcyBkZW5vbQoJCQkJZmluYWxQcmljZURlbm9tID0gVm91Y2hlckRlbm9tKHBhY2tldC5EZXN0aW5hdGlvblBvcnQsIHBhY2tldC5EZXN0aW5hdGlvbkNoYW5uZWwsIGRhdGEuUHJpY2VEZW5vbSkKCQkJfQoJCQlpZiBlcnIgOj0gay5TYWZlTWludCgKCQkJCWN0eCwKCQkJCXBhY2tldC5Tb3VyY2VQb3J0LAoJCQkJcGFja2V0LlNvdXJjZUNoYW5uZWwsCgkJCQlyZWNlaXZlciwKCQkJCWZpbmFsUHJpY2VEZW5vbSwKCQkJCXBhY2tldEFjay5HYWluLAoJCQkpOyBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoJCX0KCgkJcmV0dXJuIG5pbAoJZGVmYXVsdDoKCQkvLyBUaGUgY291bnRlci1wYXJ0eSBtb2R1bGUgZG9lc24ndCBpbXBsZW1lbnQgdGhlIGNvcnJlY3QgYWNrbm93bGVkZ21lbnQgZm9ybWF0CgkJcmV0dXJuIGVycm9ycy5OZXcoJnF1b3Q7aW52YWxpZCBhY2tub3dsZWRnbWVudCBmb3JtYXQmcXVvdDspCgl9Cn0K"}}),l._v(" "),b("h2",{attrs:{id:"create-the-ontimeout-function"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#create-the-ontimeout-function"}},[l._v("#")]),l._v(" Create the OnTimeout Function")]),l._v(" "),b("p",[l._v("If a timeout occurs, we mint back the native token.")]),l._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9pYmNkZXgva2VlcGVyL3NlbF9vcmRlci5nbwpmdW5jIChrIEtlZXBlcikgT25UaW1lb3V0U2VsbE9yZGVyUGFja2V0KGN0eCBzZGsuQ29udGV4dCwgcGFja2V0IGNoYW5uZWx0eXBlcy5QYWNrZXQsIGRhdGEgdHlwZXMuU2VsbE9yZGVyUGFja2V0RGF0YSkgZXJyb3IgewoJLy8gSW4gY2FzZSBvZiBlcnJvciB3ZSBtaW50IGJhY2sgdGhlIG5hdGl2ZSB0b2tlbgoJcmVjZWl2ZXIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIoZGF0YS5TZWxsZXIpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJaWYgZXJyIDo9IGsuU2FmZU1pbnQoCgkJY3R4LAoJCXBhY2tldC5Tb3VyY2VQb3J0LAoJCXBhY2tldC5Tb3VyY2VDaGFubmVsLAoJCXJlY2VpdmVyLAoJCWRhdGEuQW1vdW50RGVub20sCgkJZGF0YS5BbW91bnQsCgkpOyBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJcmV0dXJuIG5pbAp9Cg=="}})],1)}),[],!1,null,null,null);c.default=t.exports}}]);