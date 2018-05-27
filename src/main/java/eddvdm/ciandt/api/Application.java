package eddvdm.ciandt.api;

import eddvdm.ciandt.api.domain.Transaction;
import eddvdm.ciandt.api.service.LegacyDataService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    /**
     * Only for debugging, to be removed.
     * @param ctx
     * @return
     */
//    @Bean
//    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
//        return args -> {
//            System.out.println("List of transactions ids:");
//
//            for (Transaction t : LegacyDataService.getTransactions()) {
//                System.out.println(t.getId());
//            }
//        };
//    }

}
