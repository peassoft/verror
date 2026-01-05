type VErrorOpts = {
  name: string;
  cause?: Error;
  info?: Record<string, unknown>;
};

export default class VError extends Error {
  override name: string;
  info?: Record<string, unknown>;

  constructor(opts: VErrorOpts, message: string) {
    const { name, cause, info } = opts;

    super(message, { cause });

    this.name = name;

    if (info) this.info = info;
  }
}
