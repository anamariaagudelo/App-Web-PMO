import { auth } from 'firebase';

export interface Roles {
    reader?: boolean;
    admin?: boolean;

}

export class User {
    uid: string;
    email: string;
    roles: Roles;

constructor(authData) {
    this.email = authData.email,
    this.roles = { reader: true };

    }
}

