/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _app_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.styles.scss */ "./src/app.styles.scss");
/* harmony import */ var _components_MenuContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MenuContainer */ "./src/components/MenuContainer.tsx");
/* harmony import */ var _components_MenuDataPrinter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MenuDataPrinter */ "./src/components/MenuDataPrinter.tsx");



const App = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-container"
  }, /*#__PURE__*/React.createElement(_components_MenuContainer__WEBPACK_IMPORTED_MODULE_1__.MenuContainer, null)), /*#__PURE__*/React.createElement(_components_MenuDataPrinter__WEBPACK_IMPORTED_MODULE_2__.MenuDataPrinter, null));
};

/***/ }),

/***/ "./src/app.types.ts":
/*!**************************!*\
  !*** ./src/app.types.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointName: () => (/* binding */ EndpointName)
/* harmony export */ });
const EndpointName = {
  SAVE: 'save'
};

// reducers

/***/ }),

/***/ "./src/components/LanguagesTabsBar.tsx":
/*!*********************************************!*\
  !*** ./src/components/LanguagesTabsBar.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguagesTabsBar: () => (/* binding */ LanguagesTabsBar)
/* harmony export */ });
/* harmony import */ var _hooks_useMenuMetaState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useMenuMetaState */ "./src/hooks/useMenuMetaState.ts");
/* harmony import */ var _LanguagesTabsBar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguagesTabsBar.scss */ "./src/components/LanguagesTabsBar.scss");


const LanguagesTabsBar = () => {
  const {
    state,
    dispatchers: {
      setActiveLanguageTab
    }
  } = (0,_hooks_useMenuMetaState__WEBPACK_IMPORTED_MODULE_0__.useMenuMetaState)();
  const {
    languages,
    activeLanguageTab
  } = state;
  return /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-languages-tabs-bar-container"
  }, languages.map(language => {
    return /*#__PURE__*/React.createElement("button", {
      key: language,
      "data-TestId": `language-tab--${language}`,
      className: `devmcee-mega-menu-languages-tabs-tab ${activeLanguageTab === language ? 'devmcee-mega-menu-languages-tabs-tab--active' : ''}`,
      onClick: () => setActiveLanguageTab(language),
      type: "button"
    }, language);
  }));
};

/***/ }),

/***/ "./src/components/MenuContainer.tsx":
/*!******************************************!*\
  !*** ./src/components/MenuContainer.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuContainer: () => (/* binding */ MenuContainer)
/* harmony export */ });
/* harmony import */ var _MegaMenuContainer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MegaMenuContainer.scss */ "./src/components/MegaMenuContainer.scss");
/* harmony import */ var _LanguagesTabsBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguagesTabsBar */ "./src/components/LanguagesTabsBar.tsx");
/* harmony import */ var _SubMenuItemsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubMenuItemsContainer */ "./src/components/SubMenuItemsContainer.tsx");
/* harmony import */ var _MenuItemsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItemsContainer */ "./src/components/MenuItemsContainer.tsx");
/* harmony import */ var _MenuItemsActionBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItemsActionBar */ "./src/components/MenuItemsActionBar.tsx");





const MenuContainer = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_LanguagesTabsBar__WEBPACK_IMPORTED_MODULE_1__.LanguagesTabsBar, null), /*#__PURE__*/React.createElement("div", {
  className: "devmcee-mega-menu-builder-content-container"
}, /*#__PURE__*/React.createElement("div", {
  className: "devmcee-mega-menu-builder-content__root-menu"
}, /*#__PURE__*/React.createElement(_MenuItemsActionBar__WEBPACK_IMPORTED_MODULE_4__.MenuItemsActionBar, null), /*#__PURE__*/React.createElement(_MenuItemsContainer__WEBPACK_IMPORTED_MODULE_3__.MenuItemsContainer, null)), /*#__PURE__*/React.createElement("div", {
  className: "devmcee-mega-menu-builder-content__sub-menu"
}, /*#__PURE__*/React.createElement(_SubMenuItemsContainer__WEBPACK_IMPORTED_MODULE_2__.SubMenuItemsContainer, null))));

/***/ }),

/***/ "./src/components/MenuDataPrinter.tsx":
/*!********************************************!*\
  !*** ./src/components/MenuDataPrinter.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuDataPrinter: () => (/* binding */ MenuDataPrinter)
/* harmony export */ });
/* harmony import */ var _hooks_useMenuState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useMenuState */ "./src/hooks/useMenuState.ts");
/* harmony import */ var _hooks_useMenuMetaState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useMenuMetaState */ "./src/hooks/useMenuMetaState.ts");


const MenuDataPrinter = () => {
  const {
    state: initData
  } = (0,_hooks_useMenuState__WEBPACK_IMPORTED_MODULE_0__.useMenuState)();
  const {
    state: metaState
  } = (0,_hooks_useMenuMetaState__WEBPACK_IMPORTED_MODULE_1__.useMenuMetaState)();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("details", null, /*#__PURE__*/React.createElement("summary", null, "Data"), /*#__PURE__*/React.createElement("pre", null, JSON.stringify(initData, null, 2))), /*#__PURE__*/React.createElement("details", null, /*#__PURE__*/React.createElement("summary", null, "Meta"), /*#__PURE__*/React.createElement("pre", null, JSON.stringify(metaState, null, 2))));
};

/***/ }),

/***/ "./src/components/MenuItem.tsx":
/*!*************************************!*\
  !*** ./src/components/MenuItem.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuItem: () => (/* binding */ MenuItem)
/* harmony export */ });
/* harmony import */ var _MenuItem_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItem.scss */ "./src/components/MenuItem.scss");
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/Button */ "./src/components/buttons/Button.tsx");


const MenuItem = ({
  activeFormUuid,
  setActiveFormUuid: setFormActive,
  title,
  subMenuItemsAmount,
  uuid
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item-title-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "devmcee-mega-menu-builder-menu-item-title"
  }, title), /*#__PURE__*/React.createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    title: "Edit",
    disabled: !!activeFormUuid && activeFormUuid !== uuid,
    onClick: () => setFormActive(uuid),
    testId: `${title}-edit-button`
  })), /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item__sub-title-container"
  }, `${subMenuItemsAmount} Sub Items`));
};

/***/ }),

/***/ "./src/components/MenuItemsActionBar.tsx":
/*!***********************************************!*\
  !*** ./src/components/MenuItemsActionBar.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuItemsActionBar: () => (/* binding */ MenuItemsActionBar)
/* harmony export */ });
/* harmony import */ var _hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useMenuItems */ "./src/hooks/useMenuItems.ts");
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/Button */ "./src/components/buttons/Button.tsx");


const MenuItemsActionBar = () => {
  const {
    addNewMenuItem
  } = (0,_hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_0__.useMenuItems)();
  return /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content-action-bar"
  }, /*#__PURE__*/React.createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    title: "Add menu item",
    testId: "add-menu-item-button",
    onClick: addNewMenuItem
  }), /*#__PURE__*/React.createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    title: "Import",
    testId: "import-menu-items-button",
    onClick: addNewMenuItem,
    disabled: true
  }));
};

/***/ }),

/***/ "./src/components/MenuItemsContainer.tsx":
/*!***********************************************!*\
  !*** ./src/components/MenuItemsContainer.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuItemsContainer: () => (/* binding */ MenuItemsContainer)
/* harmony export */ });
/* harmony import */ var _hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useMenuItems */ "./src/hooks/useMenuItems.ts");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./src/components/MenuItem.tsx");
/* harmony import */ var _forms_MenuItemForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/MenuItemForm */ "./src/components/forms/MenuItemForm.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }



const MenuItemsContainer = () => {
  const {
    menuItemUuidList,
    menuItems,
    isNewMenuItemForm: isNewMenuItemForm,
    activeFormUuid,
    getSubMenuItemsAmount,
    setActiveFormUuid
  } = (0,_hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_0__.useMenuItems)();
  return /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content-menu-container"
  }, menuItemUuidList.map(uuid => {
    return !activeFormUuid || activeFormUuid !== uuid ? /*#__PURE__*/React.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem, _extends({
      key: uuid,
      activeFormUuid: activeFormUuid,
      setActiveFormUuid: setActiveFormUuid
    }, menuItems[uuid], {
      subMenuItemsAmount: getSubMenuItemsAmount(uuid)
    })) : /*#__PURE__*/React.createElement("div", {
      className: "devmcee-mega-menu-builder-menu-item"
    }, /*#__PURE__*/React.createElement(_forms_MenuItemForm__WEBPACK_IMPORTED_MODULE_2__.MenuItemForm, {
      subMenuItemsAmount: getSubMenuItemsAmount(uuid)
    }));
  }), isNewMenuItemForm && /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item"
  }, /*#__PURE__*/React.createElement(_forms_MenuItemForm__WEBPACK_IMPORTED_MODULE_2__.MenuItemForm, null)));
};

/***/ }),

