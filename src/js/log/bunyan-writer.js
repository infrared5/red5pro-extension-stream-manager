import { nameFromLevel } from 'browser-bunyan'

/**
 * Custom logger for bunyon.
 *
 * @private
 */
export class RawStream {
  write (rec) {
    console.log('%s - [%s] %s: %s', // eslint-disable-line no-console
      rec.time.toISOString(),
      rec.name,
      nameFromLevel[rec.level],
      rec.msg
    )
  }
}

