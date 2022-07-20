import { Preloader } from "./Preloader"

function Table(props) {

	const {
		loading,
		rates,
		amount,
		setAmount = Function.prototype,
		symbols,
		setSymbol = Function.prototype
	} = props

	var rounded = function (number) {
		return Math.round(parseFloat(number) * 100) / 100;
	}

	return <>

		<div className="container">
			<input
				type="number"
				placeholder={`UAH/` + symbols}
				onChange={(e) => setAmount(e.target.value)}
			/>
			<div class="row">
				<label className="col s4 center">
					<input
						class="with-gap"
						name="group1"
						type="radio"
						value="USD"
						onChange={(e) => setSymbol(e.target.value)}
					/>
					<span>USD</span>
				</label>
				<label className="col s4 center">
					<input
						class="with-gap"
						name="group1"
						type="radio"
						value="EUR"
						onChange={(e) => setSymbol(e.target.value)}
					/>
					<span>EUR</span>
				</label>
				<label className="col s4 center">
					<input
						class="with-gap"
						name="group1"
						type="radio"
						value="PLN"
						onChange={(e) => setSymbol(e.target.value)}
					/>
					<span>PLN</span>
				</label>
				{
					loading ?
						<b className="col s12 center">{`${rounded(Object.values(rates))} ${symbols}`}</b>
						:
						<Preloader />
				}
			</div>
		</div>
	</>
}
export { Table }