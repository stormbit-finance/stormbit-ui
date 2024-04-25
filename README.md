<p align="center">
  <a href="https://stormbit.finance">
    <img src="./docs/StormbitLogo.png" alt="Stormbit Logo" width="120"/>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/contracts%20built%20with-Foundry-purple" alt="built with Foundry"/>
  <img src="https://img.shields.io/badge/monorepo%20on%20-scaffoldETH-purple" alt="monorepo scaffoldETH"/>
  <img src="https://img.shields.io/twitter/follow/StormbitX?style=social" alt="Follow on X"/>
</p>

<h1 align="center">Stormbit: Empowering Inclusive Finance</h1>

<p align="center">Stormbit is an advanced peer-to-peer lending platform that seamlessly integrates traditional financial systems with innovative cryptocurrency markets. Utilizing blockchain technology, Stormbit offers unique lending options such as undercollateralized, NFT-backed, and fully customizable loans. Our mission is to make financial services accessible to all, empowering underrepresented communities through decentralized finance (DeFi).</p>

## 🌟 Key Features

- **Universal Access to Finance**: Ensuring financial inclusion for traditionally excluded groups.
- **Tailored Lending Options**: Providing the flexibility for users to create loans that meet their specific needs.
- **Enhanced Investment Returns**: Delivering competitive returns, surpassing traditional financial institutions.

## 🛠️ Technological Foundation with ScaffoldETH

**ScaffoldETH** accelerates development from concept to deployment, offering an integrated stack optimized for Ethereum development. It includes:

- **Rapid Prototyping**: Quick setup and iteration of smart contracts and UIs using pre-built templates and components.
- **Next.js**: A React framework for building efficient, scalable, and SEO-friendly user interfaces, ensuring a smooth user experience.
- **Hardhat**: An Ethereum development environment essential for compiling, deploying, and debugging. Enhances the development of complex smart contracts for innovative financial products.
    - **StormBitVault.sol**: Handles the storage or management of assets (either tokens or other financial instruments) within the Stormbit platform.
    - **StormBitLendingVotes.sol**: Involve governance or voting mechanisms specific to lending decisions or policies within Stormbit.
    - **StormBitLending.sol**: Directly involved in the lending processes, managing loan issuance, terms, and possibly interactions with collateral.
    - **StormBitERC4626.sol**: Implements the ERC-4626 standard, which is for tokenized vaults. It's used for managing investment strategies or user deposits.
    - **StormBitCore.sol**: Core contract that links various functionalities of the Stormbit ecosystem.
    - **StormBit.sol**: Central contract that encapsulates the primary functionality of the Stormbit platform, interfacing with other specific contracts.
    - **Staking.sol**: Manages staking mechanisms where users lock up tokens to earn rewards, possibly influencing creditworthiness or voting power.
    - **CreditAggregator.sol**: Aggregates and calculates credit scores or risk assessments based on user activity and history.
    - **AgreementBedrock.sol**: Provide fundamental legal or transactional structures needed for executing agreements within the platform.

- **Local Testing**: Includes a local Ethereum blockchain for cost-free testing, crucial for ensuring secure and reliable financial transactions.
- **Developer Experience**: A cohesive suite of tools enhances focus on innovation, supported by a robust community for ongoing learning and support.

Utilizing ScaffoldETH, Stormbit builds secure, user-friendly DeFi applications, propelling forward our mission of empowering inclusive finance.

## 🚀 Getting Started

Navigate to our comprehensive [Documentation](https://stormbit.gitbook.io/stormbit) for detailed instructions on how to engage with the Stormbit platform.

## 🛠 Setting Up Your Development Environment

### Prerequisites

- Node.js (v18.17 or later) must be installed on your system.

### Installation

Clone the Stormbit repository and install dependencies:

```bash
git clone https://github.com/Quantum3-Labs/Stormbit-monorepo.git
cd Stormbit-monorepo
yarn install
```

### Managing Environment Variables

To configure environment variables for development and production:

```bash 
# Alchemy API Key
NEXT_PUBLIC_ALCHEMY_API_KEY=<your_alchemy_api_key_here>

# WalletConnect Project ID
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=<your_wallet_connect_project_id_here>
``` 


## 🌐 Running the Application


### To start the development server, run:
```bash
cd packages/nextjs
yarn install && yarn dev
``` 

For a production build, execute:

```bash
yarn build
``` 

Then, to serve the production build:

```bash
yarn serve
``` 

### Additional Commands


- Linting: ```yarn lint```
- Type Checking: ```yarn check-types```
- Formatting: ```yarn format``` 




## 💡 Contribute to Stormbit

Interested in contributing? We warmly welcome contributions. Check our Contributing Guidelines for more details.

## 🔒 Security and Transparency

At Stormbit, security and transparency are our top priorities. For more information on our security protocols and how to report concerns, please check our [Security Policy](SECURITY.md).


## 📄 Contracts and Development

Stormbit's smart contracts are developed using Foundry, a powerful development toolkit for Ethereum application development. For more details on our contracts, visit the [Stormbit Contracts Repository](https://github.com/Quantum3-Labs/Stormbit-contracts).

## 🛠 Technology Stack
Stormbit is built using a robust technology stack to ensure security, efficiency, and scalability:

- Ethereum Smart Contracts: Developed with Solidity, tested and deployed using the Foundry toolkit.
- Frontend: built on top of a complete toolkit for web3 dApps :  [Scaffold-ETH-2](https://docs.scaffoldeth.io/). 

## 🌍 Community Engagement
Join our vibrant community to stay updated with the latest developments and participate in discussions:

[Twitter](https://twitter.com/StormbitX)


## 📅 Upcoming Features

Stay tuned for these exciting upcoming features:

- **Cross-Chain Capabilities**: Expanding our platform to support multi-chain interactions (withdrawal from pool).
- **Borrower Explorer**: trust score build with data points from web2 & web3 sources. 


## 📜 License

Stormbit is released under the [MIT License](LICENSE).

## ⚠️ Legal Notice

Utilizing the Stormbit platform comes with certain risks. We advise all users to thoroughly understand these risks before interaction. Further details are available in our [Legal Disclaimer](LEGAL.md).
