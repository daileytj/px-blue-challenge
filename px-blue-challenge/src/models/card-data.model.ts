export interface CardData {
    title: string;
    subtitle: string;
    deviceCount: number;
    alarmCount: number;
    eventCount: number;
    commStatus: string;
    values?: CardValues;
}

export interface CardValues {
    temperature?: number;
    humidity?: number;
    volume?: number;
    flow?: number;
}
