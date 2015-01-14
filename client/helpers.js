var DateFormats = {
	short: 'DD MMMM YYYY',
	long: 'dddd DD.MM.YYY HH:mm'
};

UI.registerHelper("formatDate", function(datetime, format) {
	if (moment) {
		f = DateFormats[format];
		return moment(datetime).format(f);
	} else {
		return datetime;
	}
});