module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/projects/count',
            handler: 'project.count',
        },
    ]
}