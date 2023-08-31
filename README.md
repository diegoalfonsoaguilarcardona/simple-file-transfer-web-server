# Simple File Transfer Web Server

This project is a simple web server that allows transferring files between a client and a server. The server lets the user upload files from their local system to the server, as well as download files from the server's public folder.

A key feature includes an index.html file which provides an interface for selecting the files to be uploaded, and lists available files in the server's public folder.

## Features

- Upload files to the server
- Download files from the server
- List all available files on the server

## Technology Stack

The application uses Express.js as the web framework and Multer for handling multipart/form-data, which is primarily used for uploading files.

## Installation

### Prerequisites

- Node.js (v10.0.0 or higher)
- npm (v6.0.0 or higher)

To install and run this application:

1. Clone the repository

    ```git
    git clone https://github.com/diegoalfonsoaguilarcardona/simple-file-transfer-web-server.git
    ```

2. Install dependencies with npm

    ```bash
    cd simple-file-transfer-web-server
    npm install
    ```

3. Once the dependencies have been installed, start the server by running

    ```bash
    node server.js
    ```

The server will start and listen on port 3000. You can access it at <http://localhost:3000>.

## Usage

- To upload a file, select a file using the upload interface provided by index.html, and then click 'Upload'.
- The list of available files in the server's public folder is displayed in index.html.
- To download a file, click on the file link from the list of available files.
