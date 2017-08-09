import { Subject } from 'rxjs/Subject';

export class AuthService {

    loggedOut = new Subject<any>();
    loggedIn = new Subject<string>();

    user: string;

    logout() {
        this.user = null;

        this.loggedOut.next();
    }

    islogged() {
        return this.user != null;
    }

    login(credentials) {
        if (this.checkCredentials(credentials)){
            this.loggedIn.next(this.user);
        }
    }

    checkCredentials(credentials) {

        if (credentials.email === 'tony.bernardino@gmail.com' && credentials.password === 'pass') {
            this.user = 'Tony';

            return true;
        } else if (credentials.email === 'my.bruta@gmail.com' && credentials.password === 'pass') {
            this.user = 'Ranhosa';

            return true;
        } else {
            return false;
        }
    }

}