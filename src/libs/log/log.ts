import { env } from 'src/config/env';
import { pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/Option';
import { isEmpty } from 'src/libs/utils';

const info = (message: string, detail?: string) => {
  const err = isEmpty(detail) ? message : `${message} ${detail}`;
  return pipe(
    err,
    O.fromPredicate(() => env.LOG_LEVEL === 'debug'),
    // eslint-disable-next-line
    O.map(() => console.log(err)),
    () => Error(err),
  );
};

const error = (message: string, detail?: string) => {
  const err = isEmpty(detail) ? message : `${message} ${detail}`;
  return pipe(
    err,
    O.fromPredicate(() => env.LOG_LEVEL === 'error' || true),
    O.map(() => console.error(err)),
    () => Error(err),
  );
};

export const log = {
  info,
  error,
};
