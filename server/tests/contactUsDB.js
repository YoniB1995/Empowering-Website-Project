const contactUsDB = {
	getAllContactInformation: {
		success: {
			res: {
				statusCode: 200,
				headers: {
					"content-type": "application/json",
				},
			},
			body: {
				status: "success",
				data: [
					{
						date: "2021-09-28T21:00:00.000Z",
						email: "liorlsa9@gmail.com",
						inquiry: "website",
						content: "dsadsadsa",
						id: "61522199f1510100167f6980",
					},
					{
						date: "2021-09-28T21:00:00.000Z",
						email: "Eliasadmaso1@gmail.com",
						inquiry: "חבר מועדון",
						content: "erereer",
						id: "615442e11e6d6d243a63d984",
					},
					{
						date: "2021-09-09T00:00:00.000Z",
						email: "michal2@gmail.com",
						inquiry: "חבר מועדון",
						content: "gdfgfgggfg",
						id: "6155cec221985f3698c5c72b",
					},
					{
						date: "2021-09-19T00:00:00.000Z",
						email: "michal2@gmail.com",
						inquiry: "חבר מועדון",
						content: "ddgsdgdgdsg",
						id: "6155cf5c21985f3698c5c72e",
					},
					{
						date: "2021-09-19T00:00:00.000Z",
						email: "michal2@gmail.com",
						inquiry: "מועדון",
						content: "ddgsdgdgdsg",
						id: "6155da2a66b3c059c4e0fd82",
					},
					{
						date: "2021-08-19T00:00:00.000Z",
						email: "michal2@gmail.com",
						inquiry: "מועדון",
						content: "ddgsdgdgdsg",
						id: "6155dc096a3ab605f406b612",
					},
					{
						date: "2021-09-28T21:00:00.000Z",
						email: "liorlsa9@gmail.com",
						inquiry: "website",
						content: "dsadsadsa",
						id: "6155ef2cd8361a55c058ca8b",
					},
				],
			},
		},
		failure: {
			res: {
				statusCode: 404,
				headers: {
					"content-type": "application/json",
				},
			},
			body: {
				status: "error",
				message: "Cannot get contact us.",
			},
		},
	},
	createContactInformation: {
		success: {
			res: {
				statusCode: 200,
				headers: {
					"content-type": "application/json",
				},
			},
			body: {
				status: "success",
				data: "Contact information added",
			},
		},
		failure: {
			res: {
				statusCode: 404,
				headers: {
					"content-type": "application/json",
				},
			},
			body: {
				status: "error",
				message: "Cannot get contact us.",
			},
		},
	},
	deleteContactInformation: {
		success: {
			res: {
				statusCode: 200,
				headers: {
					"content-type": "application/json",
				},
			},
			body: {
				status: "success",
				data: {
					message: "contact deleted",
				},
			},
		},
		failure: {
			res: {
				statusCode: 404,
				headers: {
					"content-type": "application/json",
				},
			},
			body: {
				status: "error",
				message: "Cannot delete contact us.",
			},
		},
	},
};

module.exports = contactUsDB;
