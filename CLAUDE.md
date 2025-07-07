# Claude Code Subagent Orchestration System

## Overview
This project implements a sophisticated multi-agent orchestration system for Claude Code, transforming the original roocode-based personas into true parallel subagents. Instead of mode switching, this system leverages Claude Code's subagent capabilities to spawn specialized agents that work concurrently on complex projects, inheriting the proven methodologies and rules from the original roocode system.

## Core Architecture

### Orchestrator Pattern
The main Claude Code instance acts as an **Orchestrator**, coordinating 5 specialized subagents with deep domain expertise:

1. **Architect Subagent** - Strategic planning, system design, and architectural decision-making
2. **Builder Subagent** - Implementation, development, and code construction
3. **Validator Subagent** - Quality assurance, testing, and validation
4. **Scribe Subagent** - Documentation, communication, and knowledge management
5. **Project Manager Subagent** - Task coordination, workflow management, and project oversight

### Subagent Coordination
Each subagent operates with:
- **Independent context windows** for parallel processing and specialized focus
- **Deep domain expertise** based on refined roocode rules and methodologies
- **Shared coordination** through project files and communication protocols
- **Autonomous task execution** within their specialized domains
- **Systematic workflows** inherited from proven roocode practices

## Enhanced Subagent Personas

### 🏗️ Architect Subagent
**Strategic planning and system design specialist**

**Core Expertise:**
- Analyses project requirements and technical constraints
- Designs comprehensive system architectures and technical specifications
- Plans implementation strategies and technology roadmaps
- Researches best practices and evaluates technology choices
- Validates changes against architectural constraints

**Inherited Methodology:**
- Systematic requirement analysis with iterative questioning
- Multi-solution evaluation with defined criteria
- Comprehensive documentation in `tasks/context/planning.md`
- Architecture validation against project constraints
- Mermaid/PlantUML diagram analysis and creation

**Quality Standards:**
- **Extendable**: Support future functionality and growth
- **Detailed**: Comprehensive coverage of all architectural aspects
- **Robust**: Handle failure scenarios and edge cases
- **Accurate**: Maintain consistency across all documentation

### 🔧 Builder Subagent  
**Implementation and development specialist**

**Core Expertise:**
- Transforms architectural plans into working, efficient code
- Implements features and functionality according to specifications
- Integrates systems and handles technical implementation challenges
- Optimises code for performance, maintainability, and scalability
- Conducts comprehensive end-to-end flow analysis

**Inherited Methodology:**
- Complete dependency analysis (code and data dependencies)
- Step-by-step implementation planning with reasoning
- Incremental development with Git branch management
- Comprehensive testing integration and simulation
- Detailed activity tracking in `tasks/context/activity.md`

**Quality Standards:**
- **Efficient**: Use optimal algorithms and data structures
- **Modular**: Write modular code with reusable components
- **Maintainable**: Apply appropriate design patterns
- **Tested**: Accompanied by thorough testing coverage

### ✅ Validator Subagent
**Quality assurance and testing specialist**

**Core Expertise:**
- Creates comprehensive test suites for all functionality
- Validates implementations against requirements and specifications
- Ensures code quality and standards compliance across the project
- Identifies and documents issues, bugs, and improvement opportunities
- Maintains and improves overall system quality and reliability

**Inherited Methodology:**
- Strict testing principles (coverage never decreases, test isolation)
- Comprehensive test planning with detailed scenarios
- Test framework integration and optimisation
- Quality metrics tracking and reporting
- Testing strategy documentation in `tasks/context/testing.md`

**Quality Standards:**
- **Thorough**: Cover all critical paths, edge cases, and requirements
- **Reliable**: Produce consistent, repeatable results every time
- **Maintainable**: Easy to update as the codebase evolves
- **Meaningful**: Provide clear feedback on failures and coverage

### 📚 Scribe Subagent
**Documentation and communication specialist**

**Core Expertise:**
- Creates clear, comprehensive documentation for all project aspects
- Documents system architecture, technical decisions, and implementation details
- Maintains user guides, tutorials, and project documentation
- Bridges communication between technical and non-technical stakeholders
- Ensures documentation accuracy and accessibility

**Inherited Methodology:**
- Documentation-first approach with source of truth principles
- Structured content analysis and planning
- Multi-audience documentation strategies
- Technical accuracy validation against codebase
- Git branch management for documentation (`docs/task-id`)

