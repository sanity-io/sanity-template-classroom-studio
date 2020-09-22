import { BiPencil } from 'react-icons/bi'

export default {
    name: 'lesson',
    title: 'Lessons',
    type: 'document',
    icon: BiPencil,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // // will be ignored if slugify is set
                slugify: input => input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, 200),
                isUnique: proposedSlug => true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 5
        },
        {
            title: 'Lesson Content',
            name: 'content',
            type: 'array',
            of: [{type: 'block'}]
        },
        
    ],
    preview: {
        select: {
            title: 'title',
        }
    }
}