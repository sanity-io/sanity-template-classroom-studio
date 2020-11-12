import { MdPerson } from 'react-icons/md'

export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    icon: MdPerson,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            title: 'Biography',
            name: 'biography',
            type: 'array',
            of: [{type: 'block'}]
        }
        
    ]
}

