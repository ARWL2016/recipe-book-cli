"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.pageTransition = core_1.trigger('showPage', [
    core_1.state('on', core_1.style({ transform: 'translateY(0)' })),
    core_1.transition('void => on', [
        core_1.style({ transform: 'scale(0.9)' }),
        core_1.animate(400)
    ]),
    core_1.transition('on => void', [
        core_1.animate(300, core_1.style({ opacity: 0 }))
    ])
]);
//# sourceMappingURL=animations.js.map