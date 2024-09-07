export interface check {
	isValid: boolean;
	message: string;
}

export interface ApiResponse {
	ok: boolean;
	message?: string;
	checks?: {
		title: check;
		text: check;
	};
}
