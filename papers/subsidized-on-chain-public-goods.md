title:Subsidized On-Chain Public Goods
date:Oct. 31, 2022
author:danner* and CHANCE+ and ananth+
description: Through the use of publicly contributable vaults purpose built to pay gas on behalf of users, blockchains can fund public goods with certainty that funds will not be misappropriated and without directly enriching grantees.
---
## Abstract
Starting an initiative requires the raising of funds to design, produce, and distribute a product. In Web2, this was often through venture capitalists who acquired equity in the initiative and sought to profit from it. In Web3, we have seen a wider variety of funding models – with outcome based desires that vary from traditional private equity models.

Throughout 2021 and 2022, the blockchain industry has operated based on a diversified capital stack composed of venture capitalists, professional and amateur market makers, speculative retail traders, and treasury grant issuance. While much of that capital stack is familiar, treasury grant issuance is nuanced and accounts for a large amount of the capital directed towards those who create value for the network. 

One of the most admirable and fascinating types of treasury grant issuance is retroactive public goods funding. Optimism has been a leader in this space, directing over $1 million generated from their sequencer to public goods. Retroactive public goods funding is the idea that grant distribution is made simpler by rewarding what was useful in the past rather than what might be useful in the future.

One of the more interesting uses of capital (public and private) has been to subsidize the costs of on-chain transaction fees for users. DAO tools, NFT product lines, etc; developers and businesses have found ways to improve end user experience by paying their fees for them. In traditional businesses, this may be viewed as a cost of customer acquisition and is often a teaser rate. While we have not seen crypto companies adjust their models yet, we must recognize that at scale, paying transaction fees on behalf of all users is not a maximal or even sustainable business model.

Through the use of publicly fundable vaults permissioned solely to pay transaction fees on behalf of users, grantors can fund public goods with certainty that funds will not be misappropriated and without directly enriching grantees. Use case specific applications surfacing highly flexible protocols and primitives may merit public goods funding from networks in which they are deployed. As highly usable and desirable implementations, these applications and protocols will be demanded by existing users and may potentially draw in new users to the product and the network it operates on. Vaults funded by blockchain foundations and network participants will be used to subsidize the usage of these public good applications.

The Badge Bound Forwarder primitive empowers subsidization of any on-chain product line. 

## Full Spectrum Funding in Web3
The Optimism Collective has made a commitment to fund the first public goods exit. With their focus on retroactive public goods funding, they wish to scour the market for teams and products that have created value for the wider network and to reward these teams.

Critically, retroactive public goods funding requires that the good has already created value. 

While some developers may pursue retroactive public goods funding upon adoption by users, they may still need to raise up front capital required to develop and distribute their product.

Through a combination of venture capital and retroactive funding, developers may access capital at the beginning and end of their journey. As noted above, a portion of raised capital is often utilized by businesses to support the subsidization of transaction fees throughout the development and distribution of the product.

With the introduction of Badge Bound Forwarders, developers can access capital solely for the purpose of subsidizing on-chain transactions associated with their product for the first time.

1.  Private capital may be raised to develop, deploy, and market via venture, grants, etc.
2.  Public funding can be accessed to ease user adoption via Badge Bound Forwarders.
3.  Public funding may be accessed via retroactive public goods funding 

Badge Bound Forwarders may be utilized by for profit and non-profit teams depending on their unique goals and circumstances. This paper makes no claims about the feasibility of accessing various capital stacks but does assert that this new conduit creates a value flow from grantors to users and grantees without directly enriching grantees.

## Delegated Transaction Execution
The Flow blockchain has been a leader in crypto consumer products. From CryptoKitties to NFL All Day and everything in between, Dapper has focused on end user experience from the beginning. One of the critical features of Dapper products on Flow is that all chain transaction fees are abstracted away from the end user. This experience is far superior and drives widespread adoption, but we have not seen it fully penetrate the EVM user experience.

