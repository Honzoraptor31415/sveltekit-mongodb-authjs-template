export interface DbPost {
	id: string;
	title: string;
	text: string;
	userId: string;
	createdAt: number;
}

export interface DbUser {
	id: string;
	name: string;
	image: string;
	emailVerified: boolean | null;
}
