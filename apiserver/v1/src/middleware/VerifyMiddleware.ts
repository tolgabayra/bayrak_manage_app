import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken"


export class VerifyMiddleware {
    public VerifyAuthToken(req: Request, res: Response, next: NextFunction) {
        try {
          const AuthHeader = req.cookies.access_token
          if (AuthHeader) {
            Jwt.verify(AuthHeader, process.env.JWT_SECRET_KEY ?? "SecretKey", (error: any, user: any) => {
              if (error) {
                return res.status(403).json({ "message": "Token is not valid!" })
              }
              req.user = user;
              next();
            })
          } else {
            res.status(401).json({ "message": "You are not authenticated!" })
          }
        } catch (error) {
          console.log(error);
    
          res.status(500).json(error)
        }
    
      }
}