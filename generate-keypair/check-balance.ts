import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

// Lamport : Sol :: Paise : Rupees :: Cents : Dollar
// console.log(LAMPORTS_PER_SOL);

// Sample Public Key : E6BaU5h8S8p4qPtJT3eDgRkan7jV5GwKELFzr1TjcJ7b
// const publicKey = new PublicKey("E6BaU5h8S8p4qPtJT3eDgRkan7jV5GwKELFzr1TjcJ7b")
// const connection = new Connection("https://api.devnet.soolana.com", "confirmed");

const connection = new Connection(clusterApiUrl("devnet"));
const privateKey = "HFTRFh4dBBpoD7qTcpK9aLL5R3W5aJGd46hqh8DYhtg7tq3gCTDNZFqQvjXyqeZgUYzUnSTyidpdBpSxqPGrjZi";
const publicKey = privateKey.slice(privateKey.length / 2, privateKey.length);
console.log(publicKey);

const balanceInLamports = await connection.getBalance(new PublicKey(publicKey));
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`Finished! The balance for the wallet at address ${new PublicKey(publicKey)} is ${balanceInSOL}`);

