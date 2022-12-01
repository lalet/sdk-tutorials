(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{768:function(e,t,o){"use strict";o.r(t);var s=o(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"control-structures-in-go"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#control-structures-in-go"}},[e._v("#")]),e._v(" Control Structures in Go")]),e._v(" "),o("p",[e._v("It is time to discuss control structures in Go. You will start with the "),o("code",[e._v("if")]),e._v(" statement.")]),e._v(" "),o("h2",{attrs:{id:"if-statement"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#if-statement"}},[e._v("#")]),e._v(" "),o("code",[e._v("if")]),e._v(" statement")]),e._v(" "),o("p",[e._v("The syntax is as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWYgYm9vbGVhbl9leHByZXNzaW9uXzEgewogICAgLy8gZXhlY3V0ZSwgaWYgYm9vbGVhbl9leHByZXNzaW9uXzEgaXMgdHJ1ZQp9IGVsc2UgaWYgYm9vbGVhbl9leHByZXNzaW9uXzIgewogICAgLy8gZXhlY3V0ZSwgaWYgYm9vbGVhbl9leHByZXNzaW9uXzEgaXMgZmFsc2UgYnV0IGJvb2xlYW5fZXhwcmVzc2lvbl8yIAogICAgLy8gaXMgdHJ1ZQovLyB9IGVsc2UgaWYgLi4uCn0gZWxzZSBpZiBib29sZWFuX2V4cHJlc3Npb25fbiB7CiAgICAvLyBleGVjdXRlLCBpZiBib29sZWFuX2V4cHJlc3Npb25fMSwgLi4uICwgYm9vbGVhbl9leHByZXNzaW9uXyhuLTEpIGFyZQogICAgLy8gZmFsc2UsIGJ1dCBib29sZWFuX2V4cHJlc3Npb25fbiBpcyB0cnVlCn0gZWxzZSB7CiAgICAvLyBleGVjdXRlLCBpZiBib29sZWFuX2V4cHJlc3Npb25fMSwgLi4uICwgYm9vbGVhbl9leHByZXNzaW9uX24gYXJlIGZhbHNlCn0K"}}),e._v(" "),o("p",[e._v("You need brackets "),o("code",[e._v("{}")]),e._v(" for each "),o("code",[e._v("if")]),e._v(" statement. The "),o("code",[e._v("{")]),e._v(" bracket needs to be on the same line as the "),o("code",[e._v("if")]),e._v(" statement.")]),e._v(" "),o("p",[e._v("If you want to use an "),o("code",[e._v("else if")]),e._v(" or "),o("code",[e._v("else")]),e._v(" statement, note that they have to be on the same line as the "),o("code",[e._v("}")]),e._v(" bracket of the previous block.")]),e._v(" "),o("p",[e._v("You can also give "),o("code",[e._v("if")]),e._v(" or "),o("code",[e._v("else if")]),e._v(" a short statement to execute before the condition:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWYgcyA6PSAxMCUyOyBzPT0wIHsKICAgIGZtdC5QcmludGxuKHMpCn0K"}}),e._v(" "),o("p",[e._v("Boolean expressions evaluate for "),o("code",[e._v("true")]),e._v(" or "),o("code",[e._v("false")]),e._v(". The comparison operators are:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"PT0gZXF1YWwKIT0gbm90IGVxdWFsCiZsdDsgbGVzcwombHQ7PSBsZXNzIG9yIGVxdWFsCiZndDsgZ3JlYXRlcgomZ3Q7PSBncmVhdGVyIG9yIGVxdWFsCg=="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("if")]),e._v(" statement is also used for error handling. You will often see code like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"IGlmIGVyciAhPSBuaWwgewogICAgICAgIGZtdC5QcmludGYoZXJyKQogICAgfQo="}}),e._v(" "),o("h2",{attrs:{id:"switch-statement"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#switch-statement"}},[e._v("#")]),e._v(" "),o("code",[e._v("switch")]),e._v(" statement")]),e._v(" "),o("p",[e._v("The syntax of a "),o("code",[e._v("switch")]),e._v(" statement is as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3dpdGNoIGV4cHJlc3Npb24gewogICAgY2FzZSB2YWx1ZV8xOgogICAgICAgIC8vIGRvIHNvbWV0aGluZyBpZiBleHByZXNzaW9uIGlzIGVxdWFsIHRvIHZhbHVlXzEKICAgIGNhc2UgdmFsdWVfMjoKICAgICAgICAvLyBkbyBzb21ldGhpbmcgaWYgZXhwcmVzc2lvbiBpcyBlcXVhbCB0byB2YWx1ZV8yCiAgICAvLyAuLi4KICAgIGNhc2UgdmFsdWVfbjoKICAgICAgICAvLyBkbyBzb21ldGhpbmcgaWYgZXhwcmVzc2lvbiBpcyBlcXVhbCB0byB2YWx1ZV9uCiAgICBkZWZhdWx0OgogICAgICAgIC8vIGRvIHNvbWV0aGluZyBpZiB2YWx1ZV8xIC4uLiB2YWx1ZV9uIGRvZXMgbm90IG1hdGNoIGV4cHJlc3Npb24KfQo="}}),e._v(" "),o("p",[e._v("Cases are evaluated from top to bottom. The "),o("code",[e._v("switch")]),e._v(" finishes if a "),o("code",[e._v("case")]),e._v(" succeeds.")]),e._v(" "),o("HighlightBox",{attrs:{type:"note"}},[o("p",[o("code",[e._v("values_x")]),e._v(" must have the same type as "),o("code",[e._v("expression")]),e._v(".")])]),e._v(" "),o("p",[e._v("If you do not give an expression to "),o("code",[e._v("switch")]),e._v(", then Go interprets it as "),o("code",[e._v("switch true")]),e._v(". This provides another way to write "),o("code",[e._v("if-else if-else")]),e._v(" chains:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3dpdGNoIHsKICAgIGNhc2UgYm9vbGVhbl9leHByZXNzaW9uXzE6CiAgICAgICAgLy8gaWYgdHJ1ZSBpcyBlcXVhbCB0byBib29sZWFuX2V4cHJlc3Npb25fMQogICAgICAgIC8vIHdoaWNoIGlzIHRoZSBzYW1lIGFzIGlmIGJvb2xlYW5fZXhwcmVzc2lvbl8xIGlzIHRydWUuCiAgICBjYXNlIGJvb2xlYW5fZXhwcmVzc2lvbl8yOgogICAgICAgIC8vIGVsc2UgaWYKICAgIC8vIC4uLgogICAgY2FzZSBib29sZWFuX2V4cHJlc3Npb25fbjoKICAgICAgICAvLyBlbHNlIGlmCiAgICBkZWZhdWx0OiAKICAgICAgICAvLyBlbHNlCn0K"}}),e._v(" "),o("HighlightBox",{attrs:{type:"note"}},[o("p",[e._v("Unlike other languages (for example "),o("strong",[e._v("C")]),e._v("), you do not need to "),o("code",[e._v("break")]),e._v(" to avoid fallthrough. In Go, you need to "),o("code",[e._v("fallthrough")]),e._v(" explicitly. "),o("code",[e._v("fallthrough")]),e._v(" will enter the next case, even if the expression does not match.")])]),e._v(" "),o("p",[e._v("There are so-called type switches in Go:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyIGkgaW50ZXJmYWNle30Kc3dpdGNoIGkuKHR5cGUpIHsKICAgIGNhc2UgYm9vbDoKICAgICAgICAvLyBpZiBpIGhhcyB0eXBlIGJvb2wKICAgICAgICBmbXQuUHJpbnRmKCZxdW90O1ZhbHVlIG9mIGkgaXMgJXZcbiZxdW90OywgaS4oYm9vbCkpCiAgICBjYXNlIGludDMyLCBpbjY0OgogICAgICAgIC8vIC4uLgogICAgLy8gLi4uCiAgICBkZWZhdWx0OgogICAgICAgIC8vIGkgaGFzIGFub3RoZXIgdHlwZQp9Cg=="}}),e._v(" "),o("HighlightBox",{attrs:{type:"note"}},[o("p",[e._v("You can use multiple value cases, like "),o("code",[e._v("case 1, 2, 4, 9, 16:")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"for-statement"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#for-statement"}},[e._v("#")]),e._v(" "),o("code",[e._v("for")]),e._v(" statement")]),e._v(" "),o("p",[o("code",[e._v("for")]),e._v(" is the only looping statement in Go. The syntax is as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Zm9yIGluaXRfc3RhdGVtZW50OyBjb25kaXRpb25fZXhwcmVzc2lvbjsgcG9zdF9zdGF0ZW1lbnQgewogICAgLy8gZG8gc29tZXRoaW5nCn0K"}}),e._v(" "),o("p",[e._v("Before the iterations start, it will first execute the "),o("code",[e._v("init_statement")]),e._v(". The loop body will be executed as long as "),o("code",[e._v("condition_expression")]),e._v(" is true. The "),o("code",[e._v("post_statement")]),e._v(" will be executed at the end of every iteration.")]),e._v(" "),o("HighlightBox",{attrs:{type:"note"}},[o("p",[o("code",[e._v("init_statement")]),e._v(" and "),o("code",[e._v("post_statement")]),e._v(" are optional. Without them, the "),o("code",[e._v("for")]),e._v(" statement is like the "),o("code",[e._v("while")]),e._v(" statement in other languages.")])]),e._v(" "),o("p",[e._v("You can use "),o("code",[e._v("continue")]),e._v(" to skip the iteration or "),o("code",[e._v("break")]),e._v(" to terminate the execution, like in C, C#, Java, etc.")]),e._v(" "),o("HighlightBox",{attrs:{type:"reading"}},[o("p",[o("strong",[e._v("Further reading:")])]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://blog.golang.org/errors-are-values",target:"_blank",rel:"noopener noreferrer"}},[e._v("Errors are values"),o("OutboundLink")],1)])])]),e._v(" "),o("HighlightBox",{attrs:{type:"synopsis"}},[o("p",[e._v("To summarize, this section has explored:")]),e._v(" "),o("ul",[o("li",[e._v("Control structures in Go, and the syntax used by the "),o("code",[e._v("if")]),e._v(" statement, the "),o("code",[e._v("switch")]),e._v(" statement, and the "),o("code",[e._v("for")]),e._v(" statement.")]),e._v(" "),o("li",[e._v("How unlike other languages Go does not need to "),o("code",[e._v("break")]),e._v(" to avoid fallthrough, instead you need to provide the "),o("code",[e._v("fallthrough")]),e._v(" instruction explicitly.")])])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);