(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    {
        "context": "You are a parent considering sending your child to Washington University Nursery School. You’ve learned that the curriculum is play-based and you want to know how learning is incorporated into a play-based context. You have some ideas about how language learning might happen, but are less sure about math.",
        "question": "Find some examples of how math learning is incorporated at Washington University Nursery School.",
        "tag": "math"
    },
    {
        "context": "You are investigating pre-school options for your 4 year old. Both you and your spouse work, so you need to fully understand what scheduling constraints each option involves. One of your schools of interest is the Washington University Nursery School.",
        "question": "When does school start and end each day? What is the longest period of time that your child can be there?",
        "tag": "school_day"
    },
    {
        "context": "You are investigating pre-school options for your 3.5 year old. You’ve been told that one of the hallmarks of a good program is teachers who have been there for a long time. You want your child to attend in the mornings only.",
        "question": "Which teachers would your child have and how long have they been at the school?",
        "tag": "teacher_tenure"
    },
    {
        "context": "You are starting to look at summer camp options and have heard good things about Washington University Nursery School for young children.",
        "question": "What are the daily camp hours? Are there any extended day opportunities?",
        "tag": "summer_camp"
    },
    {
        "context": "You are investigating pre-school options for your spirited 3 year old and want to understand their approach to discipline.",
        "question": "How do teachers at Washington University approach discipline?",
        "tag": "discipline"
    },
    {
        "context": "Your daughter is in the Teddy Bear class at Washington University Nursery School. She came home this week singing a song in Spanish about shapes, but you are pretty sure that she has some of the words wrong.",
        "question": "What are the correct lyrics?",
        "tag": "spanish_song"
    },
    {
        "context": "It is mid-December and you are thinking about things to do over your daughter's upcoming school break. She is 3 years old and attends the Washington University Nursery School and is in the Teddy Bear classroom. You are planning a trip to the library and want to check out some books that connect with something she is doing in school.",
        "question": "What are some potential book topics that relate to something that is going on in her classroom this week?",
        "tag": "books"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You want to accept the offer of admission.",
        "question": "Figure out what you need to do at this time to finalize your child’s place at the school.",
        "tag": "admission_2"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You need to pay one month of tuition as a deposit.",
        "question": "Find out how much one month of tuition is and whether or not it is possible to pay online.",
        "tag": "deposit"
    },
    {
        "context": "You are moving to St. Louis from Beijing and looking for a Pre-K program for your daughter, age 5. She is very close to her friends and you are worried that the move might be hard on her. She may need some extra support from her new teachers learning English, adapting to American culture, and making new friends.",
        "question": "How does the Washington University Nursery School staff approach providing extra help to students who need it?",
        "tag": "help"
    },
    {
        "context": "You are looking at Nursery Schools for your soon to be 3 year old. He has never been in school or daycare before and you are somewhat worried about the transition. You'd like to ensure that you'll be able to have strong communicationat his new school.",
        "question": "How does the Washington University Nursery School handle communicating with parents?",
        "tag": "communication"
    },
    {
        "context": "It’s mid-December and your son, age 4, came home all excited about science class. They learned a new word, but he can’t actually remember the word they learned about.",
        "question": "What was the topic of his recent science class?",
        "tag": "science"
    },
    {
        "context": "You are selecting a pre-school, but want to be sure that your daughter will be ready for kindergarten when it’s time.",
        "question": "How does the nursery school assess children’s knowledge, support their growth, and share the results with parents?",
        "tag": "parent_teacher_conference"
    },
    {
        "context": "You have recently accepted a position for your child for the coming school year at the Washington University Nursery School. Up to this point, your child has been at home and you are somewhat worried about the transition.",
        "question": "How does the nursery school support kids’ transitions into school?",
        "tag": "orientation"
    }
]

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('data loaded.');
var urlParams = new URL(window.location.href).searchParams;
exports.urlData = {
    raw: urlParams.toString(),
    assignmentID: urlParams.get('assignmentId'),
    hitID: urlParams.get('hitId'),
    workerID: urlParams.get('workerId'),
    submitTo: urlParams.get('turkSubmitTo'),
};
var Data = /** @class */ (function () {
    function Data(rawMturkURLData) {
        this.logs = {};
        this.data = {};
        this.errors = [];
        this.urlData = rawMturkURLData;
    }
    Data.prototype.serialize = function () {
        return JSON.stringify(this);
    };
    return Data;
}());
exports.Data = Data;
exports.data = new Data(exports.urlData);
Object.assign(window, { data: exports.data });

},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
console_wrapper_1.log("event loaded.", 2 /* BASIC */);
function objectToTrackerEvent(obj, action) {
    obj.action = action;
    obj.time = funcs_1.now();
}
exports.objectToTrackerEvent = objectToTrackerEvent;
function isTrackerEvent(obj) {
    return obj.action !== undefined && obj.time !== undefined;
}
exports.isTrackerEvent = isTrackerEvent;
var BaseTrackerEvent = /** @class */ (function () {
    function BaseTrackerEvent(action, eventInitDict) {
        this.custEv = new CustomEvent(action, eventInitDict);
        this.action = action;
        this.time = funcs_1.now();
    }
    Object.defineProperty(BaseTrackerEvent.prototype, "detail", {
        get: function () {
            return this.custEv.detail;
        },
        enumerable: true,
        configurable: true
    });
    return BaseTrackerEvent;
}());
exports.BaseTrackerEvent = BaseTrackerEvent;
// tslint:disable-next-line: max-classes-per-file
var ClickEvent = /** @class */ (function (_super) {
    __extends(ClickEvent, _super);
    function ClickEvent(x, y, id, eventInitDict) {
        var _this = _super.call(this, "click" /* CLICK */, eventInitDict) || this;
        _this.detail.x = x;
        _this.detail.y = y;
        _this.detail.id = id;
        return _this;
    }
    return ClickEvent;
}(BaseTrackerEvent));
exports.ClickEvent = ClickEvent;
// tslint:disable-next-line: max-classes-per-file
var ButtonEvent = /** @class */ (function (_super) {
    __extends(ButtonEvent, _super);
    function ButtonEvent(key, id, eventInitDict) {
        var _this = _super.call(this, "click" /* CLICK */, eventInitDict) || this;
        _this.detail.key = key;
        _this.detail.id = id;
        return _this;
    }
    return ButtonEvent;
}(BaseTrackerEvent));
exports.ButtonEvent = ButtonEvent;
// tslint:disable-next-line: max-classes-per-file
var HistoryEvent = /** @class */ (function (_super) {
    __extends(HistoryEvent, _super);
    function HistoryEvent(url, extra, eventInitDict) {
        var _this = _super.call(this, "history" /* HISTORY */, eventInitDict) || this;
        _this.detail.url = url;
        _this.detail.extra = extra;
        return _this;
    }
    return HistoryEvent;
}(BaseTrackerEvent));
exports.HistoryEvent = HistoryEvent;

},{"../utils/console_wrapper":16,"../utils/funcs":17}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var event_1 = require("./event");
console_wrapper_1.log("receiver loaded.", 2 /* BASIC */);
var EventReceiver = /** @class */ (function () {
    function EventReceiver() {
        this.map = new Map();
        this.emitter = new EventTarget();
    }
    EventReceiver.prototype.register = function (eventType, callback) {
        this.emitter.addEventListener(eventType, function (event) {
            var trackEv = event
                .detail;
            if (event_1.isTrackerEvent(trackEv) && callback) {
                callback(trackEv);
            }
        });
        if (callback) {
            this.map.set(eventType, callback);
        }
    };
    EventReceiver.prototype.doEvent = function (event) {
        var callback = this.map.get("" + event.action);
        if (callback) {
            callback(event);
        }
    };
    return EventReceiver;
}());
exports.EventReceiver = EventReceiver;

},{"../utils/console_wrapper":16,"./event":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("../router/router");
var console_wrapper_1 = require("../utils/console_wrapper");
var history_1 = require("./../router/history");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log("banner loaded.", 2 /* BASIC */);
var TopBanner = /** @class */ (function () {
    function TopBanner() {
    }
    TopBanner.show = function () {
        TopBanner.showing = true;
        document_1.D.display(elements_1.Elements.ddUp, true);
        document_1.D.display(elements_1.Elements.ddDown, false);
        document_1.D.display(elements_1.Elements.ddContent, true);
    };
    TopBanner.hide = function () {
        TopBanner.showing = false;
        document_1.D.display(elements_1.Elements.ddDown, true);
        document_1.D.display(elements_1.Elements.ddUp, false);
        document_1.D.display(elements_1.Elements.ddContent, false);
    };
    TopBanner.doDisplayChange = function () {
        TopBanner.showing ? TopBanner.hide() : TopBanner.show();
    };
    TopBanner.setup = function () {
        document_1.D.addEventListener(elements_1.Elements.ddArrow, "click", TopBanner.doDisplayChange);
    };
    TopBanner.showing = true;
    return TopBanner;
}());
exports.TopBanner = TopBanner;
document_1.D.addEventListener("mturk-top-banner-back", "click", function (e) {
    if (history_1.History.canBackward()) {
        router_1.Router.loadWithPathPrefix(history_1.History.backward());
    }
    else {
        alert("There is no page history to go back for at this time!");
    }
});

},{"../router/router":14,"../utils/console_wrapper":16,"./../router/history":13,"./document":6,"./elements":7}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./../utils/console_wrapper");
console_wrapper_1.log("document loaded.", 2 /* BASIC */);
var D = /** @class */ (function () {
    function D() {
    }
    D.elem = function (elem) {
        if (typeof elem === "string") {
            return D.id(elem);
        }
        else {
            return elem;
        }
    };
    D.display = function (elem, show) {
        elem = D.elem(elem);
        if (show) {
            elem.classList.remove("none");
            elem.classList.add("display");
        }
        else {
            elem.classList.remove("display");
            elem.classList.add("none");
        }
    };
    D.id = function (id) {
        var element = D.doc.getElementById(id);
        if (element === null) {
            throw new Error("Element was not found, id: <" + id + ">.");
        }
        else {
            return element;
        }
    };
    D.claz = function (claz) {
        return D.doc.getElementsByClassName(claz);
    };
    D.tag = function (tag) {
        return D.doc.getElementsByTagName(tag);
    };
    D.image = function (id, url) {
        console_wrapper_1.error(function () { return D.id(id).setAttribute("src", url); });
    };
    D.addEventListener = function (elem, type, listener) {
        elem = this.elem(elem);
        var wrapperFunc = function (e) {
            try {
                listener(e);
            }
            catch (err) {
                console.error(err);
            }
        };
        elem.addEventListener(type, wrapperFunc);
        return wrapperFunc;
    };
    D.each = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            apply(children[i]);
        }
    };
    D.eachRecur = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            apply(child);
            D.eachRecur(child, apply);
        }
    };
    D.create = function (tagName, options) {
        return document.createElement(tagName, options);
    };
    D.doc = document;
    return D;
}());
exports.D = D;

},{"./../utils/console_wrapper":16}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var document_1 = require("./document");
console_wrapper_1.log('element loaded.', 2 /* BASIC */);
/**
 * These are elements that are in every single project. Even if they are not used they should
 * be place in the project and display should be set to none. This simplifies configuration
 * and some common functions and allows less null checks to be performed overall. If the
 * element does not exist at run time an empty div with that id is created and its display
 * is set to none then appended to the body.
 */
/**
 * Attempts to get an element, if unsuccessful, creates div with id and appends to body.
 *
 * @param id - the id of the element to retrieve.
 */
function makeElemIfNotExist(id) {
    var elem;
    try {
        elem = document_1.D.id(id);
    }
    catch (err) {
        elem = document_1.D.create('div');
        elem.id = id;
        elem.style.display = 'none';
        document.body.append(elem);
    }
    return elem;
}
/**
 * Commonly accessed elements, allows for clearer dom manip on these elements.
 */
exports.Elements = {
    document: document_1.D.doc.documentElement,
    wrapper: makeElemIfNotExist('wrapper'),
    htmlLoc: makeElemIfNotExist('html-loc'),
    innerBody: makeElemIfNotExist('inner-body'),
    ddDown: makeElemIfNotExist('mturk-top-banner-drop-down-button'),
    ddUp: makeElemIfNotExist('mturk-top-banner-collapse-button'),
    ddContent: makeElemIfNotExist('mturk-top-banner-drop-down-content'),
    backButton: makeElemIfNotExist('mturk-top-banner-back'),
    ddArrow: makeElemIfNotExist('mturk-top-banner-arrow'),
    mtTopBannerText: makeElemIfNotExist('mturk-top-banner-text'),
    mtScenarioContext: makeElemIfNotExist('scenario_context'),
    mtScenarioQuestion: makeElemIfNotExist('scenario_question'),
    logFileInput: makeElemIfNotExist('mturk-top-banner-drop-down-content-log-file-input'),
    submitForm: makeElemIfNotExist('mturk-submit-form'),
    modal: makeElemIfNotExist('modal'),
};

},{"../utils/console_wrapper":16,"./document":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var elements_1 = require("./../dom/elements");
console_wrapper_1.log('html loc loaded.', 2 /* BASIC */);
var AppEnum;
(function (AppEnum) {
    AppEnum["INFORMATION_FORAGING"] = "information-foraging";
    AppEnum["COGNITIVE_LOAD"] = "cognitive-load";
    AppEnum["GENDER_MAG"] = "gender-mag";
    AppEnum["ERROR"] = "error";
})(AppEnum = exports.AppEnum || (exports.AppEnum = {}));
var ModeEnum;
(function (ModeEnum) {
    ModeEnum["REAL"] = "real";
    ModeEnum["SANDBOX"] = "sandbox";
    ModeEnum["TEST"] = "test";
    ModeEnum["ERROR"] = "error";
})(ModeEnum = exports.ModeEnum || (exports.ModeEnum = {}));
var HTMLLoc = /** @class */ (function () {
    function HTMLLoc() {
    }
    HTMLLoc.setup = function () {
        HTMLLoc.app = HTMLLoc.elem.dataset.app || AppEnum.ERROR;
        HTMLLoc.mode =
            HTMLLoc.elem.dataset.mode || ModeEnum.ERROR;
        HTMLLoc.scenario = HTMLLoc.elem.dataset.scenario || 'error';
    };
    HTMLLoc.elem = elements_1.Elements.htmlLoc;
    return HTMLLoc;
}());
exports.HTMLLoc = HTMLLoc;

},{"../utils/console_wrapper":16,"./../dom/elements":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log('modal loaded.', 2 /* BASIC */);
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.display = function (src) {
        Modal.elem.setAttribute('style', "left: " + Math.round(window.pageXOffset) + "px; top: " + Math.round(window.pageYOffset) + "px;");
        Modal.elem.classList.replace('hide-modal', 'show-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = src;
        });
        document.body.classList.add('noscroll');
    };
    Modal.hide = function () {
        Modal.elem.classList.replace('show-modal', 'hide-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = '';
        });
        document.body.classList.remove('noscroll');
    };
    Modal.elem = elements_1.Elements.modal;
    return Modal;
}());
exports.Modal = Modal;
document_1.D.addEventListener(Modal.elem, 'click', function (e) {
    Modal.hide();
});
document_1.D.each(Modal.elem, function (node) {
    document_1.D.addEventListener(node, 'click', function (e) {
        e.preventDefault();
    });
});

},{"./../utils/console_wrapper":16,"./document":6,"./elements":7}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("./../utils/funcs");
console_wrapper_1.log('scroll loaded.', 2 /* BASIC */);
/**
 * Linear implementation of scrolling.
 * Follows the singleton pattern, call do to start a scroll operation.
 *
 * If a scroll is called when another scroll has already begun an
 * error will be thrown, but the first scroll will continue until completion.
 */
