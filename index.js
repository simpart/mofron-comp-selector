/**
 * @file mofron-comp-selector/index.js
 * @brief selector component for mofron
 * @license MIT
 */
const Grid   = require('mofron-layout-grid');
const comutl = mofron.util.common;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("mofron-comp-selector");
	    //this.shortForm("");
            
	    /* init config */
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.layout(new Grid());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    gridColumn (prm) {
        try {
            let set_ratio = [];
            for (let idx=0; idx < prm ;idx++) {
	        set_ratio.push(100/prm);
            }
	    this.layout({ modname:'Grid' }).ratio(set_ratio);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
}
/* end of file */
