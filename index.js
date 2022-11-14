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
	    this.shortForm("gridColumn");
            
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

    child (prm, idx) {
        try {
	    if (true === Array.isArray(prm)) {
                for (let cidx in prm) {
                    this.child(prm[cidx]);
		}
		return;
	    } else if (comutl.iscmp(prm)) {
                let set_chd = new mofron.class.Component(prm);
                super.child(set_chd, idx);
                return;
            }
            return super.child(prm, idx);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
}
/* end of file */
