import ACTION from "./action";

const updateLocalStorage = (state) => {
    localStorage.setItem("state", JSON.stringify(state));
    return state;
};

const reducer = (state, action) => {
    // gỉa định rằng trong action sẽ có 2 thuộc tính: type, payload
    switch (action.type) {
        case ACTION.UPDATE_CART:
            return updateLocalStorage({ ...state, cart: action.payload, loading: true });
        case ACTION.SHOW_LOADING:
            return updateLocalStorage({ ...state, loading: true });
        case ACTION.HIDE_LOADING:
            return updateLocalStorage({ ...state, loading: false });
    }
};
export default reducer;
