import {
    CallHandler,
    ExecutionContext,
    HttpStatus,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { map, Observable } from 'rxjs';
  
  interface IResponseData<T> {
    data: T;
  }
  
  @Injectable()
  export class HttpInterceptor<T> implements NestInterceptor {
    intercept(
      context: ExecutionContext,
      next: CallHandler<T>,
    ): Observable<IResponseData<T>> {
      return next.handle().pipe(
        map((data) => ({
          code: HttpStatus.OK,
          data,
          msg: 'success',
        })),
      );
    }
  }
