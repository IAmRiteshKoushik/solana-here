import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

// Lamport : Sol :: Paise : Rupees :: Cents : Dollar
console.log(LAMPORTS_PER_SOL);

// Sample Public Key : E6BaU5h8S8p4qPtJT3eDgRkan7jV5GwKELFzr1TjcJ7b
// const publicKey = new PublicKey("E6BaU5h8S8p4qPtJT3eDgRkan7jV5GwKELFzr1TjcJ7b")
// const connection = new Connection("https://api.devnet.soolana.com", "confirmed");
const connection = new Connection(clusterApiUrl("devnet"));
const publicKey = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
    `Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}`
);

