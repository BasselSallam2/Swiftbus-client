import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const cleanup = async (req:Request , res:Response , next:NextFunction) => {

	try {
		const nowUTC = new Date(new Date().toISOString());
		const fiveMinutesAgo = new Date(nowUTC.getTime() - 5 * 60 * 1000);

		const deleted = await prisma.tempReservation.deleteMany({
			where: {
				CreatedAt: { lt: fiveMinutesAgo },
			},
		});

		console.log(`Deleted ${deleted.count} expired temp reservations.`);

		next() ;

	} catch (error) {
		console.error("Cleanup Error:", error);
		res.status(500).json({ error: "Cleanup failed" });
	}

}

export default cleanup ;