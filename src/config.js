const BASE = "UAH"

const URL_LINK = (symbols, amount) => {
	return `https://api.exchangerate.host/latest?base=${BASE}&symbols=${symbols}&amount=${amount}`
}


export { URL_LINK }

