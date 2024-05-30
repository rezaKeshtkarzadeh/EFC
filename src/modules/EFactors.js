export class Factors {
    constructor(i, n, nFloat) {
        this.i = i;
        this.n = n;
        this.nFloat = nFloat;
    }

    calc_fp() {
        fp = Math.pow(1 + (this.i / 100), this.n).toFixed(this.nFloat);
        return fp;
    }

    calc_pf() {
        pf = Math.pow(1 + (this.i / 100), -1 * this.n).toFixed(this.nFloat);
        return pf;
    }
}