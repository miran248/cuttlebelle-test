export const gap = {
	l: "6vw",
	m: "5vw",
	s: "4vw",
	xs: "2vw",
};

export const dark = {
	background: "#141414",
	foreground: "#ECECEC",
	border: "#080808",
	shadow: "hsla(0, 0%, 0%, .4)",
};

export const light = {
	background: "#ECECEC",
	foreground: "hsla(0, 0%, 0%, .8)",
	divider: "hsla(0, 0%, 0%, .1)",
};

export const block = {
	background: "hsla(0, 0%, 0%, .04)",
	foreground: light.foreground,
};

export const caption = {
	background: dark.shadow,
	foreground: "#CACACA",
};

export const colors = {
	red: "#E96646",
	green: "#66E946",
	blue: "#4666E9",
};


export const breadcrumbs = {
	background: dark.border,
	enabled: caption.foreground,
	disabled: "#868686",
	divider: "#434343",
};

export const header = {
	background: colors.red,
	foreground: dark.foreground,
};

export const links = {
	background: block.background,
	title: block.foreground,
	date: breadcrumbs.disabled,
	image: dark.shadow,
};

export const navigation = {
	active: colors.red,
	border: dark.border,
	shadow: dark.shadow,
};

export const related = {
	background: breadcrumbs.background,
	enabled: breadcrumbs.enabled,
	disabled: breadcrumbs.disabled,
};
