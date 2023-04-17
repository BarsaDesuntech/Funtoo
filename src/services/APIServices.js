
import Configs from "../config/Configs";

const getFormData = (obj) => {
	let formdata = new FormData();
	for (let key in obj) {
		formdata.append(key, obj[key]);
	}
	return formdata;
};

export const authenticateUser = async (requestObj) => {
	let url = Configs.BASE_URL + "api/authenticate";

	let requestOptions = {
		method: "POST",
		body: getFormData(requestObj),
	};

	let response = await fetch(url, requestOptions);
	return await response.json();
};
export const updateUserDetails = async (requestObj) => {
	let url = Configs.BASE_URL + "api/update_user_details/";

	let requestOptions = {
		method: "POST",
		body: getFormData(requestObj),
	};

	let response = await fetch(url, requestOptions);
	return await response.json();
};

export const getNewArrivalsDetails = async () => {
	let url = Configs.BASE_URL + "api/new_arrival_details";
	// console.log("...........getNewArrivalsDetails................",url)
	let response = await fetch(url);
	// console.log('.........await response.text().........',await response.text())
	// return
	return await response.json();
};

export const getImages = async () => {
	let url = Configs.BASE_URL + "api/get_images";
	// console.log("...........getImages................",url)
	let response = await fetch(url);
	return await response.json();
};

export const getSlider = async () => {
	let url = Configs.BASE_URL + "api/get_slider";
	// console.log("",url)
	let response = await fetch(url);
	return await response.json();
};

export const update_user_profile = async (requestObj) => {
	let url = Configs.BASE_URL + "api/update_user_profile/";

	let requestOptions = {
		method: "POST",
		body: getFormData(requestObj),
	};

	let response = await fetch(url, requestOptions);
	return await response.json();
};

export const cancel_enquiry_request = async(requestObj) => {
	let url = Configs.BASE_URL + "admin/order/update_order_status"

	let requestOptions = {
		method: "POST",
		body: getFormData(requestObj),
	};

	let response = await fetch(url, requestOptions)

	return await response.json();
}

export const addWishList = async (requestObj) => {
	let url = Configs.BASE_URL + "admin/wishlist/add_wishlist_items";
	let requestOptions = {
		method: "POST",
		body: getFormData(requestObj),
	};
	let response = await fetch(url,requestOptions);
	
	return await response.json();
};

export const getCategory = async () => {
	let url = Configs.BASE_URL + "api/getcategory";
	let response = await fetch(url);
	return await response.json();
};
export const getSubCategory = async (parent_id) => {
	let url = Configs.BASE_URL + "api/getsubcategory?parent_id="+parent_id;

	let response = await fetch(url);
	return await response.json();
};

export const gamelist_by_sub_category = async (cat_id) => {
	let url = Configs.BASE_URL + "api/gamelist_by_sub_category?cat_id="+cat_id;

	let response = await fetch(url);
	return await response.json();
};
export const gamedetails = async (id) => {
	let url = Configs.BASE_URL + "api/gamedetails?id="+id+"&cust_code=";
	let response = await fetch(url);
	console.log("...gamedetails...url.....",url)
	return await response.json();
};

export const getUserInfo = async (mobile) => {
	let url = Configs.BASE_URL + "api/user_info/?mobile=" + mobile;
	let response = await fetch(url);
	
	return await response.json();
};


export const getWishList = async (cust_code) => {
	let url = Configs.BASE_URL + "api/getwishlist/?cust_code="+cust_code;

	let response = await fetch(url);
	return await response.json();
};

export const removeWishlistItem = async (game_code,cust_code) => {
	let url = Configs.BASE_URL + "api/removewishlist/?game_code=" + game_code+"&cust_code="+cust_code;

	let response = await fetch(url);
	return await response.json();
};

export const placeOrder = async (requestObj) => {
	let url = Configs.BASE_URL + "/admin/order/create";
	let requestOptions = {
		method: "POST",
		body: getFormData(requestObj),
	};

	let response = await fetch(url, requestOptions);
	return await response.json();
};

export const updateCart = async (cust_id,game_id,total,qty) => {
	let url = Configs.BASE_URL + "api/updatecart/?game_id=" + game_id+"&cust_id="+cust_id+"&price="+total+"&qty="+qty;
	let response = await fetch(url);

	return await response.json();
}

export const addToCart = async (requestObj) => {
	// let url = Configs.BASE_URL + "api/addcart/?game_id=" + game_id+"&cust_id="+cust_id+"&price="+total+"&qty="+qty;
	// let response = await fetch(url);
	
	// return await response.json();

	let url = Configs.BASE_URL + "api/add_to_cart";
	let requestOptions = {
		method: "POST",
		body: getFormData(requestObj),
	};

	let response = await fetch(url, requestOptions);
	return await response.json();
};

export const getCart = async (cust_id) => {
	let url = Configs.BASE_URL + "api/getcart/?cust_id="+cust_id;
console.log(url,"url............");
	let response = await fetch(url);
	return await response.json();
};

export const clearCart = async (cust_id) => {
	let url = Configs.BASE_URL + "api/clearcart/?cust_id="+cust_id;

	let response = await fetch(url);
	return await response.json();
};
export const getEnquiryDetails = async (cust_id) => {
	let url = Configs.BASE_URL + "api/get_event_details?cust_id="+cust_id;

	let response = await fetch(url);
	return await response.json();

};
export const GameListByTagId = async (tag_id) => {
	let url = Configs.BASE_URL + "user/game/game_list_by_tag?tag_id="+tag_id;
	let response = await fetch(url);

	return await  response.json();
};
export const getOrderDetails = async (cust_id) => {
	let url = Configs.BASE_URL + "api/get_event_order_confirmed_details?cust_id="+cust_id;

	let response = await fetch(url);
	return await response.json();

};


export const getProfile = async (studentCode) => {
	let url = Configs.BASE_URL + "api/profile/" + studentCode;
	let response = await fetch(url);
	return await response.json();
};

export const editProfile = async (requestObj) => {
	let url = Configs.BASE_URL + "api/edit_profile/";

	let requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "multipart/form-data",
		},
		body: getFormData(requestObj),
	};

	let response = await fetch(url, requestOptions);
	return await response.json();
};

export const EventTypes = async () => {
	let url = Configs.BASE_URL + "api/event_types";
	let response = await fetch(url);

	return await response.json();
};

export const getTravelDistanceandTime = async (origin, destination) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    // console.log("origin, destination.........", origin, destination)

    let response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.lat},${origin.lng}&destinations=${destination.lat},${destination.lng}&key=${Configs.GOOGLE_PLACE_API_KEY}&mode=driving`, requestOptions)

    return await response.json();
}

export const getFileSetting = async () => {
	let url = Configs.BASE_URL + "admin/Employee/getFileSetting";
	// console.log("...........getFileSetting................",url)
	let response = await fetch(url);
	return await response.json();
};

export async function GetAllWareHouses() {
    let url = Configs.BASE_URL + 'admin/Warehouse/index';
    let response = await fetch(url);

    return await response.json();
}

export const log_details = async (requestObj) => {
	let url = Configs.BASE_URL + "admin/log/log_details";
	let requestOptions = {
		method: "POST",
		body: getFormData(requestObj),
	};
	let response = await fetch(url,requestOptions);
	
	return await response.json();
};