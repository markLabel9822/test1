/* eslint-disable @typescript-eslint/no-unsafe-argument */
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/lib/function';
import * as TE from 'fp-ts/TaskEither';
import { log } from 'src/libs/log';

/* eslint-disable no-unused-vars */
export const isEmpty = (obj: any) =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length;

export const isEmptyMaybeString = (obj: string | null) =>
  !isEmpty(obj) ? obj : '';

export const getOrElse = async <T>(data: TE.TaskEither<Error, T>) =>
  E.getOrElse((e) => e)(await data()) as T;
export const getOrElseW = async <A, T>(data: TE.TaskEither<A, T>) =>
  E.getOrElse((e) => e)(await data()) as T | A;

const emailRegex =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export const isEmailValid = (email: string) =>
  pipe(
    !isEmpty(email),
    E.of,
    E.map((flag) => email?.length < 254 && flag),
    E.chain((flag) =>
      pipe(
        E.tryCatch(
          () => emailRegex.test(email),
          (e) => log.error(String(e)),
        ),
        E.map((flag2) => flag && flag2),
      ),
    ),
    E.chain((flag) =>
      pipe(
        E.tryCatch(
          () => email?.split('@'),
          (e) => log.error(String(e)),
        ),
        E.bindTo('parts'),
        E.bind('flag1', ({ parts }) =>
          E.right(!isEmpty(parts) && parts[0]?.length < 64),
        ),
        E.bind('flag2', ({ parts }) =>
          E.right(
            parts?.length >= 2 &&
              parts[1]?.split('.').some((part) => part.length < 63),
          ),
        ),
        // E.bind('flag2', ({ parts }) =>  parts[1]?.split(".").every((part) => part.length < 63)),
        E.map(({ flag1, flag2 }) => flag && flag1 && flag2),
        // E.map(({ flag1 }) => flag && flag1)
      ),
    ),
  );
