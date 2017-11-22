
/**
 * 策略模式实现表单验证
 */

// 策略对象
const strategies = {
    isNonEmpty (value, errorMsg) {
        return value === '' ? errorMsg : '';
    },
    minLength (value, length, errorMsg) {
        return value.length < length ? errorMsg : '';
    },
    isEmail (value, errorMsg) {
        return !/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value) ? errorMsg : '';
    },
    isPassword (value, errorMsg) {
        return !/^[A-Za-z0-9]{6,20}$/.test(value) ? errorMsg : '';
    }
};

class Validator {
    constructor () {
        // 保存校验规则
        this.cache = [];
    }
    add (dom, rules) {
        for (const rule of rules) {
            const strategyAry = rule.strategy.split(':');// 例如['minLength',6]
            const errorMsg = rule.errorMsg;//  '用户名不能为空'
            this.cache.push(() => {
                const strategy = strategyAry.shift();// 用户挑选的strategy
                strategyAry.unshift(dom.value);// 把input的value添加进参数列表
                strategyAry.push(errorMsg);// 把errorMsg添加进参数列表，[dom.value,6,errorMsg]
                return strategies[strategy].apply(dom, strategyAry);
            });
        }
    }
    start () {
        for (const validatorFunc of this.cache) {
            const errorMsg = validatorFunc();// 开始校验，并取得校验后的返回信息
            if (errorMsg) {
                // 如果有确切返回值，说明校验没有通过
                return errorMsg;
            }
        }
    }
}

export default Validator;
