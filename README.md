# Claude Code Subagent Personas

Welcome to the Claude Code Subagent Orchestration System! This project transforms the traditional single-agent AI assistance model into a sophisticated multi-agent architecture that leverages Claude Code's native subagent capabilities for parallel processing and specialized expertise.

## What This Project Does

This system enables **true multi-agent orchestration** using Claude Code, where:

- **4 specialized subagents** work in parallel on complex projects
- **Each subagent has a distinct persona** with specific expertise and responsibilities
- **Automatic coordination** happens through shared project files
- **Parallel processing** dramatically increases project velocity and quality

Instead of switching between different modes or tools, you get a **coordinated team of AI specialists** working together on your projects.

## The Four Subagent Personas

### 🏗️ Architect Subagent
**Strategic planning and system design specialist**
- Analyses requirements and constraints
- Designs system architecture and technical specifications
- Plans implementation strategies and roadmaps
- Researches best practices and technologies

### 🔧 Builder Subagent  
**Implementation and development specialist**
- Transforms architectural plans into working code
- Implements features and functionality
- Integrates systems and handles technical implementation
- Optimises code for performance and maintainability

### ✅ Validator Subagent
**Quality assurance and testing specialist**
- Creates comprehensive test suites
- Validates functionality against requirements
- Ensures code quality and standards compliance
- Identifies and documents issues and improvements

### 📚 Scribe Subagent
**Documentation and communication specialist**
- Creates clear, comprehensive documentation
- Documents system architecture and technical decisions
- Maintains user guides and tutorials
- Bridges communication between technical and non-technical stakeholders

## How to Use This System

### Basic Multi-Agent Orchestration

Simply describe a complex task and specify that you want multiple subagents to work on it:

```
Analyse this codebase and implement a new authentication system using 4 specialized subagents:
- Architect: Design the authentication architecture and security approach
- Builder: Implement the authentication functionality
- Validator: Create comprehensive tests for all authentication scenarios  
- Scribe: Document the authentication system and create user guides
```

Claude Code will automatically spawn the appropriate subagents, each taking on their specialized persona and working in parallel.

### Targeted Subagent Deployment

For more focused work, you can specify exactly which subagents you need:

```
Deploy 2 subagents to optimise this application:
- Architect subagent: Analyse performance bottlenecks and design optimisation strategy
- Builder subagent: Implement the optimisation recommendations
```

### Complex Project Management

For large, multi-faceted projects:

```
Coordinate a complete project overhaul using all 4 subagents working in parallel:
- Architect: Research new requirements and design updated architecture
- Builder: Refactor codebase according to new architectural specifications
- Validator: Ensure all existing functionality continues working correctly
- Scribe: Update all documentation and create migration guides for users
```

### Project-Specific Workflows

The system adapts to different project types:

**Web Development:**
```
Build a new e-commerce feature with 4 subagents:
- Architect: Design database schema and API architecture
- Builder: Implement frontend and backend functionality
- Validator: Create unit, integration, and e2e tests
- Scribe: Document API endpoints and create user documentation
```

**Data Analysis:**
```
Analyse this dataset using specialized subagents:
- Architect: Design data processing pipeline and analysis strategy
- Builder: Implement data processing and analysis code
- Validator: Validate data quality and analysis accuracy
- Scribe: Create analysis reports and visualization documentation
```

## Key Advantages

### vs. Single-Agent Assistance
- **Parallel Processing**: Multiple tasks happen simultaneously
- **Specialized Expertise**: Each agent focuses on their domain of excellence
- **Better Quality**: Multiple perspectives catch more issues
- **Reduced Context Switching**: Each agent maintains consistent persona

### vs. Manual Multi-Terminal Coordination
- **Automatic Orchestration**: Built-in coordination and communication
- **Shared Context**: All agents access the same project understanding
- **Conflict Resolution**: Automatic mediation of overlapping work
- **Integrated Workflow**: Seamless handoffs between agents

### vs. Traditional Roocode/VS Code Extensions
- **Terminal Native**: No VS Code dependency required
- **True Parallelism**: Concurrent execution vs. sequential mode switching
- **Independent Contexts**: Each agent maintains full context window
- **Enhanced Capabilities**: Leverages Claude Code's advanced features

## Project Structure

When you use this system, it creates and maintains this structure:

```
your-project/
├── CLAUDE.md                 # Main orchestrator configuration (auto-generated)
├── tasks/
│   ├── coordination.md       # Subagent coordination and communication
│   └── context/              # Project context and planning
│       ├── planning.md       # Current session planning
│       ├── activity.md       # Active work tracking
│       ├── history.md        # Project evolution record
│       └── learnings.md      # Project insights and patterns
├── docs/                     # Project documentation (maintained by Scribe)
│   ├── objectives.md         # Project goals and requirements
│   ├── architecture.md       # System architecture and design
│   ├── technical.md          # Technical specifications
│   └── features.md           # User features and functionality
├── src/                      # Your source code
└── tests/                    # Test files
```

