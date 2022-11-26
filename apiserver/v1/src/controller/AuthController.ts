import { Request, Response } from "express";
import { AuthService } from "../service/AuthService";
import { Helper } from "../script/Helper"
import LoginDto from "../dto/LoginDto";

export class AuthController {

    private authService = new AuthService
    private helper = new Helper


    public LoginUser = async (req: Request, res: Response): Promise<any> => {
        try {
            const userData = await this.authService.Login(req.body.email, req.body.password)
            console.log(userData.length);

            if (userData.length !== 0 && userData.length !== null) {

                const payload = {
                    id: userData[0].id,
                    email: userData[0].email
                }

                const accessToken = this.helper.GenerateAccessToken({ payload })
                const refreshToken = this.helper.GenerateRefreshToken({ payload })

                res.cookie("access_token", accessToken, {
                    httpOnly: true
                })
                res.cookie("refresh_token", refreshToken, {
                    httpOnly: true
                })
                res.status(200).json(userData)
            } else {
                res.status(401).json({ "message": "Email or password wrong!" })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }

}