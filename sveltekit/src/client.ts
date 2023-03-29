import { browser } from '$app/environment';
import { PUBLIC_API_URL, PUBLIC_API_URL_CONTAINER } from '$env/static/public';
import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
	url: browser ? `${PUBLIC_API_URL}/graphql` : `${PUBLIC_API_URL_CONTAINER}/graphql`

	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	// fetchParams({ session }) {
	//     return {
	//         headers: {
	//             Authentication: `Bearer ${session.token}`,
	//         }
	//     }
	// }
});
