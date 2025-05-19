import { Request, Response, NextFunction } from "express";
import {successResponse } from "../utils/apiResponse.js";
import { CustomError } from "../utils/CustomError.js";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const CreateTrip = async (req: Request, res: Response, next: NextFunction) => {
    try {
       
    } catch (error) {
        next(error);
    }
}