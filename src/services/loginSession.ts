import { Injectable } from '@angular/core';

@Injectable()
export class LoginSession {
    private info: any = {};

    getInfo() {
        return this.info;
    }
    setInfo(nInfo) {
        this.info = nInfo;
    }
}