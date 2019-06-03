export class UIMenu {
    private xDown: any = null;
    private yDown: any = null;
    private xDiff: any = null;
    private yDiff: any = null;
    private timeDown: any = null;
    private startEl: any = null;

    constructor() {
        // patch CustomEvent to allow constructor creation (IE/Chrome)
        if (typeof (window as any).CustomEvent !== 'function') {
            (window as any).CustomEvent = function (event, params) {
                params = params || {bubbles: false, cancelable: false, detail: undefined};
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            };
            (window as any).CustomEvent.prototype = (window as any).Event.prototype;
        }
        document.addEventListener('touchstart', this.handleTouchStart, false);
        document.addEventListener('touchmove', this.handleTouchMove, false);
        document.addEventListener('touchend', this.handleTouchEnd, false);

        document.addEventListener('swiped-left', function (e) {
            document.getElementsByClassName("nav")[0].classList.remove("nav-active");
            document.getElementsByClassName("nav-background")[0].classList.remove("nav-background-active");
        });
        document.getElementsByClassName("nav-background")[0].addEventListener("click", function () {
            document.getElementsByClassName("nav")[0].classList.remove("nav-active");
            document.getElementsByClassName("nav-background")[0].classList.remove("nav-background-active");
        });
        const subBtns = document.getElementsByClassName("nav-sub-btn");
        for (let i = 0; i < subBtns.length; i++) {
            const btn = subBtns[i];
            btn.addEventListener("click", function (event: any) {
                if (event.target.parentElement.getElementsByClassName("nav-sub-content")[0].classList.contains("nav-sub-content-active")) {
                    event.target.parentElement.getElementsByClassName("nav-sub-content")[0].classList.remove("nav-sub-content-active");
                } else {
                    for (let q = 0; q < subBtns.length; q++) {
                        const subParent: any = subBtns[q].parentElement;
                        subParent.getElementsByClassName("nav-sub-content")[0].classList.remove("nav-sub-content-active");
                    }

                    event.target.parentElement.getElementsByClassName("nav-sub-content")[0].classList.add("nav-sub-content-active");
                }
            });
        }
        document.getElementsByClassName("nav-hamburger")[0].addEventListener("click", function () {

            if ((document.getElementsByClassName("nav")[0] as any).style.display !== "block") {
                document.getElementsByClassName("nav")[0].classList.add("nav-active");
                document.getElementsByClassName("nav-background")[0].classList.add("nav-background-active");
            } else {
                document.getElementsByClassName("nav")[0].classList.remove("nav-active");
                document.getElementsByClassName("nav-background")[0].classList.remove("nav-background-active");
            }
        });
    }

    private handleTouchEnd(e) {
        // if the user released on a different target, cancel!
        if (this.startEl !== e.target) return;
        var swipeThreshold = parseInt(this.startEl.getAttribute('data-swipe-threshold') || '20', 10);    // default 10px
        var swipeTimeout = parseInt(this.startEl.getAttribute('data-swipe-timeout') || '500', 10);      // default 1000ms
        var timeDiff = Date.now() - this.timeDown;
        var eventType = '';
        if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) { // most significant
            if (Math.abs(this.xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (this.xDiff > 0) {
                    eventType = 'swiped-left';
                } else {
                    eventType = 'swiped-right';
                }
            }
        } else {
            if (Math.abs(this.yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (this.yDiff > 0) {
                    eventType = 'swiped-up';
                } else {
                    eventType = 'swiped-down';
                }
            }
        }
        if (eventType !== '') {
            // fire event on the element that started the swipe
            this.startEl.dispatchEvent(new CustomEvent(eventType, {bubbles: true, cancelable: true}));
            // if (console && console.log) console.log(eventType + ' fired on ' + startEl.tagName);
        }
        // reset values
        this.xDown = null;
        this.yDown = null;
        this.timeDown = null;
    }

    private handleTouchStart(e) {
        // if the element has data-swipe-ignore="true" we stop listening for swipe events
        if (e.target.getAttribute('data-swipe-ignore') === 'true') return;
        this.startEl = e.target;
        this.timeDown = Date.now();
        this.xDown = e.touches[0].clientX;
        this.yDown = e.touches[0].clientY;
        this.xDiff = 0;
        this.yDiff = 0;
    }

    private handleTouchMove(e) {
        if (!this.xDown || !this.yDown) return;
        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;
        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;
    };

}