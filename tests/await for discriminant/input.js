async function(foo) {
	switch (await foo()) {
		case 1:
			return true;
		default:
			return false;
	}
}
