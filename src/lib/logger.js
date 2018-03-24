const winston = require('winston');

const ConsoleLogger = new winston.transports.Console({
  level: 'debug',
  handleExceptions: true,
  json: false,
  colorize: true,
});

const logger = new winston.Logger({
  transports: [ConsoleLogger],
});

logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

module.exports = logger;
