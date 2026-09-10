import type { ProvinceWeights } from "../types/calculator";

export const PROVINCE_WEIGHTS: Record<string, ProvinceWeights> = {
    DKI: {
        tka: 30,
        rapot: 70,
        tkad: 0,
        enableTkad: false,
    },

    JBB: {
        tka: 50,
        rapot: 50,
        tkad: 0,
        enableTkad: false,
    },

    JTG: {
        tka: 50,
        rapot: 50,
        tkad: 0,
        enableTkad: false,
    },

    DIY: {
        tka: 40,
        rapot: 40,
        tkad: 20,
        enableTkad: true,
    },

    JTT: {
        tka: 40,
        rapot: 60,
        tkad: 0,
        enableTkad: false,
    },

    BTN: {
        tka: 30,
        rapot: 70,
        tkad: 0,
        enableTkad: false,
    },
};