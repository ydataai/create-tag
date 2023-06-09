const github = require("@actions/github");
const core = require("@actions/core");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const token = core.getInput("github_token");

    const octokit = github.getOctokit(token);
    const context = github.context;

    const { owner, repo } = context.repo;
    const sha = core.getInput("sha") || context.sha;
    const tag = core.getInput("tag", { required: true });
    const message = core.getInput("message", { required: true });

    const { data: tagResponse } = await octokit.rest.git.createTag({ owner, repo, tag, message, object: sha, sha, type: "commit" });
    const refResponse = await octokit.rest.git.createRef({ owner, repo, ref: `refs/tags/${tagResponse.tag}`, sha: tagResponse.sha });

    core.setOutput("ref", refResponse.data.ref);
  } catch (error) {
    core.info(error);
    core.setFailed(error.message);
  }
}

run();
