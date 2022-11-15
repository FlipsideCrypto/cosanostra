title:Badger Redefining On-Chain Credentials
date:Nov. 16, 2022
author:CHANCE+ and danner* and masonchain+
description: Traditional businesses and organizations have historically used methods of top-down management to streamline operations by attempting to lower costs and more strongly control internal actions and external outputs. Inside every organization, whether real or digital, there exists an internal definition of who has access to do what.
---
Traditional businesses and organizations have historically used methods of top-down management to streamline operations by attempting to lower costs and more strongly control internal actions and external outputs. Inside every organization, whether real or digital, there exists an internal definition of who has access to do what. The general requirement of organization operation has demanded multiple levels of integration and access, yet the blockchain has remained infantile with absolute refusal to acknowledge centuries-old wisdom before now.

Badger enables flexible on-chain role management. 

Traditional technology enabled organizations use tools such as Microsoft’s Active Directory to handle role based account provisioning. Badger allows anyone to create any arbitrary role management system for any arbitrary roles entirely on-chain. Role management systems created with Badger are immediately interoperable with a plethora of tools for on-chain organizations.

While effective, every organization operating with a traditional top-down approach operates with an artificial ceiling to the level at which they can truly scale. The advent of blockchain technology, adoption of tools, and increased emphasis placed on decentralization has resulted in ineffective bottom-up organization expectations. As a permission based tool in a permissionless world, Badger provides a middle-out solution that allows operators and administrators to scale and morph the structure of their organization on-chain as needed. Organization growth is no longer limited by its leaders or overly reliant on individual contributors.

With the introduction of globalized access containing local context and individualized costs an organization unlocks the ability to have a high-level permission system that enables highly topical access; difficult for centuries in all manners of commerce and human-organization.

The land of improved on-chain credentialing is free and open to all. The only requirement is that an organization is ready to enjoy the benefits of being on-chain.

# 1	Overview

## 1.1 Preamble

This document is split into sections that highlight each critical piece of **_<span style="text-decoration:underline;">Badger</span>_**. 

Section 1 outlines the top-level concepts of **_<span style="text-decoration:underline;">Badger</span>_** and the differences when compared to already existing implementations in the on-chain tooling ecosystem. Followed by the visualization of each development-layer, where the three different levels of usage for **_<span style="text-decoration:underline;">Badger</span>_** is explored in-depth. Finally, the driving mechanisms that add value to the primitive are explored in Section 3 that provide greater context around the usage and end-user consumption of the product.


## 1.2 Powerful On-Chain Credentials

With the increased adoption of blockchain technology, not “crypto”, a growing concept has been that of a DAO. A DAO, decentralized autonomous organization, is a collective of people that have the capacity to govern oneself (The _A_ does not stand for automatic!). 

A significant limiter of success though, has been that it is difficult for DAOs to be effective without the ability to control a multi-tiered system of permissions. No business is run as a direct democracy; there are too many decisions to be made too quickly. For many of the existing ecosystem participants, the resulting solution has been to create a monolithic multi-sig account that permits a few _far-too-powerful_ people with the ability to control a significant amount of power given they meet quorum. There are no checks-and-balances, only a small speed bump.

**_<span style="text-decoration:underline;">Badger</span>_** aims to provide the next level of sophisticated credential usage within the EVM ecosystem and in turn empower design space that was not previously capable with discretely defined monolithic structures. Unlike previous implementations, Badger organizations can evolve with their underlying operators and users. 

The introduction of Badges as credentials enables a concept that is similar to: instead of getting a license that says you can drive all motorized vehicles, you get a license that verifies your ability to drive a car.

## 1.3 Not just DAOs

Critically, on-chain organization tools are not just for DAOs, and that is the focus of **_<span style="text-decoration:underline;">Badger</span>_**. As traditional organizations become more welcoming of blockchain-related benefits, the need for top-down management is not _step 5_, but _step 0_. **_<span style="text-decoration:underline;">Badger</span>_** aims to serve those that need mechanisms of capturing the benefits of an organized group of people on-chain without all the nuance of governance and object execution. _A Badge is the key to the house; not the house._

This means that an organization does not need to be decentralized to gain the benefits of managing certain tasks on a blockchain while still being able to offer the framework of decentralization as well for those interested. This is not to say that decentralization is ineffective or not a necessary part of a democratized good. Badger approaches the market with a _middle-out _solution that allows every Organization to make the decision if they will instead become _top-down_ with the removal of discrete leaders through the transition to decentralized management. Critically, Badger Organizations are transferable, enabling an EOA to launch and seed an organization before transferring it to a committee or smart contract for ongoing management.

