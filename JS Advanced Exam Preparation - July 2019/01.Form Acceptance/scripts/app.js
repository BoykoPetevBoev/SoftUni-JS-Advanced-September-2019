function acceptance() {

	const companyInput = document.getElementsByName('shippingCompany');
	const productInput = document.getElementsByName('productName');
	const quantityInput = document.getElementsByName('productQuantity');
	const scrapeInput = document.getElementsByName('productScrape');
	const output = document.getElementById('warehouse');

	output.addEventListener('click', function (t) {
		if (t.target.type === 'button') {
			t.target.parentNode.remove();
		}
	});

	document.getElementById('acceptance').addEventListener('click', main);
	function main() {
		let [company, product, quantity, scrape] = getValues();
		clearFields();
		if (company === '' || product === '' || quantity.toString() == 'NaN' || scrape.toString() == 'NaN') {
			return '';
		}
		let productQuantity = quantity - scrape;
		if (productQuantity > 0) {
			addElementsToDOM(company, product, productQuantity);
		}
	}
	function addElementsToDOM(company, product, productQuantity) {
		const div = createElements('div');
		const p = createElements('p');
		const button = createButton();

		p.innerHTML = `[${company}] ${product} - ${productQuantity} pieces`;
		div.appendChild(p);
		div.appendChild(button);
		output.appendChild(div);
	}
	function getValues() {
		return [companyInput[0].value, productInput[0].value, Number(quantityInput[0].value), Number(scrapeInput[0].value)];
	}
	function clearFields() {
		companyInput[0].value = '';
		productInput[0].value = '';
		quantityInput[0].value = '';
		scrapeInput[0].value = '';
	}
	function createElements(element) {
		return document.createElement(element);
	}
	function createButton() {
		let button = createElements('button');
		button.type = 'button';
		button.innerHTML = 'Out of stock';
		return button;
	}
}