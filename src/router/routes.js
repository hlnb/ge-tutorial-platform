import { routes as autoRoutes } from 'vue-router/auto-routes';

let aliasesApplied = false;

function addTrailingSlashAliases(routeRecords) {
	routeRecords.forEach((route) => {
		if (route.path && route.path !== '/' && route.path.endsWith('/')) {
			const aliasWithoutSlash = route.path.replace(/\/+$/, '');
			if (aliasWithoutSlash) {
				const existingAliases = Array.isArray(route.alias)
					? route.alias
					: route.alias
						? [route.alias]
						: [];

				if (!existingAliases.includes(aliasWithoutSlash)) {
					route.alias = [...existingAliases, aliasWithoutSlash];
				}
			}
		}

		if (Array.isArray(route.children) && route.children.length) {
			addTrailingSlashAliases(route.children);
		}
	});
}

if (!aliasesApplied) {
	addTrailingSlashAliases(autoRoutes);
	aliasesApplied = true;
}

export const routes = autoRoutes;

export default routes;
