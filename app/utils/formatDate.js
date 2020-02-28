const formatDate = timestamp => {
	const newDate = new Date(timestamp * 1000);
	const isoDate = newDate.toISOString();
	const [date, time] = isoDate.split("T");
	const formatTime = time => {
		const isPM = time.slice(0, 5).split(":")[0] > 12;
		return isPM
			? `${time.slice(0, 5).split(":")[0] - 12}:${
					time.slice(0, 5).split(":")[1]
			  } PM`
			: `${time} AM`;
	};
	return `${date
		.split("-")
		.reverse()
		.join("/")} , ${formatTime(time)}`;
};
export default formatDate;
