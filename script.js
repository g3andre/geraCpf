/* (function init(cpf) {
	cpf = cpf.toString();

	if (!cpf || (cpf.length < 11 || cpf.length > 14)) {
		throw Error("Informe um numero de 13 digitos");
	}
	if (cpf.length == 11) {
		let initialNumbers = cpf.substr(0, 9);
		let firstDigit = validaCpf(initialNumbers);
		let secondDigit = validaCpf(initialNumbers.concat(firstDigit));
		let cpfValid = initialNumbers.concat(
			firstDigit.toString(),
			secondDigit.toString()
		);

		cpfValid == cpf
			? console.log(`CPF Válido: ${cpfValid}`)
			: console.log(`CPF Inválido: ${cpfValid}`);
	}

    console.log('terminou...',cpf)
})(geraCpf()); */

function validaCpf(cpf) {
	if (cpf.length > 10) return;

	let digit = 0;
	cpf = [...cpf];

	cpf.forEach((item, index) => {
		digit += item * (cpf.length - index + 1);
	});
	digit = 11 - (digit % 11);
	digit = digit > 9 ? 0 : digit;
	return digit;
}

function geraCpf() {
	let test = Math.random() * 999999999;
	let digit;
	test = test.toFixed(0);
	digit = validaCpf(test.toString());
	test = test.concat(digit, validaCpf(test.concat(digit)));
	return test;
}

//  0  0   3   7  0  0  1  5  3
// 10  9   8   7  6  5  4  3  2
//  0  0  24  49  0  0  4 15  6

(function formatCpf(cpf) {
	let cpfArray = Array.from(cpf);
	cpfArray = cpfArray
		.filter((item) => !isNaN(item))
		.reduce((current, sum) => {console.log(`Current: ${current} ---- Acumulado: ${sum}`)});
	/* console.log(cpfArray.join("")); */
})("003.700.153-12");
