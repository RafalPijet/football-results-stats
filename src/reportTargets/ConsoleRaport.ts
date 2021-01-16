import { OutputTarget } from '../Summary';

export class ConsoleRaports implements OutputTarget {
    print(report: string): void {
        console.log(report);
    }
}