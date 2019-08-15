import { Injectable } from '@angular/core';
import {Usuario} from '../models/usuario.model';

@Injectable()
export class StorageService {
    private storage: any;
    private User: Usuario;



    constructor() {
        this.storage = sessionStorage; // localStorage;
    }

    public retrieve(key: string): any {
        const item = this.storage.getItem(key);

        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }

        return;
    }

    public store(key: string, value: any) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    public StoreUser(Usuario: Usuario) {
        this.User = Usuario;
        this.store('UserName', this.User.nome);
        this.store('UserEmail', this.User.email);

    }
    public GetUser () {
        return this.User;
    }


}
