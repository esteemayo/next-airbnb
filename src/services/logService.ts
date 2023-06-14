export function init() {}

export function log(error: string): void {
  console.error(error);
}

const logger = {
  init,
  log,
};

export default logger;