var Scroll = /** @class */ (function () {
    function Scroll(endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            document.dispatchEvent(new CustomEvent('scroll'));
            complete(args);
        };
    }
    Scroll.callback = function (endPos, duration, complete) {
        if (duration === void 0) { duration = 200; }
        if (complete === void 0) { complete = funcs_1.noop; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        var oldComplete = complete;
        complete = function () {
            Scroll.running = false;
            console_wrapper_1.error(oldComplete);
        };
        this.instance.update(endPos, duration, complete).attemptScroll();
    };
    Scroll.promise = function (endPos, duration) {
        var _this = this;
        if (duration === void 0) { duration = 200; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        return new Promise(function (resolve, reject) {
            try {
                var runResolver = function () {
                    Scroll.running = false;
                    resolve();
                };
                _this.instance
                    .update(endPos, duration, runResolver)
                    .attemptScroll();
            }
            catch (err) {
                Scroll.running = false;
                reject(err);
            }
        });
    };
    Object.defineProperty(Scroll, "isRunning", {
        get: function () {
            return Scroll.running;
        },
        enumerable: true,
        configurable: true
    });
    Scroll.prototype.update = function (endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = complete;
        return this;
    };
    Scroll.prototype.calcScrollAmount = function () {
        var curTime = funcs_1.now();
        var steps = Math.max(1, (this.duration - curTime) / Scroll.STEP_IN_MS);
        var curPos = window.pageYOffset;
        return Math.ceil((this.endPos - curPos) / steps);
    };
    Scroll.prototype.scroll = function () {
        window.scroll(0, this.calcScrollAmount());
        if (window.pageYOffset === this.endPos) {
            this.complete();
        }
        else {
            requestAnimationFrame(this.scroll);
        }
    };
    Scroll.prototype.attemptScroll = function () {
        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, this.endPos);
        }
        this.scroll();
    };
    Scroll.STEP_IN_MS = 17;
    Scroll.running = false;
    Scroll.instance = new Scroll(0, 0, funcs_1.noop);
    return Scroll;
}());
exports.Scroll = Scroll;

},{"../utils/console_wrapper":16,"./../utils/funcs":17}],11:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var funcs_1 = require("../utils/funcs");
var data_1 = require("./../data-log/data");
var console_wrapper_1 = require("./../utils/console_wrapper");
var q_params_1 = require("./../utils/q_params");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log('submit form loaded.', 2 /* BASIC */);
var k = 'NcF2WRkUbf5tzj4bIvI981FqmS6pMlO83g2j7u5R';
var gate = 'https://2ykopq1oha.execute-api.us-east-1.amazonaws.com/PROD/logs';
var AllowSubmissionDefault = {
    allow: function () { return null; },
    preSubmit: funcs_1.noop,
};
var SubmitForm = /** @class */ (function () {
    function SubmitForm() {
    }
    SubmitForm.setup = function (allowSubmission) {
        var _this = this;
        if (allowSubmission === void 0) { allowSubmission = AllowSubmissionDefault; }
        SubmitForm.submitFunc = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var allowed, qp, resp, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        event.preventDefault();
                        allowed = allowSubmission.allow();
                        if (!(allowed === null)) return [3 /*break*/, 5];
                        qp = new URL(window.location.href).searchParams;
                        data_1.data.urlData.raw = window.location.href;
                        data_1.data.urlData.assignmentID = qp.get('assignmentId');
                        data_1.data.urlData.hitID = qp.get('hitId');
                        data_1.data.urlData.workerID = qp.get('workerId');
                        data_1.data.urlData.submitTo =
                            qp.get('turkSubmitTo') + '/mturk/externalSubmit';
                        if (data_1.data.urlData.assignmentID !== null) {
                            document_1.D.id('assignment-id').value =
                                data_1.data.urlData.assignmentID;
                        }
                        if (data_1.data.urlData.hitID !== null) {
                            document_1.D.id('hit-id').value =
                                data_1.data.urlData.hitID;
                        }
                        elements_1.Elements.submitForm.action = data_1.data.urlData
                            .submitTo;
                        allowSubmission.preSubmit();
                        return [4 /*yield*/, fetch(gate, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'x-api-key': k,
                                },
                                body: JSON.stringify({
                                    sandbox: q_params_1.params.sandbox,
                                    wustl_key: q_params_1.params.wustl_key,
                                    project: q_params_1.params.project,
                                    iteration: q_params_1.params.iteration,
                                    tag: q_params_1.params.tag,
                                    assignmentID: data_1.data.urlData.assignmentID,
                                    hitID: data_1.data.urlData.hitID,
                                    workerID: data_1.data.urlData.workerID,
                                    log: data_1.data.serialize(),
                                }),
                            })];
                    case 1:
                        resp = _e.sent();
                        console.log(resp.status);
                        _b = (_a = console).log;
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        _b.apply(_a, [_e.sent()]);
                        if (!(resp.status !== 200)) return [3 /*break*/, 4];
                        _c = alert;
                        _d = 'You made a bad request with your submission. The server thinks that you made this error: ';
                        return [4 /*yield*/, resp.json()];
                    case 3:
                        _c.apply(void 0, [_d +
                                (_e.sent()).error]);
                        return [2 /*return*/];
                    case 4:
                        SubmitForm.elem.removeEventListener('submit', SubmitForm.submitFunc);
                        SubmitForm.elem.submit();
                        return [3 /*break*/, 6];
                    case 5:
                        alert(allowed);
                        _e.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        SubmitForm.elem.addEventListener('submit', SubmitForm.submitFunc);
    };
    SubmitForm.elem = elements_1.Elements.submitForm;
    SubmitForm.allowSubmitDefault = { allow: function () { return true; }, preSubmit: funcs_1.noop };
    return SubmitForm;
}());
exports.SubmitForm = SubmitForm;

},{"../utils/funcs":17,"./../data-log/data":2,"./../utils/console_wrapper":16,"./../utils/q_params":20,"./document":6,"./elements":7}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var banner_1 = require("./banner");
var html_loc_1 = require("./html_loc");
var TrackerElements = /** @class */ (function () {
    function TrackerElements() {
    }
    TrackerElements.setupTrackerElements = function () {
        // setup dom elements
        banner_1.TopBanner.setup();
        html_loc_1.HTMLLoc.setup();
    };
    return TrackerElements;
}());
exports.TrackerElements = TrackerElements;

},{"./banner":5,"./html_loc":8}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tracker_1 = require("./../tracker/tracker");
function newHistoryEntry(currURL, hasPrevURL, prevEntry, extra) {
    tracker_1.Tracker.getEventDispatchFunc('history')({ url: currURL, extra: extra });
    return {
        currURL: currURL,
        hasPrevURL: hasPrevURL,
        prevEntry: prevEntry,
        extra: extra,
        nextEntries: [],
    };
}
var History = /** @class */ (function () {
    function History() {
    }
    History.forward = function (url, extra) {
        var histEnt = newHistoryEntry(url, true, History.currhistory, extra);
        History.currhistory.nextEntries.push(histEnt);
        History.currhistory = histEnt;
        return url;
    };
    History.canBackward = function () {
        var _a, _b;
        return (History.currhistory.hasPrevURL &&
            !((_b = (_a = History.currhistory.prevEntry) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b.wrapper));
    };
    History.backward = function () {
        if (!History.canBackward()) {
            throw new Error('Cannot go back any further.');
        }
        console.log(History.currhistory.prevEntry);
        var prevEntry = History.currhistory.prevEntry;
        var nextURL = prevEntry.currURL;
        var histEnt = newHistoryEntry(nextURL, prevEntry.hasPrevURL, prevEntry.prevEntry, { back: true });
        History.currhistory = histEnt;
        return nextURL;
    };
    History.setup = function (url, extra) {
        History.firstHistory = newHistoryEntry(url, false, undefined, extra);
        History.currhistory = History.firstHistory;
    };
    return History;
}());
exports.History = History;
window.h = History;

},{"./../tracker/tracker":15}],14:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("../dom/document");
var elements_1 = require("../dom/elements");
var modal_1 = require("../dom/modal");
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
var html_loader_1 = require("../utils/html_loader");
var history_1 = require("./history");
console_wrapper_1.log('router loaded.', 2 /* BASIC */);
function testOn(elem, config) {
    return (elem.tagName === config.module &&
        (config.mode === 1 /* ON */ ||
            config.mode === 2 /* STANDARD_ALLOWANCES */));
}
function testAllowance(config) {
    return config.mode === 2 /* STANDARD_ALLOWANCES */;
}
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.configure = function (configs, pathPrefix) {
        configs.forEach(function (config) {
            Router.configs.set(config.module, Router.upgradeConfig(config));
        });
        Router.pathPrefix = pathPrefix;
    };
    Router.setup = function (elem) {
        document_1.D.eachRecur(elem, function (node) {
            var e_1, _a;
            try {
                for (var _b = __values(Router.configs.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var config = _c.value;
                    if (testOn(node, config)) {
                        config.setup(config, node);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    Router.STANDARD_LINK_LISTENER = function (e) {
        return console_wrapper_1.error(function () {
            e.preventDefault();
            var target = e.target;
            var url = target.href;
            history_1.History.forward(Router.getPathName(url));
            var ret = html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc);
            window.dispatchEvent(new CustomEvent('newPageLoad'));
            return ret;
        });
    };
    Router.ON_COMPLETE_SLL = function (post) {
        var _this = this;
        return function (e) {
            console_wrapper_1.error(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Router.STANDARD_LINK_LISTENER(e)];
                        case 1:
                            _a.sent();
                            post(e);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
    };
    Router.IMAGE_LINK_LISTENER = function (e) {
        return console_wrapper_1.error(function () {
            e.preventDefault();
        });
    };
    Router.FORM_OFF_LISTENER = function (e) {
        e.preventDefault();
        console.error('All forms except for the one in the top header are inactive.');
    };
    Router.defaultAllowancesOn = function () {
        Router.registerAllowance({ regex: Router.EMPTY, func: Router.EMPTY_RESPONDER }, { regex: Router.HASH_TAGS, func: Router.HASH_TAG_RESPONDER }, { regex: Router.AT_SYMBOL, func: Router.AT_SYMBOL_RESPONDER });
    };
    Router.defaultAllowancesOff = function () {
        Router.unregisterAllowance(Router.EMPTY, Router.HASH_TAGS, Router.AT_SYMBOL);
    };
    Router.registerAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) {
            return Router.linkAllowances.set(regex.regex, regex.func);
        });
    };
    Router.unregisterAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) { return Router.linkAllowances.delete(regex); });
    };
    Router.clearAllowances = function () {
        Router.linkAllowances.clear();
    };
    Router.load = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        history_1.History.forward(Router.getPathName(url));
                        return [4 /*yield*/, html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc)];
                    case 1:
                        ret = _a.sent();
                        window.dispatchEvent(new CustomEvent('newPageLoad'));
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Router.loadWithPathPrefix = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                ret = html_loader_1.HTMLLoader.loadURL(Router.pathPrefix + page, elements_1.Elements.htmlLoc);
                window.dispatchEvent(new CustomEvent('newPageLoad'));
                return [2 /*return*/, ret];
            });
        });
    };
    Router.upgradeConfig = function (config) {
        return {
            module: config.module,
            mode: config.mode,
            setup: Router.SetupFunctions[config.module],
        };
    };
    Router.getPathName = function (url) {
        var ret = Router.pathRegex.exec(url);
        return ret === null ? url : ret.length > 1 ? ret[1] : url;
    };
    Router.HASH_TAGS = new RegExp('#');
    Router.EMPTY = new RegExp('^$');
    Router.AT_SYMBOL = new RegExp('@');
    Router.HASH_TAG_RESPONDER = funcs_1.noop;
    Router.EMPTY_RESPONDER = function (event) { return event.preventDefault(); };
    Router.AT_SYMBOL_RESPONDER = function (event) {
        return event.preventDefault();
    };
    Router.pathPrefix = '';
    Router.SetupFunctions = {
        A: function (config, elem) {
            var aNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_1 = true;
                var href_1 = aNode.href;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = regex.test(href_1);
                    passesRegexTest_1 = passesRegexTest_1 && !test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_1) {
                    if (href_1.substr(href_1.length - 3) === 'pdf') {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            e.preventDefault();
                            modal_1.Modal.display(href_1);
                        });
                    }
                    else {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            return Router.STANDARD_LINK_LISTENER(e);
                        });
                    }
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.STANDARD_LINK_LISTENER(e);
                });
            }
        },
        IMG: function (config, elem) {
            var imgNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_2 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(imgNode.src);
                    passesRegexTest_2 = passesRegexTest_2 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_2) {
                    document_1.D.addEventListener(elem, 'click', function (e) {
                        return Router.IMAGE_LINK_LISTENER(e);
                    });
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.IMAGE_LINK_LISTENER(e);
                });
            }
        },
        FORM: function (config, elem) {
            var formNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_3 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(formNode.src);
                    passesRegexTest_3 = passesRegexTest_3 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_3) {
                    document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
                }
            }
            else {
                document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
            }
        },
    };
    Router.configs = new Map();
    Router.linkAllowances = new Map();
    Router.pathRegex = /\/([\w]+.html)/;
    return Router;
}());
exports.Router = Router;

},{"../dom/document":6,"../dom/elements":7,"../dom/modal":9,"../utils/console_wrapper":16,"../utils/funcs":17,"../utils/html_loader":18,"./history":13}],15:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = require("../data-log/event");
var receiver_1 = require("../data-log/receiver");
var elements_1 = require("../dom/elements");
var tracker_elems_1 = require("../dom/tracker_elems");
var console_wrapper_1 = require("../utils/console_wrapper");
var data_1 = require("./../data-log/data");
var submit_form_1 = require("./../dom/submit_form");
console_wrapper_1.log('tracker loaded.', 2 /* BASIC */);
var Tracker = /** @class */ (function () {
    function Tracker() {
    }
    Tracker.loadScenario = function (scen) {
        var sub = scen.context;
        if (sub.length > 50) {
            sub = sub.substring(0, 50);
            var inds = [
                sub.lastIndexOf(' '),
                sub.lastIndexOf('.'),
                sub.lastIndexOf(','),
                sub.lastIndexOf('?'),
                sub.lastIndexOf('!'),
            ];
            var ind = Math.max.apply(Math, __spread(inds));
            sub = sub.substring(0, ind) + '...';
        }
        console.log(scen);
        console.log('loaded scen');
        elements_1.Elements.mtTopBannerText.innerText = sub;
        elements_1.Elements.mtScenarioContext.innerText = scen.context;
        elements_1.Elements.mtScenarioQuestion.innerText = scen.question;
        elements_1.Elements.htmlLoc.dataset.task = scen.tag;
    };
    Tracker.start = function (config) {
        console_wrapper_1.setDebugLevel(config.debugLevel);
        // configure tracker specific elements
        tracker_elems_1.TrackerElements.setupTrackerElements();
        submit_form_1.SubmitForm.setup(config.allowSubmission);
        data_1.data.data.task = elements_1.Elements.htmlLoc.dataset.task;
        config.setup();
    };
    Tracker.registerEvent = function (eventType) {
        data_1.data.logs[eventType] = [];
        this.receiver.register(eventType, function (event) {
            data_1.data.logs[eventType].push(event);
        });
        return this.getEventDispatchFunc(eventType);
    };
    Tracker.getEventDispatchFunc = function (eventType) {
        var _this = this;
        return function (evData) {
            if (typeof evData === 'object') {
                if (!event_1.isTrackerEvent(evData)) {
                    event_1.objectToTrackerEvent(evData, eventType);
                }
                _this.receiver.doEvent(evData);
            }
        };
    };
    Tracker.attachData = function (key, attribute) {
        data_1.data.data[key] = attribute;
    };
    Tracker.computeAttribute = function (name, compute) {
        data_1.data.data[name] = compute(data_1.data.data[name]);
    };
    Tracker.lastPos = { x: 0, y: 0, time: 0 };
    Tracker.receiver = new receiver_1.EventReceiver();
    return Tracker;
}());
exports.Tracker = Tracker;

},{"../data-log/event":3,"../data-log/receiver":4,"../dom/elements":7,"../dom/tracker_elems":12,"../utils/console_wrapper":16,"./../data-log/data":2,"./../dom/submit_form":11}],16:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./../data-log/data");
log("console wrapper loaded.", 2 /* BASIC */);
function error(func) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, errorHO(func)()];
        });
    });
}
exports.error = error;
function errorHO(func) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, func(args)];
                }
                catch (error) {
                    data_1.data.errors.push(error);
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
}
exports.errorHO = errorHO;
var debugLevel = 2 /* BASIC */;
function setDebugLevel(level) {
    debugLevel = level;
}
exports.setDebugLevel = setDebugLevel;
function log(message, importance) {
    if (debugLevel >= importance) {
        console.log(message);
    }
}
exports.log = log;

},{"./../data-log/data":2}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("funcs loaded.", 2 /* BASIC */);
// tslint:disable-next-line: no-empty
function noop() { }
exports.noop = noop;
function now() {
    return new Date().getTime();
}
exports.now = now;

},{"./console_wrapper":16}],18:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("../dom/document");
var console_wrapper_1 = require("./console_wrapper");
var funcs_1 = require("./funcs");
console_wrapper_1.log('html loader loaded.', 2 /* BASIC */);
var HTMLLoader = /** @class */ (function () {
    function HTMLLoader() {
    }
    HTMLLoader.finish = function () {
        HTMLLoader.finished = true;
        HTMLLoader.flattenTSLoadTags();
    };
    HTMLLoader.isFinished = function () {
        return HTMLLoader.finished;
    };
    HTMLLoader.cacheHTML = function (name, content) {
        if (HTMLLoader.finished) {
            throw new Error('Cannot cache new HTML entities after the application has been started.');
        }
        var tsl = document.createElement('ts-load');
        tsl.dataset.name = name;
        tsl.innerHTML = content;
        this.CACHE[name] = tsl;
    };
    HTMLLoader.registerPostLoadFunc = function (func) {
        console_wrapper_1.log('regsiter post load function', 3 /* DETAILED */);
        HTMLLoader.postLoadFunc = func;
    };
    HTMLLoader.load = function (html, elem) {
        return new Promise(function (resolve, reject) {
            try {
                console_wrapper_1.log('begin load', 3 /* DETAILED */);
                var context = document_1.D.elem(elem);
                var range = document.createRange();
                range.selectNodeContents(context);
                var frag = range.createContextualFragment(html);
                HTMLLoader.removeTagsFromDocumentFragment(frag, 'script');
                HTMLLoader.loadAllCachedElements(frag);
                context.innerHTML = '';
                context.appendChild(frag);
                console_wrapper_1.log('end load', 3 /* DETAILED */);
                HTMLLoader.postLoadFunc();
                resolve(true);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.loadURL = function (url, elem) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = HTMLLoader).load;
                        return [4 /*yield*/, HTMLLoader.getHTML(url)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), elem])];
                }
            });
        });
    };
    HTMLLoader.getHTML = function (url) {
        return new Promise(function (resolve, reject) {
            try {
                console_wrapper_1.log('begin request', 3 /* DETAILED */);
                var request_1 = new XMLHttpRequest();
                request_1.open('GET', url, true);
                request_1.send(null);
                request_1.onreadystatechange = function () {
                    if (request_1.readyState === 4) {
                        console_wrapper_1.log('resolve request', 3 /* DETAILED */);
                        resolve(request_1.responseText);
                    }
                };
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.removeTagsFromDocumentFragment = function (frag, tagName) {
        frag.querySelectorAll(tagName).forEach(function (tag) { return frag.removeChild(tag); });
    };
    HTMLLoader.flattenTSLoadTags = function () {
        console_wrapper_1.log('Flattening', 3 /* DETAILED */);
        var s = new Set();
        Object.keys(HTMLLoader.CACHE).forEach(function (name) {
            return (HTMLLoader.CACHE[name] = HTMLLoader.flattenTSLoadTag(HTMLLoader.getCachedContent(name), s, 0));
        });
    };
    HTMLLoader.multipleTabs = function (n) {
        var ret = '';
        for (var i = 0; i < n; i++) {
            ret += '\t';
        }
        return ret;
    };
    HTMLLoader.flattenTSLoadTag = function (elem, flattened, count) {
        var tabs = HTMLLoader.multipleTabs(count);
        if (count > 100) {
            alert('Check the console, an error has occurred.');
            throw new Error('It seems like you might have infinitely recursively nested tags.' +
                '\nHere are all of the tags that have been flattened so far: ' +
                flattened +
                '\nHere is the name of the current element: ' +
                elem.getAttribute('data-name'));
        }
        var name = elem.getAttribute('data-name');
        if (name === null) {
            return null;
        }
        var content = HTMLLoader.getCachedContent(name);
        if (content === null) {
            return null;
        }
        if (flattened.has(name)) {
            return content;
        }
        content.querySelectorAll('script').forEach(function (e) { return e.remove(); });
        content.querySelectorAll('ts-load').forEach(function (e) {
            var child = HTMLLoader.flattenTSLoadTag(e, flattened, count + 1);
            if (child !== null) {
                e.replaceWith(child);
            }
        });
        flattened.add(name);
        return content;
    };
    HTMLLoader.getCachedContent = function (name) {
        if (name === undefined || name === null) {
            return null;
        }
        var content = HTMLLoader.CACHE[name];
        if (content === undefined || content === null) {
            return null;
        }
        return content.cloneNode(true);
    };
    HTMLLoader.loadAllCachedElements = function (frag) {
        frag.querySelectorAll('ts-load').forEach(function (elem) {
            var name = elem.getAttribute('data-name');
            var content = HTMLLoader.getCachedContent(name);
            if (content != null) {
                elem.replaceWith(content);
            }
        });
    };
    HTMLLoader.CACHE = {};
    HTMLLoader.finished = false;
    HTMLLoader.postLoadFunc = funcs_1.noop;
    return HTMLLoader;
}());
exports.HTMLLoader = HTMLLoader;

},{"../dom/document":6,"./console_wrapper":16,"./funcs":17}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elements_1 = require("../dom/elements");
var document_1 = require("./../dom/document");
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("id generator loaded", 2 /* BASIC */);
var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    IDGenerator.reset = function () {
        IDGenerator.idCount = 0;
    };
    Object.defineProperty(IDGenerator, "next", {
        get: function () {
            IDGenerator.idCount += 1;
            return IDGenerator.prefix + IDGenerator.idCount;
        },
        enumerable: true,
        configurable: true
    });
    IDGenerator.applyID = function (elem) {
        elem.id = elem.id ? elem.id : IDGenerator.next;
    };
    /**
     * Recursively adds ids to all elements that are below the given
     * element in the heirarchy.
     *
     * @param elem - the element to start applying ids to its children.
     *                  Will not apply an id to this element.
     */
    IDGenerator.applyRecur = function (elem) {
        document_1.D.eachRecur(elem, this.applyID);
    };
    /**
     * Attaches ids to all html elements in the target location in the DOM that do not have ids.
     */
    IDGenerator.attachIdsToAllElements = function () {
        IDGenerator.applyRecur(elements_1.Elements.htmlLoc);
    };
    IDGenerator.idCount = 0;
    IDGenerator.prefix = "auto_gen_id_unq_";
    return IDGenerator;
}());
exports.IDGenerator = IDGenerator;

},{"../dom/elements":7,"./../dom/document":6,"./console_wrapper":16}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qParams = new URL(window.location.href).searchParams;
exports.params = {
    wustl_key: '',
    sandbox: false,
    project: '',
    iteration: 0,
    tag: '',
};
try {
    qParams.forEach(console.log);
    if (['wustl_key', 'sandbox', 'project', 'iteration', 'tag'].every(function (key) {
        console.log('key: ' + qParams.has(key));
        return qParams.has(key);
    })) {
        exports.params.wustl_key = qParams.get('wustl_key');
        exports.params.sandbox = qParams.get('sandbox') === 'true';
        exports.params.project = qParams.get('project');
        exports.params.iteration = parseInt(qParams.get('iteration'), 10);
        exports.params.tag = qParams.get('tag');
    }
    else {
        console.log('missing query params');
        alert('This HIT is missing neccessary metadata, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
    }
}
catch (e) {
    console.log(e);
    alert(e);
    alert('This HIT is broken, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
}

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("ready loaded", 2 /* BASIC */);
var ready = false;
var resolveFunc;
var rejectFunc;
var readyPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
});
document.addEventListener("DOMContentLoaded", function () {
    console_wrapper_1.log("document is ready", 3 /* DETAILED */);
    ready = true;
    resolveFunc(true);
});
function isReady() {
    return ready;
}
exports.isReady = isReady;
function waitUntilReady() {
    return ready ? Promise.resolve(true) : readyPromise;
}
exports.waitUntilReady = waitUntilReady;

},{"./console_wrapper":16}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: no-var-requires
exports.scenarios = require('./../../../../scenarios/scenarios.json');
window.scenarios = exports.scenarios;

},{"./../../../../scenarios/scenarios.json":1}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("./../core/dom/document");
var Accordion = /** @class */ (function () {
    function Accordion(outer) {
        var _this = this;
        this.outer = outer;
        document_1.D.addEventListener(outer, "click", function () {
            /* Toggle between adding and removing the "active" class,
                      to highlight the button that controls the panel */
            _this.outer.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var panel = _this.outer.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            }
            else {
                panel.style.display = "block";
            }
        });
    }
    Accordion.setupAll = function () {
        Accordion.discardAll();
        var accordions = document_1.D.claz("accordion");
        for (var accIndex = 0; accIndex < accordions.length; ++accIndex) {
            var elem = accordions.item(accIndex);
            if (elem == null) {
                continue;
            }
            Accordion.accordions.push(new Accordion(elem));
        }
    };
    Accordion.discardAll = function () {
        Accordion.accordions = [];
    };
    Accordion.accordions = [];
    return Accordion;
}());
exports.Accordion = Accordion;

},{"./../core/dom/document":6}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doSomething() {
    console.log("Put some code in here!");
}
exports.doSomething = doSomething;

},{}],25:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var html_loader_1 = require("../core/utils/html_loader");
var accordion_1 = require("./accordion");
var do_something_1 = require("./do-something");
var html_imports_1 = require("./html-imports");
var slideshow_1 = require("./slideshow");
var tab_menu_1 = require("./tab_menu");
// Put all function calls that need to be made on every page load inside the setupAll function body.
function PutStudentPageLoadOperationsInsideThisStudentBody() {
    // TODO: Put all operations that you want to happen on ever page load in this function.
    // For example you could write: Sticky.setup()
    do_something_1.doSomething();
    tab_menu_1.setupTabMenu();
}
exports.PutStudentPageLoadOperationsInsideThisStudentBody = PutStudentPageLoadOperationsInsideThisStudentBody;
function setupAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 100); })];
                case 1:
                    _a.sent();
                    console.log('reloading');
                    slideshow_1.Slideshow.setupAll();
                    accordion_1.Accordion.setupAll();
                    PutStudentPageLoadOperationsInsideThisStudentBody();
                    console.log('reloaded');
                    return [2 /*return*/];
            }
        });
    });
}
exports.setupAll = setupAll;
html_imports_1.itemsToCache.forEach(function (item) {
    html_loader_1.HTMLLoader.cacheHTML(item.name, item.content);
});
window.HTMLLoader = html_loader_1.HTMLLoader;
console.log('dynamic-dom loaded');
// Do not touch this line, needed to reinitialize code in the dynamic-dom.ts setupAll function
window.addEventListener('newPageLoad', function () { return setupAll(); });

},{"../core/utils/html_loader":18,"./accordion":23,"./do-something":24,"./html-imports":26,"./slideshow":29,"./tab_menu":30}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// An HTMLContent object should look like the following:
// {
//     name: 'footer',
//     content: require('./html/footer.html'),
// }
// Then you can reference that content in your html using the following tag with the corresponding name attribute.
// <ts-load data-name="header"></ts-load>
// You can specify as many as you want inside of the array and they will all be bundled up with your website.
// Make sure to make a corresponding html file in the html file folder for each element you specify.
exports.itemsToCache = [
    // Feel free to change the content inside any of the html files in the html file folder to suit your needs.
    {
        name: 'header',
        content: require('./html/header.html'),
    },
    {
        name: 'footer',
        content: require('./html/footer.html'),
    },
];

},{"./html/footer.html":27,"./html/header.html":28}],27:[function(require,module,exports){
module.exports = "<footer id=\"colophon\" class=\"footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"footer-widgets\">\n      <aside class=\"widget site-contact\">\n        <h2 class=\"footer-widget-title\">Nursery School</h2>\n        <p>6926 Forest Park Parkway</p>\n        <p>St. Louis, MO 63130</p>\n        <p class=\"phone\">314-935-6689 <span>|</span> Fax: 314-935-7249</p>\n        <p>\n          <a href=\"files/mailto:nursery@wustl.edu\">nursery@wustl.edu</a>\n        </p>\n      </aside>\n\n      <div class=\"widget-wrapper\">\n        <aside id=\"text-4\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Hours of Operation</h2>\n          <div class=\"textwidget\">\n            <p>\n              Classes meet Mon. through Fri.<br />\n              Morning: 9-11:45 a.m.<br />\n              Afternoon: 12:30-3:15 p.m.<br />\n              Full day: 9 a.m.-3:15 p.m.\n            </p>\n          </div>\n        </aside>\n        <aside id=\"text-3\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Apply for the Nursery School</h2>\n          <div class=\"textwidget\">\n            <p>\n              Experience the innovative approach and dynamic teaching\n              environment of the Washington University Nursery School.\n            </p>\n            <a href=\"files/apply.html\">Register Now</a>\n          </div>\n        </aside>\n      </div>\n    </div>\n    <div class=\"site-info\">\n      <p class=\"footer-copyright\">©Washington University in St. Louis</p>\n    </div>\n  </div>\n</footer>";

},{}],28:[function(require,module,exports){
module.exports = "<div id=\"wustl-branding\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"321\" height=\"28\" viewBox=\"0 0 321 28\" class=\"washu-logo\"\n    aria-labelledby=\"title\">\n    <title id=\"title\">Washington University in St. Louis</title>\n    <path fill=\"#FFF\"\n      d=\"M10.46 1.76c-.09 0-4.41.04-10.46-1.21V18c0 .27.01.47.01.47v.02c.04.81.28 1.45.77 2 .32.34.76.7 1.38 1.05.17.1.35.18.55.28.15.07.31.14.47.2.14.06.55.24.69.29l6.59 2.5 6.59-2.5c.15-.05.56-.24.69-.29.16-.07.32-.14.47-.2.19-.1.38-.18.55-.28.62-.35 1.06-.7 1.38-1.05.48-.55.73-1.19.77-2v-.02s0-.19.01-.47V.55C14.86 1.8 10.55 1.76 10.46 1.76z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M10.46 2.8c-.09 0-4.03.04-9.56-1.1v15.95c0 .25.01.43.01.44v.02c.04.74.25 1.33.7 1.83.29.31.7.64 1.26.95.15.09.32.17.5.26.14.07.28.13.44.19.12.05.5.22.63.27l6.03 2.29 6.03-2.29c.13-.05.51-.22.63-.27.15-.06.3-.13.44-.19.18-.09.35-.17.5-.26.56-.31.97-.64 1.26-.95.44-.5.66-1.09.7-1.83v-.02s0-.18.01-.44V1.7c-5.55 1.14-9.5 1.1-9.58 1.1z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M10.46 3.75c-.08 0-3.68.04-8.74-1.02v4.08c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V2.73c-5.06 1.05-8.66 1.02-8.74 1.02z\">\n    </path>\n    <path fill=\"#A51417\"\n      d=\"M10.46 7.83c-.08 0-3.68.04-8.74-1.02v9.05c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V6.82c-5.06 1.04-8.66 1.01-8.74 1.01z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M1.72 17.72c.03.69.23 1.23.64 1.68.26.28.64.58 1.15.87.15.08.29.15.46.23.13.06.26.12.4.17.11.05.46.2.58.24L10.46 23l5.51-2.09c.12-.04.46-.2.58-.24.14-.06.27-.12.4-.17.16-.08.32-.15.46-.23.51-.29.88-.58 1.15-.87.41-.46.6-1 .64-1.68v-.02s0-.16.01-.4v-1.44c-5.05 1.05-8.67 1.02-8.74 1.02s-3.68.04-8.74-1.02v1.45c-.02.25-.01.41-.01.41z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M4.8 3.69l.41 1.23 1.29.01-1.04.77.39 1.24-1.05-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm11.31 0l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm-5.65.48l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.06.75.39-1.24-1.04-.77 1.3-.01.41-1.22zM10.46 17.21l-.46.45v1.22l.23.65v1.09h.45v-1.09l.23-.65v-1.22l-.45-.45zm.22 4.41v-.65h-.45v.65l-.23.42.46.56.46-.56-.24-.42zm.33-.65v.5l.29.31.51-.41v-.41h-.8zm.54-2.04l-.54.6v1.09h.44v-.65l.43-.46.55.36.35-.36v-.58h-1.23zm-1.64 2.04v.5l-.29.31-.52-.41v-.41h.81zm-.55-2.04l.54.6v1.09h-.43v-.65l-.43-.46-.55.36-.35-.36v-.58h1.22z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M14.62 9.27v5.19h-3.49l-.25.21-.43.37-.43-.37-.25-.21H6.29V9.27l-.74.54v5.38h4.12l.37.31.43.38.43-.38.37-.31h4.12V9.81l-.77-.54z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M11.02 8.83l-.14.11-.43.38-.43-.38-.12-.11H7.03v4.89h2.88l.2.17.35.31.36-.31.19-.17h2.88V8.83h-2.87zM16.11 10.35v3.31c.95-.14 1.98-.31 3.08-.54V9.81a50.5 50.5 0 0 1-3.08.54zm-11.31 0c-.95-.14-1.98-.31-3.08-.54v3.31c1.1.23 2.14.41 3.08.54v-3.31z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M16.11 16.76l-.31.32v.86l.15.46v.77h.31v-.77l.16-.46v-.86l-.31-.32zm.16 3.09v-.45h-.31v.46l-.15.3.31.4.32-.4-.17-.31zm.23-.45v.35l.2.22.36-.28v-.29h-.56zm.38-1.43l-.38.43v.77h.31v-.46l.3-.33.38.25.24-.25v-.41h-.85zm-1.14 1.43v.35l-.21.22-.35-.28v-.29h.56zm-.39-1.43l.39.43v.77h-.31v-.46l-.3-.33-.39.25-.24-.25v-.41h.85zM4.8 16.76l-.32.32v.86l.16.46v.77h.31v-.77l.15-.46v-.86l-.3-.32zm.16 3.09v-.45h-.31v.46l-.16.3.32.4.31-.4-.16-.31zm.22-.45v.35l.21.22.35-.28v-.29h-.56zm.39-1.43l-.39.43v.77h.31v-.46l.3-.33.39.25.24-.25v-.41h-.85zM4.42 19.4v.35l-.2.22-.36-.28v-.29h.56zm-.38-1.43l.38.43v.77h-.31v-.46l-.3-.33-.38.25-.24-.25v-.41h.85z\">\n    </path>\n    <g fill=\"#FFF\" class=\"washu-logo-text\">\n      <path\n        d=\"M232.47 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zm13.82 12.03v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.06 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 1.99 1.68v7.64c0 1.43-.7 1.55-1.21 1.68-.03 0-.06-.01-.1 0-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.29 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.31 0 1.15-.13 2.53-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06V13.1c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.45-.44-.68-.5-1.97.3-1.95-2.04zM48.91 2.4c.37-.05.55-.19.55-.19 0-.24-.05-.3-.39-.3-.65 0-1.05.11-1.69.11-.71 0-1.25-.08-1.85-.08-.34 0-.31.11-.31.3 0 .21.65.08 1.02.89.21.44.13 1.36-.08 1.9l-5.01 13.74-2.14-6.1-.83-2.23s-.13.06.46-1.79l1.17-3.52c.57-1.73 1.14-2.64 1.88-2.65.92-.02.92-.57.21-.57s-1.13.06-1.75.06c-.65 0-.99-.06-1.69-.06-.26 0-.55.08-.52.3.03.21.42.14.71.3.47.24.78 1.25.45 2.3l-1.38 4.42-1.58-4.13c-.31-.78-.73-2.52.03-2.67.73-.15.63-.52.18-.52-.86 0-1.32.11-2.15.11-.91 0-1.59-.11-2.45-.11-.18 0-.52.03-.42.38.05.21.49.14.76.3 1.05.68 1.25 1.55 1.62 2.52l2.3 6.48c.42 1.16.45.74.11 1.73l-2 5.5-4.95-14.11c-.39-1.06-.6-1.79.26-2.2.37-.19.47-.22.52-.3.05-.07.1-.32-.45-.3-.89.03-1.43.11-2.32.11-.94 0-1.59-.11-2.45-.11-.29 0-.34.14-.34.35 0 .33.71.11 1.31.81.34.38.99 1.66 1.14 2.12L32.8 22.3c.11.25.14.76.48.76.27 0 .33-.57.42-.79l3.13-8.59 3.05 8.16c.13.33.31 1.22.63 1.22.26 0 .36-.43.49-.83l5.9-16.87c.5-1.36 1.07-2.79 2.01-2.96zm65.46 6.71c-3.26 0-5.77 3.28-5.77 7.13 0 1.96.52 3.51 1.42 4.63-.31.21-.92.7-2.15.7-1.07 0-1.68-.64-1.74-2V11.2l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.51-.35-3.51-.36 0-.3.1-.63 1.17-.44 1.44-1.79 2.23-2.63 2.68-.38.09-.81.12-1.29.01-.74-.16-1.6-1.06-3.83-1.06-2.38 0-4.46 1.95-4.46 4.55 0 1.4.62 2.76 1.71 3.48-.2.12-1.53 1.24-1.37 2.56 0 0-.03 1.37 1.05 1.82-.33.14-.67.36-.96.63-.7-.26-1.72-.06-1.72-1.91V15.1c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-.73.99-2.91 1.55-.13.03-.43.1-.44.34 0 .65 1.75-.71 1.76 1.68v7.64c0 1.65-1.31 1.65-1.54 1.67-.1 0-.19 0-.31.01-.55-.05-1.51-.3-1.51-1.34V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.78-.86 2.01-1.43 2.03-.69-.09-1.22-.37-1.22-1.41v-5.14c0-2.65-1.01-6.07-4.33-6.07-1.47 0-2.75.81-3.73 1.92V2.41c0-.31-.15-.48-.31-.49-.4-.03-1.07 1.19-2.96 1.63-.13.03-.62.07-.62.25 0 .65 1.97-.31 1.99 1.69V20.6c0 1.51-1.3 1.31-1.53 1.79-.04.21.08.31.26.31.42 0 1.55-.12 2.35-.12s2.1.12 2.64.12c.31 0 .44-.06.44-.44-.27-.52-2.28.28-2.28-2.37v-6.5c0-1.57 1.87-2.78 3.03-2.78.91 0 3.14.71 3.14 4.53v5.64c0 1.11-1.18 1.23-1.27 1.57 0 .24.15.34.42.34.28 0 1.11-.12 2.12-.12.56 0 1.07.03 1.5.06.23.05.57.05.99.05.28 0 1-.11 1.82-.11s1.48.07 1.99.11c.1.01.2.01.3.01.04 0 .08.01.12.01h.01c.32.01.61 0 .74 0 .31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c0 2-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c.93 0 1.53.07 1.91.1-.29.42-.48.9-.51 1.4-.14 2.51 2.93 3.41 5.51 3.37 5.12-.07 6.57-3.62 5.51-5.51-1.09-1.95-3.44-1.87-5.68-1.86-4.2.02-3.41-2.59-1.69-2.49.4.02.2.14 1.57.14 2.43 0 4.76-1.66 4.7-4.38-.01-.23.05-1.03-.53-2.14 1.14.01.69 0 2.41 0l-.01 7.63c0 3.45 1.64 4.03 2.87 4.03 1.74 0 3.01-1.15 3.24-1.68 1.03 1.1 2.46 1.68 4.12 1.68 3.19 0 5.6-2.93 5.6-6.78 0-5.8-3.65-6.96-5.61-6.96zM95.62 21.72c.21-.01.27.08 2.64.17 2.45.06 3.33.77 3.49 1.4.26 1.12-.53 3.52-4.05 3.29-2.22-.15-2.87-1.2-3.03-1.44-.84-1.16-.16-3.35.95-3.42zm2.01-4.57c-2.08 0-2.78-2-2.78-3.91 0-1.96.59-3.58 2.67-3.58 2.11 0 2.95 2.16 2.95 4.07.01 1.93-.87 3.42-2.84 3.42zm16.99 4.81c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41z\">\n      </path>\n      <path\n        d=\"M131.11 20.19v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.44-.44-.65-.49-1.94.31-1.92-2.03zM77.41 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6.02.35.77 1.57 1.07 1.57zm-17.3 6.96c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.04 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.47 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 .51-.01.98-.01 1.38-.07.36-.2.7-.54.72-1.24.08-.94-1.9-.94-2.95v-6.43c-.06-1.97-1.54-3.25-3.8-3.25-3.09 0-5.31 3.81-4.25 5 .25.28 1.26-.8 1.32-.86s.08-.13.08-.13c-.01-1.3.97-2.95 2.37-3.09 1.6-.15 2.4 1.04 2.4 2.65v2.09c-6.06 1.21-6.93 3.22-6.93 4.87 0 2.21 1.55 3.2 3.23 3.2 1.45 0 2.88-.69 3.96-1.8.34 1.03 1.01 1.65 2.02 1.62.35-.01.41.09 1.46-.37.37-.1.35-.09.77-.01.56.19 1.32.57 2.66.57 2.03.03 3.85-1.85 3.85-4.17 0-1.5-.43-2.41-2.39-3.63zm-8.43 4.32c0 1.65-1.68 2.52-2.6 2.52-1.38 0-2.33-.89-2.33-2.66 0-2.73 3.28-3.23 4.94-3.67-.01-.01-.01 3.81-.01 3.81zm219.99.19c-.31 0-1.07 1.29-1.07 1.63 0 .34.77 1.6 1.07 1.6.33 0 1.07-1.23 1.07-1.6s-.73-1.63-1.07-1.63zm33.71 1.12V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.58.23-1.29.23-.13 0-.79-.12-.76.25.04.37 1.57.15 1.58 1.23v7.83c-.12 1.37-1.27 2.88-2.66 2.88-.32 0-2.39-.22-2.37-3.65V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.61.22-1.32.19-.38-.02-.79-.07-.73.29.06.32 1.59 0 1.59 1.23v7.51c0 2.74 1.61 4.32 3.56 4.32 1.3 0 2.49-.28 3.24-1.8h.05v1.32c0 .13.03.48.22.48.37 0 .56-.3.83-.4.29-.07.37-.33 1.28-.42.39-.04.82-.24.82-.5-.11-.53-1.4.06-1.4-.78zM290.09 9.11c-3.26 0-5.77 3.28-5.77 7.13 0 1.73.42 3.15 1.13 4.23-.79.57-2.23 1.1-4.96 1.1-2.13 0-1.93-.74-1.93-2.55V4.57c0-2.66 1.99-1.89 2.03-2.37.03-.34-.28-.26-.61-.26-.38 0-1.07.15-2.52.15-1.25 0-2.34-.12-2.88-.12-.33 0-.63.1-.52.35.25.57 2.14.05 2.14 1.65v15.1c0 1.44.21 2.36-.45 2.73-.81.49-1.76.51-1.68.83.05.19.45.2.68.2 1.02 0 2.42-.13 3.44-.15 1.94-.06 3.86.13 5.79.13 1.12 0 1.4-.22 2.22-1.33.01-.02.02-.03.04-.05 1.01.94 2.34 1.44 3.87 1.44 3.19 0 5.6-2.93 5.6-6.78.01-5.82-3.65-6.98-5.62-6.98zm.26 12.85c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41zm-32.03-10.49c-.75-.37-1.85-1.04-2.39-1.36-2.37-1.37-3.3-2.26-3.37-3.52-.12-2.21 2.04-3.52 3.58-3.35 1.96 0 3.57 1.19 4.24 3.73.07.27.31.89.56.89.22 0 .26-.2.24-.45l-.33-4.02c-.02-.33-.14-.42-.27-.42-.22 0-.36.33-.56.33-.31 0-1.1-1.11-3.8-1.09-.18-.01-.43.02-.43.02-2.63-.05-5.1 1.7-5.02 5.4.07 3.37 3.85 5.3 5.89 6.59 1.51.9 3.09 2.34 3.04 3.95-.08 2.47-1.63 4.08-3.58 3.94-4.59-.08-3.96-6.13-4.78-6.13-.56 0-.45 1.52-.46 2.32 0 1.92-.08 3.49.14 3.77.07.09.29.05.74.05.9 0 2 1.05 4.65 1.05 2.95.05 5.38-2.69 5.38-6.25-.01-2.19-.62-3.58-3.47-5.45zm51.69-3.31c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM312.64 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zm5.98-6.88c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.11-.74-2.55-.74-.11 0-.52-.01-.6-.01-.13 0-.28.01-.28.01-1.81-.03-3.5 1.11-3.44 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52-.01 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17-.01-1.48-.43-2.39-2.39-3.6zm-48.73 5.66c-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2v-8.82l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.23.75.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.34 3.28-1.8.03-.25 0-.28-.15-.26zm-81.32-1.09c-.57 0-1.42 1.62-3.66 1.62-1.58 0-4.17-1.53-4.17-6.66h6.9c.6 0 .88.03.88-.52 0-1.25-1.4-4.95-4.59-4.95-3.24 0-5.08 3.33-5.08 7.31 0 2.05 1.35 6.38 5.24 6.38 2.33 0 4.59-2.24 4.59-2.95-.01-.11-.01-.23-.11-.23zm-5.08-9.81c1.42 0 2.88 1.56 2.88 3.3 0 .46-.15.62-.52.62h-5.11c0-1.71 1.13-3.92 2.75-3.92zm-31.7-7.33c.1-.16-.25-.24-.37-.24-.42 0-1.37.11-1.8.11-.89 0-1.64-.09-2.53-.09-.07 0-.46.05-.46.18-.01.63 2.13-.11 2.13 2.6v10.57c0 3.13-.99 6.41-5.29 6.41-3.09 0-4.76-1.94-4.76-6.17V4.41c0-1.91 1.49-1.49 1.52-1.92.03-.41-1.33-.16-1.43-.16-.71 0-1.21.08-1.95.08-.62 0-1.37-.1-1.97-.1-.12 0-.53-.02-.61.15-.23.56 1.91.26 1.91 1.83v10.92c0 4.08 1.14 8.08 7.17 7.97 7.14-.12 7.01-6.54 7.01-7.83V5.12c.01-2.43 1.2-2.2 1.43-2.57zm28.19 7.24c.17-.2.22-.53-.57-.46-.45 0-.77.08-1.22.08-.57 0-.68-.02-1.22-.04-.68-.02-.86.05-.82.25.12.6 1.55.01 1.36 1.8-.16 1.5-.65 2.79-1.14 4.07l-1.73 4.62-2.54-7.7c-.31-.96-.45-1.47-.45-1.57 0-.96 1.16-.75 1.42-1.14.16-.26-.17-.4-.54-.4-.31 0-.67.11-1.63.13-.79.02-1.36.02-1.7-.05-.89-.16-.82.33-.51.48s.46.01.91 1.36l3.91 11.06c.08.22.18.77.52.77.39 0 .39-.39.88-1.69 0 0 3.75-10.48 4-10.86.51-.74.89-.5 1.07-.71zm14.47-.5c-1.07 0-1.8 1.28-2.33 2.16h-.05V9.53c0-.3-.15-.48-.3-.48-.41 0-.72.81-2.87 1.33-.13.03-.48.1-.48.28 0 .64 1.82-.19 1.82 1.93v8.07c0 1.25-1.29 1.12-1.29 1.77 0 .18.08.27.28.27.17 0 .63-.12 2.32-.12 1.41 0 2.02.12 2.37.12.28 0 .41-.06.41-.34 0-.98-2.25.48-2.25-2.34v-6.88c0-.4.6-1.8 1.64-1.8.91 0 1.02.7 1.5.7.3 0 .91-.91.91-1.38-.01-.58-1.16-1.37-1.68-1.37zm32.55.1c-.27 0-.96.04-1.59.04-.76 0-1.13-.09-1.45-.09-.48 0-.96 0-.87.32.1.36 1.73.23 1.73 2.01 0 .23 0 .52-.33 1.71l-2.08 6.63-2.9-8.15s-.14-.26-.14-.79c0-1.32 1.54-1.17 1.6-1.41.05-.19-.21-.4-.62-.4h-3.63c-.02 0-.03.01-.05.01h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.22.76.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.33 3.28-1.8 0-.27-.04-.29-.18-.27-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2V10.7s2.5-.01 3.21-.01c.04.06.08.13.1.19l2.99 8.45c.24.69.39.92.68 2.14.19.79.12 1.51.12 1.51-.29 1.27-1.07 1.99-2.26 4.34-.12.22 1.71-.02 1.81-.05.15-.05.13-.09.31-.42l1.32-3.93 3.69-11.34c.54-1.98 1.39-1.62 1.53-1.89.12-.13 0-.3-.33-.3z\">\n      </path>\n      <path\n        d=\"M222.22 22.76l-.07.19V23l.07-.24zm-14.74-14.6c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM210.11 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zM166.52 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.77 1.57 1.07 1.57zM169.17 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04h-.17c-.54-.1-1.06-.32-1.05-1.79v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.04 0 .09-.01.13-.01.11 0 .21.01.34.01.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.34.02.75-.78.08-.67zm32.72-6.89c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.62-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17 0-1.47-.42-2.38-2.38-3.6z\">\n      </path>\n    </g>\n  </svg>\n</div>\n<header role=\"banner\">\n  <div class=\"container\">\n    <a class=\"site-title\" href=\"files/index.html\">Nursery School</a>\n  </div>\n  <div id=\"main-menu-container\">\n    <div class=\"container\">\n      <div class=\"navbar\">\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"about\" href=\"files/about.html\">About\n            </a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"parent-handbook\" href=\"files/parent_handbook.html\">General</a>\n            <a id=\"tuition\" href=\"files/tuition.html\">Tuition</a>\n            <a id=\"staff\" href=\"files/staff.html\">Staff</a>\n            <a id=\"visit\" href=\"files/visit.html\">Visit</a>\n          </div>\n        </div>\n        <a id=\"calendar\" href=\"files/calendar.html\">Calendar</a>\n        <a id=\"curriculum-overview\" href=\"files/curriculum_overview.html\">Classes</a>\n        <a id=\"apply\" href=\"files/apply.html\">Enroll</a>\n        <!-- <a id=\"current-students\" href=\"files/current_students.html\">Current Students</a> -->\n        <a id=\"summer-camp\" href=\"files/summer_camp.html\">Summer Camp</a>\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"get-involved\" href=\"files/get_involved.html\">Get Involved</a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"nursery-school-merchandise\" href=\"files/nursery_school_merchandise.html\">Nursery School\n              Merchandise</a>\n            <a id=\"parent-association\" href=\"files/parent_association.html\">Parent Association</a>\n          </div>\n        </div> \n        <!-- <a id=\"forms\" href=\"files/forms.html\">Forms</a> -->\n        <a id=\"parent-resources\" href=\"files/parent_resources.html\">Recommended Readings</a>\n      </div>\n    </div>\n  </div>\n</header>";

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("./../core/dom/document");
var Slideshow = /** @class */ (function () {
    function Slideshow(outer) {
        var _this = this;
        this.outer = outer;
        this.slideIndex = 0;
        this.slideCount = 0;
        this.slides = [];
        this.dots = [];
        document_1.D.eachRecur(this.outer, function (elem) {
            var cList = elem.classList;
            if (cList.contains("prev-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.minusSlide(1); });
            }
            else if (cList.contains("next-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.plusSlide(1); });
            }
            else if (cList.contains("slideshow-entry")) {
                _this.slides.push(elem);
            }
            else if (cList.contains("slideshow-dot")) {
                _this.dots.push(elem);
            }
        });
        var _loop_1 = function (i) {
            document_1.D.addEventListener(this_1.dots[i], "click", function () { return _this.showSlide(i); });
        };
        var this_1 = this;
        for (var i = 0; i < this.dots.length; ++i) {
            _loop_1(i);
        }
        this.slideCount = this.slides.length;
        this.showSlide(this.slideIndex);
    }
    Slideshow.setupAll = function () {
        Slideshow.discardAll();
        var slideshows = document_1.D.claz("slideshow");
        for (var ssIndex = 0; ssIndex < slideshows.length; ++ssIndex) {
            var elem = slideshows.item(ssIndex);
            if (elem == null) {
                continue;
            }
            Slideshow.slideshows.push(new Slideshow(elem));
        }
    };
    Slideshow.discardAll = function () {
        Slideshow.slideshows = [];
    };
    Slideshow.prototype.plusSlide = function (n) {
        this.showSlide((this.slideIndex += n));
    };
    Slideshow.prototype.minusSlide = function (n) {
        this.showSlide((this.slideIndex -= n));
    };
    Slideshow.prototype.showSlide = function (index) {
        this.slideIndex = index % this.slideCount;
        this.slideIndex = Math.max(this.slideIndex, -1 * this.slideIndex);
        for (var i = 0; i < this.slides.length; ++i) {
            this.slides[i].style.display = "none";
        }
        for (var i = 0; i < this.dots.length; i++) {
            this.dots[i].classList.remove("active");
        }
        this.slides[this.slideIndex].style.display = "block";
        this.dots[this.slideIndex].classList.add("active");
    };
    Slideshow.slideshows = [];
    return Slideshow;
}());
exports.Slideshow = Slideshow;

},{"./../core/dom/document":6}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setupTabMenu() {
    var tabs = document.querySelectorAll('.tm-tab');
    var headers = document.querySelectorAll(".tab-menu .navbar a");
    function clickTab(index) {
        tabs.forEach(function (value, i) {
            value.classList.remove("selected-content");
            headers[i].classList.remove("selected");
        });
        tabs[index].classList.add("selected-content");
        headers[index].classList.add("selected");
    }
    document.querySelectorAll('.tab-menu .navbar a').forEach(function (val, i) {
        val.addEventListener("click", function () {
            clickTab(i);
        });
    });
}
exports.setupTabMenu = setupTabMenu;

},{}],31:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var q_params_1 = require("../core/utils/q_params");
var data_1 = require("./../core/data-log/data");
var document_1 = require("./../core/dom/document");
var elements_1 = require("./../core/dom/elements");
var scroll_1 = require("./../core/dom/scroll");
var history_1 = require("./../core/router/history");
var router_1 = require("./../core/router/router");
var tracker_1 = require("./../core/tracker/tracker");
var html_loader_1 = require("./../core/utils/html_loader");
var id_generator_1 = require("./../core/utils/id_generator");
var ready_1 = require("./../core/utils/ready");
var scenarios_1 = require("./../core/utils/scenarios");
var setup = function () { return __awaiter(void 0, void 0, void 0, function () {
    var scenario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ready_1.waitUntilReady()];
            case 1:
                _a.sent();
                scenario = scenarios_1.scenarios.find(function (scen) { return scen.tag === q_params_1.params.tag; });
                if (!q_params_1.params.sandbox) {
                    if (scenario === null || scenario === undefined) {
                        alert('This HIT is broken and cannot be completed at this time.');
                    }
                    else {
                        tracker_1.Tracker.loadScenario(scenario);
                    }
                }
                tracker_1.Tracker.start({
                    keyPrefix: 'information-foraging',
                    bucketName: 'cse-256-log',
                    allowSubmission: {
                        allow: function () {
                            try {
                                var textArea = document_1.D.id('text-area');
                                console.log(textArea.value);
                                if (textArea.value === '') {
                                    return 'You must fill out the text box to turn this HIT in.';
                                }
                                else {
                                    return null;
                                }
                            }
                            catch (error) {
                                console.log(error);
                                return 'There was an error fill out the form and try again.';
                            }
                        },
                        preSubmit: function () {
                            data_1.data.data.response = document_1.D.id('text-area').value;
                            return;
                        },
                    },
                    debugLevel: 1 /* NONE */,
                    setup: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var sElem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        // configure router
                                        router_1.Router.defaultAllowancesOn();
                                        router_1.Router.configure([
                                            {
                                                mode: 2 /* STANDARD_ALLOWANCES */,
                                                module: "A" /* A */,
                                            },
                                            { mode: 0 /* OFF */, module: "FORM" /* FORM */ },
                                            {
                                                mode: 2 /* STANDARD_ALLOWANCES */,
                                                module: "IMG" /* IMG */,
                                            },
                                        ], 'files/');
                                        history_1.History.setup(window.location.href, { wrapper: true });
                                        // configure html loader post operation
                                        html_loader_1.HTMLLoader.finish();
                                        html_loader_1.HTMLLoader.registerPostLoadFunc(function () {
                                            id_generator_1.IDGenerator.reset();
                                            id_generator_1.IDGenerator.attachIdsToAllElements();
                                            router_1.Router.setup(elements_1.Elements.htmlLoc);
                                            scroll_1.Scroll.promise(0);
                                        });
                                        // configure listeners on html loc
                                        document_1.D.addEventListener(elements_1.Elements.htmlLoc, "click" /* CLICK */, function (e) {
                                            var ev = e;
                                            var obj = {
                                                x: ev.clientX,
                                                y: ev.clientY,
                                                id: ev.target.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("click" /* CLICK */)(obj);
                                        });
                                        document_1.D.addEventListener(elements_1.Elements.document, 'keypress', function (e) {
                                            var ev = e;
                                            var obj = {
                                                key: ev.key,
                                                id: ev.srcElement.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("button" /* BUTTON */)(obj);
                                        });
                                        sElem = document.scrollingElement;
                                        document.addEventListener('scroll', function (e) {
                                            var dx = sElem.scrollLeft;
                                            var dy = sElem.scrollTop;
                                            var dtime = new Date().getTime();
                                            if (Math.abs(tracker_1.Tracker.lastPos.x - dx) > 10 ||
                                                (Math.abs(tracker_1.Tracker.lastPos.y - dy) > 10 &&
                                                    dtime - tracker_1.Tracker.lastPos.time > 100)) {
                                                tracker_1.Tracker.lastPos.x = dx;
                                                tracker_1.Tracker.lastPos.y = dy;
                                                tracker_1.Tracker.lastPos.time = dtime;
                                                var obj = { x: dx, y: dy };
                                                tracker_1.Tracker.getEventDispatchFunc("scroll" /* SCROLL */)(obj);
                                            }
                                        });
                                        // configure tracked events
                                        tracker_1.Tracker.registerEvent("history" /* HISTORY */);
                                        tracker_1.Tracker.registerEvent("button" /* BUTTON */);
                                        tracker_1.Tracker.registerEvent("click" /* CLICK */);
                                        tracker_1.Tracker.registerEvent("scroll" /* SCROLL */);
                                        // load first page
                                        return [4 /*yield*/, router_1.Router.load('files/index.html')];
                                    case 1:
                                        // load first page
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
setup();

},{"../core/utils/q_params":20,"./../core/data-log/data":2,"./../core/dom/document":6,"./../core/dom/elements":7,"./../core/dom/scroll":10,"./../core/router/history":13,"./../core/router/router":14,"./../core/tracker/tracker":15,"./../core/utils/html_loader":18,"./../core/utils/id_generator":19,"./../core/utils/ready":21,"./../core/utils/scenarios":22}]},{},[25,31])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24iLCJzY3JpcHRzL3RzL2NvcmUvZGF0YS1sb2cvZGF0YS50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9ldmVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9yZWNlaXZlci50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vYmFubmVyLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9kb2N1bWVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vZWxlbWVudHMudHMiLCJzY3JpcHRzL3RzL2NvcmUvZG9tL2h0bWxfbG9jLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9tb2RhbC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vc2Nyb2xsLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9zdWJtaXRfZm9ybS50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vdHJhY2tlcl9lbGVtcy50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvaGlzdG9yeS50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvcm91dGVyLnRzIiwic2NyaXB0cy90cy9jb3JlL3RyYWNrZXIvdHJhY2tlci50cyIsInNjcmlwdHMvdHMvY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvZnVuY3MudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3FfcGFyYW1zLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3JlYWR5LnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3NjZW5hcmlvcy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vYWNjb3JkaW9uLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9kby1zb21ldGhpbmcuanMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2R5bmFtaWMtZG9tLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9odG1sLWltcG9ydHMudHMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvZm9vdGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvaGVhZGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL3NsaWRlc2hvdy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vdGFiX21lbnUuanMiLCJzY3JpcHRzL3RzL3RyYWNrZXIvdHJhY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkVBLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFTNUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFFaEQsUUFBQSxPQUFPLEdBQWlCO0lBQ2pDLEdBQUcsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFO0lBQ3pCLFlBQVksRUFBRSxTQUFTLENBQUMsR0FB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TyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dEQUN2QixpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dEQUN2QixpQkFBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dEQUM3QixJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dEQUM3QixpQkFBTyxDQUFDLG9CQUFvQix1QkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzs2Q0FDeEQ7d0NBQ0wsQ0FBQyxDQUFDLENBQUM7d0NBQ0gsMkJBQTJCO3dDQUMzQixpQkFBTyxDQUFDLGFBQWEseUJBQW9CLENBQUM7d0NBQzFDLGlCQUFPLENBQUMsYUFBYSx1QkFBbUIsQ0FBQzt3Q0FDekMsaUJBQU8sQ0FBQyxhQUFhLHFCQUFrQixDQUFDO3dDQUN4QyxpQkFBTyxDQUFDLGFBQWEsdUJBQW1CLENBQUM7d0NBQ3pDLGtCQUFrQjt3Q0FDbEIscUJBQU0sZUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFBOzt3Q0FEckMsa0JBQWtCO3dDQUNsQixTQUFxQyxDQUFDOzs7OztxQkFDekM7aUJBQ0osQ0FBQyxDQUFDOzs7O0tBQ04sQ0FBQztBQUVGLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibW9kdWxlLmV4cG9ydHM9W1xuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBhIHBhcmVudCBjb25zaWRlcmluZyBzZW5kaW5nIHlvdXIgY2hpbGQgdG8gV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBZb3XigJl2ZSBsZWFybmVkIHRoYXQgdGhlIGN1cnJpY3VsdW0gaXMgcGxheS1iYXNlZCBhbmQgeW91IHdhbnQgdG8ga25vdyBob3cgbGVhcm5pbmcgaXMgaW5jb3Jwb3JhdGVkIGludG8gYSBwbGF5LWJhc2VkIGNvbnRleHQuIFlvdSBoYXZlIHNvbWUgaWRlYXMgYWJvdXQgaG93IGxhbmd1YWdlIGxlYXJuaW5nIG1pZ2h0IGhhcHBlbiwgYnV0IGFyZSBsZXNzIHN1cmUgYWJvdXQgbWF0aC5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkZpbmQgc29tZSBleGFtcGxlcyBvZiBob3cgbWF0aCBsZWFybmluZyBpcyBpbmNvcnBvcmF0ZWQgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLlwiLFxuICAgICAgICBcInRhZ1wiOiBcIm1hdGhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGludmVzdGlnYXRpbmcgcHJlLXNjaG9vbCBvcHRpb25zIGZvciB5b3VyIDQgeWVhciBvbGQuIEJvdGggeW91IGFuZCB5b3VyIHNwb3VzZSB3b3JrLCBzbyB5b3UgbmVlZCB0byBmdWxseSB1bmRlcnN0YW5kIHdoYXQgc2NoZWR1bGluZyBjb25zdHJhaW50cyBlYWNoIG9wdGlvbiBpbnZvbHZlcy4gT25lIG9mIHlvdXIgc2Nob29scyBvZiBpbnRlcmVzdCBpcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hlbiBkb2VzIHNjaG9vbCBzdGFydCBhbmQgZW5kIGVhY2ggZGF5PyBXaGF0IGlzIHRoZSBsb25nZXN0IHBlcmlvZCBvZiB0aW1lIHRoYXQgeW91ciBjaGlsZCBjYW4gYmUgdGhlcmU/XCIsXG4gICAgICAgIFwidGFnXCI6IFwic2Nob29sX2RheVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgaW52ZXN0aWdhdGluZyBwcmUtc2Nob29sIG9wdGlvbnMgZm9yIHlvdXIgMy41IHllYXIgb2xkLiBZb3XigJl2ZSBiZWVuIHRvbGQgdGhhdCBvbmUgb2YgdGhlIGhhbGxtYXJrcyBvZiBhIGdvb2QgcHJvZ3JhbSBpcyB0ZWFjaGVycyB3aG8gaGF2ZSBiZWVuIHRoZXJlIGZvciBhIGxvbmcgdGltZS4gWW91IHdhbnQgeW91ciBjaGlsZCB0byBhdHRlbmQgaW4gdGhlIG1vcm5pbmdzIG9ubHkuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGljaCB0ZWFjaGVycyB3b3VsZCB5b3VyIGNoaWxkIGhhdmUgYW5kIGhvdyBsb25nIGhhdmUgdGhleSBiZWVuIGF0IHRoZSBzY2hvb2w/XCIsXG4gICAgICAgIFwidGFnXCI6IFwidGVhY2hlcl90ZW51cmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIHN0YXJ0aW5nIHRvIGxvb2sgYXQgc3VtbWVyIGNhbXAgb3B0aW9ucyBhbmQgaGF2ZSBoZWFyZCBnb29kIHRoaW5ncyBhYm91dCBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wgZm9yIHlvdW5nIGNoaWxkcmVuLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCBhcmUgdGhlIGRhaWx5IGNhbXAgaG91cnM/IEFyZSB0aGVyZSBhbnkgZXh0ZW5kZWQgZGF5IG9wcG9ydHVuaXRpZXM/XCIsXG4gICAgICAgIFwidGFnXCI6IFwic3VtbWVyX2NhbXBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGludmVzdGlnYXRpbmcgcHJlLXNjaG9vbCBvcHRpb25zIGZvciB5b3VyIHNwaXJpdGVkIDMgeWVhciBvbGQgYW5kIHdhbnQgdG8gdW5kZXJzdGFuZCB0aGVpciBhcHByb2FjaCB0byBkaXNjaXBsaW5lLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvIHRlYWNoZXJzIGF0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBhcHByb2FjaCBkaXNjaXBsaW5lP1wiLFxuICAgICAgICBcInRhZ1wiOiBcImRpc2NpcGxpbmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3VyIGRhdWdodGVyIGlzIGluIHRoZSBUZWRkeSBCZWFyIGNsYXNzIGF0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gU2hlIGNhbWUgaG9tZSB0aGlzIHdlZWsgc2luZ2luZyBhIHNvbmcgaW4gU3BhbmlzaCBhYm91dCBzaGFwZXMsIGJ1dCB5b3UgYXJlIHByZXR0eSBzdXJlIHRoYXQgc2hlIGhhcyBzb21lIG9mIHRoZSB3b3JkcyB3cm9uZy5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgYXJlIHRoZSBjb3JyZWN0IGx5cmljcz9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJzcGFuaXNoX3NvbmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJJdCBpcyBtaWQtRGVjZW1iZXIgYW5kIHlvdSBhcmUgdGhpbmtpbmcgYWJvdXQgdGhpbmdzIHRvIGRvIG92ZXIgeW91ciBkYXVnaHRlcidzIHVwY29taW5nIHNjaG9vbCBicmVhay4gU2hlIGlzIDMgeWVhcnMgb2xkIGFuZCBhdHRlbmRzIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wgYW5kIGlzIGluIHRoZSBUZWRkeSBCZWFyIGNsYXNzcm9vbS4gWW91IGFyZSBwbGFubmluZyBhIHRyaXAgdG8gdGhlIGxpYnJhcnkgYW5kIHdhbnQgdG8gY2hlY2sgb3V0IHNvbWUgYm9va3MgdGhhdCBjb25uZWN0IHdpdGggc29tZXRoaW5nIHNoZSBpcyBkb2luZyBpbiBzY2hvb2wuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IGFyZSBzb21lIHBvdGVudGlhbCBib29rIHRvcGljcyB0aGF0IHJlbGF0ZSB0byBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyBvbiBpbiBoZXIgY2xhc3Nyb29tIHRoaXMgd2Vlaz9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJib29rc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgYSBwYXJlbnQgd2l0aCBhIGNoaWxkIHdobyBoYXMganVzdCBiZWVuIGFjY2VwdGVkIHRvIGF0dGVuZCBhcyBhIGZ1bGwgdGltZSBzdHVkZW50IGF0IHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFlvdSB3YW50IHRvIGFjY2VwdCB0aGUgb2ZmZXIgb2YgYWRtaXNzaW9uLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiRmlndXJlIG91dCB3aGF0IHlvdSBuZWVkIHRvIGRvIGF0IHRoaXMgdGltZSB0byBmaW5hbGl6ZSB5b3VyIGNoaWxk4oCZcyBwbGFjZSBhdCB0aGUgc2Nob29sLlwiLFxuICAgICAgICBcInRhZ1wiOiBcImFkbWlzc2lvbl8yXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBhIHBhcmVudCB3aXRoIGEgY2hpbGQgd2hvIGhhcyBqdXN0IGJlZW4gYWNjZXB0ZWQgdG8gYXR0ZW5kIGFzIGEgZnVsbCB0aW1lIHN0dWRlbnQgYXQgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gWW91IG5lZWQgdG8gcGF5IG9uZSBtb250aCBvZiB0dWl0aW9uIGFzIGEgZGVwb3NpdC5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkZpbmQgb3V0IGhvdyBtdWNoIG9uZSBtb250aCBvZiB0dWl0aW9uIGlzIGFuZCB3aGV0aGVyIG9yIG5vdCBpdCBpcyBwb3NzaWJsZSB0byBwYXkgb25saW5lLlwiLFxuICAgICAgICBcInRhZ1wiOiBcImRlcG9zaXRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIG1vdmluZyB0byBTdC4gTG91aXMgZnJvbSBCZWlqaW5nIGFuZCBsb29raW5nIGZvciBhIFByZS1LIHByb2dyYW0gZm9yIHlvdXIgZGF1Z2h0ZXIsIGFnZSA1LiBTaGUgaXMgdmVyeSBjbG9zZSB0byBoZXIgZnJpZW5kcyBhbmQgeW91IGFyZSB3b3JyaWVkIHRoYXQgdGhlIG1vdmUgbWlnaHQgYmUgaGFyZCBvbiBoZXIuIFNoZSBtYXkgbmVlZCBzb21lIGV4dHJhIHN1cHBvcnQgZnJvbSBoZXIgbmV3IHRlYWNoZXJzIGxlYXJuaW5nIEVuZ2xpc2gsIGFkYXB0aW5nIHRvIEFtZXJpY2FuIGN1bHR1cmUsIGFuZCBtYWtpbmcgbmV3IGZyaWVuZHMuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG9lcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIHN0YWZmIGFwcHJvYWNoIHByb3ZpZGluZyBleHRyYSBoZWxwIHRvIHN0dWRlbnRzIHdobyBuZWVkIGl0P1wiLFxuICAgICAgICBcInRhZ1wiOiBcImhlbHBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGxvb2tpbmcgYXQgTnVyc2VyeSBTY2hvb2xzIGZvciB5b3VyIHNvb24gdG8gYmUgMyB5ZWFyIG9sZC4gSGUgaGFzIG5ldmVyIGJlZW4gaW4gc2Nob29sIG9yIGRheWNhcmUgYmVmb3JlIGFuZCB5b3UgYXJlIHNvbWV3aGF0IHdvcnJpZWQgYWJvdXQgdGhlIHRyYW5zaXRpb24uIFlvdSdkIGxpa2UgdG8gZW5zdXJlIHRoYXQgeW91J2xsIGJlIGFibGUgdG8gaGF2ZSBzdHJvbmcgY29tbXVuaWNhdGlvbmF0IGhpcyBuZXcgc2Nob29sLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBoYW5kbGUgY29tbXVuaWNhdGluZyB3aXRoIHBhcmVudHM/XCIsXG4gICAgICAgIFwidGFnXCI6IFwiY29tbXVuaWNhdGlvblwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIkl04oCZcyBtaWQtRGVjZW1iZXIgYW5kIHlvdXIgc29uLCBhZ2UgNCwgY2FtZSBob21lIGFsbCBleGNpdGVkIGFib3V0IHNjaWVuY2UgY2xhc3MuIFRoZXkgbGVhcm5lZCBhIG5ldyB3b3JkLCBidXQgaGUgY2Fu4oCZdCBhY3R1YWxseSByZW1lbWJlciB0aGUgd29yZCB0aGV5IGxlYXJuZWQgYWJvdXQuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IHdhcyB0aGUgdG9waWMgb2YgaGlzIHJlY2VudCBzY2llbmNlIGNsYXNzP1wiLFxuICAgICAgICBcInRhZ1wiOiBcInNjaWVuY2VcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIHNlbGVjdGluZyBhIHByZS1zY2hvb2wsIGJ1dCB3YW50IHRvIGJlIHN1cmUgdGhhdCB5b3VyIGRhdWdodGVyIHdpbGwgYmUgcmVhZHkgZm9yIGtpbmRlcmdhcnRlbiB3aGVuIGl04oCZcyB0aW1lLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIG51cnNlcnkgc2Nob29sIGFzc2VzcyBjaGlsZHJlbuKAmXMga25vd2xlZGdlLCBzdXBwb3J0IHRoZWlyIGdyb3d0aCwgYW5kIHNoYXJlIHRoZSByZXN1bHRzIHdpdGggcGFyZW50cz9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJwYXJlbnRfdGVhY2hlcl9jb25mZXJlbmNlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGhhdmUgcmVjZW50bHkgYWNjZXB0ZWQgYSBwb3NpdGlvbiBmb3IgeW91ciBjaGlsZCBmb3IgdGhlIGNvbWluZyBzY2hvb2wgeWVhciBhdCB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBVcCB0byB0aGlzIHBvaW50LCB5b3VyIGNoaWxkIGhhcyBiZWVuIGF0IGhvbWUgYW5kIHlvdSBhcmUgc29tZXdoYXQgd29ycmllZCBhYm91dCB0aGUgdHJhbnNpdGlvbi5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkb2VzIHRoZSBudXJzZXJ5IHNjaG9vbCBzdXBwb3J0IGtpZHPigJkgdHJhbnNpdGlvbnMgaW50byBzY2hvb2w/XCIsXG4gICAgICAgIFwidGFnXCI6IFwib3JpZW50YXRpb25cIlxuICAgIH1cbl1cbiIsImltcG9ydCB7IFRyYWNrZXJFdmVudCB9IGZyb20gJy4vZXZlbnQnO1xuY29uc29sZS5sb2coJ2RhdGEgbG9hZGVkLicpO1xuZXhwb3J0IGludGVyZmFjZSBNdHVya1VSTERhdGEge1xuICAgIHJhdzogc3RyaW5nO1xuICAgIGFzc2lnbm1lbnRJRDogc3RyaW5nIHwgbnVsbDtcbiAgICBoaXRJRDogc3RyaW5nIHwgbnVsbDtcbiAgICB3b3JrZXJJRDogc3RyaW5nIHwgbnVsbDtcbiAgICBzdWJtaXRUbzogc3RyaW5nIHwgbnVsbDtcbn1cblxuY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zO1xuXG5leHBvcnQgY29uc3QgdXJsRGF0YTogTXR1cmtVUkxEYXRhID0ge1xuICAgIHJhdzogdXJsUGFyYW1zLnRvU3RyaW5nKCksXG4gICAgYXNzaWdubWVudElEOiB1cmxQYXJhbXMuZ2V0KCdhc3NpZ25tZW50SWQnKSxcbiAgICBoaXRJRDogdXJsUGFyYW1zLmdldCgnaGl0SWQnKSxcbiAgICB3b3JrZXJJRDogdXJsUGFyYW1zLmdldCgnd29ya2VySWQnKSxcbiAgICBzdWJtaXRUbzogdXJsUGFyYW1zLmdldCgndHVya1N1Ym1pdFRvJyksXG59O1xuXG5leHBvcnQgY2xhc3MgRGF0YSB7XG4gICAgcHVibGljIGxvZ3M6IHsgW2V2ZW50VHlwZTogc3RyaW5nXTogVHJhY2tlckV2ZW50W10gfSA9IHt9O1xuICAgIHB1YmxpYyBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgcHVibGljIGVycm9yczogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgdXJsRGF0YTogTXR1cmtVUkxEYXRhO1xuXG4gICAgY29uc3RydWN0b3IocmF3TXR1cmtVUkxEYXRhOiBNdHVya1VSTERhdGEpIHtcbiAgICAgICAgdGhpcy51cmxEYXRhID0gcmF3TXR1cmtVUkxEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRhdGEgPSBuZXcgRGF0YSh1cmxEYXRhKTtcblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHsgZGF0YSB9KTtcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBub3cgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3NcIjtcbmxvZyhcImV2ZW50IGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNvbnN0IGVudW0gQWN0aW9uRW51bSB7XG4gIENMSUNLID0gXCJjbGlja1wiLFxuICBCVVRUT04gPSBcImJ1dHRvblwiLFxuICBTQ1JPTEwgPSBcInNjcm9sbFwiLFxuICBISVNUT1JZID0gXCJoaXN0b3J5XCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tlckV2ZW50IHtcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIHRpbWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFRvVHJhY2tlckV2ZW50KG9iajogYW55LCBhY3Rpb246IHN0cmluZykge1xuICBvYmouYWN0aW9uID0gYWN0aW9uO1xuICBvYmoudGltZSA9IG5vdygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmFja2VyRXZlbnQob2JqOiBhbnkpOiBvYmogaXMgVHJhY2tlckV2ZW50IHtcbiAgcmV0dXJuIG9iai5hY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBvYmoudGltZSAhPT0gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY2xhc3MgQmFzZVRyYWNrZXJFdmVudDxUPiBpbXBsZW1lbnRzIFRyYWNrZXJFdmVudCB7XG4gIHB1YmxpYyBjdXN0RXY6IEN1c3RvbUV2ZW50O1xuICBwdWJsaWMgYWN0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyB0aW1lOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKGFjdGlvbjogc3RyaW5nLCBldmVudEluaXREaWN0PzogQ3VzdG9tRXZlbnRJbml0PFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5jdXN0RXYgPSBuZXcgQ3VzdG9tRXZlbnQoYWN0aW9uLCBldmVudEluaXREaWN0KTtcbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICB0aGlzLnRpbWUgPSBub3coKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGV0YWlsKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RFdi5kZXRhaWw7XG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtY2xhc3Nlcy1wZXItZmlsZVxuZXhwb3J0IGNsYXNzIENsaWNrRXZlbnQgZXh0ZW5kcyBCYXNlVHJhY2tlckV2ZW50PHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGlkOiBzdHJpbmc7XG59PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBldmVudEluaXREaWN0PzpcbiAgICAgIHwgQ3VzdG9tRXZlbnRJbml0PHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGlkOiBzdHJpbmcgfT5cbiAgICAgIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHN1cGVyKEFjdGlvbkVudW0uQ0xJQ0ssIGV2ZW50SW5pdERpY3QpO1xuICAgIHRoaXMuZGV0YWlsLnggPSB4O1xuICAgIHRoaXMuZGV0YWlsLnkgPSB5O1xuICAgIHRoaXMuZGV0YWlsLmlkID0gaWQ7XG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtY2xhc3Nlcy1wZXItZmlsZVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkV2ZW50IGV4dGVuZHMgQmFzZVRyYWNrZXJFdmVudDx7IGtleTogc3RyaW5nOyBpZDogc3RyaW5nIH0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBldmVudEluaXREaWN0PzogQ3VzdG9tRXZlbnRJbml0PHsga2V5OiBzdHJpbmc7IGlkOiBzdHJpbmcgfT4gfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgc3VwZXIoQWN0aW9uRW51bS5DTElDSywgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5kZXRhaWwua2V5ID0ga2V5O1xuICAgIHRoaXMuZGV0YWlsLmlkID0gaWQ7XG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtY2xhc3Nlcy1wZXItZmlsZVxuZXhwb3J0IGNsYXNzIEhpc3RvcnlFdmVudCBleHRlbmRzIEJhc2VUcmFja2VyRXZlbnQ8e1xuICB1cmw6IHN0cmluZztcbiAgZXh0cmE/OiBhbnk7XG59PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGV4dHJhPzogYW55LFxuICAgIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8eyB1cmw6IHN0cmluZyB9PiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzdXBlcihBY3Rpb25FbnVtLkhJU1RPUlksIGV2ZW50SW5pdERpY3QpO1xuICAgIHRoaXMuZGV0YWlsLnVybCA9IHVybDtcbiAgICB0aGlzLmRldGFpbC5leHRyYSA9IGV4dHJhO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xuaW1wb3J0IHsgaXNUcmFja2VyRXZlbnQsIFRyYWNrZXJFdmVudCB9IGZyb20gXCIuL2V2ZW50XCI7XG5sb2coXCJyZWNlaXZlciBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBFdmVudFJlY2VpdmVyIHtcbiAgcHJpdmF0ZSBtYXAgPSBuZXcgTWFwPHN0cmluZywgKGV2ZW50OiBUcmFja2VyRXZlbnQpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgZW1pdHRlciA9IG5ldyBFdmVudFRhcmdldCgpO1xuXG4gIHB1YmxpYyByZWdpc3RlcihldmVudFR5cGU6IHN0cmluZywgY2FsbGJhY2s/OiAoZXZlbnQ6IFRyYWNrZXJFdmVudCkgPT4gdm9pZCkge1xuICAgIHRoaXMuZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgdHJhY2tFdiA9ICgoZXZlbnQgYXMgdW5rbm93bikgYXMgQ3VzdG9tRXZlbnQpXG4gICAgICAgIC5kZXRhaWwgYXMgVHJhY2tlckV2ZW50O1xuICAgICAgaWYgKGlzVHJhY2tlckV2ZW50KHRyYWNrRXYpICYmIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHRyYWNrRXYpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgdGhpcy5tYXAuc2V0KGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkb0V2ZW50KGV2ZW50OiBUcmFja2VyRXZlbnQpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMubWFwLmdldChcIlwiICsgZXZlbnQuYWN0aW9uKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gXCIuLy4uL3JvdXRlci9oaXN0b3J5XCI7XG5pbXBvcnQgeyBEIH0gZnJvbSBcIi4vZG9jdW1lbnRcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcbmxvZyhcImJhbm5lciBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBUb3BCYW5uZXIge1xuICBwdWJsaWMgc3RhdGljIHNob3coKSB7XG4gICAgVG9wQmFubmVyLnNob3dpbmcgPSB0cnVlO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZFVwLCB0cnVlKTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGREb3duLCBmYWxzZSk7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkQ29udGVudCwgdHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGhpZGUoKSB7XG4gICAgVG9wQmFubmVyLnNob3dpbmcgPSBmYWxzZTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGREb3duLCB0cnVlKTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRVcCwgZmFsc2UpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZENvbnRlbnQsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZG9EaXNwbGF5Q2hhbmdlKCkge1xuICAgIFRvcEJhbm5lci5zaG93aW5nID8gVG9wQmFubmVyLmhpZGUoKSA6IFRvcEJhbm5lci5zaG93KCk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBzZXR1cCgpIHtcbiAgICBELmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudHMuZGRBcnJvdywgXCJjbGlja1wiLCBUb3BCYW5uZXIuZG9EaXNwbGF5Q2hhbmdlKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHNob3dpbmcgPSB0cnVlO1xufVxuXG5ELmFkZEV2ZW50TGlzdGVuZXIoXCJtdHVyay10b3AtYmFubmVyLWJhY2tcIiwgXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoSGlzdG9yeS5jYW5CYWNrd2FyZCgpKSB7XG4gICAgUm91dGVyLmxvYWRXaXRoUGF0aFByZWZpeChIaXN0b3J5LmJhY2t3YXJkKCkpO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KFwiVGhlcmUgaXMgbm8gcGFnZSBoaXN0b3J5IHRvIGdvIGJhY2sgZm9yIGF0IHRoaXMgdGltZSFcIik7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tIFwiLi8uLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmxvZyhcImRvY3VtZW50IGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIEQge1xuICBwdWJsaWMgc3RhdGljIGRvYzogRG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICBwdWJsaWMgc3RhdGljIGVsZW0oZWxlbTogRWxlbWVudCB8IHN0cmluZyk6IEVsZW1lbnQge1xuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIEQuaWQoZWxlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtIGFzIEVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkaXNwbGF5KGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsIHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBlbGVtID0gRC5lbGVtKGVsZW0pO1xuICAgIGlmIChzaG93KSB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheVwiKTtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpZChpZDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBELmRvYy5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRWxlbWVudCB3YXMgbm90IGZvdW5kLCBpZDogPCR7aWR9Pi5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgY2xheihjbGF6OiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+IHtcbiAgICByZXR1cm4gRC5kb2MuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGF6KTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIHRhZyh0YWc6IHN0cmluZyk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4ge1xuICAgIHJldHVybiBELmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgaW1hZ2UoaWQ6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBlcnJvcigoKSA9PiBELmlkKGlkKS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdXJsKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgZWxlbTogRWxlbWVudCB8IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgbGlzdGVuZXI6IChlOiBFdmVudCkgPT4gYW55XG4gICkge1xuICAgIGVsZW0gPSB0aGlzLmVsZW0oZWxlbSk7XG4gICAgY29uc3Qgd3JhcHBlckZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxpc3RlbmVyKGUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIChlbGVtIGFzIEVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgd3JhcHBlckZ1bmMpO1xuICAgIHJldHVybiB3cmFwcGVyRnVuYztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZWFjaChlbGVtOiBFbGVtZW50IHwgc3RyaW5nLCBhcHBseTogKG5vZGU6IEVsZW1lbnQpID0+IGFueSkge1xuICAgIGVsZW0gPSB0aGlzLmVsZW0oZWxlbSk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBlbGVtLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFwcGx5KGNoaWxkcmVuW2ldKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGVhY2hSZWN1cihcbiAgICBlbGVtOiBFbGVtZW50IHwgc3RyaW5nLFxuICAgIGFwcGx5OiAobm9kZTogRWxlbWVudCkgPT4gYW55XG4gICkge1xuICAgIGVsZW0gPSB0aGlzLmVsZW0oZWxlbSk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBlbGVtLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBhcHBseShjaGlsZCk7XG4gICAgICBELmVhY2hSZWN1cihjaGlsZCwgYXBwbHkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KFxuICAgIHRhZ05hbWU6IEssXG4gICAgb3B0aW9ucz86IEVsZW1lbnRDcmVhdGlvbk9wdGlvbnNcbiAgKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBvcHRpb25zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBEIH0gZnJvbSAnLi9kb2N1bWVudCc7XG5sb2coJ2VsZW1lbnQgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbi8qKlxuICogVGhlc2UgYXJlIGVsZW1lbnRzIHRoYXQgYXJlIGluIGV2ZXJ5IHNpbmdsZSBwcm9qZWN0LiBFdmVuIGlmIHRoZXkgYXJlIG5vdCB1c2VkIHRoZXkgc2hvdWxkXG4gKiBiZSBwbGFjZSBpbiB0aGUgcHJvamVjdCBhbmQgZGlzcGxheSBzaG91bGQgYmUgc2V0IHRvIG5vbmUuIFRoaXMgc2ltcGxpZmllcyBjb25maWd1cmF0aW9uXG4gKiBhbmQgc29tZSBjb21tb24gZnVuY3Rpb25zIGFuZCBhbGxvd3MgbGVzcyBudWxsIGNoZWNrcyB0byBiZSBwZXJmb3JtZWQgb3ZlcmFsbC4gSWYgdGhlXG4gKiBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGF0IHJ1biB0aW1lIGFuIGVtcHR5IGRpdiB3aXRoIHRoYXQgaWQgaXMgY3JlYXRlZCBhbmQgaXRzIGRpc3BsYXlcbiAqIGlzIHNldCB0byBub25lIHRoZW4gYXBwZW5kZWQgdG8gdGhlIGJvZHkuXG4gKi9cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBnZXQgYW4gZWxlbWVudCwgaWYgdW5zdWNjZXNzZnVsLCBjcmVhdGVzIGRpdiB3aXRoIGlkIGFuZCBhcHBlbmRzIHRvIGJvZHkuXG4gKlxuICogQHBhcmFtIGlkIC0gdGhlIGlkIG9mIHRoZSBlbGVtZW50IHRvIHJldHJpZXZlLlxuICovXG5mdW5jdGlvbiBtYWtlRWxlbUlmTm90RXhpc3QoaWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICBsZXQgZWxlbTtcbiAgICB0cnkge1xuICAgICAgICBlbGVtID0gRC5pZChpZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVsZW0gPSBELmNyZWF0ZSgnZGl2Jyk7XG4gICAgICAgIGVsZW0uaWQgPSBpZDtcbiAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChlbGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW07XG59XG5cbi8qKlxuICogQ29tbW9ubHkgYWNjZXNzZWQgZWxlbWVudHMsIGFsbG93cyBmb3IgY2xlYXJlciBkb20gbWFuaXAgb24gdGhlc2UgZWxlbWVudHMuXG4gKi9cbmV4cG9ydCBjb25zdCBFbGVtZW50cyA9IHtcbiAgICBkb2N1bWVudDogRC5kb2MuZG9jdW1lbnRFbGVtZW50LFxuICAgIHdyYXBwZXI6IG1ha2VFbGVtSWZOb3RFeGlzdCgnd3JhcHBlcicpLFxuICAgIGh0bWxMb2M6IG1ha2VFbGVtSWZOb3RFeGlzdCgnaHRtbC1sb2MnKSxcbiAgICBpbm5lckJvZHk6IG1ha2VFbGVtSWZOb3RFeGlzdCgnaW5uZXItYm9keScpLFxuICAgIGRkRG93bjogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWRyb3AtZG93bi1idXR0b24nKSxcbiAgICBkZFVwOiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItY29sbGFwc2UtYnV0dG9uJyksXG4gICAgZGRDb250ZW50OiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWNvbnRlbnQnKSxcbiAgICBiYWNrQnV0dG9uOiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItYmFjaycpLFxuICAgIGRkQXJyb3c6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1hcnJvdycpLFxuICAgIG10VG9wQmFubmVyVGV4dDogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLXRleHQnKSxcbiAgICBtdFNjZW5hcmlvQ29udGV4dDogbWFrZUVsZW1JZk5vdEV4aXN0KCdzY2VuYXJpb19jb250ZXh0JyksXG4gICAgbXRTY2VuYXJpb1F1ZXN0aW9uOiBtYWtlRWxlbUlmTm90RXhpc3QoJ3NjZW5hcmlvX3F1ZXN0aW9uJyksXG4gICAgbG9nRmlsZUlucHV0OiBtYWtlRWxlbUlmTm90RXhpc3QoXG4gICAgICAgICdtdHVyay10b3AtYmFubmVyLWRyb3AtZG93bi1jb250ZW50LWxvZy1maWxlLWlucHV0J1xuICAgICksXG4gICAgc3VibWl0Rm9ybTogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay1zdWJtaXQtZm9ybScpLFxuICAgIG1vZGFsOiBtYWtlRWxlbUlmTm90RXhpc3QoJ21vZGFsJyksXG59O1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4vLi4vZG9tL2VsZW1lbnRzJztcbmxvZygnaHRtbCBsb2MgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBlbnVtIEFwcEVudW0ge1xuICAgIElORk9STUFUSU9OX0ZPUkFHSU5HID0gJ2luZm9ybWF0aW9uLWZvcmFnaW5nJyxcbiAgICBDT0dOSVRJVkVfTE9BRCA9ICdjb2duaXRpdmUtbG9hZCcsXG4gICAgR0VOREVSX01BRyA9ICdnZW5kZXItbWFnJyxcbiAgICBFUlJPUiA9ICdlcnJvcicsXG59XG5cbmV4cG9ydCBlbnVtIE1vZGVFbnVtIHtcbiAgICBSRUFMID0gJ3JlYWwnLFxuICAgIFNBTkRCT1ggPSAnc2FuZGJveCcsXG4gICAgVEVTVCA9ICd0ZXN0JyxcbiAgICBFUlJPUiA9ICdlcnJvcicsXG59XG5cbmV4cG9ydCBjbGFzcyBIVE1MTG9jIHtcbiAgICBwdWJsaWMgc3RhdGljIGVsZW0gPSBFbGVtZW50cy5odG1sTG9jO1xuICAgIHB1YmxpYyBzdGF0aWMgYXBwOiBBcHBFbnVtO1xuICAgIHB1YmxpYyBzdGF0aWMgbW9kZTogTW9kZUVudW07XG4gICAgcHVibGljIHN0YXRpYyBzY2VuYXJpbzogc3RyaW5nO1xuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cCgpIHtcbiAgICAgICAgSFRNTExvYy5hcHAgPSAoSFRNTExvYy5lbGVtLmRhdGFzZXQuYXBwIGFzIEFwcEVudW0pIHx8IEFwcEVudW0uRVJST1I7XG4gICAgICAgIEhUTUxMb2MubW9kZSA9XG4gICAgICAgICAgICAoSFRNTExvYy5lbGVtLmRhdGFzZXQubW9kZSBhcyBNb2RlRW51bSkgfHwgTW9kZUVudW0uRVJST1I7XG4gICAgICAgIEhUTUxMb2Muc2NlbmFyaW8gPSBIVE1MTG9jLmVsZW0uZGF0YXNldC5zY2VuYXJpbyB8fCAnZXJyb3InO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBEIH0gZnJvbSAnLi9kb2N1bWVudCc7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4vZWxlbWVudHMnO1xubG9nKCdtb2RhbCBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgICBwdWJsaWMgc3RhdGljIGVsZW0gPSBFbGVtZW50cy5tb2RhbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgZGlzcGxheShzcmM6IHN0cmluZykge1xuICAgICAgICBNb2RhbC5lbGVtLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICdzdHlsZScsXG4gICAgICAgICAgICBgbGVmdDogJHtNYXRoLnJvdW5kKHdpbmRvdy5wYWdlWE9mZnNldCl9cHg7IHRvcDogJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgKX1weDtgXG4gICAgICAgICk7XG4gICAgICAgIE1vZGFsLmVsZW0uY2xhc3NMaXN0LnJlcGxhY2UoJ2hpZGUtbW9kYWwnLCAnc2hvdy1tb2RhbCcpO1xuICAgICAgICBELmVhY2goTW9kYWwuZWxlbSwgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIChub2RlIGFzIEhUTUxJRnJhbWVFbGVtZW50KS5zcmMgPSBzcmM7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vc2Nyb2xsJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBoaWRlKCkge1xuICAgICAgICBNb2RhbC5lbGVtLmNsYXNzTGlzdC5yZXBsYWNlKCdzaG93LW1vZGFsJywgJ2hpZGUtbW9kYWwnKTtcbiAgICAgICAgRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XG4gICAgICAgICAgICAobm9kZSBhcyBIVE1MSUZyYW1lRWxlbWVudCkuc3JjID0gJyc7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vc2Nyb2xsJyk7XG4gICAgfVxufVxuXG5ELmFkZEV2ZW50TGlzdGVuZXIoTW9kYWwuZWxlbSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICBNb2RhbC5oaWRlKCk7XG59KTtcbkQuZWFjaChNb2RhbC5lbGVtLCAobm9kZSkgPT4ge1xuICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihub2RlLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG59KTtcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBlcnJvciwgbG9nIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IG5vb3AsIG5vdyB9IGZyb20gJy4vLi4vdXRpbHMvZnVuY3MnO1xubG9nKCdzY3JvbGwgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbi8qKlxuICogTGluZWFyIGltcGxlbWVudGF0aW9uIG9mIHNjcm9sbGluZy5cbiAqIEZvbGxvd3MgdGhlIHNpbmdsZXRvbiBwYXR0ZXJuLCBjYWxsIGRvIHRvIHN0YXJ0IGEgc2Nyb2xsIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhIHNjcm9sbCBpcyBjYWxsZWQgd2hlbiBhbm90aGVyIHNjcm9sbCBoYXMgYWxyZWFkeSBiZWd1biBhblxuICogZXJyb3Igd2lsbCBiZSB0aHJvd24sIGJ1dCB0aGUgZmlyc3Qgc2Nyb2xsIHdpbGwgY29udGludWUgdW50aWwgY29tcGxldGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFNjcm9sbCB7XG4gICAgcHVibGljIHN0YXRpYyBTVEVQX0lOX01TID0gMTc7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNhbGxiYWNrKFxuICAgICAgICBlbmRQb3M6IG51bWJlcixcbiAgICAgICAgZHVyYXRpb246IG51bWJlciA9IDIwMCxcbiAgICAgICAgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueSA9IG5vb3BcbiAgICApOiB2b2lkIHtcbiAgICAgICAgaWYgKFNjcm9sbC5ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0Nhbm5vdCBtYWtlIG11bHRpcGxlIGNhbGxzIHRvIHNjcm9sbCBhdCB0aGUgc2FtZSB0aW1lLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBvbGRDb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgICBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIFNjcm9sbC5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBlcnJvcihvbGRDb21wbGV0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlKGVuZFBvcywgZHVyYXRpb24sIGNvbXBsZXRlKS5hdHRlbXB0U2Nyb2xsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBwcm9taXNlKGVuZFBvczogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMjAwKSB7XG4gICAgICAgIGlmIChTY3JvbGwucnVubmluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdDYW5ub3QgbWFrZSBtdWx0aXBsZSBjYWxscyB0byBzY3JvbGwgYXQgdGhlIHNhbWUgdGltZS4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFNjcm9sbC5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIHJlc29sdmU6ICh2YWx1ZT86IHVua25vd24pID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgcmVqZWN0OiAoYXJnMDogYW55KSA9PiB2b2lkXG4gICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBydW5SZXNvbHZlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjcm9sbC5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUoZW5kUG9zLCBkdXJhdGlvbiwgcnVuUmVzb2x2ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0ZW1wdFNjcm9sbCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBTY3JvbGwucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcnVubmluZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlID0gbmV3IFNjcm9sbCgwLCAwLCBub29wKTtcbiAgICBwcml2YXRlIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnk7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVuZFBvczogbnVtYmVyLFxuICAgICAgICBwcml2YXRlIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgICAgIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnlcbiAgICApIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9ICguLi5hcmdzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzY3JvbGwnKSk7XG4gICAgICAgICAgICBjb21wbGV0ZShhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpc1J1bm5pbmcoKSB7XG4gICAgICAgIHJldHVybiBTY3JvbGwucnVubmluZztcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZShcbiAgICAgICAgZW5kUG9zOiBudW1iZXIsXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgICAgIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnlcbiAgICApOiBTY3JvbGwge1xuICAgICAgICB0aGlzLmVuZFBvcyA9IGVuZFBvcztcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY1Njcm9sbEFtb3VudCgpIHtcbiAgICAgICAgY29uc3QgY3VyVGltZSA9IG5vdygpO1xuICAgICAgICBjb25zdCBzdGVwcyA9IE1hdGgubWF4KFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICh0aGlzLmR1cmF0aW9uIC0gY3VyVGltZSkgLyBTY3JvbGwuU1RFUF9JTl9NU1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBjdXJQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoKHRoaXMuZW5kUG9zIC0gY3VyUG9zKSAvIHN0ZXBzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNjcm9sbCgpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbCgwLCB0aGlzLmNhbGNTY3JvbGxBbW91bnQoKSk7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IHRoaXMuZW5kUG9zKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zY3JvbGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhdHRlbXB0U2Nyb2xsKCkge1xuICAgICAgICBpZiAoJ3JlcXVlc3RBbmltYXRpb25GcmFtZScgaW4gd2luZG93ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbCgwLCB0aGlzLmVuZFBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGwoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBub29wIH0gZnJvbSAnLi4vdXRpbHMvZnVuY3MnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vLi4vZGF0YS1sb2cvZGF0YSc7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi8uLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi8uLi91dGlscy9xX3BhcmFtcyc7XG5pbXBvcnQgeyBEIH0gZnJvbSAnLi9kb2N1bWVudCc7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4vZWxlbWVudHMnO1xubG9nKCdzdWJtaXQgZm9ybSBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGludGVyZmFjZSBBbGxvd1N1Ym1pc3Npb24ge1xuICAgIGFsbG93KCk6IHN0cmluZyB8IG51bGw7XG4gICAgcHJlU3VibWl0KC4uLmFyZ3M6IGFueSk6IGFueTtcbn1cblxuY29uc3QgayA9ICdOY0YyV1JrVWJmNXR6ajRiSXZJOTgxRnFtUzZwTWxPODNnMmo3dTVSJztcbmNvbnN0IGdhdGUgPSAnaHR0cHM6Ly8yeWtvcHExb2hhLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL1BST0QvbG9ncyc7XG5cbmNvbnN0IEFsbG93U3VibWlzc2lvbkRlZmF1bHQ6IEFsbG93U3VibWlzc2lvbiA9IHtcbiAgICBhbGxvdzogKCkgPT4gbnVsbCxcbiAgICBwcmVTdWJtaXQ6IG5vb3AsXG59O1xuXG5leHBvcnQgY2xhc3MgU3VibWl0Rm9ybSB7XG4gICAgcHVibGljIHN0YXRpYyBlbGVtID0gRWxlbWVudHMuc3VibWl0Rm9ybSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgcHVibGljIHN0YXRpYyBhbGxvd1N1Ym1pdERlZmF1bHQgPSB7IGFsbG93OiAoKSA9PiB0cnVlLCBwcmVTdWJtaXQ6IG5vb3AgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAoXG4gICAgICAgIGFsbG93U3VibWlzc2lvbjogQWxsb3dTdWJtaXNzaW9uID0gQWxsb3dTdWJtaXNzaW9uRGVmYXVsdFxuICAgICkge1xuICAgICAgICBTdWJtaXRGb3JtLnN1Ym1pdEZ1bmMgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBhbGxvd2VkID0gYWxsb3dTdWJtaXNzaW9uLmFsbG93KCk7XG4gICAgICAgICAgICBpZiAoYWxsb3dlZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHFwID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5yYXcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuYXNzaWdubWVudElEID0gcXAuZ2V0KCdhc3NpZ25tZW50SWQnKTtcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuaGl0SUQgPSBxcC5nZXQoJ2hpdElkJyk7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLndvcmtlcklEID0gcXAuZ2V0KCd3b3JrZXJJZCcpO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5zdWJtaXRUbyA9XG4gICAgICAgICAgICAgICAgICAgIHFwLmdldCgndHVya1N1Ym1pdFRvJykgKyAnL210dXJrL2V4dGVybmFsU3VibWl0JztcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAoRC5pZCgnYXNzaWdubWVudC1pZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnVybERhdGEuaGl0SUQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgKEQuaWQoJ2hpdC1pZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5oaXRJRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKEVsZW1lbnRzLnN1Ym1pdEZvcm0gYXMgSFRNTEZvcm1FbGVtZW50KS5hY3Rpb24gPSBkYXRhLnVybERhdGFcbiAgICAgICAgICAgICAgICAgICAgLnN1Ym1pdFRvIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICBhbGxvd1N1Ym1pc3Npb24ucHJlU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGdhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAneC1hcGkta2V5JzogayxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FuZGJveDogcGFyYW1zLnNhbmRib3gsXG4gICAgICAgICAgICAgICAgICAgICAgICB3dXN0bF9rZXk6IHBhcmFtcy53dXN0bF9rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiBwYXJhbXMucHJvamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbjogcGFyYW1zLml0ZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogcGFyYW1zLnRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRJRDogZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpdElEOiBkYXRhLnVybERhdGEuaGl0SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXJJRDogZGF0YS51cmxEYXRhLndvcmtlcklELFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nOiBkYXRhLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9KTsgLy8gVE9ETzogdmVyaWZ5IHRoaXMgYWN0dWFsbHkgd29ya3NcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzcC5qc29uKCkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1lvdSBtYWRlIGEgYmFkIHJlcXVlc3Qgd2l0aCB5b3VyIHN1Ym1pc3Npb24uIFRoZSBzZXJ2ZXIgdGhpbmtzIHRoYXQgeW91IG1hZGUgdGhpcyBlcnJvcjogJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGF3YWl0IHJlc3AuanNvbigpKS5lcnJvclxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFN1Ym1pdEZvcm0uZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICAgICAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgU3VibWl0Rm9ybS5zdWJtaXRGdW5jXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBTdWJtaXRGb3JtLmVsZW0uc3VibWl0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGFsbG93ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBTdWJtaXRGb3JtLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgU3VibWl0Rm9ybS5zdWJtaXRGdW5jKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzdWJtaXRGdW5jOiAoZXZlbnQ6IEV2ZW50KSA9PiBhbnk7XG59XG4iLCJpbXBvcnQgeyBUb3BCYW5uZXIgfSBmcm9tIFwiLi9iYW5uZXJcIjtcbmltcG9ydCB7IEhUTUxMb2MgfSBmcm9tIFwiLi9odG1sX2xvY1wiO1xuXG5leHBvcnQgY2xhc3MgVHJhY2tlckVsZW1lbnRzIHtcbiAgcHVibGljIHN0YXRpYyBzZXR1cFRyYWNrZXJFbGVtZW50cygpIHtcbiAgICAvLyBzZXR1cCBkb20gZWxlbWVudHNcbiAgICBUb3BCYW5uZXIuc2V0dXAoKTtcbiAgICBIVE1MTG9jLnNldHVwKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICcuLy4uL3RyYWNrZXIvdHJhY2tlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGlzdG9yeUVudHJ5IHtcbiAgICBoYXNQcmV2VVJMOiBib29sZWFuO1xuICAgIHByZXZFbnRyeT86IEhpc3RvcnlFbnRyeTtcbiAgICBjdXJyVVJMOiBzdHJpbmc7XG4gICAgZXh0cmE/OiBhbnk7XG4gICAgbmV4dEVudHJpZXM6IEhpc3RvcnlFbnRyeVtdO1xufVxuXG5mdW5jdGlvbiBuZXdIaXN0b3J5RW50cnkoXG4gICAgY3VyclVSTDogc3RyaW5nLFxuICAgIGhhc1ByZXZVUkw6IGJvb2xlYW4sXG4gICAgcHJldkVudHJ5PzogSGlzdG9yeUVudHJ5LFxuICAgIGV4dHJhPzogYW55XG4pOiBIaXN0b3J5RW50cnkge1xuICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoJ2hpc3RvcnknKSh7IHVybDogY3VyclVSTCwgZXh0cmEgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VyclVSTCxcbiAgICAgICAgaGFzUHJldlVSTCxcbiAgICAgICAgcHJldkVudHJ5LFxuICAgICAgICBleHRyYSxcbiAgICAgICAgbmV4dEVudHJpZXM6IFtdLFxuICAgIH07XG59XG5cbmV4cG9ydCBjbGFzcyBIaXN0b3J5IHtcbiAgICBwdWJsaWMgc3RhdGljIGZvcndhcmQodXJsOiBzdHJpbmcsIGV4dHJhPzogYW55KTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaGlzdEVudCA9IG5ld0hpc3RvcnlFbnRyeSh1cmwsIHRydWUsIEhpc3RvcnkuY3Vycmhpc3RvcnksIGV4dHJhKTtcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeS5uZXh0RW50cmllcy5wdXNoKGhpc3RFbnQpO1xuICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5ID0gaGlzdEVudDtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNhbkJhY2t3YXJkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeS5oYXNQcmV2VVJMICYmXG4gICAgICAgICAgICAhSGlzdG9yeS5jdXJyaGlzdG9yeS5wcmV2RW50cnk/LmV4dHJhPy53cmFwcGVyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBiYWNrd2FyZCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIUhpc3RvcnkuY2FuQmFja3dhcmQoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ28gYmFjayBhbnkgZnVydGhlci4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhIaXN0b3J5LmN1cnJoaXN0b3J5LnByZXZFbnRyeSk7XG4gICAgICAgIGNvbnN0IHByZXZFbnRyeSA9IEhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5IGFzIEhpc3RvcnlFbnRyeTtcbiAgICAgICAgY29uc3QgbmV4dFVSTCA9IHByZXZFbnRyeS5jdXJyVVJMO1xuICAgICAgICBjb25zdCBoaXN0RW50ID0gbmV3SGlzdG9yeUVudHJ5KFxuICAgICAgICAgICAgbmV4dFVSTCxcbiAgICAgICAgICAgIHByZXZFbnRyeS5oYXNQcmV2VVJMLFxuICAgICAgICAgICAgcHJldkVudHJ5LnByZXZFbnRyeSxcbiAgICAgICAgICAgIHsgYmFjazogdHJ1ZSB9XG4gICAgICAgICk7XG4gICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBoaXN0RW50O1xuICAgICAgICByZXR1cm4gbmV4dFVSTDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKHVybDogc3RyaW5nLCBleHRyYT86IGFueSkge1xuICAgICAgICBIaXN0b3J5LmZpcnN0SGlzdG9yeSA9IG5ld0hpc3RvcnlFbnRyeSh1cmwsIGZhbHNlLCB1bmRlZmluZWQsIGV4dHJhKTtcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeSA9IEhpc3RvcnkuZmlyc3RIaXN0b3J5O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGZpcnN0SGlzdG9yeTogSGlzdG9yeUVudHJ5O1xuICAgIHByaXZhdGUgc3RhdGljIGN1cnJoaXN0b3J5OiBIaXN0b3J5RW50cnk7XG59XG5cbih3aW5kb3cgYXMgYW55KS5oID0gSGlzdG9yeTtcbiIsImltcG9ydCB7IEQgfSBmcm9tICcuLi9kb20vZG9jdW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuLi9kb20vZWxlbWVudHMnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi9kb20vbW9kYWwnO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4uL3V0aWxzL2Z1bmNzJztcbmltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLi91dGlscy9odG1sX2xvYWRlcic7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnLi9oaXN0b3J5JztcbmxvZygncm91dGVyIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY29uc3QgZW51bSBSb3V0ZXJNb2RlIHtcbiAgICBPRkYsXG4gICAgT04sXG4gICAgU1RBTkRBUkRfQUxMT1dBTkNFUyxcbn1cblxuLy8gVE9ETzogTmVlZCB0byBpbXByb3ZlIHRoaXMgdG8gdGFrZSBpbiBhIGZ1bmN0aW9uIGZvciB0aGUgYWxsb3dhbmNlIG9yIHJlZHVjZSBhYnN0cmFjdG5lc3Mgb3ZlcmFsbC5cblxuZXhwb3J0IGNvbnN0IGVudW0gUm91dGVyTW9kdWxlIHtcbiAgICBBID0gJ0EnLFxuICAgIElNRyA9ICdJTUcnLFxuICAgIEZPUk0gPSAnRk9STScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVyQ29uZmlnIHtcbiAgICBtb2R1bGU6IFJvdXRlck1vZHVsZTtcbiAgICBtb2RlOiBSb3V0ZXJNb2RlO1xufVxuXG5pbnRlcmZhY2UgRnVsbFJvdXRlckNvbmZpZyBleHRlbmRzIFJvdXRlckNvbmZpZyB7XG4gICAgc2V0dXAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KTogYW55O1xufVxuXG5mdW5jdGlvbiB0ZXN0T24oZWxlbTogRWxlbWVudCwgY29uZmlnOiBSb3V0ZXJDb25maWcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBlbGVtLnRhZ05hbWUgPT09IGNvbmZpZy5tb2R1bGUgJiZcbiAgICAgICAgKGNvbmZpZy5tb2RlID09PSBSb3V0ZXJNb2RlLk9OIHx8XG4gICAgICAgICAgICBjb25maWcubW9kZSA9PT0gUm91dGVyTW9kZS5TVEFOREFSRF9BTExPV0FOQ0VTKVxuICAgICk7XG59XG5mdW5jdGlvbiB0ZXN0QWxsb3dhbmNlKGNvbmZpZzogUm91dGVyQ29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5tb2RlID09PSBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVM7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgSEFTSF9UQUdTID0gbmV3IFJlZ0V4cCgnIycpO1xuICAgIHB1YmxpYyBzdGF0aWMgRU1QVFkgPSBuZXcgUmVnRXhwKCdeJCcpO1xuICAgIHB1YmxpYyBzdGF0aWMgQVRfU1lNQk9MID0gbmV3IFJlZ0V4cCgnQCcpO1xuXG4gICAgcHVibGljIHN0YXRpYyBIQVNIX1RBR19SRVNQT05ERVIgPSBub29wO1xuICAgIHB1YmxpYyBzdGF0aWMgRU1QVFlfUkVTUE9OREVSID0gKGV2ZW50OiBFdmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwdWJsaWMgc3RhdGljIEFUX1NZTUJPTF9SRVNQT05ERVIgPSAoZXZlbnQ6IEV2ZW50KSA9PlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcHVibGljIHN0YXRpYyBwYXRoUHJlZml4ID0gJyc7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbmZpZ3VyZShjb25maWdzOiBSb3V0ZXJDb25maWdbXSwgcGF0aFByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgIGNvbmZpZ3MuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICAgICAgICBSb3V0ZXIuY29uZmlncy5zZXQoY29uZmlnLm1vZHVsZSwgUm91dGVyLnVwZ3JhZGVDb25maWcoY29uZmlnKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBSb3V0ZXIucGF0aFByZWZpeCA9IHBhdGhQcmVmaXg7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cChlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgICAgIEQuZWFjaFJlY3VyKGVsZW0sIChub2RlKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbmZpZyBvZiBSb3V0ZXIuY29uZmlncy52YWx1ZXMoKSkge1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0T24obm9kZSwgY29uZmlnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuc2V0dXAoY29uZmlnLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgU1RBTkRBUkRfTElOS19MSVNURU5FUihlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHJldHVybiBlcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHRhcmdldC5ocmVmO1xuICAgICAgICAgICAgSGlzdG9yeS5mb3J3YXJkKFJvdXRlci5nZXRQYXRoTmFtZSh1cmwpKTtcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IEhUTUxMb2FkZXIubG9hZFVSTCh1cmwsIEVsZW1lbnRzLmh0bWxMb2MpO1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduZXdQYWdlTG9hZCcpKTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgT05fQ09NUExFVEVfU0xMKHBvc3Q6IChlOiBNb3VzZUV2ZW50KSA9PiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlcnJvcihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSk7XG4gICAgICAgICAgICAgICAgcG9zdChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgSU1BR0VfTElOS19MSVNURU5FUihlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHJldHVybiBlcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgRk9STV9PRkZfTElTVEVORVIoZTogRXZlbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ0FsbCBmb3JtcyBleGNlcHQgZm9yIHRoZSBvbmUgaW4gdGhlIHRvcCBoZWFkZXIgYXJlIGluYWN0aXZlLidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRBbGxvd2FuY2VzT24oKSB7XG4gICAgICAgIFJvdXRlci5yZWdpc3RlckFsbG93YW5jZShcbiAgICAgICAgICAgIHsgcmVnZXg6IFJvdXRlci5FTVBUWSwgZnVuYzogUm91dGVyLkVNUFRZX1JFU1BPTkRFUiB9LFxuICAgICAgICAgICAgeyByZWdleDogUm91dGVyLkhBU0hfVEFHUywgZnVuYzogUm91dGVyLkhBU0hfVEFHX1JFU1BPTkRFUiB9LFxuICAgICAgICAgICAgeyByZWdleDogUm91dGVyLkFUX1NZTUJPTCwgZnVuYzogUm91dGVyLkFUX1NZTUJPTF9SRVNQT05ERVIgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRBbGxvd2FuY2VzT2ZmKCkge1xuICAgICAgICBSb3V0ZXIudW5yZWdpc3RlckFsbG93YW5jZShcbiAgICAgICAgICAgIFJvdXRlci5FTVBUWSxcbiAgICAgICAgICAgIFJvdXRlci5IQVNIX1RBR1MsXG4gICAgICAgICAgICBSb3V0ZXIuQVRfU1lNQk9MXG4gICAgICAgICk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJBbGxvd2FuY2UoXG4gICAgICAgIC4uLnJlZ2V4czogQXJyYXk8eyByZWdleDogUmVnRXhwOyBmdW5jOiAoZXZlbnQ6IEV2ZW50KSA9PiBhbnkgfT5cbiAgICApIHtcbiAgICAgICAgcmVnZXhzLmZvckVhY2goKHJlZ2V4KSA9PlxuICAgICAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLnNldChyZWdleC5yZWdleCwgcmVnZXguZnVuYylcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVyQWxsb3dhbmNlKC4uLnJlZ2V4czogUmVnRXhwW10pIHtcbiAgICAgICAgcmVnZXhzLmZvckVhY2goKHJlZ2V4KSA9PiBSb3V0ZXIubGlua0FsbG93YW5jZXMuZGVsZXRlKHJlZ2V4KSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXJBbGxvd2FuY2VzKCkge1xuICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgSGlzdG9yeS5mb3J3YXJkKFJvdXRlci5nZXRQYXRoTmFtZSh1cmwpKTtcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgSFRNTExvYWRlci5sb2FkVVJMKHVybCwgRWxlbWVudHMuaHRtbExvYyk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3UGFnZUxvYWQnKSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkV2l0aFBhdGhQcmVmaXgocGFnZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IHJldCA9IEhUTUxMb2FkZXIubG9hZFVSTChcbiAgICAgICAgICAgIFJvdXRlci5wYXRoUHJlZml4ICsgcGFnZSxcbiAgICAgICAgICAgIEVsZW1lbnRzLmh0bWxMb2NcbiAgICAgICAgKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduZXdQYWdlTG9hZCcpKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBTZXR1cEZ1bmN0aW9ucyA9IHtcbiAgICAgICAgQTogKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYU5vZGUgPSBlbGVtIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHRlc3RBbGxvd2FuY2UoY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGxldCBwYXNzZXNSZWdleFRlc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBhTm9kZS5ocmVmO1xuICAgICAgICAgICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5mb3JFYWNoKChmdW5jLCByZWdleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gcmVnZXgudGVzdChocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VzUmVnZXhUZXN0ID0gcGFzc2VzUmVnZXhUZXN0ICYmICF0ZXN0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3Nlc1JlZ2V4VGVzdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHJlZi5zdWJzdHIoaHJlZi5sZW5ndGggLSAzKSA9PT0gJ3BkZicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2RhbC5kaXNwbGF5KGhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgKGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuU1RBTkRBUkRfTElOS19MSVNURU5FUihlIGFzIE1vdXNlRXZlbnQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgSU1HOiAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWdOb2RlID0gZWxlbSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHRlc3RBbGxvd2FuY2UoY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGxldCBwYXNzZXNSZWdleFRlc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5mb3JFYWNoKChmdW5jLCByZWdleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gIXJlZ2V4LnRlc3QoaW1nTm9kZS5zcmMpO1xuICAgICAgICAgICAgICAgICAgICBwYXNzZXNSZWdleFRlc3QgPSBwYXNzZXNSZWdleFRlc3QgJiYgdGVzdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCBmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLklNQUdFX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuSU1BR0VfTElOS19MSVNURU5FUihlIGFzIE1vdXNlRXZlbnQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgRk9STTogKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybU5vZGUgPSBlbGVtIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICAgICAgICAgIGlmICh0ZXN0QWxsb3dhbmNlKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFzc2VzUmVnZXhUZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuZm9yRWFjaCgoZnVuYywgcmVnZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9ICFyZWdleC50ZXN0KGZvcm1Ob2RlLnNyYyk7XG4gICAgICAgICAgICAgICAgICAgIHBhc3Nlc1JlZ2V4VGVzdCA9IHBhc3Nlc1JlZ2V4VGVzdCAmJiB0ZXN0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3Nlc1JlZ2V4VGVzdCkge1xuICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuRk9STV9PRkZfTElTVEVORVJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnc3VibWl0JywgUm91dGVyLkZPUk1fT0ZGX0xJU1RFTkVSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY29uZmlncyA9IG5ldyBNYXA8Um91dGVyTW9kdWxlLCBGdWxsUm91dGVyQ29uZmlnPigpO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGlua0FsbG93YW5jZXM6IE1hcDxSZWdFeHAsIChldmVudDogRXZlbnQpID0+IGFueT4gPSBuZXcgTWFwPFxuICAgICAgICBSZWdFeHAsXG4gICAgICAgIChldmVudDogRXZlbnQpID0+IGFueVxuICAgID4oKTtcblxuICAgIHByaXZhdGUgc3RhdGljIHBhdGhSZWdleCA9IC9cXC8oW1xcd10rLmh0bWwpLztcblxuICAgIHByaXZhdGUgc3RhdGljIHVwZ3JhZGVDb25maWcoY29uZmlnOiBSb3V0ZXJDb25maWcpOiBGdWxsUm91dGVyQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZHVsZTogY29uZmlnLm1vZHVsZSxcbiAgICAgICAgICAgIG1vZGU6IGNvbmZpZy5tb2RlLFxuICAgICAgICAgICAgc2V0dXA6IFJvdXRlci5TZXR1cEZ1bmN0aW9uc1tjb25maWcubW9kdWxlXSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UGF0aE5hbWUodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCByZXQgPSBSb3V0ZXIucGF0aFJlZ2V4LmV4ZWModXJsKTtcbiAgICAgICAgcmV0dXJuIHJldCA9PT0gbnVsbCA/IHVybCA6IHJldC5sZW5ndGggPiAxID8gcmV0WzFdIDogdXJsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGlzVHJhY2tlckV2ZW50LCBvYmplY3RUb1RyYWNrZXJFdmVudCB9IGZyb20gJy4uL2RhdGEtbG9nL2V2ZW50JztcbmltcG9ydCB7IEV2ZW50UmVjZWl2ZXIgfSBmcm9tICcuLi9kYXRhLWxvZy9yZWNlaXZlcic7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4uL2RvbS9lbGVtZW50cyc7XG5pbXBvcnQgeyBUcmFja2VyRWxlbWVudHMgfSBmcm9tICcuLi9kb20vdHJhY2tlcl9lbGVtcyc7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nLCBzZXREZWJ1Z0xldmVsIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IFNjZW5hcmlvIH0gZnJvbSAnLi4vdXRpbHMvc2NlbmFyaW9zJztcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLy4uL2RhdGEtbG9nL2RhdGEnO1xuaW1wb3J0IHsgQWxsb3dTdWJtaXNzaW9uLCBTdWJtaXRGb3JtIH0gZnJvbSAnLi8uLi9kb20vc3VibWl0X2Zvcm0nO1xuXG5sb2coJ3RyYWNrZXIgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VyQ29uZmlndXJhdGlvbiB7XG4gICAgYWxsb3dTdWJtaXNzaW9uOiBBbGxvd1N1Ym1pc3Npb247XG4gICAgZGVidWdMZXZlbDogRGVidWdMZXZlbEVudW07XG4gICAgYnVja2V0TmFtZTogc3RyaW5nO1xuICAgIGtleVByZWZpeDogc3RyaW5nO1xuICAgIHNldHVwKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2VyIHtcbiAgICBwdWJsaWMgc3RhdGljIGxhc3RQb3MgPSB7IHg6IDAsIHk6IDAsIHRpbWU6IDAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFNjZW5hcmlvKHNjZW46IFNjZW5hcmlvKSB7XG4gICAgICAgIGxldCBzdWIgPSBzY2VuLmNvbnRleHQ7XG4gICAgICAgIGlmIChzdWIubGVuZ3RoID4gNTApIHtcbiAgICAgICAgICAgIHN1YiA9IHN1Yi5zdWJzdHJpbmcoMCwgNTApO1xuICAgICAgICAgICAgY29uc3QgaW5kcyA9IFtcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJyAnKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJy4nKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJywnKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJz8nKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJyEnKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjb25zdCBpbmQgPSBNYXRoLm1heCguLi5pbmRzKTtcbiAgICAgICAgICAgIHN1YiA9IHN1Yi5zdWJzdHJpbmcoMCwgaW5kKSArICcuLi4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHNjZW4pO1xuICAgICAgICBjb25zb2xlLmxvZygnbG9hZGVkIHNjZW4nKTtcbiAgICAgICAgRWxlbWVudHMubXRUb3BCYW5uZXJUZXh0LmlubmVyVGV4dCA9IHN1YjtcbiAgICAgICAgRWxlbWVudHMubXRTY2VuYXJpb0NvbnRleHQuaW5uZXJUZXh0ID0gc2Nlbi5jb250ZXh0O1xuICAgICAgICBFbGVtZW50cy5tdFNjZW5hcmlvUXVlc3Rpb24uaW5uZXJUZXh0ID0gc2Nlbi5xdWVzdGlvbjtcbiAgICAgICAgRWxlbWVudHMuaHRtbExvYy5kYXRhc2V0LnRhc2sgPSBzY2VuLnRhZztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0KGNvbmZpZzogVHJhY2tlckNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc2V0RGVidWdMZXZlbChjb25maWcuZGVidWdMZXZlbCk7XG4gICAgICAgIC8vIGNvbmZpZ3VyZSB0cmFja2VyIHNwZWNpZmljIGVsZW1lbnRzXG4gICAgICAgIFRyYWNrZXJFbGVtZW50cy5zZXR1cFRyYWNrZXJFbGVtZW50cygpO1xuICAgICAgICBTdWJtaXRGb3JtLnNldHVwKGNvbmZpZy5hbGxvd1N1Ym1pc3Npb24pO1xuICAgICAgICBkYXRhLmRhdGEudGFzayA9IEVsZW1lbnRzLmh0bWxMb2MuZGF0YXNldC50YXNrO1xuICAgICAgICBjb25maWcuc2V0dXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgZGF0YS5sb2dzW2V2ZW50VHlwZV0gPSBbXTtcbiAgICAgICAgdGhpcy5yZWNlaXZlci5yZWdpc3RlcihldmVudFR5cGUsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGF0YS5sb2dzW2V2ZW50VHlwZV0ucHVzaChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFdmVudERpc3BhdGNoRnVuYyhldmVudFR5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RXZlbnREaXNwYXRjaEZ1bmMoZXZlbnRUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIChldkRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBldkRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1RyYWNrZXJFdmVudChldkRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRvVHJhY2tlckV2ZW50KGV2RGF0YSwgZXZlbnRUeXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlci5kb0V2ZW50KGV2RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhdHRhY2hEYXRhKGtleTogc3RyaW5nLCBhdHRyaWJ1dGU6IGFueSkge1xuICAgICAgICBkYXRhLmRhdGFba2V5XSA9IGF0dHJpYnV0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCBjb21wdXRlOiAodmFsOiBhbnkpID0+IGFueSkge1xuICAgICAgICBkYXRhLmRhdGFbbmFtZV0gPSBjb21wdXRlKGRhdGEuZGF0YVtuYW1lXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVjZWl2ZXIgPSBuZXcgRXZlbnRSZWNlaXZlcigpO1xufVxuIiwiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLy4uL2RhdGEtbG9nL2RhdGFcIjtcbmxvZyhcImNvbnNvbGUgd3JhcHBlciBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlcnJvcjxUPihcbiAgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gVFxuKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiB7XG4gIHJldHVybiBlcnJvckhPKGZ1bmMpKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckhPPFQ+KFxuICBmdW5jOiAoLi4uYXJnczogYW55KSA9PiBUXG4pOiAoLi4uYXJnczogYW55KSA9PiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+IHtcbiAgcmV0dXJuIGFzeW5jICguLi5hcmdzOiBhbnkpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmMoYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRhdGEuZXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZW51bSBEZWJ1Z0xldmVsRW51bSB7XG4gIE5PTkUgPSAxLFxuICBCQVNJQyA9IDIsXG4gIERFVEFJTEVEID0gMyxcbn1cblxubGV0IGRlYnVnTGV2ZWw6IERlYnVnTGV2ZWxFbnVtID0gRGVidWdMZXZlbEVudW0uQkFTSUM7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWJ1Z0xldmVsKGxldmVsOiBEZWJ1Z0xldmVsRW51bSkge1xuICBkZWJ1Z0xldmVsID0gbGV2ZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cobWVzc2FnZTogc3RyaW5nLCBpbXBvcnRhbmNlOiBEZWJ1Z0xldmVsRW51bSkge1xuICBpZiAoZGVidWdMZXZlbCA+PSBpbXBvcnRhbmNlKSB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi9jb25zb2xlX3dyYXBwZXJcIjtcbmxvZyhcImZ1bmNzIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1lbXB0eVxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuZXhwb3J0IGZ1bmN0aW9uIG5vdygpOiBudW1iZXIge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG4iLCJpbXBvcnQgeyBEIH0gZnJvbSAnLi4vZG9tL2RvY3VtZW50JztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi9mdW5jcyc7XG5sb2coJ2h0bWwgbG9hZGVyIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgaW50ZXJmYWNlIENhY2hlIHtcbiAgICBbbmFtZTogc3RyaW5nXTogRWxlbWVudDtcbn1cbmV4cG9ydCBjbGFzcyBIVE1MTG9hZGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIENBQ0hFOiBDYWNoZSA9IHt9O1xuXG4gICAgcHVibGljIHN0YXRpYyBmaW5pc2goKSB7XG4gICAgICAgIEhUTUxMb2FkZXIuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICBIVE1MTG9hZGVyLmZsYXR0ZW5UU0xvYWRUYWdzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0ZpbmlzaGVkKCkge1xuICAgICAgICByZXR1cm4gSFRNTExvYWRlci5maW5pc2hlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNhY2hlSFRNTChuYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykge1xuICAgICAgICBpZiAoSFRNTExvYWRlci5maW5pc2hlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdDYW5ub3QgY2FjaGUgbmV3IEhUTUwgZW50aXRpZXMgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0c2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cy1sb2FkJyk7XG4gICAgICAgIHRzbC5kYXRhc2V0Lm5hbWUgPSBuYW1lO1xuICAgICAgICB0c2wuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgdGhpcy5DQUNIRVtuYW1lXSA9IHRzbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyUG9zdExvYWRGdW5jKGZ1bmM6ICgpID0+IGFueSkge1xuICAgICAgICBsb2coJ3JlZ3NpdGVyIHBvc3QgbG9hZCBmdW5jdGlvbicsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgSFRNTExvYWRlci5wb3N0TG9hZEZ1bmMgPSBmdW5jO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZChodG1sOiBzdHJpbmcsIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbG9nKCdiZWdpbiBsb2FkJywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBELmVsZW0oZWxlbSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFnID0gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuICAgICAgICAgICAgICAgIEhUTUxMb2FkZXIucmVtb3ZlVGFnc0Zyb21Eb2N1bWVudEZyYWdtZW50KGZyYWcsICdzY3JpcHQnKTtcbiAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLmxvYWRBbGxDYWNoZWRFbGVtZW50cyhmcmFnKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gICAgICAgICAgICAgICAgbG9nKCdlbmQgbG9hZCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLnBvc3RMb2FkRnVuYygpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkVVJMKHVybDogc3RyaW5nLCBlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBIVE1MTG9hZGVyLmxvYWQoYXdhaXQgSFRNTExvYWRlci5nZXRIVE1MKHVybCksIGVsZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SFRNTCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbG9nKCdiZWdpbiByZXF1ZXN0JywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2coJ3Jlc29sdmUgcmVxdWVzdCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmaW5pc2hlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcG9zdExvYWRGdW5jOiAoKSA9PiBhbnkgPSBub29wO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVGFnc0Zyb21Eb2N1bWVudEZyYWdtZW50KFxuICAgICAgICBmcmFnOiBEb2N1bWVudEZyYWdtZW50LFxuICAgICAgICB0YWdOYW1lOiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgZnJhZy5xdWVyeVNlbGVjdG9yQWxsKHRhZ05hbWUpLmZvckVhY2goKHRhZykgPT4gZnJhZy5yZW1vdmVDaGlsZCh0YWcpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmbGF0dGVuVFNMb2FkVGFncygpIHtcbiAgICAgICAgbG9nKCdGbGF0dGVuaW5nJywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICBjb25zdCBzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgIE9iamVjdC5rZXlzKEhUTUxMb2FkZXIuQ0FDSEUpLmZvckVhY2goXG4gICAgICAgICAgICAobmFtZSkgPT5cbiAgICAgICAgICAgICAgICAoSFRNTExvYWRlci5DQUNIRVtuYW1lXSA9IEhUTUxMb2FkZXIuZmxhdHRlblRTTG9hZFRhZyhcbiAgICAgICAgICAgICAgICAgICAgSFRNTExvYWRlci5nZXRDYWNoZWRDb250ZW50KG5hbWUpIGFzIEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHMsXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApIGFzIEVsZW1lbnQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbXVsdGlwbGVUYWJzKG46IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCByZXQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHJldCArPSAnXFx0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGZsYXR0ZW5UU0xvYWRUYWcoXG4gICAgICAgIGVsZW06IEVsZW1lbnQsXG4gICAgICAgIGZsYXR0ZW5lZDogU2V0PHN0cmluZz4sXG4gICAgICAgIGNvdW50OiBudW1iZXJcbiAgICApOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBIVE1MTG9hZGVyLm11bHRpcGxlVGFicyhjb3VudCk7XG4gICAgICAgIGlmIChjb3VudCA+IDEwMCkge1xuICAgICAgICAgICAgYWxlcnQoJ0NoZWNrIHRoZSBjb25zb2xlLCBhbiBlcnJvciBoYXMgb2NjdXJyZWQuJyk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0l0IHNlZW1zIGxpa2UgeW91IG1pZ2h0IGhhdmUgaW5maW5pdGVseSByZWN1cnNpdmVseSBuZXN0ZWQgdGFncy4nICtcbiAgICAgICAgICAgICAgICAgICAgJ1xcbkhlcmUgYXJlIGFsbCBvZiB0aGUgdGFncyB0aGF0IGhhdmUgYmVlbiBmbGF0dGVuZWQgc28gZmFyOiAnICtcbiAgICAgICAgICAgICAgICAgICAgZmxhdHRlbmVkICtcbiAgICAgICAgICAgICAgICAgICAgJ1xcbkhlcmUgaXMgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgZWxlbWVudDogJyArXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xuICAgICAgICBpZiAobmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IEhUTUxMb2FkZXIuZ2V0Q2FjaGVkQ29udGVudChuYW1lKTtcbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmbGF0dGVuZWQuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpLmZvckVhY2goKGUpID0+IGUucmVtb3ZlKCkpO1xuICAgICAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RzLWxvYWQnKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IEhUTUxMb2FkZXIuZmxhdHRlblRTTG9hZFRhZyhlLCBmbGF0dGVuZWQsIGNvdW50ICsgMSk7XG4gICAgICAgICAgICBpZiAoY2hpbGQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlLnJlcGxhY2VXaXRoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZsYXR0ZW5lZC5hZGQobmFtZSk7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldENhY2hlZENvbnRlbnQoXG4gICAgICAgIG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWRcbiAgICApOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQgfHwgbmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IEhUTUxMb2FkZXIuQ0FDSEVbbmFtZV07XG4gICAgICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQgfHwgY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbG9hZEFsbENhY2hlZEVsZW1lbnRzKGZyYWc6IERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgZnJhZy5xdWVyeVNlbGVjdG9yQWxsKCd0cy1sb2FkJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBIVE1MTG9hZGVyLmdldENhY2hlZENvbnRlbnQobmFtZSk7XG4gICAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5yZXBsYWNlV2l0aChjb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi4vZG9tL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vZG9tL2RvY3VtZW50XCI7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4vY29uc29sZV93cmFwcGVyXCI7XG5sb2coXCJpZCBnZW5lcmF0b3IgbG9hZGVkXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBJREdlbmVyYXRvciB7XG4gIHB1YmxpYyBzdGF0aWMgcmVzZXQoKSB7XG4gICAgSURHZW5lcmF0b3IuaWRDb3VudCA9IDA7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldCBuZXh0KCkge1xuICAgIElER2VuZXJhdG9yLmlkQ291bnQgKz0gMTtcbiAgICByZXR1cm4gSURHZW5lcmF0b3IucHJlZml4ICsgSURHZW5lcmF0b3IuaWRDb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXBwbHlJRChlbGVtOiBFbGVtZW50KSB7XG4gICAgZWxlbS5pZCA9IGVsZW0uaWQgPyBlbGVtLmlkIDogSURHZW5lcmF0b3IubmV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWN1cnNpdmVseSBhZGRzIGlkcyB0byBhbGwgZWxlbWVudHMgdGhhdCBhcmUgYmVsb3cgdGhlIGdpdmVuXG4gICAqIGVsZW1lbnQgaW4gdGhlIGhlaXJhcmNoeS5cbiAgICpcbiAgICogQHBhcmFtIGVsZW0gLSB0aGUgZWxlbWVudCB0byBzdGFydCBhcHBseWluZyBpZHMgdG8gaXRzIGNoaWxkcmVuLlxuICAgKiAgICAgICAgICAgICAgICAgIFdpbGwgbm90IGFwcGx5IGFuIGlkIHRvIHRoaXMgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXBwbHlSZWN1cihlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgRC5lYWNoUmVjdXIoZWxlbSwgdGhpcy5hcHBseUlEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBpZHMgdG8gYWxsIGh0bWwgZWxlbWVudHMgaW4gdGhlIHRhcmdldCBsb2NhdGlvbiBpbiB0aGUgRE9NIHRoYXQgZG8gbm90IGhhdmUgaWRzLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhdHRhY2hJZHNUb0FsbEVsZW1lbnRzKCkge1xuICAgIElER2VuZXJhdG9yLmFwcGx5UmVjdXIoRWxlbWVudHMuaHRtbExvYyk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBpZENvdW50ID0gMDtcbiAgcHJpdmF0ZSBzdGF0aWMgcHJlZml4ID0gXCJhdXRvX2dlbl9pZF91bnFfXCI7XG59XG4iLCJjb25zdCBxUGFyYW1zID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zO1xuZXhwb3J0IGNvbnN0IHBhcmFtcyA9IHtcbiAgICB3dXN0bF9rZXk6ICcnLFxuICAgIHNhbmRib3g6IGZhbHNlLFxuICAgIHByb2plY3Q6ICcnLFxuICAgIGl0ZXJhdGlvbjogMCxcbiAgICB0YWc6ICcnLFxufTtcbnRyeSB7XG4gICAgcVBhcmFtcy5mb3JFYWNoKGNvbnNvbGUubG9nKTtcbiAgICBpZiAoXG4gICAgICAgIFsnd3VzdGxfa2V5JywgJ3NhbmRib3gnLCAncHJvamVjdCcsICdpdGVyYXRpb24nLCAndGFnJ10uZXZlcnkoKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2tleTogJyArIHFQYXJhbXMuaGFzKGtleSkpO1xuICAgICAgICAgICAgcmV0dXJuIHFQYXJhbXMuaGFzKGtleSk7XG4gICAgICAgIH0pXG4gICAgKSB7XG4gICAgICAgIHBhcmFtcy53dXN0bF9rZXkgPSBxUGFyYW1zLmdldCgnd3VzdGxfa2V5JykgYXMgc3RyaW5nO1xuICAgICAgICBwYXJhbXMuc2FuZGJveCA9IHFQYXJhbXMuZ2V0KCdzYW5kYm94JykgPT09ICd0cnVlJztcbiAgICAgICAgcGFyYW1zLnByb2plY3QgPSBxUGFyYW1zLmdldCgncHJvamVjdCcpIGFzIHN0cmluZztcbiAgICAgICAgcGFyYW1zLml0ZXJhdGlvbiA9IHBhcnNlSW50KHFQYXJhbXMuZ2V0KCdpdGVyYXRpb24nKSBhcyBzdHJpbmcsIDEwKTtcbiAgICAgICAgcGFyYW1zLnRhZyA9IHFQYXJhbXMuZ2V0KCd0YWcnKSBhcyBzdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21pc3NpbmcgcXVlcnkgcGFyYW1zJyk7XG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgJ1RoaXMgSElUIGlzIG1pc3NpbmcgbmVjY2Vzc2FyeSBtZXRhZGF0YSwgc29ycnkgZm9yIHRoZSBpbmNvbnZlbmllbmNlLiBQbGVhc2UgY29udGFjdCB0aGUgUmVxdWVzdGVyIGFzIHRoaXMgaXMgbm90IGludGVuZGVkIHRvIGhhcHBlbi4nXG4gICAgICAgICk7XG4gICAgfVxufSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGFsZXJ0KGUpO1xuICAgIGFsZXJ0KFxuICAgICAgICAnVGhpcyBISVQgaXMgYnJva2VuLCBzb3JyeSBmb3IgdGhlIGluY29udmVuaWVuY2UuIFBsZWFzZSBjb250YWN0IHRoZSBSZXF1ZXN0ZXIgYXMgdGhpcyBpcyBub3QgaW50ZW5kZWQgdG8gaGFwcGVuLidcbiAgICApO1xufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuL2NvbnNvbGVfd3JhcHBlclwiO1xuXG5sb2coXCJyZWFkeSBsb2FkZWRcIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuXG5sZXQgcmVhZHkgPSBmYWxzZTtcblxubGV0IHJlc29sdmVGdW5jOiAodmFsOiBib29sZWFuKSA9PiBhbnk7XG5sZXQgcmVqZWN0RnVuYztcbmNvbnN0IHJlYWR5UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsOiBib29sZWFuKSA9PiBhbnksIHJlamVjdCkgPT4ge1xuICByZXNvbHZlRnVuYyA9IHJlc29sdmU7XG4gIHJlamVjdEZ1bmMgPSByZWplY3Q7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsb2coXCJkb2N1bWVudCBpcyByZWFkeVwiLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gIHJlYWR5ID0gdHJ1ZTtcbiAgcmVzb2x2ZUZ1bmModHJ1ZSk7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhZHkoKSB7XG4gIHJldHVybiByZWFkeTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YWl0VW50aWxSZWFkeSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIHJlYWR5ID8gUHJvbWlzZS5yZXNvbHZlKHRydWUpIDogcmVhZHlQcm9taXNlO1xufVxuIiwiZXhwb3J0IGludGVyZmFjZSBTY2VuYXJpbyB7XG4gICAgY29udGV4dDogc3RyaW5nO1xuICAgIHF1ZXN0aW9uOiBzdHJpbmc7XG4gICAgdGFnOiBzdHJpbmc7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdmFyLXJlcXVpcmVzXG5leHBvcnQgY29uc3Qgc2NlbmFyaW9zOiBTY2VuYXJpb1tdID0gcmVxdWlyZSgnLi8uLi8uLi8uLi8uLi9zY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24nKTtcbih3aW5kb3cgYXMgYW55KS5zY2VuYXJpb3MgPSBzY2VuYXJpb3M7XG4iLCJpbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vY29yZS9kb20vZG9jdW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbiB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBBbGwoKSB7XG4gICAgQWNjb3JkaW9uLmRpc2NhcmRBbGwoKTtcbiAgICBjb25zdCBhY2NvcmRpb25zID0gRC5jbGF6KFwiYWNjb3JkaW9uXCIpO1xuICAgIGZvciAobGV0IGFjY0luZGV4ID0gMDsgYWNjSW5kZXggPCBhY2NvcmRpb25zLmxlbmd0aDsgKythY2NJbmRleCkge1xuICAgICAgY29uc3QgZWxlbSA9IGFjY29yZGlvbnMuaXRlbShhY2NJbmRleCk7XG4gICAgICBpZiAoZWxlbSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgQWNjb3JkaW9uLmFjY29yZGlvbnMucHVzaChuZXcgQWNjb3JkaW9uKGVsZW0pKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc2NhcmRBbGwoKSB7XG4gICAgQWNjb3JkaW9uLmFjY29yZGlvbnMgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGFjY29yZGlvbnM6IEFjY29yZGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdXRlcjogRWxlbWVudCkge1xuICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihvdXRlciwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvKiBUb2dnbGUgYmV0d2VlbiBhZGRpbmcgYW5kIHJlbW92aW5nIHRoZSBcImFjdGl2ZVwiIGNsYXNzLFxuICAgICAgICAgICAgICAgIHRvIGhpZ2hsaWdodCB0aGUgYnV0dG9uIHRoYXQgY29udHJvbHMgdGhlIHBhbmVsICovXG4gICAgICB0aGlzLm91dGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICAgIC8qIFRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgYWN0aXZlIHBhbmVsICovXG4gICAgICBjb25zdCBwYW5lbCA9IHRoaXMub3V0ZXIubmV4dEVsZW1lbnRTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHBhbmVsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZG9Tb21ldGhpbmcoKSB7XG4gIGNvbnNvbGUubG9nKFwiUHV0IHNvbWUgY29kZSBpbiBoZXJlIVwiKTtcbn1cbiIsImltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLi9jb3JlL3V0aWxzL2h0bWxfbG9hZGVyJztcbmltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7IGRvU29tZXRoaW5nIH0gZnJvbSAnLi9kby1zb21ldGhpbmcnO1xuaW1wb3J0IHsgSFRNTENvbnRlbnQsIGl0ZW1zVG9DYWNoZSB9IGZyb20gJy4vaHRtbC1pbXBvcnRzJztcbmltcG9ydCB7IFNsaWRlc2hvdyB9IGZyb20gJy4vc2xpZGVzaG93JztcbmltcG9ydCB7IHNldHVwVGFiTWVudSB9IGZyb20gJy4vdGFiX21lbnUnO1xuXG4vLyBQdXQgYWxsIGZ1bmN0aW9uIGNhbGxzIHRoYXQgbmVlZCB0byBiZSBtYWRlIG9uIGV2ZXJ5IHBhZ2UgbG9hZCBpbnNpZGUgdGhlIHNldHVwQWxsIGZ1bmN0aW9uIGJvZHkuXG5leHBvcnQgZnVuY3Rpb24gUHV0U3R1ZGVudFBhZ2VMb2FkT3BlcmF0aW9uc0luc2lkZVRoaXNTdHVkZW50Qm9keSgpIHtcbiAgICAvLyBUT0RPOiBQdXQgYWxsIG9wZXJhdGlvbnMgdGhhdCB5b3Ugd2FudCB0byBoYXBwZW4gb24gZXZlciBwYWdlIGxvYWQgaW4gdGhpcyBmdW5jdGlvbi5cbiAgICAvLyBGb3IgZXhhbXBsZSB5b3UgY291bGQgd3JpdGU6IFN0aWNreS5zZXR1cCgpXG4gICAgZG9Tb21ldGhpbmcoKTtcbiAgICBzZXR1cFRhYk1lbnUoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwQWxsKCkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyOiBhbnkpID0+IHNldFRpbWVvdXQociwgMTAwKSk7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZGluZycpO1xuICAgIFNsaWRlc2hvdy5zZXR1cEFsbCgpO1xuICAgIEFjY29yZGlvbi5zZXR1cEFsbCgpO1xuICAgIFB1dFN0dWRlbnRQYWdlTG9hZE9wZXJhdGlvbnNJbnNpZGVUaGlzU3R1ZGVudEJvZHkoKTtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkZWQnKTtcbn1cblxuaXRlbXNUb0NhY2hlLmZvckVhY2goKGl0ZW06IEhUTUxDb250ZW50KSA9PiB7XG4gICAgSFRNTExvYWRlci5jYWNoZUhUTUwoaXRlbS5uYW1lLCBpdGVtLmNvbnRlbnQpO1xufSk7XG4od2luZG93IGFzIGFueSkuSFRNTExvYWRlciA9IEhUTUxMb2FkZXI7XG5cbmNvbnNvbGUubG9nKCdkeW5hbWljLWRvbSBsb2FkZWQnKTtcbi8vIERvIG5vdCB0b3VjaCB0aGlzIGxpbmUsIG5lZWRlZCB0byByZWluaXRpYWxpemUgY29kZSBpbiB0aGUgZHluYW1pYy1kb20udHMgc2V0dXBBbGwgZnVuY3Rpb25cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCduZXdQYWdlTG9hZCcsICgpID0+IHNldHVwQWxsKCkpO1xuIiwiZGVjbGFyZSBmdW5jdGlvbiByZXF1aXJlKGlkOiBzdHJpbmcpOiBzdHJpbmc7XG5cbi8vIFRoaXMgZGVmaW5lcyB0aGUgZGF0YSB0aGF0IG5lZWRzIHRvIGJlIHBhc3NlZCB0byB0aGUgSFRNTExvYWRlciB0byBjYWNoZSB5b3VyIGh0bWwgY29udGVudC5cbmV4cG9ydCBpbnRlcmZhY2UgSFRNTENvbnRlbnQge1xuICAgIG5hbWU6IHN0cmluZzsgLy8gVGhlIG5hbWUgdGhhdCB5b3Ugd2lsbCB1c2UgdG8gcmVmZXJlbmNlIHRoZSBjb250ZW50IGluIHlvdXIgaHRtbCBwYWdlcy5cbiAgICBjb250ZW50OiBzdHJpbmc7IC8vIFRoZSBhY3R1YWwgaHRtbCBzdHJpbmcgdGhhdCB3aWxsIGJlIHB1bGxlZCBmcm9tIHRoZSBzb3VyY2UgZmlsZSB0aGF0IHlvdSBzcGVjaWZ5LlxufVxuXG4vLyBBbiBIVE1MQ29udGVudCBvYmplY3Qgc2hvdWxkIGxvb2sgbGlrZSB0aGUgZm9sbG93aW5nOlxuLy8ge1xuLy8gICAgIG5hbWU6ICdmb290ZXInLFxuLy8gICAgIGNvbnRlbnQ6IHJlcXVpcmUoJy4vaHRtbC9mb290ZXIuaHRtbCcpLFxuLy8gfVxuXG4vLyBUaGVuIHlvdSBjYW4gcmVmZXJlbmNlIHRoYXQgY29udGVudCBpbiB5b3VyIGh0bWwgdXNpbmcgdGhlIGZvbGxvd2luZyB0YWcgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBuYW1lIGF0dHJpYnV0ZS5cbi8vIDx0cy1sb2FkIGRhdGEtbmFtZT1cImhlYWRlclwiPjwvdHMtbG9hZD5cblxuLy8gWW91IGNhbiBzcGVjaWZ5IGFzIG1hbnkgYXMgeW91IHdhbnQgaW5zaWRlIG9mIHRoZSBhcnJheSBhbmQgdGhleSB3aWxsIGFsbCBiZSBidW5kbGVkIHVwIHdpdGggeW91ciB3ZWJzaXRlLlxuLy8gTWFrZSBzdXJlIHRvIG1ha2UgYSBjb3JyZXNwb25kaW5nIGh0bWwgZmlsZSBpbiB0aGUgaHRtbCBmaWxlIGZvbGRlciBmb3IgZWFjaCBlbGVtZW50IHlvdSBzcGVjaWZ5LlxuXG5leHBvcnQgY29uc3QgaXRlbXNUb0NhY2hlID0gW1xuICAgIC8vIEZlZWwgZnJlZSB0byBjaGFuZ2UgdGhlIGNvbnRlbnQgaW5zaWRlIGFueSBvZiB0aGUgaHRtbCBmaWxlcyBpbiB0aGUgaHRtbCBmaWxlIGZvbGRlciB0byBzdWl0IHlvdXIgbmVlZHMuXG4gICAge1xuICAgICAgICBuYW1lOiAnaGVhZGVyJyxcbiAgICAgICAgY29udGVudDogcmVxdWlyZSgnLi9odG1sL2hlYWRlci5odG1sJyksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdmb290ZXInLFxuICAgICAgICBjb250ZW50OiByZXF1aXJlKCcuL2h0bWwvZm9vdGVyLmh0bWwnKSxcbiAgICB9LFxuICAgIC8vIFB1dCBtb3JlIGl0ZW1zIGluIHRoZSBhcnJheSBiZWxvdyBoZXJlLlxuXTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9vdGVyIGlkPVxcXCJjb2xvcGhvblxcXCIgY2xhc3M9XFxcImZvb3RlclxcXCIgcm9sZT1cXFwiY29udGVudGluZm9cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyLXdpZGdldHNcXFwiPlxcbiAgICAgIDxhc2lkZSBjbGFzcz1cXFwid2lkZ2V0IHNpdGUtY29udGFjdFxcXCI+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci13aWRnZXQtdGl0bGVcXFwiPk51cnNlcnkgU2Nob29sPC9oMj5cXG4gICAgICAgIDxwPjY5MjYgRm9yZXN0IFBhcmsgUGFya3dheTwvcD5cXG4gICAgICAgIDxwPlN0LiBMb3VpcywgTU8gNjMxMzA8L3A+XFxuICAgICAgICA8cCBjbGFzcz1cXFwicGhvbmVcXFwiPjMxNC05MzUtNjY4OSA8c3Bhbj58PC9zcGFuPiBGYXg6IDMxNC05MzUtNzI0OTwvcD5cXG4gICAgICAgIDxwPlxcbiAgICAgICAgICA8YSBocmVmPVxcXCJmaWxlcy9tYWlsdG86bnVyc2VyeUB3dXN0bC5lZHVcXFwiPm51cnNlcnlAd3VzdGwuZWR1PC9hPlxcbiAgICAgICAgPC9wPlxcbiAgICAgIDwvYXNpZGU+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwid2lkZ2V0LXdyYXBwZXJcXFwiPlxcbiAgICAgICAgPGFzaWRlIGlkPVxcXCJ0ZXh0LTRcXFwiIGNsYXNzPVxcXCJ3aWRnZXQgd2lkZ2V0X3RleHQgd2lkZ2V0LWNvdW50LTJcXFwiPlxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci13aWRnZXQtdGl0bGVcXFwiPkhvdXJzIG9mIE9wZXJhdGlvbjwvaDI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHR3aWRnZXRcXFwiPlxcbiAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgQ2xhc3NlcyBtZWV0IE1vbi4gdGhyb3VnaCBGcmkuPGJyIC8+XFxuICAgICAgICAgICAgICBNb3JuaW5nOiA5LTExOjQ1IGEubS48YnIgLz5cXG4gICAgICAgICAgICAgIEFmdGVybm9vbjogMTI6MzAtMzoxNSBwLm0uPGJyIC8+XFxuICAgICAgICAgICAgICBGdWxsIGRheTogOSBhLm0uLTM6MTUgcC5tLlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2FzaWRlPlxcbiAgICAgICAgPGFzaWRlIGlkPVxcXCJ0ZXh0LTNcXFwiIGNsYXNzPVxcXCJ3aWRnZXQgd2lkZ2V0X3RleHQgd2lkZ2V0LWNvdW50LTJcXFwiPlxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci13aWRnZXQtdGl0bGVcXFwiPkFwcGx5IGZvciB0aGUgTnVyc2VyeSBTY2hvb2w8L2gyPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0d2lkZ2V0XFxcIj5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgIEV4cGVyaWVuY2UgdGhlIGlubm92YXRpdmUgYXBwcm9hY2ggYW5kIGR5bmFtaWMgdGVhY2hpbmdcXG4gICAgICAgICAgICAgIGVudmlyb25tZW50IG9mIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuXFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImZpbGVzL2FwcGx5Lmh0bWxcXFwiPlJlZ2lzdGVyIE5vdzwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2FzaWRlPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1pbmZvXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwiZm9vdGVyLWNvcHlyaWdodFxcXCI+wqlXYXNoaW5ndG9uIFVuaXZlcnNpdHkgaW4gU3QuIExvdWlzPC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZm9vdGVyPlwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcInd1c3RsLWJyYW5kaW5nXFxcIj5cXG4gIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMzIxXFxcIiBoZWlnaHQ9XFxcIjI4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMzIxIDI4XFxcIiBjbGFzcz1cXFwid2FzaHUtbG9nb1xcXCJcXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ0aXRsZVxcXCI+XFxuICAgIDx0aXRsZSBpZD1cXFwidGl0bGVcXFwiPldhc2hpbmd0b24gVW5pdmVyc2l0eSBpbiBTdC4gTG91aXM8L3RpdGxlPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRkZGXFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiAxLjc2Yy0uMDkgMC00LjQxLjA0LTEwLjQ2LTEuMjFWMThjMCAuMjcuMDEuNDcuMDEuNDd2LjAyYy4wNC44MS4yOCAxLjQ1Ljc3IDIgLjMyLjM0Ljc2LjcgMS4zOCAxLjA1LjE3LjEuMzUuMTguNTUuMjguMTUuMDcuMzEuMTQuNDcuMi4xNC4wNi41NS4yNC42OS4yOWw2LjU5IDIuNSA2LjU5LTIuNWMuMTUtLjA1LjU2LS4yNC42OS0uMjkuMTYtLjA3LjMyLS4xNC40Ny0uMi4xOS0uMS4zOC0uMTguNTUtLjI4LjYyLS4zNSAxLjA2LS43IDEuMzgtMS4wNS40OC0uNTUuNzMtMS4xOS43Ny0ydi0uMDJzMC0uMTkuMDEtLjQ3Vi41NUMxNC44NiAxLjggMTAuNTUgMS43NiAxMC40NiAxLjc2elxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgMi44Yy0uMDkgMC00LjAzLjA0LTkuNTYtMS4xdjE1Ljk1YzAgLjI1LjAxLjQzLjAxLjQ0di4wMmMuMDQuNzQuMjUgMS4zMy43IDEuODMuMjkuMzEuNy42NCAxLjI2Ljk1LjE1LjA5LjMyLjE3LjUuMjYuMTQuMDcuMjguMTMuNDQuMTkuMTIuMDUuNS4yMi42My4yN2w2LjAzIDIuMjkgNi4wMy0yLjI5Yy4xMy0uMDUuNTEtLjIyLjYzLS4yNy4xNS0uMDYuMy0uMTMuNDQtLjE5LjE4LS4wOS4zNS0uMTcuNS0uMjYuNTYtLjMxLjk3LS42NCAxLjI2LS45NS40NC0uNS42Ni0xLjA5LjctMS44M3YtLjAyczAtLjE4LjAxLS40NFYxLjdjLTUuNTUgMS4xNC05LjUgMS4xLTkuNTggMS4xelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgMy43NWMtLjA4IDAtMy42OC4wNC04Ljc0LTEuMDJ2NC4wOGM1LjA1IDEuMDUgOC42NyAxLjAyIDguNzQgMS4wMnMzLjY4LjA0IDguNzQtMS4wMlYyLjczYy01LjA2IDEuMDUtOC42NiAxLjAyLTguNzQgMS4wMnpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNBNTE0MTdcXFwiXFxuICAgICAgZD1cXFwiTTEwLjQ2IDcuODNjLS4wOCAwLTMuNjguMDQtOC43NC0xLjAydjkuMDVjNS4wNSAxLjA1IDguNjcgMS4wMiA4Ljc0IDEuMDJzMy42OC4wNCA4Ljc0LTEuMDJWNi44MmMtNS4wNiAxLjA0LTguNjYgMS4wMS04Ljc0IDEuMDF6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xLjcyIDE3LjcyYy4wMy42OS4yMyAxLjIzLjY0IDEuNjguMjYuMjguNjQuNTggMS4xNS44Ny4xNS4wOC4yOS4xNS40Ni4yMy4xMy4wNi4yNi4xMi40LjE3LjExLjA1LjQ2LjIuNTguMjRMMTAuNDYgMjNsNS41MS0yLjA5Yy4xMi0uMDQuNDYtLjIuNTgtLjI0LjE0LS4wNi4yNy0uMTIuNC0uMTcuMTYtLjA4LjMyLS4xNS40Ni0uMjMuNTEtLjI5Ljg4LS41OCAxLjE1LS44Ny40MS0uNDYuNi0xIC42NC0xLjY4di0uMDJzMC0uMTYuMDEtLjR2LTEuNDRjLTUuMDUgMS4wNS04LjY3IDEuMDItOC43NCAxLjAycy0zLjY4LjA0LTguNzQtMS4wMnYxLjQ1Yy0uMDIuMjUtLjAxLjQxLS4wMS40MXpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiMwMDczNjBcXFwiXFxuICAgICAgZD1cXFwiTTQuOCAzLjY5bC40MSAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDUtLjc2LTEuMDUuNzYuMzktMS4yNC0xLjA0LS43NyAxLjI5LS4wMS40MS0xLjIzem0xMS4zMSAwbC40MiAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDYtLjc2LTEuMDUuNzYuMzktMS4yNC0xLjA0LS43NyAxLjI5LS4wMS40MS0xLjIzem0tNS42NS40OGwuNDIgMS4yMyAxLjI5LjAxLTEuMDQuNzcuMzkgMS4yNC0xLjA2LS43Ni0xLjA2Ljc1LjM5LTEuMjQtMS4wNC0uNzcgMS4zLS4wMS40MS0xLjIyek0xMC40NiAxNy4yMWwtLjQ2LjQ1djEuMjJsLjIzLjY1djEuMDloLjQ1di0xLjA5bC4yMy0uNjV2LTEuMjJsLS40NS0uNDV6bS4yMiA0LjQxdi0uNjVoLS40NXYuNjVsLS4yMy40Mi40Ni41Ni40Ni0uNTYtLjI0LS40MnptLjMzLS42NXYuNWwuMjkuMzEuNTEtLjQxdi0uNDFoLS44em0uNTQtMi4wNGwtLjU0LjZ2MS4wOWguNDR2LS42NWwuNDMtLjQ2LjU1LjM2LjM1LS4zNnYtLjU4aC0xLjIzem0tMS42NCAyLjA0di41bC0uMjkuMzEtLjUyLS40MXYtLjQxaC44MXptLS41NS0yLjA0bC41NC42djEuMDloLS40M3YtLjY1bC0uNDMtLjQ2LS41NS4zNi0uMzUtLjM2di0uNThoMS4yMnpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTE0LjYyIDkuMjd2NS4xOWgtMy40OWwtLjI1LjIxLS40My4zNy0uNDMtLjM3LS4yNS0uMjFINi4yOVY5LjI3bC0uNzQuNTR2NS4zOGg0LjEybC4zNy4zMS40My4zOC40My0uMzguMzctLjMxaDQuMTJWOS44MWwtLjc3LS41NHpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTExLjAyIDguODNsLS4xNC4xMS0uNDMuMzgtLjQzLS4zOC0uMTItLjExSDcuMDN2NC44OWgyLjg4bC4yLjE3LjM1LjMxLjM2LS4zMS4xOS0uMTdoMi44OFY4LjgzaC0yLjg3ek0xNi4xMSAxMC4zNXYzLjMxYy45NS0uMTQgMS45OC0uMzEgMy4wOC0uNTRWOS44MWE1MC41IDUwLjUgMCAwIDEtMy4wOC41NHptLTExLjMxIDBjLS45NS0uMTQtMS45OC0uMzEtMy4wOC0uNTR2My4zMWMxLjEuMjMgMi4xNC40MSAzLjA4LjU0di0zLjMxelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNMTYuMTEgMTYuNzZsLS4zMS4zMnYuODZsLjE1LjQ2di43N2guMzF2LS43N2wuMTYtLjQ2di0uODZsLS4zMS0uMzJ6bS4xNiAzLjA5di0uNDVoLS4zMXYuNDZsLS4xNS4zLjMxLjQuMzItLjQtLjE3LS4zMXptLjIzLS40NXYuMzVsLjIuMjIuMzYtLjI4di0uMjloLS41NnptLjM4LTEuNDNsLS4zOC40M3YuNzdoLjMxdi0uNDZsLjMtLjMzLjM4LjI1LjI0LS4yNXYtLjQxaC0uODV6bS0xLjE0IDEuNDN2LjM1bC0uMjEuMjItLjM1LS4yOHYtLjI5aC41NnptLS4zOS0xLjQzbC4zOS40M3YuNzdoLS4zMXYtLjQ2bC0uMy0uMzMtLjM5LjI1LS4yNC0uMjV2LS40MWguODV6TTQuOCAxNi43NmwtLjMyLjMydi44NmwuMTYuNDZ2Ljc3aC4zMXYtLjc3bC4xNS0uNDZ2LS44NmwtLjMtLjMyem0uMTYgMy4wOXYtLjQ1aC0uMzF2LjQ2bC0uMTYuMy4zMi40LjMxLS40LS4xNi0uMzF6bS4yMi0uNDV2LjM1bC4yMS4yMi4zNS0uMjh2LS4yOWgtLjU2em0uMzktMS40M2wtLjM5LjQzdi43N2guMzF2LS40NmwuMy0uMzMuMzkuMjUuMjQtLjI1di0uNDFoLS44NXpNNC40MiAxOS40di4zNWwtLjIuMjItLjM2LS4yOHYtLjI5aC41NnptLS4zOC0xLjQzbC4zOC40M3YuNzdoLS4zMXYtLjQ2bC0uMy0uMzMtLjM4LjI1LS4yNC0uMjV2LS40MWguODV6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8ZyBmaWxsPVxcXCIjRkZGXFxcIiBjbGFzcz1cXFwid2FzaHUtbG9nby10ZXh0XFxcIj5cXG4gICAgICA8cGF0aFxcbiAgICAgICAgZD1cXFwiTTIzMi40NyA4LjE2Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3ptMTMuODIgMTIuMDN2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA2IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAxLjk5IDEuNjh2Ny42NGMwIDEuNDMtLjcgMS41NS0xLjIxIDEuNjgtLjAzIDAtLjA2LS4wMS0uMSAwLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNC0uODQtLjAxLS42My4xLS42My4zNi4wMy4zMS41My4zMyAxLjM3LjM0LjI5IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zMSAwIDEuMTUtLjEzIDIuNTMtLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZWMTMuMWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjI2IDAgLjczLS4yLjQ1LS40NC0uNjgtLjUtMS45Ny4zLTEuOTUtMi4wNHpNNDguOTEgMi40Yy4zNy0uMDUuNTUtLjE5LjU1LS4xOSAwLS4yNC0uMDUtLjMtLjM5LS4zLS42NSAwLTEuMDUuMTEtMS42OS4xMS0uNzEgMC0xLjI1LS4wOC0xLjg1LS4wOC0uMzQgMC0uMzEuMTEtLjMxLjMgMCAuMjEuNjUuMDggMS4wMi44OS4yMS40NC4xMyAxLjM2LS4wOCAxLjlsLTUuMDEgMTMuNzQtMi4xNC02LjEtLjgzLTIuMjNzLS4xMy4wNi40Ni0xLjc5bDEuMTctMy41MmMuNTctMS43MyAxLjE0LTIuNjQgMS44OC0yLjY1LjkyLS4wMi45Mi0uNTcuMjEtLjU3cy0xLjEzLjA2LTEuNzUuMDZjLS42NSAwLS45OS0uMDYtMS42OS0uMDYtLjI2IDAtLjU1LjA4LS41Mi4zLjAzLjIxLjQyLjE0LjcxLjMuNDcuMjQuNzggMS4yNS40NSAyLjNsLTEuMzggNC40Mi0xLjU4LTQuMTNjLS4zMS0uNzgtLjczLTIuNTIuMDMtMi42Ny43My0uMTUuNjMtLjUyLjE4LS41Mi0uODYgMC0xLjMyLjExLTIuMTUuMTEtLjkxIDAtMS41OS0uMTEtMi40NS0uMTEtLjE4IDAtLjUyLjAzLS40Mi4zOC4wNS4yMS40OS4xNC43Ni4zIDEuMDUuNjggMS4yNSAxLjU1IDEuNjIgMi41MmwyLjMgNi40OGMuNDIgMS4xNi40NS43NC4xMSAxLjczbC0yIDUuNS00Ljk1LTE0LjExYy0uMzktMS4wNi0uNi0xLjc5LjI2LTIuMi4zNy0uMTkuNDctLjIyLjUyLS4zLjA1LS4wNy4xLS4zMi0uNDUtLjMtLjg5LjAzLTEuNDMuMTEtMi4zMi4xMS0uOTQgMC0xLjU5LS4xMS0yLjQ1LS4xMS0uMjkgMC0uMzQuMTQtLjM0LjM1IDAgLjMzLjcxLjExIDEuMzEuODEuMzQuMzguOTkgMS42NiAxLjE0IDIuMTJMMzIuOCAyMi4zYy4xMS4yNS4xNC43Ni40OC43Ni4yNyAwIC4zMy0uNTcuNDItLjc5bDMuMTMtOC41OSAzLjA1IDguMTZjLjEzLjMzLjMxIDEuMjIuNjMgMS4yMi4yNiAwIC4zNi0uNDMuNDktLjgzbDUuOS0xNi44N2MuNS0xLjM2IDEuMDctMi43OSAyLjAxLTIuOTZ6bTY1LjQ2IDYuNzFjLTMuMjYgMC01Ljc3IDMuMjgtNS43NyA3LjEzIDAgMS45Ni41MiAzLjUxIDEuNDIgNC42My0uMzEuMjEtLjkyLjctMi4xNS43LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJWMTEuMmwzLjM4LS4wMWMuMjIgMCAuNjUtMS40NC42Ny0xLjUyLjA0LS4xOC4xLS4zMy4xMi0uNDYuMDQtLjI4LS4xNy0uMy0uMzctLjAxLS4xNS4xNS0uMzIuNTUtLjk5LjU1aC0yLjgxYzAtMi40MS4wMy0zLjUxLS4zNS0zLjUxLS4zNiAwLS4zLjEtLjYzIDEuMTctLjQ0IDEuNDQtMS43OSAyLjIzLTIuNjMgMi42OC0uMzguMDktLjgxLjEyLTEuMjkuMDEtLjc0LS4xNi0xLjYtMS4wNi0zLjgzLTEuMDYtMi4zOCAwLTQuNDYgMS45NS00LjQ2IDQuNTUgMCAxLjQuNjIgMi43NiAxLjcxIDMuNDgtLjIuMTItMS41MyAxLjI0LTEuMzcgMi41NiAwIDAtLjAzIDEuMzcgMS4wNSAxLjgyLS4zMy4xNC0uNjcuMzYtLjk2LjYzLS43LS4yNi0xLjcyLS4wNi0xLjcyLTEuOTFWMTUuMWMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjczLjk5LTIuOTEgMS41NS0uMTMuMDMtLjQzLjEtLjQ0LjM0IDAgLjY1IDEuNzUtLjcxIDEuNzYgMS42OHY3LjY0YzAgMS42NS0xLjMxIDEuNjUtMS41NCAxLjY3LS4xIDAtLjE5IDAtLjMxLjAxLS41NS0uMDUtMS41MS0uMy0xLjUxLTEuMzRWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuNzgtLjg2IDIuMDEtMS40MyAyLjAzLS42OS0uMDktMS4yMi0uMzctMS4yMi0xLjQxdi01LjE0YzAtMi42NS0xLjAxLTYuMDctNC4zMy02LjA3LTEuNDcgMC0yLjc1LjgxLTMuNzMgMS45MlYyLjQxYzAtLjMxLS4xNS0uNDgtLjMxLS40OS0uNC0uMDMtMS4wNyAxLjE5LTIuOTYgMS42My0uMTMuMDMtLjYyLjA3LS42Mi4yNSAwIC42NSAxLjk3LS4zMSAxLjk5IDEuNjlWMjAuNmMwIDEuNTEtMS4zIDEuMzEtMS41MyAxLjc5LS4wNC4yMS4wOC4zMS4yNi4zMS40MiAwIDEuNTUtLjEyIDIuMzUtLjEyczIuMS4xMiAyLjY0LjEyYy4zMSAwIC40NC0uMDYuNDQtLjQ0LS4yNy0uNTItMi4yOC4yOC0yLjI4LTIuMzd2LTYuNWMwLTEuNTcgMS44Ny0yLjc4IDMuMDMtMi43OC45MSAwIDMuMTQuNzEgMy4xNCA0LjUzdjUuNjRjMCAxLjExLTEuMTggMS4yMy0xLjI3IDEuNTcgMCAuMjQuMTUuMzQuNDIuMzQuMjggMCAxLjExLS4xMiAyLjEyLS4xMi41NiAwIDEuMDcuMDMgMS41LjA2LjIzLjA1LjU3LjA1Ljk5LjA1LjI4IDAgMS0uMTEgMS44Mi0uMTFzMS40OC4wNyAxLjk5LjExYy4xLjAxLjIuMDEuMy4wMS4wNCAwIC4wOC4wMS4xMi4wMWguMDFjLjMyLjAxLjYxIDAgLjc0IDAgLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMwIDItLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjLjkzIDAgMS41My4wNyAxLjkxLjEtLjI5LjQyLS40OC45LS41MSAxLjQtLjE0IDIuNTEgMi45MyAzLjQxIDUuNTEgMy4zNyA1LjEyLS4wNyA2LjU3LTMuNjIgNS41MS01LjUxLTEuMDktMS45NS0zLjQ0LTEuODctNS42OC0xLjg2LTQuMi4wMi0zLjQxLTIuNTktMS42OS0yLjQ5LjQuMDIuMi4xNCAxLjU3LjE0IDIuNDMgMCA0Ljc2LTEuNjYgNC43LTQuMzgtLjAxLS4yMy4wNS0xLjAzLS41My0yLjE0IDEuMTQuMDEuNjkgMCAyLjQxIDBsLS4wMSA3LjYzYzAgMy40NSAxLjY0IDQuMDMgMi44NyA0LjAzIDEuNzQgMCAzLjAxLTEuMTUgMy4yNC0xLjY4IDEuMDMgMS4xIDIuNDYgMS42OCA0LjEyIDEuNjggMy4xOSAwIDUuNi0yLjkzIDUuNi02Ljc4IDAtNS44LTMuNjUtNi45Ni01LjYxLTYuOTZ6TTk1LjYyIDIxLjcyYy4yMS0uMDEuMjcuMDggMi42NC4xNyAyLjQ1LjA2IDMuMzMuNzcgMy40OSAxLjQuMjYgMS4xMi0uNTMgMy41Mi00LjA1IDMuMjktMi4yMi0uMTUtMi44Ny0xLjItMy4wMy0xLjQ0LS44NC0xLjE2LS4xNi0zLjM1Ljk1LTMuNDJ6bTIuMDEtNC41N2MtMi4wOCAwLTIuNzgtMi0yLjc4LTMuOTEgMC0xLjk2LjU5LTMuNTggMi42Ny0zLjU4IDIuMTEgMCAyLjk1IDIuMTYgMi45NSA0LjA3LjAxIDEuOTMtLjg3IDMuNDItMi44NCAzLjQyem0xNi45OSA0LjgxYy0zLjAzIDAtNC4yMi0zLjc2LTQuMjItNi44MiAwLTIuNjUgMS4wNC01LjEgMy41Ny01LjEgMy4wOCAwIDQuMTkgMy4yOSA0LjE5IDYuNTEuMDEgMy44Ny0xLjM2IDUuNDEtMy41NCA1LjQxelxcXCI+XFxuICAgICAgPC9wYXRoPlxcbiAgICAgIDxwYXRoXFxuICAgICAgICBkPVxcXCJNMTMxLjExIDIwLjE5di01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNyAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMiAxLjY4djcuNjRjMCAyLTEuMzUgMS41Mi0xLjY2IDIuMDQtLjE1LjI3LjI1LjMzLjU5LjMzLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4yNiAwIC43My0uMi40NC0uNDQtLjY1LS40OS0xLjk0LjMxLTEuOTItMi4wM3pNNzcuNDEgOC4xNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNi4wMi4zNS43NyAxLjU3IDEuMDcgMS41N3ptLTE3LjMgNi45NmMtLjUxLS4yNC0xLjI3LS42OC0xLjY1LS44OC0xLjYzLS44OS0yLjI3LTEuNDctMi4zMS0yLjMtLjA4LTEuNDQgMS4xNS0yLjE5IDIuMjEtMi4wOCAyLjU0LS4wNCAyLjg4IDIuOCAzLjE0IDIuOC4zOSAwIC4yOC0uMzcuMjgtMS4yMSAwLS4yMS4wMy0xLjI3LS4xMy0xLjUyLS4zMS0uNDYtMi4xLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMi0uMTMgMC0uMjguMDItLjI4LjAyLTEuODEtLjAzLTMuNSAxLjExLTMuNDUgMy41My4wNSAyLjIxIDIuNjQgMy40NyA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjEtMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTIgMCAuNTEtLjAxLjk4LS4wMSAxLjM4LS4wNy4zNi0uMi43LS41NC43Mi0xLjI0LjA4LS45NC0xLjktLjk0LTIuOTV2LTYuNDNjLS4wNi0xLjk3LTEuNTQtMy4yNS0zLjgtMy4yNS0zLjA5IDAtNS4zMSAzLjgxLTQuMjUgNSAuMjUuMjggMS4yNi0uOCAxLjMyLS44NnMuMDgtLjEzLjA4LS4xM2MtLjAxLTEuMy45Ny0yLjk1IDIuMzctMy4wOSAxLjYtLjE1IDIuNCAxLjA0IDIuNCAyLjY1djIuMDljLTYuMDYgMS4yMS02LjkzIDMuMjItNi45MyA0Ljg3IDAgMi4yMSAxLjU1IDMuMiAzLjIzIDMuMiAxLjQ1IDAgMi44OC0uNjkgMy45Ni0xLjguMzQgMS4wMyAxLjAxIDEuNjUgMi4wMiAxLjYyLjM1LS4wMS40MS4wOSAxLjQ2LS4zNy4zNy0uMS4zNS0uMDkuNzctLjAxLjU2LjE5IDEuMzIuNTcgMi42Ni41NyAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTcgMC0xLjUtLjQzLTIuNDEtMi4zOS0zLjYzem0tOC40MyA0LjMyYzAgMS42NS0xLjY4IDIuNTItMi42IDIuNTItMS4zOCAwLTIuMzMtLjg5LTIuMzMtMi42NiAwLTIuNzMgMy4yOC0zLjIzIDQuOTQtMy42Ny0uMDEtLjAxLS4wMSAzLjgxLS4wMSAzLjgxem0yMTkuOTkuMTljLS4zMSAwLTEuMDcgMS4yOS0xLjA3IDEuNjMgMCAuMzQuNzcgMS42IDEuMDcgMS42LjMzIDAgMS4wNy0xLjIzIDEuMDctMS42cy0uNzMtMS42My0xLjA3LTEuNjN6bTMzLjcxIDEuMTJWOS45MmMwLS42MS0uMzQtLjc3LS40NC0uNzctLjM5IDAtLjYxLjEtLjg4LjE2LS4yNy4xLS41OC4yMy0xLjI5LjIzLS4xMyAwLS43OS0uMTItLjc2LjI1LjA0LjM3IDEuNTcuMTUgMS41OCAxLjIzdjcuODNjLS4xMiAxLjM3LTEuMjcgMi44OC0yLjY2IDIuODgtLjMyIDAtMi4zOS0uMjItMi4zNy0zLjY1VjkuOTJjMC0uNjEtLjM0LS43Ny0uNDQtLjc3LS4zOSAwLS42MS4xLS44OC4xNi0uMjcuMS0uNjEuMjItMS4zMi4xOS0uMzgtLjAyLS43OS0uMDctLjczLjI5LjA2LjMyIDEuNTkgMCAxLjU5IDEuMjN2Ny41MWMwIDIuNzQgMS42MSA0LjMyIDMuNTYgNC4zMiAxLjMgMCAyLjQ5LS4yOCAzLjI0LTEuOGguMDV2MS4zMmMwIC4xMy4wMy40OC4yMi40OC4zNyAwIC41Ni0uMy44My0uNC4yOS0uMDcuMzctLjMzIDEuMjgtLjQyLjM5LS4wNC44Mi0uMjQuODItLjUtLjExLS41My0xLjQuMDYtMS40LS43OHpNMjkwLjA5IDkuMTFjLTMuMjYgMC01Ljc3IDMuMjgtNS43NyA3LjEzIDAgMS43My40MiAzLjE1IDEuMTMgNC4yMy0uNzkuNTctMi4yMyAxLjEtNC45NiAxLjEtMi4xMyAwLTEuOTMtLjc0LTEuOTMtMi41NVY0LjU3YzAtMi42NiAxLjk5LTEuODkgMi4wMy0yLjM3LjAzLS4zNC0uMjgtLjI2LS42MS0uMjYtLjM4IDAtMS4wNy4xNS0yLjUyLjE1LTEuMjUgMC0yLjM0LS4xMi0yLjg4LS4xMi0uMzMgMC0uNjMuMS0uNTIuMzUuMjUuNTcgMi4xNC4wNSAyLjE0IDEuNjV2MTUuMWMwIDEuNDQuMjEgMi4zNi0uNDUgMi43My0uODEuNDktMS43Ni41MS0xLjY4LjgzLjA1LjE5LjQ1LjIuNjguMiAxLjAyIDAgMi40Mi0uMTMgMy40NC0uMTUgMS45NC0uMDYgMy44Ni4xMyA1Ljc5LjEzIDEuMTIgMCAxLjQtLjIyIDIuMjItMS4zMy4wMS0uMDIuMDItLjAzLjA0LS4wNSAxLjAxLjk0IDIuMzQgMS40NCAzLjg3IDEuNDQgMy4xOSAwIDUuNi0yLjkzIDUuNi02Ljc4LjAxLTUuODItMy42NS02Ljk4LTUuNjItNi45OHptLjI2IDEyLjg1Yy0zLjAzIDAtNC4yMi0zLjc2LTQuMjItNi44MiAwLTIuNjUgMS4wNC01LjEgMy41Ny01LjEgMy4wOCAwIDQuMTkgMy4yOSA0LjE5IDYuNTEuMDEgMy44Ny0xLjM2IDUuNDEtMy41NCA1LjQxem0tMzIuMDMtMTAuNDljLS43NS0uMzctMS44NS0xLjA0LTIuMzktMS4zNi0yLjM3LTEuMzctMy4zLTIuMjYtMy4zNy0zLjUyLS4xMi0yLjIxIDIuMDQtMy41MiAzLjU4LTMuMzUgMS45NiAwIDMuNTcgMS4xOSA0LjI0IDMuNzMuMDcuMjcuMzEuODkuNTYuODkuMjIgMCAuMjYtLjIuMjQtLjQ1bC0uMzMtNC4wMmMtLjAyLS4zMy0uMTQtLjQyLS4yNy0uNDItLjIyIDAtLjM2LjMzLS41Ni4zMy0uMzEgMC0xLjEtMS4xMS0zLjgtMS4wOS0uMTgtLjAxLS40My4wMi0uNDMuMDItMi42My0uMDUtNS4xIDEuNy01LjAyIDUuNC4wNyAzLjM3IDMuODUgNS4zIDUuODkgNi41OSAxLjUxLjkgMy4wOSAyLjM0IDMuMDQgMy45NS0uMDggMi40Ny0xLjYzIDQuMDgtMy41OCAzLjk0LTQuNTktLjA4LTMuOTYtNi4xMy00Ljc4LTYuMTMtLjU2IDAtLjQ1IDEuNTItLjQ2IDIuMzIgMCAxLjkyLS4wOCAzLjQ5LjE0IDMuNzcuMDcuMDkuMjkuMDUuNzQuMDUuOSAwIDIgMS4wNSA0LjY1IDEuMDUgMi45NS4wNSA1LjM4LTIuNjkgNS4zOC02LjI1LS4wMS0yLjE5LS42Mi0zLjU4LTMuNDctNS40NXptNTEuNjktMy4zMWMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6TTMxMi42NCAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMzIDAgLjc2LS44LjA3LS42OXptNS45OC02Ljg4Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA1IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjExLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMS0uMTMgMC0uMjguMDEtLjI4LjAxLTEuODEtLjAzLTMuNSAxLjExLTMuNDQgMy41My4wNSAyLjIxIDIuNjQgMy40NiA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjEtMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTItLjAxIDEuMjUtLjA2IDIuMjguMSAyLjQ2LjA1LjA2LjIuMDMuNS4wMy42MiAwIDEuMzguNjkgMy4xOS42OSAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTctLjAxLTEuNDgtLjQzLTIuMzktMi4zOS0zLjZ6bS00OC43MyA1LjY2Yy0uMjYuMTMtLjg1Ljc3LTIuMjguNzctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMnYtOC44MmwzLjM4LS4wMWMuMjIgMCAuNjUtMS40NC42Ny0xLjUyLjA0LS4xOC4xLS4zMy4xMi0uNDYuMDQtLjI4LS4xNy0uMy0uMzctLjAxLS4xNS4xNS0uMzIuNTUtLjk5LjU1aC0yLjgxYzAtMi40MS4wMy0zLjA0LS4zNS0zLjA0LS4zNiAwLS4zLjEtLjYzIDEuMTctLjU0IDEuNzktMi41MiAyLjU4LTMuMTUgMi45Ny0uMTUuMDgtLjE1LjExLS4xNS4xOS0uMDEuMjMuNzUuMTQgMi4zMS4xN2wtLjAxIDguMDdjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS44NyAwIDMuMjEtMS4zNCAzLjI4LTEuOC4wMy0uMjUgMC0uMjgtLjE1LS4yNnptLTgxLjMyLTEuMDljLS41NyAwLTEuNDIgMS42Mi0zLjY2IDEuNjItMS41OCAwLTQuMTctMS41My00LjE3LTYuNjZoNi45Yy42IDAgLjg4LjAzLjg4LS41MiAwLTEuMjUtMS40LTQuOTUtNC41OS00Ljk1LTMuMjQgMC01LjA4IDMuMzMtNS4wOCA3LjMxIDAgMi4wNSAxLjM1IDYuMzggNS4yNCA2LjM4IDIuMzMgMCA0LjU5LTIuMjQgNC41OS0yLjk1LS4wMS0uMTEtLjAxLS4yMy0uMTEtLjIzem0tNS4wOC05LjgxYzEuNDIgMCAyLjg4IDEuNTYgMi44OCAzLjMgMCAuNDYtLjE1LjYyLS41Mi42MmgtNS4xMWMwLTEuNzEgMS4xMy0zLjkyIDIuNzUtMy45MnptLTMxLjctNy4zM2MuMS0uMTYtLjI1LS4yNC0uMzctLjI0LS40MiAwLTEuMzcuMTEtMS44LjExLS44OSAwLTEuNjQtLjA5LTIuNTMtLjA5LS4wNyAwLS40Ni4wNS0uNDYuMTgtLjAxLjYzIDIuMTMtLjExIDIuMTMgMi42djEwLjU3YzAgMy4xMy0uOTkgNi40MS01LjI5IDYuNDEtMy4wOSAwLTQuNzYtMS45NC00Ljc2LTYuMTdWNC40MWMwLTEuOTEgMS40OS0xLjQ5IDEuNTItMS45Mi4wMy0uNDEtMS4zMy0uMTYtMS40My0uMTYtLjcxIDAtMS4yMS4wOC0xLjk1LjA4LS42MiAwLTEuMzctLjEtMS45Ny0uMS0uMTIgMC0uNTMtLjAyLS42MS4xNS0uMjMuNTYgMS45MS4yNiAxLjkxIDEuODN2MTAuOTJjMCA0LjA4IDEuMTQgOC4wOCA3LjE3IDcuOTcgNy4xNC0uMTIgNy4wMS02LjU0IDcuMDEtNy44M1Y1LjEyYy4wMS0yLjQzIDEuMi0yLjIgMS40My0yLjU3em0yOC4xOSA3LjI0Yy4xNy0uMi4yMi0uNTMtLjU3LS40Ni0uNDUgMC0uNzcuMDgtMS4yMi4wOC0uNTcgMC0uNjgtLjAyLTEuMjItLjA0LS42OC0uMDItLjg2LjA1LS44Mi4yNS4xMi42IDEuNTUuMDEgMS4zNiAxLjgtLjE2IDEuNS0uNjUgMi43OS0xLjE0IDQuMDdsLTEuNzMgNC42Mi0yLjU0LTcuN2MtLjMxLS45Ni0uNDUtMS40Ny0uNDUtMS41NyAwLS45NiAxLjE2LS43NSAxLjQyLTEuMTQuMTYtLjI2LS4xNy0uNC0uNTQtLjQtLjMxIDAtLjY3LjExLTEuNjMuMTMtLjc5LjAyLTEuMzYuMDItMS43LS4wNS0uODktLjE2LS44Mi4zMy0uNTEuNDhzLjQ2LjAxLjkxIDEuMzZsMy45MSAxMS4wNmMuMDguMjIuMTguNzcuNTIuNzcuMzkgMCAuMzktLjM5Ljg4LTEuNjkgMCAwIDMuNzUtMTAuNDggNC0xMC44Ni41MS0uNzQuODktLjUgMS4wNy0uNzF6bTE0LjQ3LS41Yy0xLjA3IDAtMS44IDEuMjgtMi4zMyAyLjE2aC0uMDVWOS41M2MwLS4zLS4xNS0uNDgtLjMtLjQ4LS40MSAwLS43Mi44MS0yLjg3IDEuMzMtLjEzLjAzLS40OC4xLS40OC4yOCAwIC42NCAxLjgyLS4xOSAxLjgyIDEuOTN2OC4wN2MwIDEuMjUtMS4yOSAxLjEyLTEuMjkgMS43NyAwIC4xOC4wOC4yNy4yOC4yNy4xNyAwIC42My0uMTIgMi4zMi0uMTIgMS40MSAwIDIuMDIuMTIgMi4zNy4xMi4yOCAwIC40MS0uMDYuNDEtLjM0IDAtLjk4LTIuMjUuNDgtMi4yNS0yLjM0di02Ljg4YzAtLjQuNi0xLjggMS42NC0xLjguOTEgMCAxLjAyLjcgMS41LjcuMyAwIC45MS0uOTEuOTEtMS4zOC0uMDEtLjU4LTEuMTYtMS4zNy0xLjY4LTEuMzd6bTMyLjU1LjFjLS4yNyAwLS45Ni4wNC0xLjU5LjA0LS43NiAwLTEuMTMtLjA5LTEuNDUtLjA5LS40OCAwLS45NiAwLS44Ny4zMi4xLjM2IDEuNzMuMjMgMS43MyAyLjAxIDAgLjIzIDAgLjUyLS4zMyAxLjcxbC0yLjA4IDYuNjMtMi45LTguMTVzLS4xNC0uMjYtLjE0LS43OWMwLTEuMzIgMS41NC0xLjE3IDEuNi0xLjQxLjA1LS4xOS0uMjEtLjQtLjYyLS40aC0zLjYzYy0uMDIgMC0uMDMuMDEtLjA1LjAxaC0yLjgxYzAtMi40MS4wMy0zLjA0LS4zNS0zLjA0LS4zNiAwLS4zLjEtLjYzIDEuMTctLjU0IDEuNzktMi41MiAyLjU4LTMuMTUgMi45Ny0uMTUuMDgtLjE1LjExLS4xNS4xOS0uMDEuMjIuNzYuMTQgMi4zMS4xN2wtLjAxIDguMDdjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS44NyAwIDMuMjEtMS4zMyAzLjI4LTEuOCAwLS4yNy0uMDQtLjI5LS4xOC0uMjctLjI2LjEzLS44NS43Ny0yLjI4Ljc3LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJWMTAuN3MyLjUtLjAxIDMuMjEtLjAxYy4wNC4wNi4wOC4xMy4xLjE5bDIuOTkgOC40NWMuMjQuNjkuMzkuOTIuNjggMi4xNC4xOS43OS4xMiAxLjUxLjEyIDEuNTEtLjI5IDEuMjctMS4wNyAxLjk5LTIuMjYgNC4zNC0uMTIuMjIgMS43MS0uMDIgMS44MS0uMDUuMTUtLjA1LjEzLS4wOS4zMS0uNDJsMS4zMi0zLjkzIDMuNjktMTEuMzRjLjU0LTEuOTggMS4zOS0xLjYyIDEuNTMtMS44OS4xMi0uMTMgMC0uMy0uMzMtLjN6XFxcIj5cXG4gICAgICA8L3BhdGg+XFxuICAgICAgPHBhdGhcXG4gICAgICAgIGQ9XFxcIk0yMjIuMjIgMjIuNzZsLS4wNy4xOVYyM2wuMDctLjI0em0tMTQuNzQtMTQuNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6TTIxMC4xMSAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMzIDAgLjc2LS44LjA3LS42OXpNMTY2LjUyIDguMTZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc3IDEuNTcgMS4wNyAxLjU3ek0xNjkuMTcgMjJjLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNGgtLjE3Yy0uNTQtLjEtMS4wNi0uMzItMS4wNS0xLjc5di01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNyAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMiAxLjY4djcuNjRjMCAyLTEuMzUgMS41Mi0xLjY2IDIuMDQtLjE1LjI3LjI1LjMzLjU5LjMzLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4wNCAwIC4wOS0uMDEuMTMtLjAxLjExIDAgLjIxLjAxLjM0LjAxLjI4IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zNC4wMi43NS0uNzguMDgtLjY3em0zMi43Mi02Ljg5Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA1IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAyLS4xMyAwLS4yOC4wMi0uMjguMDItMS44MS0uMDMtMy41IDEuMTEtMy40NSAzLjUzLjA1IDIuMjEgMi42NCAzLjQ2IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42Mi0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41MiAwIDEuMjUtLjA2IDIuMjguMSAyLjQ2LjA1LjA2LjIuMDMuNS4wMy42MiAwIDEuMzguNjkgMy4xOS42OSAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTcgMC0xLjQ3LS40Mi0yLjM4LTIuMzgtMy42elxcXCI+XFxuICAgICAgPC9wYXRoPlxcbiAgICA8L2c+XFxuICA8L3N2Zz5cXG48L2Rpdj5cXG48aGVhZGVyIHJvbGU9XFxcImJhbm5lclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8YSBjbGFzcz1cXFwic2l0ZS10aXRsZVxcXCIgaHJlZj1cXFwiZmlsZXMvaW5kZXguaHRtbFxcXCI+TnVyc2VyeSBTY2hvb2w8L2E+XFxuICA8L2Rpdj5cXG4gIDxkaXYgaWQ9XFxcIm1haW4tbWVudS1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3BidG5cXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJhYm91dFxcXCIgaHJlZj1cXFwiZmlsZXMvYWJvdXQuaHRtbFxcXCI+QWJvdXRcXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwicGFyZW50LWhhbmRib29rXFxcIiBocmVmPVxcXCJmaWxlcy9wYXJlbnRfaGFuZGJvb2suaHRtbFxcXCI+R2VuZXJhbDwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwidHVpdGlvblxcXCIgaHJlZj1cXFwiZmlsZXMvdHVpdGlvbi5odG1sXFxcIj5UdWl0aW9uPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJzdGFmZlxcXCIgaHJlZj1cXFwiZmlsZXMvc3RhZmYuaHRtbFxcXCI+U3RhZmY8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInZpc2l0XFxcIiBocmVmPVxcXCJmaWxlcy92aXNpdC5odG1sXFxcIj5WaXNpdDwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxhIGlkPVxcXCJjYWxlbmRhclxcXCIgaHJlZj1cXFwiZmlsZXMvY2FsZW5kYXIuaHRtbFxcXCI+Q2FsZW5kYXI8L2E+XFxuICAgICAgICA8YSBpZD1cXFwiY3VycmljdWx1bS1vdmVydmlld1xcXCIgaHJlZj1cXFwiZmlsZXMvY3VycmljdWx1bV9vdmVydmlldy5odG1sXFxcIj5DbGFzc2VzPC9hPlxcbiAgICAgICAgPGEgaWQ9XFxcImFwcGx5XFxcIiBocmVmPVxcXCJmaWxlcy9hcHBseS5odG1sXFxcIj5FbnJvbGw8L2E+XFxuICAgICAgICA8IS0tIDxhIGlkPVxcXCJjdXJyZW50LXN0dWRlbnRzXFxcIiBocmVmPVxcXCJmaWxlcy9jdXJyZW50X3N0dWRlbnRzLmh0bWxcXFwiPkN1cnJlbnQgU3R1ZGVudHM8L2E+IC0tPlxcbiAgICAgICAgPGEgaWQ9XFxcInN1bW1lci1jYW1wXFxcIiBocmVmPVxcXCJmaWxlcy9zdW1tZXJfY2FtcC5odG1sXFxcIj5TdW1tZXIgQ2FtcDwvYT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGJ0blxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImdldC1pbnZvbHZlZFxcXCIgaHJlZj1cXFwiZmlsZXMvZ2V0X2ludm9sdmVkLmh0bWxcXFwiPkdldCBJbnZvbHZlZDwvYT5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJudXJzZXJ5LXNjaG9vbC1tZXJjaGFuZGlzZVxcXCIgaHJlZj1cXFwiZmlsZXMvbnVyc2VyeV9zY2hvb2xfbWVyY2hhbmRpc2UuaHRtbFxcXCI+TnVyc2VyeSBTY2hvb2xcXG4gICAgICAgICAgICAgIE1lcmNoYW5kaXNlPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJwYXJlbnQtYXNzb2NpYXRpb25cXFwiIGhyZWY9XFxcImZpbGVzL3BhcmVudF9hc3NvY2lhdGlvbi5odG1sXFxcIj5QYXJlbnQgQXNzb2NpYXRpb248L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+IFxcbiAgICAgICAgPCEtLSA8YSBpZD1cXFwiZm9ybXNcXFwiIGhyZWY9XFxcImZpbGVzL2Zvcm1zLmh0bWxcXFwiPkZvcm1zPC9hPiAtLT5cXG4gICAgICAgIDxhIGlkPVxcXCJwYXJlbnQtcmVzb3VyY2VzXFxcIiBocmVmPVxcXCJmaWxlcy9wYXJlbnRfcmVzb3VyY2VzLmh0bWxcXFwiPlJlY29tbWVuZGVkIFJlYWRpbmdzPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvaGVhZGVyPlwiO1xuIiwiaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2NvcmUvZG9tL2RvY3VtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBTbGlkZXNob3cge1xuICBwdWJsaWMgc3RhdGljIHNldHVwQWxsKCkge1xuICAgIFNsaWRlc2hvdy5kaXNjYXJkQWxsKCk7XG4gICAgY29uc3Qgc2xpZGVzaG93cyA9IEQuY2xheihcInNsaWRlc2hvd1wiKTtcbiAgICBmb3IgKGxldCBzc0luZGV4ID0gMDsgc3NJbmRleCA8IHNsaWRlc2hvd3MubGVuZ3RoOyArK3NzSW5kZXgpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSBzbGlkZXNob3dzLml0ZW0oc3NJbmRleCk7XG4gICAgICBpZiAoZWxlbSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgU2xpZGVzaG93LnNsaWRlc2hvd3MucHVzaChuZXcgU2xpZGVzaG93KGVsZW0pKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc2NhcmRBbGwoKSB7XG4gICAgU2xpZGVzaG93LnNsaWRlc2hvd3MgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHNsaWRlc2hvd3M6IFNsaWRlc2hvd1tdID0gW107XG5cbiAgcHJpdmF0ZSBzbGlkZUluZGV4ID0gMDtcbiAgcHJpdmF0ZSBzbGlkZUNvdW50ID0gMDtcbiAgcHJpdmF0ZSBzbGlkZXM6IEVsZW1lbnRbXSA9IFtdO1xuICBwcml2YXRlIGRvdHM6IEVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3V0ZXI6IEVsZW1lbnQpIHtcbiAgICBELmVhY2hSZWN1cih0aGlzLm91dGVyLCAoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgY0xpc3QgPSBlbGVtLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjTGlzdC5jb250YWlucyhcInByZXYtc2xpZGVzaG93LWJ1dHRvblwiKSkge1xuICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLm1pbnVzU2xpZGUoMSkpO1xuICAgICAgfSBlbHNlIGlmIChjTGlzdC5jb250YWlucyhcIm5leHQtc2xpZGVzaG93LWJ1dHRvblwiKSkge1xuICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLnBsdXNTbGlkZSgxKSk7XG4gICAgICB9IGVsc2UgaWYgKGNMaXN0LmNvbnRhaW5zKFwic2xpZGVzaG93LWVudHJ5XCIpKSB7XG4gICAgICAgIHRoaXMuc2xpZGVzLnB1c2goZWxlbSk7XG4gICAgICB9IGVsc2UgaWYgKGNMaXN0LmNvbnRhaW5zKFwic2xpZGVzaG93LWRvdFwiKSkge1xuICAgICAgICB0aGlzLmRvdHMucHVzaChlbGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG90cy5sZW5ndGg7ICsraSkge1xuICAgICAgRC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZG90c1tpXSwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dTbGlkZShpKSk7XG4gICAgfVxuICAgIHRoaXMuc2xpZGVDb3VudCA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICB0aGlzLnNob3dTbGlkZSh0aGlzLnNsaWRlSW5kZXgpO1xuICB9XG5cbiAgcHVibGljIHBsdXNTbGlkZShuOiBudW1iZXIpIHtcbiAgICB0aGlzLnNob3dTbGlkZSgodGhpcy5zbGlkZUluZGV4ICs9IG4pKTtcbiAgfVxuICBwdWJsaWMgbWludXNTbGlkZShuOiBudW1iZXIpIHtcbiAgICB0aGlzLnNob3dTbGlkZSgodGhpcy5zbGlkZUluZGV4IC09IG4pKTtcbiAgfVxuICBwdWJsaWMgc2hvd1NsaWRlKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnNsaWRlSW5kZXggPSBpbmRleCAlIHRoaXMuc2xpZGVDb3VudDtcbiAgICB0aGlzLnNsaWRlSW5kZXggPSBNYXRoLm1heCh0aGlzLnNsaWRlSW5kZXgsIC0xICogdGhpcy5zbGlkZUluZGV4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xpZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAodGhpcy5zbGlkZXNbaV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZG90c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICAodGhpcy5zbGlkZXNbdGhpcy5zbGlkZUluZGV4XSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB0aGlzLmRvdHNbdGhpcy5zbGlkZUluZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0dXBUYWJNZW51KCkge1xuICAgIGxldCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRtLXRhYicpO1xuICAgIGxldCBoZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWItbWVudSAubmF2YmFyIGFcIik7XG4gICAgZnVuY3Rpb24gY2xpY2tUYWIoaW5kZXgpIHtcbiAgICAgICAgdGFicy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBpKSB7XG4gICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtY29udGVudFwiKTtcbiAgICAgICAgICAgIGhlYWRlcnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICB9KVxuICAgICAgICB0YWJzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtY29udGVudFwiKTtcbiAgICAgICAgaGVhZGVyc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLW1lbnUgLm5hdmJhciBhJykuZm9yRWFjaChmdW5jdGlvbih2YWwsIGkpIHtcbiAgICAgICAgdmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNsaWNrVGFiKGkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi9jb3JlL3V0aWxzL3FfcGFyYW1zJztcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLy4uL2NvcmUvZGF0YS1sb2cvZGF0YSc7XG5pbXBvcnQgeyBBY3Rpb25FbnVtIH0gZnJvbSAnLi8uLi9jb3JlL2RhdGEtbG9nL2V2ZW50JztcbmltcG9ydCB7IEQgfSBmcm9tICcuLy4uL2NvcmUvZG9tL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi8uLi9jb3JlL2RvbS9lbGVtZW50cyc7XG5pbXBvcnQgeyBTY3JvbGwgfSBmcm9tICcuLy4uL2NvcmUvZG9tL3Njcm9sbCc7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnLi8uLi9jb3JlL3JvdXRlci9oaXN0b3J5JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTW9kZSwgUm91dGVyTW9kdWxlIH0gZnJvbSAnLi8uLi9jb3JlL3JvdXRlci9yb3V0ZXInO1xuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJy4vLi4vY29yZS90cmFja2VyL3RyYWNrZXInO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0gfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXInO1xuaW1wb3J0IHsgSURHZW5lcmF0b3IgfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yJztcbmltcG9ydCB7IHdhaXRVbnRpbFJlYWR5IH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL3JlYWR5JztcbmltcG9ydCB7IHNjZW5hcmlvcywgU2NlbmFyaW8gfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvc2NlbmFyaW9zJztcblxuY29uc3Qgc2V0dXAgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgd2FpdFVudGlsUmVhZHkoKTtcbiAgICBjb25zdCBzY2VuYXJpbyA9IHNjZW5hcmlvcy5maW5kKChzY2VuKSA9PiBzY2VuLnRhZyA9PT0gcGFyYW1zLnRhZyk7XG4gICAgaWYgKCFwYXJhbXMuc2FuZGJveCkge1xuICAgICAgICBpZiAoc2NlbmFyaW8gPT09IG51bGwgfHwgc2NlbmFyaW8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWxlcnQoJ1RoaXMgSElUIGlzIGJyb2tlbiBhbmQgY2Fubm90IGJlIGNvbXBsZXRlZCBhdCB0aGlzIHRpbWUuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUcmFja2VyLmxvYWRTY2VuYXJpbyhzY2VuYXJpbyBhcyBTY2VuYXJpbyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVHJhY2tlci5zdGFydCh7XG4gICAgICAgIGtleVByZWZpeDogJ2luZm9ybWF0aW9uLWZvcmFnaW5nJyxcbiAgICAgICAgYnVja2V0TmFtZTogJ2NzZS0yNTYtbG9nJyxcbiAgICAgICAgYWxsb3dTdWJtaXNzaW9uOiB7XG4gICAgICAgICAgICBhbGxvdygpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IEQuaWQoJ3RleHQtYXJlYScpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRBcmVhLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRBcmVhLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdZb3UgbXVzdCBmaWxsIG91dCB0aGUgdGV4dCBib3ggdG8gdHVybiB0aGlzIEhJVCBpbi4nO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnVGhlcmUgd2FzIGFuIGVycm9yIGZpbGwgb3V0IHRoZSBmb3JtIGFuZCB0cnkgYWdhaW4uJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlU3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5yZXNwb25zZSA9IChELmlkKFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1hcmVhJ1xuICAgICAgICAgICAgICAgICkgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBkZWJ1Z0xldmVsOiBEZWJ1Z0xldmVsRW51bS5OT05FLFxuXG4gICAgICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIHJvdXRlclxuICAgICAgICAgICAgUm91dGVyLmRlZmF1bHRBbGxvd2FuY2VzT24oKTtcbiAgICAgICAgICAgIFJvdXRlci5jb25maWd1cmUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IFJvdXRlck1vZHVsZS5BLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7IG1vZGU6IFJvdXRlck1vZGUuT0ZGLCBtb2R1bGU6IFJvdXRlck1vZHVsZS5GT1JNIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogUm91dGVyTW9kdWxlLklNRyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICdmaWxlcy8nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgSGlzdG9yeS5zZXR1cCh3aW5kb3cubG9jYXRpb24uaHJlZiwgeyB3cmFwcGVyOiB0cnVlIH0pO1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIGh0bWwgbG9hZGVyIHBvc3Qgb3BlcmF0aW9uXG4gICAgICAgICAgICBIVE1MTG9hZGVyLmZpbmlzaCgpO1xuICAgICAgICAgICAgSFRNTExvYWRlci5yZWdpc3RlclBvc3RMb2FkRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgSURHZW5lcmF0b3IucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBJREdlbmVyYXRvci5hdHRhY2hJZHNUb0FsbEVsZW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgUm91dGVyLnNldHVwKEVsZW1lbnRzLmh0bWxMb2MpO1xuICAgICAgICAgICAgICAgIFNjcm9sbC5wcm9taXNlKDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25maWd1cmUgbGlzdGVuZXJzIG9uIGh0bWwgbG9jXG4gICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudHMuaHRtbExvYywgQWN0aW9uRW51bS5DTElDSywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldiA9IGUgYXMgTW91c2VFdmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGV2LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGV2LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgIGlkOiAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoQWN0aW9uRW51bS5DTElDSykob2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKEVsZW1lbnRzLmRvY3VtZW50LCAna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ID0gZSBhcyBLZXlib2FyZEV2ZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBldi5rZXksXG4gICAgICAgICAgICAgICAgICAgIGlkOiAoZXYuc3JjRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uQlVUVE9OKShvYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTUEVDSUFMIENBU0U6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBkb2VzIG5vdCBiZWhhdmUgdGhlIHNhbWUgd2F5IGFzIGRvY3VtZW50IHNvIHRoZSBiZWxvdyBmdW5jdGlvbiBtdXN0IGJlaGF2ZSBkaWZmZXJlbnRseSB0aGFuIHRoZSBsaXN0ZW5lcnMgYWJvdmUuXG4gICAgICAgICAgICBjb25zdCBzRWxlbSA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBzRWxlbS5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gc0VsZW0uc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhUcmFja2VyLmxhc3RQb3MueCAtIGR4KSA+IDEwIHx8XG4gICAgICAgICAgICAgICAgICAgIChNYXRoLmFicyhUcmFja2VyLmxhc3RQb3MueSAtIGR5KSA+IDEwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBkdGltZSAtIFRyYWNrZXIubGFzdFBvcy50aW1lID4gMTAwKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmxhc3RQb3MueCA9IGR4O1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmxhc3RQb3MueSA9IGR5O1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmxhc3RQb3MudGltZSA9IGR0aW1lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7IHg6IGR4LCB5OiBkeSB9O1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uU0NST0xMKShvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIHRyYWNrZWQgZXZlbnRzXG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5ISVNUT1JZKTtcbiAgICAgICAgICAgIFRyYWNrZXIucmVnaXN0ZXJFdmVudChBY3Rpb25FbnVtLkJVVFRPTik7XG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5DTElDSyk7XG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5TQ1JPTEwpO1xuICAgICAgICAgICAgLy8gbG9hZCBmaXJzdCBwYWdlXG4gICAgICAgICAgICBhd2FpdCBSb3V0ZXIubG9hZCgnZmlsZXMvaW5kZXguaHRtbCcpO1xuICAgICAgICB9LFxuICAgIH0pO1xufTtcblxuc2V0dXAoKTtcbiJdfQ==
