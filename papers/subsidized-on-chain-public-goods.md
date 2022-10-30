title:Subsidized On-Chain Public Goods
date:Sep. 09, 2022
author:danner* and CHANCE+
description: Through the use of publicly contributable vaults purpose built to pay gas on behalf of users, blockchains can fund public goods with certainty that funds will not be misappropriated and without directly enriching grantees.
---
Through the use of publicly contributable vaults permissioned solely to pay transaction fees on behalf of users, grantors can fund public goods with certainty that funds will not be misappropriated and without directly enriching grantees. Use case specific applications surfacing highly flexible protocols and primitives may merit retroactive public goods funding from networks in which they are deployed. As highly usable and desirable implementations, these applications and protocols will be demanded by existing users and may potentially draw in new users. Vaults funded by blockchain foundations and network participants will be used to subsidize the usage of these applications.

Historically, initiatives have required the raising of funds to design, produce, and distribute a product. In Web2, this was often through venture capitalists who acquired equity in the initiative and sought to profit from it. In Web3, we have seen a wider variety of funding models – with outcome based desires that vary from traditional private equity models.

Throughout 2021 and 2022, the blockchain industry has operated based on a diversified capital stack composed of venture capitalists, professional and amateur market makers, speculative retail traders, and treasury grant issuance. While much of that capital stack is familiar, treasury grant issuance is nuanced and accounts for a large amount of the capital directed towards those who create value for the network. 

One of the most admirable and fascinating types of treasury grant issuance is retroactive public goods funding. Optimism has been a leader in this space. Retroactive public goods funding is the idea that grant distribution is made easier by rewarding what was useful rather than what might be useful.

One of the more interesting uses of capital has been to subsidize the costs of on-chain transaction fees for users. DAO tools, NFT product lines, etc; developers and businesses have found ways to improve end user experience by paying their fees for them. In traditional businesses, this may be viewed as a cost of customer acquisition and is often a teaser rate. While we have not seen crypto companies adjust their models yet, we must recognize that at scale, paying transaction fees on behalf of all users is not a maximal or even sustainable business model.

The Badge Bound Pay Master primitive empowers subsidization of any on-chain product line. 
  
## Full Spectrum Funding in Web3

Optimism has made a commitment to fund the first public goods exit. With their focus on retroactive public goods funding, they wish to scour the market for teams and products that have created value for the wider network and to reward these teams.

Critically, retroactive public goods funding requires that the good has already created value. 

While some developers may pursue retroactive public goods funding upon adoption, they may still need to raise up front capital required to develop and distribute their product.

Through a combination of venture capital and retroactive funding, developers may access capital at the beginning and end of their journey. As noted above, a portion of raised capital is often utilized by businesses to support the subsidization of transaction fees throughout the development and distribution of the product.

With the introduction of Badge Bound Pay Masters, developers can access capital solely for the purpose of subsidizing on-chain transactions associated with their product. For the first time, money can be publicly raised for the sole purpose of on-chain operational overhead.

1.  Private capital may be raised to develop, deploy, and market via venture, grants, etc.
2.  Public funding can be accessed to ease user adoption via Badge Bound Pay Masters.
3.  Public funding may be accessed via retroactive public goods funding 

Badge Bound Pay Masters may be utilized by for profit and non-profit teams depending on their unique goals and circumstances. This paper makes no claims about the feasibility of accessing various capital stacks but does assert that this new conduit creates a value flow from grantors to users and grantees without directly enriching grantees.

## Delegated Transaction Execution

The Flow blockchain has been a leader in crypto consumer products. From CryptoKitties to NFL All Day and everything in between, Dapper has focused on end user experience from the beginning. One of the critical features of Dapper products on Flow is that all chain transaction fees are abstracted away from the end user. This experience is far superior and drives widespread adoption but we have not seen it fully penetrate the EVM user experience.

Over the past year, a number of DAO tools have begun to adopt delegated calls that allow them to subsidize transactions for users. For example, MetricsDAO and other organizations use Utopia and Parcel to process transactions from the multisig without the need to pay gas costs. By offering this service, these tooling organizations are able to drive adoption at a much higher rate.

-   Subsidization implementation 
-   Flashbots ? 
-   Transaction bundling ? 

## Badge Bound Pay Masters

Through the introduction of a public funding address to support subsidization of gas costs for a protocol alongside permissioned access to those funds, development teams can flexibly deploy product lines with distinct and secure user subsidization mechanisms. In addition to the design space that this provides to developers, implementers, and operators, Badge Bound Pay Masters allow grantors to maintain public insight into the use of their funds and to trust that funds will not be used improperly.

  
-   Implementation details 

A public address that can accept funds from anyone and may be deployed towards permissionlessly created targets is ripe for exploitation. For example, someone may set up many Safes with Parcel and begin to run excessive transactions. Through this exploit path, a malicious actor may drain a protocol bound pay master.

Badge Bound Pay Masters allows for much more sophisticated pay master binding structures.

Rather than being relegated to a single vault for a product. Implementers may use Badges to represent which addresses may utilize the Badge Bound Pay Master. Issuance and revoking of Badges for any given pay master may be manually or programmatically managed. 

