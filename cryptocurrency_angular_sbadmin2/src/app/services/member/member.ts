export class Member {
    constructor(public email:string,
                public full_name:string,
                public passwd:string) {

    }
}

export class Login {
    constructor(public email:string,
                public passwd:string) {

    }
}