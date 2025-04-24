
export function firstLowerCase(value: string): string {
	const first = value.substring(0, 1);
	return first.toLowerCase() + value.substring(1);
}