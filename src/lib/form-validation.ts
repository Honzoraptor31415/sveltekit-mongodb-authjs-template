import type { check } from './types/app';

export const defaultCheck: check = {
	isValid: true,
	message: ''
};

export function titleCheck(title: string) {
	const check: check = {
		isValid: true,
		message: ''
	};

	if (title.length >= 100) {
		check.isValid = false;
		check.message = 'Title is too long';
	} else if (title.length === 0) {
		check.isValid = false;
		check.message = "Title can't be empty";
	}

	return check;
}

export function textCheck(text: string) {
	const check: check = {
		isValid: true,
		message: ''
	};

	if (text.length > 500) {
		check.isValid = false;
		check.message = 'Text is too long';
	} else if (text.length === 0) {
		check.isValid = false;
		check.message = "Text can't be empty";
	}

	return check;
}
