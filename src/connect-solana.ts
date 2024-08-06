import { 
    Connection, 
    PublicKey, 
    clusterApiUrl,
    LAMPORTS_PER_SOL
} from "@solana/web3.js";

async function main(){
    // Connecting to the DevNet by using the clusterApi
    const connection = new Connection(clusterApiUrl("devnet"));
    console.log(`Connected!`);

    const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
    const balance = await connection.getBalance(address);
    const balanceInSol = balance / LAMPORTS_PER_SOL;
    console.log(LAMPORTS_PER_SOL);
    console.log(`The balance of account ${address} is ${balanceInSol} SOL`);
}

main();