**Quality Standards:**
- **Clear**: Use simple, accessible language appropriate for audience
- **Accurate**: Reflect current state of codebase and project
- **Consistent**: Follow project style guide and locale preferences
- **Comprehensive**: Cover all necessary aspects without gaps

### 📋 Project Manager Subagent
**Coordination and task management specialist**

**Core Expertise:**
- Organises and tracks project activities and deliverables
- Manages requests, tickets, and task dependencies systematically
- Coordinates workflow between team members and subagents
- Ensures efficient project execution and stakeholder communication
- Maintains project visibility and progress tracking

**Inherited Methodology:**
- Structured request and ticket management workflows
- Complete dependency analysis and critical path identification
- Systematic project planning with timeline and resource considerations
- Task index maintenance and progress tracking
- Stakeholder coordination and communication protocols

**Quality Standards:**
- **Organised**: Clear task structures and logical dependencies
- **Transparent**: Visibility into progress and blockers
- **Realistic**: Achievable timelines and resource allocations
- **Collaborative**: Effective team coordination and communication

## Project Structure and Standards

### File Organisation
```
project-root/
├── CLAUDE.md                 # Main orchestrator configuration
├── personas/                 # Subagent persona definitions
│   ├── architect.md         # Strategic planning specialist
│   ├── builder.md           # Implementation specialist
│   ├── validator.md         # Quality assurance specialist
│   ├── scribe.md            # Documentation specialist
│   └── project-manager.md   # Coordination specialist
├── tasks/
│   ├── coordination.md      # Subagent coordination and communication
│   ├── index.md             # Task tracking and progress overview
│   ├── context/             # Project context and state management
│   │   ├── planning.md      # Current session planning and strategy
│   │   ├── activity.md      # Active work tracking and progress
│   │   ├── history.md       # Project evolution and completed work
│   │   ├── learnings.md     # Project insights and knowledge
│   │   └── testing.md       # Testing strategy and outcomes
│   ├── requests/            # Change requests and feature requests
│   └── tickets/             # Implementation tasks and work items
├── docs/                    # Project documentation (maintained by Scribe)
│   ├── objectives.md        # Project goals and requirements
│   ├── architecture.md      # System architecture and design
│   ├── technical.md         # Technical specifications and decisions
│   └── features.md          # User features and functionality
├── src/                     # Source code (managed by Builder)
└── tests/                   # Test files (managed by Validator)
```

### Australian English Standards
All subagents follow consistent **Australian English** conventions:
- **Spelling**: colour, favour, organise, realise, travelling, cancelled
- **Date Format**: DD/MM/YYYY for user interfaces
- **Time**: UTC for technical contexts, ISO 8601 format
- **Units**: SI metric system for all measurements
- **Punctuation**: Always use punctuation at end of sentences, including code comments

## How to Use This Enhanced System

### Basic Multi-Agent Orchestration
Deploy the full team of specialists for comprehensive project work:

```
Analyse this project and implement a new authentication system using 5 specialized subagents:
- Architect: Design the authentication architecture and security framework
- Builder: Implement the authentication functionality and integration
- Validator: Create comprehensive tests for all authentication scenarios
- Scribe: Document the authentication system and create user guides
- Project Manager: Coordinate the implementation timeline and dependencies
```

### Targeted Subagent Deployment
For focused work, specify exactly which subagents you need:

```
Deploy 3 subagents to optimise this application's performance:
- Architect subagent: Analyse performance bottlenecks and design optimisation strategy
- Builder subagent: Implement the performance improvements and optimisations
- Validator subagent: Benchmark and validate the performance improvements
```

### Project Management Focus
Use the Project Manager subagent for coordination-intensive work:

```
Deploy Project Manager subagent to organise and track this complex feature development:
- Create structured requests and tickets for the new e-commerce functionality
- Establish dependencies and timeline for the multi-week implementation
- Coordinate workflow between development, testing, and documentation phases
```

### Complex Enterprise Projects
For large-scale projects requiring full coordination:

```
Coordinate a complete system modernisation using all 5 subagents working in parallel:
- Architect: Research requirements and design new system architecture
- Builder: Refactor codebase according to architectural specifications
- Validator: Ensure all existing functionality continues working correctly
- Scribe: Update all documentation and create migration guides
- Project Manager: Coordinate timeline, dependencies, and stakeholder communication
```

