# "Create Tag" Action for GitHub Actions

<!-- toc -->

- [Inputs](#inputs)
- [Usage](#usage)
- [License](#license)

<!-- tocstop -->

## Inputs

| name         | required | type   | default        | description                                                           |
| ------------ | -------- | ------ | -------------- | --------------------------------------------------------------------- |
| tag          | yes      | string |                | The tag name to create                                                |
| message      | yes      | string |                | The tag message                                                       |
| sha          | no       | string | `COMMIT_SHA`   | The sha of the commit to tag                                          |
| github_token | no       | string | `GITHUB_TOKEN` | The GitHub personal access token used to fetch and perform operations |

## Usage

Add the following step to your workflow:

```yaml
- name: Create Tag
  uses: ydataai/create-tag@v1
  with:
    tag: "<TAG_NAME>"
    message: "<TAG_MESSAGE>"
```

Or if you want to use your own PAT and choose the specific commit to tag:

```yaml
- name: Create Tag
  uses: ydataai/create-tag@v1
  with:
    tag: "<TAG_NAME>"
    message: "<TAG_MESSAGE>"
    github_token: "<PAT>"
    sha: "<COMMIT_SHA>"
```

## License

The scripts and documentation in this project are released under the MIT License
