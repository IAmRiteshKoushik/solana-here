import * as dotenv from 'dotenv';
import { Keypair } from '@solana/web3.js';

dotenv.config();

const secretKeyString = process.env.SECRET_KEY;
console.log('Raw SECRET_KEY:', secretKeyString);

try {
    if (!secretKeyString) {
        throw new Error('SECRET_KEY is not set in environment.');
    }
    const cleanedKeyString = secretKeyString.replace(/^\[|\]$/g, '');
    const secretKeyArray = JSON.parse(`[${cleanedKeyString}]`);
    console.log('Parsed SECRET_KEY Array:', secretKeyArray);

    // Convert the array to a Uint8Array and create the Keypair
    const keypair = Keypair.fromSecretKey(new Uint8Array(secretKeyArray));


    console.log(`✅ Finished! We've loaded our secret key securely!`);
    console.log('Public Key:', keypair.publicKey.toBase58());
    console.log('Secret Key:', keypair.secretKey);
} catch (error) {
    console.error(`Error loading keypair: ${(error as Error).message}`);
}