Utilizing <strong><em><span style="text-decoration:underline;">Badger</span></em></strong>, on-chain organizations and DAOs are enabled to seamlessly control the permissions and access of their members across a wide range of interoperable tools.

Acting as keys, Badges unlock a low-cost and near-effortless approach to associating the proper credentials and access to specific individuals. With an immense amount of design space, the value of **_<span style="text-decoration:underline;">Badger</span>_** is realized through the combination of the on and off-chain locks that protect the access levels, information, tools, and interactions provided by an organization.

With flexible functionality, interoperability and composability, **_<span style="text-decoration:underline;">Badger</span>_** remains the obvious and effective choice for any organization that does anything on-chain requiring a level of trust and permission. _Choosing another mechanism to handle access policies will inevitably lead back to the use of Badges given enough time._

The functionality offered by the application makes it the right solution for those with no technical knowledge, while remaining the best choice for more technical and power users due to the flexibility offered with the independently customizable foundation. Integrating with other popular tools such as Guild, Snapshot, Wonderverse,Dework and JokeDAO, the members of an organization can be managed from a top-down level by administrators with ease.

While a strong foundation is offered by default, if a use-case or need has not been covered, it can be, which means no longer does every piece of a network require its own unique _access mechanism_, only a unique _access policy_.

# 2	Access Endpoints

Badger is constructed to allow three levels of interaction by users.

## 2.1 The Primitive

The Badger primitive consists of the smart contracts that support the system. At a base level, Badges are collections of ERC1155 tokens that are permissioned to be individualized and controlled by the contract owner. A factory handles the deployment of the organizations’ ERC1155 contract(s) and takes no oversight or control over the contracts deployed. 

The created contract that acts as the organization or collection of Badges is fully owned and managed by the contract owner. This controlled collection, separated from any other sets of Badges, is the skeleton of the body that represents the on-chain presence and system of an organization. The primitive bones can support organizations of many shapes and sizes.

The primitive is the un-opinionated foundation that the Badger Protocol, Badger App, and any every consumer can build upon. The primitive itself offers no out-of-the-box functionality for an end-user unless the end-user intends to build their own stack of code on top of it.

## 2.2 Meta-Protocols: Localized Networks

The protocol of Badger has a far more conceptual existence than any other piece of the product. The protocol is functionally defined by the modules activated by the organizations utilizing the primitive.

With the unique combination and definition of configurations, every Organization has the ability to create _meta-protocols._

The _meta-protocols_ are the customizations to the primitive made to suit the needs of the administrator. Interchangeable modules that alter the behavior and interaction of the Badges are available to be used at will to ensure the credentialing system desired by the organization works exactly as intended.

* Make the Badges claimable by anyone desiring one, 
* Gate the Badges behind on or off-chain criteria, 
* Prevent changing ownership after distribution, 
* Or utilize the Badge as a reputation score. 

Modules enable a plethora of use-cases and more continue to be discovered as development of supporting systems progresses. As the primitive is the skeleton of the body, modules can be thought of as the muscles, connected to the skeleton and facilitating all the direct actions the organization takes.

## 2.3 The Application

The Badger application is the top level and most frequented layer of the system by users. This interface enables an organization to create Badges, monitor organization holdings and statistics, and control customizations of the organization and Badges.

The application is the level that offers the easiest access and allows users to navigate and be guided through setting up their organization without having to read, write, or even think about the code underneath. 

If the primitive is the skeleton and the protocol is the muscles of the organizational body, the application is the skin and appearance. It is the source for monitoring information and receives direct input from external sources. 

# Mechanisms of New-Age Credentials

### 3.1 	Operationalized Organizations

For years, when an organization has had the desire to organize on-chain it has been difficult or impossible in some cases. Largely, due to the lack of granular control of access permissions which often resulted in giving an individual too little or far too much power to perform the actions within their scope.

Not every action within an on-chain organization needs to be multi-sig driven or even verified by multiple participants; trust must exist on-chain to reach a fully trustless network-state. With the operational expectation that individuals are required any time a signature must be signed, the claim to improved “scalability” is demonstrably false. 

Every second of every day, individuals of the global workforce complete tasks without the micro-managed clearance of the organization one operates within. Yet, that has not been the case for nearly every organization moving on-chain.

Badges redefine the expectations and dynamics of trust and expectation for an on-chain organization. Adding depth to the idea of ‘top-down management’, **_<span style="text-decoration:underline;">Badger</span>_ **postulates that having centralized managers of heavily scoped responsibilities, is not _top-down_, but _middle-out_. 

