import { Request, Response } from 'express';

const addresses = ['Address 1', 'Address 2', 'Address 3'];

export const getAddressList = (req: Request, res: Response) => {
	res.json({ addresses });
};

export const getRoute = (req: Request, res: Response) => {
	const { from, to } = req.query;
	if (!from || !to)
		return res.status(400).json({ error: 'Both fields are required' });
	res.json({
		coordinates: [
			[37.6173, 55.7558],
			[37.6184, 55.7517],
		],
		message: 'Route calculated successfully',
	});
};
