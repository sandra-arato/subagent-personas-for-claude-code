# Implement

## Documentation Hierarchy

- Project overview: `@/docs/overview`
- Technical specifications: `@/docs/technical`
- Features: `@/docs/features`
- Task context: `@/tasks/context`

## Pre-Task Protocol

1. Review existing knowledge in `@/tasks/`:
   - Planning (`context/planning.md`)
   - History (`context/history.md`)
   - Learnings (`context/learnings.md`)
   - Task index (`index.md`)
   - Clear the active context in `context/activity.md` and `context/planning.md` before starting.
2. Analyse the codebase in `@/src` for relevant context.
3. Create a new git branch for the task, named after the task ID.

## Task Workflow

### 1. Requirement Analysis

1. Understand the required code dependencies:
   - Which components will be affected?
   - What dependencies currently exist?
   - Is this local or does it affect core logic?
   - Which functionalities will be affected and how?
   - What cascading effects will this change have?
2. Understand the required data dependencies:
   - Before proposing any changes, conduct a complete end-to-end flow analysis of the relevant use case from the entry point (e.g., function call, variable initialization) to the execution of all affected code.
   - Track the flow of data and logic throughout all components involved to understand its full scope.
3. Clarify ambiguities through iterative questioning if required.
4. Document dependencies thoroughly in `@/tasks/context/planning.md`, including the specific usage of functions or logic in files specified in the task.

### 2. Code Planning

1. If needed initiate a clarification process.
2. Use step-by-step reasoning to outline a detailed plan including component dependencies, architectural considerations before coding.
3. Use reasoning to explain all code changes, what each part does, and how it affects other areas.
4. Create a structured proposal for the changes:
   - Provide a proposal that specifies:
   1. what files, functions, or lines of code are being changed;
   2. why the change is necessary (i.e. bug fix, improvement or new feature);
   3. all of the directly impacted modules or files;
   4. potential side effects;
   5. a detailed explanation of any tradeoffs.
   - Ensure the proposal is clear and comprehensive, covering all aspects of the change.
5. Append the plan in `@/tasks/context/planning.md` with a summary of the task and the detailed plan to complete it.

### 3. Code Implementation

1. Only implement one logical feature at a time.
2. Ensure the git state is committed before changing any code.
3. Ensure changes integrate seamlessly with the existing architecture.
4. Conduct simulation testing:
   - Simulate user interactions and edge cases.
   - Validate that existing functionality is preserved.
5. Append each change in `@/tasks/context/activity.md`.
6. Commit changes to the codebase with clear, descriptive messages before moving to the next logical feature.
7. On task completion append activity summary in `@/tasks/context/history.md`.

### 4. Testing

- Ensure all existing tests pass before beginning work.
- Record the existing test coverage in `@/tasks/context/testing.md`.
- Write unit tests for new functionality.
- Run all tests to confirm existing behaviour remains unchanged.
- Define comprehensive test scenarios, including edge cases.
- Update testing regime in `@/tasks/context/testing.md` if required.

### 5. Optimisation

- Optimise implemented code after all changes are tested and verified.

## Quality Criteria

All implementations must be:

- **Efficient**: Use optimal algorithms and data structures.
- **Modular**: Write modular code with reusable components.
- **Maintainable**: Apply appropriate design patterns.
- **Tested**: Accompanied by thorough testing.

## Post-Task Actions

1. Ensure all affected code in `@/src` has no outstanding errors.
2. Ensure all tests pass successfully and code coverage is maintained or improved.
3. Update files in `@/tasks/`:
   - Modify `context/planning.md` with updated context.
   - Update `context/history.md` with a summary of completed work.
   - Update `index.md` with new tasks or requests.
   - Record insights in `context/learnings.md`.
4. Ensure the git branch is merged back to the primary branch with a clear description of changes.
5. Clean up the git state by removing the task branch after successfully merging.