## Getting Started

### 1. Set Up Your Project
Clone this repository into your project or copy the `personas/` folder to your workspace:

```bash
git clone https://github.com/your-repo/claude-code-subagent-personas
cd your-project
cp -r claude-code-subagent-personas/personas .
cp claude-code-subagent-personas/CLAUDE.md .
```

### 2. Initialize Project Structure
Create the basic folder structure (if it doesn't exist):

```bash
mkdir -p docs tasks/context src tests
```

### 3. Launch Multi-Agent Orchestration
Start Claude Code and describe a complex task requiring multiple specialists:

```bash
claude
> Analyze this project and implement [your feature] using 4 specialized subagents: Architect, Builder, Validator, and Scribe working in parallel.
```

### 4. Monitor Coordination
Check `tasks/coordination.md` to see how subagents are communicating and coordinating their work.

## Advanced Usage

### Custom Persona Modifications
You can customize the personas in the `personas/` folder to match your specific project needs or domain expertise.

### Integration with Existing Workflows
The system integrates seamlessly with:
- Git workflows (each subagent follows proper version control)
- CI/CD pipelines (Validator subagent ensures quality gates)
- Documentation systems (Scribe subagent maintains comprehensive docs)
- Testing frameworks (automatic test creation and validation)

### Scaling for Large Projects
For very large projects, you can:
- Use multiple waves of subagents for different project phases
- Coordinate subagents across different project modules
- Leverage the learning system to improve coordination over time

## Standards and Conventions

### Language and Localization
All subagents follow **Australian English** conventions:
- Spelling: colour, favour, organise, realise, travelling
- Date format: DD/MM/YYYY
- Time: UTC for technical contexts
- Units: SI metric system

### Quality Standards
- **Documentation**: Comprehensive markdown documentation for all aspects
- **Testing**: Thorough test coverage with meaningful assertions
- **Code Quality**: Clean, maintainable, and well-structured code
- **Communication**: Clear, professional communication between agents

### Coordination Protocols
- Shared file system for coordination and communication
- Clear handoff procedures between subagents
- Automatic conflict resolution through orchestrator mediation
- Comprehensive activity tracking and project history

## Troubleshooting

### Subagent Not Spawning
If subagents aren't being created automatically:
1. Ensure your task description mentions multiple subagents or specialists
2. Try explicitly requesting "Deploy X subagents to handle this task"
3. Check that your Claude Code version supports subagent functionality

### Coordination Issues
If subagents seem to be working in isolation:
1. Check `tasks/coordination.md` for communication logs
2. Ensure all subagents can access shared project files
3. Verify that file permissions allow read/write access

### Quality Concerns
If output quality doesn't meet expectations:
1. Review the persona definitions in `personas/` folder
2. Customize personas for your specific domain or requirements
3. Use the learning system in `tasks/context/learnings.md` to improve over time

## Contributing

This system is designed to be extensible and customizable. To contribute:

1. **Persona Improvements**: Enhance existing persona definitions
2. **New Personas**: Create specialized personas for specific domains
3. **Coordination Enhancements**: Improve inter-agent communication protocols
4. **Documentation**: Expand usage examples and best practices

### Customization for Your Team

Fork this repository and customize:
- Persona definitions to match your team's expertise areas
- Coordination protocols to fit your workflow
- Quality standards to align with your project requirements
- Documentation templates to match your style guide

## Migration from Roocode

If you're coming from a roocode-based system:

### Key Differences
- **No VS Code dependency** - Pure terminal/CLI experience
- **True parallel processing** - Multiple agents work simultaneously
- **Native Claude Code integration** - Leverages built-in capabilities
- **Enhanced coordination** - Sophisticated multi-agent orchestration

### Migration Steps
1. **Copy your existing project structure** to maintain docs/, tasks/, src/ folders
2. **Replace .roo configuration** with CLAUDE.md and personas/ folder
3. **Update any @/ path references** to standard relative paths
4. **Test the new system** with a simple multi-agent task

### What You Keep
- Your existing project documentation and structure
- The three-mode workflow concept (PLAN/ACT/REVIEW) via specialized personas
- Australian English standards and quality criteria
- Task management and context tracking systems

## License

This project maintains the same license as the original Rooles project. See [LICENSE.md](LICENSE.md) for details.

## Acknowledgments

This project builds upon the excellent foundation of:
- **Rooles** - The original roocode configuration system
- **Claude Code** - Anthropic's powerful CLI tool for AI-assisted development
- **Multi-agent orchestration research** - Pioneering work in AI agent coordination

---

**Ready to transform your development workflow with AI subagent orchestration?**

Start with a simple command: `claude` and describe a complex task requiring multiple specialists. Watch as your AI team coordinates to deliver comprehensive solutions faster and with higher quality than ever before.