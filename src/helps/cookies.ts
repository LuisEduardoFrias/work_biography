
export function setCookie(key: string, value: any, maxAge = 3600) {
	function setK() {
		if (typeof document !== 'undefined') {
			try {
				document.cookie = `${key}=${JSON.stringify(value)}; path=/; max-age=${maxAge}`;
				setValue(value);
			} catch {
				// Manejo de error
			}
		}
		else {
			setK();
		}
	}

	setK();
}

export function getCookie(key: string) {

	function getK() {
		if (typeof document !== 'undefined') {
			const valueCookie = document.cookie;

			const findValue = valueCookie.split(";").find(e => e.trim().startsWith(`${key}=`));

			if (findValue) {
				const valueString = findValue.split(",")[0].split("=")[1];
				try {
					console.log('get: ', key, ' : ', JSON.parse(valueString), ' -- ', valueString ?? 'true')
					return JSON.parse(valueString);
				} catch {
					return null;
				}
			}
		}
		else {
		return	getK();
		}
	}

	return getK();
}