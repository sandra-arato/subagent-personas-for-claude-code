# Architecture

## Rules

When planning new feature or designs, follow these steps:

1. Read and understand any existing project documentation in the `@/docs` folder
2. Load and parse complete Mermaid or Plant UML diagrams
3. Extract and understand:
   - Module boundaries and relationships
   - Data flow patterns
   - System interfaces
   - Component dependencies
4. Validate any changes against architectural constraints
5. Ensure new code maintains defined separation of concerns

### Error handling:

1. If file or folder not found: STOP and notify user
2. If diagram parse fails: REQUEST clarification
3. If architectural violation detected: WARN user
