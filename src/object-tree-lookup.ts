/**
 * direct JavaScript Toolbox
 * All-in-one toolbox to provide more reusable JavaScript features
 *
 * (C) direct Netware Group - All rights reserved
 * https://www.direct-netware.de/redirect?djt;object_tree_lookup
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 *
 * https://www.direct-netware.de/redirect?licenses;mpl2
 *
 * @license Mozilla Public License, v. 2.0
 */

/**
 * "ObjectTreeLookup" supports validation and deep object property
 * access.
 *
 * @author    direct Netware Group
 * @copyright (C) direct Netware Group - All rights reserved
 * @package   djt-object-tree-lookup
 * @since     v1.0.0
 * @license   https://www.direct-netware.de/redirect?licenses;mpl2
 *            Mozilla Public License, v. 2.0
 */
export default class ObjectTreeLookup {
    /**
     * Returns true if the given node path exists for the object.
     *
     * @param _object Object to look up
     * @param nodePath Node path to validate
     *
     * @return True if the node path exist
     * @since  v1.0.0
     */
    public static exists(_object: unknown, nodePath: string) {
        let _return = true;

        const nodePathElements = nodePath.split('.');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let objectPointer: any = _object;

        for (const property of nodePathElements) {
            if (
                typeof objectPointer != 'object'
                || objectPointer === null
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                || objectPointer[property] === undefined
               ) {
                _return = false;
                break;
            }

            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            objectPointer = objectPointer[property];
        }

        return _return;
    }

    /**
     * Returns the value of the given node path for the object.
     *
     * @param _object Object to look up
     * @param nodePath Node path to validate
     *
     * @return Value of the node path
     * @since  v1.1.0
     */
    public static get(_object: unknown, nodePath: string) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let _return: any = _object;

        const nodePathElements = nodePath.split('.');

        for (const property of nodePathElements) {
            if (
                typeof _return != 'object'
                || _return === null
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                || _return[property] === undefined
               ) {
                throw new Error('Node path not found for the given object');
            }

            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            _return = _return[property];
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return _return;
    }
}
