import { User } from "../../src/entity/User";

declare global{
    namespace Express {
        interface Request {
            user: UserModel
        }
    }
}