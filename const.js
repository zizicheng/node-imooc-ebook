const env = require("./env");

let resUrl;
let mp3FilePath;
if(env === "dev") {
    resUrl = "http://192.168.1.6:8082";
    mp3FilePath = "/Users/lttsd/Desktop/resource/mp3";
}else if (env === "prod") {
    resUrl = "http://118.31.224.27";
    mp3FilePath = "/root/nginx/upload/mp3";

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
    mp3FilePath
}