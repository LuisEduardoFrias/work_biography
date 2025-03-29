import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN });

type TypeRepository = {
	name: string,
	description: string,
	created_at: string,
	updated_at: string,
	pushed_at: string,
	topics: string[],
	language: string,
	html_url: string,
	gifUrls: string[],
}

export async function getUserName() {
	try {
		const { data } = await octokit.rest.users.getAuthenticated();
		return data;
	} catch (error) {
		console.log("errr:, %s", error);
	}
}

async function getRepos(username: string) {
	try {
		const response = await octokit.request(`GET /users/${username}/repos`, {
			username: process.env.NEXT_PUBLIC_GITHUB_USER_NAME,
			type: 'public',
		});
		return response.data;
	} catch (error) {
		console.error("Error al obtener repositorios:", error);
		return [];
	}
}

export async function getRepoInfoWithProfile() {
	const username = process.env.NEXT_PUBLIC_GITHUB_USER_NAME;
	const file = process.env.NEXT_PUBLIC_GITHUB_REPO_FILE;

	if (!username) {
		const error = new Error("Se requiere la variable en entorno user_name");
		throw error;
	}

	const repos = await getRepos(username);
	const reposWithProfile: TypeRepository[] = [];

	for (const repo of repos) {
		try {
			await octokit.request(`GET /repos/${username}/${repo.name}/contents/${file}`);

			const gifFiles = await getFilesInFolder(username, repo.name, "gifs");
			const gifUrls = getGifUrls(gifFiles);

			reposWithProfile.push({
				name: repo.name,
				description: repo.description,
				created_at: repo.created_at,
				updated_at: repo.updated_at,
				pushed_at: repo.pushed_at,
				topics: repo.topics,
				language: repo.language,
				html_url: repo.html_url,
				gifUrls,
			});
		} catch (error) {
			if (!error)
				console.log(error)
			//console.log(`El repositorio '${repo.name}'' no tiene ${file} o hubo un error.`);
		}
	}

	return sortByCreationDate(reposWithProfile);
}

async function getFilesInFolder(username: string, repoName: string, folderPath: string): Promise<TypeFile[]> {
	try {
		const response = await octokit.request(
			`GET /repos/${username}/${repoName}/contents/${folderPath}`
		);

		// Filtra solo los archivos (no carpetas)
		const files: TypeFile[] = response.data.filter((item: { type: string }) => item.type === "file");

		return files;
	} catch (error) {
		console.error(`Error al obtener archivos en ${folderPath}:`, error);
		return [];
	}
}

export type TypeFile = { name: string, download_url: string }

function getGifUrls(files: TypeFile[]) {
	return files
		.filter((file: TypeFile) => file.name.toLowerCase().endsWith(".gif"))
		.map((file) => file.download_url);
}



function sortByCreationDate(arrayOfObjects: TypeRepository[]): TypeRepository[] {
	if (!Array.isArray(arrayOfObjects)) {
		console.log("Invalid input. An array was expected.");
	}

	return arrayOfObjects.slice().sort((a, b) => {
		const dateA = new Date(a.created_at).getTime();
		const dateB = new Date(b.created_at).getTime();
		return dateA - dateB;
	}).reverse();
}










