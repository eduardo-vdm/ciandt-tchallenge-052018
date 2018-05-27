package eddvdm.ciandt.api.rest;

/**
 * Every REST controller should extend this.
 * TODO: implement logging
 * TODO: implement error handling
 */
public class AbstractRestController {
    /**
     * Default page size for requested lists.
     */
    protected static final String DEFAULT_PAGE_SIZE = "100";
    /**
     * Default page number for requested lists.
     */
    protected static final String DEFAULT_PAGE_NUM = "0";
}
