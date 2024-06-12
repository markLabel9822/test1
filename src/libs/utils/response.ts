import { Response } from 'express';
import * as TE from 'fp-ts/TaskEither';

export const makeJson = (res: Response, data: any) =>
  TE.right(res.json({ status: 200, message: 'success', result: data }));
export const makeError = (res: Response, error: any) =>
  TE.left(res.status(400).json({ error: String(error) }));