/***/ "./src/components/SubMenuItem.tsx":
/*!****************************************!*\
  !*** ./src/components/SubMenuItem.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubMenuItem: () => (/* binding */ SubMenuItem)
/* harmony export */ });
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/Button */ "./src/components/buttons/Button.tsx");
/* harmony import */ var _SubMenuItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubMenuItem.scss */ "./src/components/SubMenuItem.scss");


const SubMenuItem = ({
  uuid,
  title,
  activeSubItemFormUuid,
  setFormActive
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "devmcee-mega-menu-builder-content__sub-menu-item-title"
  }, title), /*#__PURE__*/React.createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_0__.Button, {
    title: "Edit",
    onClick: () => setFormActive(uuid),
    disabled: !!activeSubItemFormUuid && activeSubItemFormUuid !== uuid,
    testId: `sub-menu-item-form-${title}__edit-button`
  }));
};

/***/ }),

/***/ "./src/components/SubMenuItemColumn.tsx":
/*!**********************************************!*\
  !*** ./src/components/SubMenuItemColumn.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubMenuItemColumn: () => (/* binding */ SubMenuItemColumn)
/* harmony export */ });
/* harmony import */ var _hooks_useSubMenuItemColumn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useSubMenuItemColumn */ "./src/hooks/useSubMenuItemColumn.ts");
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/Button */ "./src/components/buttons/Button.tsx");
/* harmony import */ var _forms_SubMenuItemForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/SubMenuItemForm */ "./src/components/forms/SubMenuItemForm.tsx");
/* harmony import */ var _SubMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubMenuItem */ "./src/components/SubMenuItem.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }




const SubMenuItemColumn = ({
  subItemUuidList,
  columnIndex
}) => {
  const {
    subMenuItems,
    subMenuItemForm,
    initSubMenuItemForm,
    initSubMenuItemFormForEditing
  } = (0,_hooks_useSubMenuItemColumn__WEBPACK_IMPORTED_MODULE_0__.useSubMenuItemColumn)({
    subItemUuidList
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-column-header"
  }, /*#__PURE__*/React.createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    title: "Add sub item",
    onClick: () => initSubMenuItemForm(columnIndex),
    testId: `sub-items-column-${columnIndex}__add-sub-item-button`
  })), /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-column-content"
  }, !subMenuItemForm && subItemUuidList.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-column-content-placeholder"
  }, "No sub items"), subMenuItems.map(subMenuItem => {
    return !subMenuItemForm || subMenuItemForm && subMenuItemForm?.uuid !== subMenuItem.uuid ? /*#__PURE__*/React.createElement(_SubMenuItem__WEBPACK_IMPORTED_MODULE_3__.SubMenuItem, _extends({
      activeSubItemFormUuid: subMenuItemForm?.uuid,
      key: subMenuItem.uuid
    }, subMenuItem, {
      setFormActive: initSubMenuItemFormForEditing
    })) : /*#__PURE__*/React.createElement(_forms_SubMenuItemForm__WEBPACK_IMPORTED_MODULE_2__.SubMenuItemForm, null);
  }), subMenuItemForm && !subMenuItemForm?.uuid && subMenuItemForm?.columnIndex === columnIndex && /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-item-container"
  }, /*#__PURE__*/React.createElement(_forms_SubMenuItemForm__WEBPACK_IMPORTED_MODULE_2__.SubMenuItemForm, null))));
};

/***/ }),

/***/ "./src/components/SubMenuItemsContainer.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubMenuItemsContainer.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubMenuItemsContainer: () => (/* binding */ SubMenuItemsContainer)
/* harmony export */ });
/* harmony import */ var _hooks_useSubMenuItemsContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useSubMenuItemsContainer */ "./src/hooks/useSubMenuItemsContainer.ts");
/* harmony import */ var _SubMenuItemsContainer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubMenuItemsContainer.scss */ "./src/components/SubMenuItemsContainer.scss");
/* harmony import */ var _SubMenuItemColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubMenuItemColumn */ "./src/components/SubMenuItemColumn.tsx");



const SubMenuItemsContainer = () => {
  const {
    activeMenuItem,
    columnsData
  } = (0,_hooks_useSubMenuItemsContainer__WEBPACK_IMPORTED_MODULE_0__.useSubMenuItemsContainer)();
  return /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-container"
  }, (!activeMenuItem || activeMenuItem && !activeMenuItem.uuid) && /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-content__sub-menu-placeholder"
  }, !activeMenuItem ? `Select a menu item to edit its sub items` : `Save menu item to add sub items`), activeMenuItem && columnsData?.length && columnsData.map((subItemUuidList, i) => {
    return /*#__PURE__*/React.createElement(_SubMenuItemColumn__WEBPACK_IMPORTED_MODULE_2__.SubMenuItemColumn, {
      key: i,
      columnIndex: i,
      subItemUuidList: subItemUuidList
    });
  }));
};

/***/ }),

/***/ "./src/components/buttons/Button.tsx":
/*!*******************************************!*\
  !*** ./src/components/buttons/Button.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
const Button = ({
  onClick,
  title,
  testId,
  disabled = false,
  classes = '',
  type = 'button'
}) => {
  const args = Object.assign({
    'data-TestId': testId,
    disabled,
    className: `devmcee-mega-menu-builder-content-action-button ${classes}`.trim(),
    type
  }, type === 'submit' ? {
    onSubmit: onClick
  } : {
    onClick
  });
  return /*#__PURE__*/React.createElement("button", args, title);
};

/***/ }),

/***/ "./src/components/forms/MenuItemForm.tsx":
/*!***********************************************!*\
  !*** ./src/components/forms/MenuItemForm.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuItemForm: () => (/* binding */ MenuItemForm)
/* harmony export */ });
/* harmony import */ var _hooks_useMenuItemForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useMenuItemForm */ "./src/hooks/useMenuItemForm.ts");
/* harmony import */ var _MenuItemForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItemForm.scss */ "./src/components/forms/MenuItemForm.scss");
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons/Button */ "./src/components/buttons/Button.tsx");



const MenuItemForm = ({
  subMenuItemsAmount
}) => {
  const {
    headerTitle,
    canSubmit,
    form,
    save,
    changeField,
    deleteItem,
    closeForm,
    addSubMenuItemColumns
  } = (0,_hooks_useMenuItemForm__WEBPACK_IMPORTED_MODULE_0__.useMenuItemForm)();
  return /*#__PURE__*/React.createElement("form", {
    autoComplete: "off",
    onSubmit: save,
    className: "devmcee-mega-menu-builder-menu-item-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item-form-title-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "devmcee-mega-menu-builder-menu-item-form-title"
  }, headerTitle), /*#__PURE__*/React.createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    title: "Cancel",
    testId: "menu-item-form__cancel-button",
    onClick: closeForm
  })), /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item-form__fields-container"
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "text",
    name: "title",
    "data-TestId": "menu-item-form__title",
    placeholder: "title",
    value: form?.title,
    onChange: changeField
  }), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "text",
    "data-TestId": "menu-item-form__url",
    name: "url",
    placeholder: "url",
    value: form?.url,
    onChange: changeField
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "classes",
    placeholder: "classes",
    value: form?.classes,
    onChange: changeField
  })), /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item-form__footer-actions-container"
  }, /*#__PURE__*/React.createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    title: "Delete",
    disabled: !form?.uuid || !!subMenuItemsAmount && subMenuItemsAmount > 0,
    onClick: deleteItem,
    testId: `${form?.title || 'menu-item-form'}__delete-button`,
    classes: "devmcee-mega-menu-builder-content-action-button--delete"
  }), form?.uuid && !form?.subMenuItemsColumnsUuid && /*#__PURE__*/React.createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    title: "Add sub items",
    onClick: addSubMenuItemColumns,
    testId: "add-sub-items-button"
  }), /*#__PURE__*/React.createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    title: "Save",
    testId: "menu-item-form__save-button",
    onClick: save,
    type: "submit",
    disabled: !canSubmit
  })));
};

/***/ }),

/***/ "./src/components/forms/SubMenuItemForm.tsx":
/*!**************************************************!*\
  !*** ./src/components/forms/SubMenuItemForm.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubMenuItemForm: () => (/* binding */ SubMenuItemForm)
/* harmony export */ });
/* harmony import */ var _MenuItemForm_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItemForm.scss */ "./src/components/forms/MenuItemForm.scss");
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons/Button */ "./src/components/buttons/Button.tsx");
/* harmony import */ var _hooks_useSubMenuItemForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useSubMenuItemForm */ "./src/hooks/useSubMenuItemForm.ts");



