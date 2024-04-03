export type CommonScreenAttributes = {
	nextStep: () => void
	data: UserData
	updatePropValue: (prop: Props) => (value: UserData[typeof prop]) => void
}

export enum OptionsEnum {
	Desinger = "Designer",
	Recruiter = "Recruiter",
	Learner = "Learner",
}

export type UserData = {
	name?: string;
	username?: string;
	email?: string;
	password?: string;
	terms?: boolean;
	image?: string;
	location?: string;
	occupations?: OptionsEnum[];
};

export type Props = keyof UserData;