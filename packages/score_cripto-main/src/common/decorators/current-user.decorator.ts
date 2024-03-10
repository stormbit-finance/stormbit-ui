import { createParamDecorator, ExecutionContext } from '@nestjs/common';
export const CurrentUser = createParamDecorator(
  (data: never, contex: ExecutionContext) => {
    const request = contex.switchToHttp().getRequest();

    return request.currentUser;
  },
);
