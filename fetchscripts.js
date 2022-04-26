/** @param {NS} ns */
export async function main(ns) {
	const response = await fetch("https://raw.githubusercontent.com/benjamin-henry/bitburner_stuff/main/scripts.json");
	const jsonData = await response.json();
	const filenames = [];
	const data = []
	Object.entries(jsonData).forEach(([key, value]) => {
		filenames.push(key);
		data.push(value)
	});
	for(let i=0; i < filenames.length; i++) {
		await ns.write(filenames[i], data[i]);
	}
}