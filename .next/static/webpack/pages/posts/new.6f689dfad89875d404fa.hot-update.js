webpackHotUpdate_N_E("pages/posts/new",{

/***/ "./src/Components/Features/Posts/Model/saga.ts":
/*!*****************************************************!*\
  !*** ./src/Components/Features/Posts/Model/saga.ts ***!
  \*****************************************************/
/*! exports provided: rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootSaga", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _API_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @API/index */ "./src/Components/API/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/Components/Features/Posts/Model/actions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/Components/Features/Posts/Model/types.ts");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getPostsSaga),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(createPostSaga),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deletePostSaga),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(viewPostSaga),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(editPostSaga),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sendCommentPostSaga),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);






function getPostsSaga() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getPostsSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(true));

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_2__["API"].PostsAPI.getPosts);

        case 5:
          response = _context.sent;
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setPosts(response.data));

        case 8:
          _context.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 10:
          _context.next = 17;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);
          _context.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 16:
          console.log(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 12]]);
}

function createPostSaga(_ref) {
  var payload, data, push, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function createPostSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = _ref.payload;
          data = payload.data, push = payload.push;
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(true));

        case 4:
          _context2.prev = 4;
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_2__["API"].PostsAPI.createPost, data);

        case 7:
          _context2.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_2__["API"].PostsAPI.getPosts);

        case 9:
          response = _context2.sent;
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setPosts(response.data));

        case 12:
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 14:
          _context2.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(push('/'));

        case 16:
          _context2.next = 23;
          break;

        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](4);
          _context2.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 22:
          console.log(_context2.t0);

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[4, 18]]);
}

function deletePostSaga(_ref2) {
  var payload, id, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deletePostSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = _ref2.payload;
          id = payload.id;
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(true));

        case 4:
          _context3.prev = 4;
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_2__["API"].PostsAPI.deletePost, id);

        case 7:
          _context3.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_2__["API"].PostsAPI.getPosts);

        case 9:
          response = _context3.sent;
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setPosts(response.data));

        case 12:
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 14:
          _context3.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(push('/'));

        case 16:
          _context3.next = 23;
          break;

        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](4);
          _context3.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 22:
          console.log(_context3.t0);

        case 23:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[4, 18]]);
}

function viewPostSaga(_ref3) {
  var payload, id, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function viewPostSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          payload = _ref3.payload;
          id = payload.id;
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(true));

        case 4:
          _context4.prev = 4;
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_2__["API"].PostsAPI.viewPost, id);

        case 7:
          response = _context4.sent;
          _context4.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setPost(response.data));

        case 10:
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 12:
          _context4.next = 19;
          break;

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](4);
          _context4.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 18:
          console.log(_context4.t0);

        case 19:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[4, 14]]);
}

function editPostSaga(_ref4) {
  var payload, id, data, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function editPostSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          payload = _ref4.payload;
          id = payload.id, data = payload.data;
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(true));

        case 4:
          _context5.prev = 4;
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_2__["API"].PostsAPI.updatePost, id, data);

        case 7:
          _context5.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_2__["API"].PostsAPI.viewPost, id);

        case 9:
          response = _context5.sent;
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setPost(response.data));

        case 12:
          _context5.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 14:
          _context5.next = 21;
          break;

        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](4);
          _context5.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 20:
          console.log(_context5.t0);

        case 21:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[4, 16]]);
}

function sendCommentPostSaga(_ref5) {
  var payload, postId, body, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sendCommentPostSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          payload = _ref5.payload;
          console.log('se');
          postId = payload.postId, body = payload.body;
          _context6.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(true));

        case 5:
          _context6.prev = 5;
          _context6.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_2__["API"].CommentsAPI.createComments, {
            postId: postId,
            body: body
          });

        case 8:
          _context6.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_2__["API"].PostsAPI.viewPost, postId);

        case 10:
          response = _context6.sent;
          _context6.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setPost(response.data));

        case 13:
          _context6.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 15:
          _context6.next = 22;
          break;

        case 17:
          _context6.prev = 17;
          _context6.t0 = _context6["catch"](5);
          _context6.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 21:
          console.log(_context6.t0);

        case 22:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[5, 17]]);
}

