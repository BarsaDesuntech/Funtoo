import Configs from "../config/Configs";
export const SearchAllType = async (query) => {
    let url = Configs.BASE_URL + "user/game/search_all_type?query=" + query;
    let response = await fetch(url);
    return await response.json();
};