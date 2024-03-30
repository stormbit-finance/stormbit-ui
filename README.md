<p align="center">
<a href="https://stormbit.finance"><img src="./docs/StormbitLogo.png" alt="Stormbit Logo" width="120"/></a>
</p>



![Foundry](https://img.shields.io/badge/contracts%20built%20with-Foundry-purple)
![ScaffoldETH](https://img.shields.io/badge/monorepo%20on%20-scaffoldETH-purple)
![ScaffoldETH](https://img.shields.io/badge/monorepo%20on%20-scaffoldETH-purple)

![Twitter Follow](https://img.shields.io/twitter/follow/StormbitX?style=social)

## Stormbit: Empowering Inclusive Finance

Stormbit is an innovative peer-to-peer lending platform designed to bridge traditional and crypto financial systems, fostering inclusivity and offering superior yields through custom loans. Leveraging blockchain technology, we provide undercollateralized, NFT-backed, and personalized lending options, aiming to democratize access to financial services.

### What Sets Stormbit Apart?

- **Inclusive Lending**: Committed to providing financial services access to underserved populations through the power of decentralized finance (DeFi).
- **Custom Loans**: Offering the freedom for users to tailor loans according to their specific needs, ensuring flexibility and control.
- **Superior Yields**: Competitive yields for lenders, significantly outpacing traditional banking returns.

### Getting Started with Stormbit

For detailed instructions on how to engage with the Stormbit platform, including installation and setup, please refer to our [Documentation](https://stormbit.finance/docs).



## Setting Up Your Development Environment

Before you begin, ensure you have Node.js installed on your system. This project requires Node version 18.17 or later.


### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Quantum3-Labs/Stormbit-monorepo.git
cd Stormbit-monorepo
``` 


### Install Dependencies

To install the required dependencies, run:

```bash
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


## Running the Application


### To start the development server, run:
```bash
yarn dev
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




### Contribute to Stormbit

Contributions are warmly welcomed. If you're interested in contributing, please take a moment to review our [Contributing Guidelines](CONTRIBUTING.md).

### Security and Transparency

At Stormbit, security and transparency are our top priorities. For more information on our security protocols and how to report concerns, please check our [Security Policy](SECURITY.md).



## Contracts and Development

Stormbit's smart contracts are developed using Foundry, a powerful development toolkit for Ethereum application development. For more details on our contracts, visit the [Stormbit Contracts Repository](https://github.com/Quantum3-Labs/Stormbit-contracts).

## License

Stormbit is released under the [MIT License](LICENSE).

## Legal Notice

Utilizing the Stormbit platform comes with certain risks. We advise all users to thoroughly understand these risks before interaction. Further details are available in our [Legal Disclaimer](LEGAL.md).
