function arrayAnalysis(arr) {
    const obj = {};

    if (arr.length > 0) {
			//average
			const sum = arr.reduce((acc, curr) => {
				return acc + curr;
			}, 0);
			obj["average"] = sum / arr.length;
			//min
			obj["min"] = Math.min(...arr);
			//max
			obj["max"] = Math.max(...arr);
			//length
			obj["length"] = arr.length;
			//return obj;
		}
    return obj;
}
module.exports = arrayAnalysis;