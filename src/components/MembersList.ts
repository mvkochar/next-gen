type TMember = {
    id: number
    name: string
    position: string
    image: string
}

const MembersList:TMember[] = [
    {
        id: 1,
        name: 'John Smith',
        position: 'Co-Founder & CEO',
        image: '/images/members/1.png'
    },

    {
        id: 2,
        name: 'Sarah Adams',
        position: 'Head of Design',
        image: '/images/members/2.png'
    },

    {
        id: 3,
        name: 'Emily Johnson',
        position: 'Lead Web Developer',
        image: '/images/members/3.png'
    },

    {
        id: 4,
        name: 'William Lee',
        position: 'Lead Backend Developer',
        image: '/images/members/4.png'
    }
]

export default MembersList 