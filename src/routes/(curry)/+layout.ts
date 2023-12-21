export const load = ({ url }) => {
	const { pathname } = url;

	return {
		path: pathname
	};
};