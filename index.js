//Valida CPF validaCpf V.2
function ValidaCpf(cpfEnviado) {
	Object.defineProperty(this, "cpfLimpo", {
		enumerable: true,
		get: function () {
			return cpfEnviado.replace(/\D+/g, "");
		},
	});
}

ValidaCpf.prototype.valida = function () {
	if (this.cpfLimpo.length != 11) return false;
	if (!this.cpfLimpo) return false;
	if (isNaN(this.cpfLimpo)) return false;

	let cpfPartial = this.cpfLimpo.slice(0,-2);
    let digit1 = this.criaDigito(cpfPartial);
    let digit2 = this.criaDigito(cpfPartial + digit1);

    return this.cpfLimpo == cpfPartial + digit1 + digit2;
};

ValidaCpf.prototype.criaDigito = function (cpfParcial) {
	const arrCpfParcial = Array.from(cpfParcial);
	let contador = arrCpfParcial.length + 1;

	let teste = arrCpfParcial.reduce((ac, item) => {
		ac += Number(item) * contador;
		contador--;
		return ac;
	}, 0);

	teste = 11 - (teste % 11);
	return teste > 9 ? 0 : teste;

	// console.log(teste)
};

(function init(cpf) {
	const cpfNew = new ValidaCpf(cpf);
	console.log(cpfNew.cpfLimpo);
	console.log(cpfNew.valida());
})("669.172.358-90");
