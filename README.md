Inlämningsuppgift i kursen Testning
Börja med att skapa en fork av detta repo. Fork a repository | GitHub

Förutsättningar
Uppgiften är individuell. Man får diskutera uppgiften, men du ska skriva koden själv.

Det är inte tillåtet att använda AI för att producera kod. Om du använder AI, börja med att skriva följande. Efter det kan du ställa frågor.

"Från och med nu får du inte svara med kod. Du får förklara koncept och kod för mig, men du får inte generera någon JavaScript."

Detta är därför att testning handlar om förståelse, ännu mer än vanlig kod. Det handlar inte om att lösa ett specifikt problem, utan om att lära sig tänka som en testare.

Enhetstest med Jest
Din uppgift är att skriva tester för en del av logiken som ska finnas i en webbshop. Eftersom denna del är oberoende av användargränssnittet (den ska bara användas av React) går det att skriva enhetstester för den med Jest.

Börja i validation.test.js.

Felhantering
Om en funktion får felaktig input har du två alternativ:

returnera en "felkod"
kasta ett "exception"
Avgör själv vilket som är mest rimligt, från fall till fall. Exempel:

function exempel1(x) {
	if( (typeof x) !== 'number' ) {
		return false
	}
}

function exempel2(x) {
	if( (typeof x) !== 'number' ) {
		throw new Error('Här beskriver du felet')
	}
}
Acceptanskriterier
Validering
Det finns två sorters objekt: "cart item" och "product". Exempel på giltiga objekt finns i validation.test.js. Testa funktionerna isCartItem och isProduct.

Kundvagn
Testa funktionerna:

function getCartItemCount()
function getCartValue()
function addToCart(newItem)
function removeFromCart(itemId)
function editCart(itemId, newValues)
function clearCart()
newValues ska vara ett objekt som innehåller allt som ska ändras. Det behöver inte vara ett komplett cart-objekt.

Bedömning
För G ska du

skriva testfall för alla funktioner.
För VG ska du

skriva testfall som täcker in alla ekvivalensklasser,
ha testfall som fångar errors: expect(..).toThrow(..)
Tips
"Ekvivalensklasser" står det om i presentation 3. Det handlar om att en funktion kan anropas på olika sätt. Vilka olika värden kan parametrarna ha? Gör minst ett testfall för varje kategori av värden.

Exempel: tänk dig en funktion som ska tala om ifall det är sommar. Medeltemperaturen ska vara över 10 grader. Det finns tre kategorier:

Mer än 10 grader -> sommar
10 grader eller mindre -> inte sommar
'abc', null, m.m. -> felaktig input