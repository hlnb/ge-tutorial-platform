export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	const { email, source } = req.body;

	try {
		const listId =
			source === 'blog'
				? process.env.BREVO_BLOG_LIST_ID
				: process.env.BREVO_TUTORIAL_LIST_ID;

		if (!listId) {
			throw new Error(`List ID not found for source: ${source}`);
		}

		console.log('Attempting to subscribe:', { email, listId, source });

		// First try to get the contact
		const getContactResponse = await fetch(
			`https://api.brevo.com/v3/contacts/${email}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'api-key': process.env.BREVO_API_KEY,
				},
			},
		);

		if (getContactResponse.ok) {
			// Contact exists, update their lists
			const contactData = await getContactResponse.json();
			const existingListIds = contactData.listIds || [];
			const newListIds = [...new Set([...existingListIds, parseInt(listId)])];

			const updateResponse = await fetch(
				`https://api.brevo.com/v3/contacts/${email}`,
				{
					method: 'PUT',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
						'api-key': process.env.BREVO_API_KEY,
					},
					body: JSON.stringify({
						listIds: newListIds,
						attributes: {
							SIGNUP_SOURCE: source,
						},
					}),
				},
			);

			if (!updateResponse.ok) {
				const errorData = await updateResponse.json();
				console.error('Brevo API update error:', errorData);
				throw new Error('Failed to update subscription');
			}
		} else {
			// Contact doesn't exist, create new
			const createResponse = await fetch('https://api.brevo.com/v3/contacts', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'api-key': process.env.BREVO_API_KEY,
				},
				body: JSON.stringify({
					email,
					listIds: [parseInt(listId)],
					attributes: {
						SIGNUP_SOURCE: source,
					},
				}),
			});

			if (!createResponse.ok) {
				const errorData = await createResponse.json();
				console.error('Brevo API create error:', errorData);
				throw new Error('Failed to create subscription');
			}
		}

		return res.status(200).json({
			message: 'Subscribed successfully',
			source: source,
		});
	} catch (error) {
		console.error('Subscription error:', error);
		return res.status(500).json({
			message: 'Subscription failed',
			error: error.message,
		});
	}
}