function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_4__["GET_POSTS"], getPostsSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_4__["CREATE_POST"], createPostSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_4__["DELETE_POST"], deletePostSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_4__["VIEW_POST"], viewPostSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_4__["EDIT_POST"], editPostSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_4__["SEND_MESSAGE"], sendCommentPostSaga)]);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvTW9kZWwvc2FnYS50cyJdLCJuYW1lcyI6WyJnZXRQb3N0c1NhZ2EiLCJjcmVhdGVQb3N0U2FnYSIsImRlbGV0ZVBvc3RTYWdhIiwidmlld1Bvc3RTYWdhIiwiZWRpdFBvc3RTYWdhIiwic2VuZENvbW1lbnRQb3N0U2FnYSIsInJvb3RTYWdhIiwicHV0IiwiYWN0aW9ucyIsInNldExvYWRpbmciLCJjYWxsIiwiQVBJIiwiUG9zdHNBUEkiLCJnZXRQb3N0cyIsInJlc3BvbnNlIiwic2V0UG9zdHMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJwdXNoIiwiY3JlYXRlUG9zdCIsImlkIiwiZGVsZXRlUG9zdCIsInZpZXdQb3N0Iiwic2V0UG9zdCIsInVwZGF0ZVBvc3QiLCJwb3N0SWQiLCJib2R5IiwiQ29tbWVudHNBUEkiLCJjcmVhdGVDb21tZW50cyIsImFsbCIsInRha2VFdmVyeSIsInR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FLVUEsWTttR0FnQkFDLGM7bUdBbUJBQyxjO21HQW9CQUMsWTttR0FrQkFDLFk7bUdBaUJBQyxtQjttR0FlT0MsUTs7QUE5R2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVVOLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQyxpQkFBTU8sOERBQUcsQ0FBQ0MsZ0RBQU8sQ0FBQ0MsVUFBUixDQUFtQixJQUFuQixDQUFELENBQVQ7O0FBREQ7QUFBQTtBQUFBO0FBR21CLGlCQUFNQywrREFBSSxDQUFDQyw4Q0FBRyxDQUFDQyxRQUFKLENBQWFDLFFBQWQsQ0FBVjs7QUFIbkI7QUFHUUMsa0JBSFI7QUFBQTtBQUlFLGlCQUFNUCw4REFBRyxDQUFDQyxnREFBTyxDQUFDTyxRQUFSLENBQWlCRCxRQUFRLENBQUNFLElBQTFCLENBQUQsQ0FBVDs7QUFKRjtBQUFBO0FBS0UsaUJBQU1ULDhEQUFHLENBQUNDLGdEQUFPLENBQUNDLFVBQVIsQ0FBbUIsS0FBbkIsQ0FBRCxDQUFUOztBQUxGO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9FLGlCQUFNRiw4REFBRyxDQUFDQyxnREFBTyxDQUFDQyxVQUFSLENBQW1CLEtBQW5CLENBQUQsQ0FBVDs7QUFQRjtBQVFFUSxpQkFBTyxDQUFDQyxHQUFSOztBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWdCQSxTQUFVakIsY0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkJrQixpQkFBM0IsUUFBMkJBLE9BQTNCO0FBQ1NILGNBRFQsR0FDd0JHLE9BRHhCLENBQ1NILElBRFQsRUFDZUksSUFEZixHQUN3QkQsT0FEeEIsQ0FDZUMsSUFEZjtBQUFBO0FBRUMsaUJBQU1iLDhEQUFHLENBQUNDLGdEQUFPLENBQUNDLFVBQVIsQ0FBbUIsSUFBbkIsQ0FBRCxDQUFUOztBQUZEO0FBQUE7QUFBQTtBQUlFLGlCQUFNQywrREFBSSxDQUFDQyw4Q0FBRyxDQUFDQyxRQUFKLENBQWFTLFVBQWQsRUFBMEJMLElBQTFCLENBQVY7O0FBSkY7QUFBQTtBQUttQixpQkFBTU4sK0RBQUksQ0FBQ0MsOENBQUcsQ0FBQ0MsUUFBSixDQUFhQyxRQUFkLENBQVY7O0FBTG5CO0FBS1FDLGtCQUxSO0FBQUE7QUFNRSxpQkFBTVAsOERBQUcsQ0FBQ0MsZ0RBQU8sQ0FBQ08sUUFBUixDQUFpQkQsUUFBUSxDQUFDRSxJQUExQixDQUFELENBQVQ7O0FBTkY7QUFBQTtBQU9FLGlCQUFNVCw4REFBRyxDQUFDQyxnREFBTyxDQUFDQyxVQUFSLENBQW1CLEtBQW5CLENBQUQsQ0FBVDs7QUFQRjtBQUFBO0FBUUUsaUJBQU1GLDhEQUFHLENBQUNhLElBQUksQ0FBQyxHQUFELENBQUwsQ0FBVDs7QUFSRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVRSxpQkFBTWIsOERBQUcsQ0FBQ0MsZ0RBQU8sQ0FBQ0MsVUFBUixDQUFtQixLQUFuQixDQUFELENBQVQ7O0FBVkY7QUFXRVEsaUJBQU8sQ0FBQ0MsR0FBUjs7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFtQkEsU0FBVWhCLGNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJCaUIsaUJBQTNCLFNBQTJCQSxPQUEzQjtBQUNTRyxZQURULEdBQ2dCSCxPQURoQixDQUNTRyxFQURUO0FBQUE7QUFFQyxpQkFBTWYsOERBQUcsQ0FBQ0MsZ0RBQU8sQ0FBQ0MsVUFBUixDQUFtQixJQUFuQixDQUFELENBQVQ7O0FBRkQ7QUFBQTtBQUFBO0FBSUUsaUJBQU1DLCtEQUFJLENBQUNDLDhDQUFHLENBQUNDLFFBQUosQ0FBYVcsVUFBZCxFQUEwQkQsRUFBMUIsQ0FBVjs7QUFKRjtBQUFBO0FBS21CLGlCQUFNWiwrREFBSSxDQUFDQyw4Q0FBRyxDQUFDQyxRQUFKLENBQWFDLFFBQWQsQ0FBVjs7QUFMbkI7QUFLUUMsa0JBTFI7QUFBQTtBQU1FLGlCQUFNUCw4REFBRyxDQUFDQyxnREFBTyxDQUFDTyxRQUFSLENBQWlCRCxRQUFRLENBQUNFLElBQTFCLENBQUQsQ0FBVDs7QUFORjtBQUFBO0FBT0UsaUJBQU1ULDhEQUFHLENBQUNDLGdEQUFPLENBQUNDLFVBQVIsQ0FBbUIsS0FBbkIsQ0FBRCxDQUFUOztBQVBGO0FBQUE7QUFRRSxpQkFBTUYsOERBQUcsQ0FBQ2EsSUFBSSxDQUFDLEdBQUQsQ0FBTCxDQUFUOztBQVJGO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVFLGlCQUFNYiw4REFBRyxDQUFDQyxnREFBTyxDQUFDQyxVQUFSLENBQW1CLEtBQW5CLENBQUQsQ0FBVDs7QUFWRjtBQVdFUSxpQkFBTyxDQUFDQyxHQUFSOztBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9CQSxTQUFVZixZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QmdCLGlCQUF6QixTQUF5QkEsT0FBekI7QUFDU0csWUFEVCxHQUNnQkgsT0FEaEIsQ0FDU0csRUFEVDtBQUFBO0FBRUMsaUJBQU1mLDhEQUFHLENBQUNDLGdEQUFPLENBQUNDLFVBQVIsQ0FBbUIsSUFBbkIsQ0FBRCxDQUFUOztBQUZEO0FBQUE7QUFBQTtBQUltQixpQkFBTUMsK0RBQUksQ0FBQ0MsOENBQUcsQ0FBQ0MsUUFBSixDQUFhWSxRQUFkLEVBQXdCRixFQUF4QixDQUFWOztBQUpuQjtBQUlRUixrQkFKUjtBQUFBO0FBS0UsaUJBQU1QLDhEQUFHLENBQUNDLGdEQUFPLENBQUNpQixPQUFSLENBQWdCWCxRQUFRLENBQUNFLElBQXpCLENBQUQsQ0FBVDs7QUFMRjtBQUFBO0FBTUUsaUJBQU1ULDhEQUFHLENBQUNDLGdEQUFPLENBQUNDLFVBQVIsQ0FBbUIsS0FBbkIsQ0FBRCxDQUFUOztBQU5GO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFFLGlCQUFNRiw4REFBRyxDQUFDQyxnREFBTyxDQUFDQyxVQUFSLENBQW1CLEtBQW5CLENBQUQsQ0FBVDs7QUFSRjtBQVNFUSxpQkFBTyxDQUFDQyxHQUFSOztBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCQSxTQUFVZCxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QmUsaUJBQXpCLFNBQXlCQSxPQUF6QjtBQUNTRyxZQURULEdBQ3NCSCxPQUR0QixDQUNTRyxFQURULEVBQ2FOLElBRGIsR0FDc0JHLE9BRHRCLENBQ2FILElBRGI7QUFBQTtBQUVDLGlCQUFNVCw4REFBRyxDQUFDQyxnREFBTyxDQUFDQyxVQUFSLENBQW1CLElBQW5CLENBQUQsQ0FBVDs7QUFGRDtBQUFBO0FBQUE7QUFJRSxpQkFBTUMsK0RBQUksQ0FBQ0MsOENBQUcsQ0FBQ0MsUUFBSixDQUFhYyxVQUFkLEVBQTBCSixFQUExQixFQUE4Qk4sSUFBOUIsQ0FBVjs7QUFKRjtBQUFBO0FBS21CLGlCQUFNTiwrREFBSSxDQUFDQyw4Q0FBRyxDQUFDQyxRQUFKLENBQWFZLFFBQWQsRUFBd0JGLEVBQXhCLENBQVY7O0FBTG5CO0FBS1FSLGtCQUxSO0FBQUE7QUFNRSxpQkFBTVAsOERBQUcsQ0FBQ0MsZ0RBQU8sQ0FBQ2lCLE9BQVIsQ0FBZ0JYLFFBQVEsQ0FBQ0UsSUFBekIsQ0FBRCxDQUFUOztBQU5GO0FBQUE7QUFPRSxpQkFBTVQsOERBQUcsQ0FBQ0MsZ0RBQU8sQ0FBQ0MsVUFBUixDQUFtQixLQUFuQixDQUFELENBQVQ7O0FBUEY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0UsaUJBQU1GLDhEQUFHLENBQUNDLGdEQUFPLENBQUNDLFVBQVIsQ0FBbUIsS0FBbkIsQ0FBRCxDQUFUOztBQVRGO0FBVUVRLGlCQUFPLENBQUNDLEdBQVI7O0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJBLFNBQVViLG1CQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQ2MsaUJBQWhDLFNBQWdDQSxPQUFoQztBQUNDRixpQkFBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNRUyxnQkFGVCxHQUUwQlIsT0FGMUIsQ0FFU1EsTUFGVCxFQUVpQkMsSUFGakIsR0FFMEJULE9BRjFCLENBRWlCUyxJQUZqQjtBQUFBO0FBR0MsaUJBQU1yQiw4REFBRyxDQUFDQyxnREFBTyxDQUFDQyxVQUFSLENBQW1CLElBQW5CLENBQUQsQ0FBVDs7QUFIRDtBQUFBO0FBQUE7QUFLRSxpQkFBTUMsK0RBQUksQ0FBQ0MsOENBQUcsQ0FBQ2tCLFdBQUosQ0FBZ0JDLGNBQWpCLEVBQWlDO0FBQUVILGtCQUFNLEVBQU5BLE1BQUY7QUFBVUMsZ0JBQUksRUFBSkE7QUFBVixXQUFqQyxDQUFWOztBQUxGO0FBQUE7QUFNbUIsaUJBQU1sQiwrREFBSSxDQUFDQyw4Q0FBRyxDQUFDQyxRQUFKLENBQWFZLFFBQWQsRUFBd0JHLE1BQXhCLENBQVY7O0FBTm5CO0FBTVFiLGtCQU5SO0FBQUE7QUFPRSxpQkFBTVAsOERBQUcsQ0FBQ0MsZ0RBQU8sQ0FBQ2lCLE9BQVIsQ0FBZ0JYLFFBQVEsQ0FBQ0UsSUFBekIsQ0FBRCxDQUFUOztBQVBGO0FBQUE7QUFRRSxpQkFBTVQsOERBQUcsQ0FBQ0MsZ0RBQU8sQ0FBQ0MsVUFBUixDQUFtQixLQUFuQixDQUFELENBQVQ7O0FBUkY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUUsaUJBQU1GLDhEQUFHLENBQUNDLGdEQUFPLENBQUNDLFVBQVIsQ0FBbUIsS0FBbkIsQ0FBRCxDQUFUOztBQVZGO0FBV0VRLGlCQUFPLENBQUNDLEdBQVI7O0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZU8sU0FBVVosUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTixpQkFBTXlCLDhEQUFHLENBQUMsQ0FDVEMsb0VBQVMsQ0FBQ0MsZ0RBQUQsRUFBa0JqQyxZQUFsQixDQURBLEVBRVRnQyxvRUFBUyxDQUFDQyxrREFBRCxFQUFvQmhDLGNBQXBCLENBRkEsRUFHVCtCLG9FQUFTLENBQUNDLGtEQUFELEVBQW9CL0IsY0FBcEIsQ0FIQSxFQUlUOEIsb0VBQVMsQ0FBQ0MsZ0RBQUQsRUFBa0I5QixZQUFsQixDQUpBLEVBS1Q2QixvRUFBUyxDQUFDQyxnREFBRCxFQUFrQjdCLFlBQWxCLENBTEEsRUFNVDRCLG9FQUFTLENBQUNDLG1EQUFELEVBQXFCNUIsbUJBQXJCLENBTkEsQ0FBRCxDQUFUOztBQURNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL25ldy42ZjY4OWRmYWQ4OTg3NWQ0MDRmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FsbCwgcHV0LCBhbGwsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IHsgQVBJLCBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvaW5kZXgnXHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnXHJcblxyXG5mdW5jdGlvbiogZ2V0UG9zdHNTYWdhKCkge1xyXG5cdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcodHJ1ZSkpXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChBUEkuUG9zdHNBUEkuZ2V0UG9zdHMpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRQb3N0cyhyZXNwb25zZS5kYXRhKSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuaW50ZXJmYWNlIENyZWF0ZVBvc3RUeXBlIHtcclxuXHR0eXBlOiBzdHJpbmdcclxuXHRwYXlsb2FkOiB7IGRhdGE6IFBvc3RUeXBlOyBwdXNoOiBhbnkgfVxyXG59XHJcbmZ1bmN0aW9uKiBjcmVhdGVQb3N0U2FnYSh7IHBheWxvYWQgfTogQ3JlYXRlUG9zdFR5cGUpIHtcclxuXHRjb25zdCB7IGRhdGEsIHB1c2ggfSA9IHBheWxvYWRcclxuXHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKHRydWUpKVxyXG5cdHRyeSB7XHJcblx0XHR5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS5jcmVhdGVQb3N0LCBkYXRhKVxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS5nZXRQb3N0cylcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldFBvc3RzKHJlc3BvbnNlLmRhdGEpKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0XHR5aWVsZCBwdXQocHVzaCgnLycpKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuaW50ZXJmYWNlIERlbGV0ZVBvc3RUeXBlIHtcclxuXHR0eXBlOiBzdHJpbmdcclxuXHRwYXlsb2FkOiB7IGlkOiBudW1iZXIgfVxyXG59XHJcbmZ1bmN0aW9uKiBkZWxldGVQb3N0U2FnYSh7IHBheWxvYWQgfTogRGVsZXRlUG9zdFR5cGUpIHtcclxuXHRjb25zdCB7IGlkIH0gPSBwYXlsb2FkXHJcblx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyh0cnVlKSlcclxuXHR0cnkge1xyXG5cdFx0eWllbGQgY2FsbChBUEkuUG9zdHNBUEkuZGVsZXRlUG9zdCwgaWQpXHJcblx0XHRjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLmdldFBvc3RzKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0UG9zdHMocmVzcG9uc2UuZGF0YSkpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdHlpZWxkIHB1dChwdXNoKCcvJykpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5pbnRlcmZhY2UgVmlld1Bvc3RUeXBlIHtcclxuXHR0eXBlOiBzdHJpbmdcclxuXHRwYXlsb2FkOiB7IGlkOiBudW1iZXIgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogdmlld1Bvc3RTYWdhKHsgcGF5bG9hZCB9OiBWaWV3UG9zdFR5cGUpIHtcclxuXHRjb25zdCB7IGlkIH0gPSBwYXlsb2FkXHJcblx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyh0cnVlKSlcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS52aWV3UG9zdCwgaWQpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRQb3N0KHJlc3BvbnNlLmRhdGEpKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5pbnRlcmZhY2UgRWRpdFBvc3RUeXBlIHtcclxuXHR0eXBlOiBzdHJpbmdcclxuXHRwYXlsb2FkOiB7IGlkOiBudW1iZXI7IGRhdGE6IFBvc3RUeXBlIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGVkaXRQb3N0U2FnYSh7IHBheWxvYWQgfTogRWRpdFBvc3RUeXBlKSB7XHJcblx0Y29uc3QgeyBpZCwgZGF0YSB9ID0gcGF5bG9hZFxyXG5cdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcodHJ1ZSkpXHJcblx0dHJ5IHtcclxuXHRcdHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLnVwZGF0ZVBvc3QsIGlkLCBkYXRhKVxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS52aWV3UG9zdCwgaWQpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRQb3N0KHJlc3BvbnNlLmRhdGEpKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0fVxyXG59XHJcbmludGVyZmFjZSBTZW5kQ29tbWVudFR5cGUge1xyXG5cdHR5cGU6IHN0cmluZ1xyXG5cdHBheWxvYWQ6IHsgYm9keTogc3RyaW5nOyBwb3N0SWQ6IG51bWJlciB9XHJcbn1cclxuZnVuY3Rpb24qIHNlbmRDb21tZW50UG9zdFNhZ2EoeyBwYXlsb2FkIH06IFNlbmRDb21tZW50VHlwZSkge1xyXG5cdGNvbnNvbGUubG9nKCdzZScpXHJcblx0Y29uc3QgeyBwb3N0SWQsIGJvZHkgfSA9IHBheWxvYWRcclxuXHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKHRydWUpKVxyXG5cdHRyeSB7XHJcblx0XHR5aWVsZCBjYWxsKEFQSS5Db21tZW50c0FQSS5jcmVhdGVDb21tZW50cywgeyBwb3N0SWQsIGJvZHkgfSlcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChBUEkuUG9zdHNBUEkudmlld1Bvc3QsIHBvc3RJZClcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldFBvc3QocmVzcG9uc2UuZGF0YSkpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdHRha2VFdmVyeSh0eXBlcy5HRVRfUE9TVFMsIGdldFBvc3RzU2FnYSksXHJcblx0XHR0YWtlRXZlcnkodHlwZXMuQ1JFQVRFX1BPU1QsIGNyZWF0ZVBvc3RTYWdhKSxcclxuXHRcdHRha2VFdmVyeSh0eXBlcy5ERUxFVEVfUE9TVCwgZGVsZXRlUG9zdFNhZ2EpLFxyXG5cdFx0dGFrZUV2ZXJ5KHR5cGVzLlZJRVdfUE9TVCwgdmlld1Bvc3RTYWdhKSxcclxuXHRcdHRha2VFdmVyeSh0eXBlcy5FRElUX1BPU1QsIGVkaXRQb3N0U2FnYSksXHJcblx0XHR0YWtlRXZlcnkodHlwZXMuU0VORF9NRVNTQUdFLCBzZW5kQ29tbWVudFBvc3RTYWdhKSxcclxuXHRdKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=