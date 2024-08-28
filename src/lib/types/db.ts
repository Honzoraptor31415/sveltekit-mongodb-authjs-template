export interface DbPost {
	id: string;
	title: string;
	text: string;
	user_id: string;
	created_at: number;
}

export interface DbUser {
	id: string;
	username: string;
	image_url: string;
}
