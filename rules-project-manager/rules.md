# Project Management

## Rules

### Requests

1. The requests folder must hold all incoming requests for change.
2. Each request must be a markdown file named as the request ID, and must include the following sections:
   - **Request ID**: A unique identifier for the request.
   - **Date**: The date the request was made (DD/MM/YYYY).
   - **Priority**: The priority of the request (e.g., low, medium, high).
   - **From**: The person or team making the request.
   - **Description**: A detailed description of the request and any high-level goals or deliverables.

### Tickets

1. The tickets folder must hold all project tickets, and must be used to guide the developer on how a task is to be completed.
2. Tickets must share a many-to-one relationship with a request.
3. Each ticket must be a markdown file, and must include the following sections:
   - **Ticket ID**: A unique identifier for the ticket.
   - **Request ID**: The ID of the request that this ticket is related to.
   - **Description**: A detailed description of the ticket requirements that a junior developer would be able to follow. The description must tell the reader what to do, and optionally how to do it. It must include any relevant information that the developer would need to know in order to complete the task.
   - **Acceptance Criteria**: A detailed description of the tests that would validate the completion of this task.
