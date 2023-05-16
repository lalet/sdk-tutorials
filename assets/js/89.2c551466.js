(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{707:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("HighlightBox",{attrs:{type:"prerequisite"}},[o("p",[e._v("It is recommended to first read the following sections to better understand context:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/3-transactions.html"}},[e._v("Transactions")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/4-messages.html"}},[e._v("Messages")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/5-modules.html"}},[e._v("Modules")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/8-base-app.html"}},[e._v("BaseApp")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/9-queries.html"}},[e._v("Queries")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/10-events.html"}},[e._v("Events")])],1)])]),e._v(" "),o("HighlightBox",{attrs:{type:"learning"}},[o("p",[o("code",[e._v("Context")]),e._v(" is the setting in which transactions execute, and is the sum of all pertinent information at runtime. Here you will find out what transaction context means in detail and learn more about the important elements that together form the execution context.")])]),e._v(" "),o("p",[e._v("Transactions execute in a context. The context includes information about the current state of the application, the block, and the transaction.")]),e._v(" "),o("p",[e._v("Context is represented as data structures that carry information about the current state of the application and are intended to be passed from function to function. Context provides access to branched storage, that is a safe branch of the entire state, as well as useful objects and information, like "),o("code",[e._v("gasMeter")]),e._v(", block height, and consensus parameters.")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("The Cosmos SDK context is a custom data structure that contains Go's stdlib context as its base. It has many additional types within its definition that are specific to the Cosmos SDK.")])]),e._v(" "),o("p",[e._v("Context is integral to transaction processing as it allows modules to easily access their respective store in the multistore and retrieve transactional context such as the block header and gas meter.")]),e._v(" "),o("h2",{attrs:{id:"context-properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context-properties"}},[e._v("#")]),e._v(" Context properties")]),e._v(" "),o("p",[e._v("The context has the following properties:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Context:")]),e._v(" the base type is a Go Context.")]),e._v(" "),o("li",[o("strong",[e._v("Multistore:")]),e._v(" every application's "),o("code",[e._v("BaseApp")]),e._v(" contains a "),o("code",[e._v("CommitMultiStore")]),e._v(", which is provided when a context is created. Calling the "),o("code",[e._v("KVStore()")]),e._v(" and "),o("code",[e._v("TransientStore()")]),e._v(" methods allows modules to fetch their respective "),o("code",[e._v("KVStore")]),e._v("s using their unique "),o("code",[e._v("StoreKey")]),e._v("s.")]),e._v(" "),o("li",[o("strong",[e._v("ABCI Header:")]),e._v(" the header is an ABCI type. It carries important information about the state of the blockchain, such as block height and the proposer of the current block.")]),e._v(" "),o("li",[o("strong",[e._v("Chain ID:")]),e._v(" the unique identification number of the blockchain a block pertains to.")]),e._v(" "),o("li",[o("strong",[e._v("Transaction bytes:")]),e._v(" the []byte representation of a transaction is processed using the context.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("Every transaction is processed by various parts of the Cosmos SDK and consensus engine (for example CometBFT) throughout its lifecycle, some of which do not have any understanding of transaction types. Thus, transactions are marshaled into a generic "),o("code",[e._v("[]byte")]),e._v(" type using some kind of encoding format such as Amino.")])]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Logger:")]),e._v(" a logger from the Tendermint libraries. "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/libs/log/logger.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn more about logs here"),o("OutboundLink")],1),e._v(". Modules call this method to create their unique module-specific logger.")]),e._v(" "),o("li",[o("strong",[o("code",[e._v("VoteInfo")]),e._v(":")]),e._v(" a list of the ABCI type "),o("code",[e._v("VoteInfo")]),e._v(", which includes the name of a validator and a boolean indicating whether they have signed the block.")]),e._v(" "),o("li",[o("strong",[e._v("Gas meters:")]),e._v(" specifically, a "),o("code",[e._v("gasMeter")]),e._v(" for the transaction currently being processed, using the context and a "),o("code",[e._v("blockGasMeter")]),e._v(" for the entire block it belongs to.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("Users specify how much in fees they wish to pay for the execution of their transaction. These gas meters keep track of how much gas has been used in the transaction or block so far. If the gas meter runs out, execution halts.")])]),e._v(" "),o("ul",[o("li",[o("strong",[o("code",[e._v("CheckTx")]),e._v(" mode:")]),e._v(" a boolean value indicating whether a transaction should be processed in "),o("code",[e._v("CheckTx")]),e._v(" or "),o("code",[e._v("DeliverTx")]),e._v(" mode.")]),e._v(" "),o("li",[o("strong",[e._v("Min gas price:")]),e._v(" the minimum gas price a node is willing to take to include a transaction in its block. This price is a local value configured by each node individually, and should therefore not be used in any functions in sequences leading to state transitions.")]),e._v(" "),o("li",[o("strong",[e._v("Consensus params:")]),e._v(" the ABCI type "),o("code",[e._v("Consensus Parameters")]),e._v(", which specifies certain limits for the blockchain, such as maximum gas for a block.")]),e._v(" "),o("li",[o("strong",[e._v("Event manager:")]),e._v(" allows any caller with access to a context to emit events. Modules may define module-specific events by defining various types and attributes, or by using the common definitions found in "),o("code",[e._v("types/")]),e._v(". Clients can subscribe or query for these events. These events are collected through "),o("code",[e._v("DeliverTx")]),e._v(", "),o("code",[e._v("BeginBlock")]),e._v(", and "),o("code",[e._v("EndBlock")]),e._v(" and are returned to CometBFT for indexing.")])]),e._v(" "),o("h2",{attrs:{id:"golang-context-package"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#golang-context-package"}},[e._v("#")]),e._v(" Golang Context Package")]),e._v(" "),o("p",[e._v("A context is an immutable data structure that carries request-scoped data across APIs and processes. Contexts are also designed to enable concurrency and to be used in Go routines.")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("A basic context is defined in the "),o("a",{attrs:{href:"https://pkg.go.dev/context",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang Context Package"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[e._v("Contexts are intended to be immutable: they should never be edited. The convention is to instead create a child context from its parent using a "),o("code",[e._v("With")]),e._v(" function. The Golang Context Package documentation instructs developers to "),o("a",{attrs:{href:"https://pkg.go.dev/context",target:"_blank",rel:"noopener noreferrer"}},[e._v("explicitly pass a context "),o("code",[e._v("ctx")]),o("OutboundLink")],1),e._v(" as the first argument of a process.")]),e._v(" "),o("h2",{attrs:{id:"store-branching"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#store-branching"}},[e._v("#")]),e._v(" Store branching")]),e._v(" "),o("p",[e._v("The context contains a "),o("code",[e._v("MultiStore")]),e._v(", which allows for branching and caching functionality using "),o("code",[e._v("CacheMultiStore")]),e._v(". Queries in "),o("code",[e._v("CacheMultiStore")]),e._v(" are cached to avoid future round trips.")]),e._v(" "),o("p",[e._v("Each "),o("code",[e._v("KVStore")]),e._v(" is branched in a safe and isolated ephemeral storage. Processes are free to write changes to the "),o("code",[e._v("CacheMultiStore")]),e._v(". If a state-transition sequence is performed without issue, the store branch can be committed to the underlying store at the end of the sequence, or it can be disregarded if something goes wrong.")]),e._v(" "),o("h2",{attrs:{id:"the-pattern-of-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-pattern-of-usage"}},[e._v("#")]),e._v(" The pattern of usage")]),e._v(" "),o("p",[e._v("The usage pattern for context is as follows:")]),e._v(" "),o("ol",[o("li",[e._v("Process receives a context "),o("code",[e._v("ctx")]),e._v(" from its parent process, which provides information needed to perform the process.")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("ctx.ms")]),e._v(" is a branched store, meaning that a branch of the multistore is made so that the process can make changes to the state as it executes without changing the original "),o("code",[e._v("ctx.ms")]),e._v(". This is useful to protect the underlying multistore in case the changes need to be reverted at some point in the execution.")]),e._v(" "),o("li",[e._v("The process may read and write from "),o("code",[e._v("ctx")]),e._v(" as it is executing. It may call a subprocess and pass "),o("code",[e._v("ctx")]),e._v(" to them as needed.")]),e._v(" "),o("li",[e._v("When a subprocess returns, it checks the result for success or failure. In case of a failure, nothing needs to be done - the branch "),o("code",[e._v("ctx")]),e._v(" is simply discarded. If it is successful, the changes made to the "),o("code",[e._v("CacheMultiStore")]),e._v(" can be committed to the original ctx.ms via "),o("code",[e._v("Write()")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[e._v("#")]),e._v(" Process")]),e._v(" "),o("p",[e._v("Prior to calling "),o("code",[e._v("runMsgs")]),e._v(" on any messages in the transaction, "),o("code",[e._v("app.cacheTxContext()")]),e._v(" is used to branch and cache the context and multistore:")]),e._v(" "),o("ul",[o("li",[e._v("For "),o("code",[e._v("runMsgCtx")]),e._v(", the context with the branched store is used in "),o("code",[e._v("runMsgs")]),e._v(" to return a result.")]),e._v(" "),o("li",[e._v("If the process is running in "),o("code",[e._v("checkTxMode")]),e._v(", there is no need to write the changes. The result is returned immediately.")]),e._v(" "),o("li",[e._v("If the process is running in "),o("code",[e._v("deliverTxMode")]),e._v(" and the result indicates a successful run over all the messages, the branched multistore is written back to the original.")])]),e._v(" "),o("ExpansionPanel",{attrs:{title:"Show me some code for my checkers blockchain"}},[o("p",[o("strong",[e._v("Game deadline")])]),e._v(" "),o("p",[e._v("When a game is created or a move is played, the game needs to set its deadline some time in the future. The time it takes as "),o("em",[e._v("now")]),e._v(" comes from the context.")]),e._v(" "),o("p",[e._v("To get this, you need a function that looks like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBHZXROZXh0RGVhZGxpbmUoY3R4IHNkay5Db250ZXh0KSB0aW1lLlRpbWUgewogICAgcmV0dXJuIGN0eC5CbG9ja1RpbWUoKS5BZGQoTWF4VHVybkR1cmF0aW9uKQp9Cg=="}}),e._v(" "),o("p",[e._v("After that, it is a matter of serializing this data so it is stored alongside the other parameters of the game, and of deserializing it when checking whether it has reached the deadline.")]),e._v(" "),o("p",[o("strong",[e._v("Gas costs")])]),e._v(" "),o("p",[e._v("Another point where the context is explicitly used is when you want to make your players pay with gas for operations you specify. This gas fee comes on top of the configured standard fee for transactions on your chain. Propose some ratios, which would have to be adjusted so they make sense compared to the base transaction costs:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Create a game:")]),e._v(" costs "),o("strong",[e._v("15_000")]),e._v(". This should also include the costs of "),o("em",[e._v("closing")]),e._v(" a game. If that was not the case, a losing player would be incentivized to let the game hit its timeout to penalize the winner.")]),e._v(" "),o("li",[o("strong",[e._v("Play a move:")]),e._v(" costs "),o("strong",[e._v("1_000")]),e._v(". You could also make the final move cost zero when the player loses the game, to incentivize the player to conclude the game instead of letting it hit the timeout.")]),e._v(" "),o("li",[o("strong",[e._v("Reject a game:")]),e._v(" could cost "),o("strong",[e._v("zero")]),e._v(", because you want to incentivize cleaning up the state. This transaction would still cost what your chain is configured to charge for basic transactions. So you can in fact refund some gas to the player, for instance "),o("strong",[e._v("14_000")]),e._v(".")])]),e._v(" "),o("p",[e._v("So you define the cost:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgQ3JlYXRlR2FtZUdhcyA9IDE1XzAwMAogICAgUGxheU1vdmVHYXMgICA9IDFfMDAwCiAgICBSZWplY3RHYW1lUmVmdW5kR2FzID0gMTRfMDAwCikK"}}),e._v(" "),o("p",[e._v("Next you add the line in your "),o("code",[e._v("MsgCreateGame")]),e._v(" handler, which already has access to the context:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBtc2dTZXJ2ZXIpIENyZWF0ZUdhbWUoZ29DdHggY29udGV4dC5Db250ZXh0LCBtc2cgKnR5cGVzLk1zZ0NyZWF0ZUdhbWUpICgqdHlwZXMuTXNnQ3JlYXRlR2FtZVJlc3BvbnNlLCBlcnJvcikgewogICAgLi4uCiAgICBjdHguR2FzTWV0ZXIoKS5Db25zdW1lR2FzKHR5cGVzLkNyZWF0ZUdhbWVHYXMsICZxdW90O0NyZWF0ZSBnYW1lJnF1b3Q7KQogICAgLi4uCn0K"}}),e._v(" "),o("p",[e._v("As for the refund when rejecting, you have to make sure that you are not trying to refund more than what was already consumed:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBtc2dTZXJ2ZXIpIFJlamVjdEdhbWUoZ29DdHggY29udGV4dC5Db250ZXh0LCBtc2cgKnR5cGVzLk1zZ1JlamVjdEdhbWUpICgqdHlwZXMuTXNnUmVqZWN0R2FtZVJlc3BvbnNlLCBlcnJvcikgewogICAgLi4uCiAgICByZWZ1bmQgOj0gdWludDY0KHR5cGVzLlJlamVjdEdhbWVSZWZ1bmRHYXMpCiAgICBpZiBjb25zdW1lZCA6PSBjdHguR2FzTWV0ZXIoKS5HYXNDb25zdW1lZCgpOyBjb25zdW1lZCAmbHQ7IHJlZnVuZCB7CiAgICAgICAgcmVmdW5kID0gY29uc3VtZWQKICAgIH0KICAgIGN0eC5HYXNNZXRlcigpLlJlZnVuZEdhcyhyZWZ1bmQsICZxdW90O1JlamVjdCBnYW1lJnF1b3Q7KQogICAgLi4uCn0K"}})],1),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("If you want to go beyond out-of-context code samples like the above and see in more detail how to define these features, go to "),o("RouterLink",{attrs:{to:"/hands-on-exercise/1-ignite-cli/"}},[e._v("Run Your Own Cosmos Chain")]),e._v(".\n"),o("br"),o("br"),e._v("\nMore precisely, you can jump to:")],1),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/1-game-deadline.html"}},[e._v("Keep an Up-To-Date Game Deadline")]),e._v(", where you add the deadline feature to your chain")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/6-gas-meter.html"}},[e._v("Incentivize Players")]),e._v(", to implement gas costs")],1)])]),e._v(" "),o("HighlightBox",{attrs:{type:"synopsis"}},[o("p",[e._v("To summarize, this section has explored:")]),e._v(" "),o("ul",[o("li",[e._v("The importance of transaction context, which is the sum of all pertinent information about the application, the block, and the transaction itself at runtime.")]),e._v(" "),o("li",[e._v("The specific properties of the context, their functions, and the processes which make use of them.")]),e._v(" "),o("li",[e._v("The pattern of usage for context.")]),e._v(" "),o("li",[e._v("The process which precedes running any transaction messages to branch and cache both the context and multistore.")])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);