const SubMenuItemForm = ({}) => {
  const {
    headerTitle,
    canSubmit,
    form,
    save,
    changeField,
    deleteItem,
    closeForm
  } = (0,_hooks_useSubMenuItemForm__WEBPACK_IMPORTED_MODULE_2__.useSubMenuItemForm)();
  return /*#__PURE__*/React.createElement("form", {
    autoComplete: "off",
    onSubmit: save,
    "data-TestId": "sub-menu-item-form",
    className: "devmcee-mega-menu-builder-menu-item-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item-form-title-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "devmcee-mega-menu-builder-menu-item-form-title"
  }, headerTitle), /*#__PURE__*/React.createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    title: "Cancel",
    testId: "sub-menu-item-form__cancel-button",
    onClick: closeForm
  })), /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item-form__fields-container"
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "text",
    name: "title",
    "data-TestId": "sub-menu-item-form__title",
    placeholder: "title",
    value: form?.title,
    onChange: changeField
  }), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    name: "description",
    placeholder: "description",
    "data-TestId": "sub-menu-item-form__description",
    value: form?.description,
    onChange: changeField
  }), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "text",
    "data-TestId": "sub-menu-item-form__url",
    name: "url",
    placeholder: "url",
    value: form?.url,
    onChange: changeField
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "classes",
    placeholder: "classes",
    value: form?.classes,
    onChange: changeField
  })), /*#__PURE__*/React.createElement("div", {
    className: "devmcee-mega-menu-builder-menu-item-form__footer-actions-container"
  }, /*#__PURE__*/React.createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    title: "Delete",
    disabled: !form?.uuid,
    onClick: deleteItem,
    testId: `sub-menu-item-form__delete-button`,
    classes: "devmcee-mega-menu-builder-content-action-button--delete"
  }), /*#__PURE__*/React.createElement(_buttons_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    title: "Save",
    testId: "sub-menu-item-form__save-button",
    onClick: save,
    type: "submit",
    disabled: !canSubmit
  })));
};

/***/ }),

/***/ "./src/hooks/useApiRequest.ts":
/*!************************************!*\
  !*** ./src/hooks/useApiRequest.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useApiRequest: () => (/* binding */ useApiRequest)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.types */ "./src/app.types.ts");
/* harmony import */ var _useMenuMetaState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMenuMetaState */ "./src/hooks/useMenuMetaState.ts");



const useApiRequest = () => {
  const {
    state: metaState
  } = (0,_useMenuMetaState__WEBPACK_IMPORTED_MODULE_2__.useMenuMetaState)();
  const {
    customNonce,
    postID,
    endpoints
  } = metaState;
  const url = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => endpoints[_app_types__WEBPACK_IMPORTED_MODULE_1__.EndpointName.SAVE], [endpoints, _app_types__WEBPACK_IMPORTED_MODULE_1__.EndpointName.SAVE]);
  const sendRequest = async data => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': customNonce
      },
      body: JSON.stringify({
        data,
        postID
      })
    });
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  };
  return {
    sendRequest
  };
};

/***/ }),

/***/ "./src/hooks/useMenuItemForm.ts":
/*!**************************************!*\
  !*** ./src/hooks/useMenuItemForm.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMenuItemForm: () => (/* binding */ useMenuItemForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMenuState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMenuState */ "./src/hooks/useMenuState.ts");


const useMenuItemForm = () => {
  const {
    state: {
      menuItemForm
    },
    dispatchers: {
      changeMenuItemFieldValue,
      saveMenuItem,
      removeMenuItem,
      removeMenuItemForm,
      initSubMenuItemColumns
    }
  } = (0,_useMenuState__WEBPACK_IMPORTED_MODULE_1__.useMenuState)();
  const canSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => menuItemForm && menuItemForm.title && menuItemForm.url, [menuItemForm?.title, menuItemForm?.url]);
  const headerTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!menuItemForm) {
      return '';
    }
    return menuItemForm.uuid ? menuItemForm.title : `${menuItemForm.title || 'New item'}`;
  }, [menuItemForm?.uuid, menuItemForm?.title]);
  const save = async event => {
    event.preventDefault();
    if (!menuItemForm?.title || !menuItemForm?.url) {
      return;
    }
    saveMenuItem();
  };
  const changeField = event => {
    const {
      name,
      value
    } = event.target;
    changeMenuItemFieldValue(name, value);
  };
  const deleteItem = () => {
    if (!menuItemForm?.uuid) {
      return removeMenuItemForm();
    }
    return removeMenuItem();
  };
  const closeForm = () => {
    removeMenuItemForm();
  };
  const addSubMenuItemColumns = () => {
    initSubMenuItemColumns(crypto.randomUUID());
  };
  return {
    form: menuItemForm,
    headerTitle,
    canSubmit,
    save,
    changeField,
    deleteItem,
    closeForm,
    addSubMenuItemColumns
  };
};

/***/ }),

/***/ "./src/hooks/useMenuItems.ts":
/*!***********************************!*\
  !*** ./src/hooks/useMenuItems.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMenuItems: () => (/* binding */ useMenuItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMenuState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMenuState */ "./src/hooks/useMenuState.ts");
/* harmony import */ var _useMenuMetaState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMenuMetaState */ "./src/hooks/useMenuMetaState.ts");



const useMenuItems = () => {
  const {
    state: {
      menuItemForm,
      localMenu,
      menuItems,
      subMenuItems,
      subMenuItemsColumns
    },
    dispatchers: {
      initMenuItemForm,
      initMenuItemFormForEditing,
      removeMenuItemForm,
      deleteMenuItemUuidFromLocalMenu
    }
  } = (0,_useMenuState__WEBPACK_IMPORTED_MODULE_1__.useMenuState)();
  const {
    state: metaState
  } = (0,_useMenuMetaState__WEBPACK_IMPORTED_MODULE_2__.useMenuMetaState)();
  const {
    activeLanguageTab: selectedLanguage
  } = metaState;
  const activeFormUuid = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => menuItemForm?.uuid, [menuItemForm]);
  const setActiveFormUuid = uuid => initMenuItemFormForEditing(selectedLanguage, uuid);
  const addNewMenuItem = () => initMenuItemForm(selectedLanguage);
  const deletMenuItem = async uuid => {
    if (!uuid) {
      removeMenuItemForm();
      return;
    }
    deleteMenuItemUuidFromLocalMenu(uuid, selectedLanguage);
  };
  const getSubMenuItemsAmount = uuid => {
    const menuItem = menuItems[uuid];
    if (!menuItem.subMenuItemsColumnsUuid) return 0;
    return subMenuItemsColumns[menuItem.subMenuItemsColumnsUuid]?.reduce((acc, column) => acc + column.length, 0);
  };
  return {
    menuItems,
    menuItemUuidList: localMenu[selectedLanguage],
    subMenuItemsMap: subMenuItems,
    subMenuItemsColumnsMap: subMenuItemsColumns,
    isNewMenuItemForm: menuItemForm && !menuItemForm?.uuid,
    activeFormUuid,
    addNewMenuItem,
    deletMenuItem,
    setActiveFormUuid,
    getSubMenuItemsAmount
  };
};

/***/ }),

/***/ "./src/hooks/useMenuMetaState.ts":
/*!***************************************!*\
  !*** ./src/hooks/useMenuMetaState.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMenuMetaState: () => (/* binding */ useMenuMetaState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_MenuMetaContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/MenuMetaContextProvider */ "./src/providers/MenuMetaContextProvider.tsx");
/* harmony import */ var _reducers_menuMeta_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/menuMeta.type */ "./src/reducers/menuMeta.type.ts");



const useMenuMetaState = () => {
  const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_MenuMetaContextProvider__WEBPACK_IMPORTED_MODULE_1__.MenuMetaStateContext);
  const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_MenuMetaContextProvider__WEBPACK_IMPORTED_MODULE_1__.MenuMetaDispatchContext);
  const setActiveLanguageTab = languageCode => dispatch({
    type: _reducers_menuMeta_type__WEBPACK_IMPORTED_MODULE_2__.MenuMetaActionType.ACTIVE_LANGUAGE_TAB_SET,
    payload: languageCode
  });
  return {
    state,
    dispatchers: {
      dispatch,
      setActiveLanguageTab
    }
  };
};

/***/ }),

/***/ "./src/hooks/useMenuState.ts":
/*!***********************************!*\
  !*** ./src/hooks/useMenuState.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMenuState: () => (/* binding */ useMenuState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_MenuDataContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/MenuDataContextProvider */ "./src/providers/MenuDataContextProvider.tsx");
/* harmony import */ var _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/menuState.types */ "./src/reducers/menuState.types.ts");



