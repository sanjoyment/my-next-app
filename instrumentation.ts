// @ts-ignore
import { track } from '@middleware.io/nextjs-vercel';

export function register() {
    console.log("instru files called......", process.env.NEXT_RUNTIME);
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        track({
            projectName: 'My-Third-Project1',
            serviceName: 'My-Third-Service1',
        });
    }

    if (process.env.NEXT_RUNTIME === 'edge') {
        track({
            projectName: 'My-Third-Project2',
            serviceName: 'My-Third-Service2',
            accountKey: 'i5uabiwfufbia3054gnwk9xrlax9ib77dgjy',
            target: 'https://kx31860.stage.env.middleware.io:443'
        });
    }
}
