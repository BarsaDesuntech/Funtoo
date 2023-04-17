import Configs from "../config/Configs";

const getFormData = (obj) => {
	let formdata = new FormData();
	for (let key in obj) {
		formdata.append(key, obj[key]);
	}
	return formdata;
};

export const get_unread_message = async (requestObj) => {
	let url = Configs.BASE_URL + "admin/message/get_unread_message";
console.log(url)
console.log(requestObj)
	let requestOptions = {
		method: "POST",
		body: getFormData(requestObj),
	};

	let response = await fetch(url, requestOptions);
	return await response.json();
};
export const update_unread_message  = async (requestObj) => {
	let url = Configs.BASE_URL + "admin/message/update_unread_message";
console.log(url)
console.log(requestObj)
	let requestOptions = {
		method: "POST",
		body: getFormData(requestObj),
	};

	let response = await fetch(url, requestOptions);
	return await response.json();
};

export const message_and_notify  = async (data) => {
   
	let url = `${Configs.BASE_URL}admin/message/message_and_notify `;
    console.log("................./message/message_and_notify...............",getFormData(data))
    console.log(".................url...............",url)
	let response = await fetch(url, {
		method: 'POST',
		body: getFormData(data)
	});
	// console.log(".........await response.text()......",await response.text());
	// return
	return await response.json();
}
export const send_whatsappsms  = async (data) => {
   
	let url = `${Configs.BASE_URL}admin/message/send_whatsappsms `;
	
	let response = await fetch(url, {
		method: 'POST',
		body: getFormData(data)
	});
	return await response.json();
}

export const sendNotificationAdmin  = async (data) => {
   
	let url = `${Configs.BASE_URL}admin/push/send_notification_admin`;
    // console.log("................./message/message_and_notify...............",getFormData(data))
    // console.log(".................url...............",url)
	let response = await fetch(url, {
		method: 'POST',
		body: getFormData(data)
	});
	// console.log(await response.text())
	// return 
	return await response.json();
}

export const add_image = async (requestObj) => {
	let url = Configs.BASE_URL + "admin/game/add_image";

	let requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "multipart/form-data",
		},
		body: getFormData(requestObj),
	};

	let response = await fetch(url, requestOptions);

	// console.log(".....add_image...url.......",url)
	// console.log(".....add_image...requestOptions.......",requestOptions)

	return await response.json();
};