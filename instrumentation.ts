// @ts-ignore
import { track } from '@middleware.io/nextjs-vercel';

export function register() {
    track({
        projectName: 'My-Third-Project',
        serviceName: 'My-Third-Service',
    });

    if (process.env.NEXT_RUNTIME === 'nodejs') {
        console.log("Node file called...");
    }

    if (process.env.NEXT_RUNTIME === 'edge') {
        console.log("Edge file called...");
    }
}
