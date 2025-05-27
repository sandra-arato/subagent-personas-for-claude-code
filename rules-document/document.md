# Document

## Documentation Hierarchy

- Project overview: `@/docs/overview`
- Architecture specifications: `@/docs/architecture`
- Technical specifications: `@/docs/technical`
- Features: `@/docs/features`
- Task context: `@/tasks/context`

## Pre-Task Protocol

1. Review existing knowledge in `@/tasks/`:
   - History (`context/history.md`)
   - Task index (`index.md`)
   - Clear the active context in `context/activity.md` and `context/planning.md` before starting.
2. Analyse the existing documentation in `@/docs/` for relevant context.
3. CONFIRM which type of document is required.
4. CONFIRM the boundaries of the documentation task:
   - What specific files, functions, or processes need new documentation?
   - Are there existing documents that need to be updated or replaced?
5. Ensure the Git state is clean and up-to-date.
   - Check out a new branch for the task using the ID of the task, e.g., `docs/task-id`.

## Task Workflow

### 1. Documentation Analysis

1. Understand the documentation requirements:
   - Which documents need to be created or updated?
   - What is the target audience for the documentation?
   - Are there existing templates or style guidelines to follow?
   - What technical details need to be documented?
   - What gaps exist in current documentation?
2. Understand the content dependencies:
   - Before proposing any changes, conduct an analysis of the area of the project that needs documentation.
   - Understand the boundaries of the documentation task, including the specific files, functions, or processes that need to be documented.
3. Clarify ambiguities through iterative questioning if required.
4. Document requirements thoroughly in `@/tasks/context/planning.md`, including specific files, functions, or processes to be documented.

### 2. Documentation Planning

1. If needed, initiate a clarification process.
2. Use step-by-step reasoning to outline a detailed plan, including content structure, audience considerations, and integration with existing documentation.
3. Use reasoning to explain all documentation changes, what each section covers, and how it fits with other documentation.
4. Create a structured proposal for the documentation:
   - Provide a proposal that specifies:
   1. What files or sections are being created or modified;
   2. Why the documentation is necessary (i.e. new feature, clarification, or gap filling);
   3. Any related documentation that may be affected;
   4. Potential inconsistencies with existing documentation;
   5. A detailed explanation of the documentation structure and approach.
   - Ensure the proposal is clear and comprehensive, covering all aspects of the documentation.
5. Append the plan in `@/tasks/context/planning.md` with a summary of the task and the detailed plan to complete it.

### 3. Documentation Implementation

1. Only document one section or feature at a time.
2. Ensure the Git state is committed before changing any documentation.
3. Ensure documentation integrates seamlessly with the existing documentation structure.
4. Conduct content validation:
   - Verify technical accuracy against the codebase.
   - Ensure clarity and accessibility for the target audience.
5. Append each change summary in `@/tasks/context/activity.md`.
6. Commit changes to the documentation with clear, descriptive messages before moving to the next section.
7. On task completion append activity summary in `@/tasks/context/history.md`.

### 4. Review and Validation

- Ensure all documentation follows the project's language conventions.
- Verify technical accuracy by cross-referencing with the codebase.
- Check for consistency with existing documentation.
- Validate accessibility and clarity for the intended audience.
- Update documentation index or navigation if required.

### 5. Optimisation

- Optimise documentation structure and clarity after all changes are validated.

## Quality Criteria

All documentation must be:

- **Clear**: Use simple, accessible language appropriate for the audience.
- **Accurate**: Reflect the current state of the codebase and project.
- **Consistent**: Follow the project's style guide and locale preferences.
- **Comprehensive**: Cover all necessary aspects without gaps.

## Post-Task Actions

1. Ensure all documentation is free of errors and inconsistencies.
2. Ensure all links and references are functional and up-to-date.
3. Update files in `@/tasks/`:
   - Modify `context/planning.md` with updated context.
   - Update `context/history.md` with a summary of completed work.
   - Update `index.md` with new tasks or requests.
   - Record insights in `context/learnings.md`.
4. Ensure the Git branch is merged back to the primary branch with a clear description of changes.
5. Clean up the Git state by removing the task branch after successfully merging.
