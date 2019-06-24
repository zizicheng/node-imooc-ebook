const env = require("./env");

let resUrl;
let mp3FilePath;
let dbHost;
let dbUser;
let dbPwd;
if(env === "dev") {
    resUrl = "http://192.168.1.6:8082";
    mp3FilePath = "/Users/lttsd/Desktop/resource/mp3";
    dbHost = "localhost";
    dbUser = "root";
    dbPwd = "1598753lttsd"
}else if (env === "prod") {
    resUrl = "http://118.31.224.27";
    mp3FilePath = "/root/nginx/upload/mp3";
    dbHost = "118.31.224.27";
    dbUser = "root";
    dbPwd = "zksgaGG_54885"

}


const category = [
    'Biomedicine',
    'BusinessandManagement',
    'ComputerScience',
    'EarthSciences',
    'Economics',
    'Engineering',
    'Education',
    'Environment',
    'Geography',
    'History',
    'Laws',
    'LifeSciences',
    'Literature',
    'SocialSciences',
    'MaterialsScience',
    'Mathematics',
    'MedicineAndPublicHealth',
    'Philosophy',
    'Physics',
    'PoliticalScienceAndInternationalRelations',
    'Psychology',
    'Statistics'
];

module.exports = {
    resUrl,
    category,
    mp3FilePath,
    dbHost,
    dbUser,
    dbPwd
}