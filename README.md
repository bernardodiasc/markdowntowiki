# Markdown to Wiki

Grabs markdown files from source code and generate structured Wiki wth it.

## Goals

The intention is to include a task in the build step that will collect all documentation in the format of markdown files that are spread in code base and make a copy of them, for versioning reasons since GitHub Wiki are in another git address. This script requires 1 input information that is how the Table of Contents should be organized. This is semanticaly individual for each kind of project, the default behavior is reflect documentation in the file system tree shape, whenever found a README.md in any folder that point will represent a subsection of outlined content.

# UNDER DEVELOPMENT

- [ ] Define configuration
- [ ] Define tests
- [ ] Write script
- [ ] Write docs
- [ ] Provide example