const useMenuState = () => {
  const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_MenuDataContextProvider__WEBPACK_IMPORTED_MODULE_1__.MenuStateContext);
  const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_MenuDataContextProvider__WEBPACK_IMPORTED_MODULE_1__.MenuDispatchContext);
  const initMenuItemForm = languageCode => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.MENU_ITEM_FORM_INITED,
      payload: {
        languageCode
      }
    });
  };
  const initMenuItemFormForEditing = (languageCode, uuid) => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.MENU_ITEM_FORM_INITED_FOR_EDITING,
      payload: {
        languageCode,
        uuid
      }
    });
  };
  const removeMenuItemForm = () => dispatch({
    type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.MENU_ITEM_FORM_REMOVED
  });
  const addMenuItemUuidToLocalMenu = (uuid, locale) => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.MENU_ITEM_UUID_ADDED_TO_LOCAL_MENU,
      payload: {
        uuid,
        languageCode: locale
      }
    });
  };
  const deleteMenuItemUuidFromLocalMenu = (uuid, locale) => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.MENU_ITEM_UUID_DELETED_FROM_LOCAL_MENU,
      payload: {
        uuid,
        languageCode: locale
      }
    });
  };
  const changeMenuItemFieldValue = (fieldName, value) => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.MENU_ITEM_FORM_FIELD_CHANGED,
      payload: {
        fieldName,
        value
      }
    });
  };
  const saveMenuItem = () => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.MENU_ITEM_SAVED
    });
  };
  const removeMenuItem = () => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.MENU_ITEM_REMOVED
    });
  };
  const initSubMenuItemColumns = uuid => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.SUB_MENU_ITEMS_COLUMNS_INITED,
      payload: {
        uuid
      }
    });
  };
  const initSubMenuItemForm = columnIndex => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.SUB_MENU_ITEM_FORM_INITED,
      payload: {
        columnIndex
      }
    });
  };
  const initSubMenuItemFormForEditing = uuid => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.SUB_MENU_ITEM_FORM_INITED_FOR_EDITING,
      payload: {
        uuid
      }
    });
  };
  const removeSubMenuItemForm = () => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.SUB_MENU_ITEM_FORM_REMOVED
    });
  };
  const changeSubMenuItemFieldValue = (fieldName, value) => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.SUB_MENU_ITEM_FORM_FIELD_CHANGED,
      payload: {
        fieldName,
        value
      }
    });
  };
  const saveSubMenuItem = () => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.SUB_MENU_ITEM_FORM_SAVED
    });
  };
  const removeSubMenuItem = () => {
    dispatch({
      type: _reducers_menuState_types__WEBPACK_IMPORTED_MODULE_2__.MenuStateActionType.SUB_MENU_ITEM_REMOVED
    });
  };
  return {
    state,
    dispatchers: {
      saveMenuItem,
      saveSubMenuItem,
      removeMenuItem,
      removeSubMenuItem,
      initMenuItemForm,
      initSubMenuItemForm,
      removeMenuItemForm,
      removeSubMenuItemForm,
      addMenuItemUuidToLocalMenu,
      deleteMenuItemUuidFromLocalMenu,
      changeMenuItemFieldValue,
      changeSubMenuItemFieldValue,
      initMenuItemFormForEditing,
      initSubMenuItemFormForEditing,
      initSubMenuItemColumns
    }
  };
};

/***/ }),

/***/ "./src/hooks/useSubMenuItemColumn.ts":
/*!*******************************************!*\
  !*** ./src/hooks/useSubMenuItemColumn.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSubMenuItemColumn: () => (/* binding */ useSubMenuItemColumn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMenuState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMenuState */ "./src/hooks/useMenuState.ts");


const useSubMenuItemColumn = ({
  subItemUuidList
}) => {
  const {
    state: {
      subMenuItems: allSubMenuItems,
      subMenuItemForm
    },
    dispatchers: {
      initSubMenuItemForm,
      initSubMenuItemFormForEditing
    }
  } = (0,_useMenuState__WEBPACK_IMPORTED_MODULE_1__.useMenuState)();
  const subMenuItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => subItemUuidList.map(uuid => allSubMenuItems[uuid]), [allSubMenuItems, subItemUuidList]);
  return {
    subMenuItems,
    subMenuItemForm,
    initSubMenuItemForm,
    initSubMenuItemFormForEditing
  };
};

/***/ }),

/***/ "./src/hooks/useSubMenuItemForm.ts":
/*!*****************************************!*\
  !*** ./src/hooks/useSubMenuItemForm.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSubMenuItemForm: () => (/* binding */ useSubMenuItemForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMenuState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMenuState */ "./src/hooks/useMenuState.ts");


const useSubMenuItemForm = () => {
  const {
    state: {
      subMenuItemForm
    },
    dispatchers: {
      saveSubMenuItem,
      changeSubMenuItemFieldValue,
      removeSubMenuItem,
      removeSubMenuItemForm
    }
  } = (0,_useMenuState__WEBPACK_IMPORTED_MODULE_1__.useMenuState)();
  const canSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => subMenuItemForm && subMenuItemForm.title && subMenuItemForm.url, [subMenuItemForm?.title, subMenuItemForm?.url]);
  const headerTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!subMenuItemForm) {
      return '';
    }
    return subMenuItemForm.uuid ? subMenuItemForm.title : `${subMenuItemForm.title || 'New sub item'}`;
  }, [subMenuItemForm?.uuid, subMenuItemForm?.title]);
  const save = async event => {
    event.preventDefault();
    if (!subMenuItemForm?.title || !subMenuItemForm?.url) {
      return;
    }
    saveSubMenuItem();
  };
  const changeField = event => {
    const {
      name,
      value
    } = event.target;
    changeSubMenuItemFieldValue(name, value);
  };
  const deleteItem = () => {
    if (!subMenuItemForm?.uuid) {
      return removeSubMenuItemForm();
    }
    return removeSubMenuItem();
  };
  const closeForm = () => {
    removeSubMenuItemForm();
  };
  return {
    form: subMenuItemForm,
    headerTitle,
    canSubmit,
    save,
    changeField,
    deleteItem,
    closeForm
  };
};

/***/ }),

/***/ "./src/hooks/useSubMenuItemsContainer.ts":
/*!***********************************************!*\
  !*** ./src/hooks/useSubMenuItemsContainer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSubMenuItemsContainer: () => (/* binding */ useSubMenuItemsContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMenuState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMenuState */ "./src/hooks/useMenuState.ts");


const useSubMenuItemsContainer = () => {
  const {
    state: {
      menuItemForm,
      subMenuItemsColumns
    }
  } = (0,_useMenuState__WEBPACK_IMPORTED_MODULE_1__.useMenuState)();
  const [newSubItem, setNewSubItem] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [activeColumnIndex, setActiveColumnIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [activeSubMenuItemUuid, setActiveSubMenuItemUuid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const columnsData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!menuItemForm || !subMenuItemsColumns) return null;
    if (!menuItemForm.subMenuItemsColumnsUuid) return null;
    return subMenuItemsColumns[menuItemForm.subMenuItemsColumnsUuid];
  }, [menuItemForm?.subMenuItemsColumnsUuid, subMenuItemsColumns]);
  const addNewSubItem = columnIndex => {
    setActiveColumnIndex(columnIndex);
  };
  const deleteNewSubItem = () => {
    setNewSubItem(null);
    setActiveColumnIndex(null);
  };
  return {
    activeSubMenuItemUuid,
    activeColumnIndex,
    newSubItem,
    activeMenuItem: menuItemForm,
    columnsData,
    addNewSubItem,
    deleteNewSubItem,
    setActiveSubMenuItemUuid
  };
};

/***/ }),

/***/ "./src/providers/ApiServiceProvider.tsx":
/*!**********************************************!*\
  !*** ./src/providers/ApiServiceProvider.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiServiceProvider: () => (/* binding */ ApiServiceProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useMenuState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useMenuState */ "./src/hooks/useMenuState.ts");
/* harmony import */ var _hooks_useApiRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useApiRequest */ "./src/hooks/useApiRequest.ts");



const ApiServiceProvider = ({
  children
}) => {
  const {
    state,
    dispatchers: {
      removeMenuItemForm: closeMenuItemForm,
      removeSubMenuItemForm: closeSubMenuItemForm
    }
  } = (0,_hooks_useMenuState__WEBPACK_IMPORTED_MODULE_1__.useMenuState)();
  const {
    sendRequest
  } = (0,_hooks_useApiRequest__WEBPACK_IMPORTED_MODULE_2__.useApiRequest)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isMenuItemFormSubmitted = state.menuItemForm?.isSubmitted;
    const isSubMenuItemFormSubmitted = state.subMenuItemForm?.isSubmitted;
    if (isMenuItemFormSubmitted || isSubMenuItemFormSubmitted) {
      sendRequest({
        menuItems: state.menuItems,
        subMenuItems: state.subMenuItems,
        localMenu: state.localMenu,
        subMenuItemsColumns: state.subMenuItemsColumns
      }).then(() => {
        if (!isSubMenuItemFormSubmitted) {
          closeMenuItemForm();
        }
        closeSubMenuItemForm();
      });
    }
  }, [state.menuItemForm?.isSubmitted, state.subMenuItemForm?.isSubmitted]);
  return children;
};

/***/ }),

/***/ "./src/providers/MenuDataContextProvider.tsx":
/*!***************************************************!*\
  !*** ./src/providers/MenuDataContextProvider.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuDataContextProvider: () => (/* binding */ MenuDataContextProvider),
