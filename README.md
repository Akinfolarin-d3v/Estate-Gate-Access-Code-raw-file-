# Real Estate Gate Access Code System

## Overview

This project provides a gate access code system for real estate properties. It includes:

- **Resident Interface**: Allows residents to generate unique access codes.
- **Security Agent Interface**: Enables security agents to verify these codes for entry.

The backend is implemented with Node.js and Express, while the frontend uses HTML, CSS, and JavaScript.

## Features

- **Generate Access Codes**: Residents can create unique codes via `generate.html`.
- **Verify Access Codes**: Security agents can validate codes through `verify.html`.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Akinfolarin-d3v/real-estate-gate-access.git
    cd real-estate-gate-access
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the server:**

    ```bash
    node server.js
    ```

4. **Open the interfaces:**

    - **Residents**: `generate.html`
    - **Security Agents**: `verify.html`

## API Endpoints

- **POST /generate**: Generates a new access code.
- **POST /verify**: Checks if an access code is valid.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions, open an issue on the [GitHub repository](https://github.com/Akinfolarin-d3v/real-estate-gate-access).
