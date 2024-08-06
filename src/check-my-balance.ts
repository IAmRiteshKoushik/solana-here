import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import "dotenv/config";
 
async function main(){
    const suppliedSecretKey = process.env.SECRET_KEY;
    if (!suppliedSecretKey) {
        throw new Error("Provide a key to check the balance of!");
    }

    // The .env file has problems due to which the incoming string needs to be 
    // cleaned
    const cleanedKeyString = suppliedSecretKey.replace(/^\[|\]$/g, '');
    const secretKeyArray = JSON.parse(`[${cleanedKeyString}]`);
    const keypair = Keypair.fromSecretKey(new Uint8Array(secretKeyArray));

    const connection = new Connection(clusterApiUrl("devnet"));
    const publicKey = new PublicKey(keypair.publicKey.toBase58());
    const balanceInLamports = await connection.getBalance(publicKey);
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

    console.log(`✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`);
}
main();
