// @ts-ignore
import { track } from '@middleware.io/nextjs-vercel';

export function register() {
    track({
        projectName: 'My-Third-Project1',
        serviceName: 'My-Third-Service1',
        accountKey: 'i5uabiwfufbia3054gnwk9xrlax9ib77dgjy',
        target: 'https://kx31860.stage.env.middleware.io:443'
    });

    if (process.env.NEXT_RUNTIME === 'nodejs') {
        console.log("Node file called...");
    }

    if (process.env.NEXT_RUNTIME === 'edge') {
        console.log("Edge file called...");
    }
}
