import Image from 'next/image'
import React from 'react'
import { TeamMemberModel } from '../../data/teamData';

const TeamMember = (props: any) => {
    const member: TeamMemberModel = props.member;
    return (
        <div className="flex flex-col">
            <Image src={member.image} alt={member.name} width={337} height={382} objectFit="cover" objectPosition="top center" />
            <p className="text-defi-blue font-xl mt-4 text-2xl">{member.name}</p>
            <p className="mb-3 mt-1 text-base">{member.role}</p>
            <div className="flex">
                {member.linkedIn !== '' && <a className="mr-4" href={member.linkedIn}>
                    <Image className="cursor-pointer" src="/linkedin.svg" width={20} height={20} alt="linked profile link" />
                </a>}
                {member.twitter !== '' && <a className="mr-4" href={member.twitter}>
                    <Image className="cursor-pointer" src="/twitter.svg" width={20} height={20} alt="twitter profile link" />
                </a>}
                {member.github !== '' && <a href={member.github}>
                    <Image className="cursor-pointer" src="/github.svg" width={20} height='20' alt="github profile link" />
                </a>}
            </div>
        </div>
    )
}

export default TeamMember