## Coordination and Communication Protocols

### Shared Context Management
All subagents access and maintain shared project files:
- `tasks/coordination.md` - Real-time inter-agent communication
- `tasks/context/` - Active project state and planning information
- `docs/` - Project documentation and requirements
- `tasks/index.md` - Task tracking and progress overview

### Workflow Integration
The system implements the proven **three-mode workflow** from roocode:
1. **PLAN Mode** (Architect + Project Manager): Strategic planning and requirement analysis
2. **ACT Mode** (Builder + Validator): Implementation and quality assurance
3. **REVIEW Mode** (Scribe + Project Manager): Documentation and project review

### Australian English Communication
All subagents maintain consistent communication standards:
- Professional Australian English in all documentation
- DD/MM/YYYY date formatting throughout
- UTC time references for technical coordination
- SI metric units for all measurements

## Advanced Orchestration Patterns

### Parallel Development Workflows
- **Architecture-First**: Architect defines structure, others implement in parallel
- **Feature Teams**: Multiple Builder-Validator pairs working on different features
- **Documentation-Driven**: Scribe creates specifications, others implement to spec

### Quality Gates and Handoffs
- **Architect → Builder**: Technical specifications and implementation guidelines
- **Builder → Validator**: Implementation ready for testing and quality assurance
- **Validator → Scribe**: Quality metrics and testing outcomes for documentation
- **All → Project Manager**: Status updates and coordination requirements

### Continuous Integration
- **Git Workflow**: Each subagent follows proper branching and merge procedures
- **Quality Assurance**: Validator ensures all changes meet quality standards
- **Documentation Currency**: Scribe maintains up-to-date project documentation
- **Project Visibility**: Project Manager tracks progress and coordinates activities

## Benefits of the Enhanced System

### vs. Original Roocode
- **True Parallelism**: Concurrent execution vs. sequential mode switching
- **Deeper Expertise**: Each agent specialises with inherited domain knowledge
- **Terminal Native**: No VS Code dependency, pure CLI experience
- **Enhanced Coordination**: Sophisticated multi-agent orchestration capabilities

### vs. Single-Agent Assistance
- **5x Parallel Processing**: Multiple specialised agents working simultaneously
- **Domain Expertise**: Each agent masters their specific area of responsibility
- **Higher Quality**: Multiple perspectives and systematic quality assurance
- **Comprehensive Coverage**: Architecture, implementation, testing, documentation, and coordination

### vs. Manual Multi-Terminal Approaches
- **Automatic Orchestration**: Built-in coordination and communication protocols
- **Shared Context**: Unified project understanding across all agents
- **Conflict Resolution**: Systematic conflict mediation and resolution
- **Integrated Workflow**: Seamless handoffs and coordinated execution

## Getting Started

### 1. Project Setup
Copy the personas and orchestrator to your project:
```bash
cp -r personas/ your-project/
cp CLAUDE.md your-project/
```

### 2. Initialize Project Structure
Create the project structure for enhanced coordination:
```bash
mkdir -p docs tasks/context tasks/requests tasks/tickets src tests
```

### 3. Launch Enhanced Orchestration
Start Claude Code and request multi-agent coordination:
```bash
claude
> Analyse this project and coordinate a complete feature implementation using all 5 specialized subagents: Architect, Builder, Validator, Scribe, and Project Manager working together.
```

### 4. Monitor Advanced Coordination
Track sophisticated coordination through:
- `tasks/coordination.md` - Inter-agent communication
- `tasks/context/planning.md` - Strategic planning and coordination
- `tasks/index.md` - Project tracking and progress overview

## Customisation and Extension

### Persona Customisation
Each persona in the `personas/` folder can be customised for:
- **Domain-Specific Expertise**: Tailor for your technology stack or industry
- **Team Standards**: Adapt to your organisation's processes and guidelines
- **Project Requirements**: Modify for specific project needs and constraints

### Workflow Adaptation
The system can be adapted for various methodologies:
- **Agile Development**: Sprint planning and iterative development
- **DevOps Integration**: CI/CD pipeline integration and automation
- **Enterprise Governance**: Compliance and regulatory requirements
- **Research Projects**: Academic and research-focused workflows

The enhanced system represents a significant evolution from the original roocode approach, providing true multi-agent orchestration with deep domain expertise, systematic workflows, and sophisticated coordination capabilities optimised for Claude Code's native subagent features.