class Car {
    constructor(brandName, model, productionYear) {
        this.brandName = brandName;
        this.model = model;
        this.productionYear = productionYear;
    }
}
var ffocus = _.create(Car.prototype, {brandName:'Ford', model:'Focus', productionYear:'2011'});
console.log(ffocus);
console.log(_.invert(ffocus));
console.log(_.omit(ffocus, 'model'));
console.log(_.pick(ffocus, 'brandName','productionYear'));