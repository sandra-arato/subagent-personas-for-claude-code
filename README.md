# Rooles

Welcome to the Rooles Project! This repository is designed to assist developers in making better use of Roo Code extension by providing a set of extensible set of system prompts, rules and guidelines for Roo Code.

This project should appear as a folder in your project inside the `.roo` folder, so all paths _in this project_ are assumed to be relative to this folder _when used_.

## Folder Structure

```plaintext
<root>/
├──docs/                  # Your project documentation
  ├──context/             # Ongoing context for the project
  └──tasks/               # Planning and tracking of tasks
├──src/                   # Your project source code
├──tests/                 # Your project tests
└──.roo/                  # Rooles project (submodule)
  ├── rules-architect/    # Rules for the architect role
  ├── rules-code/         # Rules for the code role
  ├── rules-debug/        # Rules for the debug role
  ├── rules/              # Rules for all roles
  ├── CHANGELOG.md
  ├── CONTRIBUTING.md
  └── README.md
```

## Getting Started

1. Add the project as a submodule to your project in the `.roo` folder.

```sh
cd <your-project>
git submodule add https://github.com/dbryar/rooles.git .roo
mkdir -p ./docs ./docs/context ./docs/tasks
```

2. Add your project documentation into the `docs/` folder using markdown.
3. Add the tasks in the `docs/tasks/` folder.

## Usage

### Documentation

Documentation is designed to be read by both humans and LLMs. It is recommended to use markdown for the documentation, as it is easy to read and write. The documentation should be placed in the `docs/` folder, and should include the following sections:

- **Goals**: A high level overview of the project goals and deliverables.
- **Architecture**: A high level overview of the project architecture and tech stack.
- **Features**: A high level overview of the project features and functionality.
- **Tasks**: A high level overview of the project tasks and how they are organized.

If the project is large, it is recommented to break down the documentation into further folders and files. For example, you might have a `docs/architecture/` folder for the architecture documentation, and a `docs/features/` folder for the features documentation.

#### Existing Projects

If you are adding Rooles to an existing project, you can use the (default) `/code` role to generate the documentation. To do so, begin a task in Roo Code and try the following prompt:

```plaintext
You have been given a project to maintain and your first job is to document the existing code base, noting the high level goals/deliverables, and the project architecture/tech stack. Read through the source code in the @src/ directory and generate documentation for the project in the @docs/ folder with the following sections and corresponding markdown files:
1. Goals
2. Architecture
3. Features
```

#### New Projects

If you are starting a new project, you can use the `/architect` role to generate the documentation, and optionally a high level task breakdown. To do so, begin a task in Roo Code and try a prompt similar to the following:

```plaintext
You have been assigned as the project lead and your first job is to document the project goals/deliverables, and the project architecture/tech stack for the developers to use when witing new code. In the @docs/ folder create the following markdown files:
1. Goals
2. Architecture
3. Features

Then begin by asking me questions about the project to complete the documentation. As we interract back and forth, I will provide you with the information you need to add to or edit the documentation, occasionally asking you questions to elecit helpful responses that will fill my knowledge gaps. Once we have completed the documentation, the next step will be to generate a set of tasks in the @docs/tasks/ folder that will form the basis of work tickets for the developers to use when writing new code. These tasks will be used to generate individual work tickets that will define the requirements for project code and other files when work is being complete either by a human developer, or by you running in the code role. Each task should be a markdown file and numbered in a logical order so that a directory list of tasks always appears in the order they should be run.
```

### Tasks

Tasks can be anything used to generate code, documentation, or other files. For example, you might have tasks for generating the database schema, creating the API endpoints, or writing unit tests. They do not need to be job tcikets, but can be if you want to use them that way.
