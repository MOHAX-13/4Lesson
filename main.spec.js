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
	it('Test for addition', function() {
		var result;

		result = addition(1, 2);
		
		expect(result).toBe(3);
	});
	}
    // write tests here
);

describe('Test for isNull', function () {

    // write tests here
});

describe('Test for getGreeting', function () {

    // write tests here
});

describe('Test for parseBoolean', function () {

    it('must return true for " TruE" string', function () {
        expect(parseBoolean(' TruE')).toBe(true);
    });

    // write tests here
});

describe('Test for getPathByHash', function () {

    it('must return ["user", "create"] for "user/create" hash string', function () {
        expect(getPathByHash('user/create')).toEqual(['user', 'create']);
    });

    // write tests here
});



