# Hello Solana!

This repository contains all the source code written during the learning process 
of [Solana Development Course.](https://www.soldev.app/course)

Thie course is broken down into the following :
### dApp Development

1. Introduction to Cryptography and Solana Clients
    1. Cryptography Fundamentals (Create and load keypairs)
    2. Read Data from the network (Connect to Solana and check account balances)
    3. Write Date to the network (Make transactions and use Explorer)
    4. Using custom on-chain programs (Make transactions from a custom onchain program)
    5. Interact with wallets (Make a React frontend to the Ping program) 
    6. Serialize program data (Build a react frontend to submit movie reviews)
    7. Deserialize program data (Build a React frontend to show movie reviews)
    8. Page, Order, and Filter program data (Adding paging, ordering and searching for reviews)

2. Client Interaction with Common Solana Programs
    1. Create tokens with the Token Program (Mint, transfer and burn tokens)
    2. Create Solana NFTs with Metaplex (Mint NFTs, update their metadata, and associate with collection)

### On-Chain Program Development

1. Basic Solana Program Development
    1. Hello World (Create and Deploy a 'hello-world' on-chain program)
    2. Handle Instruction Data (Receive movie reviews and deserializes them)
    3. State Management (Store movie reviews)
    4. Basic Security and Validation (Add security checks and updates to the movie review program)

2. Intermediate Solana Program Development
    1. Local Program Development (Configure Windows, Mac and Linux for localhost Solana dev)
    2. program Derived Addresses (Use PDAs to store comments for the movie reviews program)
    3. Cross Program Invocations (Use CPIs to mint token rewards for reviews and comments)

3. Anchor Program Development 
    1. Intro to Anchor development (Create and deploy a ping-counter on-chain app using Anchor)
    2. Intro to client-side Anchor development (Create a React and Anchor frontend for the ping-counter app)
    3. Anchor PDAs and accounts (Use Anchor to create a Movie Review program)
    4. Anchor CPIs and errors (Mint token rewards for reviews)

4. Beyond the Basics
    1. Environment variables in Solana programs (Create feature flags to help test locally)
    2. Solana Pay (Use QR codes to create payment requests)
    3. Versioned transactions and lookup tables (Using a lookup table to handle many accounts in a single transaction)
    4. Rust procedural macros (Use Rust macros to generate program code)

5. Solana Program Security
    1. How to approach the Program Security unit (No lab)
    2. Signer authorization (Check signers are correct before processing transactions)
    3. Owner checks (Check owners are correct before processing transactions)
    4. Accoutn data matching (Check account data is correct before processing transactions)
    5. Reinitialization attacks (Ensure accounts can only be initialised once to prevent overriding data)
    6. Duplicate mutable accounts (Ensure accounts are distinct)
    7. Type cosplay (Implement checks for correct account types)
    8. Arbitrary CPIs (Implement checks for correct account types)
    9. Bump seed canonicalization (Ensure bump seeds are always canonical)
    10. Closing accounts and revival attacks (Ensure accounts that are closed can't be reused)
    11. PDA Sharing (Ensure PDA design avoids shared accounts)

6. Advanced Solana Programming
    1. Program architecture (Create an optimized on-chain RPG game)
    2. Oracles and oracle networks (Use Switchboard to create an Escrow program)
    3. Verifiable randomness functions (Add randomness to the Escrow program)
    4. Compressed NFTs (Mint, read and transfer NFTs at scale with Bubblegum)
    5. Generalized State Compression (Build a Notes program using State compression)

### Solana Mobile Development
1. Solana Mobile Development
    1. Introduction to Solana Mobile (Build Android counter dApp with React Native)
    2. Exploring Mobile Wallet Adapter (Builda  simpe MMA-enabled mobile wallet)
    3. Build Solana Mobiel dApps with Expo (Mints NFTs from photos)

