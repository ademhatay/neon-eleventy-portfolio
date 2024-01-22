const educations = require('./educations.js');
const experiences = require('./experiences.js');
const author = require('./author.js');
module.exports = {
    home: {
        name: 'John Doe',
        description: 'Frontend Developer',
        logoText: 'example.com',
    },
    meta: {
        siteTitle: 'John Doe | Frontend Developer',
        siteUrl: 'https://example.com',
        siteDescription: 'John Doe is a Frontend Developer based in New York, USA.',
        siteImage: 'https://example.com/images/og.png',
        siteKeywords: 'John Doe, Frontend Developer, Web Developer, React Developer',
        author: 'John Doe',
    },
    author,
    educations,
    experiences,
}
