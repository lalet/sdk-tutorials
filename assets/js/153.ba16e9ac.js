(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{764:function(e,t,o){"use strict";o.r(t);var a=o(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"go-introduction-first-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#go-introduction-first-steps"}},[e._v("#")]),e._v(" Go Introduction - First Steps")]),e._v(" "),o("p",[e._v("Golang (Go) is an open-source, statically typed, and compiled programming language introduced by Google and first released in 2012. It has a BSD-style license. Its Git repository is located at "),o("a",{attrs:{href:"https://go.googlesource.com/go",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://go.googlesource.com/go"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Start with the basics. In this section, you will install Go and learn some general things about it.")]),e._v(" "),o("h2",{attrs:{id:"install"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),o("p",[e._v("Installing Go depends on your machine. See the "),o("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting Started page"),o("OutboundLink")],1),e._v(" and follow the instructions to install Go.")]),e._v(" "),o("h2",{attrs:{id:"workflow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#workflow"}},[e._v("#")]),e._v(" Workflow")]),e._v(" "),o("p",[e._v("Go has a different workflow from most other programming tools. You have all Go dependencies contained in the "),o("code",[e._v("GOPATH")]),e._v(". You can print it by typing "),o("code",[e._v("$ go env GOPATH")]),e._v(" in your console. For more information about "),o("code",[e._v("GOPATH")]),e._v(", type "),o("code",[e._v("$ go help gopath")]),e._v(".")]),e._v(" "),o("p",[e._v("A version control system is helpful because you have only one workspace. You should use Git for this.")]),e._v(" "),o("h2",{attrs:{id:"hello-world"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[e._v("#")]),e._v(" Hello, World!")]),e._v(" "),o("p",[e._v("Let's start with the ever-popular \"Hello, World!\" program. Let's see how it looks in Go:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCmltcG9ydCAmcXVvdDtmbXQmcXVvdDsKZnVuYyBtYWluKCkgewogICAgZm10LlByaW50ZigmcXVvdDtIZWxsbywgV29ybGQhXG4mcXVvdDspCn0K"}}),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[o("a",{attrs:{href:"https://go.dev/play/p/1u5bSZlh80h",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test it online"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("Function names determine visibility outside of packages. "),o("code",[e._v("Printf")]),e._v("'s first character is upper case and this means it's visible outside of "),o("code",[e._v("fmt")]),e._v("– a.k.a public. Package names are always written in lower case, like "),o("code",[e._v("fmt")]),e._v(' (short for "format").')])]),e._v(" "),o("p",[e._v("Every Go program starts with the package declaration. Each package consists of one or more Go source files in a single directory. If the name of the package is "),o("code",[e._v("main")]),e._v(", Go creates an executable file.")]),e._v(" "),o("p",[e._v("After package declaration, import the package "),o("code",[e._v("fmt")]),e._v('. Note that the package name is the last element of the package\'s file path. For example, if you import the package "lib/math", then you use it as "math".')]),e._v(" "),o("p",[o("code",[e._v("fmt")]),e._v(" implements input and output, and is part of Go's standard library. Later you are going to describe some of its functions in more detail.")]),e._v(" "),o("p",[e._v("Execution starts in the function called "),o("code",[e._v("main()")]),e._v(".")]),e._v(" "),o("p",[e._v("This function simply calls the Go I/O function "),o("code",[e._v("Printf()")]),e._v(" from the package "),o("code",[e._v("fmt")]),e._v(".")]),e._v(" "),o("p",[e._v("Now compile this program. Create the file "),o("code",[e._v("hello.go")]),e._v(" in a folder of your choice. In a terminal:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"JCBnbyBtb2QgaW5pdCBoZWxsbwokIGdvIGJ1aWxkCg=="}}),e._v(" "),o("p",[e._v("If all goes well, "),o("code",[e._v("go")]),e._v(" builds the executable. Go only prints errors, so you should not see any output or another command prompt unless something goes wrong.")]),e._v(" "),o("p",[e._v("Now test your program:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Li9oZWxsbwo="}}),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("If you use "),o("code",[e._v("go install")]),e._v(" instead of "),o("code",[e._v("go build")]),e._v(", Go installs the executable in "),o("code",[e._v("$GOPATH/bin/")]),e._v(".")])]),e._v(" "),o("HighlightBox",{attrs:{type:"reading"}},[o("p",[o("strong",[e._v("Further readings")])]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go's Getting Started Page"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://thenewstack.io/understanding-golang-packages/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understanding Golang Packages"),o("OutboundLink")],1)])])]),e._v(" "),o("HighlightBox",{attrs:{type:"synopsis"}},[o("p",[e._v("To summarize, this section has explored:")]),e._v(" "),o("ul",[o("li",[e._v("How to install Golang (Go), an open-source, statically typed, and compiled programming language.")]),e._v(" "),o("li",[e._v('The Go workflow, which differs from most other programming tools and is demonstrated here using the "Hello, World!" example program.')])])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);