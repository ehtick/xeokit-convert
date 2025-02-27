/**
 * @desc Provides info on the XKT generated by xeokit-convert.
 */
const XKT_INFO = {

    /**
     * The XKT version generated by xeokit-convert.
     *
     * This is the XKT version that's modeled by {@link XKTModel}, serialized
     * by {@link writeXKTModelToArrayBuffer}, and written by {@link convert2xkt}.
     *
     * * Current XKT version: **10**
     * * [XKT format specs](https://github.com/xeokit/xeokit-convert/blob/main/specs/index.md)
     *
     * @property xktVersion
     * @type {number}
     */
    xktVersion: 12
};

export {XKT_INFO};