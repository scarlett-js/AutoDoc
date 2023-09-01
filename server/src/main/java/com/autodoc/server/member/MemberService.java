package com.autodoc.server.member;

import com.autodoc.server.auth.utils.CustomAuthorityUtils;
import com.autodoc.server.exception.BusinessLogicException;
import com.autodoc.server.exception.ExceptionCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService  {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public Member createMember(Member member){
        verifyExitsMember(member.getEmail());
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        Member response = memberRepository.save(member);

        return response;
    }

    public Member findMember(Long memberId){
        Member response = verifyMember(memberId);

        return response;
    }

//    public Member findMembers(){
//        return;
//    }

    public Member updateMember(Member member){
        Member response = verifyMember(member.getMemberId());

        return response;
    }

    public void deleteMember(long memberId){
        Member response = verifyMember(memberId);

        memberRepository.delete(response);

    }

    private Member verifyMember(Long memberId){
        Optional<Member> member = memberRepository.findById(memberId);

        if(member.isPresent())
            return member.get();

        throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
    }

    private void verifyExitsMember(String email){
        Optional<Member> member = memberRepository.findByEmail(email);

        if(member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    public Member verifyExitsEmail(String email){
        Optional<Member> member = memberRepository.findByEmail(email);

        return member.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_EXISTS));
    }

}
