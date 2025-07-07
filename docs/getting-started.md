# Getting Started with Claude Code Subagent Personas

This guide will help you get started quickly with the Claude Code subagent orchestration system for sophisticated multi-agent development workflows.

## Quick Start

1. **Install Claude Code CLI**:
   ```sh
   npm install -g @anthropic-ai/claude-code
   ```

2. **Clone this repository**:
   ```sh
   git clone https://github.com/your-org/subagent-personas-for-claude-code.git
   cd subagent-personas-for-claude-code
   ```

3. **Launch Claude Code**:
   ```sh
   claude
   ```

4. **Deploy your first subagent team**:
   ```
   Analyse this project and implement a new feature using 5 specialized subagents:
   - Architect: Design the system architecture
   - Builder: Implement the functionality
   - Validator: Create comprehensive tests
   - Scribe: Write documentation
   - Project Manager: Coordinate the workflow
   ```

## Understanding the Subagent System

### 🏗️ Core Concept
Instead of switching between modes, this system deploys **parallel subagents** that work simultaneously on different aspects of your project. 

### 🔧 The Five Specialist Subagents

1. **Architect** (`personas/architect.md`) - Strategic planning and system design
2. **Builder** (`personas/builder.md`) - Implementation and development
3. **Validator** (`personas/validator.md`) - Quality assurance and testing
4. **Scribe** (`personas/scribe.md`) - Documentation and communication
5. **Project Manager** (`personas/project-manager.md`) - Coordination and workflow

### 📁 Project Structure
```
your-project/
├── CLAUDE.md                 # Main orchestrator configuration
├── personas/                 # Subagent definitions
├── tasks/                    # Coordination and task management
│   ├── coordination.md       # Inter-agent communication
│   ├── index.md             # Task tracking
│   └── context/             # Project context files
├── docs/                     # Documentation (Scribe-managed)
├── src/                      # Source code (Builder-managed)
└── tests/                    # Test files (Validator-managed)
```

## Usage Patterns

### 🚀 Full Team Deployment
For comprehensive project work:
```
Deploy all 5 subagents to implement user authentication:
- Architect: Design secure authentication architecture
- Builder: Implement auth endpoints and middleware
- Validator: Create security and integration tests
- Scribe: Document authentication flows and API
- Project Manager: Coordinate implementation timeline
```

### 🎯 Targeted Deployment
For focused tasks:
```
Deploy 2 subagents to optimise database queries:
- Architect: Analyse query patterns and design optimisations
- Builder: Implement query improvements and indexing
```

### 📊 Project Coordination
For complex project management:
```
Deploy Project Manager subagent to organise the next sprint:
- Create structured tickets for all planned features
- Establish dependencies and critical path
- Coordinate team workflow and communication
```

## Configuration and Customisation

### 🎨 Persona Customisation
Each persona can be tailored for your specific needs:

1. **Technology Stack**: Modify personas for your frameworks and tools
2. **Team Standards**: Adapt to your organisation's processes
3. **Project Requirements**: Customise for specific project constraints

### 🔧 Workflow Adaptation
The system supports various methodologies:
- **Agile/Scrum**: Sprint planning and iterative development
- **DevOps**: CI/CD integration and automation
- **Enterprise**: Compliance and governance requirements

## Best Practices

### 💡 Effective Subagent Orchestration
- **Clear Objectives**: Define specific goals for each subagent
- **Parallel Work**: Let subagents work simultaneously on different aspects
- **Regular Coordination**: Use `tasks/coordination.md` for inter-agent communication
- **Quality Gates**: Ensure Validator approval before deployment

### 📝 Project Management
- **Task Tracking**: Maintain `tasks/index.md` for visibility
- **Context Management**: Keep `tasks/context/` files updated
- **Documentation**: Let Scribe handle all documentation needs

### 🔍 Quality Assurance
- **Testing Strategy**: Define testing approach in `tasks/context/testing.md`
- **Code Reviews**: Use Validator subagent for systematic quality checks
- **Continuous Integration**: Implement quality gates and automated testing

## Troubleshooting

### Common Issues

**Q: Subagents aren't coordinating properly**
A: Check `tasks/coordination.md` for communication issues and ensure all subagents have access to shared context files.

**Q: Too many conflicts between subagents**
A: Use Project Manager subagent to establish clear responsibilities and workflow boundaries.

**Q: Quality issues in output**
A: Ensure Validator subagent is reviewing all work before considering it complete.

## Advanced Features

### 🔄 Workflow Integration
- **Git Integration**: Proper branching and merge strategies
- **CI/CD Pipeline**: Automated testing and deployment
- **Documentation Currency**: Automatically updated project docs

### 📊 Project Visibility
- **Progress Tracking**: Real-time project status and metrics
- **Quality Metrics**: Testing coverage and code quality indicators
- **Coordination Insights**: Inter-agent communication patterns

## Next Steps

1. **Explore the Personas**: Review each subagent's capabilities in the `personas/` folder
2. **Try Different Patterns**: Experiment with various deployment strategies
3. **Customise for Your Needs**: Adapt personas and workflows to your project requirements
4. **Scale Your Team**: Use the system for increasingly complex projects

For detailed technical specifications, see `docs/technical.md`.
For architecture details, see `docs/architecture.md`.
For feature overview, see `docs/features.md`.
