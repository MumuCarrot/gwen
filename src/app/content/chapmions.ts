export class Champion {
    constructor(public name: string, public biography: string[]) {}
}

export class Champions {
    constructor(public champions: Champion[]) {}
}