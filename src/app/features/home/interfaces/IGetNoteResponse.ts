export interface INote {
	_id: string;
	title: string;
	content: string;
	createdBy: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface IGetNoteResponse {
	msg: string;
	notes: INote[];
}