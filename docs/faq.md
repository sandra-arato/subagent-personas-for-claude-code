# Frequently Asked Questions (FAQ)

### 1. What is the Claude Code Subagent Orchestration System?

The Claude Code Subagent Orchestration System is a sophisticated multi-agent framework that transforms the original roocode-based personas into true parallel subagents. Instead of mode switching, this system leverages Claude Code's native subagent capabilities to spawn 5 specialised agents that work concurrently on complex projects: Architect, Builder, Validator, Scribe, and Project Manager.

### 2. How is this different from the original roocode system?

**Key Differences:**
- **True Parallelism**: Multiple subagents work simultaneously vs. sequential mode switching
- **Claude Code Native**: Built specifically for Claude Code CLI vs. VS Code extension
- **Enhanced Coordination**: Sophisticated inter-agent communication protocols
- **Deeper Expertise**: Each subagent has specialised domain knowledge inherited from roocode methodologies

### 3. How do I deploy subagents?

You can deploy subagents in several ways:

**Full Team Deployment:**
```
Deploy all 5 subagents to implement user authentication:
- Architect: Design secure authentication architecture
- Builder: Implement auth endpoints and middleware
- Validator: Create security and integration tests
- Scribe: Document authentication flows and API
- Project Manager: Coordinate implementation timeline
```

**Targeted Deployment:**
```
Deploy 2 subagents to optimise database queries:
- Architect: Analyse query patterns and design optimisations
- Builder: Implement query improvements and indexing
```

### 4. What are the five specialist subagents?

1. **🏗️ Architect** - Strategic planning, system design, and architectural decisions
2. **🔧 Builder** - Implementation, development, and code construction
3. **✅ Validator** - Quality assurance, testing, and validation
4. **📚 Scribe** - Documentation, communication, and knowledge management
5. **📋 Project Manager** - Task coordination, workflow management, and project oversight

### 5. How do subagents coordinate with each other?

Subagents coordinate through:
- **Shared Context Files**: `tasks/context/` directory for project state
- **Inter-Agent Communication**: `tasks/coordination.md` for real-time communication
- **Task Tracking**: `tasks/index.md` for progress visibility
- **Quality Gates**: Systematic handoffs between subagents
- **Git Integration**: Proper branching and merge strategies

### 6. Can I customise the personas?

Yes! Each persona in the `personas/` folder can be customised for:
- **Technology Stack**: Tailor for your frameworks and tools
- **Team Standards**: Adapt to your organisation's processes
- **Project Requirements**: Modify for specific project constraints
- **Workflow Methodologies**: Agile, DevOps, Enterprise governance

### 7. How do I ensure quality in multi-agent output?

Quality is ensured through:
- **Validator Subagent**: Systematic testing and quality assurance
- **Quality Gates**: Each subagent reviews work before handoff
- **Comprehensive Testing**: All code changes include test coverage
- **Documentation Review**: Scribe validates all documentation accuracy
- **Project Manager Oversight**: Coordination and workflow validation

### 8. What project structure should I use?

The recommended structure is:
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

### 9. How do I handle conflicts between subagents?

Conflict resolution strategies:
- **Project Manager Coordination**: Use PM subagent to establish clear boundaries
- **Quality Gates**: Systematic handoffs prevent conflicts
- **Shared Context**: Ensure all subagents have access to current project state
- **Clear Objectives**: Define specific goals for each subagent
- **Communication Protocols**: Regular coordination through `tasks/coordination.md`

### 10. What are the benefits over single-agent assistance?

**Enhanced Capabilities:**
- **5x Parallel Processing**: Multiple specialised agents working simultaneously
- **Domain Expertise**: Each agent masters their specific area
- **Higher Quality**: Multiple perspectives and systematic QA
- **Comprehensive Coverage**: Architecture, implementation, testing, documentation, and coordination
- **Enterprise Ready**: Suitable for complex, large-scale projects

### 11. How do I get started with my first project?

1. **Install Claude Code**: `npm install -g @anthropic-ai/claude-code`
2. **Clone this repository**: Copy personas and structure to your project
3. **Launch Claude Code**: `claude` in your project directory
4. **Deploy your first team**: Start with a simple feature implementation
5. **Monitor coordination**: Track progress through `tasks/` files

### 12. What troubleshooting resources are available?

**Common Solutions:**
- **Coordination Issues**: Check `tasks/coordination.md` for communication problems
- **Quality Problems**: Ensure Validator subagent is reviewing all work
- **Workflow Conflicts**: Use Project Manager to establish clear responsibilities
- **Documentation Issues**: Let Scribe handle all documentation needs

### 13. How do I contribute to this project?

Refer to the `CONTRIBUTING.md` file in the root directory for contribution guidelines. We welcome:
- **Persona Improvements**: Enhanced subagent capabilities
- **Workflow Optimisations**: Better coordination patterns
- **Documentation Updates**: Clearer guides and examples
- **Bug Reports**: Issues and improvement suggestions

### 14. Is this compatible with existing CI/CD pipelines?

Yes! The system integrates with:
- **Git Workflows**: Proper branching and merge strategies
- **Automated Testing**: Validator subagent creates comprehensive test suites
- **Quality Gates**: Systematic validation before deployment
- **Documentation**: Automatically updated project documentation

For more detailed information, see the `getting-started.md` guide and explore the `personas/` folder for specific subagent capabilities.
