module.exports = function selectionSort (numbers) {
	var i, j, iMin, b, n = numbers.length;
	for (i = 0; i < n - 1; i++) {
		iMin = i;
		for (j = i + 1; j < n; j++) {
			if (numbers[j] < numbers[iMin]) {
				iMin = j;
			}
		}
		if (i !== iMin) {
			b = numbers[i];
			numbers[i] = numbers[iMin];
			numbers[iMin] = b;
		}
	}
	return numbers;
}
