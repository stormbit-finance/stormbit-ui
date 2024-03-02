

## STORMBIT: DEMOCRATIZING LENDING WITH COLLECTIVE DECISION-MAKING
![logo transaprent](https://github.com/Quantum3-Labs/StormBit-monorepo/assets/75360886/91a07912-c74c-4185-89ea-9fbe7ce3512d)



![Static Badge](https://img.shields.io/badge/StormBit_Smart_Contracts-purple)  



StormBit is a pioneering project developed during ETHDENVER, designed to revolutionize consumer lending on XDC blockchain. It introduces a unique lending marketplace targeting the micro-lending sector, seamlessly connecting decentralized finance (DeFi) with real-world financial transactions.

## PITCH DECK 

You can find our pitch deck [HERE](https://github.com/Quantum3-Labs/StormBit-monorepo/files/14469654/StormBit.4.pdf)


## DOCUMENTATION 


For detailed information about StormBit, please visit our comprehensive  [StormBit Documentation](https://stormbit.gitbook.io/stormbit/)


## Overview 

StormBit aims to democratize access to credit, especially targeting the 99% who are traditionally underserved by conventional financial institutions. It offers various agreement types, enabling lenders and borrowers to interact transparently and efficiently in a decentralized environment.


## Architecture 

### Actors 

- **Lender**: Individual willing to contribute to a shared pool and participate in voting to approve or deny loans. Lenders have full control over their pool's - functionalities.
- **Borrower**: Individual seeking or currently managing a loan within a pool. Borrowers can oversee all aspects of their loans, including repayments.
- **User**: Accounts with the ability to view data on the app but limited interaction capabilities with most pools.
- **Pool Manager**: User with the authority to vote on loan approvals within their designated pool.

### Governance & Loans Allocation 

Loan allocation is governed by a voting process, with each loan request presented as a proposal. The StormBitLending contract, inheriting necessary governance functionalities from OpenZeppelin, oversees this process. Key on-chain transactions include:

- **Proposal Creation**: Initiated when a borrower requests a loan, either by depositing collateral (NFT or ERC-20 tokens) or opting for a collateral-free agreement (Simple Agreement).
- **Casting Vote**: Exclusive to stakers, allowing them to vote on loan allocations. 
- **Voting Cool Down Period**: Introduces a delay before considering a voter's input as valid, preventing potential voting power manipulation.


### Agreements on StormBit

StormBit offers three types of loan agreements:

- Simple Agreement: Focuses on trust and the borrower's reputation, allowing undercollateralized loans. It is streamlined for flexibility and simplicity, emphasizing financial terms over asset involvement.

  <img src="./docs/SimpleAgreement.png" alt="SimpleAgreement" >


- ERC721 Agreement: Uses NFTs as collateral, ensuring loan security. This agreement includes mechanisms for collateral management and secure NFT custody, allowing borrowers to reclaim their NFT upon fulfilling loan terms.

  <img src="./docs/NFTAgreement.png" alt="NFTAgreement" >


- ERc20 Agreement: Requires collateral equal to or greater than the loan amount for security. It captures essential loan initiation details and manages collateral throughout the loan lifecycle.

  <img src="./docs/FTAgreement.png" alt="FTAgreement Logo" >

#### Security and Trust
All agreements undergo rigorous security audits, including fuzzing tests, to ensure the highest security standards. Additional checks, such as a voting power cooldown variable, are implemented to safeguard against malicious activities.


## How it works 

#### Flow 

StormBit facilitates credit access by offering diverse agreement types. Any KYC-verified user can request a loan and receive equitable treatment from the pool's owners, bridging the gap between DeFi and traditional finance.

#### Credit Score Oracle  

Refer to this [documentation](https://stormbit.gitbook.io/stormbit/credit-score-composite) for credit score assessement used by StormBit. 

<img width="1040" alt="Screenshot 2024-03-02 at 15 21 34" src="https://github.com/Quantum3-Labs/StormBit-monorepo/assets/75360886/7a418a13-d16c-4ca8-bcb0-ba4e9b66425a">




## Technologies and Innovations

Deployed on the [XDC network](https://xdc.org/), StormBit leverages state-of-the-art technologies to enhance scalability and inclusivity:


#### **ZEEBU**: 
- **Integration of ZEEBU token for governance** : 
  ZEEBU token plays a key role in the architecture of Stormbit as it is the included in the lending process. ZEEBU tokens are distributed to borrowers from the pool where lenders have deposited.

  <img width="780" alt="Screenshot 2024-03-02 at 15 19 41" src="https://github.com/Quantum3-Labs/StormBit-monorepo/assets/75360886/32732895-6cb6-4390-81cf-1141770e42c2">

  

#### **XDC**: 
- **XDC for a better gas usage**: 
  test gas tokens are used for a better gas usage. 




## Contact 
For any inquiries or further information, feel free to contact the StormBit team at contact@quantum3labs.com 