Products that currently subsidize for all users may introduce freemium or VIP tiers that are managed manually or through any number of automated strategies. Examples and potential implications of various multi-dimensional subsidization models are explored below.

## Application Driven Value Creation & Grant Based Funding 

Primitives and protocols are valuable due to the applications that expose them to users. Applications may have multiple product lines that they offer to their users. These products may range from free to paid and may access different aspects of the capital spectrum. Historically, raising venture capital and accessing public funding via grants has been blurry and contentious and accessing venture capital and public goods funding simultaneously has been nearly impossible.

With the flexibility provided by product line specific Badge Bound Pay Masters, capital can be directed by any party (public or private) with high certainty that it will be used to subsidize transaction costs. Grant programs have struggled to follow the trail of funds and to attribute specific outcomes to them. With on-chain vaults purely permissioned to subsidize transaction fees, this problem does not apply. 

There are grantors who wish only to subsidize product lines that meet their criteria, investors who wish to manage on-chain operational costs independently of equity positions, good samaritans who wish to make a product more accessible to others, etc. This type of financial management is now possible.

Due to the public nature of funds transfers and usage of on-chain vaults, following the money has never been easier. Furthermore, usage stats and costs can be easily tracked, accounted for, and projected. Funding request amounts can be supported by historical data and can be constantly monitored.

## Multi-Dimensional Subsidization Rates

A number of heuristics may be used to determine subsidization multipliers. These heuristics may be independently configured, layered, and aggregated depending on the desired outcome. At this stage, aspects of this remain conceptual – but the primitive are fully implementable.

Dimensions and the intersection of those covered here is not comprehensive.   

### Usage Metrics

Products may track metrics related to their users and manage subsidies based on usage.

1.  Power User Incentives

