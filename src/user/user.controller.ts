import { injectable } from "inversify";

@injectable()
export class UserController {
    constructor(){}

    public getUser() {
        return {
            firstName: "Sarah",
            lastName: "lash",
            email: "yay@yay.com"
        }
    }
}