This nuance brings the needed framing and perspective shift to visualize that true top-down management of an on-chain organization is the decentralized implementation. No piece of a decentralized organization, a DAO, is truly bottom up for there are always responsible individuals fulfilling the needs of the vital obligations.

By first adopting a middle-out approach, every organization has the ability to remain efficient to the largest degree while maintaining model definition flexibility that can shape and grow the operations within the organization over time.


### 3.2 	Managed Permissions Distribution

In a workforce that continues to become more freelance-driven every day, the calls for dynamic permissions that can be given and revoked on a highly contextual basis have become louder and more common.

Traditionally for the blockchain, this has meant the management of a monolithic organization list that is managed through a slow-moving multi-sig; often creating more problems than have been solved.

The use of **_<span style="text-decoration:underline;">Badger</span>_** offers a far more efficient way to manage one's digital organization by conceptualizing permissions as roles rather than task-based access. This means that when an individual is added to a team inside of an organization, a single Badge can be provided that enables all the needed permissions to the team-adopted tech stack while simultaneously unlocking all communication channels in another utilized tool.

Onboarding is not the only area of improvement. Often, it can be difficult for a traditional organization to revoke access completely and in an instant. Again, Badges make that simple for every managing member of an organization with the constant ability to revoke a Badge from an individual.


### 3.3 	Tiered Permissions

Badger fills the hole of the lacking tiered permissions with the ability to create multiple Badges, each representing a role and unique level of access and controls. The implementation has remained entirely un-opinionated and maintains full capability to be used in nearly all existing Web3 tools and frameworks without requiring any new token standard or organization procedure beyond the management of the Badge distribution.

For example, an organization may have three roles such as Manager, Curator and Associate. 

* The Manager may have permission in the chain-wide ecosystem to perform admin-level controls, likely managing funds and addition of other Managers.

* A Curator may have mid-level access that provides the ability to have a second-tier of individuals devoted to just maintaining a specific vertical of the organization, product, or project.

* An Associate may be a consumer of the existing products that needs a direct communication channel to a hand-delivered support gateway.

Badger has avoided the inclusion of all usage opinions and solely focused on enabling functionality that can be used at the definition of the operating organization. An organization administrator could establish three Badges and then begin to establish token gates for those roles’ decentralized tool stack.

### 3.4 	Member, Key & Tool Rotation

Churn of organization members is a common and expected thing that cannot be modeled out or abstracted away. The graceful entry, departure and shifting of organization team members is a critical piece of running an agile and efficient organization.

Whether an organization is adding, removing, or shifting an individual the process when generalized is very similar. The permissions need to be updated and there is no need to have 15 supporting tasks to consider it complete. Instead, the use of Badger enables the organization to easily rotate members in and out of an organization without significant labor or technical cost.

Additionally, the rotation of members is not the only shift that could take place inside a growing organization. It is not abnormal to have the operational scope of a role updated. Instead of needing to update several places for every member of a role, a single place of access can be updated that is immediately reflected in the access policy of every member.

Unlike the real world, the operation of every individual on-chain takes place through a pseudonym hash, such as 0x000...00000000. Operating on an EVM blockchain, individuals must have a digital wallet that can hold ERC-1155s. Risk and security practices are a new piece of ideal organization management in Web3. Management of the nuance can be simplified, however, to a point largely minifying complexity.

If someone happens to lose access to their wallet or the wallet is compromised, the organization can easily revoke access of the impacted wallet and provision a new wallet for that individual.

Finally, the rotation of roles and access come at regular intervals for many digital organizations. The market evolves fast which brings constant evolution of processes and supporting tools. With the use of Badges, rather than needing to configure every new system for a long list of individuals, definition is as simple as pointing to a Badge.

### 3.5 	Exogenous Mechanisms

Badger adopts the idea of plug-and-play modules and adds further velocity to the implementation to fully support the needs of modern organizations. Critically, when compared to the existing primitives and protocols in the EVM ecosystem, few provide exogenous building capability in a similar way.

Historically, exogenous modules of a protocol have enabled new functionality inside the already defined mechanism being interfaced with. For the first time, a credentialing implementation offers the straightforward ability to expand the internal and external operational mechanisms. This capability means that an organization is not bound to the definition of an _app layer_ at any time nor has any opinion been introduced that makes something _impossible_.

For example, a list of exogenous mechanisms now enabled with Badges include:

* Complex transaction gas subsidization.

* Granularly refined execution parameters of organization actions.

* A global reputation system using localized endpoints.

The possibilities are endless and every user has the ability to adjust the internal mechanisms of the organization with the creation of new on-chain smart contract modules or the integration of already existing tools and mechanisms.


### 3.6 	Eternal Forfeiture

