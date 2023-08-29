package com.autodoc.server.member;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-08-12T14:19:08+0900",
    comments = "version: 1.5.1.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.2.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostToMember(MemberDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( post.getEmail() );
        member.setPassword( post.getPassword() );
        member.setName( post.getName() );

        return member;
    }

    @Override
    public Member memberPatchTOMember(MemberDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Member member = new Member();

        member.setPassword( patch.getPassword() );
        member.setName( patch.getName() );
        member.setPhoneNumber( patch.getPhoneNumber() );
        member.setCompanyName( patch.getCompanyName() );
        member.setDepartment( patch.getDepartment() );
        member.setRankOfCompany( patch.getRankOfCompany() );
        member.setDailyExpense( patch.getDailyExpense() );
        member.setSignStamp( patch.getSignStamp() );

        return member;
    }

    @Override
    public MemberDto.response memberToMemberResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        String email = null;
        String name = null;
        String phoneNumber = null;
        String companyName = null;
        String department = null;
        String rankOfCompany = null;
        Integer dailyExpense = null;
        String signStamp = null;

        email = member.getEmail();
        name = member.getName();
        phoneNumber = member.getPhoneNumber();
        companyName = member.getCompanyName();
        department = member.getDepartment();
        rankOfCompany = member.getRankOfCompany();
        dailyExpense = member.getDailyExpense();
        signStamp = member.getSignStamp();

        MemberDto.response response = new MemberDto.response( email, name, phoneNumber, companyName, department, rankOfCompany, dailyExpense, signStamp );

        return response;
    }
}
