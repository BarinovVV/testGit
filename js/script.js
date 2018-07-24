let total = 5000,
		time = 1,
		hourPrice,
		tabLeft = document.querySelector('.tab-left'),
		tabRight = document.querySelector('.tab-right'),
		bloksBlock = document.getElementById('blocks-block'),
		pagesBlock = document.getElementById('pages-block'),
		counterBlock = document.getElementById('counter-block'),
		counterPages = document.getElementById('counter-pages'),
		counterHours = document.getElementById('counter-hours'),
		priceHours = document.getElementById('price-hours'),
		editCheck = document.getElementById('edit-text'),
		editCms = document.getElementById('edit-cms'),
		totalValue = document.getElementsByClassName('total-sum')[0],
		input = document.getElementsByTagName('input');

const land = 5000,
			corp = 12000,
			cms = 4000,
			edit = 1000,
			blocks = 500,
			pages = 2500;


window.addEventListener('DOMContentLoaded', function() {

		tabLeft.addEventListener('click', () => {

					for	(let i = 0; i < input.length; i++) {
							input[i].value = '';
					};

					bloksBlock.style.display = 'flex';
					pagesBlock.style.display = 'none';

					tabLeft.classList.add('active');
					tabRight.classList.remove('active');

					if (editCheck.checked) {
						editCheck.checked = false;
					};
					if (editCms.checked) {
						editCms.checked = false;
					};

					total = land;
					totalValue.value = total;

		});

		tabRight.addEventListener('click', () => {

					for	(let i = 0; i < input.length; i++) {
							input[i].value = '';
					};

					bloksBlock.style.display = 'none';
					pagesBlock.style.display = 'flex';

					tabRight.classList.add('active');
					tabLeft.classList.remove('active');

					if (editCheck.checked) {
						editCheck.checked = false;
					};
					if (editCms.checked) {
						editCms.checked = false;
					};

					total = corp;
					totalValue.value = total;

		});

		counterBlock.addEventListener('change', () => {
			counterHours.value = '';
			priceHours.value = '';
			total = counterBlock.value * blocks;
			totalValue.value = total;
		});

		counterPages.addEventListener('change', () => {
			counterHours.value = '';
			priceHours.value = '';
			total = counterPages.value * pages;
			totalValue.value = total;
		});

		counterHours.addEventListener('change', () => {
			counterBlock.value = '';
			counterPages.value = '';
			total = 0;
			time = counterHours.value;
			hourPrice = time * priceHours.value;
			totalValue.value = hourPrice;
			total = hourPrice;
		});

		priceHours.addEventListener('change', () => {
			counterBlock.value = '';
			counterPages.value = '';
			total = 0;
			hourPrice = time * priceHours.value;
			totalValue.value = hourPrice;
			total = hourPrice;
		});

		editCheck.addEventListener('change', () => {
			if (editCheck.checked) {
				total += edit;
				totalValue.value = total;
			} else {
				total -= edit;
				totalValue.value = total;
			};
		});

		editCms.addEventListener('change', () => {
			if (editCms.checked) {
				total += cms;
				totalValue.value = total;
			} else {
				total -= cms;
				totalValue.value = total;
			};
		});

	

});

