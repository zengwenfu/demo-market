export default {
    methods: {
        getColor (num) {
            num = num + '';
            let index = parseInt(num.substring(num.length - 1));
            if (index > 5) {
                index = index - 5;
            }
            const r = 255 - index * 25;
            return `rgb(${r}, 222, 165)`;
        }
    }
};