Over the past year, a number of DAO tools have begun to adopt [delegated calls](https://medium.com/coinmonks/delegatecall-calling-another-contract-function-in-solidity-b579f804178c), which are transactions run through an external contract that carries the context of the sender. The use of delegated calls allows them to subsidize transactions for users.

For example, [MetricsDAO](​​https://dune.com/metricsdao/MetricsDAO) and other organizations use [Utopia](https://www.utopialabs.com/) and [Parcel](https://parcel.money/) to process transactions from a multisig without the need to pay gas costs. By offering this service, these tooling organizations are able to drive adoption at a much higher rate.

## The Code Driving Democratized Subsidization
With the use of [EIP-2771](https://eips.ethereum.org/EIPS/eip-2771) contracts can support secure native meta-transactions. One individual can build and sign a transaction while another executes and subsequently pays for the transaction cost. Deeper than that though, is the ability to forward transactions through a contract that opens the gateway to design space beyond just the processing of the transaction the Signer has built.

The steps are rather simple when broken down into clear steps:

-   The Signer must build and sign the transaction that they want executed.
-   The Sender proceeds with the signed data and signature where they submit it to a Relayer/Proxy to verify the data and signature.    
-   Once the Relayer verifies the signatures, the call proceeds and the original signed transaction is executed at the expense of the Sender.

Yet, while simple in concept, implementation is nuanced and can result in rapid loss of funds. To remedy that, a long catalog of different mechanisms have been developed and implemented; all attempting to solve the same problem. Yet, regardless of the technical implications, almost all of today's implementations lack the ability to control granular and critical permissions.

Building the data is only the first step though. Now, with the Signer account we need to sign the resulting calldata from the transaction built.

Executing transactions with opaque signatures can be dangerous. A signature is the first step of having additional security measures, yet it is not enough. To add another layer of security, a Gas Station Network (GSN) would traditionally only execute for a specific type of transaction and/or contract. Limiting down to a specific Target contract is rather straightforward with a simple signature like:

```javascript
/// pack the target address and calldata together and sign them.
let rawData = web3.eth.abi.encodeParameters(
  ['address','bytes'],
  [organization.address,data]
);

// hash the data.
let hash = web3.utils.soliditySha3(rawData);

// sign the hash.
let signature = web3.eth.sign(hash, signer);
```

With the data built and the transaction signed, the GSN can now extract the Target and verify that the interaction with that contract is subsidized for the user. All that is left is for the transaction to be executed.

To execute the transaction, the Sender must call the `Proxy` contracts `forward` function with the values supplied by the Signer as well as any additional arguments required by the chosen GSN. Maintaining the previous configuration as above, this would result in the final output of:

-   _to: The address of the Target contract to minimize unintended cost coverage.
-   _data: The generated calldata that is used to call the transaction.
-   _signature: The signature from the Signer of the built transaction.

Depending on the Proxy, there may be a situation where the structured data and/or the signature needs to be formatted differently. [Forwarder contracts](https://docs.openzeppelin.com/contracts/4.x/api/metatx) are typically riddled with vulnerabilities or heavily permissioned and custom-designed to fit the specification of the protocol using it. 

Finally, all the Sender has to do is process the transaction on-chain. What may appear as a rather complex process at this granular level, the resulting benefits are clear and simple to understand:

-   A wallet does not need to hold any funds to have transactions executed on its behalf.
-   A far greater amount of transactions can be condition-gated as the processing of them can be delegated to a Sender in the future.
-   A user does not even need to know they have a wallet.

Further, due to recent advancements the Signer can still execute these transactions in real-time without additional delay. End users must still sign transactions, but they are not required to execute them.

However, due to the general dangers of an individual not having to cover the cost of their transactions, GSN contracts have had a long history of being drained in an instant. To remedy that, manual declaration and top-layer events were implemented that introduced difficult, but still penetrable gates. In some cases, however, these gates were so limiting the GSN did not cover the full functionality or users cost of usage. Permissioning both protected and impeded implementers.

Alternatively, one may choose to use a public good such as [OpenGSN](https://opengsn.org/) rather than living in a dangerous world and building an entirely custom suite. A key nuance, however, is that OpenGSN has essentially gone into hibernation during the beta phase of [OpenGSN Version 3](https://docs.opengsn.org/). More vitally, there are [no actively running versions of Version 3 on any mainnet](https://relays.opengsn.org/). Yet, all documentation and notes reference the in-beta version. At the time of writing, OpenGSN is essentially unusable for new adopters.

This is a major problem and means today that no one can really use the newest version of OpenGSN and with it sitting in beta with no announcements in three months, the situation is bleak. Instead of rolling over, the need to further abstract the complexity away is required. On top of this, there is an extremely limited number of relays even running [Version 2](https://relays-v2.opengsn.org/). So, while decentralized, a deep set of new issues arise that put the function of the app in question.

## The Traditional Forwarder
What first appeared as the gasless approval of ERC20 tokens with [EIP-2612](https://eips.ethereum.org/EIPS/eip-2612), has blossomed into the delegated calls of entire protocol and ecosystem functionalities. 

Today, many contracts support and implement gasless transactions however the advised methods of permissioning are at the function level. While the ability to have gasless transactions for strictly defined functions is helpful, a user does much more than just a static set of functions on the vast majority of decentralized apps. A deeper set of functionality is required to enable permission-driven usage. Unlike the simplistic case of token approvals or transfers though, today's ecosystem demands for a model that can support a deep set of function and relevant calldata validation to drive an engine.

With the use of [EIP-2771](https://eips.ethereum.org/EIPS/eip-2771), rather than validating the typehash of a specific function one can verify the Signer, Forwarder, and the Target contract independently.

The solutions that are often used today only solve part of the problem and more often than not they end up being holistically ineffective. With the utilization of Badges as credentials to utilize Forwarders, the product design space expands by a vast margin. Historically, implementation of a Gas Station Network or Forwarder has been so simple or complex that the resulting product has been limited in functionality or overtly secure to a degree of unusability; broader protocol functions become inaccessible or a contract is exposed in a way that would allow a bad actor to drain all funds in a matter of seconds.

Using a Badge Bound Forwarder every account – at every step of the process – can be Badged and instantaneously gain access to the functionality enabled by the Forwarder. Thankfully, updating a Forwarder to operate through Badged Permissioning is rather straightforward.

When creating the Forwarder, all one needs to do is define what Badge must be held and the balance of that Badge at the time of executing the transaction. (A blob of calldata cannot be signed, the Badge sold/transferred and the transaction still be executed.)

Just like that, one can proceed without a massive headache or cause for concern! Instantly, your decentralized app has guard rails that bring a new-found level of security.

This is only half of the puzzle though. The Signers operating within the protocol can now be easily verified, yet the Senders and Targets could still be nefarious. In the middle of the process, exists an independently verifiable Sender that is executing the transaction. 

While executed exogenously, all transactions are executed upon a Target contract. This means that the contract being executed can hold a Badge itself. In the current ecosystem, contract-based permissioning is not something you see often. This situation is lacking any real nuance beyond the existing consistencies already covered.

Yet, adoption has been incredibly stunted due to lack of high-quality badging solutions; that is, until [Badger](https://trybadger.com) was launched. A single-token verification gate is rather simple and enables a vast amount of functionality.

## A More Versatile Forwarder
More recently, [EIP-4337](https://eips.ethereum.org/EIPS/eip-4337) has entered the discourse. The real use cases of this ground-breaking EIP, however, have been slow to be realized. 

With EIP-4337, contracts are no longer limited to gating on the Signer, Sender and Target. Now contracts have an even deeper set of data that can be verified against and utilized before and after transaction execution. Previously, the level of data-access in-contract was limited to the pieces already covered in this paper. With 4337, one can verify each granular piece of a submitted transaction with a far greater level of detail and control.

Using 4337, every User Operation is a data-bundled transaction containing all the pieces that one may want to verify. This includes: sender, target, calldata, maxFeePerGas, maxPriorityFee, signature, and even nonce.

With an extreme lack of opinion included in the EIP definition, the implementation can remain abstract with the use of the signature and nonce. Yet, the complexity and resulting benefits do not cease there. Along with a User Operation, when building the transaction, at the time of execution additional data points are included such as:

* Sender: The account contract sending a user operation.
* EntryPoint: A singleton contract that executes transactions.
* Aggregator: A helper contract that validates aggregated signatures.

Incredibly, 4337 exposes data that still has not been covered in the above such as callGasLimit, verificationGasLimit, and preVerificationGas. Ironically, the incoming growth of 4337 adoption will inevitably mean that when Version 3 of OpenGSN does finally go live, it will already be outdated. Hence the development and usage of a personalized-to-you solution is justified and recommended for the foreseeable future.

All this comes together to offer an incredibly robust framework that allows Forwarder contracts and their associated networks the ability of offering extremely opinionated implementations of cost subsidization and the parameters of doing so. A 4337 implementation brings additional nuance that *can be ignored to a certain extent*. Functionally, it is entirely up to the implementer to decide if and how each piece of data is used.

While impactful, a simple balance driven implementation of cost subsidization only provides a portion of the solution. Binary subsidization can be a great marketing mechanism that quickly attracts new users who might not have otherwise used the product, but runs the risk of rapid fund depletion and cannot weight rewards towards actions that benefit the product. 

With an integration alongside the Curve Registry (an unreleased mathematical primitive), subsidization can run on efficient patterns that drive more strongly desired consumer behaviors through flexibly managed forwarder fund spending rates.

> Now, before getting lost in the forest. One must realize that in order to only partially subsidize the cost, one must pay the cost that has not been covered. While in theory this means that the holding of gas (the native token) is required, that is not the full situation. While possible to remedy the requirement of holding at least some gas, this is not a functionality explored in this paper as the focus is on cost subsidization and not account abstraction. 

Implementation alongside 4337 may not be provided yet, but there are feasible paths today and we welcome discourse about how to properly implement these concepts in the future.

## Badge Bound Forwarders
Through the introduction of a public funding address to support subsidization of gas costs for a protocol alongside permissioned access to those funds, development teams can flexibly deploy product lines with distinct and secure user subsidization mechanisms. In addition to the design space that this provides to developers, implementers, and operators, Badge Bound Forwarders allow grantors to maintain public insight into the use of their funds and to trust that funds will not be used improperly.

A public address that can accept funds from anyone and may be deployed towards permissionlessly created Targets is ripe for exploitation. For example, someone may set up many Safes with Parcel and begin to run excessive transactions. Through this exploit path, a malicious actor may drain a Forwarder.

Badge Bound Forwarders allow for much more sophisticated Forwarder permissioning.

Rather than being relegated to a single vault for a product, Implementers may use Badges to represent which addresses may utilize the Badge Bound Forwarder. Issuance and revoking of Badges for any given Forwarder may be manually or programmatically managed. 

Products that currently subsidize for all users may introduce freemium or VIP tiers that are managed manually or through any number of automated strategies. Examples and potential implications of various multi-dimensional subsidization models are explored below.

## Multi-Dimensional Subsidization Rates
A number of heuristics may be used to determine subsidization rates. These heuristics may be independently configured, layered, and aggregated depending on the desired outcome. At this stage, aspects of this remain conceptual – but the primitive are fully implementable.

Dimensions and the intersection of those covered here is not comprehensive. 

### Usage Metrics
Products may track metrics related to their users and manage subsidies based on usage.

**1.  Power User Incent**

![](/papers-cdn/subsidized-on-chain-public-goods/1.png)

Products may wish to subsidize transactions for their heaviest users. This rewards power users and creates an incentive mechanism that may increase adoption as users unlock more free access as they pay over time. 

**2.  Teaser Rates**

![](/papers-cdn/subsidized-on-chain-public-goods/2.png)

Products may wish to subsidize transaction fees for new users and then to increase costs over time. This is most similar to models seen on credit card interest rates, ISP/cell provider changes, etc. New users get hooked and then need to pay for access as they increase usage.

**3.  Dunning Kruger**

![](/papers-cdn/subsidized-on-chain-public-goods/3.png)

Products may wish to ease early adoption before adding friction that is removed once the user becomes more active with the product. This could create situations of quick adoption and then ongoing subsidization to users who engage heavily with the product.

### Subsidization Vault Depth
Products may adjust the level of subsidization they are willing to provide based on the depth of funds available for subsidies. Combined with the Curve Registry, vault depth heuristics may be extremely flexible. The below describes general structures, but not the values of the variables required to create the curve.

**1.  Altruistic Alignment**

![](/papers-cdn/subsidized-on-chain-public-goods/4.png)

Products may wish to allow transactions to flow freely when there is great depth and for transactions to receive less subsidization when there is lower depth. As funds decrease and subsidization rates decrease, it benefits all users to add funds to the vault.

**2.  Cornucopia Deployment**

![](/papers-cdn/subsidized-on-chain-public-goods/5.png)

Products may wish to issue subsidization consistently, regardless of vault depth. In this case, the curve is flat and funds are simply drawn down. Funds may be added but the subsidization rate is not impacted by vault depth. This creates a scenario in which users are incentivized to use what exists before it disappears without regard for their impact on others.

**3.  Sisyphus Friction** 

![](/papers-cdn/subsidized-on-chain-public-goods/6.png)

Products may wish to slow the subsidization of a feature line. In this case, a curve that lowers the subsidization multiplier may be used. As funds are added to the vault, the usage cost of features increases.

### Managed Tiers
Products may wish to add a layer of tiers that can be applied programmatically or manually. If a user meets certain criteria, they may immediately fall into a specific category. If a user pays for increased tiering, they may receive a special multiplier.

While this covers a range of the heuristics that could be used to determine subsidization rates for distinct users, the level of flexibility in this space is highly underexplored and due to the composable nature of these primitives, implementers may add new heuristics or determine new intersectional layering that is best suited for their environment.

## Application Driven Value Creation & Grant Based Funding 
Primitives and protocols are valuable due to the applications that expose them to users. Applications may have multiple product lines that they offer to their users. These products may range from free to paid and may access different aspects of the capital spectrum. Historically, raising venture capital and accessing public funding via grants has been blurry and contentious, and accessing venture capital and public goods funding simultaneously has been nearly impossible.

With the flexibility provided by product line specific Badge Bound Forwarders, capital can be contributed by any party (public or private) with certainty that it will be used to subsidize transaction costs. Grant programs have struggled to follow the trail of funds and to attribute specific outcomes to them. With on-chain vaults purely permissioned to subsidize transaction fees, this problem does not apply. 

There are grantors who wish only to subsidize product lines that meet their criteria, investors who wish to manage on-chain operational costs independently of equity positions, good samaritans who wish to make a product more accessible to others, etc. This type of financial management is now possible. Due to the public nature of on-chain vaults, following the money has never been easier. Furthermore, usage stats and costs can be easily tracked, accounted for, and projected. Funding request amounts can be supported by historical data and can be constantly monitored.

### Use Case: Subsidized Organization Management with Badger
As the premiere key issuer for on-chain organizations, [Badger](https://www.trybadger.com/) allows you to manage group policies on-chain with a flexible ERC-1155 minter and a purpose built application. At its core, Badger is a public good that anyone can use to create an on-chain organization or launch a DAO. Badger may be utilized by for profit companies, DAOs, schools, etc. 

An EVM chain such as Optimism that wants to support the growth of DAO’s in its ecosystem may fund a Badge Bound Forwarder. This vault could be limited to transactions on the Optimism chain and may even be limited to a select category of organizations as determined by a committee or through programmatic means.

Organization operators that meet the criteria determined by Optimism receive a Badge that gives them access to a vault associated with a Badge Bound Forwarder. Through this mechanism, Optimism can reduce friction for operators who want to launch and/or manage their DAO with Badger.

While the transaction costs to deploy an organization using Badger on Optimism may seem inconsequential to some, these costs may be inordinate to others. Through permissioned subsidization of these costs, the launching of on-chain organizations can be made more equitable.

### Use Case: Subsidized Participant Payments for MetricsDAO
MetricsDAO runs on-demand analytics services facilitated through labor markets and makes payments on multiple EVM chains to analysts. To maximize user experience, MetricsDAO subsidizes payments for its participants. This requires making hundreds – if not thousands – of payments monthly which adds up, especially on more expensive networks such as Ethereum.

By introducing a Badge Bound Forwarder that accepts public funding and is permissioned for use by MetricsDAO’s protocol, participant subsidized payment flows can be supported by MetricsDAO, its stakeholders, and any grantors who wish to support the MetricsDAO mission in a straightforward and measurable way.

### Closing 
Badge Bound Forwarders bring a new conduit of funding to the existing spectrum. Importantly, this conduit differs from others in that it may be implemented in a way that empowers funding by anyone with full certainty of asset usage. Never before has there been a verifiable mechanism to support the subsidization of public goods. While traditional socioeconomic (off-chain) systems may attempt to support public goods through the collection and direction of funds, the level of verifiability enabled by a purpose built conduit is unmatched.

We are eager to implement and use Badge Bound Forwarders for our own products and look forward to collaborating with others on further implementations.
  
**References:**
* [https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c](https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c)

* [https://blog.opengsn.org/taking-retroactive-grants-from-concept-to-practice-at-gitcoin-grants-round-11-649497d08519](https://blog.opengsn.org/taking-retroactive-grants-from-concept-to-practice-at-gitcoin-grants-round-11-649497d08519)

* [https://docs.trybadger.com/](https://docs.trybadger.com/)

* [https://github.com/FlipsideCrypto/badger/pull/122](https://github.com/FlipsideCrypto/badger/pull/122)

* Curve Registry (unpublished)
