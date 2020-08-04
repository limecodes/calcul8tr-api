# Calcul8r - Basic Calculator using React & Node API

## Requirements

1. Calculator must have at least 4 basic operations
2. Separated UI & API (In other words not a monorepo)
3. Code must be extendable, for example to extend "Calculator" to implement "Scientific Calculator" with more operations

## Technical Considerations

- For simplicity, I decided not to create a containerized environment with Docker. Typically, this would be the industry standard practice. However for simplicity the application can be run locally if node is installed.

## Installation Instructions

*Prerequisites*

Please ensure that you have NodeJS & Yarn installed on your machine and you are using the following version:

```
node v12
npm v6 or neweer
yarn v1.16.0 or latest
```

Before installing the API & Client, please create a folder that will house the two projects. For example `calcul8tr`. This will be referred to as the "root" folder.

1. Using a command line terminal, navigate to the created "root" folder: (ex `cd calcul8tr`)
1. In the "root" folder, clone the API and Client repositories:
1. Clone the API repo `git clone git@github.com:limecodes/calcul8tr-api.git`
1. Clone the client repo `git clone git@github.com:limecodes/calcul8tr-client.git`

*Install & run the API*

1. Navigate to the API repo directory: `cd calcul8tr-api`
1. Install dependencies by running `yarn install`
1. Run the application by running `yarn run start` or simply `yarn start`
1. The application should start in your terminal window (don't close this window)

*Install & Run Front-end*

1. Open a new terminal window or terminal tab and do the following steps
1. Navigate to the created "root" folder: (ex `cd calcul8tr`) _If you're in the API folder, `cd ..`_
1. Navigate to the `calcul8tr-client` folder: `cd calcul8tr-client`
1. Install dependencies by running `yarn install`
1. Run the application by running `yarn run start` or simply `yarn start`
1. The application should open in your browser
1. If the application does not open, navigate to `http://localhost:3000` in your browser
1. Don't close this terminal tab with the running application

*Running the tests*

You may run the tests within the repository folder by running `yarn run test` or simply `yarn test`


