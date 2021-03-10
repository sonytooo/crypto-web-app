const formatPrice = (value) => {
    const price = Number(value);

    if (price) {
        if (price < 0.000) {
            return price.toFixed(8);
        } else if (price < 1) {
            return price.toFixed(6);
        } else if (price < 99) {
            return price.toFixed(5);
        } else if (price < 999) {
            return price.toFixed(4);
        } else if (price < 9999) {
            return price.toFixed(3);
        } else {
            return price.toFixed(2);
        }
    } else {
        return value;
    }
}

export default formatPrice;