# Solana Validator

## Module 01 : Getting Started as a Validator (Part 1)
This module covers the following :
1. Overview of validator setup steps
2. Review important validator operator concepts:
    - Consensus vs RPC
    - Key management for vote account
    - Snapshots
    - Validator catchup
3. Live validator setup

## Module 02 : Getting Started as a Validator (Part 2)
This module covers the following :
1. Start validator and catchup to network
2. Operational setup:
    - Systemd process for validator script
    - Log rotate for validator logs
    - Sending metrics to Solana Labs
    - Monitoring using watchtower 
    - Disable root login
    - Mounting drives uses fstab

## Module 03 : SSH Setup + SOL user
1. Reasons for not using root login
2. Overview of ssh setup
3. Demo ssh setup and SOL user creation

## Module 04 : Software Updates and Restarts
1. Describe the validator restart process
2. Good pratices for a planned restart
3. What do do when your validator fails to catch up

## Module 05 : Monitoring and Metrics
Watchtower is able to monitor :
1. Node delinquency
2. Minimum SOL balance in identity account
3. Cluster stake

## Module 06 : Validator Rewards and Key Management
1. Describe different validator rewards
2. Best practices for key management
3. Creating and delegating stake accounts

## Module 07 : Local Validator State
1. RocksDB
2. Solana Ledger Tool
3. Full and incremental snapshots
4. Accounts
5. Accounts index
6. Tower

## Module 08 : Jito-Solana Concepts + Setup
1. What is Jito-Solana
2. Product Summary
3. Validator benefits
4. Technical Details
5. Onboarding Process

## Module 09 : Validator Startup Logs
Log statements to look for on validator startup

## Module 10 : Backup Validator Setup
1. Reasons for a backup validator
2. Overview of the transition process 
3. Demo a voting validator transition from primary to backup

## Module 11 : Failure Case Discussion
1. Overview of current techniques and resources
2. Tower BFT file concepts
3. Open discussion on failover startups

## Module 12 : Security Best Practices
1. Harden your ubuntu server BEFORE running a validator 
    - Disable password login for SSH, disable login as root
    - Update your server regularly, consider unattended upgrades
    - Install fail2ban for intrusion detection
    - Install a firewall like ufw
2. Validator key security best practices
