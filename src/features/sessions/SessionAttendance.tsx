import { LiaClipboardListSolid } from 'react-icons/lia';
import Column from '../../ui/Column';
import Attender from '../../ui/Attender';

const members = [
    {
        id: '001',
        name: 'Jessy Pinkman',
        image: '/public/user.jpeg'
    },
    {
        id: '002',
        name: 'Walter White',
        image: '/public/user.jpeg'
    },
    {
        id: '003',
        name: 'Ghostafo Frieng',
        image: '/public/user.jpeg'
    }
]

export default function SessionAttendance(): JSX.Element {
    return (
        <Column className='p-6 bg-white rounded-md border sm:w-[90%] sm:mx-auto max-h-[80dvh] overflow-auto scroll-hidden'>
            <h2 className='text-xl font-thin flex justify-center items-center gap-3 mb-4'>
                <LiaClipboardListSolid className='text-2xl' />
                <span>
                    Attendance
                </span>
            </h2>

            <Column>
                {members.map((member) => <Attender key={member.id} name={member.name} image={member.image} />)}
                {members.map((member) => <Attender key={member.id} name={member.name} image={member.image} />)}
                {members.map((member) => <Attender key={member.id} name={member.name} image={member.image} />)}
                {members.map((member) => <Attender key={member.id} name={member.name} image={member.image} />)}
            </Column>
        </Column>
    )
}
