//1.Nodevinēt mainīgos kurš iegūst ienākumu saraksta elemetu no html dokumenta
//2.Nodevinēt mainīgos kurš iegūst izdevumu saraksta elemetu no html dokumenta
//3.Nodevinēt mainīgos kurš iegūst pieejamā budžeta vertības elemetu no html dokumenta

//4.Izveidot funkciju_1, kas izmaina pieejamā budžeta vertību

//5.Izveidot funkciju_2, kuru izsaucot, tiek pievienoti ienākumi vai izdevumi html elementu sarakstiem

//6.Izveidot funkciju_3, kas izsaucas pēc pogas "pievienot" nospiešanas
//7.Funkcijai_3 jāpārbauda vai apraksta un summas lauks ir aizpildīts, ja nav, tad izvada paziņojumu par to, ka kāds no laukiem nav aizpildīts
//8.Funkcijai_3 ir jāizsauc funkcija_2, kas pievieno ienākumu vai izdevumu sarakstam jaunu ierakstu.

//9.Lai pārbaudītu vai izveidotās funkcijas darbojas pareizi, izsauc tās zemāk un ievieto fake datus
//10.Izsaukt funkciju_2, kas pievieno ienākumu sarakstam vertības
//11.Izsaukt funkciju_2, kas pievieno izdevumu sarakstam vertības
//12.Izsaukt funkciju_1, kas izmaina pieejamā budžeta vertību

//1
const income = document.getElementById('all_income');
console.log(income, 'au');

//2
const expense = document.getElementById('all_expenses');
console.log(expense);

//3
const budget = document.getElementById('budget__value');
console.log(budget);

//4
function budzetaFunkcija() {
	document.getElementById('budget__value').innerHTML = 200;
}

//5
income.insertAdjacentHTML('beforeend', '<div class="list_item"><div class="list_description">Azartspeles</div><div class="list_value">+500€</div></div>');