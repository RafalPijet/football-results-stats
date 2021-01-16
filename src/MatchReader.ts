import { dateStringTodate } from './utils';
import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

export interface DataReader {
    data: string[][];
    read(): void
}

export class MatchReader {
    static fromCsv(filname: string): MatchReader {
        return new MatchReader(new CsvFileReader(filname));
    };
    matches: MatchData[] = [];

    constructor(public reader: DataReader) { }

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map(
            (row: string[]): MatchData => {
                return [
                    dateStringTodate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6]
                ]
            }
        )
    }
}