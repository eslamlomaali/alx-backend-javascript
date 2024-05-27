export default function returnHowManyArguments(...myparams) {
	let count = 0;
	for (let i = 0; i < myparams.length; i++) {
		count++;
	}

  return count;

}
