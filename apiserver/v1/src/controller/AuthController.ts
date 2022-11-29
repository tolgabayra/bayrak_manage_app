import { Request, Response } from "express";
import { AuthService } from "../service/AuthService";
import { Helper } from "../script/Helper"
import LoginDto from "../dto/LoginDto";

export class AuthController {

    private authService = new AuthService
    private helper = new Helper


    public LoginUser = async (req: Request, res: Response): Promise<any> => {
        try {
            const userData = await this.authService.Login(req.body.email, this.helper.HashPassword(req.body.password))
            console.log(userData);

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



    public RegisterUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const password = this.helper.HashPassword(req.body.password)

            const userData = {
                id: req.body.id,
                username: req.body.username,
                email: req.body.email,
                password: password
            }
            console.log(userData);

            const newUser = await this.authService.Register(userData)
            res.status(201).json(newUser)
        } catch (error) {
            console.log(error);

            res.status(500).json(error)
        }
    }


    public Logout = (req: Request, res: Response) => {
        res.clearCookie('access_token');
        res.clearCookie('refresh_token');
        res.status(200).json({"message": "Log out is successfully "})
    }

}