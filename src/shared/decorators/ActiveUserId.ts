import { Request } from 'express';

interface ActiveUserIdProps extends Request {
  userId: '';
}

const ActiveUserId = () => {
  const request: ActiveUserIdProps = {
    userId: '',
  };

  return request;
};
