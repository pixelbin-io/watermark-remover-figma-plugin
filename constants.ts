type FormOption = {
	name: string;
	type: string;
	default: boolean | string;
	identifier: string;
	title: string;
	tooltip?: string;
	maxLength?: number;
	enum?: string[]; // Make enum property optional
};

export const localFormOptionsOptions: FormOption[] = [
	{
		name: "Remove Text",
		type: "boolean",
		default: false,
		identifier: "rem_text",
		title: "Remove text",
	},
	{
		name: "Remove Logo",
		type: "boolean",
		default: false,
		identifier: "rem_logo",
		title: "Remove logo",
	},
	{
		name: "Box 1",
		tooltip:
			"(x-axis_y-axis_width_height) if not applying use: 0_0_0_0 & on full image use: 0_0_100_100",
		type: "string",
		default: "0_0_100_100",
		maxLength: 255,
		identifier: "box1",
		title: "Box 1",
	},
	{
		name: "Box 2",
		tooltip:
			"(x-axis_y-axis_width_height) if not applying use: 0_0_0_0 & on full image use: 0_0_100_100",
		type: "string",
		default: "0_0_0_0",
		maxLength: 255,
		identifier: "box2",
		title: "Box 2",
	},
	{
		name: "Box 3",
		tooltip:
			"(x-axis_y-axis_width_height) if not applying use: 0_0_0_0 & on full image use: 0_0_100_100",
		type: "string",
		default: "0_0_0_0",
		maxLength: 255,
		identifier: "box3",
		title: "Box 3",
	},
	{
		name: "Box 4",
		tooltip:
			"(x-axis_y-axis_width_height) if not applying use: 0_0_0_0 & on full image use: 0_0_100_100",
		type: "string",
		default: "0_0_0_0",
		maxLength: 255,
		identifier: "box4",
		title: "Box 4",
	},
	{
		name: "Box 5",
		tooltip:
			"(x-axis_y-axis_width_height) if not applying use: 0_0_0_0 & on full image use: 0_0_100_100",
		type: "string",
		default: "0_0_0_0",
		maxLength: 255,
		identifier: "box5",
		title: "Box 5",
	},
];

export enum EVENTS {
	TOGGLE_LOADER = "toggle-loader",
	INITIAL_CALL = "initial-call",
	CREATE_FORM = "create-form",
	TRANSFORM = "transform",
	REPLACE_IMAGE = "replace-image",
	SELCTED_IMAGE = "selected-image",
	SAVE_TOKEN = "save-token",
	IS_TOKEN_SAVED = "is-token-saved",
	OPEN_EXTERNAL_URL = "open-external-url",
	DELETE_TOKEN = "delete-token",
	CLOSE_PLUGIN = "close-plugin",
}

export enum COMMANDS {
	HOW_IT_WORKS_CMD = "how-it-works-command",
	TOKEN_RESET_CMD = "token-reset-command",
}

export const PERSISTED_TOKEN = "persistedToken";
export const SAVED_FORM_VALUE = "savedFormValue";
export const IMAGE = "IMAGE";
export const CLOUD_NAME = "cloudName";
export const ORG_ID = "organisationId";
export const UTM_DETAILS =
	"utm_source=figma&utm_medium=plugin&utm_campaign=watermarkremoverio";

export const createSignedURlDetails = {
	path: "__figma/ebg",
	format: "jpeg",
	access: "public-read",
	tags: ["tag1", "tag2"],
	metadata: {},
	overwrite: false,
	filenameOverride: false,
};

export const uploadOptions = {
	chunkSize: 2 * 1024 * 1024,
	maxRetries: 1,
	concurrency: 2,
};
