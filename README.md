# Rooles

Welcome to the Rooles Project! This repository is designed to assist developers in making better use of the Roo Code extension by providing an extensible set of system prompts, rules, and guidelines for Roo Code based on the needs of your team.

## About Rooles & Roo Code

This project should appear as a folder in your team project as the `.roo` folder. All paths in this documentation are relative to this folder when consumed by the Roo Code extension in your team project.

### Why Roo Code?

Roo Code is a VS Code extension that assists developers in creating, managing, and improving projects efficiently through LLMs (Large Language Models). It provides system prompts, rules, and guidelines to manage agentic interaction with LLMs, making it easier to generate documentation, code, and other project artifacts.

Roo is a fork of the Cline project with similar features, but focuses on tooling improvements rather than a polished product. While this may occasionally result in unexpected behavior, Roo offers greater flexibility and power compared to Cline.

For a detailed comparison between the two projects, see Roo Code's feature comparison on [Reddit](https://www.reddit.com/r/RooCode/comments/1jn372q/roocode_vs_cline_updated_march_29/).

### Why Rooles?

Rooles provides a standardised set of Roo Code rules and guidelines for teams. By using this shared collection of modes, rules, and prompts as a Git submodule, teams can maintain consistent Roo Code configurations across projects. This helps generate code and documentation according to standards defined by project leadership, while promoting a unified approach to LLM usage rather than relying on scattered results from various sources.

Rooles is based on the previous work of other projects, including:

- https://github.com/Bhartendu-Kumar/rules_template

### Why not just use Cursor/Windsurf?

While Cursor and Windsurf offer excellent developer experiences, they lack the flexibility and extensibility that Roo Code with VS Code provides in enterprise team environments. A critical limitation is their reliance on external API calls to LLM providers, which may conflict with security policies in regulated organisations where data privacy is paramount.

### Summary

Rooles and Roo Code offer a lightweight, open-source alternative to embedded agentic IDEs that:

- Can be customised to meet specific team requirements
- Integrates seamlessly with existing VS Code workflows
- Connects to your company's sanctioned LLM provider via the VS Code LM API Server
- Ensures compliance with information security protocols
- Maintains consistent tooling standards across development teams

## Example Project Folder Structure

```plaintext
<project-root>/
├── docs/                     # Your project documentation
├── tasks/                    # Planning and tracking of tasks
│   ├── context/              # Ongoing context for the project
│   ├── requests/             # Requests for project changes, features, or improvements
│   │   └── <request-id>.md   # Individual request descriptions
│   ├── tickets/              # Project tickets for implementing change requests
│   │   └── <ticket-id>.md    # Individual task descriptions
│   └── index.md              # Index of requests and tasks for tracking and project management
├── src/                      # Your project source code
├── tests/                    # Your project tests
└── .roo/                     # Roo Code configuration via Rooles (submodule)
    ├── rules-architect/      # Rules for the architect role
    ├── rules-developer/      # Rules for the developer role
    ├── rules-document/       # Rules for the document role
    ├── rules-tester/         # Rules for the tester role
    ├── rules/                # Rules for all roles
    ├── CHANGELOG.md
    ├── CONTRIBUTING.md
    ├── LICENSE.md
    └── README.md
```

## Getting Started

1. Add the project as a submodule to your project in the `.roo` folder:

```bash
cd <your-project>
git submodule add https://github.com/dbryar/rooles.git .roo
mkdir -p ./docs ./tasks ./tasks/context ./tasks/requests ./tasks/tickets
cp .roo/.roomodes.json .
```

2. Add your project documentation into the `docs/` folder using markdown.
3. Add your project tasks to the `tasks/` folder.

## Documentation

Documentation should be authored in a suitable manner to be read by both humans _and_ machines. It is therefore recommended to use markdown for _all_ documentation, as it is easy for both to read and write.

Documentation should be placed in the `docs/` folder and should include the following sections:

- **Objectives**: A high-level overview of the project goals and deliverables.
- **Architecture**: A high-level overview of the project architecture and stack.
- **Technology**: A high-level overview of the project tech stack, how it is used, and how it interracts with other services.
- **Features**: A high-level overview of the project features and functionality.

### Project Documentation Structure

For large projects, it's recommended to organize documentation hierarchically:

- Create subdirectories for major categories (e.g., `/docs/architecture/`, `/docs/features/`)
- Use individual files for specific components or topics
- Number filenames to control display order (e.g., `01-database.md`, `02-backend-api.md`)
- (Optional) Include index files in each directory to provide navigation and overview if you wish to use Docusaurus or similar tools to generate documentation from the markdown files.

This approach improves navigation, maintenance, and readability for both humans and LLMs analyzing your documentation.

### Usage

### Existing Projects

If you are adding Rooles to an existing project, you can use the `/document` role to generate the documentation. To do so, begin a task in Roo Code and try the following prompt:

```plaintext
You have been given a project to maintain and your first job is to document the existing code base, noting the high level goals/deliverables, and the project architecture/tech stack. Read through the source code in the @src/ directory and generate documentation for the project in the @docs/ folder with the following sections and corresponding markdown files:
1. Objectives
2. Architecture
3. Technology
4. Features
```

### New Projects

