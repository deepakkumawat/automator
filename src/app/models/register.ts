export class Register {

    constructor(
        public user: string,
        public password: string,
        public host: string,
        public port: number,
        public clientName: string,
        public appName: string,
    ) {  }
}
