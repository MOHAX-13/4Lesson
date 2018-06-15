function addition(left, right) {
    return left + right;
}

function isNull(value) {
    return value === null;
}

function getGreeting(name) {
    return 'Hello ' + name;
}

function parseBoolean(value) {
    return value.trim().toLowerCase() === 'true';
}

function getPathByHash(hash) {
    return hash.split('/').map(function (item) {
        return item.trim();
    }).filter(function (item) {
        return item !== ''
    });
}

describe('Test for addition', function () {

	// write tests here
	it('must return addition', function() {
		var result;
		result = addition(1, 2);
		expect(result).toBe(3);
	});

	it('must return number', function() {
		expect(typeof addition(4, -5)).toBe("number");
	});

	it('should not be Undefined', function() {
		expect(addition(0,1)).not.toBeUndefined();
	});
});

describe('Test for isNull', function () {

    // write tests here
    it('value return null', function() {
		expect(isNull(null)).toEqual(true);
	});

	it('isNull not a number', function() {
		expect(isNull(null)).not.toBe("number");
	});

	it('isNull not Undefined', function() {
		expect(isNull(null)).not.toBeUndefined();
	});
});

describe('Test for getGreeting', function () {

	it('getGreeting return string', function() {
		expect(typeof getGreeting("fd")).toBe("string");
	});

	it('getGreeting not Undefined', function () {
        expect(getGreeting(name)).not.toBeUndefined();
    });
    // write tests here
});

describe('Test for parseBoolean', function () {

    it('must return true for " TruE" string', function () {
        expect(parseBoolean(' TruE')).toBe(true);
    });

	// write tests here
	it('parseBoolean .not.toBe(false)', function () {
        expect(parseBoolean(' TruE')).not.toBe(false);
    });


});

describe('Test for getPathByHash', function () {

    it('must return ["user", "create"] for "user/create" hash string', function () {
        expect(getPathByHash('user/create')).toEqual(['user', 'create']);
    });

    // write tests here
});



