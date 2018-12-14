import Divider from './Divider';
import ListItem from './ListItem';
import DomComponent from './DomComponent';
import { next, prev,  } from '../Helpers/Value';
import { isObject,  } from '../Helpers/Functions';

export default class List extends DomComponent {

    /**
     * This class is used to add a digit to the clock face. This class is called
     * `List` because it contains a list of `ListItem`'s which are used to
     * create flip effects. In the context of FlipClock.js a `List` represents
     * one single digit.
     *
     * @class List
     * @extends DomComponent
     * @param {Number|String|Object} label - The active value. If an object, it
     * is assumed that it is the instance attributes.
     * @param {object|undefined} [attributes] - The instance attributes.
     */
    constructor(value, attributes) {
        super(Object.assign({
            value: value,
            items: [],
        }, isObject(value) ? value : null, attributes));
    }

    /**
     * Get the `value` attribute.
     *
     * @return {(Number|String)} - The `value` attribute.
     */
    get value() {
        return this.$value;
    }

    /**
     * Set the `value` attribute.
     *
     * @param  {array} value - The `value` attribute.
     * @return {(Number|String)} - The `value` attribute.
     */
    set value(value) {
        this.$value = value;
    }

    /**
     * Get the `items` attribute.
     *
     * @return {(Number|String)} - The `items` attribute.
     */
    get items() {
        return this.$items;
    }

    /**
     * Set the `items` attribute.
     *
     * @param  {array} value - The `items` attribute.
     * @return {(Number|String)} - The `items` attribute.
     */
    set items(value) {
        this.$items = value;
    }

    /**
     * Helper method to instantiate a new `ListItem`.
     *
     * @param  {(Number|String)} value - The `ListItem` value.
     * @param  {(Object|undefined)} [attributes] - The instance attributes.
     * @return {ListItem} - The instantiated `ListItem`.
     */
    createListItem(value, attributes) {
        const item = new ListItem(value, Object.assign({
            theme: this.theme,
            language: this.language
        }, attributes));

        this.$items.push(item);

        return item;
    }

}
