export class Factors {
    constructor(i, n, nFloat) {
        this.i = i / 100;
        this.n = n;
        this.nFloat = nFloat;
    }

    calc_pf() {
        pf = (1 / Math.pow(1 + this.i, this.n)).toFixed(this.nFloat);
        return pf;
    }

    calc_fp() {
        fp = Math.pow(1 + this.i, this.n).toFixed(this.nFloat);
        return fp;
    }

    calc_pa() {
        pa = ((Math.pow(1 + this.i, this.n) - 1) / (this.i * Math.pow(1 + this.i, this.n))).toFixed(this.nFloat);
        return pa;
    }

    calc_ap() {
        ap = ((this.i * Math.pow(1 + this.i, this.n)) / (Math.pow(1 + this.i, this.n) - 1)).toFixed(this.nFloat);
        return ap;
    }

    calc_pg() {
        pgS = Math.pow(1 + this.i, this.n) - 1 - (this.i * this.n);
        pgM = Math.pow(this.i, 2) * Math.pow(1 + this.i, this.n);
        pg = (pgS / pgM).toFixed(this.nFloat);
        return pg;
    }

    calc_gp() {
        gpS = Math.pow(this.i, 2) * Math.pow(1 + this.i, this.n);
        gpM = Math.pow(1 + this.i, this.n) - 1 - (this.i * this.n);
        gp = (gpS / gpM).toFixed(this.nFloat);
        return gp;
    }

    calc_fa() {
        fa = ((Math.pow(1 + this.i, this.n) - 1) / this.i).toFixed(this.nFloat);
        return fa;
    }

    calc_af() {
        af = (this.i / (Math.pow(1 + this.i, this.n) - 1)).toFixed(this.nFloat);
        return af;
    }

    calc_fg() {
        fg = (((Math.pow(1 + this.i, this.n) - 1) / this.i) - this.n).toFixed(this.nFloat);
        return fg;
    }

    calc_gf() {
        gf = (this.i / (Math.pow(1 + this.i, this.n) - 1 - (this.i * this.n))).toFixed(this.nFloat);
        return gf;
    }

    calc_ag() {
        ag = ((1 / this.i) - (this.n / (Math.pow(1 + this.i, this.n) - 1))).toFixed(this.nFloat);
        return ag;
    }

    calc_ga() {
        ga = (1 / this.calc_ag()).toFixed(this.nFloat);
        return ga;
    }
}