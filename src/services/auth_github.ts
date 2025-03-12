import { Octokit, App } from "octokit";

const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN });

export async function getUserName() {
	try {
		const { data } = await octokit.rest.users.getAuthenticated();
		return data;
	} catch (error) {
		console.log("errr:, %s", Loading);
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

	const repos = await getRepos(username);
	const reposWithProfile = [];

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
			//console.log(`El repositorio '${repo.name}'' no tiene ${file} o hubo un error.`);
		}
	}

	return reposWithProfile;
}

async function getFilesInFolder(username: string, repoName: string, folderPath: string) {
	try {
		const response = await octokit.request(
			`GET /repos/${username}/${repoName}/contents/${folderPath}`
		);

		// Filtra solo los archivos (no carpetas)
		const files = response.data.filter((item: any) => item.type === "file");

		return files;
	} catch (error) {
		console.error(`Error al obtener archivos en ${folderPath}:`, error);
		return [];
	}
}

function getGifUrls(files: any[]) {
	return files
		.filter((file) => file.name.toLowerCase().endsWith(".gif"))
		.map((file) => file.download_url);
}