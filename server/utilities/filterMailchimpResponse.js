const filterMailchimpResponse = (members) =>
	members.map((member) => {
		const { email_address, status } = member;

		return { email_address, status };
	});
module.exports = filterMailchimpResponse;
