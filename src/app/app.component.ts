import {
  Component,
  VERSION,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Router,
  NavigationStart,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
} from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  // I can break the app title so I can show parts of it and show it according to screen size.
  appTitle = {
    appName: 'Bendita Ka',
    angularVersion: 'Angular ' + VERSION.full,
    author: 'Itamar Serafim',
  };
  mode = new FormControl('side');
  opened = true;
  mainPageClasses: { [key: string]: string } = {
    'default-host': 'default-host',
    'host-p-2em': 'host-p-2em',
    'bg-transparent': 'bg-transparent',
  };
  /* tslint:disable-next-line */
  // @ts-ignore: Unreachable code error
  @ViewChild('sidenav') sidenav: MatSidenav;
  device = '';
  breakPointsMap: { [key: string]: string } = {
    '(min-width: 480px)': 'xSmall',
    '(min-width: 768px)': 'small',
    '(min-width: 992px)': 'medium',
    '(min-width: 1200px)': 'large',
    '(min-width: 1201px)': 'xlarge',
  };
  breakpointObserverSubscription = new Subscription();
  breakPoints: { [key: string]: boolean } = {};
  brkPoints: { text: string; val: boolean }[] = [];
  hostClass = '';

  sub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => {
          return route.data;
        })
      )
      .subscribe((data) => {
        const className: string = data && data.hostClass;
        this.hostClass = this.mainPageClasses[className] || '';
      });
  }
  ngAfterViewInit() {
    this.breakpointObserverSubscription = this.breakpointObserver
      .observe(Object.keys(this.breakPointsMap))
      .subscribe((state: BreakpointState) => {
        this.breakPoints = {};
        Object.entries(state.breakpoints)
          .filter((entry) => entry[1])
          .forEach((item) => {
            const brk: any = this.breakPointsMap[item[0]];
            this.breakPoints[brk] = true;
          });

        if (this.breakPoints.small && this.sidenav) {
          this.sidenav.open();
        } else {
          this.sidenav && this.sidenav.close();
        }

        this.brkPoints = Object.keys(state.breakpoints)
          .map((str) => ({ text: str, val: state.breakpoints[str] }))
          .filter(function (item) {
            return item.val;
          });
        const devices = Object.keys(this.breakPoints);
        ['xSmall', 'small', 'medium', 'large', 'xlarge'].forEach((str) => {
          const clazs = devices.indexOf(str) >= 0 ? str : this.device;
          this.device = clazs;
          this.mode.setValue('side');
          if (['xSmall', 'small'].indexOf(this.device) >= 0) {
            this.mode.setValue('over');
          }
          console.log('this.devi: ', this.device);
        });
        console.log(this.device);

        this.cdr.detectChanges();
      });
  }
  onOverlayActivate($event: any) {
    console.log('Router outlet activated', $event);
  }
  onOverlayDeactivate($event: any) {
    console.log('Router outlet deactivated', $event);
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
