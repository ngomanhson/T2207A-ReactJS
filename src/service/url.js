const url = {
    BASE_URL: "https://localhost:7200/api/",
    CATEGORY: {
        LIST: "/category",
        CREATE: "/category",
        DETAIL: "/category/get-by-id",
    },

    PRODUCT: {
        LIST: "/product",
        CREATE: "/product",
        DETAIL: "/product/get-by-id",
        CATEGORY: "/product/get-by-categoryId",
    },
};

export default url;