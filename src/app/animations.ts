import { trigger, state, animate, transition, style } from '@angular/animations';

export const pageTransition =
  trigger('showPage', [
    state('on', style({ transform: 'translateY(0)' })),
    transition('void => on', [
      style({ opacity: 0}),
      animate('300ms ease-in')
    ]),
    transition('on => void', [
      animate(300, style({ opacity: 0}))
    ])
  ])




