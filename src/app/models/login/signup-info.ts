export class SignUpInfo {
    userId: number;
    username: string;
    email: string;
    role: string[];
    password: string;

    constructor(userId: number, username: string, email: string, password: string) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['admin'];
    }
}
