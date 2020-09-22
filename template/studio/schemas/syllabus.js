import { GrDocumentTime } from 'react-icons/gr'

export default {
    name: 'syllabus',
    title: 'Syllabus',
    type: 'document',
    icon: GrDocumentTime,
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
            title: 'Lessons',
            name: 'lessons',
            type: 'array',
            of: [
                {
                    name: 'lesson',
                    title: 'Lesson',
                    type: 'object',
                    fields: [
                        {
                            title: 'Lesson Date',
                            name: 'date',
                            type: 'date',
                            options: {
                                dateFormat: 'MM-DD-YYYY',
                                calendarTodayLabel: 'today',
                            },
                        },
                        
                        {
                            name: 'document',
                            title: 'Lesson reference',
                            type: 'reference', 
                            to: {type: 'lesson'}
                        },
                    ],
                    preview: {
                        select: {
                            title: 'document.title',
                            date: 'date',
                            
                        },
                        prepare(selection) {
                            const {title, date} = selection
                            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

                            return {
                              title: new Date(date).toLocaleString('en-us', dateOptions),
                              subtitle: title
                            }
                          }
                    }
                }
                
                
                
            ],
        },
        
        
        
        
    ]
}