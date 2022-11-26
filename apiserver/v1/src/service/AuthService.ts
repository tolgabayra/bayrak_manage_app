import { AppDataSource } from "../data-source";
import RegisterDto from "../dto/RegisterDto";
import { User } from "../entity/User";

export class AuthService{
    private userRepository = AppDataSource.getRepository(User);

    public Login(email: string, password: string){
        
        const user = this.userRepository.find({
            where: {
                email: email,
                password: password
            }
        })

        return user
    }

    

    public Register(data: RegisterDto ) {
        return this.userRepository.save(data)
    }
}