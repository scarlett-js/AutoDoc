package com.autodoc.server.sms;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileInputStream;

@RestController
public class SmsController {

    @PostMapping("/verifyPhoneNumber")
    public String verifyPhoneNumber(@RequestParam String phoneNumber,
                                    @RequestParam String verificationCode) throws FirebaseAuthException {
        FirebaseAuth auth = FirebaseAuth.getInstance();

        // 전화번호 인증
//        AuthCredential credential = PhoneAuthProvider.getCredential(phoneNumber, verificationCode);
//        auth.signInWithCredential(credential);

        // 인증 성공 후 추가 로직 구현

        return "Phone number verified!";
    }

    /*

    @Value("${twilio.accountSid}")
    private String accountSid;

    @Value("${twilio.authToken}")
    private String authToken;

    @Value("${twilio.phoneNumber}")
    private String twilioPhoneNumber;

    @PostMapping("/sendSms")
    public String sendSms(@RequestParam String toPhoneNumber, @RequestParam String messageBody){
        Twilio.init(accountSid, authToken);
        toPhoneNumber = toPhoneNumber.substring(1, 11);
        Message message = Message.creator(
                new PhoneNumber("+82"+toPhoneNumber),
                new PhoneNumber(twilioPhoneNumber),
                messageBody)
                .create();
        return "SMS sent with SID : " + message.getSid();
    }
    */
}
