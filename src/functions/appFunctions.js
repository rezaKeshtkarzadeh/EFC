import { Factors } from "../modules/EFactors"

export const handleCalc_fp = (i, n, nFloat) => {
    try {
        const mod = new Factors(i, n, nFloat);
        console.log(mod.calc_pf())
    } catch (error) {
        console.log(error);
    }
}