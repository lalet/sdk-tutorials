(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{798:function(e,t,o){"use strict";o.r(t);var n=o(1),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"prepare-and-connect-to-other-nodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prepare-and-connect-to-other-nodes"}},[e._v("#")]),e._v(" Prepare and Connect to Other Nodes")]),e._v(" "),o("p",[e._v("With the genesis created and received, a node operator needs to join the eventual network. In practice this means two things:")]),e._v(" "),o("ol",[o("li",[e._v("To open your node to connections from other nodes.")]),e._v(" "),o("li",[e._v("To know where the other nodes are, or at least a subset of them, so that your node can attempt to connect to them.")])]),e._v(" "),o("p",[e._v("In this section, you concern yourself with CometBFT and the peer-to-peer network. Other niceties like incorporating gRPC and REST into your Cosmos application are different concerns.")]),e._v(" "),o("h2",{attrs:{id:"set-up"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-up"}},[e._v("#")]),e._v(" Set up")]),e._v(" "),o("p",[e._v("As a node operator, from the time of genesis or at any time in the future, and on each machine, you first run an "),o("code",[e._v("init")]),e._v(" command to at least set up the folders and pick an ASCII-only moniker:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCAuL215cHJvamVjdGQgaW5pdCBzdG9uZS1hZ2UtMQo="}}),e._v(" "),o("p",[e._v("Overwrite the genesis created with the actual agreed one. While you are doing so, you can make it read-only:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjdXJsIGh0dHA6Ly9leGFtcGxlLmNvbS9nZW5lc2lzLmpzb24gLW8gfi8ubXlwcm9qZWN0ZC9jb25maWcvZ2VuZXNpcy5qc29uCiQgY2htb2QgYS13eCB+Ly5teXByb2plY3RkL2NvbmZpZy9nZW5lc2lzLmpzb24K"}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("init")]),e._v(" command has also created a number of configuration files:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBscyB+Ly5teXByb2plY3RkL2NvbmZpZwo="}}),e._v(" "),o("p",[e._v("This should return:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"YWRkcmJvb2suanNvbgphcHAudG9tbCAgICAgICAgICAgICAgICAmbHQ7LS0gY29uZmlndXJhdGlvbiBmb3IgdGhlIGFwcCBwYXJ0IG9mIHlvdXIgYmxvY2tjaGFpbgpjbGllbnQudG9tbCAgICAgICAgICAgICAmbHQ7LS0gY29uZmlndXJhdGlvbiBmb3IgdGhlIENMSSBjbGllbnQgb2YgdGhlIGFwcApjb25maWcudG9tbCAgICAgICAgICAgICAmbHQ7LS0gY29uZmlndXJhdGlvbiBmb3IgVGVuZGVybWludApnZW5lc2lzLmpzb24gICAgICAgICAgICAmbHQ7LS0gdGhlIGdlbmVzaXMgZm9yIHlvdXIgYmxvY2tjaGFpbgpnZW50eCAgICAgICAgICAgICAgICAgICAmbHQ7LS0gZm9sZGVyIHRoYXQgY29udGFpbnMgdGhlIGdlbmVzaXMgdHJhbnNhY3Rpb25zIGJlZm9yZSB0aGV5IGFyZSBpbnNlcnRlZApub2RlX2tleS5qc29uICAgICAgICAgICAmbHQ7LS0gcHJpdmF0ZSBrZXkgdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIHlvdXIgbm9kZSBvbiB0aGUgbmV0d29yawpwcml2X3ZhbGlkYXRvcl9rZXkuanNvbgo="}}),e._v(" "),o("h2",{attrs:{id:"open-your-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#open-your-node"}},[e._v("#")]),e._v(" Open your node")]),e._v(" "),o("p",[e._v("In the "),o("a",{attrs:{href:"https://docs.tendermint.com/v0.34/tendermint-core/using-tendermint.html#configuration",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("config.toml")]),e._v(" file"),o("OutboundLink")],1),e._v(" you can configure the open ports. The important piece is your "),o("strong",[e._v("listen address")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W3AycF0KCiMgQWRkcmVzcyB0byBsaXN0ZW4gZm9yIGluY29taW5nIGNvbm5lY3Rpb25zCmxhZGRyID0gJnF1b3Q7dGNwOi8vMC4wLjAuMDoyNjY1NiZxdW90Owo="}}),e._v(" "),o("p",[e._v("Here it listens on port "),o("code",[e._v("26656")]),e._v(" of all IP addresses. Define or find out your publicly accessible IP address, for instance "),o("code",[e._v("172.217.22.14")]),e._v(". If you use a DNS-resolvable name, like "),o("code",[e._v("lascaux.myproject.example.com")]),e._v(", you can use that as well instead of the IP address.")]),e._v(" "),o("p",[e._v("Keep in mind that a name is subject to the DNS being well configured and working well. Add this too so that, whenever your node contacts a new node, yours can tell the other node which address is preferred:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"ZXh0ZXJuYWxfYWRkcmVzcyA9ICZxdW90OzE3Mi4yMTcuMjIuMTQ6MjY2NTYmcXVvdDsgIyByZXBsYWNlIGJ5IHlvdXIgb3duCg=="}}),e._v(" "),o("p",[e._v("The other piece of information that uniquely identifies your node is your "),o("strong",[e._v("node ID")]),e._v(". Its private key is stored in "),o("code",[e._v("~/.myprojectd/config/node_key.json")]),e._v(". The public ID is that by which your peers will know your node. You can compute the public ID with the CometBFT command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCAuL215cHJvamVjdGQgdGVuZGVybWludCBzaG93LW5vZGUtaWQK"}}),e._v(" "),o("p",[e._v("This should return something like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Y2UxYzU0ZWE3YTJjNTBiNGI5ZjJmODY5ZmFmOGZhNGQxYTFjZjQzYQo="}}),e._v(" "),o("p",[e._v("If you lose "),o("code",[e._v("node_key.json")]),e._v(" or have it stolen, it is not as serious as if you lost your token's private key. Your node can always recreate a new one and let your peers know about the new ID, with no problems. The file location is mentioned in "),o("code",[e._v("config.toml")]),e._v(" on the line "),o("code",[e._v('node_key_file = "config/node_key.json"')]),e._v(".")]),e._v(" "),o("p",[e._v("The node key also exists so that your own node can identify itself, in the event that it tried to connect to itself via a circuitous peer-to-peer route and therefore ought to cut the useless connection.")]),e._v(" "),o("p",[e._v("In short, here is the information you need to share with other early participants in the network:")]),e._v(" "),o("ul",[o("li",[e._v("Listen address, for instance: "),o("code",[e._v('"tcp://172.217.22.14:26656"')]),e._v(".")]),e._v(" "),o("li",[e._v("Node ID, for instance: "),o("code",[e._v("ce1c54ea7a2c50b4b9f2f869faf8fa4d1a1cf43a")]),e._v(".")])]),e._v(" "),o("p",[e._v("The shorthand for this information is written and exchanged in the format "),o("em",[e._v("node-id@listen-address")]),e._v(", like this:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Y2UxYzU0ZWE3YTJjNTBiNGI5ZjJmODY5ZmFmOGZhNGQxYTFjZjQzYUAxNzIuMjE3LjIyLjE0OjI2NjU2Cg=="}}),e._v(" "),o("p",[e._v("If you create a node for a network that is already running you need to follow these same steps, but you do not need to inform others of your parameters, because when you connect your node will do this anyway.")]),e._v(" "),o("HighlightBox",{attrs:{type:"note"}},[o("p",[e._v("As a side note, your computer or local network may not allow other nodes to initiate a connection to your node on port "),o("code",[e._v("26656")]),e._v(". Therefore, it is a good idea to open this port in the firewall(s).")])]),e._v(" "),o("h2",{attrs:{id:"connection-to-others"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connection-to-others"}},[e._v("#")]),e._v(" Connection to others")]),e._v(" "),o("p",[e._v("You have collected your node's information, and have shared it with the early network participants. In return you received theirs. You can put this information in "),o("code",[e._v("config.toml")]),e._v(", separated by commas:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"cGVyc2lzdGVudF9wZWVycyA9ICZxdW90OzQzMmQ4MTZkMGExNjQ4YzViYzNmMDYwYmQyOGRlYTZmZjEzY2I0MTNAMjE2LjU4LjIwNi4xNzQ6MjY2NTYsCjU3MzU4MzZjYmFhNzQ3ZTAxM2U0N2IxMTgzOWRiMmMyOTkwYjkxOGFAMTIxLjM3LjQ5LjEyOjI2NjU2JnF1b3Q7Cg=="}}),e._v(" "),o("p",[e._v("If one of the operators informs you that their node behaves as a seed node, then you add it under:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"c2VlZHMgPSAmcXVvdDs0MzJkODE2ZDBhMTY0OGM1YmMzZjA2MGJkMjhkZWE2ZmYxM2NiNDEzQDIxNi41OC4yMDYuMTc0OjI2NjU2JnF1b3Q7Cg=="}}),e._v(" "),o("p",[e._v("You can also take this opportunity to document the list of peers on your "),o("em",[e._v("production")]),e._v(" repository (the same that hosts the genesis file). Only list the addresses that are meant to be public, to mitigate the risks of DoS attacks.")]),e._v(" "),o("HighlightBox",{attrs:{type:"note"}},[o("p",[e._v("You are not obliged to put all the known peers in your "),o("code",[e._v("persistent_peers")]),e._v(". You may well choose to put there only those you trust.")])]),e._v(" "),o("h2",{attrs:{id:"further-network-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-network-configuration"}},[e._v("#")]),e._v(" Further network configuration")]),e._v(" "),o("p",[e._v("Setting up your node and identifying other peers is important. However, this is not the only network configuration available. Look into "),o("code",[e._v("~/.myprojectd/config/config.toml")]),e._v(" for tweaks.")]),e._v(" "),o("p",[e._v("If you change the parameters in this file, you are not going to affect the ability of the network to reach consensus on blocks. Parameters that are necessary for consensus are all in the genesis file.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://docs.tendermint.com/v0.34/tendermint-core/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parameters in "),o("code",[e._v("config.toml")]),o("OutboundLink")],1),e._v(" can be divided into two broad categories:")]),e._v(" "),o("ol",[o("li",[o("strong",[e._v("Network scoped:")]),e._v(" by changing these, you change the posture of your node at the risk of disrupting the ability of other nodes to communicate with yours. Examples include "),o("code",[e._v("max_num_inbound_peers")]),e._v(" and "),o("code",[e._v("handshake_timeout")]),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("Single node scoped:")]),e._v(" these only matter to your node. Examples include "),o("code",[e._v("db_backend")]),e._v(" and "),o("code",[e._v("log_level")]),e._v(".")])]),e._v(" "),o("p",[e._v("Among the network-scoped parameters, some deal with the intricacies of BFT, such as "),o("code",[e._v("timeout_prevote")]),e._v(" and "),o("code",[e._v("timeout_precommit_delta")]),e._v(". If you want to tweak them away from their defaults, you can search for more information. "),o("a",{attrs:{href:"https://forum.cosmos.network/t/consensus-timeouts-explained/1421",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),o("OutboundLink")],1),e._v(" is as good a place to start as any other.")]),e._v(" "),o("p",[e._v("Tangential to these parameters, you can find others in "),o("code",[e._v("~/.myprojectd/config/app.toml")]),e._v(" that also relate to the network. For instance "),o("code",[e._v("minimum-gas-prices")]),e._v(", which you could set at "),o("code",[e._v("1nstone")]),e._v(" for instance.")]),e._v(" "),o("p",[e._v("To avoid surprises when looking at the configuration, keep in mind your CometBFT version:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCAuL215cHJvamVjdGQgdGVuZGVybWludCB2ZXJzaW9uCg=="}}),e._v(" "),o("p",[e._v("This returns something like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"QUJDSTogMC4xNy4wCkJsb2NrUHJvdG9jb2w6IDExClAyUFByb3RvY29sOiA4ClRlbmRlcm1pbnQ6IHYwLjM0LjIwLXJjMSAmbHQ7LS0gVGhlIHBhcnQgdGhhdCBzaG91bGQgaW5mb3JtIHlvdSBhYm91dCB0aGUgY29udGVudCBvZiBjb25maWcudG9tbAo="}}),e._v(" "),o("h2",{attrs:{id:"ddos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ddos"}},[e._v("#")]),e._v(" DDoS")]),e._v(" "),o("p",[e._v("Being part of a network with a known IP address can be a security or service risk. Distributed denial-of-service (DDoS) is a classic kind of network attack, but there are ways to mitigate the risks.")]),e._v(" "),o("p",[e._v("First, be aware that regular nodes and validator nodes face different risks:")]),e._v(" "),o("ol",[o("li",[e._v("If your regular node is DoS'd, you are at risk of dropping out of the network, and preventing you or your customers from calling an RPC endpoint for network activity.")]),e._v(" "),o("li",[e._v("If your validator node is DoS'd, you are at risk of consensus penalties.")])]),e._v(" "),o("p",[e._v("It is common practice to expose your regular nodes and to hide your validator nodes. The latter hide behind a "),o("a",{attrs:{href:"https://hub.cosmos.network/main/validators/security.html#sentry-nodes-ddos-protection",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("sentry")]),e._v(" node"),o("OutboundLink")],1),e._v(", such that:")]),e._v(" "),o("ol",[o("li",[e._v("Your "),o("a",{attrs:{href:"https://forum.cosmos.network/t/sentry-node-architecture-overview/454",target:"_blank",rel:"noopener noreferrer"}},[e._v("sentry nodes"),o("OutboundLink")],1),e._v(" are located in a cloud infrastructure, where the database (or filesystem) and the software part of the node are separated. With this, the same sentry node can release its old public IP address and receive a new one within a few seconds; or a new sentry node can spring up at a different IP address by using the same database (or filesystem), as in a game of whack-a-mole.")]),e._v(" "),o("li",[e._v("Your validator nodes are located anywhere, with persistent addresses, but connect only to the sentry nodes, with the use of "),o("code",[e._v("persistent_peers")]),e._v(" in "),o("code",[e._v("config.toml")]),e._v(". The content of this field has to change when a sentry node has been whacked unless the validator node can connect to the sentry node over the same private IP address.")]),e._v(" "),o("li",[e._v("Your sentry nodes never gossip your validators' addresses over the peer-to-peer network, thanks to the use of "),o("code",[e._v("private_peer_ids")]),e._v(" in "),o("code",[e._v("config.toml")]),e._v(".")])]),e._v(" "),o("HighlightBox",{attrs:{type:"synopsis"}},[o("p",[e._v("To summarize, this section has explored:")]),e._v(" "),o("ul",[o("li",[e._v("How to make your node accessible to connections from other nodes.")]),e._v(" "),o("li",[e._v("How to locate some subset of other nodes in order to make a connection to them.")]),e._v(" "),o("li",[e._v("The use of a publicly accessible IP address or DNS-resolvable name, along with the public half of your public-private node key, to uniquely identify your node to others.")]),e._v(" "),o("li",[e._v("How the node key can also prevent inadvertent attempts by the node to connect to itself via an unforeseen peer-to-peer route.")]),e._v(" "),o("li",[e._v("The option of further configuring your network via "),o("strong",[e._v("network scoped")]),e._v(" and "),o("strong",[e._v("single node scoped")]),e._v(" parameters.")]),e._v(" "),o("li",[e._v("How to mitigate the risks of distributed denial-of-service (DDoS) attacks through the use of sentry nodes.")])])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);