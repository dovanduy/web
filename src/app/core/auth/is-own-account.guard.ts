import { first, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { User } from 'models/user';

@Injectable()
export class IsOwnAccountGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.auth.getCurrentUser().pipe(
      first(),
      map((u: User) => {
        const is = (u._id === next.parent.params.id) || (next.parent.params.id === 'me');

        if (!is) this.router.navigate(['/member', next.parent.params.id]);

        return is;
      }),);
  }
}
