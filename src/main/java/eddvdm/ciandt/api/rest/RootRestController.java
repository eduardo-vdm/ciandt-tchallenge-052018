package eddvdm.ciandt.api.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * Root endpoint for working status tests only.
 */

@RestController
@RequestMapping(value = "")
public class RootRestController extends AbstractRestController {

    @GetMapping(value = "/v1", produces = {"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public
    @ResponseBody
    String index( HttpServletRequest request,
                         HttpServletResponse response) {
        return "";
    }

}
