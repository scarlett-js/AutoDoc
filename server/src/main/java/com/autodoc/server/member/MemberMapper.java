package com.autodoc.server.member;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post post);

    Member memberPatchTOMember(MemberDto.Patch patch);

    MemberDto.response memberToMemberResponse(Member member);
}
