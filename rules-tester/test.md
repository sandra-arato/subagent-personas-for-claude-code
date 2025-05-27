# Test

## Documentation Hierarchy

- Project overview: `@/docs/overview`
- Technical specifications: `@/docs/technical`
- Features: `@/docs/features`
- Task context: `@/tasks/context`
- Testing strategy: `@/tasks/context/testing.md`

## Pre-Task Protocol

1. Review existing knowledge in `@/tasks/`:
   - Planning (`context/planning.md`)
   - History (`context/history.md`)
   - Learnings (`context/learnings.md`)
   - Task index (`index.md`)
   - Testing strategy (`context/testing.md`)
   - Clear the active context in `context/activity.md` and `context/planning.md` before starting the task.
2. Run the existing tests in `@/src` and record the relevant test targets and coverage in `@/tasks/context/testing.md`.
   - Confirm the test command required if not specified.
3. Review current test suites and frameworks in use.
4. Ensure the git state is clean and up-to-date.

## Task Workflow

### 1. Requirement Analysis

1. Understand the testing requirements:
   - Which features or components require testing?
   - What are the acceptance criteria and expected behaviours?
   - Are there existing tests or coverage gaps?
   - What are the critical edge cases and risk areas?
2. Document test requirements thoroughly in `@/tasks/context/planning.md`, including specific files, functions, or scenarios to be tested.

### 2. Test Planning

1. If needed, initiate a clarification process.
2. Use step-by-step reasoning to outline a detailed test plan that remains within the boundaries of the task.
3. Use reasoning to explain all test design decisions, what each test covers, and how it validates the requirements.
4. Create a structured proposal for the test changes that specifies:
   - What files, functions, or modules are being tested;
   - Why the tests are necessary (e.g., new feature, bug fix, regression coverage);
   - A detailed explanation of test scenarios and expected outcomes.
5. Append the plan to `@/tasks/context/planning.md` with a summary of the task and the detailed plan to complete it.

### 3. Test Implementation

1. Only implement one test suite or feature at a time.
   - This may include multiple assertions or individual tests, but they should be logically grouped in a single block.
2. Ensure the git state is committed before changing any test code.
3. Ensure new tests integrate seamlessly with the existing test framework.
4. Conduct simulation and validation:
   - Simulate user interactions and edge cases.
   - Validate that existing functionality is preserved.
   - Ensure new tests do not introduce false positives or negatives.
5. Append each change to `@/tasks/context/activity.md`.
6. Commit changes to the codebase with clear, descriptive messages before moving to the next logical test.
7. On task completion, append an activity summary to `@/tasks/context/history.md`.

### 4. Test Review and Validation

- Ensure all tests follow the project's style guide and technical standards.
- Verify test accuracy by cross-referencing with requirements and the codebase.
- Check for comprehensive coverage and meaningful assertions.
- Validate that all tests pass in the target environment.
- Update testing documentation in `@/tasks/context/testing.md` if required.

### 5. Optimisation

- Optimise test suites for speed, reliability, and maintainability after all changes are validated.

## Quality Criteria

All tests must be:

- **Thorough**: Cover all critical paths, edge cases, and requirements.
- **Reliable**: Produce consistent, repeatable results.
- **Maintainable**: Be easy to update as the codebase evolves.
- **Meaningful**: Provide clear feedback on failures and coverage.

## Post-Task Actions

1. Ensure all affected code and tests have no outstanding errors.
2. Ensure all tests pass successfully and code coverage is maintained or improved.
3. Update files in `@/tasks/`:
   - Modify `context/planning.md` with updated context.
   - Update `context/history.md` with a summary of completed work.
   - Update `index.md` with new tasks or requests.
   - Record insights in `context/learnings.md`.
4. Ensure the git branch is merged back to the primary branch with a clear description of changes.
5. Clean up the git state by removing the task branch after successfully merging.
