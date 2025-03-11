
export function setCookie(key: string, value: any, maxAge = 3600) {
	let count = 0;
	function setK() {
		count++;
		if (typeof document !== 'undefined') {
			try {
				document.cookie = `${key}=${JSON.stringify(value)}; path=/; max-age=${maxAge}`;
				setValue(value);
			} catch {
				// Manejo de error
			}
		}
		else {
			if (count < 20)
				setK();
		}
	}

	setK();
}

export function getCookie(key: string) {
	let count = 0;

	function getK() {
		count++;
		if (typeof document !== 'undefined') {
			const valueCookie = document.cookie;

			const findValue = valueCookie.split(";").find(e => e.trim().startsWith(`${key}=`));

			if (findValue) {
				const valueString = findValue.split(",")[0].split("=")[1];
				try {
					return JSON.parse(valueString);
				} catch {
					return null;
				}
			}
		}
		else {
			if (count < 20)
				return getK();
		}
	}

	return getK();
}