If you are starting a new project, you can use the `/architect` role to generate the documentation, and optionally a high-level task breakdown. To do so, begin a task in Roo Code and try a prompt similar to the following:

```plaintext
You have been assigned as the project lead and your first job is to document the project goals/deliverables, and the project architecture/tech stack for the developers to use when writing new code. In the @docs/ folder create the following markdown files:
1. Objectives
2. Architecture
3. Technology
4. Features
then begin by asking me questions about the project to complete the documentation.

As we interact back and forth, I will provide you with the information you need to add to, or edit the documentation, occasionally asking you questions to elicit helpful responses that will fill my knowledge gaps.
Once we have completed the documentation, the next step will be to generate a set of tasks in the @docs/tasks/ folder that will form the basis of work tickets for the developers to use when writing new code.
These tasks will be used to generate individual work tickets that will define the requirements for project code and other files when work is being completed either by a human developer, or by you running in the 'developer' role.
Each task should be a markdown file and numbered in a logical order so that a directory list of tasks always appears in the order they should be run.
Use a table in an index.md file to list the tasks in the order they should be run, their current status, and who or what is responsible for completing them.
The table should include the following columns:
- Task ID
- Request ID
- Description
- Commit
- Status
```

## Tasks

### Context

The context folder serves as a critical project memory repository, documenting the ongoing journey of development. It maintains:

- Summaries of LLM sessions and actions taken
- Encountered problems and their solutions
- Key design decisions and their rationale
- Project-specific knowledge that isn't directly code or documentation

This repository is valuable for both:

- **Human developers**: Provides quick onboarding and context retention across team members
- **LLMs**: Enables more informed decisions in future sessions by understanding past challenges

To maintain an effective context folder:

1. Update after significant LLM sessions (ask the LLM to summarize its work)
2. Document blockers and solutions when resolved
3. Organize according to your project guidelines
4. Include relevant contextual information that would help new team members

While LLMs should read these files to inform their work, they aren't expected to perfectly recall all previous context. Regular maintenance of this folder by both LLMs and human developers ensures continuity and knowledge preservation throughout the project lifecycle.

### Requests

The requests folder should hold all of the incoming requests for change. Each request should be a markdown file named as the request ID, and should include the following sections:

- **ID**: A unique identifier for the request
- **Date**: The date the request was made
- **Priority**: The priority of the request (e.g., low, medium, high)
- **From**: The person or team making the request
- **Description**: A detailed description of the request and any high level goals or deliverables

### Tickets

The tickets folder should hold all of the project tickets, and should be used to guide the developer as to how a task is to be completed. Tickets should share a many:one relationship with a request. Each ticket should be a markdown file, and should include the following sections:

- **Ticket ID**: A unique identifier for the ticket
- **Request ID**: The ID of the request that this ticket is related to
- **Description**: A detailed description of the ticket requirements that a junior developer would be able to follow. The description should tell the reader what to do, and optionally how to do it. It should include any relevant information that the developer would need to know in order to complete the task.
- **Acceptance Criteria**: A detailed description of the tests that would validate the completion of this task

Tickets do not replace JIRA or other workflow management tools, but are intended to be used in conjunction with them. The tickets should be used only to define the tasks before being worked on, and are not expected to be updated once they are `ready` for work.

### Index.md

The `index.md` file should provide an overview of all requests and tickets. It should include a table with the following columns:

- **Request ID**: The ID of the request
- **Ticket ID**: The ID of the ticket(s) related to the request
- **Description**: A very short description of the ticket (8-10 words maximum)
- **Commit**: The `git` commit ID/hash immediately prior to the status being updated.
- **Status**: The status of the ticket (e.g., `draft`, `ready`, `in progress`, `blocked`, `testing`, `done`, and `closed`)

The LLM should be able to read the `index.md` file and use it to determine which requests and tickets are available for work. It should also be able to update the status of tickets as they progress through the workflow. This file acts as a central tracking mechanism that maintains visibility of all work items and their current states.

## Contributing to Rooles & Roo Code

If you would like to contribute to the Rooles project, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to do so. We welcome contributions of all kinds, including bug fixes, new features, and documentation improvements.

If you want to add a new rule, please do so in the appropriate folder (e.g., `rules-architect/`, `rules-developer/`, etc.) and follow the existing format. If you are unsure where to add a new rule, feel free to open an issue or ask for help.

If you want to add a new mode with its own rule set, please do so in the `.roomodes.json` file and follow the existing format. If you are unsure how to add a new mode, feel free to open an issue or ask for help.

**NB:** Custom modes are not currently supported in Roo Code as JSON in the `.roo` folder, but are supported in the Roo Code extension in the `.roomodes` file when placed in the project root. This is a work in progress and will be added to the Roo Code project in the future through a pull request on `src/core/config/CustomModesManager.ts`.

## Customising Rooles

You can fork this repository and add your own rules, modes, and prompts to suit your (or your team's) needs. To do so, follow these steps:

1. Fork the repository.
2. Clone your fork to your local machine.
3. Make your changes and commit them to your fork.
4. Use the sub-module from your fork in your project as the `.roo` folder.

```sh
cd <your-project>
git submodule add https://github.com/<your-handle>/rooles.git .roo
```
