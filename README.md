peopel is the GOOD BRANCH where all my changes are

How to run the site

Dependencies:

    Make sure you have python3 version > 3.9.6 and homebrew installed

    First, create a virtual environment in VSCODE
    CMD + SHIFT + P to open the command palette 
    Then type Python: create environment 
    Choose VENV, 

    Next we need to install redis

    Open a terminal in VSCODE and do
    brew install redis

    Open a new terminal in VSCODE and do
    npm install
    npm install axios 

Running
Open a terminal and type
redis-server

Open a new terminal with the + icon in the corner of the terminal and type
redis-cli

Once again open a new terminal and type
cd client
npm run dev

Finally, run app.py in the server folder 
