module.exports = {
    apps: [
        {
            name: "doan-web",
            script: "index.js",
            exec_mode: "fork",
            error_file: "/var/temp/doan-web/error-web.log",
            max_restarts: 10,
            restart_delay: 1000,
            env_production: {
                "NODE_ENV": "production",
            },
            env_development: {
                "NODE_ENV": "development",
            },
        }
    ]
}