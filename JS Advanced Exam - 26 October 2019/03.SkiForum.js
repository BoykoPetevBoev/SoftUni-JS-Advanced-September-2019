class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
    }
    register(username, password, repeatPassword, email) {
        const userUsername = this._users.find(obj => { return obj.username === username });
        const userEmail = this._users.find(obj => { return obj.email === email });

        if (!username || !password || !repeatPassword || !email) {
            throw new Error("Input can not be empty");
        }
        else if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }
        else if (userUsername || userEmail) {
            throw new Error("This user already exists!");
        }
        else {
            const obj = {
                username,
                email,
                password,
                loggedIn: false
            };
            this._users.push(obj);
            return `${username} with ${email} was registered successfully!`;
        }
    }
    login(username, password) {
        const user = this._users.find(obj => { return obj.username === username });
        if (!user) {
            throw new Error("There is no such user");
        }
        else if (user.password === password) {
            user.loggedIn = true;
            return "Hello! You have logged in successfully";
        }
    }
    logout(username, password) {
        const user = this._users.find(obj => { return obj.username === username });
        if (!user) {
            throw new Error("There is no such user");
        }
        else if (user.password === password && user.loggedIn) {
            user.loggedIn = false;
            return "You have logged out successfully";
        }
    }
    postQuestion(username, question) {
        const user = this._users.find(obj => { return obj.username === username });
        if (!user || !user.loggedIn) {
            throw new Error("You should be logged in to post questions");
        }
        else if (!question) {
            throw new Error("Invalid question");
        }
        else {
            const obj = {
                username,
                id: this._id,
                question,
                answers: []
            };
            this._questions.push(obj);
            this._id++;
            return "Your question has been posted successfully";
        }
    }
    postAnswer(username, questionId, answer) {
        const user = this._users.find(obj => { return obj.username === username });
        const question = this._questions.find(obj => { return obj.id === questionId });
        if (!user || !user.loggedIn) {
            throw new Error("You should be logged in to post answers");
        }
        else if (!answer) {
            throw new Error("Invalid question");
        }
        else if (!question) {
            throw new Error("There is no such question");
        }
        else {
            const obj = {
                username,
                answer
            };
            question.answers.push(obj);
            return "Your answer has been posted successfully";
        }
    }
    showQuestions(){
        let newLine = ''
        return this._questions.reduce((result, question) => {
            result += `${newLine}Question ${question.id} by ${question.username}: ${question.question}`;
            question.answers.forEach(answer => {
                result +=  `\n---${answer.username}: ${answer.answer}`;
            });
            newLine = '\n';
            return result;
        }, '');
    }
}
