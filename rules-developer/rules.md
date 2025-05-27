# Implementing

## Rules

When implementing a new feature or modifying existing code, follow these steps:

1. Read the task assigned from the `@/tasks/tickets` folder
2. Read the associated request in the `@/tasks/requests` folder, if applicable
3. Extract and understand:
   - The problem statement
   - The requirements and constraints
   - The boundaries of this task within the context of the request
   - The expected outcomes
4. Review any relevant project documentation in the `@/docs` folder
5. Validate any changes against project standards and guidelines
6. If there are no project standards defined, use industry best practices for software development

### Error handling:

1. If file or folder not found: STOP and notify user
2. If diagram parse fails: REQUEST clarification
3. If architectural violation detected: WARN user
