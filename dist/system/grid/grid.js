'use strict';

System.register(['aurelia-framework', './grid-column'], function (_export, _context) {
	"use strict";

	var bindable, inject, BindingEngine, customElement, processContent, TargetInstruction, GridColumn, ViewCompiler, ViewSlot, ViewResources, Container, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, Grid;

	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;

		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}

		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);

		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}

		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}

		return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
		throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	function processUserTemplate(element) {

		var cols = [];

		var rowElement = element.querySelector("grid-row");
		var columnElements = Array.prototype.slice.call(rowElement.querySelectorAll("grid-col"));

		columnElements.forEach(function (c) {
			var attrs = Array.prototype.slice.call(c.attributes),
			    colHash = {};
			attrs.forEach(function (a) {
				return colHash[a.name] = a.value;
			});

			var col = new GridColumn(colHash, c.innerHTML);

			cols.push(col);
		});

		var rowAttrs = {};
		var attrs = Array.prototype.slice.call(rowElement.attributes);
		attrs.forEach(function (a) {
			return rowAttrs[a.name] = a.value;
		});

		return { columns: cols, rowAttrs: rowAttrs };
	}
	return {
		setters: [function (_aureliaFramework) {
			bindable = _aureliaFramework.bindable;
			inject = _aureliaFramework.inject;
			BindingEngine = _aureliaFramework.BindingEngine;
			customElement = _aureliaFramework.customElement;
			processContent = _aureliaFramework.processContent;
			TargetInstruction = _aureliaFramework.TargetInstruction;
			ViewCompiler = _aureliaFramework.ViewCompiler;
			ViewSlot = _aureliaFramework.ViewSlot;
			ViewResources = _aureliaFramework.ViewResources;
			Container = _aureliaFramework.Container;
		}, function (_gridColumn) {
			GridColumn = _gridColumn.GridColumn;
		}],
		execute: function () {
			_export('Grid', Grid = (_dec = customElement('grid'), _dec2 = processContent(function (viewCompiler, viewResources, element, instruction) {
				var result = processUserTemplate(element);
				instruction.gridColumns = result.columns;
				instruction.rowAttrs = result.rowAttrs;

				return true;
			}), _dec3 = inject(Element, ViewCompiler, ViewResources, Container, TargetInstruction, BindingEngine), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
				function Grid(element, vc, vr, container, targetInstruction, bindingEngine) {
					_classCallCheck(this, Grid);

					_initDefineProp(this, 'gridHeight', _descriptor, this);

					_initDefineProp(this, 'initialLoad', _descriptor2, this);

					_initDefineProp(this, 'showColumnFilters', _descriptor3, this);

					_initDefineProp(this, 'serverFiltering', _descriptor4, this);

					_initDefineProp(this, 'filterDebounce', _descriptor5, this);

					_initDefineProp(this, 'serverPaging', _descriptor6, this);

					_initDefineProp(this, 'pageable', _descriptor7, this);

					_initDefineProp(this, 'pageSize', _descriptor8, this);

					_initDefineProp(this, 'page', _descriptor9, this);

					_initDefineProp(this, 'pagerSize', _descriptor10, this);

					_initDefineProp(this, 'showPageSizeBox', _descriptor11, this);

					_initDefineProp(this, 'showPagingSummary', _descriptor12, this);

					_initDefineProp(this, 'showFirstLastButtons', _descriptor13, this);

					_initDefineProp(this, 'showJumpButtons', _descriptor14, this);

					_initDefineProp(this, 'pageSizes', _descriptor15, this);

					this.firstVisibleItem = 0;
					this.lastVisibleItem = 0;
					this.pageNumber = 1;

					_initDefineProp(this, 'serverSorting', _descriptor16, this);

					_initDefineProp(this, 'sortable', _descriptor17, this);

					this.sortProcessingOrder = [];
					this.sorting = {};
					this.Trogdor = true;

					_initDefineProp(this, 'autoGenerateColumns', _descriptor18, this);

					_initDefineProp(this, 'showColumnHeaders', _descriptor19, this);

					this.columnHeaders = [];
					this.columns = [];

					_initDefineProp(this, 'selectable', _descriptor20, this);

					_initDefineProp(this, 'selectedItem', _descriptor21, this);

					_initDefineProp(this, 'noRowsMessage', _descriptor22, this);

					_initDefineProp(this, 'autoLoad', _descriptor23, this);

					this.loading = false;

					_initDefineProp(this, 'loadingMessage', _descriptor24, this);

					_initDefineProp(this, 'read', _descriptor25, this);

					_initDefineProp(this, 'onReadError', _descriptor26, this);

					this.cache = [];
					this.data = [];
					this.count = 0;
					this.unbinding = false;
					this.scrollBarWidth = 16;

					this.element = element;
					this.viewCompiler = vc;
					this.viewResources = vr;
					this.container = container;
					this.bindingEngine = bindingEngine;

					var behavior = targetInstruction.behaviorInstructions[0];
					this.columns = behavior.gridColumns;
					this.rowAttrs = behavior.rowAttrs;
				}

				Grid.prototype.attached = function attached() {
					this.gridHeightChanged();

					if (this.autoLoad) this.refresh();
				};

				Grid.prototype.bind = function bind(executionContext) {
					this.resizeListener = window.addEventListener('resize', this.syncColumnHeadersWithColumns.bind(this));

					this["$parent"] = executionContext;

					if (this.serverPaging && !this.serverSorting) this.sortable = false;

					var tbody = this.element.querySelector("table>tbody");
					this.viewSlot = new ViewSlot(tbody, true, this);

					var row = tbody.querySelector("tr");

					this.addRowAttributes(row);

					this.rowTemplate = document.createDocumentFragment();
					this.rowTemplate.appendChild(row);

					this.buildTemplates();
				};

				Grid.prototype.addRowAttributes = function addRowAttributes(row) {
					row.setAttribute("repeat.for", "$item of data");
					row.setAttribute("class", "${ $item === $parent.selectedItem ? 'info' : '' }");

					for (var prop in this.rowAttrs) {
						if (this.rowAttrs.hasOwnProperty(prop)) {
							row.setAttribute(prop, this.rowAttrs[prop]);
						}
					}
				};

				Grid.prototype.buildTemplates = function buildTemplates() {
					var _this = this;

					var rowTemplate = this.rowTemplate.cloneNode(true);
					var row = rowTemplate.querySelector("tr");

					this.columns.forEach(function (c) {
						var td = document.createElement("td");

						for (var prop in c) {
							if (c.hasOwnProperty(prop)) {

								if (prop == "template") td.innerHTML = c[prop];else td.setAttribute(prop, c[prop]);
							}
						}

						row.appendChild(td);
					});

					var view = this.viewCompiler.compile(rowTemplate, this.viewResources).create(this.container);

					view.bind(this);

					var removeResponse = this.viewSlot.removeAll();

					if (removeResponse instanceof Promise) {
						removeResponse.then(function () {
							return _this.viewSlot.add(view);
						});
					}

					this.viewSlot.add(view);

					this.viewSlot.attached();

					this.noRowsMessageChanged();
				};

				Grid.prototype.unbind = function unbind() {
					this.unbinding = true;
					window.removeEventListener('resize', this.resizeListener);
					this.dontWatchForChanges();
				};

				Grid.prototype.addColumn = function addColumn(col) {
					if (!this.sortable) col.nosort = true;

					this.columns.push(col);
				};

				Grid.prototype.pageChanged = function pageChanged(page, oldValue) {

					if (page === oldValue) return;

					this.pageNumber = Number(page);
					this.refresh();
				};

				Grid.prototype.pageSizeChanged = function pageSizeChanged(newValue, oldValue) {

					if (newValue === oldValue) return;

					this.updatePager();
				};

				Grid.prototype.filterSortPage = function filterSortPage(data) {
					var tempData = data;

					if (this.showColumnFilters && !this.serverFiltering) {
						this.count = tempData.length;

						tempData = this.applyFilter(tempData);
					}

					if (this.sortable && !this.serverSorting) tempData = this.applySort(tempData);

					if (this.pageable && !this.serverPaging) tempData = this.applyPage(tempData);

					this.data = tempData;

					this.updatePager();

					this.watchForChanges();

					setTimeout(this.syncColumnHeadersWithColumns.bind(this), 0);
				};

				Grid.prototype.applyPage = function applyPage(data) {
					var start = (Number(this.pageNumber) - 1) * Number(this.pageSize);
					data = data.slice(start, start + Number(this.pageSize));

					return data;
				};

				Grid.prototype.updatePager = function updatePager() {
					if (this.pager) this.pager.update(this.pageNumber, Number(this.pageSize), Number(this.count));

					this.firstVisibleItem = (this.pageNumber - 1) * Number(this.pageSize) + 1;
					this.lastVisibleItem = Math.min(this.pageNumber * Number(this.pageSize), this.count);
				};

				Grid.prototype.fieldSorter = function fieldSorter(fields) {
					return function (a, b) {
						return fields.map(function (o) {
							var dir = 1;
							if (o[0] === '-') {
								dir = -1;
								o = o.substring(1);
							}
							if (a[o] > b[o]) return dir;
							if (a[o] < b[o]) return -dir;
							return 0;
						}).reduce(function firstNonZeroValue(p, n) {
							return p ? p : n;
						}, 0);
					};
				};

				Grid.prototype.pageSizesChanged = function pageSizesChanged() {
					this.refresh();
				};

				Grid.prototype.sortChanged = function sortChanged(field) {
					var newSort = undefined;

					switch (this.sorting[field]) {
						case "asc":
							newSort = "desc";
							break;
						case "desc":
							newSort = "";
							break;
						default:
							newSort = "asc";
							break;
					}

					this.sorting[field] = newSort;

					var pos = this.sortProcessingOrder.indexOf(field);

					if (pos > -1) this.sortProcessingOrder.splice(pos, 1);

					this.sortProcessingOrder.push(field);

					this.refresh();
				};

				Grid.prototype.applySort = function applySort(data) {
					var fields = [];

					for (var i = 0; i < this.sortProcessingOrder.length; i++) {
						var sort = this.sortProcessingOrder[i];

						for (var prop in this.sorting) {
							if (sort == prop && this.sorting[prop] !== "") fields.push(this.sorting[prop] === "asc" ? prop : "-" + prop);
						}
					};

					data = data.sort(this.fieldSorter(fields));

					return data;
				};

				Grid.prototype.applyFilter = function applyFilter(data) {
					var _this2 = this;

					return data.filter(function (row) {
						var include = true;

						for (var i = _this2.columns.length - 1; i >= 0; i--) {
							var col = _this2.columns[i];

							if (col.filterValue !== "" && row[col.field].toString().indexOf(col.filterValue) === -1) {
								include = false;
							}
						}

						return include;
					});
				};

				Grid.prototype.getFilterColumns = function getFilterColumns() {
					var cols = {};

					for (var i = this.columns.length - 1; i >= 0; i--) {
						var col = this.columns[i];

						if (col.filterValue !== "") cols[col.field] = col.filterValue;
					}

					return cols;
				};

				Grid.prototype.debounce = function debounce(func, wait) {
					var timeout;

					return function () {

						var context = this,
						    args = arguments;

						var later = function later() {
							timeout = null;
							func.apply(context, args);
						};

						clearTimeout(timeout);
						timeout = setTimeout(later, wait);
					};
				};

				Grid.prototype.updateFilters = function updateFilters() {

					if (!this.debouncedUpdateFilters) {
						this.debouncedUpdateFilters = this.debounce(this.refresh.bind(this), this.filterDebounce || 100);
					}

					this.debouncedUpdateFilters();
				};

				Grid.prototype.refresh = function refresh() {
					this.dontWatchForChanges();

					if (this.serverPaging || this.serverSorting || this.serverFiltering || !this.initialLoad) this.getData();else this.filterSortPage(this.cache);
				};

				Grid.prototype.getData = function getData() {
					var _this3 = this;

					if (!this.read) throw new Error("No read method specified for grid");

					this.initialLoad = true;

					this.loading = true;

					this.read({
						sorting: this.sorting,
						paging: { page: this.pageNumber, size: Number(this.pageSize) },
						filtering: this.getFilterColumns()
					}).then(function (result) {
						_this3.handleResult(result);

						_this3.loading = false;
					}, function (result) {
						if (_this3.onReadError) _this3.onReadError(result);

						_this3.loading = false;
					});
				};

				Grid.prototype.handleResult = function handleResult(result) {
					var data = result.data;

					this.count = result.count;

					if (this.pageable && !this.serverPaging && !this.serverSorting && !this.serverFiltering) {
						this.cache = result.data;
						this.filterSortPage(this.cache);
					} else {
						this.data = result.data;
						this.filterSortPage(this.data);
					}

					this.updatePager();
				};

				Grid.prototype.watchForChanges = function watchForChanges() {
					var _this4 = this;

					this.dontWatchForChanges();

					if (!this.unbinding) this.subscription = this.bindingEngine.collectionObserver(this.cache).subscribe(function (splices) {
							_this4.refresh();
						});
				};

				Grid.prototype.dontWatchForChanges = function dontWatchForChanges() {
					if (this.subscription) this.subscription.dispose();
				};

				Grid.prototype.select = function select(item) {
					if (this.selectable) this.selectedItem = item;

					return true;
				};

				Grid.prototype.noRowsMessageChanged = function noRowsMessageChanged() {
					this.showNoRowsMessage = this.noRowsMessage !== "";
				};

				Grid.prototype.gridHeightChanged = function gridHeightChanged() {
					var cont = this.element.querySelector(".grid-content-container");

					if (this.gridHeight > 0) {
						cont.setAttribute("style", "height:" + this.gridHeight + "px");
					} else {
						cont.removeAttribute("style");
					}
				};

				Grid.prototype.syncColumnHeadersWithColumns = function syncColumnHeadersWithColumns() {
					var headers = this.element.querySelectorAll("table>thead>tr:first-child>th");
					var filters = this.element.querySelectorAll("table>thead>tr:last-child>th");

					var cells = this.element.querySelectorAll("table>tbody>tr:first-child>td");

					for (var i = headers.length - 1; i >= 0; i--) {
						var header = headers[i];
						var filter = filters[i];
						var cell = cells[i];

						if (cell && header && filter) {
							var overflow = this.isBodyOverflowing();
							var tgtWidth = cell.offsetWidth + (i == headers.length - 1 && overflow ? this.scrollBarWidth : 0);

							header.setAttribute("style", "width: " + tgtWidth + "px");
							filter.setAttribute("style", "width: " + tgtWidth + "px");
						}
					};
				};

				Grid.prototype.isBodyOverflowing = function isBodyOverflowing() {
					var body = this.element.querySelector(".grid-content-container");
					return body.offsetHeight < body.scrollHeight || body.offsetWidth < body.scrollWidth;
				};

				return Grid;
			}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'gridHeight', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return 0;
				}
			}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'initialLoad', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return false;
				}
			}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'showColumnFilters', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return false;
				}
			}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'serverFiltering', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return false;
				}
			}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'filterDebounce', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return 500;
				}
			}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'serverPaging', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return true;
				}
			}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'pageable', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return true;
				}
			}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'pageSize', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return 10;
				}
			}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'page', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return 1;
				}
			}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'pagerSize', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return 10;
				}
			}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'showPageSizeBox', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return true;
				}
			}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'showPagingSummary', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return true;
				}
			}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'showFirstLastButtons', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return true;
				}
			}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'showJumpButtons', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return true;
				}
			}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'pageSizes', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return [10, 25, 50];
				}
			}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'serverSorting', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return false;
				}
			}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'sortable', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return true;
				}
			}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'autoGenerateColumns', [bindable], {
				enumerable: true,
				initializer: null
			}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'showColumnHeaders', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return true;
				}
			}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'selectable', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return false;
				}
			}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'selectedItem', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return null;
				}
			}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'noRowsMessage', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return "";
				}
			}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'autoLoad', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return true;
				}
			}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'loadingMessage', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return "Loading...";
				}
			}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'read', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return null;
				}
			}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'onReadError', [bindable], {
				enumerable: true,
				initializer: function initializer() {
					return null;
				}
			})), _class2)) || _class) || _class) || _class));

			_export('Grid', Grid);
		}
	};
});