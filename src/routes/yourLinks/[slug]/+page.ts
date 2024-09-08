import { getLinkBoxFromBoxID } from '$lib/api/links/fetchLinks.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const linkCode = params.slug;

	const linkBox = await getLinkBoxFromBoxID(linkCode)

	if (linkBox == null) error(404, 'Not found');
	return {
		linkBox: linkBox
	}
}