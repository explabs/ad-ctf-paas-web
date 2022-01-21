// eslint-disable-next-line max-classes-per-file
import _ from 'src/@lodash';
import * as colors from '@mui/material/colors';

class EventEmitter {
  constructor() {
    this.events = {};
  }

  // eslint-disable-next-line no-underscore-dangle
  _getEventListByName(eventName) {
    if (typeof this.events[eventName] === 'undefined') {
      this.events[eventName] = new Set();
    }
    return this.events[eventName];
  }

  on(eventName, fn) {
    // eslint-disable-next-line no-underscore-dangle
    this._getEventListByName(eventName).add(fn);
  }

  once(eventName, fn) {
    const self = this;

    const onceFn = (...args) => {
      self.removeListener(eventName, onceFn);
      fn.apply(self, args);
    };
    this.on(eventName, onceFn);
  }

  emit(eventName, ...args) {
    // eslint-disable-next-line no-underscore-dangle
    this._getEventListByName(eventName).forEach(
      (fn) => {
        fn.apply(this, args);
      },
    );
  }

  removeListener(eventName, fn) {
    // eslint-disable-next-line no-underscore-dangle
    this._getEventListByName(eventName).delete(fn);
  }
}

class Utils {
  static filterArrayByString(mainArr, searchText) {
    if (searchText === '') {
      return mainArr;
    }

    searchText = searchText.toLowerCase();

    return mainArr.filter((itemObj) => this.searchInObj(itemObj, searchText));
  }

  static searchInObj(itemObj, searchText) {
    if (!itemObj) {
      return false;
    }

    const propArray = Object.keys(itemObj);

    for (let i = 0; i < propArray.length; i += 1) {
      const prop = propArray[i];
      const value = itemObj[prop];

      if (typeof value === 'string') {
        if (this.searchInString(value, searchText)) {
          return true;
        }
      } else if (Array.isArray(value)) {
        if (this.searchInArray(value, searchText)) {
          return true;
        }
      }

      if (typeof value === 'object') {
        if (this.searchInObj(value, searchText)) {
          return true;
        }
      }
    }
    return false;
  }

  static searchInArray(arr, searchText) {
    arr.forEach((value) => {
      if (typeof value === 'string') {
        if (this.searchInString(value, searchText)) {
          return true;
        }
      }

      if (typeof value === 'object') {
        if (this.searchInObj(value, searchText)) {
          return true;
        }
      }
      return false;
    });
    return false;
  }

  static searchInString(value, searchText) {
    return value.toLowerCase().includes(searchText);
  }

  static generateGUID() {
    function S4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return S4() + S4();
  }

  static toggleInArray(item, array) {
    if (array.indexOf(item) === -1) {
      array.push(item);
    } else {
      array.splice(array.indexOf(item), 1);
    }
  }

  static handleize(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/\W+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }

  static findById(obj, id) {
    let i;
    let childObj;
    let result;

    if (id === obj.id) {
      return obj;
    }

    for (i = 0; i < Object.keys(obj).length; i += 1) {
      childObj = obj[Object.keys(obj)[i]];

      if (typeof childObj === 'object') {
        result = this.findById(childObj, id);
        if (result) {
          return result;
        }
      }
    }
    return false;
  }

  static randomMatColor(hue) {
    hue = hue || '400';
    const mainColors = [
      'red',
      'pink',
      'purple',
      'deepPurple',
      'indigo',
      'blue',
      'lightBlue',
      'cyan',
      'teal',
      'green',
      'lightGreen',
      'lime',
      'yellow',
      'amber',
      'orange',
      'deepOrange',
    ];
    const randomColor = mainColors[Math.floor(Math.random() * mainColors.length)];
    return colors[randomColor][hue];
  }

  static difference(object, base) {
    function changes(_object, _base) {
      return _.transform(_object, (result, value, key) => {
        if (!_.isEqual(value, _base[key])) {
          result[key] = _.isObject(value) && _.isObject(_base[key]) ? changes(value, _base[key]) : value;
        }
      });
    }

    return changes(object, base);
  }

  static EventEmitter = EventEmitter;

  static filterRecursive(data, predicate) {
    return !data
      ? null
      : data.reduce((list, entry) => {
        let clone = null;
        if (predicate(entry)) {
          clone = { ...entry };
        }
        if (entry.children != null) {
          const children = this.filterRecursive(entry.children, predicate);
          if (children.length > 0) {
            clone = { ...entry, children };
          }
        }

        if (clone) {
          list.push(clone);
        }
        return list;
      }, []);
  }
}

export default Utils;