![](https://lh6.googleusercontent.com/FEv48znZlvnZolvKu3G6psoouXy81zhSI04-AXGuVAv7zEmqzzHgFtPW7cO07Dz2WJfldWZjJ4zzCU5Bs8STsLlb_kXJBKSriZTNU80T8bslNRMQmDisRQYC24dOqmJR60w4MUhLlTaHAKMtj4TdEe972orfdIMKluBiFyAJBy1usXaDmAGSXEMTZQ)

Products may wish to subsidize transactions for their heaviest users. This rewards power users and creates an incentive mechanism that may increase adoption as users unlock more free access as they pay over time. 

2.  Teaser Rates

![](https://lh6.googleusercontent.com/L9nL90U0dco_9q3XbbQDFgvrVF6b0sgge8j00Syod3GWD-w_2oF5tB0_dXJZFyPQIDUoHTU4X8bOuhRTOFQkSEdbtfmwW3wd1yo22asy24ENM4HtK-YYjgKo0nCMGKq7D-h2CrVOpjMR6Wq39QMyEx7OpbB6eiAwKty9CSg5HgIA1lbsUWF38n7JDA)

Products may wish to subsidize transaction fees for new users and then to increase costs over time. This is most similar to models seen on credit card interest rates, ISP/cell provider changes, etc. New users get hooked and then need to pay for access as they increase usage.

3.  Dunning Kreuger

![](https://lh4.googleusercontent.com/21VDiG9r9ll6n3kTx4sGhRrHAlDpYN6ZTg462c9NnmRBJFI4IwqgD_9oWaTpsJkluyvLyj9bzw8vkJ3CQaThG4K7VW09Z-N5F3yWt90wYwBaIpCdgYZRBjPVEZA9eZH4_fIedLjQi95SjeiIlP3nyIqGjEVtzflT0v4B6RjJG9HBI-ogkSxV8INgtA)

Products may wish to ease early adoption before adding friction that is removed once the user becomes more active with the product. This could create situations of quick adoption and then ongoing subsidization to users who engage heavily with the product.

### Subsidization Vault Depth

Products may adjust the level of subsidization they are willing to provide based on the depth of funds available for subsidies. Combined with the Curve Registry, vault depth heuristics may be extremely flexible. The below describes general structures, but not the values of the variables required to create the curve.

1.  Altruistic Alignment

![](https://lh5.googleusercontent.com/LdqNoJwz53HBRKAJre1K3Lef1NGMuXBBykClLSe7-Iw0xKFzQTn-SW8P2ogK7hGnET6CXvDzgX_cWlQhNnUEa75y57F5txyBoIxBCechA0yzG-8d5DqZ0ASPsACHc8YB1S2ywN_mm0q40ETbg4qYYH74wSmUi7UETLQCw9QRBmFwirQjMqGKSzsSEg)

Products may wish to allow transactions to flow freely when there is great depth and for transactions to receive less subsidization when there is lower depth. As funds decrease and subsidization decreases, it benefits all users to add funds to the vault.

2.  Cornucopia Deployment

![](https://lh4.googleusercontent.com/SBCXev9iAhQ_ifQ6UfCuMmi8XyxWMqZarZ9lBynYOh-VzvPOc3St1nRQuHLsJZo3LJVh7BqPjZBsXNVKUE10vyR3t0SJP-eTjPBMPF5y0j7CBzgevyojIlvEHPicOTCeBzIw6NeqtQwjpknmxCemhBgnaF3jErItNnRypNP4KZyybBzs4eRkJ20Kbw)

Products may wish to issue subsidization consistently, regardless of vault depth. In this case, the curve is flat and funds are simply drawn down. Funds may be added but the subsidization rate is not impacted by vault depth. This creates a scenario in which users are incentivized to use what exists before it disappears without regard for their impact on others.

3.  Sisyphus Friction 

![](https://lh6.googleusercontent.com/LA30IHqhdvL2F2lRbTGARWSTCuJza6s42sdZaZKzb5DFQ_aq3muBzcWe07N1kzunl7F2Bb63ujpeFM0nPWaAJyXhCk6tVp90piGk80-_Tr-cYYbqMivcHxQ5hVN1Ob_ZCzGBT3OnyJyyZZf0A6hMP_YO5fwX5RovVRFVf3iVCoYyO9swSoe9RPsvvA)

Products may wish to slow the subsidization of a feature line. In this case, a curve that lowers the subsidization multiplier may be used. As funds are added to the vault, the usage of features increases.

4.  Dunning Kreuger

![](https://lh6.googleusercontent.com/p32Wzu9l6603GABcuRHuAObfQx7wITTQKn-p9mnwWCFiVVpKWqyuDbSMw92s_khU7sjYjp4iAHCdqcb3AMyPFDbLOlfYyouDcUJT_EzUX-mjd57vxIgdQldrjdzJ7aOPSMtNXq_YFD2KGyHtmjgRZ47MgE6ZVuFv6pjkGIBS9YAFvi7xkg5PH-9s1A)

Products may wish to ease early adoption before adding friction that is removed once the user becomes more active with the product. This could create situations of quick adoption and then ongoing rewards to user

### Managed Tiers

Products may wish to add a layer of tiers that can be applied programmatically or manually. If a user meets certain criteria, they may immediately fall into a specific category. If a user pays for increased tiering, they may receive a special multiplier.

While this covers a range of the heuristics that could be used to determine subsidization rates for distinct users, the level of flexibility in this space is highly underexplored and due to the composable nature of these primitives, implementers may add new heuristics or determine new intersectional layering that is best suited for their environment.

### Cross Chain Presence

As the EVM ecosystem has flourished, contracts have suffered from the reality that they do not share the same public key on all networks. While externally owned accounts (EOAs) benefit from the same public key on all chains, contracts can only achieve this if deployed using Create2.

As the historical leader in EVM multisig solutions, Safe has implemented Create2 optionality but has not exposed it on the front end. Due to the lack of understanding around this functionality, [Wintermute lost 20m OP](https://cryptobriefing.com/wintermute-makes-optimistic-assumption-loses-20m-optimism-tokens/) ($15m USD) by providing their Ethereum Safe address without ensuring that they had the same public address on the Optimism network. Widespread implementation of Create2 will stop these types of errors from occurring in the future.

Organizations are already beginning to propagate across multiple chains. In the past, a DAO or token network may have been limited to one chain. In the future, token networks will exist across many chains. Protocols that are available on all chains empower developers, users, and operators to utilize the tools they want, where they want them.

## Use Case 1: Subsidized Organization Management with Badger

As the premiere key issuer for on-chain organizations, Badger allows you to manage group policies on-chain with a flexible ERC-1155 minter and a purpose built application. At its core, Badger is a public good that anyone can use to create an on-chain organization or launch a DAO. Badger may be utilized by for profit companies, DAOs, schools, etc. It is 

An EVM chain such as Optimism that wants to support the growth of DAO’s in its ecosystem may fund a Badge Bound Pay Master. This vault could be limited to transactions on the Optimism chain and may even be limited to a select category or organizations as determined by a committee or through programmatic means.

Organization operators that meet the criteria determined by Optimism receive a Badge that gives them access to the badge bound vault. Through this mechanism, Optimism can reduce friction for operators who want to launch and/or manage their DAO with Badger.

While the transaction costs to deploy an organization using Badger on Optimism may seem inconsequential to some, these costs may be inordinate to others. Through permissioned subsidization of these costs, the launching of on-chain organizations can be made more equitable.

## Use Case 2: Subsidized Participant Payments for MetricsDAO

MetricsDAO runs on-demand analytics services facilitated through labor markets and makes payments on multiple EVM chains to the analyst and subsidizes payments in its network. To maximize user experience, MetricsDAO subsidies payments for its participants. This requires making hundreds if not thousands of payments monthly which adds up, especially on more expensive networks such as ethereum.

By introducing a Badge Bound Pay Master that accepts public funding and is permissioned for use by MetricsDAO’s protocol, participants subsidized payment flows can be supported by MetricsDAO, its stakeholders, and any grantors who wish to support the MetricsDAO mission in a straightforward and measurable way.

**References:**

[https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c](https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c)

[https://docs.trybadger.com/](https://docs.trybadger.com/)

[https://github.com/FlipsideCrypto/badger/pull/122](https://github.com/FlipsideCrypto/badger/pull/122)

Curve Registry (unpublished)