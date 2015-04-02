var config = {
    user: 'user',
    password: '123',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
    database: 'library',
    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
};

exports.config = config;