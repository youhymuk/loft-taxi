export interface AuthResponseData {
	token?: string;
	error?: string;
}

export interface CardData {
	cardNumber: string;
}

export interface UploadingCardResponseData {
	success: boolean;
	error?: string;
}

export interface Address {
	id: string;
	name: string;
}

export interface Coordinates {
	from: string;
	to: string;
	latitude: number;
	longitude: number;
}

export interface ErrorResponse {
	message: string;
}
