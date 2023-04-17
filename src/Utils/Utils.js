
import moment from "moment"




export const getFormattedDate = (dateStr, formatType = "YYYY-MM-DD") => {
	var d = new Date(dateStr);

	//prepare day
	let day = d.getDate();
	day = day < 10 ? "0" + day : day;

	//prepare month
	let month = d.getMonth() + 1;
	month = month < 10 ? "0" + month : month;

	//prepare year
	let year = d.getFullYear();

	let date = undefined;
	switch (formatType) {
		case "DD/MM/YYYY":
			date = day + "/" + month + "/" + year;
			break;
		default:
			date = year + "-" + month + "-" + day;
	}

	return date;
};



export const showDateAsClientWant = (date) => {
	let m = moment(date);
	return (
		<div>
			<text style={{ color: "black", fontSize: 13,  marginBottom: 3}}>{`${m.format("Do")} ${m.format("MMM")} ${m.format("YY")}`}  </text>
			<text style={{ fontSize: 10, alignSelf: 'center',  color: "black"}}>{` (${m.format("ddd")}) `}</text>
		</div>
	)
	// return m.format("D/MMM/YY (ddd)");
}

export const showDate = (date) => {
	let m = moment(date);

	return m.format("Do - MMM - YY");
}

export const showDayAsClientWant = (date) => {
	let m = moment(date);
	return (
		<text style={{color:"black", fontSize: 14, }}>
			{`${m.format("Do")} `}{`${m.format("MMM")} ${m.format("YY")}`}
			<text style={{fontSize: 10}}>{` (${m.format("ddd")}) `}</text>
		</text>
	)
}


export function formatDateTimetoMysqlDateTimeFormat(dateTime) {
	if(!dateTime) {
		return null;
	}

	const d = new Date(dateTime);

	// mysql date time format YYYY-MM-DD hh:mm:ss

	//prepare day
	let day = d.getDate();
	day = day < 10 ? "0" + day : day;

	//prepare month
	let month = d.getMonth() + 1;
	month = month < 10 ? "0" + month : month;

	// prepare hour
	let h  = d.getHours();
	h = h < 10 ? '0' + h : h;

	// prepare mininutes
	let m = d.getMinutes();
	m = m < 10 ? '0' + m : m;

	let s = d.getSeconds();
	s = s < 10 ? '0' + s : s;

	return `${d.getFullYear()}-${month}-${day} ${h}:${m}:${s}`;
}