module.exports = {
  apps: [{
    name: 'dadjokes',
    script: './server.js',
    instances : "3",
    exec_mode : "cluster"
  }],

    // Deployment Configuration
  deploy : {
    production : {
      "user": "fiqri",
      "host": ["localhost"],
      "ref": "origin/main",
      "repo": "git@github.com:fiqri-m/dadjokes.git",
      "path": "/var/www/tes",
      "post-deploy": "pm2 start ecosystem.config.js",
      "pre-deploy": "npm install",
      "key": "/home/fiqri/.ssh/id_rsa"
    }
  }
}
