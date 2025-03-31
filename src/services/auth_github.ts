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

async function getReposSortedByCreation(username: string): Promise<TypeRepository[]> {
	try {
		let page = 1;
		let allRepos: TypeRepository[] = [];
		let hasMore = true;

		while (hasMore) {
			const response = await octokit.request(`GET /users/${username}/repos`, {
				username: process.env.NEXT_PUBLIC_GITHUB_USER_NAME,
				per_page: 100,
				page: page,
				sort: 'created',
				direction: 'desc',
			});

			if (response.data.length > 0) {
				allRepos = allRepos.concat(response.data as TypeRepository[]);
				page++;
			} else {
				hasMore = false;
			}
		}


		return allRepos;
	} catch (error) {
		console.error("Error al obtener repositorios:", error);
		return [];
	}
}

export async function getRepoInfoWithProfile() {
	const username = process.env.NEXT_PUBLIC_GITHUB_USER_NAME;

	if (!username) {
		const error = new Error("Se requiere la variable en entorno user_name");
		throw error;
	}

	const repos = await getReposSortedByCreation(username);
	const reposWithProfile: TypeRepository[] = [];

	for (const repo of repos) {
		try {
			if (repo.topics.includes('addedtoportfolio')) {
				const gifFiles = await getFilesInFolder(username, repo.name, "gifs");
				const gifUrls = getGifUrls(gifFiles);

				reposWithProfile.push({
					name: repo.name,
					description: repo.description,
					created_at: repo.created_at,
					updated_at: repo.updated_at,
					pushed_at: repo.pushed_at,
					topics: repo.topics.filter(item => item !== 'addedtoportfolio'),
					language: repo.language,
					html_url: repo.html_url,
					gifUrls,
				});
			}
		} catch (error) {
			if (!error)
				console.log(error)
		}
	}

	return reposWithProfile;
}

async function getFilesInFolder(username: string, repoName: string, folderPath: string): Promise<TypeFile[]> {
	try {
		const response = await octokit.request(
			`GET /repos/${username}/${repoName}/contents/${folderPath}`
		);

		const files: TypeFile[] = response.data.filter((item: { type: string }) => item.type === "file");

		return files;
	} catch (error) {
		if (!error) {
			console.error(`Error al obtener archivos en ${folderPath}:`, error);
		}
		return [];
	}
}

export type TypeFile = { name: string, download_url: string }

function getGifUrls(files: TypeFile[]) {
	return files
		.filter((file: TypeFile) => file.name.toLowerCase().endsWith(".gif"))
		.map((file) => file.download_url);
}




