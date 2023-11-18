const orders = [
    {
        date_order: "2023-01-29 00:00:00+05",
        order_id: 2,
        count: "1,1",
        product_id: "18,4",
        img: "https://via.placeholder.com/600/24f355,https://via.placeholder.com/600/24f355",
        total: "12272",
        status: "Отменен",
    },
    {
        date_order: "2023-01-17 00:00:00+05",
        order_id: 5,
        count: "6",
        product_id: "48",
        img: "https://via.placeholder.com/600/24f355",
        total: "58620",
        status: "Получен",
    },
    {
        date_order: "2023-02-27 00:00:00+05",
        order_id: 32,
        count: "1,4",
        product_id: "47,25",
        img: "https://via.placeholder.com/600/24f355,https://via.placeholder.com/600/d32776",
        total: "47705",
        status: "Получен",
    },
    {
        date_order: "2023-07-27 00:00:00+05",
        order_id: 34,
        count: "5",
        product_id: "30",
        img: "https://via.placeholder.com/600/24f355",
        total: "20330",
        status: "Создан",
    },
    {
        date_order: "2022-11-10 00:00:00+05",
        order_id: 43,
        count: "5,5",
        product_id: "25,28",
        img: "https://via.placeholder.com/600/d32776,https://via.placeholder.com/600/d32776",
        total: "55205",
        status: "Отменен",
    },
    {
        date_order: "2022-12-30 00:00:00+05",
        order_id: 49,
        count: "1,5",
        product_id: "20,40",
        img: "https://via.placeholder.com/600/24f355,https://via.placeholder.com/600/24f355",
        total: "41380",
        status: "Создан",
    },
    {
        date_order: "2023-05-18 00:00:00+05",
        order_id: 84,
        count: "6",
        product_id: "27",
        img: "https://via.placeholder.com/600/d32776",
        total: "39666",
        status: "Создан",
    },
    {
        date_order: "2023-09-09 00:00:00+05",
        order_id: 92,
        count: "1",
        product_id: "7",
        img: "https://via.placeholder.com/600/d32776",
        total: "1015",
        status: "Создан",
    },
];

function transformData(data) {
    const newArr = data.map((item) => {
        if (item.count.includes(",")) {
            const countOfElements = item.count.split(",").length;
            item.products = [];
            for (let i = 0; i < countOfElements; i++) {
                const newData = {
                    id: parseInt(item.product_id.split(",")[i]),
                    img: item.img.split(",")[i],
                    count: item.count.split(",")[i],
                };
                item.products.push(newData);
            }
            delete item.product_id;
            delete item.img;
            delete item.count;
        } else {
            item.products = [];
            const newData = {
                id: item.product_id,
                img: item.img,
                count: item.count,
            };
            item.products.push(newData);
            delete item.product_id;
            delete item.img;
            delete item.count;
        }
        return item;
    });
    return newArr;
}

const res = transformData(orders);
console.log(res[2]);
