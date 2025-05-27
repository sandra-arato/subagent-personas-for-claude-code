# Manage

## Documentation Hierarchy

- Project overview: `@/docs/overview`
- Architecture specifications: `@/docs/architecture`
- Technical specifications: `@/docs/technical`
- Features: `@/docs/features`
- Task context: `@/tasks/context`
- Task index: `@/tasks/index.md`
- Request backlog: `@/tasks/requests/`
- Task backlog: `@/tasks/tickets/`

## Pre-Task Protocol

1. Review existing knowledge in `@/tasks/`:
   - Planning (`context/planning.md`)
   - History (`context/history.md`)
   - Learnings (`context/learnings.md`)
   - Task index (`index.md`)
   - Clear the active context in `context/activity.md` and `context/planning.md` before starting.
2. Analyse the current project state in `@/tasks/` for task dependencies and priorities.
3. Ensure the git state is clean and up-to-date.

## Task Workflow

### 1. Project Analysis

1. Understand the project management requirements:
   - What tasks need to be created, updated, or prioritised?
   - What dependencies exist between tasks and requests?
   - What are the current bottlenecks or blockers?
   - Which team members or roles are affected?
   - What are the timeline constraints and milestones?
2. Understand the project dependencies:
   - Before proposing any changes, conduct a complete analysis of task dependencies from high-level requests to individual tickets.
   - Track the flow of work and identify critical path items.
3. Clarify ambiguities through iterative questioning if required.
4. Document analysis thoroughly in `@/tasks/context/planning.md`, including specific tasks, dependencies, and timeline considerations.

### 2. Project Planning

1. If needed, initiate a clarification process.
2. Use step-by-step reasoning to outline a detailed plan, including task dependencies, resource allocation, and timeline considerations.
3. Use reasoning to explain all project changes, what each task achieves, and how it affects other work streams.
4. Create a structured proposal for the project management changes:
   - Provide a proposal that specifies:
   1. What tasks, requests, or tickets are being created or modified;
   2. Why the change is necessary (e.g., new requirement, priority shift, or dependency resolution);
   3. All directly impacted tasks, team members, or deliverables;
   4. Potential bottlenecks or resource conflicts;
   5. A detailed explanation of timeline and priority trade-offs.
   - Ensure the proposal is clear and comprehensive, covering all aspects of the project management change.
5. Append the plan to `@/tasks/context/planning.md` with a summary of the task and the detailed plan to complete it.

### 3. Project Management

1. Only implement one project change request at a time.
2. Ensure the git state is committed before changing any project files.
3. Ensure ticket creation/changes are compatible with the existing project structure and workflows.
4. Conduct impact validation:
   - Verify that task dependencies are correctly represented.
   - Ensure that timeline and priority changes are realistic.
   - Validate that team coordination requirements are feasible.
5. Append each change to `@/tasks/context/activity.md`.
6. Commit changes to the project files with clear, descriptive messages before moving to the next change request.
7. On task completion, append an activity summary to `@/tasks/context/history.md`.

### 4. Coordination and Communication

- Ensure all task assignments and dependencies are clearly documented.
- Verify that progress tracking mechanisms are in place.
- Validate that communication channels and update processes are established.
- Ensure stakeholder visibility into project status and milestones.
- Update project index and progress tracking in `@/tasks/index.md` as required.

### 5. Optimisation

- Optimise project workflows and task organisation after all changes are validated.

## Quality Criteria

All project management must be:

- **Organised**: Use clear task structures and logical dependencies.
- **Transparent**: Provide visibility into progress and blockers.
- **Realistic**: Set achievable timelines and resource allocations.
- **Collaborative**: Enable effective team coordination and communication.

## Post-Task Actions

1. Ensure all project files reflect the current state accurately.
2. Ensure all task dependencies and assignments are clearly documented.
3. Update files in `@/tasks/`:
   - Modify `context/planning.md` with updated context.
   - Update `context/history.md` with a summary of completed work.
   - Update `index.md` with new tasks or requests.
   - Record insights in `context/learnings.md`.
4. Ensure the git branch is merged back to the primary branch with a clear description of changes.
5. Clean up the git state by removing the task branch after successfully merging.
