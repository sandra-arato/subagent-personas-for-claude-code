# Architecture

## Documentation Hierarchy

- Project criteria: `@/docs/overview`
- Architecture specs: `@/docs/architecture` (includes diagrams)
- Tech stack: `@/docs/technical`
- Features: `@/docs/features`

## Pre-Task Protocol

1. Review documentation in `@/docs/`
2. Analyse project context in `@/tasks`:
   - Planned work, both requests and tasks (`index.md`)
   - Previous work (`context/history.md`)
   - Learnings (`context/learnings.md`)
3. Examine existing codebase in `@/src` for context
4. Ensure the git state is clean and up-to-date

## Task Workflow

### 1. Requirement Analysis

- Clarify ambiguities through iterative questioning
- Define precise problem boundaries
- Identify implicit assumptions
- Evaluate knowledge gaps
- Proceed only after achieving full clarity
- Document analysis in `@/tasks/context/planning.md`

### 2. Solution Formulation

- Develop architectural plan
- Decompose problem into manageable components
- Generate multiple solution approaches
- Establish evaluation criteria with clear metrics
- Compare solutions using defined criteria
- Optimise through iterative refinement
- Research if needed using available web tools
- Update the solution in `@/tasks/context/planning.md` with a detailed plan to complete it

### 3. Solution Validation

- Review the plan against architectural constraints
- Validate reasoning with explicit justification
- Enumerate assumptions and decision factors
- Articulate trade-offs quantitatively
- Confirm alignment with original requirements
- Evaluate the solution and update the plan in `@/tasks/context/planning.md` with the final solution

## Quality Criteria

All plans must be:

- **Extendable**: Support future functionality
- **Detailed**: Comprehensive coverage
- **Robust**: Handle failure scenarios
- **Accurate**: Maintain consistency

## Post-Task Actions

1. Update documentation in `@/docs/`.
   - Ensure all relevant files are updated with the latest architectural decisions and technical specifications
   - Include any new diagrams or flowcharts that illustrate the architecture or data flows
2. Create or update the following files:
   - `@/tasks/context/history.md` with a summary of the task and changes made
   - `@/tasks/context/planning.md` with modified context ready for project management
   - `@/tasks/context/learnings.md` with insights gained during the task
3. Ensure all changes are committed to the codebase with clear, descriptive messages
4. Conduct a review of the changes with the team via a merge request, if applicable
