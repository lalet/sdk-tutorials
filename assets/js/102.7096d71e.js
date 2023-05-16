(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{720:function(e,t,o){"use strict";o.r(t);var n=o(1),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"what-is-ibc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-ibc"}},[e._v("#")]),e._v(" What is IBC?")]),e._v(" "),o("HighlightBox",{attrs:{type:"learning"}},[o("p",[e._v("Inter-Blockchain Communication Protocol solves for communication between blockchains, which is particularly important in the Cosmos universe.\n"),o("br"),o("br"),e._v("\nIn this section, you will learn:")]),e._v(" "),o("ul",[o("li",[e._v("What IBC is.")]),e._v(" "),o("li",[e._v("How IBC works.")]),e._v(" "),o("li",[e._v("More about the IBC security guarantees.")])])]),e._v(" "),o("p",[e._v("The "),o("strong",[o("a",{attrs:{href:"https://ibcprotocol.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Inter-Blockchain Communication Protocol (IBC)"),o("OutboundLink")],1)]),e._v(" is "),o("em",[e._v("a protocol to handle authentication and transport of data between two blockchains")]),e._v(". IBC "),o("strong",[e._v("requires a minimal set of functions")]),e._v(", specified in the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/ics-001-ics-standard",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interchain Standards (ICS)"),o("OutboundLink")],1),e._v(". Notice that those specifications do not limit the network topology or consensus algorithm, so IBC can be used with a wide range of blockchains or state machines. The IBC protocol provides a permissionless way for relaying data packets between blockchains, unlike most trusted bridging technologies. The security of IBC reduces to the security of the participating chains.")]),e._v(" "),o("p",[e._v("IBC solves a widespread problem: cross-chain communication. This problem exists on public blockchains when exchanges wish to perform swaps. The problem arises early in the case of application-specific blockchains, where every asset is likely to emerge from its own purpose-built chain. Cross-chain communication is also a challenge in the world of private blockchains, in cases where communication with a public chain or other private chains is desirable. There are already IBC implementations for private blockchains "),o("a",{attrs:{href:"https://www.hyperledger.org/blog/2021/06/09/meet-yui-one-the-new-hyperledger-labs-projects-taking-on-cross-chain-and-off-chain-operations",target:"_blank",rel:"noopener noreferrer"}},[e._v("such as Hyperledger Fabric and Corda"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Cross-chain communication between application-specific blockchains in Cosmos creates the potential for high horizontal scaleability with transaction finality. These design features provide convincing solutions to well-known problems that plague other platforms, such as transaction costs, network capacity, and transaction confirmation finality.")]),e._v(" "),o("h2",{attrs:{id:"internet-of-blockchains"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#internet-of-blockchains"}},[e._v("#")]),e._v(" Internet of blockchains")]),e._v(" "),o("p",[e._v("IBC is essential for application-specific blockchains like the ones in the Cosmos network. It offers a standard communication channel for applications on two different chains that need to communicate with each other.")]),e._v(" "),o("p",[e._v("Most Cosmos applications execute on their own purpose-built blockchain running their own validator set (at least before the introduction of "),o("a",{attrs:{href:"https://informal.systems/2022/05/09/building-with-interchain-security",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interchain Security"),o("OutboundLink")],1),e._v("). These are the application-specific blockchains built with the Cosmos SDK. Applications on one chain may need to communicate with applications on another blockchain, for example, an application could accept tokens from another blockchain as a form of payment. Interoperability at this level calls for a method of exchanging data about the state or the transactions on another blockchain.")]),e._v(" "),o("p",[e._v("While such bridges between blockchains can be built and do exist, they are generally constructed ad-hoc. IBC provides chains with a common protocol and framework for implementing standardized inter-blockchain communication. For chains built with the Cosmos SDK, this comes out of the box, but the IBC protocol is not limited to chains built with the Cosmos stack.")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v('More details on the specifications will follow in the next section, but notice that IBC is not limited to Cosmos blockchains. Solutions can even be found for cases where some requirements are not initially met. For example, IBC was already providing connectivity between Cosmos and the Ethereum blockchain before "the Merge", which saw Ethereum migrate from a Proof-of-Work (PoW) model to Proof-of-Stake (PoS).')]),e._v(" "),o("p",[e._v("As a PoW consensus algorithm does not ensure finality, one of the main requirements to use IBC is not met. Therefore, compatibility with Ethereum was enabled by creating a peg-zone where probabilistic finality is considered deterministic (irreversible) after a given threshold of block confirmations. This solution can serve any IBC connection to a PoW blockchain.")])]),e._v(" "),o("p",[e._v("Although application-specific blockchains offer superior (horizontal) scalability compared to general-purpose blockchain platforms, smart contract development for general-purpose chains and generic virtual machines (VMs) like in Ethereum offer their own benefits. IBC provides a method of incorporating the strengths of general-purpose and application-specific blockchains into unified overall designs. For example, it allows a Cosmos chain tailored towards performance and scalability to use funds that originate on Ethereum and possibly record events in a Corda distributed ledger; or, in the reverse, a Corda ledger initiating the transfer of underlying assets defined in Cosmos or Ethereum.")]),e._v(" "),o("p",[o("tm-image",{attrs:{src:"/academy/3-ibc/images/internetofchains.png"}})],1),e._v(" "),o("p",[e._v('With cross-chain communication via IBC, a decentralized network of independent and interoperable chains exchanging information and assets is possible. This "internet of blockchains" brings the promise of increased and seamless scalability. In Cosmos, the vision being implemented is to have a universe of independent chains that are all connected using peg-zones as bridges between the Cosmos network and chains outside of it, and connecting all chains via hubs. All of these make up the internet of blockchains.')]),e._v(" "),o("h2",{attrs:{id:"high-level-overview-of-ibc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#high-level-overview-of-ibc"}},[e._v("#")]),e._v(" High-level overview of IBC")]),e._v(" "),o("p",[e._v("The transport layer (TAO) provides the necessary infrastructure to establish secure connections and authenticate data packets between chains. The application layer builds on top of the transport layer and defines exactly how data packets should be packaged and interpreted by the sending and receiving chains.")]),e._v(" "),o("HighlightBox",{attrs:{type:"remember"}},[o("p",[e._v("The great promise of IBC is providing a reliable, permissionless, and generic base layer (allowing for the secure relaying of data packets), while allowing for composability and modularity with separation of concerns by moving application designs (interpreting and acting upon the packet data) to a higher-level layer.")])]),e._v(" "),o("p",[e._v("This separation is reflected in the categories of the ICS in the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/ics-001-ics-standard/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("general ICS definition"),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("IBC/TAO:")]),e._v(" Standards defining the Transport, Authentication, and Ordering of packets, i.e. the infrastructure layer. In the ICS, this is comprised by the categories "),o("em",[e._v("Core")]),e._v(", "),o("em",[e._v("Client")]),e._v(", and "),o("em",[e._v("Relayer")]),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("IBC/APP:")]),e._v(" Standards defining the application handlers for the data packets being passed over the transport layer. These include but are not limited to fungible token transfers (ICS-20), NFT transfers (ICS-721), and interchain accounts (ICS-27), and can be found in the ICS in the "),o("em",[e._v("App")]),e._v(" category.")])]),e._v(" "),o("p",[e._v("The following diagram shows how IBC works at a high level:")]),e._v(" "),o("p",[o("tm-image",{attrs:{src:"/academy/3-ibc/images/ibcoverview.png"}})],1),e._v(" "),o("p",[e._v("Note three crucial elements in the diagram:")]),e._v(" "),o("ul",[o("li",[e._v("The chains depend on relayers to communicate. Relayer algorithms ("),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/relayer/ics-018-relayer-algorithms",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-18"),o("OutboundLink")],1),e._v(') are the "physical" connection layer of IBC: off-chain processes responsible for relaying data between two chains running the IBC protocol by scanning the state of each chain, constructing appropriate datagrams, and executing them on the opposite chain as is allowed by the protocol.')]),e._v(" "),o("li",[e._v("Many relayers can serve one or more channels to send messages between the chains.")]),e._v(" "),o("li",[e._v("Each side of the relay uses the light client of the other chain to quickly verify incoming messages.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("If you're interested in another overview of the IBC protocol, in the following video Callum Waters, Engineering Manager for the Tendermind Core, gives a talk on the methodology allowing interoperability between countless sovereign blockchains and how to build an IBC-compatible app.")]),e._v(" "),o("YoutubePlayer",{attrs:{videoId:"OSMH5uwTssk"}})],1),e._v(" "),o("h3",{attrs:{id:"ibc-tao-transport-layer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibc-tao-transport-layer"}},[e._v("#")]),e._v(" IBC/TAO - transport layer")]),e._v(" "),o("p",[e._v("In the diagram, the relationship between the ICS definitions in the category TAO are illustrated - the arrows illustrating the requirements.")]),e._v(" "),o("p",[e._v("Simply put, the transport layer includes:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Light Clients")]),e._v(" - "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-002-client-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-2"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/client/ics-006-solo-machine-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("6"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/client/ics-007-tendermint-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("7"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/client/ics-008-wasm-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("8"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/client/ics-010-grandpa-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("9"),o("OutboundLink")],1),e._v(": IBC clients are light clients that are identified by a unique client ID. IBC clients track the consensus state of other blockchains and the proof specs of those blockchains required to properly verify proofs against the client's consensus state. A client can be associated with any number of connections to the counterparty chain.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Connections")]),e._v(" - "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-003-connection-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-3"),o("OutboundLink")],1),e._v(": connections, once established, are responsible for facilitating all cross-chain verifications of an IBC state. A connection can be associated with any number of channels. Connections encapsulate two "),o("code",[e._v("ConnectionEnd")]),e._v(" objects on two separate blockchains. Each "),o("code",[e._v("ConnectionEnd")]),e._v(" is associated with a light client of the other blockchain - for example, the counterparty blockchain. The connection handshake is responsible for verifying that the light clients on each chain are the correct ones for their respective counterparties.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Channels")]),e._v(" - "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-4"),o("OutboundLink")],1),e._v(": a module on one blockchain can communicate with other modules on other blockchains by sending, receiving, and acknowledging packets through channels that are uniquely identified by the ("),o("code",[e._v("channelID")]),e._v(", "),o("code",[e._v("portID")]),e._v(") tuple. Channels encapsulate two "),o("code",[e._v("ChannelEnd")]),e._v("s that are associated with a connection. Channels provide a way to have different types of information relayed between chains, but do not increase the total capacity. Just like connections, channels are established with a handshake.")]),e._v(" "),o("p",[e._v("A channel can be "),o("code",[e._v("ORDERED")]),e._v(", where packets from a sending module must be processed by the receiving module in the order they were sent, or "),o("code",[e._v("UNORDERED")]),e._v(", where packets from a sending module are processed in the order they arrive (which might be different from the order they were sent).")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Ports")]),e._v(" - "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-005-port-allocation",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-5"),o("OutboundLink")],1),e._v(": an IBC module can bind to any number of ports. Each port must be identified by a unique "),o("code",[e._v("portID")]),e._v(". The "),o("code",[e._v("portID")]),e._v(" denotes the type of application, for example in fungible token transfers the "),o("code",[e._v("portID")]),e._v(" is "),o("code",[e._v("transfer")]),e._v(".")])])]),e._v(" "),o("HighlightBox",{attrs:{type:"note"}},[o("p",[e._v("While this background information is useful, IBC has been designed in such a way that exposure to the transport layer is kept to a minimum for IBC application developers.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("In the following video Colin Axnér of Interchain, a core contributor to ibc-go in the Cosmos SDK, explains how different blockchains can be connected with the Inter-Blockchain Communication (IBC) protocol, with a particular focus on light clients, connections, channels, and packet commitments.")]),e._v(" "),o("YoutubePlayer",{attrs:{videoId:"zUVPkEzGJzA"}})],1),e._v(" "),o("h3",{attrs:{id:"ibc-app-application-layer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibc-app-application-layer"}},[e._v("#")]),e._v(" IBC/APP - application layer")]),e._v(" "),o("p",[e._v("The ICS also offer definitions for IBC applications:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Fungible token transfer")]),e._v(" - "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-20"),o("OutboundLink")],1),e._v(": The first and most apparent application for IBC is the transfer of fungible tokens across chains. With the standards set out by ICS-20, a user can send tokens across IBC-enabled chains. This is achieved by escrowing tokens on the source chain: the proof along with the token metadata is relayed to the destination chain, upon which the proof is verified by the light client of the source chain, stored on the destination chain. If the verification passes, vouchers for the tokens on the destination chains are minted and an acknowledgement is sent back to the source chain.")]),e._v(" "),o("p",[e._v("Packet flow is explored in more detail in a later section, but you can look at the steps when following the progress of the IBC token transfer on "),o("a",{attrs:{href:"https://www.mintscan.io/cosmos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mintscan"),o("OutboundLink")],1),e._v(". The following example shows the transactions submitted for the original "),o("code",[e._v("Transfer")]),e._v(" on the source, the "),o("code",[e._v("Receive")]),e._v(" message on the destination, and the "),o("code",[e._v("Acknowledgement")]),e._v(" again on the source:")])])]),e._v(" "),o("p",[o("tm-image",{attrs:{src:"/academy/3-ibc/images/mintscanIBC.png"}})],1),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Interchain accounts")]),e._v(" - "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-027-interchain-accounts",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-27"),o("OutboundLink")],1),e._v(": interchain accounts outlines a cross-chain account management protocol built on IBC. Chains having enabled ICS-27 can programmatically create accounts on other ICS-27-enabled chains and control these accounts via IBC transactions, instead of having to sign with a private key. Interchain accounts contain all of the capabilities of a normal account (i.e. stake, send, vote) but instead are managed by a separate chain via IBC in a way such that the owner account on the controller chain retains full control over any interchain accounts it registers on host chains.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("This list can be and will be extended with time. New concepts such as interchain accounts will continue to increase adoption and provide application diversity in the Interchain ecosystem.\n"),o("br"),o("br"),e._v("\nFind a list of ecosystem efforts on IBC applications and light clients in the ibc-go repo's "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go#ecosystem",target:"_blank",rel:"noopener noreferrer"}},[e._v("readme"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"security"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),o("p",[e._v("Along with protocol extensibility, reliability, and security without the need for trusted third parties, the permissionless nature of IBC as a generalized interoperability standard is one of the most valuable discerning features of IBC in comparison to standard bridge protocols. However, as it is permissionless to create IBC clients, connections, and channels, or to relay packets between chains, you may have wondered: "),o("em",[e._v("What about the security implications?")])]),e._v(" "),o("HighlightBox",{attrs:{type:"remember"}},[o("p",[e._v("The design of IBC security is centered around "),o("strong",[e._v("two main principles")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("Trust in (the consensus of) the chains you connect with.")]),e._v(" "),o("li",[e._v("The implementation of fault isolation mechanisms, in order to limit any damage done should these chains be subject to malicious behavior.")])])]),e._v(" "),o("p",[e._v("The security considerations which IBC implements are worth exploring:")]),e._v(" "),o("h3",{attrs:{id:"ibc-light-clients"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibc-light-clients"}},[e._v("#")]),e._v(" IBC light clients")]),e._v(" "),o("p",[e._v("Unlike many trusted bridge solutions, IBC does not depend on an intermediary to verify the validity of cross-chain transactions. As explained previously, the verification of packet commitment proofs are provided by the light client. The light client is able to track and efficiently verify the relevant state of the counterparty blockchain, to check commitment proofs for the sending and receiving of packets on the source and destination chains respectively.")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("In IBC, blockchains do not directly pass messages to each other over the network. To communicate, blockchains commit the state to a precisely defined path reserved for a specific message type and a specific counterparty. Relayers monitor for updates on these paths and relay messages by submitting the data stored under the path along with proof of that data to the counterparty chain.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"docs"}},[o("p",[e._v("The paths that all IBC implementations must support for committing IBC messages are defined in the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-024-host-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-24 host state machine requirements"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[e._v("This is important because it ensures the IBC protocol remains secure even in Byzantine environments where relayers could act in a malicious or faulty manner. You do not need to trust the relayers; instead, you trust the proof verification provided by the light client. "),o("strong",[e._v("In the worst case situation where all relayers are acting in a Byzantine fashion, the packets sent would get rejected because they do not have the correct proof. This would affect only the liveness, not the security, of the particular part of the Interchain network where the relayers are malicious.")])]),e._v(" "),o("p",[e._v("Note that this effect would only affect the network if all relayers were Byzantine. As relaying is permissionless, a simple fix would be to spin up a non-malicious relayer to relay packets with the correct proof. This fits the "),o("em",[e._v("security over liveness")]),e._v(" philosophy that IBC and the wider Interchain ecosystem adopts.")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("In the following video Colin Axnér of Interchain, a core contributor to ibc-go in the Cosmos SDK, looks at the IBC packet lifecycle and the security properties of a light client.")]),e._v(" "),o("YoutubePlayer",{attrs:{videoId:"X5mPQrCLLWE"}})],1),e._v(" "),o("h3",{attrs:{id:"trust-the-chains-not-the-bridge"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#trust-the-chains-not-the-bridge"}},[e._v("#")]),e._v(" Trust the chains, not the bridge")]),e._v(" "),o("p",[e._v("IBC clients and transactions assume the trust model of the chains they are connected to. In order to represent this accurately in assets which have been passed through the Interchain, the information of the path that an asset has traveled (the security guarantee of the asset) is stored in the denomination of the asset itself. In the case that the end user or an application does not trust a specific origin chain, they would be able to verify that their asset has not come from the untrusted chain simply by looking at the denomination of the asset, rather than referring to the validator set of a bridge or some other trusted third party verifier.")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("All tokens transferred over a particular channel will be assigned the same denomination as other tokens flowing over the channel, but a different one than the same assets between the same chains would have if they were sent across a different channel. The IBC denom looks like "),o("code",[e._v("ibc/<hash of the channel-id & port-id>")]),e._v(".\n"),o("br"),o("br"),e._v("\nYou can find more detailed information in the tutorial on "),o("RouterLink",{attrs:{to:"/tutorials/6-ibc-dev/"}},[e._v("IBC denoms")]),e._v(".")],1)]),e._v(" "),o("h3",{attrs:{id:"submit-misbehavior"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#submit-misbehavior"}},[e._v("#")]),e._v(" Submit misbehavior")]),e._v(" "),o("p",[e._v("One type of Byzantine behavior that can happen on an IBC-enabled chain is when validators double-sign a block - meaning they sign two different blocks at the same height. This scenario is called a fork. Unlike in Proof-of-Work blockchains (like Bitcoin or Ethereum) where forks are to be occasionally expected, in CometBFT the fast finality of chains is desired (and is a prerequisite for IBC) so forks should not occur.")]),e._v(" "),o("p",[e._v("Through the principle of "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos/blob/master/WHITEPAPER.md#fork-accountability",target:"_blank",rel:"noopener noreferrer"}},[e._v("fork accountability"),o("OutboundLink")],1),e._v(" the processes that caused the consensus to fail can be identified and punished according to the rules of the protocol. However, if this were to happen on a foreign chain, it would start a race for the light client of this compromised chain on counterparty chains to become aware of the fork.")]),e._v(" "),o("p",[e._v("The IBC protocol provides the functionality to submit a proof of misbehavior, which could be provided by the relayers, upon which the light client is frozen to avoid consequences as a result of the fork. The funds could later be recovered by unfreezing the light client via a governance proposal when the attack has been neutralized. The "),o("em",[e._v("submit misbehavior")]),e._v(" functionality thus enables relayers to enhance the security of IBC, even though the relayers themselves are intrinsically untrusted.")]),e._v(" "),o("h3",{attrs:{id:"dynamic-capabilities"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-capabilities"}},[e._v("#")]),e._v(" Dynamic capabilities")]),e._v(" "),o("p",[e._v("IBC is intended to work in execution environments where modules do not necessarily trust each other. Thus, IBC must authenticate module actions on ports and channels so that only modules with the appropriate permissions can use them. This module authentication is accomplished using a dynamic capability store. Upon binding to a port or creating a channel for a module, IBC returns a dynamic capability that the module must claim in order to use that port or channel. The dynamic capability module prevents other modules from using that port or channel since they do not own the appropriate capability.")]),e._v(" "),o("p",[e._v("It is worth mentioning that on top of the particular security considerations IBC takes, the security considerations of the Cosmos SDK and the application-specific chain model of the Cosmos white paper still hold. With reference to previous sections, remember that while iteration on the modules may be slower than iteration on contracts, application-specific chains are exposed to significantly fewer attack vectors than smart contract setups deployed on-chain. The chains would have to purposely adopt a malicious module by governance.")]),e._v(" "),o("h2",{attrs:{id:"development-roadmap"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development-roadmap"}},[e._v("#")]),e._v(" Development roadmap")]),e._v(" "),o("p",[e._v("As previously mentioned, even though IBC originated from the Cosmos stack it allows for chains not built with the Cosmos SDK to adopt IBC, or even those with a different consensus than CometBFT altogether. However, depending on which chain you want to implement IBC for or build IBC applications on top of, it may require prior development to ensure that all the different components needed for IBC to work are available for the consensus type and blockchain framework of your choice.")]),e._v(" "),o("HighlightBox",{attrs:{type:"remember"}},[o("p",[e._v("Generally speaking, you will need the following:")]),e._v(" "),o("ol",[o("li",[e._v("An implementation of the IBC transport layer.")]),e._v(" "),o("li",[e._v("A light client implementation on your chain, to track the counterparty chain you want to connect to.")]),e._v(" "),o("li",[e._v("A light client implementation for your consensus type, to be encorporated on the counterparty chain you want to connect to.")])])]),e._v(" "),o("p",[e._v("Click the expansion panel below to have a more detailed look at the different options.")]),e._v(" "),o("ExpansionPanel",{attrs:{title:"A roadmap towards an IBC-enabled chain"}},[o("p",[e._v("The following decision tree helps visualize the roadmap towards an IBC-enabled chain. "),o("strong",[e._v("For simplicity, it assumes the intent to connect to a Cosmos SDK chain.")]),e._v(" "),o("br"),o("br"),e._v("\nDo you have access to an existing chain?")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("No.")]),e._v(" You will have to build a chain:")]),e._v(" "),o("ul",[o("li",[e._v("Cosmos SDK chain: see the "),o("RouterLink",{attrs:{to:"/hands-on-exercise/1-ignite-cli/"}},[e._v("previous chapters")]),e._v(".")],1),e._v(" "),o("li",[e._v("Another chain.\n"),o("ul",[o("li",[e._v("Is there a CometBFT light client implementation available for your chain?\n"),o("ul",[o("li",[e._v("Yes. Continue.")]),e._v(" "),o("li",[e._v("No. Build a custom CometBFT light client implementation.")])])]),e._v(" "),o("li",[e._v("Is there a light client implementation for your chain’s consensus available in the SDK's IBC module?\n"),o("ul",[o("li",[e._v("Yes. Continue.")]),e._v(" "),o("li",[e._v("No. Build a custom light client for your consensus to be used on a Cosmos SDK chain (with IBC module).")])])]),e._v(" "),o("li",[e._v("Implement IBC core:\n"),o("ul",[o("li",[e._v("Source code.")]),e._v(" "),o("li",[e._v("Smart contract based.")])])])])])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Yes.")]),e._v(" Is it a Cosmos SDK chain?")]),e._v(" "),o("ul",[o("li",[e._v("Yes. Move on to application development.")]),e._v(" "),o("li",[e._v("No.\n"),o("ul",[o("li",[e._v("Does your chain support a CometBFT light client?\n"),o("ul",[o("li",[e._v("Yes. Continue.")]),e._v(" "),o("li",[e._v("No. Source a CometBFT light client implementation for your chain.")])])]),e._v(" "),o("li",[e._v("Is there a Cosmos SDK light client implementation for your chain’s consensus?\n"),o("ul",[o("li",[e._v("Yes. Continue.")]),e._v(" "),o("li",[e._v("No. Build a custom light client implementation of your chain's consensus + governance proposal to implement it on the IBC clients of the Cosmos SDK chains you want to connect to.")])])]),e._v(" "),o("li",[e._v("Does your chain have a core IBC module available (connection, channels, ports)? Source code or smart contract based?\n"),o("ul",[o("li",[e._v("Yes. Move on to application development.")]),e._v(" "),o("li",[e._v("No. Build IBC Core implementation (source code or smart contract).")])])])])])])])])]),e._v(" "),o("p",[e._v("The most straightforward way to use IBC is to build a chain with the Cosmos SDK, which already includes the IBC module - as you can see when examining the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("ibc-go repository"),o("OutboundLink")],1),e._v(". The IBC module supports an out-of-the-box CometBFT light client. Other implementations are possible but may require further development of the necessary components; go to the "),o("a",{attrs:{href:"https://ibcprotocol.org/implementations",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC website"),o("OutboundLink")],1),e._v(" to see which implementations are available in production or are being developed.")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("If you're interested in a detailed introduction to Inter-Blockchain Communication, check out the following video Thomas Dekeyser, Developer Relations Engineer for IBC.")]),e._v(" "),o("YoutubePlayer",{attrs:{videoId:"HCO7qTOdNGI"}})],1),e._v(" "),o("HighlightBox",{attrs:{type:"synopsis"}},[o("p",[e._v("To summarize, this section has explored:")]),e._v(" "),o("ul",[o("li",[e._v("How the Inter-Blockchain Communication Protocol (IBC) solves the problem of cross-chain communication by handling the authentication and transport of data between two blockchains through a minimal set of functions specified in the Interchain Standards (ICS).")]),e._v(" "),o("li",[e._v("How the IBC functions permissionlessly and can be used with a wide range of blockchains or state machines regardless of their network topologies or consensus algorithms, with IBC security reduced to that of the participating chains.")]),e._v(" "),o("li",[e._v("How IBC is the foundation of interoperability in the Cosmos Ecosystem, with relayers such as light clients verifying the validity of cross-chain transactions, while also offering solutions to the issue of communicating with non-Cosmos blockchains including those which do not meet the criteria of Proof-of-Stake (PoS)finality.")]),e._v(" "),o("li",[e._v("How a Cosmos blockchain's transport layer (TAO) provides the infrastructure for establishing secure connections to other chains, while the application layer built on top defines how authenticated data packets should be packaged and interpreted.")]),e._v(" "),o("li",[e._v("How relayer algorithms provide the essential off-chain processes that share data between chains running the IBC protocol by scanning the state of each chain, constructing appropriate datagrams, and executing them on the opposite chain as permitted by the protocol.")]),e._v(" "),o("li",[e._v("How the Byzantine behavior that leads to forking is prevented within the fast finality Cosmos Ecosystem, and how the IBC protocol can achieve fork prevention outside the ecosystem by submitting proof of validator misbehavior and freezing affected light clients until an issue or attack has been neutralized.")])])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);