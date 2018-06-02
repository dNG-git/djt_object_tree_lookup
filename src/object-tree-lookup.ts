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
    public static exists(_object: object, nodePath: string) {
        let _return = true;

        // tslint:disable-next-line:no-any
        let objectPointer: any = _object;
        const nodePathElements = nodePath.split('.');

        for (const property of nodePathElements) {
            if (
                typeof objectPointer != 'object'
                || objectPointer === null
                || objectPointer[property] === undefined
               ) {
                _return = false;
                break;
            }

            objectPointer = objectPointer[property];
        }

        return _return;
    }
}
