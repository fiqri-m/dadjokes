module.exports = {
  apps: [{
    name: 'dadjokes',
    script: './server.js',
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
