export interface TkaScoreInput {
    indonesian: number;
    mathematics: number;
}

export interface TkadScoreInput {
    english?: number;
    science: number;
}

export function calculateTKA(scores: TkaScoreInput): number {
    return scores.indonesian + scores.mathematics;
}

export function calculateTKAD(scores: TkadScoreInput): number {
    return (scores.english ?? 0) + scores.science;
}

export function calculateFinalScore(
    tka: number, 
    rapot: number, 
    level: "sd-smp" | "smp-sma", 
    tkad?: number
): number {
    if (level === "sd-smp") {
        const examScore = tkad !== undefined ? tka + tkad : tka;
        const subjectCount = tkad !== undefined ? 3 : 2;
        const scaledRapot = rapot * subjectCount;
        return (examScore * 0.6) + (scaledRapot * 0.4);
    } else {
        const examScore = tkad !== undefined ? tka + tkad : tka;
        const subjectCount = tkad !== undefined ? 4 : 2;
        const scaledRapot = rapot * subjectCount;
        return (examScore * 0.6) + (scaledRapot * 0.4);
    }
}
