package eddvdm.ciandt.api.rest;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

/*
 * Root endpoint for working status tests only.
 */

@RestController
@RequestMapping(value = "/")
public class RootController extends AbstractController {

    @RequestMapping(value = "")
    public String index() {
        return "Nothing here.";
    }

}
