import Configs,{ToFormData, BuildSeachParams} from "../config/Configs";

export const PlaceOrder = async (requestObj) => {
	let url = Configs.BASE_URL + "admin/order/create";
	let requestOptions = {
		method: "POST",
		body: ToFormData(requestObj),
	};
	let response = await fetch(url, requestOptions);
	// console.log('...........await response.text().......',await response.text());
	// return 
	return await response.json();
};
export const update_track_log = async (requestObj) => {
	let url = Configs.BASE_URL + "admin/order/update_track_log";
	let requestOptions = {
		method: "POST",
		body: ToFormData(requestObj),
	};
	let response = await fetch(url, requestOptions);
	// console.log('...........await response.text().......',await response.text());
	// return 
	return await response.json();
};

export const ChangeOrderStatus = async (data) => {
	let url = `${Configs.BASE_URL}admin/order/update_order_status`;
	let response = await fetch(url, {
		method: 'POST',
		body: ToFormData(data)
	});
	return await response.json();
}

export const get_track_log = async (requestObj) => {
	let url = Configs.BASE_URL + "admin/order/get_track_log";
	let requestOptions = {
		method: "POST",
		body: ToFormData(requestObj),
	};
	let response = await fetch(url, requestOptions);
	// console.log('...........await response.text().......',await response.text());
	// return 
	return await response.json();
};

export const UpdateOrder = async (requestObj) => {
	let url = Configs.BASE_URL + "admin/order/update";
	let requestOptions = {
		method: "POST",
		body: ToFormData(requestObj),
	};
	let response = await fetch(url, requestOptions);
	return await response.json();
};

export const gst_details = async (requestObj) => {
	let url = Configs.BASE_URL + "user/Customer/user_company_gst";
	let requestOptions = {
		method: "POST",
		body: ToFormData(requestObj),
	};
	let response = await fetch(url, requestOptions);
	return await response.json();
};

export const order_with_companyID = async (requestObj) => {
	let url = Configs.BASE_URL + "user/Customer/check_user_company";
	let requestOptions = {
		method: "POST",
		body: ToFormData(requestObj),
	};
	let response = await fetch(url, requestOptions);
	return await response.json();
};



export const GetSingleOrderEnquiry = async (queryParams) => {
    let url = `${Configs.BASE_URL}admin/order/get_order?${BuildSeachParams(queryParams)}`;
	let response = await fetch(url);
	// console.log('...........await response.text().......',await response.text());
	// return 
	return await response.json();
}

export const GetOrderEnquiry = async (queryParams) => {
    let url = `${Configs.BASE_URL}admin/order/get_orders?${BuildSeachParams(queryParams)}`;
	let response = await fetch(url);
console.log("......GetOrderEnquiry...url...........",url)
	return await response.json();
}

export const UpdateOrderItems = async (data) => {
	let url = `${Configs.BASE_URL}admin/order/update_order_items`;
	let response = await fetch(url, {
		method: 'POST',
		body: ToFormData(data)
	});
	
	return await response.json();
}

export const GetAllInvoice = async (queryParams) => {
	let url = `${Configs.BASE_URL}admin/invoice/get_all?${BuildSeachParams(queryParams)}`;
	let response = await fetch(url);

	return await response.json();
}

export const GetChatOrder = async (queryParams) => {
    let url = `${Configs.BASE_URL}admin/order/get_orders?customer_id=${BuildSeachParams(queryParams)}`;
	let response = await fetch(url);

	return await response.json();
}