/* harmony export */   MenuDispatchContext: () => (/* binding */ MenuDispatchContext),
/* harmony export */   MenuStateContext: () => (/* binding */ MenuStateContext),
/* harmony export */   menuInitialState: () => (/* binding */ menuInitialState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_menuStateReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/menuStateReducer */ "./src/reducers/menuStateReducer.ts");



// Provided by WordPress wp_localize_script

let extenalData = {
  data: {}
};
if (typeof devmceeMegaMenuInitData !== 'undefined') {
  extenalData = devmceeMegaMenuInitData;
}
const menuInitialState = Object.assign({
  menuItemForm: null,
  subMenuItemForm: null,
  subMenuItems: {},
  menuItems: {},
  localMenu: {},
  subMenuItemsColumns: {}
}, extenalData?.data || {});
const MenuStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(menuInitialState);
const MenuDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(() => void 0);
const MenuDataContextProvider = ({
  children
}) => {
  const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducers_menuStateReducer__WEBPACK_IMPORTED_MODULE_1__.menuStateReducer, menuInitialState);
  return /*#__PURE__*/React.createElement(MenuStateContext.Provider, {
    value: state
  }, /*#__PURE__*/React.createElement(MenuDispatchContext.Provider, {
    value: dispatch
  }, children));
};

/***/ }),

/***/ "./src/providers/MenuMetaContextProvider.tsx":
/*!***************************************************!*\
  !*** ./src/providers/MenuMetaContextProvider.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuMetaContextProvider: () => (/* binding */ MenuMetaContextProvider),
/* harmony export */   MenuMetaDispatchContext: () => (/* binding */ MenuMetaDispatchContext),
/* harmony export */   MenuMetaStateContext: () => (/* binding */ MenuMetaStateContext),
/* harmony export */   menuMetaInitialState: () => (/* binding */ menuMetaInitialState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.types */ "./src/app.types.ts");
/* harmony import */ var _reducers_menuMetaReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/menuMetaReducer */ "./src/reducers/menuMetaReducer.ts");




// Provided by WordPress wp_localize_script

let externalMetaData = {};
if (typeof devmceeMegaMenuInitData !== 'undefined') {
  const {
    ['data']: _,
    ...meta
  } = devmceeMegaMenuInitData;
  externalMetaData = meta;
}
const menuMetaInitialState = Object.assign({
  languages: [],
  defaultLanguage: 'en',
  activeLanguageTab: 'en',
  endpoints: {
    [_app_types__WEBPACK_IMPORTED_MODULE_1__.EndpointName.SAVE]: ''
  },
  customNonce: "",
  postID: 0
}, externalMetaData);
const MenuMetaStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(menuMetaInitialState);
const MenuMetaDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(() => void 0);
const MenuMetaContextProvider = ({
  children
}) => {
  const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducers_menuMetaReducer__WEBPACK_IMPORTED_MODULE_2__.menuMetaReducer, menuMetaInitialState);
  return /*#__PURE__*/React.createElement(MenuMetaStateContext.Provider, {
    value: state
  }, /*#__PURE__*/React.createElement(MenuMetaDispatchContext.Provider, {
    value: dispatch
  }, children));
};

/***/ }),

/***/ "./src/reducers/menuMeta.type.ts":
/*!***************************************!*\
  !*** ./src/reducers/menuMeta.type.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuMetaActionType: () => (/* binding */ MenuMetaActionType)
/* harmony export */ });
const MenuMetaActionType = {
  ACTIVE_LANGUAGE_TAB_SET: 'meta/ACTIVE_LANGUAGE_TAB_SET'
};

/***/ }),

/***/ "./src/reducers/menuMetaReducer.ts":
/*!*****************************************!*\
  !*** ./src/reducers/menuMetaReducer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuMetaReducer: () => (/* binding */ menuMetaReducer)
/* harmony export */ });
/* harmony import */ var _menuMeta_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuMeta.type */ "./src/reducers/menuMeta.type.ts");

const menuMetaReducer = (state, action) => {
  console.log('[MenuMetaReducer:action]', action);
  switch (action.type) {
    case _menuMeta_type__WEBPACK_IMPORTED_MODULE_0__.MenuMetaActionType.ACTIVE_LANGUAGE_TAB_SET:
      {
        return {
          ...state,
          activeLanguageTab: action.payload
        };
      }
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/menuState.types.ts":
/*!*****************************************!*\
  !*** ./src/reducers/menuState.types.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuStateActionType: () => (/* binding */ MenuStateActionType)
/* harmony export */ });
const MenuStateActionType = {
  MENU_ITEM_FORM_INITED: 'menu/MENU_ITEM_FORM_INITED',
  MENU_ITEM_FORM_INITED_FOR_EDITING: 'menu/MENU_ITEM_FORM_INITED_FOR_EDITING',
  MENU_ITEM_FORM_REMOVED: 'menu/MENU_ITEM_FORM_REMOVED',
  MENU_ITEM_FORM_FIELD_CHANGED: 'menu/MENU_ITEM_FORM_FIELD_CHANGED',
  MENU_ITEM_UUID_ADDED_TO_LOCAL_MENU: 'menu/MENU_ITEM_UUID_ADDED_TO_LOCAL_MENU',
  MENU_ITEM_UUID_DELETED_FROM_LOCAL_MENU: 'menu/MENU_ITEM_UUID_DELETED_FROM_LOCAL_MENU',
  MENU_ITEM_SAVED: 'menu/MENU_ITEM_SAVED',
  MENU_ITEM_REMOVED: 'menu/MENU_ITEM_REMOVED',
  SUB_MENU_ITEMS_COLUMNS_INITED: 'menu/SUB_MENU_ITEMS_COLUMNS_INITED',
  SUB_MENU_ITEM_FORM_INITED: 'menu/SUB_MENU_ITEM_FORM_INITED',
  SUB_MENU_ITEM_FORM_INITED_FOR_EDITING: 'menu/SUB_MENU_ITEM_FORM_INITED_FOR_EDITING',
  SUB_MENU_ITEM_FORM_REMOVED: 'menu/SUB_MENU_ITEM_FORM_REMOVED',
  SUB_MENU_ITEM_FORM_FIELD_CHANGED: 'menu/SUB_MENU_ITEM_FORM_FIELD_CHANGED',
  SUB_MENU_ITEM_FORM_SAVED: 'menu/SUB_MENU_ITEM_FORM_SAVED',
  SUB_MENU_ITEM_REMOVED: 'menu/SUB_MENU_ITEM_REMOVED'
};

/***/ }),

/***/ "./src/reducers/menuStateReducer.ts":
/*!******************************************!*\
  !*** ./src/reducers/menuStateReducer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuStateReducer: () => (/* binding */ menuStateReducer)
/* harmony export */ });
/* harmony import */ var _menuState_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuState.types */ "./src/reducers/menuState.types.ts");

