// middleware who filter each response
const filterdMembers = (members) =>
	members.map((member) => {
		const { email_address, status } = member;

		return { email_address, status };
	});
module.exports = filterdMembers;
