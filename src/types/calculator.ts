export type Level = "sd-smp" | "smp-sma";

export interface ScoreSubject {
    id: string;
    label: string;
    value: string;
}

export interface ProvinceWeights {
    tka: number;
    rapot: number;
    tkad: number;
    enableTkad: boolean;
}

export interface CalculationBreakdown {
    raw: number;
    weight: number;
    contribution: number;
}

export interface CalculationResult {
    tka: number;
    tkad?: number;
    rapot: number;
    final: number;

    breakdown: {
        tka: CalculationBreakdown;
        rapot: CalculationBreakdown;
        tkad?: CalculationBreakdown;
    };
}