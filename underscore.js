var cars = [{
        brandName: 'Ford',
        model: 'Focus',
        productionYear: 2009
    },
    {
        brandName: 'Ford',
        model: 'Fiesta',
        productionYear: 2010
    }, {
        brandName: 'Ford',
        model: 'Mondeo',
        productionYear: 2011
    }, {
        brandName: 'BMW',
        model: '320',
        productionYear: 2012
    }, {
        brandName: 'BMW',
        model: '760li',
        productionYear: 2013
    }, {
        brandName: 'BMW',
        model: '550',
        productionYear: 2014
    },
    {
        brandName: 'BMW',
        model: '760li',
        productionYear: 2015
    },
    {
        brandName: 'Honda',
        model: 'Accord',
        productionYear: 2016
    },
    {
        brandName: 'Honda',
        model: 'Civik',
        productionYear: 2017
    },
    {
        brandName: 'Honda',
        model: 'CRV',
        productionYear: 2018
    },
    {
        brandName: 'Honda',
        model: 'NSW',
        productionYear: 2019
    },
    {
        brandName: 'BMW',
        model: 'i8',
        productionYear: 2020
    }
];

function show(data) {
    console.log(data);
}
show(cars);
show(_.groupBy(cars, 'brandName'));
show(_.groupBy(cars, 'model'));
show(_.groupBy(cars, 'productionYear'));


let year = parseInt(prompt('Please enter a car year'),10);
show(_.findWhere(cars, {
    productionYear: year
}));

show(_.max(cars,'productionYear'));
show(_.min(cars,'productionYear'));