In the wake of the growing popularity of Internet Organizations, the concept of soul-bound, where a piece of data is eternally stored and associated with a specific identifier, has dominated the market and created the need to answer philosophical questions that neither the market or any individual person are truly ready to answer. More importantly, even given a perfect answer the needed mechanisms to _safely _offer a truly soul-bound solution does not exist today.

Due to this, and unlike most comparable tools and related proposals, Badger decisively does not adhere to the “soul-bound” nature of tokens being distributed to a wallet nor is any mechanism of _consensual minting_ forcibly integrated. Further, due to the divergence from the market-accepted definition of ‘soul-bound’, Badges are hereby referred to as pseudonym-bound.

Making a token forever permanent in a wallet does much more harm than good, as good actors can be labeled, doxxed, and implicated in various ways with no ability to opt out. Meanwhile, a bad actor can easily create a new wallet and disassociate from their soul-bound Badges and labels with no repercussions.

Pseudonym-bound tokens achieve the exact same functionality as soul-bound minus the fact that a Badge can always be forfeited. No Badge can act as a permanent stain or scarlet letter that eternally marks a wallet with undesired or unwarranted labels or classification. 
 
Further to this, Badges do not have to be pseudonym-bound as they may be defined so that they can be sent back and forth between holders at will. Even when a Badge has been marked as non-transferrable, a holder of a Badge will **_always_** have the option to forfeit the Badge by transferring the token to the burn address directly.

### 3.7 	Claimables

Serving as one of the many built-in distribution methods of Badges, an organization can opt to not directly mint to the users, but instead provide the desired individuals with the ability to claim and optionally pay (Section 3.9) for the Badge to mint if desired.

To facilitate claimable Badges, a Badge can be marked as claimable which allows any individual with a wallet to claim. Furthermore, claimables drive the ability to have generalized minting gates, whether paid or not.

One may find the use of a claimable Badge as:

* the onboarding mechanism for a new community,

* the minting gate for unlockable earned in-game,

* any general NFT mint.

Critically, a claimable badge identifies the minting of a Badge as lacking unique minter verification. This means that a claimable badge can be free or paid, but the claim may always be open to the public with no granular gate definition.

Of course, due to the exogenous capabilities discussed in Section 3.5, a consuming organization maintains full capability to further extend the default minting experience with the assistance of an on-chain wrapper contract that appends pre-processing and post-processing logic.


### 3.8	Custom Signers

Determining who can mint a Badge or more critically, when, has introduced countless challenges for every previous attempt to create a heterogeneous credential solution. Badger enables an immense amount of design space with the introduction of custom defined minting signers.

With the ability to define a custom minter, an Organization is not just limited to predefined minting conditions nor to what can be stuffed on-chain. With the use of a custom signer, an organization can create a custom minting and token delivery experience that completely abstracts away the need of user interaction with Badger. The existence and use of a custom signer enables the ability to access all the benefits available at the primitive level without ever technically requiring that the recipient be aware of the foundational mechanism used to create or deliver said token.

This introduces further design space such as instead of directly minting a Badge to an assortment of individuals, the signer address can create and sign a message that states a claiming address is allowed to mint a specific amount of the Badge. 

Then, when the claimer wishes to claim and mint, a user can provide that signed message from the signer that provides them with the on-chain permission to mint. Additionally, this functionality introduces the ability to create self-serve mechanisms that remove the need of knowing and/or defining the recipient details before claiming.

### 3.9 Payables

Payable Badges offer organizations the ability to gate the minting of a specific Badge behind a payment. With the ability to set the type of payment to a defined amount of ETH, ERC20, an ERC721, or even an amount of another ERC1155 an organization maintains not only the ability to distribute badges, but monetize that distribution. At any time, an Organization and the managers of the Badge may adjust the associated payment required to purchase a Badge.

Payable badges unlocks design space not capable of being achieved before such as:

* Mints inside existing organizations and collections.
* Consumable access upgrades. (Use low level Badge as payment for high level)
* On-chain software licenses.

Maintaining the requirement of no introduced opinion, Badger has left all payment details under full control of the organization managers. Finally, not every Badge will need payment. Therefore, an organization can always choose not to add a payable. Payable Badges become a far more useful and powerful mechanism when not just used as a mechanism of end-user monetization.

# 4	Conclusion

For too long traditional, modern, and even blockchain-based credential solutions have championed the monolithic and hyper-localized approach. It has prevented the ability to have module access policies for a global access state. With the internal integration of _Badges_, an Organization can benefit from management practices of the 21st century without having to tear everything down and restart.

	The world and design space enabled by flexible keys has just begun to be explored. The real value is for you and every organization to find and craft.