const menuStateReducer = (state, action) => {
  console.log('[MenuStateReducer:action]', action);
  switch (action.type) {
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.MENU_ITEM_FORM_INITED:
      {
        const {
          languageCode
        } = action.payload;
        return {
          ...state,
          menuItemForm: {
            isSubmitted: false,
            languageCode,
            title: '',
            url: '',
            subMenuItemsColumnsUuid: null
          }
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.MENU_ITEM_FORM_INITED_FOR_EDITING:
      {
        const {
          languageCode,
          uuid
        } = action.payload;
        const menuItem = state.menuItems[uuid];
        return {
          ...state,
          menuItemForm: {
            ...menuItem,
            isSubmitted: false,
            languageCode
          }
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.MENU_ITEM_FORM_REMOVED:
      {
        return {
          ...state,
          menuItemForm: null
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.MENU_ITEM_FORM_FIELD_CHANGED:
      {
        if (!state.menuItemForm) return state;
        const {
          fieldName,
          value
        } = action.payload;
        return {
          ...state,
          menuItemForm: {
            ...state.menuItemForm,
            [fieldName]: value,
            isSubmitted: false
          }
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.MENU_ITEM_UUID_ADDED_TO_LOCAL_MENU:
      {
        const {
          languageCode: locale,
          uuid
        } = action.payload;
        const localMenu = new Set(state.localMenu[locale]);
        localMenu.add(uuid);
        return {
          ...state,
          localMenu: {
            ...state.localMenu,
            [locale]: [...localMenu]
          }
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.MENU_ITEM_UUID_DELETED_FROM_LOCAL_MENU:
      {
        const {
          languageCode: locale,
          uuid
        } = action.payload;
        return {
          ...state,
          localMenu: {
            ...state.localMenu,
            [locale]: [...state.localMenu[locale].filter(_uuid => _uuid !== uuid)]
          }
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.MENU_ITEM_SAVED:
      {
        if (!state.menuItemForm) return state;
        // save on edit if uuid exists, otherwise - new item
        const uuid = state.menuItemForm.uuid || crypto.randomUUID();
        const localMenu = new Set(state.localMenu[state.menuItemForm.languageCode]);
        localMenu.add(uuid);
        const {
          isSubmitted,
          ...menuItemsForm
        } = state.menuItemForm;
        return {
          ...state,
          menuItemForm: {
            ...state.menuItemForm,
            isSubmitted: true
          },
          localMenu: {
            ...state.localMenu,
            [state.menuItemForm.languageCode]: [...localMenu]
          },
          menuItems: {
            ...state.menuItems,
            [uuid]: {
              ...menuItemsForm,
              uuid
            }
          }
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.MENU_ITEM_REMOVED:
      {
        if (!state.menuItemForm || !state.menuItemForm.uuid) return state;
        const uuid = state.menuItemForm.uuid;
        const languageCode = state.menuItemForm.languageCode;
        const {
          [uuid]: _,
          ...menuItems
        } = state.menuItems;
        return {
          ...state,
          menuItemForm: {
            ...state.menuItemForm,
            isSubmitted: true
          },
          localMenu: {
            ...state.localMenu,
            [languageCode]: [...state.localMenu[languageCode].filter(_uuid => _uuid !== uuid)]
          },
          menuItems
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.SUB_MENU_ITEMS_COLUMNS_INITED:
      {
        if (!state.menuItemForm) return state;
        const {
          uuid
        } = action.payload;
        return {
          ...state,
          menuItemForm: {
            ...state.menuItemForm,
            subMenuItemsColumnsUuid: uuid
          },
          subMenuItemsColumns: {
            ...state.subMenuItemsColumns,
            [uuid]: [[], [], []]
          }
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.SUB_MENU_ITEM_FORM_INITED:
      {
        if (!state.menuItemForm) return state;
        const {
          columnIndex
        } = action.payload;
        return {
          ...state,
          subMenuItemForm: {
            url: '',
            description: '',
            title: '',
            isSubmitted: false,
            columnIndex
          }
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.SUB_MENU_ITEM_FORM_INITED_FOR_EDITING:
      {
        if (!state.menuItemForm) return state;
        const {
          uuid: subMenuItemUuid
        } = action.payload;
        return {
          ...state,
          subMenuItemForm: {
            ...state.subMenuItems[subMenuItemUuid],
            isSubmitted: false
          }
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.SUB_MENU_ITEM_FORM_REMOVED:
      {
        return {
          ...state,
          subMenuItemForm: null
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.SUB_MENU_ITEM_FORM_FIELD_CHANGED:
      {
        if (!state.subMenuItemForm) return state;
        const {
          fieldName,
          value
        } = action.payload;
        return {
          ...state,
          subMenuItemForm: {
            ...state.subMenuItemForm,
            [fieldName]: value,
            isSubmitted: false
          }
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.SUB_MENU_ITEM_FORM_SAVED:
      {
        if (!state.subMenuItemForm || !state.menuItemForm) return state;
        const {
          menuItems,
          menuItemForm,
          subMenuItemForm,
          subMenuItemsColumns
        } = state;
        const {
          isSubmitted,
          ...submittedSubMenuItemForm
        } = state.subMenuItemForm;
        const subMenuItemUuid = submittedSubMenuItemForm.uuid || crypto.randomUUID();
        const menuItem = menuItems[menuItemForm.uuid];
        const column = new Set(subMenuItemsColumns[menuItemForm.subMenuItemsColumnsUuid][subMenuItemForm.columnIndex]);
        column.add(subMenuItemUuid);
        subMenuItemsColumns[menuItemForm.subMenuItemsColumnsUuid][subMenuItemForm.columnIndex] = [...column];
        return {
          ...state,
          menuItems: {
            ...state.menuItems,
            [menuItem.uuid]: {
              ...menuItem,
              subMenuItemsColumnsUuid: menuItemForm.subMenuItemsColumnsUuid
            }
          },
          subMenuItemForm: {
            ...submittedSubMenuItemForm,
            isSubmitted: true
          },
          subMenuItems: {
            ...state.subMenuItems,
            [subMenuItemUuid]: {
              ...submittedSubMenuItemForm,
              uuid: subMenuItemUuid
            }
          },
          subMenuItemsColumns: {
            ...subMenuItemsColumns
          }
        };
      }
    case _menuState_types__WEBPACK_IMPORTED_MODULE_0__.MenuStateActionType.SUB_MENU_ITEM_REMOVED:
      {
        const {
          menuItems,
          menuItemForm,
          subMenuItemForm,
          subMenuItemsColumns,
          subMenuItems
        } = state;
        if (!subMenuItemForm || !subMenuItemForm.uuid || !menuItemForm) return state;
        const {
          [subMenuItemForm.uuid]: _,
          ...newSubMenuItems
        } = subMenuItems;
        subMenuItemsColumns[menuItemForm.subMenuItemsColumnsUuid][subMenuItemForm.columnIndex] = subMenuItemsColumns[menuItemForm.subMenuItemsColumnsUuid][subMenuItemForm.columnIndex].filter(uuid => uuid !== subMenuItemForm.uuid);
        return {
          ...state,
          subMenuItemForm: {
            ...subMenuItemForm,
            isSubmitted: true
          },
          subMenuItems: {
            ...newSubMenuItems
          },
          subMenuItemsColumns: {
            ...subMenuItemsColumns
          }
        };
      }
    default:
      return state;
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app.styles.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app.styles.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --devmcee-mega-menu-admin-primary-color: #000;
  --devmcee-mega-menu-admin-primary-contrast-color: #fff;
  --devmcee-mega-menu-admin-secondary-color: #f8f9fa;
  --devmcee-mega-menu-admin-button-primary-color: #3a3a3a;
  --devmcee-mega-menu-admin-button-secondary-color: #F5F6FA;
  --devmcee-mega-menu-admin-button-secondary-hover-color: #D9DADF;
  --devmcee-mega-menu-admin-action-button-primary-color: #2782ad;
  --devmcee-mega-menu-admin-action-button-primary-color-hover: #1f6789;
  --devmcee-mega-menu-admin-action-button-primary-color-disabled: #BABABA;
  --devmcee-mega-menu-admin-action-button-primary-color-delete: #b32d2e;
  --devmcee-mega-menu-admin-action-button-primary-color-delete-hover: #721d1d;
  --devmcee-mega-menu-admin-background-secondary-color: #f0f0f1;
  --devmcee-mega-menu-admin-header-background-primary-color: #f6f7f7;
  --devmcee-mega-menu-admin-border-secondary-color: #c3c4c7;
  --devmcee-mega-menu-admin-builder-container-root-column-width: 300px;
  --devmcee-mega-menu-admin-builder-secondary-font-size: 10px;
  --devmcee-mega-menu-primary-color: #4462ff;
  --devmcee-mega-menu-secondary-color: #f8f9fa;
  --devmcee-mega-menu-font-primary-color: #000;
  --devmcee-mega-menu-font-secondary-color: #5B6073;
  --devmcee-mega-menu-button-primary-color: #4462ff;
  --devmcee-mega-menu-button-primary-hover-color: #3650d1;
  --devmcee-mega-menu-button-secondary-color: #F5F6FA;
  --devmcee-mega-menu-button-secondary-hover-color: #D9DADF;
  --devmcee-mega-menu-mobile-menu-button-secondary-color: #fff;
  --devmcee-mega-menu-column-background-color: #1EA52317;
  --devmcee-mega-menu-border-color: #c3c4c7;
  --devmcee-mega-menu-border-secondary-color: #d3d5e6;
}

.devmcee-mega-menu-builder-container {
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 600px;
}`, "",{"version":3,"sources":["webpack://./src/app.styles.scss"],"names":[],"mappings":"AAAA;EACE,6CAAA;EACA,sDAAA;EACA,kDAAA;EACA,uDAAA;EACA,yDAAA;EACA,+DAAA;EACA,8DAAA;EACA,oEAAA;EACA,uEAAA;EACA,qEAAA;EACA,2EAAA;EACA,6DAAA;EACA,kEAAA;EACA,yDAAA;EAEA,oEAAA;EACA,2DAAA;EAEA,0CAAA;EACA,4CAAA;EACA,4CAAA;EACA,iDAAA;EACA,iDAAA;EACA,uDAAA;EACA,mDAAA;EACA,yDAAA;EACA,4DAAA;EACA,sDAAA;EACA,yCAAA;EACA,mDAAA;AADF;;AAKE;EACE,cAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,iBAAA;AAFJ","sourcesContent":[":root {\n  --devmcee-mega-menu-admin-primary-color: #000;\n  --devmcee-mega-menu-admin-primary-contrast-color: #fff;\n  --devmcee-mega-menu-admin-secondary-color: #f8f9fa;\n  --devmcee-mega-menu-admin-button-primary-color: #3a3a3a;\n  --devmcee-mega-menu-admin-button-secondary-color: #F5F6FA;\n  --devmcee-mega-menu-admin-button-secondary-hover-color: #D9DADF;\n  --devmcee-mega-menu-admin-action-button-primary-color: #2782ad;\n  --devmcee-mega-menu-admin-action-button-primary-color-hover: #1f6789;\n  --devmcee-mega-menu-admin-action-button-primary-color-disabled: #BABABA;\n  --devmcee-mega-menu-admin-action-button-primary-color-delete: #b32d2e;\n  --devmcee-mega-menu-admin-action-button-primary-color-delete-hover: #721d1d;\n  --devmcee-mega-menu-admin-background-secondary-color: #f0f0f1;\n  --devmcee-mega-menu-admin-header-background-primary-color: #f6f7f7;\n  --devmcee-mega-menu-admin-border-secondary-color: #c3c4c7;\n\n  --devmcee-mega-menu-admin-builder-container-root-column-width: 300px;\n  --devmcee-mega-menu-admin-builder-secondary-font-size: 10px;\n\n  --devmcee-mega-menu-primary-color: #4462ff;\n  --devmcee-mega-menu-secondary-color: #f8f9fa;\n  --devmcee-mega-menu-font-primary-color: #000;\n  --devmcee-mega-menu-font-secondary-color: #5B6073;\n  --devmcee-mega-menu-button-primary-color: #4462ff;\n  --devmcee-mega-menu-button-primary-hover-color: #3650d1;\n  --devmcee-mega-menu-button-secondary-color: #F5F6FA;\n  --devmcee-mega-menu-button-secondary-hover-color: #D9DADF;\n  --devmcee-mega-menu-mobile-menu-button-secondary-color: #fff;\n  --devmcee-mega-menu-column-background-color: #1EA52317;\n  --devmcee-mega-menu-border-color: #c3c4c7;\n  --devmcee-mega-menu-border-secondary-color: #d3d5e6;\n}\n\n.devmcee-mega-menu-builder {\n  &-container {\n    margin: 16px 0;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    min-height: 600px;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/LanguagesTabsBar.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/LanguagesTabsBar.scss ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.devmcee-mega-menu-languages-tabs-bar-container {
  display: flex;
}
.devmcee-mega-menu-languages-tabs-tab {
  padding: 8px 24px;
  cursor: pointer;
  background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);
  border: 1px solid var(--devmcee-mega-menu-border-color);
  border-left: none;
  text-transform: uppercase;
}
.devmcee-mega-menu-languages-tabs-tab--active {
  background-color: var(--devmcee-mega-menu-admin-primary-color);
  color: var(--devmcee-mega-menu-admin-primary-contrast-color);
}
.devmcee-mega-menu-languages-tabs-tab--add {
  border: none;
  background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);
}
.devmcee-mega-menu-languages-tabs-tab:first-child {
  border-left: 1px solid var(--devmcee-mega-menu-border-color);
}`, "",{"version":3,"sources":["webpack://./src/components/LanguagesTabsBar.scss"],"names":[],"mappings":"AACE;EACE,aAAA;AAAJ;AAEE;EACE,iBAAA;EACA,eAAA;EACA,uEAAA;EACA,uDAAA;EACA,iBAAA;EACA,yBAAA;AAAJ;AAEI;EACE,8DAAA;EACA,4DAAA;AAAN;AAII;EACE,YAAA;EACA,uEAAA;AAFN;AAKE;EACE,4DAAA;AAHJ","sourcesContent":[".devmcee-mega-menu-languages-tabs {\n  &-bar-container {\n    display: flex;\n  }\n  &-tab {\n    padding: 8px 24px;\n    cursor: pointer;\n    background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);\n    border: 1px solid var(--devmcee-mega-menu-border-color); \n    border-left: none;\n    text-transform: uppercase;\n\n    &--active {\n      background-color: var(--devmcee-mega-menu-admin-primary-color);\n      color: var(--devmcee-mega-menu-admin-primary-contrast-color)\n\n    }\n\n    &--add {\n      border: none;\n      background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);\n    }\n  }\n  &-tab:first-child {\n    border-left: 1px solid var(--devmcee-mega-menu-border-color);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MegaMenuContainer.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MegaMenuContainer.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.devmcee-mega-menu-builder-content-container {
  display: flex;
  flex-grow: 1;
  height: 100%;
  background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);
  min-width: var(--devmcee-mega-menu-admin-builder-container-root-column-width);
}
.devmcee-mega-menu-builder-content__root-menu {
  display: flex;
  flex-direction: column;
}
.devmcee-mega-menu-builder-content-action-bar {
  padding: 8px;
  display: flex;
  justify-content: space-between;
  border-left: 1px solid var(--devmcee-mega-menu-border-color);
  border-right: 1px solid var(--devmcee-mega-menu-border-color);
}
.devmcee-mega-menu-builder-content-action-button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  text-decoration: underline;
  color: var(--devmcee-mega-menu-admin-action-button-primary-color);
}
.devmcee-mega-menu-builder-content-action-button:hover {
  color: var(--devmcee-mega-menu-admin-action-button-primary-color-hover);
}
.devmcee-mega-menu-builder-content-action-button:disabled {
  color: var(--devmcee-mega-menu-admin-action-button-primary-color-disabled);
  cursor: not-allowed;
}
.devmcee-mega-menu-builder-content-action-button--delete {
  color: var(--devmcee-mega-menu-admin-action-button-primary-color-delete);
}
.devmcee-mega-menu-builder-content-action-button--delete:hover {
  color: var(--devmcee-mega-menu-admin-action-button-primary-color-delete-hover);
}
.devmcee-mega-menu-builder-content-action-button--delete:disabled:hover {
  color: var(--devmcee-mega-menu-admin-action-button-primary-color-disabled);
  cursor: not-allowed !important;
}
.devmcee-mega-menu-builder-content-menu-container {
  border: 1px solid var(--devmcee-mega-menu-border-color);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  width: var(--devmcee-mega-menu-admin-builder-container-root-column-width);
}`, "",{"version":3,"sources":["webpack://./src/components/MegaMenuContainer.scss"],"names":[],"mappings":"AACE;EACE,aAAA;EACA,YAAA;EACA,YAAA;EACA,uEAAA;EACA,6EAAA;AAAJ;AAGE;EACE,aAAA;EACA,sBAAA;AADJ;AAIE;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,4DAAA;EACA,6DAAA;AAFJ;AAKE;EACE,eAAA;EACA,YAAA;EACA,6BAAA;EACA,0BAAA;EACA,iEAAA;AAHJ;AAKI;EACE,uEAAA;AAHN;AAMI;EACE,0EAAA;EACA,mBAAA;AAJN;AAOI;EACE,wEAAA;AALN;AAQI;EACE,8EAAA;AANN;AASI;EACE,0EAAA;EACA,8BAAA;AAPN;AAWE;EACE,uDAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,YAAA;EACA,yEAAA;AATJ","sourcesContent":[".devmcee-mega-menu-builder-content {\n  &-container {\n    display: flex;\n    flex-grow: 1;\n    height: 100%;\n    background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);\n    min-width: var(--devmcee-mega-menu-admin-builder-container-root-column-width);\n  }\n\n  &__root-menu {\n    display: flex;\n    flex-direction: column;\n  }\n\n  &-action-bar {\n    padding: 8px;\n    display: flex;\n    justify-content: space-between;\n    border-left: 1px solid var(--devmcee-mega-menu-border-color);\n    border-right: 1px solid var(--devmcee-mega-menu-border-color);\n  }\n\n  &-action-button {\n    cursor: pointer;\n    border: none;\n    background-color: transparent;\n    text-decoration: underline;\n    color: var(--devmcee-mega-menu-admin-action-button-primary-color);\n\n    &:hover {\n      color: var(--devmcee-mega-menu-admin-action-button-primary-color-hover);\n    }\n\n    &:disabled {\n      color: var(--devmcee-mega-menu-admin-action-button-primary-color-disabled);\n      cursor: not-allowed;\n    }\n\n    &--delete {\n      color: var(--devmcee-mega-menu-admin-action-button-primary-color-delete);\n    }\n\n    &--delete:hover {\n      color: var(--devmcee-mega-menu-admin-action-button-primary-color-delete-hover);\n    }\n\n    &--delete:disabled:hover {\n      color: var(--devmcee-mega-menu-admin-action-button-primary-color-disabled);\n      cursor: not-allowed!important;\n    }\n  }\n\n  &-menu-container {\n    border: 1px solid var(--devmcee-mega-menu-border-color);\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    height: 100%;\n    width: var(--devmcee-mega-menu-admin-builder-container-root-column-width);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MenuItem.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MenuItem.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.devmcee-mega-menu-builder-menu-item {
  border-bottom: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);
}
.devmcee-mega-menu-builder-menu-item-title-container {
  display: flex;
  justify-content: space-between;
  padding: 8px;
}
.devmcee-mega-menu-builder-menu-item-form-title-bar {
  padding: 8px;
  display: flex;
  justify-content: space-between;
  background-color: var(--devmcee-mega-menu-admin-background-secondary-color);
}
.devmcee-mega-menu-builder-menu-item-form__fields-container {
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
.devmcee-mega-menu-builder-menu-item-form__fields-container input {
  width: 100%;
}
.devmcee-mega-menu-builder-menu-item__sub-title-container {
  padding: 0 8px 8px;
  font-size: var(--devmcee-mega-menu-admin-builder-secondary-font-size);
}`, "",{"version":3,"sources":["webpack://./src/components/MenuItem.scss"],"names":[],"mappings":"AAAA;EACE,8EAAA;AACF;AAEI;EACE,aAAA;EACA,8BAAA;EACA,YAAA;AAAN;AAMM;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,2EAAA;AAJR;AAQI;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AANN;AAQM;EACE,WAAA;AANR;AAYI;EACE,kBAAA;EACA,qEAAA;AAVN","sourcesContent":[".devmcee-mega-menu-builder-menu-item {\n  border-bottom: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);\n\n  &-title {\n    &-container {\n      display: flex;\n      justify-content: space-between;\n      padding: 8px;\n    }\n  }\n\n  &-form {\n    &-title {\n      &-bar {\n        padding: 8px;\n        display: flex;\n        justify-content: space-between;\n        background-color: var(--devmcee-mega-menu-admin-background-secondary-color);\n      }\n    }\n\n    &__fields-container {\n      padding: 8px;\n      display: flex;\n      flex-direction: column;\n      row-gap: 8px;\n\n      & input {\n        width: 100%;\n      }\n    }\n  }\n\n  &__sub-title {\n    &-container {\n      padding: 0 8px 8px;\n      font-size: var(--devmcee-mega-menu-admin-builder-secondary-font-size);\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SubMenuItem.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SubMenuItem.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.devmcee-mega-menu-builder-content__sub-menu-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);
  padding: 8px;
}`, "",{"version":3,"sources":["webpack://./src/components/SubMenuItem.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,8BAAA;EACA,8EAAA;EACA,YAAA;AACF","sourcesContent":[".devmcee-mega-menu-builder-content__sub-menu-item {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);\n  padding: 8px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SubMenuItemsContainer.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SubMenuItemsContainer.scss ***!
  \********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.devmcee-mega-menu-builder-content__sub-menu {
  display: flex;
  width: 100%;
}
.devmcee-mega-menu-builder-content__sub-menu-container {
  padding: 8px;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  column-gap: 8px;
  align-items: flex-start;
  background-color: var(--devmcee-mega-menu-admin-background-secondary-color);
}
.devmcee-mega-menu-builder-content__sub-menu-column {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);
  width: 33.33%;
  height: 100%;
  background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);
}
.devmcee-mega-menu-builder-content__sub-menu-column-header {
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);
}
.devmcee-mega-menu-builder-content__sub-menu-column-content-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 8px;
}`, "",{"version":3,"sources":["webpack://./src/components/SubMenuItemsContainer.scss"],"names":[],"mappings":"AACE;EACE,aAAA;EACA,WAAA;AAAJ;AAEI;EACE,YAAA;EACA,aAAA;EACA,YAAA;EACA,8BAAA;EACA,eAAA;EACA,uBAAA;EACA,2EAAA;AAAN;AAGI;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,uEAAA;EACA,aAAA;EACA,YAAA;EACA,uEAAA;AADN;AAGM;EACE,aAAA;EACA,mBAAA;EACA,YAAA;EACA,8EAAA;AADR;AAMQ;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;AAJV","sourcesContent":[".devmcee-mega-menu-builder-content {\n  &__sub-menu {\n    display: flex;\n    width: 100%;\n\n    &-container {\n      padding: 8px;\n      display: flex;\n      flex-grow: 1;\n      justify-content: space-between;\n      column-gap: 8px;\n      align-items: flex-start;\n      background-color: var(--devmcee-mega-menu-admin-background-secondary-color);\n    }\n\n    &-column {\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n      border: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);\n      width: 33.33%;\n      height: 100%;\n      background-color: var(--devmcee-mega-menu-admin-primary-contrast-color);\n\n      &-header {\n        display: flex;\n        align-items: center;\n        padding: 8px;\n        border-bottom: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);\n      }\n\n      &-content {\n\n        &-placeholder {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          height: 100%;\n          padding: 8px;\n        }\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/forms/MenuItemForm.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/forms/MenuItemForm.scss ***!
  \*****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.devmcee-mega-menu-builder-menu-item-form {
  border-bottom: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);
}
.devmcee-mega-menu-builder-menu-item-form-title-bar {
  padding: 8px;
  display: flex;
  justify-content: space-between;
  background-color: var(--devmcee-mega-menu-admin-header-background-primary-color);
}
.devmcee-mega-menu-builder-menu-item-form__fields-container {
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
.devmcee-mega-menu-builder-menu-item-form__fields-container textarea, .devmcee-mega-menu-builder-menu-item-form__fields-container input {
  width: 100%;
  border-color: var(--devmcee-mega-menu-admin-border-secondary-color);
}
.devmcee-mega-menu-builder-menu-item-form__footer-actions-container {
  display: flex;
  justify-content: space-between;
  padding: 8px;
}`, "",{"version":3,"sources":["webpack://./src/components/forms/MenuItemForm.scss"],"names":[],"mappings":"AAAA;EACE,8EAAA;AACF;AAEI;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,gFAAA;AAAN;AAIE;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AAFJ;AAII;EAEE,WAAA;EACA,mEAAA;AAHN;AAOE;EACE,aAAA;EACA,8BAAA;EACA,YAAA;AALJ","sourcesContent":[".devmcee-mega-menu-builder-menu-item-form {\n  border-bottom: 1px solid var(--devmcee-mega-menu-admin-border-secondary-color);\n\n  &-title {\n    &-bar {\n      padding: 8px;\n      display: flex;\n      justify-content: space-between;\n      background-color: var(--devmcee-mega-menu-admin-header-background-primary-color);\n    }\n  }\n\n  &__fields-container {\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 8px;\n\n    & textarea,\n    & input {\n      width: 100%;\n      border-color: var(--devmcee-mega-menu-admin-border-secondary-color);\n    }\n  }\n\n  &__footer-actions-container {\n    display: flex;\n    justify-content: space-between;\n    padding: 8px;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/app.styles.scss":
/*!*****************************!*\
  !*** ./src/app.styles.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./app.styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app.styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/LanguagesTabsBar.scss":
/*!**********************************************!*\
  !*** ./src/components/LanguagesTabsBar.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LanguagesTabsBar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./LanguagesTabsBar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/LanguagesTabsBar.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LanguagesTabsBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LanguagesTabsBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LanguagesTabsBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LanguagesTabsBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/MegaMenuContainer.scss":
/*!***********************************************!*\
  !*** ./src/components/MegaMenuContainer.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MegaMenuContainer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./MegaMenuContainer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MegaMenuContainer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MegaMenuContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MegaMenuContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MegaMenuContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MegaMenuContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/MenuItem.scss":
/*!**************************************!*\
  !*** ./src/components/MenuItem.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItem_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./MenuItem.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MenuItem.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SubMenuItem.scss":
/*!*****************************************!*\
  !*** ./src/components/SubMenuItem.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItem_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./SubMenuItem.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SubMenuItem.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SubMenuItemsContainer.scss":
/*!***************************************************!*\
  !*** ./src/components/SubMenuItemsContainer.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItemsContainer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./SubMenuItemsContainer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SubMenuItemsContainer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItemsContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItemsContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItemsContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SubMenuItemsContainer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/forms/MenuItemForm.scss":
/*!************************************************!*\
  !*** ./src/components/forms/MenuItemForm.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItemForm_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./MenuItemForm.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/forms/MenuItemForm.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItemForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItemForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItemForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MenuItemForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _providers_MenuDataContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/MenuDataContextProvider */ "./src/providers/MenuDataContextProvider.tsx");
/* harmony import */ var _providers_MenuMetaContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/MenuMetaContextProvider */ "./src/providers/MenuMetaContextProvider.tsx");
/* harmony import */ var _providers_ApiServiceProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./providers/ApiServiceProvider */ "./src/providers/ApiServiceProvider.tsx");





document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('devmcee-mega-menu-root');
  if (rootElement) {
    const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(rootElement);
    root.render(/*#__PURE__*/React.createElement(_providers_MenuMetaContextProvider__WEBPACK_IMPORTED_MODULE_3__.MenuMetaContextProvider, null, /*#__PURE__*/React.createElement(_providers_MenuDataContextProvider__WEBPACK_IMPORTED_MODULE_2__.MenuDataContextProvider, null, /*#__PURE__*/React.createElement(_providers_ApiServiceProvider__WEBPACK_IMPORTED_MODULE_4__.ApiServiceProvider, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_1__.App, null)))));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map