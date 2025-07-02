import express from "express";
import { AppProfile } from "./src/web-server/app-profile/app-profile";

declare global {
    namespace Express {
        export interface Request {
            appProfile: AppProfile;
        }
    }
}
