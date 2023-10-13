package com.autodoc.server.member;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/members")
@Validated
@Slf4j
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public MemberController(MemberService memberService, MemberMapper memberMapper) {
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @PostMapping
    public ResponseEntity createMember(@Valid @RequestBody MemberDto.Post requestBody){

        Member response = memberService.createMember(memberMapper.memberPostToMember(requestBody));

        return new ResponseEntity<>(memberMapper.memberToMemberResponse(response), HttpStatus.CREATED);
    }

    @GetMapping("/me")
    public ResponseEntity getMember( Authentication authentication){ //https://hudi.blog/spring-argument-resolver/ 참고하여 수정 필요
//        Authentication debugAuth = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getPrincipal().toString();
        Member response = memberService.verifyExitsEmail(email);

        return new ResponseEntity(memberMapper.memberToMemberResponse(response), HttpStatus.OK);
    }

//    @GetMapping
//    public ResponseEntity getMembers(){
//
//
//        return new ResponseEntity(HttpStatus.OK);
//    }

    @PatchMapping("/{member-id}")
    public ResponseEntity updateMember(@PathVariable long memberId,
                                       @RequestBody MemberDto.Patch requestBody){
        requestBody.setId(memberId);
        Member response = memberService.updateMember(memberMapper.memberPatchTOMember(requestBody));

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable long memberId){
        memberService.deleteMember(memberId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


}
